# Tasks: Personal AI Site

## Phase 1: Project Setup & Foundation

### 1.1 Initialize Astro Project
- [ ] Create Astro project with React integration
- [ ] Configure TypeScript
- [ ] Add TailwindCSS integration
- [ ] Set up project structure per design.md

### 1.2 Design System Setup
- [ ] Define Tailwind theme (colors, fonts, spacing tokens)
- [ ] Configure dark/light mode support
- [ ] Create global CSS base styles
- [ ] Set up Chinese font optimization

### 1.3 Layout Components
- [ ] Create `Header` component (logo, nav, search, theme toggle)
- [ ] Create `Footer` component (copyright, social links, sitemap)
- [ ] Create `Layout` wrapper component
- [ ] Create mobile hamburger menu component
- [ ] Create `Button`, `Card`, `Tag`, `Badge` shared components

### 1.4 Homepage
- [ ] Build hero section (intro + positioning statement)
- [ ] Build module entry cards (4 modules)
- [ ] Build recent posts preview section (3 articles)
- [ ] Build featured AI tools section
- [ ] Build CTA / contact section
- [ ] Assemble full homepage layout

## Phase 2: Blog Module

### 2.1 Blog Content Collection
- [ ] Create `blog` content collection config
- [ ] Set up frontmatter schema validation
- [ ] Add 3 sample blog posts

### 2.2 Blog List Page
- [ ] Create `/blog/index.astro` page
- [ ] Paginated article list (10 per page)
- [ ] Card layout with title, summary, date, tags
- [ ] Category and tag filter UI
- [ ] Estimated reading time display

### 2.3 Blog Detail Page
- [ ] Create `/blog/[slug].astro` page
- [ ] Markdown rendering with syntax highlighting
- [ ] Auto-generated Table of Contents (TOC)
- [ ] Code block copy button
- [ ] Prev/Next article navigation
- [ ] Estimated reading time

### 2.4 Blog Features
- [ ] Category list page (`/blog/category/:slug`)
- [ ] Tag cloud page (`/blog/tag/:slug`)
- [ ] RSS feed via `@astrojs/rss`
- [ ] LaTeX/math formula support

## Phase 3: AI Consulting Module

### 3.1 Consulting Landing Page
- [ ] Create `/consulting/index.astro` page
- [ ] Service cards layout (3+ services)
- [ ] Expandable service detail sections
- [ ] Case studies grid layout

### 3.2 FAQ System
- [ ] Create `faqs` content collection
- [ ] FAQ accordion component (React island)
- [ ] Category filtering for FAQs
- [ ] FAQ detail pages

### 3.3 Case Studies
- [ ] Create `cases` content collection
- [ ] Case card component
- [ ] Case detail page template
- [ ] Filter by technology domain

### 3.4 Contact Form
- [ ] Contact form UI (name, email, message)
- [ ] Form submission handling (client-side validation)
- [ ] Success/error feedback
- [ ] Display contact info (WeChat, email)

## Phase 4: Learning Notes Module

### 4.1 Notes Content Collection
- [ ] Create `notes` content collection config
- [ ] Set up series/ordered content support
- [ ] Add 3 sample notes

### 4.2 Notes List & Navigation
- [ ] Create `/notes/index.astro` page
- [ ] Tree-style sidebar navigation (React island)
- [ ] Category list display
- [ ] Series grouping view

### 4.3 Notes Detail Page
- [ ] Create `/notes/[slug].astro` page
- [ ] Markdown rendering with code highlighting
- [ ] Prev/Next within series navigation
- [ ] Series progress indicator

### 4.4 Learning Paths
- [ ] Create learning path overview pages
- [ ] Path progress tracking UI
- [ ] Ordered navigation within paths

## Phase 5: AI Toolbox Module

### 5.1 Tools Content Collection
- [ ] Create `tools` content collection config
- [ ] Set up tool data schema (name, logo, description, ratings, etc.)
- [ ] Add 5+ sample AI tool entries

### 5.2 Toolbox Landing Page
- [ ] Create `/toolbox/index.astro` page
- [ ] Tool cards grid layout
- [ ] Featured tools section
- [ ] Category filter sidebar
- [ ] Sort controls (rating, name, date)

### 5.3 Tool Detail Page
- [ ] Create `/toolbox/[slug].astro` page
- [ ] Tool info display (description, pricing, links)
- [ ] Rating display (5 dimensions)
- [ ] Guide link (if available)
- [ ] Related tools section

## Phase 6: Common Features

### 6.1 Search
- [ ] Install and configure Fuse.js
- [ ] Build search index JSON at build time
- [ ] Create search component (React island)
- [ ] Search UI: input + dropdown results
- [ ] Keyboard shortcut (Ctrl+K) to open search

### 6.2 SEO
- [ ] Configure `@astrojs/sitemap`
- [ ] Auto-generate meta tags per page
- [ ] OpenGraph + Twitter Card meta
- [ ] JSON-LD structured data
- [ ] robots.txt
- [ ] Custom 404 page

### 6.3 Performance & Polish
- [ ] Image optimization (Astro Image component)
- [ ] Code splitting verification
- [ ] Lazy loading for below-fold content
- [ ] Lighthouse audit and fixes
- [ ] Cross-browser testing

## Phase 7: Deployment

### 7.1 Deployment Setup
- [ ] Configure Vercel deployment
- [ ] GitHub Actions CI/CD workflow
- [ ] Auto-deploy on main branch push
- [ ] Custom domain configuration guide

### 7.2 Documentation
- [ ] README with setup instructions
- [ ] Content creation guide
- [ ] Deployment guide
