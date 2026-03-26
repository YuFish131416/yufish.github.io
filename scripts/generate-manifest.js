#!/usr/bin/env node

/**
 * generate-manifest.js
 *
 * Scans the articles/ directory, reads each sub-folder's README.md
 * for YAML-style frontmatter, and writes articles/manifest.json.
 *
 * Usage:
 *   node scripts/generate-manifest.js
 */

const fs = require('fs');
const path = require('path');

const ARTICLES_DIR = path.join(__dirname, '..', 'articles');
const MANIFEST_PATH = path.join(ARTICLES_DIR, 'manifest.json');

function parseFrontmatter(text) {
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};

    const meta = {};
    match[1].split(/\r?\n/).forEach(function (line) {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        var value = line.slice(idx + 1).trim();

        if (key === 'tags') {
            value = value.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
        }

        meta[key] = value;
    });

    return meta;
}

// Export for use by sync-resources.js
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

        articles.push({
            slug: entry.name,
            title: meta.title || entry.name,
            date: meta.date || '',
            subtitle: meta.subtitle || undefined,
            kind: meta.kind || undefined,
            theme: meta.theme || undefined,
            label: meta.label || undefined,
            tags: Array.isArray(meta.tags) ? meta.tags : [],
            summary: meta.summary || ''
        });
    });

    articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    fs.writeFileSync(MANIFEST_PATH, JSON.stringify({ articles: articles }, null, 2), 'utf-8');
    console.log('manifest.json generated – ' + articles.length + ' article(s)');
}

generate();
