#!/usr/bin/env node

/**
 * generate-manifest.js
 *
 * Scans the articles/ directory, reads each sub-folder's README.md
 * for YAML-style frontmatter, and writes articles/manifest.json.
 *
 * README.md is the single source of truth for all article settings:
 *   - metadata (title, date, subtitle, tags, etc.)
 *   - focus lines (策展线索) for resource articles
 *   - files list with displayName, type, download flags
 *
 * Usage:
 *   node scripts/generate-manifest.js
 */

const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'articles');
const MANIFEST_PATH = path.join(ARTICLES_DIR, 'manifest.json');

/* ── YAML frontmatter parser (handles our specific format) ── */

function parseValue(str) {
    str = str.trim();
    if (str === 'true') return true;
    if (str === 'false') return false;
    // Remove surrounding quotes
    if ((str.startsWith('"') && str.endsWith('"')) ||
        (str.startsWith("'") && str.endsWith("'"))) {
        return str.slice(1, -1);
    }
    return str;
}

function parseFrontmatter(text) {
    var match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};

    var meta = {};
    var lines = match[1].split(/\r?\n/);
    var i = 0;

    while (i < lines.length) {
        var line = lines[i];

        // Skip blank lines
        if (!line.trim()) { i++; continue; }

        // Match top-level key: value
        var kvMatch = line.match(/^(\w[\w-]*)\s*:\s*(.*)/);
        if (!kvMatch) { i++; continue; }

        var key = kvMatch[1];
        var inlineVal = kvMatch[2].trim();

        // Look ahead: is the next line an array item?
        if (i + 1 < lines.length && /^  - /.test(lines[i + 1])) {
            var items = [];
            i++;
            while (i < lines.length && /^  - /.test(lines[i])) {
                var itemContent = lines[i].replace(/^  - /, '');
                // Check if this is an object item (key: value format)
                var objKv = itemContent.match(/^(\w[\w-]*)\s*:\s*(.*)/);
                if (objKv) {
                    var obj = {};
                    obj[objKv[1]] = parseValue(objKv[2]);
                    i++;
                    // Collect continuation lines (indented deeper)
                    while (i < lines.length && /^    \w/.test(lines[i])) {
                        var subKv = lines[i].match(/^\s+(\w[\w-]*)\s*:\s*(.*)/);
                        if (subKv) {
                            obj[subKv[1]] = parseValue(subKv[2]);
                        }
                        i++;
                    }
                    items.push(obj);
                } else {
                    // Simple string item
                    items.push(parseValue(itemContent));
                    i++;
                }
            }
            meta[key] = items;
        } else if (key === 'tags') {
            // Comma-separated tags
            meta[key] = inlineVal.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
            i++;
        } else {
            meta[key] = parseValue(inlineVal);
            i++;
        }
    }

    return meta;
}

// Export for use by other scripts
module.exports = { generate: generate, parseFrontmatter: parseFrontmatter };

function generate() {
    var entries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });
    var articles = [];

    entries.forEach(function (entry) {
        if (!entry.isDirectory()) return;

        var readmePath = path.join(ARTICLES_DIR, entry.name, 'README.md');
        if (!fs.existsSync(readmePath)) return;

        var text = fs.readFileSync(readmePath, 'utf-8');
        var meta = parseFrontmatter(text);

        var article = {
            slug: entry.name,
            title: meta.title || entry.name,
            date: meta.date || '',
            subtitle: meta.subtitle || undefined,
            kind: meta.kind || undefined,
            theme: meta.theme || undefined,
            label: meta.label || undefined,
            tags: Array.isArray(meta.tags) ? meta.tags : [],
            summary: meta.summary || '',
            math: meta.math === true ? true : undefined
        };

        // Include focus and files for resource articles
        if (Array.isArray(meta.focus) && meta.focus.length) {
            article.focus = meta.focus;
        }
        if (Array.isArray(meta.files) && meta.files.length) {
            article.files = meta.files;
        }

        articles.push(article);
    });

    articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    // Clean undefined values for compact JSON
    var clean = JSON.parse(JSON.stringify({ articles: articles }));
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(clean, null, 2), 'utf-8');
    console.log('manifest.json generated – ' + articles.length + ' article(s)');

    // Generate content.html and files.json for resource articles
    articles.forEach(function (article) {
        if (article.kind !== 'resource' || !article.files || !article.files.length) return;
        var dir = path.join(ARTICLES_DIR, article.slug);
        fs.writeFileSync(path.join(dir, 'files.json'), JSON.stringify(article.files, null, 2), 'utf-8');
        fs.writeFileSync(path.join(dir, 'content.html'), buildContentHtml(article), 'utf-8');
    });
}

/* ── Build resource content.html from article metadata ── */

function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildContentHtml(a) {
    var files = a.files || [];
    var focus = a.focus || [];
    var slug = a.slug;
    var downloadFiles = files.filter(function (f) { return f.download; });
    var mdCount = files.filter(function (f) { return /\.md$/i.test(f.name); }).length;

    var p = [];
    p.push('<div class="resource-story theme-' + escHtml(a.theme || '') + '">');

    // Intro
    p.push('  <section class="resource-intro-panel">');
    p.push('    <span class="resource-kicker">' + escHtml(a.label || '') + '</span>');
    p.push('    <h2>' + escHtml(a.subtitle || '') + '</h2>');
    p.push('    <p>' + escHtml(a.summary || '') + '</p>');
    p.push('  </section>');

    // Metrics
    p.push('  <section class="resource-metric-grid">');
    p.push('    <article class="resource-metric-card"><span>资料数量</span><strong>' + files.length + '</strong></article>');
    p.push('    <article class="resource-metric-card"><span>Markdown</span><strong>' + mdCount + '</strong></article>');
    p.push('    <article class="resource-metric-card"><span>下载项</span><strong>' + downloadFiles.length + '</strong></article>');
    p.push('  </section>');

    // Download shelf
    if (downloadFiles.length > 0) {
        p.push('  <section class="resource-download-shelf">');
        p.push('    <div class="resource-section-head"><span>离线资料</span><h3>这些文件更适合直接下载保存</h3></div>');
        p.push('    <div class="download-shelf-grid">');
        downloadFiles.forEach(function (f) {
            var href = 'articles/' + encodeURIComponent(slug) + '/files/' + encodeURIComponent(f.name);
            p.push('      <a class="download-shelf-item" href="' + href + '" download>');
            p.push('        <span class="download-shelf-label">开卷资料</span>');
            p.push('        <strong>' + escHtml(f.displayName) + '</strong>');
            p.push('        <span class="download-shelf-action">下载</span>');
            p.push('      </a>');
        });
        p.push('    </div>');
        p.push('  </section>');
    }

    // Focus cards
    if (focus.length > 0) {
        p.push('  <section class="resource-focus-grid">');
        p.push('    <div class="resource-section-head"><span>策展线索</span><h3>这组资料该如何被阅读</h3></div>');
        p.push('    <div class="resource-focus-cards">');
        focus.forEach(function (text, i) {
            p.push('      <article class="resource-focus-card">');
            p.push('        <span class="resource-focus-index">0' + (i + 1) + '</span>');
            p.push('        <p>' + escHtml(text) + '</p>');
            p.push('      </article>');
        });
        p.push('    </div>');
        p.push('  </section>');
    }

    // File grid
    p.push('  <section class="resource-index-section">');
    p.push('    <div class="resource-section-head"><span>目录</span><h3>按主题重新排好的入口</h3></div>');
    p.push('    <div class="resource-file-grid">');
    files.forEach(function (f) {
        var isDL = f.download;
        var isMdOrHtml = /\.(md|html)$/i.test(f.name);
        var href = 'articles/' + encodeURIComponent(slug) + '/files/' + encodeURIComponent(f.name);
        p.push('      <article class="resource-file-card' + (isDL ? ' has-download' : '') + '">');
        p.push('        <div class="resource-file-meta">');
        p.push('          <span class="resource-file-type">' + escHtml(f.type || '') + '</span>');
        if (isDL) p.push('          <span class="resource-pill">可下载</span>');
        p.push('        </div>');
        p.push('        <h3>' + escHtml(f.displayName) + '</h3>');
        p.push(isDL
            ? '        <p>这是适合考前快速检索的下载型资料，建议离线保存，用于开卷场景下的高频查阅。</p>'
            : '        <p>围绕"' + escHtml(f.displayName) + '"展开，属于"' + escHtml(a.label || '') + '"这条知识线上的一个节点。</p>');
        p.push('        <div class="resource-file-actions">');
        if (isMdOrHtml) {
            p.push('          <a class="resource-action-link resource-read-link" href="javascript:void(0)" data-file="' + escHtml(f.name) + '">阅读</a>');
        } else {
            p.push('          <a class="resource-action-link" href="' + href + '" target="_blank" rel="noopener">在线查看</a>');
        }
        if (isDL) {
            p.push('          <a class="resource-action-link" href="' + href + '" download>下载</a>');
        }
        p.push('        </div>');
        p.push('      </article>');
    });
    p.push('    </div>');
    p.push('  </section>');
    p.push('</div>');

    return p.join('\n');
}

generate();
