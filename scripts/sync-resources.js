#!/usr/bin/env node

/**
 * sync-resources.js
 *
 * Copies resource files INTO articles/<slug>/files/ so the site is
 * fully self-contained (no dependency on resources/).
 *
 * For each collection:
 *   - README.md       (frontmatter for manifest)
 *   - content.html    (rich layout; all links point to articles/<slug>/files/)
 *   - files/          (actual resource files copied here)
 *   - files.json      (file index for the SPA to enumerate sub-content)
 *
 * .txt files are converted to .md during copy.
 *
 * Usage: node scripts/sync-resources.js
 */

const fs = require('fs');
const path = require('path');

const RESOURCES_DIR = path.join(__dirname, '..', 'resources');
const ARTICLES_DIR = path.join(__dirname, '..', 'articles');

/* ======================================================
   Collection definitions – one entry per resource folder
   ====================================================== */
const COLLECTIONS = {
  '腾讯面试': {
    slug: 'tencent-interview-ledger',
    title: '面试回声录：把问题打磨成方法',
    subtitle: '真正有分量的回答，不是背诵技术名词，而是把项目讲成一套可验证的工程判断。',
    summary: '围绕密码学、安全系统、Redis、微服务与 AI 协作流程的腾讯面试复盘，整理出更可信的表达结构。',
    kind: 'resource', theme: 'career', label: '面试与表达',
    tags: ['面经', '后端', '安全', '系统设计', '职业成长'],
    focus: [
      '从加密算法推导到 Redis 集群，每一道题都以「项目实证」为主线。',
      '二面更侧重顶层设计与容灾思维。',
      '整理后更适合作为面试复盘模板。'
    ]
  },
  'CS5187': {
    slug: 'vision-and-image-atlas',
    title: '视觉与图像：把像素读成结构',
    subtitle: '从图像形成到视觉理解，这组笔记更像一册被折叠过的观察学地图。',
    summary: '围绕 Vision & Image 课程整理的三部分复习资料，重组为更清晰的知识路径。',
    kind: 'resource', theme: 'vision', label: '视觉计算',
    tags: ['计算机视觉', '图像处理', '课程笔记', 'CS5187'],
    focus: [
      '三部分按低层视觉 → 特征匹配 → 三维重建组织。',
      '期中偏滤波与边缘，期末偏投影与立体视觉。',
      '适合按知识弧线串联复习。'
    ]
  },
  'CS5188': {
    slug: 'vr-interface-notebook',
    title: '沉浸式界面札记：在空间里安放交互',
    subtitle: 'VR 不只是设备参数，更是一整套关于感知、姿态与反馈的空间语言。',
    summary: 'VR 课程模块提纲与 HTML 资料的整理版，适合按模块梳理输入、输出与系统架构。',
    kind: 'resource', theme: 'vr', label: 'VR / HCI',
    tags: ['VR', 'HCI', '课程笔记', 'CS5188'],
    focus: [
      '五个模块从输入设备 → 图形显示 → 声音触觉 → 系统架构递进。',
      'HTML 资料包含完整术语表与简答题考点。',
      '适合按模块逐步理解 VR 交互全景。'
    ]
  },
  'CS5222': {
    slug: 'network-open-book-manual',
    title: '网络开卷手册：在协议栈里建立索引',
    subtitle: '开卷考试真正考的不是记忆，而是你能否在短时间内找到正确的结构入口。',
    summary: '计算机网络课程的开卷参考、查词表与题型总结，已整理为适合查阅和下载的资料库。',
    kind: 'resource', theme: 'network', label: '网络与系统',
    tags: ['计算机网络', '开卷资料', '考试策略', 'CS5222'],
    focus: [
      '重点开卷资料提供直接下载，便于离线保存。',
      '把题型总结、参考指南与查词表拆成不同用途的入口。',
      '适合考前建立"去哪找答案"的快速索引。'
    ]
  },
  'CS5351': {
    slug: 'software-engineering-atelier',
    title: '软件工程工作台：把方法论落回团队现场',
    subtitle: '需求、评审、敏捷、技术债，本质上都在回答同一个问题：团队如何稳定地产生好软件。',
    summary: '软件工程课程多章节复习资料的重编版，按过程模型、代码评审、需求工程与技术债分类整理。',
    kind: 'resource', theme: 'engineering', label: '软件工程',
    tags: ['软件工程', '技术债', '代码评审', '课程笔记', 'CS5351'],
    focus: [
      '开卷资料覆盖第二到第六章，均可下载。',
      '从过程模型到技术债，完整还原方法论线索。',
      '期末复习整理聚焦 Agile/Scrum 全景。'
    ]
  },
  'CS5481': {
    slug: 'data-engineering-field-notes',
    title: '数据工程野外记录：让数据真正流动起来',
    subtitle: '好的数据工程不是堆砌工具，而是让采集、转换、存储与业务逻辑之间的摩擦尽量变小。',
    summary: 'Data Engineering 期末复习笔记整理版，突出数据管道、复用组件与业务联动。',
    kind: 'resource', theme: 'data', label: '数据工程',
    tags: ['数据工程', '数据管道', '课程笔记', 'CS5481'],
    focus: [
      '12 讲内容压缩为一份结构化笔记。',
      '覆盖数据获取、预处理、可视化、查询与推荐。',
      '适合快速重建数据工程知识体系。'
    ]
  },
  'CS5491': {
    slug: 'ai-cognition-archive',
    title: 'AI 认知档案：搜索、逻辑、概率与学习',
    subtitle: '我更喜欢把 AI 看作一条连续光谱，而不是几个彼此割裂的章节标题。',
    summary: '人工智能课程多份提纲与知识梳理的整合版，覆盖搜索、逻辑推理、概率模型与机器学习。',
    kind: 'resource', theme: 'ai', label: 'AI / Machine Learning',
    tags: ['人工智能', '机器学习', '知识图谱', '课程笔记', 'CS5491'],
    focus: [
      '把搜索、推理、概率与学习放在同一知识弧线上理解。',
      '适合从算法原理回到更抽象的 AI 建模能力。',
      '多份资料已经按学习顺序重新排列。'
    ]
  },
  'IS5313': {
    slug: 'digital-value-and-mis-notes',
    title: '数字价值地图：把系统、组织与商业连起来',
    subtitle: '信息系统的意义，往往不在系统本身，而在它如何改变组织流动、价值创造与决策节奏。',
    summary: '管理信息系统课程资料整理版，聚焦数字化转型、AI 决策支持与企业价值链。',
    kind: 'resource', theme: 'business', label: '商业与信息系统',
    tags: ['管理信息系统', '数字化转型', 'AI 应用', '课程笔记', 'IS5313'],
    focus: [
      '结合 AI 商业化案例理解信息系统价值。',
      '开卷查词表提供中英术语速查。',
      '期中知识梳理覆盖 MIS 核心概念与数字战略。'
    ]
  }
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
    .replace(new RegExp('^' + folder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*'), '')
    .replace(/^[-_·]\s*/, '')
    .trim() || filename;
}

/** Build href relative to site root pointing into articles/<slug>/files/ */
function encodeArticleFilePath(slug, destName) {
  return 'articles/' + encodeURIComponent(slug) + '/files/' + encodeURIComponent(destName);
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

    // Detect numbered question lines like "1.   ..." or "  1.   ..."
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
   Build HTML content for a collection
   ====================================================== */

function buildContentHtml(cfg, folder, files, destFiles) {
  var downloadFiles = [];
  var downloadDest = [];
  files.forEach(function (f, i) {
    if (isDownloadPriority(f)) {
      downloadFiles.push(f);
      downloadDest.push(destFiles[i]);
    }
  });
  var mdCount = destFiles.filter(function (f) { return f.endsWith('.md'); }).length;
  var htmlCount = destFiles.filter(function (f) { return f.endsWith('.html'); }).length;

  var parts = [];

  // Intro panel
  parts.push(
    '<div class="resource-story theme-' + cfg.theme + '">',
    '  <section class="resource-intro-panel">',
    '    <span class="resource-kicker">' + cfg.label + '</span>',
    '    <h2>' + cfg.subtitle + '</h2>',
    '    <p>' + cfg.summary + '</p>',
    '  </section>'
  );

  // Metric grid
  parts.push(
    '  <section class="resource-metric-grid">',
    '    <article class="resource-metric-card"><span>资料数量</span><strong>' + files.length + '</strong></article>',
    '    <article class="resource-metric-card"><span>Markdown</span><strong>' + mdCount + '</strong></article>',
    '    <article class="resource-metric-card"><span>下载项</span><strong>' + downloadFiles.length + '</strong></article>',
    '  </section>'
  );

  // Download shelf (if any)
  if (downloadFiles.length > 0) {
    parts.push(
      '<section class="resource-download-shelf">',
      '  <div class="resource-section-head">',
      '    <span>离线资料</span>',
      '    <h3>这些文件更适合直接下载保存</h3>',
      '  </div>',
      '  <div class="download-shelf-grid">'
    );
    downloadDest.forEach(function (df, i) {
      var href = encodeArticleFilePath(cfg.slug, df);
      var name = cleanDisplayName(downloadFiles[i], folder);
      parts.push(
        '<a class="download-shelf-item" href="' + href + '" download>',
        '  <span class="download-shelf-label">开卷资料</span>',
        '  <strong>' + name + '</strong>',
        '  <span class="download-shelf-action">下载</span>',
        '</a>'
      );
    });
    parts.push('</div></section>');
  }

  // Focus cards
  if (cfg.focus && cfg.focus.length) {
    parts.push(
      '  <section class="resource-focus-grid">',
      '    <div class="resource-section-head">',
      '      <span>策展线索</span>',
      '      <h3>这组资料该如何被阅读</h3>',
      '    </div>',
      '    <div class="resource-focus-cards">'
    );
    cfg.focus.forEach(function (text, i) {
      parts.push(
        '<article class="resource-focus-card">',
        '  <span class="resource-focus-index">0' + (i + 1) + '</span>',
        '  <p>' + text + '</p>',
        '</article>'
      );
    });
    parts.push('</div></section>');
  }

  // File grid – all files
  parts.push(
    '  <section class="resource-index-section">',
    '    <div class="resource-section-head">',
    '      <span>目录</span>',
    '      <h3>按主题重新排好的入口</h3>',
    '    </div>',
    '    <div class="resource-file-grid">'
  );

  destFiles.forEach(function (df, i) {
    var origName = files[i];
    var name = cleanDisplayName(origName, folder);
    var isDL = isDownloadPriority(origName);
    var type = fileType(df);
    var isMd = df.endsWith('.md');
    var isHtml = df.endsWith('.html');

    // data-file attribute lets the SPA open inline reading
    var dataAttr = ' data-file="' + df + '"';
    // For markdown files, clicking = inline read (via SPA)
    // For html files, clicking = inline read (via SPA, rendered in iframe)
    // Download only for 开卷 items
    var readAction = (isMd || isHtml)
      ? '<a class="resource-action-link resource-read-link" href="javascript:void(0)"' + dataAttr + '>阅读</a>'
      : '<a class="resource-action-link" href="' + encodeArticleFilePath(cfg.slug, df) + '" target="_blank" rel="noopener">在线查看</a>';
    var downloadAction = isDL
      ? '<a class="resource-action-link" href="' + encodeArticleFilePath(cfg.slug, df) + '" download>下载</a>'
      : '';

    parts.push(
      '<article class="resource-file-card' + (isDL ? ' has-download' : '') + '">',
      '  <div class="resource-file-meta">',
      '    <span class="resource-file-type">' + type + '</span>',
      isDL ? '    <span class="resource-pill">可下载</span>' : '',
      '  </div>',
      '  <h3>' + name + '</h3>',
      isDL
        ? '  <p>这是适合考前快速检索的下载型资料，建议离线保存，用于开卷场景下的高频查阅。</p>'
        : '  <p>围绕"' + name + '"展开，属于"' + cfg.label + '"这条知识线上的一个节点。</p>',
      '  <div class="resource-file-actions">',
      '    ' + readAction,
      '    ' + downloadAction,
      '  </div>',
      '</article>'
    );
  });

  parts.push('</div></section>');
  parts.push('</div>'); // close .resource-story

  return parts.join('\n');
}

/* ======================================================
   Build README.md frontmatter for a collection
   ====================================================== */
function buildReadme(cfg, destFiles) {
  var lines = [
    '---',
    'title: ' + cfg.title,
    'date: 2026-03-26',
    'subtitle: ' + cfg.subtitle,
    'kind: ' + cfg.kind,
    'theme: ' + cfg.theme,
    'label: ' + cfg.label,
    'tags: ' + cfg.tags.join(', '),
    'summary: ' + cfg.summary,
    '---',
    '',
    '## 文件列表',
    ''
  ];
  destFiles.forEach(function (f) {
    lines.push('- ' + f);
  });
  return lines.join('\n');
}

/* ======================================================
   Sync one collection
   ====================================================== */
function syncCollection(folder, cfg) {
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

  var destDir = path.join(ARTICLES_DIR, cfg.slug);
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
      // Convert txt to markdown
      var text = fs.readFileSync(srcPath, 'utf-8');
      var md = txtToMarkdown(text, f);
      fs.writeFileSync(dstPath, md, 'utf-8');
      console.log('    txt→md: ' + f + ' → ' + df);
    } else {
      // Direct copy
      fs.copyFileSync(srcPath, dstPath);
    }
  });

  // Write files.json — file index for SPA
  var filesIndex = destFiles.map(function (df, i) {
    return {
      name: df,
      displayName: cleanDisplayName(files[i], folder),
      type: fileType(df),
      download: isDownloadPriority(files[i])
    };
  });
  fs.writeFileSync(path.join(destDir, 'files.json'), JSON.stringify(filesIndex, null, 2), 'utf-8');

  fs.writeFileSync(path.join(destDir, 'README.md'), buildReadme(cfg, destFiles), 'utf-8');
  fs.writeFileSync(path.join(destDir, 'content.html'), buildContentHtml(cfg, folder, files, destFiles), 'utf-8');

  console.log('  ✓ ' + cfg.slug + ' — ' + files.length + ' file(s) copied');
}

/* ======================================================
   Main
   ====================================================== */
console.log('sync-resources: syncing to articles/\n');

Object.keys(COLLECTIONS).forEach(function (folder) {
  syncCollection(folder, COLLECTIONS[folder]);
});

// Regenerate manifest
console.log('');
var gen = require('./generate-manifest.js');
gen.generate();
