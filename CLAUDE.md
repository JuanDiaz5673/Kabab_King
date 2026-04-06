# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Build & Dev Commands

```bash
npm run dev      # Dev server on localhost:3000
npm run build    # Static export to /out/
npm run lint     # ESLint
```

**Node.js >=20.9.0 required** (Next.js 16 constraint). If the system default is older, use fnm/nvm to switch.

## Architecture

**Next.js 16.2.2** static site (`output: 'export'` in next.config.ts) using the App Router with React 19 and Tailwind CSS v4. No API routes, no SSR, no ISR — all pages are pre-rendered at build time.

### Routes

| Route | Layout metadata | Page type |
|-------|----------------|-----------|
| `/` | Root layout | Server component |
| `/menu` | `menu/layout.tsx` | Client (`'use client'` — search/filter) |
| `/order` | `order/layout.tsx` | Client (cart functionality) |
| `/catering` | `catering/layout.tsx` | Client (form) |
| `/about` | Metadata in `page.tsx` | Server component |
| `/contact` | `contact/layout.tsx` | Client (form) |

### Key Directories

- `src/app/` — App Router pages and layouts. Each sub-route has its own `layout.tsx` for per-page metadata (OG tags, canonical URLs, breadcrumb JSON-LD).
- `src/components/` — Shared components: `Navbar.tsx` (client, fixed header with mobile hamburger menu) and `Footer.tsx` (server).
- `src/data/menu.ts` — All menu items (60+ dishes), categories, images, and derived exports (`popularItems`, `categoryImages`, `heroImage`). This is the single source of truth for menu data — the root layout imports it to build Menu schema JSON-LD.
- `public/` — Static assets (logos, OG image, sitemap.xml, robots.txt).

### SEO Structure

The root layout (`src/app/layout.tsx`) contains:
- Global `Metadata` export with `metadataBase`, OG tags, Twitter cards, robots directives
- `buildJsonLd()` function that generates Restaurant + Menu + Review + AggregateRating + BreadcrumbList schema, dynamically pulling menu items from `src/data/menu.ts`

Each sub-route layout adds its own page-specific metadata (title, description, OG, Twitter, canonical) and a BreadcrumbList JSON-LD script tag.

The canonical base URL is `https://kababking.com` (stored as `BASE_URL` constant in layouts).

## Design System

**Fonts:** Cormorant Garamond (`.font-display` class, headings) and Outfit (body text), loaded via Google Fonts in root layout `<head>`.

**Colors** (defined as `@theme` variables in `globals.css`, usable as Tailwind classes like `bg-crimson`, `text-maroon-dark`):
- **Maroon** (`#5B1A1A`) — primary brand
- **Crimson** (`#C41E3A`) — CTAs, accents, focus rings
- **Gold** (`#D4A843`) — decorative accents, shimmer effects
- **Cream** (`#FDF8F0`) / Warm White (`#FEFCF9`) — backgrounds
- **Charcoal** (`#2C2421`) — primary text
- **Warm Gray** (`#6B5E53`) — secondary text

**Custom CSS utilities** in `globals.css`: `.grain` (texture overlay), `.gold-shimmer` (animated gradient text), `.ornament-divider` (decorative line), `.anim-fade-up`, `.hide-scrollbar`.

## Static Export Constraints

Since `output: 'export'`:
- No `sitemap.ts` or `robots.ts` (use static files in `public/` instead)
- No dynamic route handlers or API routes
- `images.unoptimized: true` — Next.js Image component works but without server-side optimization
- External images (Unsplash, Wikimedia) are configured in `next.config.ts` `remotePatterns`

## Import Alias

Use `@/` for `src/` imports: `@/components/Navbar`, `@/data/menu`.
