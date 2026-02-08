# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies (uses pnpm 10.28.2)
pnpm build            # Build site (eleventy)
pnpm serve            # Dev server with hot reload (eleventy --serve)
```

No test or lint commands are configured.

## Architecture

Eleventy 3.x static site using ESM (`"type": "module"`). Liquid templating throughout.

- **Input:** `src/` — **Output:** `_site/`
- **CSS:** `css/` at repo root, passed through to `_site/` via Eleventy config
- **Deployed to:** GitHub Pages via GitHub Actions on push to `main` (Node 20, pnpm)
- **Domain:** joepfohl.com (CNAME file at repo root, also passed through)

### Layout chain

`base.liquid` → `post.liquid` (for blog posts) or `resume.liquid` (for resume page)

- `base.liquid` — HTML shell, nav, footer, Google Fonts (Inter, Source Serif 4, JetBrains Mono)
- `post.liquid` — Article wrapper with title, date, tags display
- `resume.liquid` — Sets `resumePage: true` flag (used by base layout for CSS class), wraps content in `.resume` div

### Content

- **Posts** go in `src/posts/` as Markdown/Liquid files with frontmatter (`title`, `date`, optional `description`, `tags`, `draft`)
- `posts.11tydata.js` auto-applies `post.liquid` layout and `"posts"` tag to everything in `src/posts/`
- **Draft posts** (`draft: true` in frontmatter) are visible during `pnpm serve` but excluded from `pnpm build`
- Homepage (`src/index.liquid`) shows the 5 most recent posts
- Blog listing (`src/blog/index.liquid`) shows all posts
- Tag pages auto-generated via Eleventy pagination in `src/tags/`

### Custom collection

`eleventy.config.js` defines an "untagged" collection: posts whose only tag is the auto-applied "posts" (i.e., no real content tags).

### Styling

`css/style.css` is the full design system — dark mode via `prefers-color-scheme` media query with CSS custom properties. Print styles hide nav/footer. `css/syntax.css` is Prism Okaidia for code blocks.

### Legacy

An old `index.html` exists at repo root from pre-Eleventy days. It doesn't conflict because Eleventy only reads from `src/`.
