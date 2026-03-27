#!/usr/bin/env node

/**
 * sync-resources.js
 *
 * Copies resource files INTO articles/<slug>/files/ so the site is
 * fully self-contained (no dependency on resources/).
 *
 * README.md in each article folder is the single source of truth for
 * metadata and settings. This script only handles file copying and
 * updates the files section in README.md.
 *
 * .txt files are converted to .md during copy.
 *
 * Usage: node scripts/sync-resources.js
 */

const fs = require('fs');
const path = require('path');
const { parseFrontmatter } = require('./generate-manifest.js');

const RESOURCES_DIR = path.join(__dirname, '..', 'resources', 'already_added');
const ARTICLES_DIR = path.join(__dirname, '..', 'articles');

/* ======================================================
   Folder → slug mapping (minimal config)
   ====================================================== */
const FOLDER_MAP = {
  '腾讯面试': 'tencent-interview-ledger',
  'CS5187': 'vision-and-image-atlas',
  'CS5188': 'vr-interface-notebook',
  'CS5222': 'network-open-book-manual',
  'CS5351': 'software-engineering-atelier',
  'CS5481': 'data-engineering-field-notes',
  'CS5491': 'ai-cognition-archive',
  'IS5313': 'digital-value-and-mis-notes'
};

/* ======================================================
   Helpers
   ====================================================== */

function isDownloadPriority(filename) {
  return /开卷|查词表|参考指南/.test(filename);
}

function fileType(filename) {
  if (filename.endsWith('.html')) return 'HTML 文档';
  if (filename.endsWith('.md')) return 'Markdown 笔记';
  if (filename.endsWith('.txt')) return '文本记录';
  if (filename.endsWith('.pdf')) return 'PDF 文档';
  return '资料文件';
}

/** Return the destination filename (txt→md conversion) */
function destFilename(filename) {
  if (filename.endsWith('.txt')) return filename.replace(/\.txt$/, '.md');
  return filename;
}

function cleanDisplayName(filename, folder) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(new RegExp('^' + folder.replace(/[.*+?^${}()|[\]\\]/g, '\$&') + '\\s*'), '')
    .replace(/^[-_·]\s*/, '')
    .trim() || filename;
}

/** Convert plain-text interview transcript into markdown */
function txtToMarkdown(text, filename) {
  var title = filename.replace(/\.txt$/, '');
  var lines = text.split(/\r?\n/);
  var md = ['# ' + title, ''];
  var inAnswer = false;

  lines.forEach(function (raw) {
    var line = raw.trim();
    if (!line) { md.push(''); return; }

    var qMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (qMatch) {
      md.push('## ' + qMatch[1] + '. ' + qMatch[2]);
      inAnswer = false;
      return;
    }

    if (/^回答[：:]/.test(line)) {
      md.push('');
      md.push('> **回答**');
      md.push('>');
      md.push('> ' + line.replace(/^回答[：:]\s*/, ''));
      inAnswer = true;
      return;
    }

    if (/^(ps|PS|Ps)[：:]/.test(line)) {
      md.push('');
      md.push('> *' + line + '*');
      inAnswer = false;
      return;
    }

    if (/^(Q|A)[：:]/.test(line)) {
      md.push('**' + line.charAt(0) + '**: ' + line.slice(2).trim());
      return;
    }

    if (inAnswer) {
      md.push('> ' + line);
    } else {
      md.push(line);
    }
  });

  return md.join('\n');
}

/* ======================================================
   Build updated README.md with files section
   ====================================================== */
function updateReadmeFiles(readmePath, folder, destFiles) {
  var text = fs.readFileSync(readmePath, 'utf-8');
  var meta = parseFrontmatter(text);

  // Build new files YAML block
  var filesBlock = destFiles.map(function (df, i) {
    var name = cleanDisplayName(destFiles[i], folder);
    var isDL = isDownloadPriority(destFiles[i]);
    var type = fileType(df);
    return '  - name: "' + df + '"\n' +
           '    displayName: "' + name + '"\n' +
           '    type: "' + type + '"\n' +
           '    download: ' + isDL;
  }).join('\n');

  // Reconstruct frontmatter preserving all existing fields
  var match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return;

  // Remove old files: block from frontmatter
  var fmLines = match[1].split(/\r?\n/);
  var newLines = [];
  var i = 0;
  var inFilesBlock = false;
  while (i < fmLines.length) {
    if (/^files\s*:/.test(fmLines[i])) {
      inFilesBlock = true;
      i++;
      // Skip all sub-lines of files block
      while (i < fmLines.length && /^  /.test(fmLines[i])) { i++; }
      continue;
    }
    if (!inFilesBlock || !/^  /.test(fmLines[i])) {
      inFilesBlock = false;
      newLines.push(fmLines[i]);
    }
    i++;
  }

  // Append new files block
  newLines.push('files:');
  newLines.push(filesBlock);

  var newFrontmatter = '---\n' + newLines.join('\n') + '\n---\n';
  fs.writeFileSync(readmePath, newFrontmatter, 'utf-8');
}

/* ======================================================
   Sync one collection
   ====================================================== */
function syncCollection(folder, slug) {
  var srcDir = path.join(RESOURCES_DIR, folder);
  if (!fs.existsSync(srcDir)) {
    console.warn('  SKIP ' + folder + ' — directory not found');
    return;
  }

  var files = fs.readdirSync(srcDir)
    .filter(function (f) {
      return !f.startsWith('.') && f !== 'README.md' &&
        fs.statSync(path.join(srcDir, f)).isFile();
    })
    .sort();

  if (!files.length) {
    console.warn('  SKIP ' + folder + ' — no files');
    return;
  }

  var destDir = path.join(ARTICLES_DIR, slug);
  var filesDir = path.join(destDir, 'files');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  if (!fs.existsSync(filesDir)) fs.mkdirSync(filesDir, { recursive: true });

  // Copy files into articles/<slug>/files/, converting txt→md
  var destFiles = [];
  files.forEach(function (f) {
    var srcPath = path.join(srcDir, f);
    var df = destFilename(f);
    destFiles.push(df);
    var dstPath = path.join(filesDir, df);

    if (f.endsWith('.txt')) {
      var text = fs.readFileSync(srcPath, 'utf-8');
      var md = txtToMarkdown(text, f);
      fs.writeFileSync(dstPath, md, 'utf-8');
      console.log('    txt→md: ' + f + ' → ' + df);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  });

  // Update README.md files section
  var readmePath = path.join(destDir, 'README.md');
  if (fs.existsSync(readmePath)) {
    updateReadmeFiles(readmePath, folder, destFiles);
  }

  console.log('  ✓ ' + slug + ' — ' + files.length + ' file(s) copied');
}

/* ======================================================
   Main
   ====================================================== */
console.log('sync-resources: syncing to articles/\n');

Object.keys(FOLDER_MAP).forEach(function (folder) {
  syncCollection(folder, FOLDER_MAP[folder]);
});

// Regenerate manifest from updated README.md files
console.log('');
var gen = require('./generate-manifest.js');
gen.generate();
