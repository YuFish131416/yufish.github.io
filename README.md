# 拾雪掩碧空 · 个人博客

全栈开发者的技术博客，基于纯 HTML/CSS/JS 构建，部署于 GitHub Pages。

## 项目结构

```
├── index.html                   # 主页面（SPA 入口）
├── css/
│   └── style.css                # 全局样式
├── js/
│   ├── app.js                   # 路由、页面渲染、导航
│   └── articles.js              # 文章加载模块
├── articles/                    # 文章目录（可扩展）
│   ├── manifest.json            # 文章索引清单
│   └── <article-slug>/          # 每篇文章一个文件夹
│       ├── README.md            # 文章元信息（标题、日期、标签、简介）
│       └── content.md           # 文章正文（Markdown）
├── scripts/
│   └── generate-manifest.js     # 自动生成 manifest.json
└── .nojekyll                    # 禁用 Jekyll 处理
```

## 添加新文章

1. 在 `articles/` 下创建新文件夹（文件夹名即为 URL slug）
2. 创建 `README.md`，写入文章元信息：

```
---
title: 文章标题
date: 2026-01-01
tags: 标签1, 标签2
summary: 文章简介
---
```

3. 创建 `content.md`（Markdown 格式）或 `content.html`（HTML 格式）
4. 更新文章索引（二选一）：
   - 自动：运行 `node scripts/generate-manifest.js`
   - 手动：编辑 `articles/manifest.json`

## 本地预览

使用任一本地服务器：

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

然后访问 `http://localhost:8080`

## 技术栈

- 纯 HTML / CSS / JavaScript（无构建步骤）
- [Inter](https://fonts.google.com/specimen/Inter) 字体
- [Lucide Icons](https://lucide.dev/) 图标库
- [Marked.js](https://marked.js.org/) Markdown 渲染
- [Prism.js](https://prismjs.com/) 代码语法高亮
