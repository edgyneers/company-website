# Wastara Studio — website

Static Astro site in English (`/`) and Bahasa Indonesia (`/id/`). Pages: Projects (home) and About.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static files in dist/ — deploy to Vercel, Netlify, Cloudflare Pages or GitHub Pages
```

## Where to edit

| What | File |
| --- | --- |
| YouTube video ID, Instagram, email | `src/config.ts` |
| All page copy, EN and ID side by side | `src/i18n/ui.ts` |
| Domain (canonical + hreflang URLs) | `site` in `astro.config.mjs` |
| Colours and fonts | `src/styles/global.css` |
| Team members | the `team` list in `src/components/AboutPage.astro` |

Text in `[brackets]` is a placeholder.

## Why it loads fast

- No JavaScript is shipped except a tiny script for the video's play button.
- The YouTube player (~1 MB) only loads when someone presses play; until then the poster is an inline SVG.
- Fonts are self-hosted (Fontsource); browsers only download the Latin subset.
- CSS is inlined into each page, so there's no extra stylesheet request.
- The EN/ID toggle is two links to separate pre-built pages, not a text swap in the browser, so both languages can be indexed by search engines.
