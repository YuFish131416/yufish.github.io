(function () {
    'use strict';

    var MANIFEST_URL = 'articles/manifest.json';
    var articlesCache = null;
    var articleContentCache = {};

    window.ArticleLoader = {

        /**
         * Load all articles from manifest.json (sorted newest first).
         */
        getArticles: async function () {
            if (articlesCache) return articlesCache;

            try {
                var response = await fetch(MANIFEST_URL);
                if (!response.ok) throw new Error('manifest load failed');
                var data = await response.json();
                articlesCache = (data.articles || []).sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date);
                });
                return articlesCache;
            } catch (e) {
                console.warn('ArticleLoader: could not load manifest –', e);
                return [];
            }
        },

        /**
         * Load a single article's metadata + content by slug.
         * Resource articles with files in manifest skip content fetch.
         * Plain articles try content.md first, then content.html.
         */
        getArticle: async function (slug) {
            if (articleContentCache[slug]) return articleContentCache[slug];

            var articles = await this.getArticles();
            var meta = articles.find(function (a) { return a.slug === slug; });
            if (!meta) throw new Error('Article not found in manifest');

            // Resource articles: rendered dynamically from manifest metadata
            if (meta.kind === 'resource' && Array.isArray(meta.files) && meta.files.length > 0) {
                var result = { meta: meta, content: '', isHtml: false, isResource: true };
                articleContentCache[slug] = result;
                return result;
            }

            // Try markdown first
            var mdUrl = 'articles/' + encodeURIComponent(slug) + '/content.md';
            var response = await fetch(mdUrl);

            if (response.ok) {
                var content = await response.text();
                var result = { meta: meta, content: content, isHtml: false };
                articleContentCache[slug] = result;
                return result;
            }

            // Fallback to HTML
            var htmlUrl = 'articles/' + encodeURIComponent(slug) + '/content.html';
            var htmlResponse = await fetch(htmlUrl);

            if (htmlResponse.ok) {
                var htmlContent = await htmlResponse.text();
                var result2 = { meta: meta, content: htmlContent, isHtml: true };
                articleContentCache[slug] = result2;
                return result2;
            }

            throw new Error('Article content not found');
        },

        /**
         * Load a sub-file from articles/<slug>/files/<filename>.
         * Returns { content, isHtml, isMd, filename }.
         */
        getSubFile: async function (slug, filename) {
            var base = 'articles/' + encodeURIComponent(slug) + '/files/';
            var url = base + encodeURIComponent(filename);
            var resp = await fetch(url);
            if (!resp.ok) throw new Error('Sub-file not found: ' + filename);

            var content = await resp.text();
            var isMd = /\.md$/i.test(filename);
            var isHtml = /\.html$/i.test(filename);
            return { content: content, isHtml: isHtml, isMd: isMd, filename: filename };
        }
    };
})();
