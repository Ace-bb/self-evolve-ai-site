# Design: Personal AI Site Architecture

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                      User Browser                        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              CDN / Edge (Vercel)                         │
│  Static assets + Edge middleware (optional)              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Astro Static Site                           │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐  │
│  │  个人博客 │ │ AI 咨询  │ │ 学习笔记  │ │ AI 工具箱  │  │
│  │ Content  │ │ Content  │ │ Content  │ │ Content    │  │
│  │ Collection│ │ Pages   │ │ Collection│ │ JSON Data │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘  │
│                                                          │
│  React Components (UI Islands)                           │
│  TailwindCSS (Design System)                             │
│  Astro Content Collections (Type-safe content)           │
│  Fuse.js (Client-side search)                            │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack Decision Matrix

### Framework Comparison

| Framework | SSG | React 支持 | 性能 | 博客生态 | MDX | 学习曲线 |
|-----------|-----|-----------|------|---------|-----|---------|
| **Astro** | ✅ | ✅ Islands | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | 低 |
| Next.js | ✅ | ✅ 原生 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ | 中 |
| Hugo | ✅ | ❌ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | 中 |
| Docusaurus | ✅ | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | 中 |
| Hexo | ✅ | ❌ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ❌ | 低 |

**选型：Astro**
- SSG 性能最优（零 JS by default）
- Island Architecture 允许按需加载 React 组件（搜索、交互组件）
- Content Collections 提供类型安全的内容管理
- 博客生态丰富（`@astrojs/rss`, `astro-remark` 等插件）
- 对 AI Agent 生成代码非常友好（清晰的 HTML 输出）

### Content Management

| 方案 | 优点 | 缺点 |
|------|------|------|
| Markdown Files + Git | 简单、版本控制、AI 友好 | 需要手动管理文件 |
| Headless CMS (Strapi) | 可视化编辑 | 需要后端、复杂 |
| Notion API | 编辑方便 | API 限制、性能问题 |

**选型：Markdown Files + Git**
- AI Agent 可以直接编辑 Markdown 文件
- Git 版本控制天然支持
- SSG 直接从文件构建，零运行时依赖
- 适合技术型开发者

### Styling

**选型：TailwindCSS**
- 与 Astro 官方集成
- 设计 Token 系统清晰
- 深色模式支持开箱即用
- 组件化开发效率高

### Search

**选型：Fuse.js (Client-side)**
- 纯前端搜索，无需后端
- 支持中文搜索（需配置 tokenize）
- 构建时生成搜索索引 JSON
- 轻量、快速

### Deployment

**选型：Vercel**
- Astro 官方推荐部署平台
- 自动 CI/CD
- Edge Functions 支持（后续扩展）
- 免费额度充足

## Directory Structure

```
personal-ai-site/
├── public/
│   ├── images/              # 静态图片
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/              # 组件内资源
│   ├── components/          # UI 组件
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── blog/            # 博客相关组件
│   │   ├── consulting/      # AI 咨询相关
│   │   ├── notes/           # 学习笔记相关
│   │   ├── toolbox/         # AI 工具箱相关
│   │   └── shared/          # 通用组件（Button, Card, Tag 等）
│   ├── content/             # Content Collections
│   │   ├── blog/            # 博客文章 (Markdown)
│   │   ├── notes/           # 学习笔记 (Markdown)
│   │   ├── faqs/            # FAQ (Markdown)
│   │   ├── tools/           # 工具数据 (Content Collection with YAML/JSON)
│   │   └── cases/           # 案例 (Markdown)
│   ├── layouts/             # 页面布局
│   ├── pages/               # 页面路由
│   │   ├── index.astro      # 首页
│   │   ├── blog/
│   │   │   ├── index.astro  # 文章列表
│   │   │   └── [slug].astro # 文章详情
│   │   ├── consulting/
│   │   │   ├── index.astro  # AI 咨询首页
│   │   │   └── [slug].astro # 案例详情
│   │   ├── notes/
│   │   │   ├── index.astro  # 笔记列表
│   │   │   └── [slug].astro # 笔记详情
│   │   ├── toolbox/
│   │   │   ├── index.astro  # 工具箱首页
│   │   │   └── [slug].astro # 工具详情
│   │   └── about.astro      # 关于页面
│   ├── utils/               # 工具函数
│   ├── styles/              # 全局样式
│   └── content.config.ts    # Content Collections 配置
├── astro.config.mjs         # Astro 配置
├── tailwind.config.mjs      # Tailwind 配置
├── package.json
└── tsconfig.json
```

## Data Models

### Blog Post
```yaml
title: string
date: Date
category: string
tags: string[]
summary: string
coverImage: string (optional)
draft: boolean
readingTime: number (computed)
```

### Note
```yaml
title: string
date: Date
category: string
tags: string[]
series: string (optional)
orderInSeries: number (optional)
draft: boolean
```

### AI Tool
```yaml
name: string
logo: string
description: string
category: string[]
rating: number (1-5)
pricing: "free" | "freemium" | "paid"
website: string (URL)
tags: string[]
featured: boolean
guideSlug: string (optional)
ratings:
  usability: number
  functionality: number
  costEffectiveness: number
  innovation: number
```

### FAQ
```yaml
question: string
answer: string (Markdown)
category: string
tags: string[]
```

## SEO Strategy

- 每篇文章自动提取 frontmatter 生成 meta description
- OpenGraph + Twitter Card meta tags
- JSON-LD 结构化数据（Article, Person, Organization）
- sitemap.xml via `@astrojs/sitemap`
- robots.txt in public/
- Semantic HTML5 elements (article, nav, section, etc.)

## Performance Strategy

- Astro 默认零 JS（Islands only where needed）
- 图片自动 WebP 转换 + 懒加载
- 代码分割：每个页面只加载需要的组件
- CDN 缓存策略（Vercel 默认）
- 搜索索引构建时生成，运行时纯 JSON 加载

## Future Extensibility

- 评论系统：可接入 Giscus (GitHub Discussions)
- 后端 API：可通过 Vercel Serverless Functions 扩展
- 数据库：可接入 Supabase / Turso
- 国际化：Astro 内置 i18n 支持
-  Newsletter：可接入 Resend / Mailchimp
