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
}

generate();
