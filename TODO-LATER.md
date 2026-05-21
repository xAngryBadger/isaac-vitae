# TODO — Later

Deferred improvements from the portfolio overhaul (May 2026).

## High Priority

- [ ] **Profile photo in hero** — No visual identity on the landing. Options: real photo with parallax, stylized illustration, or silhouette. Photo asset exists at `public/images/foto-isaac.jpg` (currently only used as OG image).
- [ ] **Credly badge links for Cisco certs** — 4 Cisco certs (Python Essentials 1 & 2, Data Science, Data Analytics) + Networking Basics all have verifiable digital badges on Credly. Link them directly on the Certificates page for instant credibility. The ENAP/Serpro AI cert likely also has a verifiable link.
- [ ] **Project screenshots/demos** — HarpIA, SRF System, and Hello Social have zero visual assets. Even a terminal recording (asciinema), Loom demo, or mockup screenshots would dramatically improve credibility. MaineCoon has `cli.png` and `chat.png` in `public/images/projects/mainecoon/` but they're not wired into the case study data — orphaned assets.

## Medium Priority

- [ ] **GitHub shields.io badges** — Add language count, LOC, last commit, license badges to each project case study. Makes projects feel alive and verifiable.
- [ ] **Missing social/professional links** — Lattes (Brazilian academic CV — essential for Engenharia de Computação), Dev.to or Medium blog (signals intent even if empty), Figma portfolio (relevant for design quality), NPM or PyPI (relevant for tool builders).
- [ ] **Experience section enrichment** — Only 2 entries. Add: Freelance / Personal Projects category (HarpIA, Flora Sensus are substantial), university projects/research from Engenharia de Computação, open source contributions.
- [ ] **Contact form → real backend** — Current Formspree free tier has limits. Consider: honeypot + Cloudflare Turnstile (server-side verification), or a simple Cloudflare Workers / Netlify Functions endpoint.

## Upcoming Projects

- [ ] **Kakapo (Image Studio)** — Image tool with amber/coral palette. Kakapo = world's only flightless parrot, famously photogenic. Editorial design system, Playfair+Inter+JetBrains, GitHub Pages.
- [ ] **Oilbird (Markdown→PDF)** — Markdown to PDF converter with ink/ivory palette. Oilbird = nocturnal bird that navigates by echolocation. Transforms raw markdown into beautiful PDF. Editorial design system, GitHub Pages.
- [ ] **Tarsier (JSON Transformer)** — Rename/rebuild json-forge with emerald/teal palette. Tarsier = those enormous eyes that parse everything. Editorial design system, GitHub Pages.

## Low Priority

- [ ] **KUMON English cert** — Show the 3-year duration more prominently, link to verification URL if available.
- [ ] **Wire up MaineCoon screenshots** — Add `gallery` array to `caseStudies.mainecoon` in `content.ts` pointing to existing `cli.png` and `chat.png`.
- [ ] **README update** — Current README references "React 18", "tsParticles", "dark theme" but actual codebase uses React 19, no particles, warm earthy color scheme.
- [ ] **Review accuracy of project descriptions** — Audit all project descriptions in `content.ts` against actual codebase capabilities and READMEs. Ensure metrics (LOC, feature counts) are current.
- [ ] **Create image/icon generation prompts** — Design fast, reusable prompts for Midjourney/DALL-E/Flux to generate project thumbnails, hero images, and section icons that match the warm earthy design system.
