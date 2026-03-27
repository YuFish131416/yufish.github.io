(function () {
  'use strict';

  /* ── State ── */
  var articles = [];
  var activeTag = '';
  var searchQuery = '';
  var currentPage = '';

  /* ── DOM refs ── */
  var app = document.getElementById('app');
  var navLinks = document.querySelectorAll('.nav-link');
  var navLinksContainer = document.getElementById('navLinks');
  var navToggle = document.getElementById('navToggle');
  var mobileOverlay = document.getElementById('mobileOverlay');

  /* ============================================================
     Router
     ============================================================ */

  /* Configure marked for code + math rendering */
  if (typeof marked !== 'undefined') {
    marked.setOptions({ langPrefix: 'language-' });

    /* KaTeX math extension: $$...$$ (block) and $...$ (inline) */
    if (typeof katex !== 'undefined') {
      marked.use({
        extensions: [{
          name: 'mathBlock',
          level: 'block',
          start: function (src) { var m = src.match(/$$/); return m ? m.index : undefined; },
          tokenizer: function (src) {
            var m = src.match(/^$$([\s\S]+?)$$/);
            if (m) return { type: 'mathBlock', raw: m[0], text: m[1].trim() };
          },
          renderer: function (token) {
            try { return '<div class="math-display">' + katex.renderToString(token.text, { displayMode: true, throwOnError: false }) + '</div>'; }
            catch (e) { return '<div class="math-display"><code>' + esc(token.text) + '</code></div>'; }
          }
        }, {
          name: 'mathInline',
          level: 'inline',
          start: function (src) { var m = src.match(/$[^$\s]/); return m ? m.index : undefined; },
          tokenizer: function (src) {
            var m = src.match(/^$([^$\n]+?)$/);
            if (m) return { type: 'mathInline', raw: m[0], text: m[1].trim() };
          },
          renderer: function (token) {
            try { return katex.renderToString(token.text, { displayMode: false, throwOnError: false }); }
            catch (e) { return '<code>' + esc(token.text) + '</code>'; }
          }
        }]
      });
    }
  }

  function parseHash() {
    var hash = location.hash.slice(1) || '/';
    var qIdx = hash.indexOf('?');
    var route = qIdx === -1 ? hash : hash.slice(0, qIdx);
    var params = new URLSearchParams(qIdx === -1 ? '' : hash.slice(qIdx + 1));
    return { route: route, params: params };
  }

  function navigate() {
    var parsed = parseHash();
    var route = parsed.route;
    var params = parsed.params;
    closeMobileMenu();

    if (route.indexOf('/article/') === 0) {
      currentPage = 'article';
      renderArticle(route.slice('/article/'.length));
    } else if (route === '/articles') {
      currentPage = 'articles';
      activeTag = params.get('tag') || '';
      searchQuery = params.get('q') || '';
      renderArticles();
    } else if (route === '/about') {
      currentPage = 'about';
      renderAbout();
    } else {
      currentPage = 'home';
      renderHome();
    }

    updateActiveNav();
    window.scrollTo(0, 0);
  }

  function updateActiveNav() {
    navLinks.forEach(function (link) {
      var page = link.getAttribute('data-page');
      link.classList.toggle('active',
        page === currentPage || (page === 'articles' && currentPage === 'article'));
    });
  }

  /* ── Mobile menu ── */
  function toggleMobileMenu() {
    navLinksContainer.classList.toggle('open');
    mobileOverlay.classList.toggle('open');
  }
  function closeMobileMenu() {
    navLinksContainer.classList.remove('open');
    mobileOverlay.classList.remove('open');
  }

  /* ============================================================
     HOME
     ============================================================ */
  async function renderHome() {
    articles = await window.ArticleLoader.getArticles();
    var featured = articles.slice(0, 6);

    var html =
      '<section class="home-hero-fullscreen">' +
        '<div class="container">' +
          '<div class="home-hero-inner page-enter">' +
            '<p class="home-greeting">Full-Stack Developer &middot; System Architect</p>' +
            '<h1 class="home-title">拾雪掩碧空</h1>' +
            '<p class="home-subtitle">全栈开发者，热衷安全系统设计与分布式架构。<br>在代码与密码学之间，寻找碎片知识的结构性。</p>' +
            '<div class="home-hero-deco">' +
              '<span class="hero-dot"></span>' +
              '<span class="hero-dot"></span>' +
              '<span class="hero-dot"></span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="scroll-indicator">' +
          '<span class="scroll-text">向下滑动</span>' +
          '<div class="scroll-arrow"><i data-lucide="chevron-down"></i></div>' +
        '</div>' +
      '</section>' +
      '<div class="container">' +
        '<div class="home-divider"></div>' +
        '<section class="reveal">' +
          '<div class="home-section-header">' +
            '<span class="home-section-title">最新文章</span>' +
            '<a class="home-section-link" href="#/articles">' +
              '<span>查看全部</span><i data-lucide="arrow-right"></i>' +
            '</a>' +
          '</div>' +
          '<div class="featured-grid">' +
            featured.map(function (a, i) { return renderArticleCard(a, i); }).join('') +
          '</div>' +
        '</section>' +
      '</div>';

    setContent(html);
    setupHomeSnap();
  }

  function renderArticleCard(a, idx) {
    var stagger = idx !== undefined ? ' stagger-' + Math.min(idx % 3 + 1, 3) : '';
    return (
      '<a class="article-card reveal' + stagger + '" href="#/article/' + a.slug + '">' +
        (a.label ? '<p class="article-card-label">' + esc(a.label) + '</p>' : '') +
        '<h3 class="article-card-title">' + esc(a.title) + '</h3>' +
        '<p class="article-card-summary">' + esc(a.summary) + '</p>' +
        '<div class="article-card-meta"><span>' + esc(a.date) + '</span></div>' +
        renderTagPills(a.tags, 3) +
      '</a>'
    );
  }

  function renderTagPills(tags, max) {
    if (!tags || !tags.length) return '';
    var list = max ? tags.slice(0, max) : tags;
    return '<div class="article-card-tags">' +
      list.map(function (t) { return '<span class="tag-pill">' + esc(t) + '</span>'; }).join('') +
    '</div>';
  }

  /* ============================================================
     ARTICLES (word cloud + search + timeline)
     ============================================================ */
  async function renderArticles() {
    articles = await window.ArticleLoader.getArticles();
    var tagStats = getTagStats();
    var filtered = filterArticles();

    var html =
      '<div class="container">' +
        '<header class="articles-header page-enter">' +
          '<h1 class="articles-title">纸上造境</h1>' +
          '<p class="articles-subtitle">落笔之前已有答案，写下来是为了记住提问的过程</p>' +
        '</header>' +

        '<section class="tag-cloud reveal">' +
          renderTagCloud(tagStats) +
        '</section>' +

        '<section class="search-section reveal">' +
          '<div class="search-bar">' +
            '<i data-lucide="search"></i>' +
            '<input class="search-input" type="text" placeholder="搜索文章标题、标签或摘要…" ' +
              'value="' + escAttr(searchQuery) + '" id="searchInput">' +
            '<button class="search-clear ' + (searchQuery ? 'visible' : '') + '" id="searchClear">' +
              '<i data-lucide="x"></i>' +
            '</button>' +
          '</div>' +
        '</section>' +

        '<p class="results-meta" id="resultsMeta">' + getResultsMeta(filtered) + '</p>' +

        '<section class="timeline" id="articleTimeline">' +
          renderTimeline(filtered) +
        '</section>' +
      '</div>';

    setContent(html);
    bindSearchEvents();
  }

  function renderTagCloud(stats) {
    return stats.map(function (s) {
      return '<span class="tag-cloud-item size-' + s.weight +
        (activeTag === s.tag ? ' active' : '') +
        '" data-tag="' + escAttr(s.tag) + '">' + esc(s.tag) + '</span>';
    }).join('');
  }

  function renderTimeline(list) {
    if (!list.length) return renderNoResults();
    var groups = groupByYear(list);
    var years = Object.keys(groups).sort(function (a, b) { return b - a; });
    return years.map(function (year) {
      return '<div class="timeline-year reveal">' + year + '</div>' +
        groups[year].map(function (a) { return renderTimelineItem(a); }).join('');
    }).join('');
  }

  function renderTimelineItem(a) {
    return (
      '<a class="timeline-item reveal" href="#/article/' + a.slug + '">' +
        '<span class="timeline-date">' + esc(a.date) + '</span>' +
        '<div class="timeline-content">' +
          '<h3 class="timeline-title">' + esc(a.title) + '</h3>' +
          '<p class="timeline-summary">' + esc(a.summary) + '</p>' +
          '<div class="timeline-tags">' +
            (a.tags || []).map(function (t) {
              return '<span class="tag-pill">' + esc(t) + '</span>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function renderNoResults() {
    return '<div class="no-results">' +
      '<i data-lucide="search-x"></i>' +
      '<p>没有找到匹配的文章</p></div>';
  }

  /* ============================================================
     NOTEBOOK RENDERER
     ============================================================ */

  /** Parse and render a Jupyter Notebook (.ipynb) JSON string */
  function renderNotebook(raw) {
    var nb;
    try { nb = JSON.parse(raw); } catch (e) {
      return '<pre>' + esc(raw) + '</pre>';
    }
    var cells = nb.cells || [];
    var h = '<div class="nb-container">';

    cells.forEach(function (cell) {
      var src = (cell.source || []).join('');
      if (!src.trim()) return;

      if (cell.cell_type === 'markdown') {
        h += '<div class="nb-cell nb-md-cell">' + marked.parse(src) + '</div>';
      } else if (cell.cell_type === 'code') {
        var lang = (nb.metadata && nb.metadata.kernelspec && nb.metadata.kernelspec.language) || 'python';
        h += '<div class="nb-cell nb-code-cell">';
        h += '<div class="nb-cell-label">In</div>';
        h += '<pre class="nb-source"><code class="language-' + lang + '">' + esc(src) + '</code></pre>';

        // Render outputs
        var outputs = cell.outputs || [];
        if (outputs.length > 0) {
          h += '<div class="nb-cell-label nb-out-label">Out</div>';
          h += '<div class="nb-output">';
          outputs.forEach(function (out) {
            if (out.output_type === 'stream') {
              var text = (out.text || []).join('');
              h += '<pre class="nb-stream">' + esc(text) + '</pre>';
            } else if (out.output_type === 'execute_result' || out.output_type === 'display_data') {
              var data = out.data || {};
              if (data['text/html']) {
                h += '<div class="nb-rich">' + (data['text/html'] instanceof Array ? data['text/html'].join('') : data['text/html']) + '</div>';
              } else if (data['image/png']) {
                h += '<img class="nb-img" src="data:image/png;base64,' + data['image/png'] + '" alt="output">';
              } else if (data['text/plain']) {
                var plain = data['text/plain'] instanceof Array ? data['text/plain'].join('') : data['text/plain'];
                h += '<pre class="nb-stream">' + esc(plain) + '</pre>';
              }
            } else if (out.output_type === 'error') {
              var tb = (out.traceback || []).join('\n').replace(/\x1b\[[0-9;]*m/g, '');
              h += '<pre class="nb-error">' + esc(tb) + '</pre>';
            }
          });
          h += '</div>';
        }
        h += '</div>';
      }
    });

    h += '</div>';
    return h;
  }

  /* ============================================================
     ARTICLE DETAIL
     ============================================================ */

  /** Generate resource-story HTML dynamically from manifest metadata */
  function renderResourceStory(meta) {
    var files = meta.files || [];
    var focus = meta.focus || [];
    var slug = meta.slug;
    var downloadFiles = files.filter(function (f) { return f.download; });
    var mdCount = files.filter(function (f) { return /\.md$/i.test(f.name); }).length;

    var h = '<div class="resource-story theme-' + esc(meta.theme || '') + '">';

    // Intro panel
    h += '<section class="resource-intro-panel">' +
      '<span class="resource-kicker">' + esc(meta.label || '') + '</span>' +
      '<h2>' + esc(meta.subtitle || '') + '</h2>' +
      '<p>' + esc(meta.summary || '') + '</p>' +
    '</section>';

    // Metric grid
    h += '<section class="resource-metric-grid">' +
      '<article class="resource-metric-card"><span>资料数量</span><strong>' + files.length + '</strong></article>' +
      '<article class="resource-metric-card"><span>Markdown</span><strong>' + mdCount + '</strong></article>' +
      '<article class="resource-metric-card"><span>下载项</span><strong>' + downloadFiles.length + '</strong></article>' +
    '</section>';

    // Download shelf
    if (downloadFiles.length > 0) {
      h += '<section class="resource-download-shelf">' +
        '<div class="resource-section-head"><span>离线资料</span><h3>这些文件更适合直接下载保存</h3></div>' +
        '<div class="download-shelf-grid">';
      downloadFiles.forEach(function (f) {
        var href = 'articles/' + encodeURIComponent(slug) + '/files/' + encodeURIComponent(f.name);
        h += '<a class="download-shelf-item" href="' + href + '" download>' +
          '<span class="download-shelf-label">开卷资料</span>' +
          '<strong>' + esc(f.displayName) + '</strong>' +
          '<span class="download-shelf-action">下载</span>' +
        '</a>';
      });
      h += '</div></section>';
    }

    // Focus cards
    if (focus.length > 0) {
      h += '<section class="resource-focus-grid">' +
        '<div class="resource-section-head"><span>策展线索</span><h3>这组资料该如何被阅读</h3></div>' +
        '<div class="resource-focus-cards">';
      focus.forEach(function (text, i) {
        h += '<article class="resource-focus-card">' +
          '<span class="resource-focus-index">0' + (i + 1) + '</span>' +
          '<p>' + esc(text) + '</p>' +
        '</article>';
      });
      h += '</div></section>';
    }

    // File grid
    h += '<section class="resource-index-section">' +
      '<div class="resource-section-head"><span>目录</span><h3>按主题重新排好的入口</h3></div>' +
      '<div class="resource-file-grid">';
    files.forEach(function (f) {
      var isDL = f.download;
      var canRead = /\.(md|html|ipynb)$/i.test(f.name);
      var href = 'articles/' + encodeURIComponent(slug) + '/files/' + encodeURIComponent(f.name);

      h += '<article class="resource-file-card' + (isDL ? ' has-download' : '') + '">';
      h += '<div class="resource-file-meta">';
      h += '<span class="resource-file-type">' + esc(f.type || '') + '</span>';
      if (isDL) h += '<span class="resource-pill">可下载</span>';
      h += '</div>';
      h += '<h3>' + esc(f.displayName) + '</h3>';
      h += isDL
        ? '<p>这是适合考前快速检索的下载型资料，建议离线保存，用于开卷场景下的高频查阅。</p>'
        : '<p>围绕"' + esc(f.displayName) + '"展开，属于"' + esc(meta.label || '') + '"这条知识线上的一个节点。</p>';
      h += '<div class="resource-file-actions">';
      if (canRead) {
        h += '<a class="resource-action-link resource-read-link" href="javascript:void(0)" data-file="' + escAttr(f.name) + '">阅读</a>';
      } else {
        h += '<a class="resource-action-link" href="' + href + '" target="_blank" rel="noopener">在线查看</a>';
      }
      if (isDL) {
        h += '<a class="resource-action-link" href="' + href + '" download>下载</a>';
      }
      h += '</div></article>';
    });
    h += '</div></section>';

    h += '</div>'; // close .resource-story
    return h;
  }

  async function renderArticle(slug) {
    try {
      var data = await window.ArticleLoader.getArticle(slug);
      var meta = data.meta;

      // Determine article body content
      var contentHtml;
      if (data.isResource) {
        contentHtml = renderResourceStory(meta);
      } else if (data.isHtml) {
        contentHtml = data.content;
      } else {
        contentHtml = marked.parse(data.content);
      }

      var html =
        '<div class="container">' +
          '<header class="article-header page-enter">' +
            '<a class="article-back" href="#/articles">' +
              '<i data-lucide="arrow-left"></i><span>返回文章列表</span>' +
            '</a>' +
            (meta.label ? '<p class="article-detail-label">' + esc(meta.label) + '</p>' : '') +
            '<h1 class="article-detail-title">' + esc(meta.title) + '</h1>' +
            (meta.subtitle ? '<p class="article-detail-subtitle">' + esc(meta.subtitle) + '</p>' : '') +
            '<div class="article-detail-meta">' +
              '<span><i data-lucide="calendar"></i>' + esc(meta.date) + '</span>' +
              (meta.tags && meta.tags.length
                ? '<span><i data-lucide="tag"></i>' + meta.tags.slice(0, 3).join(' · ') + '</span>'
                : '') +
            '</div>' +
          '</header>' +
          '<div class="article-content page-enter">' +
            contentHtml +
          '</div>' +
          '<div class="sub-file-reader" id="subFileReader" style="display:none">' +
            '<div class="sub-reader-header">' +
              '<button class="sub-reader-close" id="subReaderClose">' +
                '<i data-lucide="arrow-left"></i><span>返回目录</span>' +
              '</button>' +
              '<span class="sub-reader-title" id="subReaderTitle"></span>' +
            '</div>' +
            '<div class="sub-reader-content article-content" id="subReaderContent"></div>' +
          '</div>' +
        '</div>' +
        '<div class="reading-progress" id="readingProgress"></div>';

      setContent(html);
      bindSubFileReading(slug);

      if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(app);
        // Re-highlight after autoloader fetches grammars (staggered for slow connections)
        setTimeout(function () { Prism.highlightAllUnder(app); }, 300);
        setTimeout(function () { Prism.highlightAllUnder(app); }, 800);
      }
      bindReadingProgress();

    } catch (e) {
      console.error('renderArticle failed for "' + slug + '":', e);
      setContent(
        '<div class="container"><div class="no-results">' +
          '<i data-lucide="file-x"></i>' +
          '<p>文章未找到</p>' +
          '<a href="#/articles" style="margin-top:16px;display:inline-block">返回文章列表</a>' +
        '</div></div>'
      );
    }
  }

  /** Bind click events on .resource-read-link elements for inline sub-file reading */
  function bindSubFileReading(slug) {
    var links = app.querySelectorAll('.resource-read-link');
    var reader = document.getElementById('subFileReader');
    var readerContent = document.getElementById('subReaderContent');
    var readerTitle = document.getElementById('subReaderTitle');
    var closeBtn = document.getElementById('subReaderClose');
    var mainContent = app.querySelector('.article-content');

    if (!links.length || !reader) return;

    links.forEach(function (link) {
      link.addEventListener('click', async function (e) {
        e.preventDefault();
        var filename = this.getAttribute('data-file');
        if (!filename) return;

        try {
          var fileData = await window.ArticleLoader.getSubFile(slug, filename);
          var rendered;

          if (fileData.isNotebook) {
            rendered = renderNotebook(fileData.content);
          } else if (fileData.isMd) {
            rendered = marked.parse(fileData.content);
          } else if (fileData.isHtml) {
            rendered = '<iframe class="sub-reader-iframe" srcdoc="' +
              fileData.content
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;') +
              '" sandbox="allow-scripts allow-same-origin"></iframe>';
          } else {
            rendered = '<pre>' + esc(fileData.content) + '</pre>';
          }

          readerTitle.textContent = filename.replace(/\.[^.]+$/, '');
          readerContent.innerHTML = rendered;
          mainContent.style.display = 'none';
          reader.style.display = 'block';
          window.scrollTo(0, 0);

          if (typeof Prism !== 'undefined') {
            Prism.highlightAllUnder(readerContent);
            setTimeout(function () { Prism.highlightAllUnder(readerContent); }, 200);
          }
          initIcons();
        } catch (err) {
          readerContent.innerHTML = '<p style="color:var(--c-text-3)">无法加载文件：' + esc(filename) + '</p>';
          mainContent.style.display = 'none';
          reader.style.display = 'block';
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        reader.style.display = 'none';
        mainContent.style.display = '';
        window.scrollTo(0, 0);
      });
    }
  }

  /* ============================================================
     ABOUT
     ============================================================ */
  function renderAbout() {
    var html =
      '<div class="container">' +
        '<div class="about-layout page-enter">' +
          /* Hero */
          '<section class="about-hero">' +
            '<div class="about-avatar"><i data-lucide="terminal"></i></div>' +
            '<h1 class="about-name">拾雪掩碧空</h1>' +
            '<p class="about-tagline">Full-Stack Developer · Security &amp; Distributed Systems</p>' +
            '<p class="about-bio">' +
              '信息竞赛起步，从密码学到微服务，从 Redis 到 AI Agent——在后端工程与安全系统设计之间穿行。' +
              '擅长把碎片化的技术知识压缩成可复用的工程判断，关注 AI、Web3 与分布式体系的交叉地带。' +
            '</p>' +
          '</section>' +

          /* Engineering Profile */
          '<section class="about-section reveal">' +
            '<h2 class="about-section-title">Engineering Profile</h2>' +
            '<div class="skills-grid">' +
              skillCard('shield', '安全系统', 'AES · ECC · RSA · PBKDF2 · DPAPI — 离线多介质令牌安全系统设计') +
              skillCard('server', '后端架构', 'Spring Boot · Redis · Docker · 微服务 · 分布式锁 · 消息队列') +
              skillCard('code', '编程语言', 'C++ (OI竞赛) · Java · Python · Go · JavaScript · Lua') +
              skillCard('database', '数据层', 'MySQL · Redis 集群（主从/哨兵/Cluster）· RDB/AOF 持久化') +
              skillCard('smartphone', '前端 & 小程序', '微信小程序 · HTML/CSS/JS · 蓝牙防代签系统') +
              skillCard('git-branch', '工程实践', '敏捷开发 · Docker 部署 · Postman · 容灾与高可用设计') +
            '</div>' +
          '</section>' +

          /* AI Tech Stack */
          '<section class="about-section reveal">' +
            '<h2 class="about-section-title">AI Tech Stack</h2>' +
            '<div class="ai-stack-grid">' +
              aiCard(
                'Prompt Engineering',
                '从零样本到思维链（CoT），系统掌握提示词工程方法论，能针对不同 LLM 特性设计高效 Prompt，实现精准任务控制与输出稳定性。',
                ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'System Prompt']
              ) +
              aiCard(
                'RAG（检索增强生成）',
                '构建基于向量检索的知识增强管线，结合 Embedding 模型与向量数据库实现私域数据问答，降低幻觉、提升回答可信度。',
                ['向量检索', 'Embedding', 'Chunk 策略', 'Rerank']
              ) +
              aiCard(
                'Transformer 架构',
                '深入理解 Self-Attention、位置编码、多头注意力与前馈网络的运作机制，从 Encoder-Decoder 到 Decoder-Only 的范式演进。',
                ['Self-Attention', 'Multi-Head', '位置编码', 'KV-Cache']
              ) +
              aiCard(
                'Fine-tuning 微调',
                '掌握 LoRA、QLoRA 等参数高效微调方法，以及 SFT、RLHF、DPO 等对齐技术，在有限资源下适配垂直领域任务。',
                ['LoRA', 'QLoRA', 'SFT', 'RLHF', 'DPO']
              ) +
              aiCard(
                'Agent 智能体',
                '多 Agent 协作架构设计，涵盖工具调用、记忆管理、规划决策与反馈循环，探索 AI Agent 在工程自动化中的落地实践。',
                ['Tool Use', 'Memory', 'Planning', 'Multi-Agent']
              ) +
              aiCard(
                '模型能力边界',
                '关注 LLM 的能力边界与局限性——幻觉控制、上下文窗口、推理瓶颈与安全对齐，在工程中做出务实的技术判断。',
                ['幻觉控制', '上下文窗口', '安全对齐', '评估基准']
              ) +
              aiCard(
                '机器学习基础',
                '系统学习统计学习、神经网络、搜索算法（BFS/DFS/A*/MCTS）、贝叶斯网络、逻辑推理到深度学习的完整知识弧线。',
                ['神经网络', '概率模型', '搜索算法', '深度学习']
              ) +
              aiCard(
                'AI 辅助开发 (VibeCoding)',
                '以架构师角色主导 AI 协作：确定方案 → AI 写样例代码测试 → 通过后写入项目 → AI 自测 → 人工 Git Review。',
                ['Cursor', 'GitHub Copilot', 'Codex']
              ) +
            '</div>' +
          '</section>' +

          /* Contact */
          '<section class="about-section reveal">' +
            '<h2 class="about-section-title">Contact</h2>' +
            '<div class="contact-grid">' +
              '<a class="contact-link" href="https://github.com/YuFish131416" target="_blank" rel="noopener">' +
                '<i data-lucide="github"></i><span>GitHub</span>' +
              '</a>' +
              '<a class="contact-link" href="mailto:yufishyph@gmail.com">' +
                '<i data-lucide="mail"></i><span>yufishyph@gmail.com</span>' +
              '</a>' +
            '</div>' +
          '</section>' +

        '</div>' +
      '</div>';

    setContent(html);
  }

  function skillCard(icon, title, desc) {
    return '<div class="skill-card">' +
      '<i data-lucide="' + icon + '" class="skill-card-icon"></i>' +
      '<h3 class="skill-card-title">' + esc(title) + '</h3>' +
      '<p class="skill-card-desc">' + esc(desc) + '</p>' +
    '</div>';
  }

  function aiCard(title, desc, tags) {
    return '<div class="ai-stack-card">' +
      '<h3 class="ai-stack-card-title">' + esc(title) + '</h3>' +
      '<p class="ai-stack-card-desc">' + esc(desc) + '</p>' +
      '<div class="ai-stack-tags">' +
        tags.map(function (t) { return '<span class="tag-pill">' + esc(t) + '</span>'; }).join('') +
      '</div>' +
    '</div>';
  }

  /* ============================================================
     Helpers
     ============================================================ */

  /** Inject HTML, initialize icons, trigger animations */
  function setContent(html) {
    app.innerHTML = html;
    initIcons();
    requestAnimationFrame(function () {
      app.querySelectorAll('.page-enter').forEach(function (el) {
        el.classList.add('page-enter-active');
      });
      observeReveals();
    });
  }

  function initIcons() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  /** Intersection-Observer scroll reveal */
  function observeReveals() {
    var els = app.querySelectorAll('.reveal:not(.visible)');
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /** Compute tag frequencies → sized weights 1-5 */
  function getTagStats() {
    var counts = {};
    articles.forEach(function (a) {
      (a.tags || []).forEach(function (t) {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    var max = 1;
    Object.keys(counts).forEach(function (k) { if (counts[k] > max) max = counts[k]; });
    return Object.keys(counts)
      .sort(function (a, b) { return counts[b] - counts[a]; })
      .map(function (tag) {
        var r = counts[tag] / max;
        var w = r > 0.8 ? 5 : r > 0.6 ? 4 : r > 0.4 ? 3 : r > 0.2 ? 2 : 1;
        return { tag: tag, count: counts[tag], weight: w };
      });
  }

  function filterArticles() {
    return articles.filter(function (a) {
      if (activeTag && (a.tags || []).indexOf(activeTag) === -1) return false;
      if (searchQuery) {
        var q = searchQuery.toLowerCase();
        var hay = [a.title, a.subtitle || '', a.summary, (a.tags || []).join(' '), a.label || '']
          .join(' ').toLowerCase();
        return hay.indexOf(q) !== -1;
      }
      return true;
    });
  }

  function groupByYear(list) {
    var g = {};
    list.forEach(function (a) {
      var y = a.date ? a.date.slice(0, 4) : '未知';
      if (!g[y]) g[y] = [];
      g[y].push(a);
    });
    return g;
  }

  function getResultsMeta(filtered) {
    if (activeTag && searchQuery)
      return '标签「' + esc(activeTag) + '」中搜索「' + esc(searchQuery) + '」— ' + filtered.length + ' 篇';
    if (activeTag)
      return '标签「' + esc(activeTag) + '」— ' + filtered.length + ' 篇';
    if (searchQuery)
      return '搜索「' + esc(searchQuery) + '」— ' + filtered.length + ' 篇';
    return '共 ' + filtered.length + ' 篇文章';
  }

  /* ── Search & tag cloud bindings ── */
  function bindSearchEvents() {
    var input = document.getElementById('searchInput');
    var clear = document.getElementById('searchClear');

    if (input) {
      input.addEventListener('input', debounce(function () {
        searchQuery = input.value.trim();
        clear.classList.toggle('visible', !!searchQuery);
        refreshArticleList();
      }, 180));
    }

    if (clear) {
      clear.addEventListener('click', function () {
        searchQuery = '';
        if (input) input.value = '';
        clear.classList.remove('visible');
        refreshArticleList();
      });
    }

    app.querySelectorAll('.tag-cloud-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var tag = el.getAttribute('data-tag');
        activeTag = activeTag === tag ? '' : tag;
        app.querySelectorAll('.tag-cloud-item').forEach(function (item) {
          item.classList.toggle('active', item.getAttribute('data-tag') === activeTag);
        });
        refreshArticleList();
        var tl = document.getElementById('articleTimeline');
        if (tl) tl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function refreshArticleList() {
    var filtered = filterArticles();
    var meta = document.getElementById('resultsMeta');
    if (meta) meta.innerHTML = getResultsMeta(filtered);
    var tl = document.getElementById('articleTimeline');
    if (tl) {
      tl.innerHTML = renderTimeline(filtered);
      initIcons();
      observeReveals();
    }
  }

  /* ── Reading progress ── */
  function bindReadingProgress() {
    var bar = document.getElementById('readingProgress');
    if (!bar) return;
    var onScroll = function () {
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? Math.min(window.scrollY / total * 100, 100) + '%' : '0';
    };
    window.addEventListener('scroll', onScroll);
    var cleanup = function () {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', cleanup);
    };
    window.addEventListener('hashchange', cleanup);
  }

  /* ── Escape ── */
  var _escEl;
  function esc(str) {
    if (!str) return '';
    if (!_escEl) _escEl = document.createElement('div');
    _escEl.textContent = str;
    return _escEl.innerHTML;
  }
  function escAttr(str) {
    return esc(str).replace(/"/g, '&quot;');
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      var self = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  /* ── Home section snap (hero ↔ articles) ── */
  function setupHomeSnap() {
    var hero = document.querySelector('.home-hero-fullscreen');
    if (!hero) return;

    var style = getComputedStyle(document.documentElement);
    var navH = parseInt(style.getPropertyValue('--nav-height')) || 64;
    var timer = null;
    var snapping = false;
    var anchor = 'hero';           // which section user is "at"

    function snapTarget() {
      var el = hero.nextElementSibling; // .container with articles
      return el ? el.offsetTop - navH : 0;
    }

    function checkSnap() {
      if (snapping) return;
      var y = window.scrollY;
      var target = snapTarget();
      if (target <= 0) return;

      // Already resting at an anchor
      if (y <= 0) { anchor = 'hero'; return; }
      if (y >= target) { anchor = 'articles'; return; }

      // In the transition zone
      snapping = true;
      var dest;
      if (anchor === 'hero') {
        dest = y > 60 ? target : 0;          // scroll ↓ 60 px → snap forward
      } else {
        dest = y < target - 60 ? 0 : target; // scroll ↑ 60 px → snap back
      }
      anchor = dest === 0 ? 'hero' : 'articles';
      window.scrollTo({ top: dest, behavior: 'smooth' });
      setTimeout(function () { snapping = false; }, 800);
    }

    function onScroll() {
      if (snapping) return;
      clearTimeout(timer);
      timer = setTimeout(checkSnap, 100);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', function cleanup() {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', cleanup);
      clearTimeout(timer);
    });
  }

  /* ============================================================
     Bootstrap
     ============================================================ */
  navToggle.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  navLinksContainer.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('hashchange', navigate);
  navigate();
  initIcons();
})();
