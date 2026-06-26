# Audit Report: `feature/pink-reskin` — Isaac Vitae

**Branch:** `feature/pink-reskin` (HEAD `9d15652`)  
**Date:** 2026-06-26  
**Stack:** React 19 · Vite · Tailwind v4 · GSAP · Motion · Lenis  
**Design vocab:** Catppuccin Mocha dark · Pink `#ec4899` · Quicksand/Playfair Display/Fira Code · Editorial scale · `ease-spring-soft` primary · `clip-reveal`, `fade-up`, `scale-materialize`, `split-text`, `draw-stroke` verbs

---

## Executive Summary

This branch is in a strong state with a coherent dark-pink identity, full-screen overlay nav (reverted from sidebar), Gwern-style security page with 32 disclosures, complete Font Sensus→Urutau migration, and consistent `ease-project` usage. The audit identifies **7 quick wins**, **6 medium investments**, and **4 major redesigns**. The primary gap is **motion verb depth** (only 2–3 of 12 available verbs actively used across the site) and **page-specific pattern application** (most pages use generic fade-up/grid layouts).

---

## 1. Quick Wins (1–2 hours each)

### 1.1 Add `prefers-reduced-motion` fallback for `SplitText` component
**File:** `src/components/SplitText.tsx`  
**Issue:** The SplitText component animates `y` and `opacity` without a reduced-motion guard. The global CSS rule at `index.css:333` kills *all* animation/transition duration, which works as a sledgehammer but means SplitText letters may still stack with `overflow: hidden` artifacts.  
**Fix:** Add a `matchMedia('prefers-reduced-motion: reduce')` check — if matched, render children as plain text with `opacity: 1; transform: none` and skip the `SplitType` instantiation entirely.

### 1.2 Home hero parallax via Motion `useScroll` instead of raw scroll listener  
**File:** `src/pages/Home.tsx:37-41`  
**Issue:** The hero parallax (background gradient + content fade) uses a raw `window.addEventListener('scroll', ...)` with direct `gsap.set()` calls. This bypasses Lenis and runs on every scroll frame with manual cleanup.  
**Fix:** Replace with Motion's `useScroll` + `useTransform` for the gradient `y` offset and content opacity. This integrates with the existing Motion import and avoids manual RAF management.

### 1.3 Security page: `key` prop warning on table rows  
**File:** `src/pages/Security.tsx:207`  
**Issue:** The expandable detail rows use a `<React.Fragment>` without a `key` on the `<tr>` elements. This causes React warnings.  
**Fix:** Wrap each disclosure row + its detail row in a proper fragment or `<tbody key={d.id}>`.

### 1.4 Add `type="button"` to filter buttons  
**Files:** `src/pages/Security.tsx`, `src/pages/Skills.tsx`, `src/pages/Projects.tsx`  
**Issue:** Several `<button>` elements lack `type="button"`, which can cause implicit form submission if they accidentally end up inside a `<form>`. The contact form's rate-limit/status buttons are correctly typed, but the tag filter and code-reveal toggles are not.

### 1.5 GSAP ScrollTrigger refresh on dynamic content  
**Files:** `src/pages/Projects.tsx`, `src/pages/Security.tsx`  
**Issue:** The `TagFilter` in Projects.tsx causes the card grid to re-render (filtered list changes), but `ScrollTrigger.refresh()` is not called after filter change. Cards entering/exiting the DOM may have stale ScrollTrigger calculations.  
**Fix:** Add a `useEffect` that calls `ScrollTrigger.refresh()` after `selectedTags` changes in the Projects component — a 150ms debounce to avoid thrashing.

### 1.6 `font-family` fallback order  
**File:** `src/index.css:48-51`  
**Issue:** `--font-serif` and `--font-sans` both list `'Quicksand', ui-sans-serif, system-ui, sans-serif`. Since they both resolve to the same font, `--font-serif` effectively does nothing. If the intent is editorial contrast, `--font-serif` should use a distinct pairing. Currently all text (body + headings + labels) is rendered in Quicksand. Consider at minimum using Playfair Display for h1–h4 headings to create a real serif/sans hierarchy.

### 1.7 Remove orphan Playground route exclusion code  
**File:** `src/pages/Playground.tsx`  
**Issue:** The route is commented out in Nav.tsx (`// Temporarily hidden`) but the Playground component is still imported and routed in App.tsx. Visitors could navigate directly to `/playground`. Either fully remove or fully enable.

---

## 2. Medium Investments (Half-day each)

### 2.1 Page transitions: wire AnimatePresence mode="wait" with clip-path  
**File:** `src/App.tsx:129-136`  
**Current:** Simple `fade-up`/`fade-down` on route change (opacity + y).  
**Recommended:** Use **Pattern: `page-transitions`** from the catalog — a `clip-reveal` page transition (inset(0 0 100% 0) → inset(0 0 0 0)) that gives a cinematic wipe between routes. This is already partially set up (AnimatePresence + key on location), but the exit variant is a basic fade.  
**Why:** The pattern describes a dual-layer clip-path overlay that sequences exit→enter. This would elevate the SPA feel from "decent" to "cinematic" and uses an easing curve the project already owns (`--ease-expo-out`).

### 2.2 Security page: numbered archive list pattern  
**File:** `src/pages/Security.tsx`  
**Current:** Gwern-style table with expandable rows — functional but text-dense.  
**Recommended:** Add an **alternate toggle** using **Pattern: `archive-list`** from the catalog (`design-catalog/patterns/archive-list.md`). The zero-padded sequential numbers (`001`, `002`…) with a hover-reveal full-bleed image behind the text row would give the timeline section ("Three Waves") a magazine TOC feel. This pattern's numbered-row structure maps 1:1 to the disclosure data (id, title, organization, severity).  
**Why (from pattern doc):** "Portfolio: project archive with editorial elegance… case study index: numbered list with hover previews." The timeline section already groups disclosures by wave — applying the archive-list styling makes each row feel curated rather than tabular.

### 2.3 Experience page timeline: draw-stroke on connection line  
**File:** `src/pages/Experience.tsx:62-66`  
**Current:** A `scaleY` animation fills the accent-colored line from top to bottom.  
**Recommended:** Use **Motion Verb: `draw-stroke`** on an SVG path for the timeline line. The catalog's `draw-stroke` verb (`index.css:174-183`) already exists with keyframes — but it's not used anywhere in the app today. This would be its first genuine application.  
**Why:** The `draw-stroke` verb is a perfect match for a timeline: the stroke animates from 0 to full length as the user scrolls, giving the line a "sketched" quality that complements the editorial typography. It's one of this project's declared motion verbs, so using it closes a compliance gap.

### 2.4 Home hero: split-text chars on name  
**File:** `src/pages/Home.tsx:100-117`  
**Current:** The first name uses SplitText with `splitType="words"`, the last name is a plain `<span>`. The subtitle also uses word-level split.  
**Recommended:** Change the first name to `splitType="chars"` for a character-level stagger reveal (the name is only 6 letters — the stagger would resolve in ~360ms, creating a delicate "spelling out" effect). Add a `clip-reveal` on the last-name span that triggers after the first name animation completes.  
**Why the catalog:** The design system maps "Portfolio / Personal" domains to `split-text` as the primary hero entry verb. Character-level split is more dramatic than word-level for short names.

### 2.5 CV page: print-optimized CSS + drop caps  
**File:** `src/pages/CV.tsx`  
**Current:** A functional resume page with standard web formatting.  
**Recommended:** Add `@media print` rules using **Pattern: `gwern-knowledge-archive`** elements — CSS dropcaps (`::first-letter` for the summary), `max-width: 70ch` for reading comfort, and footnote-style citation markers for project URLs. The `section-root` padding (`8rem`) should collapse to `0.5in` on print.  
**Why:** The CV is intended for both screen and PDF download — print CSS makes the screen preview match the printed output. The Gwern dropcap pattern (`gwern-knowledge-archive.md:295-323`) is zero-dependency CSS.

### 2.6 Index.css audit: remove unused keyframe + verb artifacts  
**File:** `src/index.css`  
**Issue:** The `clip-reveal` keyframe and class are defined, but only used in the menu backdrop (`#primary-menu` override at lines 143-154). The `.clip-reveal-up` class may also be applied to `.proj-label`, `.about-label`, `.contact-label`, `.sec-label` but GSAP's `.from()` with `{opacity: 0, y: 20}` actually drives the reveal — the CSS class is either redundant or conflicting. Similarly, `draw-stroke` keyframes exist but are not applied to any element.  
**Recommended:** Either remove unused `draw-stroke` and generic `clip-reveal-up` if not used, or wire them into actual elements and remove the GSAP `.from()` calls for a pure-CSS reveal. This reduces the CSS payload and resolves a compliance gap (design system says draw-stroke is a declared verb but it's dead code).

---

## 3. Major Redesigns (Multi-day)

### 3.1 Navigation: apply `sticky-split-panel-minimal` pattern for desktop
**Current:** Full-screen overlay menu that covers the entire viewport — dramatic but loses persistent navigation context. You reverted from a sidebar (`f939cf6`) because it broke layout (`6399012`).  
**Recommended:** **Pattern: `sticky-split-panel-minimal`** (Kyrylo Orlov at `design-catalog/patterns/sticky-split-panel-minimal.md`). On desktop (≥40rem), use a CSS Grid split: left panel (7/12 columns) is `position: sticky; height: 100dvh` containing the numbered nav list + email + language toggle. Right panel (5/12 columns) scrolls with page content. On mobile, collapse to single column with the existing overlay or a bottom sheet (pattern has a mobile sheet implementation).  
**Why this time it won't break layout:** The previous sidebar attempt applied custom fixed positioning that interfered with the GSAP-scrolled content. The split-panel pattern uses CSS Grid `sticky` within the normal document flow — it stays within the grid parent, doesn't require fragile offset calculations, and the pattern's React port (`SplitPanelLayout`) is tested.  
**Implementation hint:** Move the current `<Nav />` + `<main>` + `<Footer />` structure inside a grid container. The nav becomes the left panel, `<Routes>` output becomes the right panel, `<Footer>` stays inside the right panel.

### 3.2 Projects page: numbered grid with hover reveal  
**Current:** Three-tier card system (Tier1/2/3) using generic `radial-gradient` backgrounds and `rotate-depth` hover. Cards are visually similar despite tier differences.  
**Recommended:** Apply **Pattern: `project-numbered-grid`** (Sutéra at `design-catalog/patterns/project-numbered-grid.md`) to the Featured and Case Study tiers. Each card gets a large serif numeral (01–09) at `clamp(3rem, 6vw, 5rem)` that shifts from `opacity: 0.4` to `opacity: 1` on hover. The number becomes the visual anchor instead of the SVG icon. For the Tier3 "Other Projects" grid, keep the simpler card but use **Pattern: `infinite-scroll-carousel`** (`design-catalog/patterns/infinite-scroll-carousel.md`) — a GSAP `horizontalLoop` of small project cards that the user can drag through, with a dual-row counter marquee behind for editorial rhythm.  
**Why:** The numbered grid pattern maps 1:1 to the projects data (sequential, categorized, with metadata). The infinite carousel for "Other" avoids a third grid style and creates a visual distinction between featured/case-study (editorial list) and side projects (explorable gallery).

### 3.3 Home: cinematic hero with parallax layers  
**Current:** A centered layout with avatar, split-text name, bio, CTA buttons, and corner decorations. The parallax is limited to a background gradient that moves at 0.3x scroll speed.  
**Recommended:** Compose a multi-layer hero using patterns from:
- **Pattern: `parallax-image-stack`** (`design-catalog/patterns/parallax-image-stack.md`) — a full-viewport image (a code screenshot or abstract tech visual) at -10% inset that parallaxes at a different rate than the content.
- **Motion Verb: `blur-sharpen`** — apply a `filter: blur(10px) → blur(0)` to a background element as the primary entrance, creating a "coming into focus" effect that resolves to the split-text name.
- **Pattern: `magnetic-hover`** — apply to the primary CTA button. The catalog provides a `useMagneticHover` hook (`magnetic-hover.md`) that uses Motion's `useMotionValue` + `useSpring` for cursor-follow.
**Why:** The hero is the first impression but currently has no visual "wow" — it's a centered column with animation. A parallax stack + blur-sharpen entrance + magnetic CTA aligns with the "Portfolio / Personal" domain mapping (primary verbs: `split-text`, `rotate-depth`, `draw-stroke`) and creates depth.

### 3.4 About page: split-text bio + timeline with draw-stroke  
**Current:** Plain paragraphs with fade-up staggered entries. The stat counter uses a minimal GSAP tween.  
**Recommended:**
- Apply `splitType="lines"` to the bio paragraph using `SplitText`, with increased stagger (0.12) for a reading-rhythm effect.
- Replace the stat grid's GSAP `.from()` with **Motion Verb: `odometer-roll`** — the catalog provides a React `OdometerDigit` component that rolls digits like a car odometer. Each stat (3 columns) gets its own roll animation pinned via ScrollTrigger.
- Add a **Pattern: `draw-stroke`** SVG divider between sections — an ornamental line that draws itself between the bio and the personal section.
**Why:** The odometer verb is declared but unused anywhere. About is the natural home for stats/counters. The line-level split-text makes a multi-sentence bio feel more curated than a wall of text.

---

## 4. Design System Compliance Gaps

| # | Requirement | Status | Gap |
|---|---|---|---|
| 1 | `--ease-project` alias used everywhere | ✅ Good | All GSAP tweens and CSS transitions use either `var(--ease-project)` or exported `EASE_PRIMARY`/`EASE_SECONDARY` constants |
| 2 | Font pairing matches a declared pairing | ⚠️ Partial | Quicksand (body) + Playfair Display (menu only) + Fira Code (mono) doesn't match any of the 8 declared pairings exactly. Closest is `font-editorial` (Literata + Playfair Display + Fira Code) or `font-minimal` (Inter + Instrument Serif + Fira Code). Quicksand is neither Literata, Inter, DM Sans, nor any listed body font. |
| 3 | Scale matches declared scale | ✅ Good | `scale-editorial` tokens match exactly |
| 4 | Easing tokens match catalog | ✅ Good | All `--ease-*` tokens present, spring-soft values match |
| 5 | Color tokens match catalog structure | ✅ Good | `--color-primary`, `--color-accent`, `--color-surface`, etc. present |
| 6 | Dark mode with class+preference | ✅ Good | `.dark-mode` class (CSS at 275) + prefers-color-scheme media query at 333 |
| 7 | Motion verbs per domain (max 2–3 primary) | ⚠️ Partial | 5 verbs declared (`clip-reveal`, `fade-up`, `scale-materialize`, `split-text`, `draw-stroke`) but Portfolio domain should use exactly `split-text`, `rotate-depth`, `draw-stroke` per catalog. `clip-reveal` is overused (applied to every section label). |
| 8 | `prefers-reduced-motion: reduce` present | ✅ Good | Present at line 333, but see SplitText gap (1.1) |
| 9 | Each motion verb has individual fallback | ❌ Missing | No per-verb fallbacks — only the global `animation-duration: 0.01ms` blanket rule. SplitText, draw-stroke, and clip-reveal should have explicit fallback CSS classes. |
| 10 | 1 unique motion verb per project | ⚠️ Partial | `draw-stroke` is declared but unused (dead code). No verb is truly unique to this project vs. others in the catalog. |

### Recommended font pairing change

Current Quicksand is not in the catalog. Two options:
- **Switch to `font-editorial`**: Import Literata for body, keep Playfair Display for headings. This is the closest match to the current editorial scale and would give real serif/sans contrast.
- **Switch to `font-minimal`**: Import Inter + Instrument Serif. Fira Code stays as mono. This gives a cleaner "developer portfolio" feel.

Either choice resolves the compliance gap. The decision depends on whether you want editorial warmth (Literata) or modern minimalism (Inter).

---

## 5. Pattern Applications Per Page

| Page | Current Style | Recommended Pattern(s) | Reasoning |
|---|---|---|---|
| **Home** | Centered hero, parallax gradient, corner decorations | `parallax-image-stack` for hero depth + `magnetic-hover` on CTA + `blur-sharpen` entrance | Creates cinematic first impression; leverages unused `blur-sharpen` |
| **About** | Plain paragraphs, stat counter, fade-up | `odometer-roll` for stats + `split-text lines` for bio + `draw-stroke` SVG divider | Odometer verb unused; About is natural home for stats |
| **Experience** | Vertical timeline with marker dots, scaleY line | `draw-stroke` on timeline SVG + **add** `horizontalLoop` for alternating left/right cards on desktop | draw-stroke verb exists but unused; timeline is its ideal medium |
| **Projects** | Tier1/2/3 generic cards | `project-numbered-grid` for Featured + `infinite-scroll-carousel` for "Other Projects" | Numbered grid maps 1:1 to structured project data; carousel differentiates side projects |
| **Security** | Gwern-style table, filter, timeline waves | `archive-list` for timeline waves (numbered rows with hover-reveal) + continue using `gwern-knowledge-archive` for table | Archive-list gives timeline a magazine TOC feel; Gwern table is correct for the data table |
| **Skills** | Bubble grid with draggable cards, code reveal | `attorney-grouped-cards` for grouped skill categories (filter by type) + **maybe** `geometric-bg` for background pattern | Current drill-down skill page is overengineered (1092 lines); attorney-grouped-cards provides simpler category filter |
| **Gallery** | (Hidden in Nav but routed) | `cinematic-carousel` for full-bleed image view + `3d-carousel` if synced with thumbnail strip | Perfect fit for image browsing |
| **Certificates** | (Not reviewed in depth) | `project-numbered-grid` — the numbered list with serif numerals maps directly to certificate ordering | Same pattern logic as projects |
| **CV** | Clean print layout, dual download | `gwern-knowledge-archive` dropcaps + print CSS + `typography-scale` per-breakpoint | Gwern's `max-width: 70ch` + dropcaps gives a scholarly feel |
| **Contact** | Form + info list, GSAP reveal | `magnetic-hover` on submit button + **add** `typewriter` effect on the "Talk to me" headline | typewriter verb unused; magnetic button uses existing Motion vector |
| **Playground** | Hidden from Nav | `3d-carousel` for interactive demos + `odometer-roll` for live stats + `scramble-text` (already partially used) | Playground's purpose is playful effects — host unused verbs here |

---

## 6. Accessibility & Performance Opportunities

| Issue | File | Fix | Effort |
|---|---|---|---|
| No skip-to-content link | `index.html` / `App.tsx` | Add `<a href="#main-content">` at the start of `<body>` | Quick |
| No `<main>` landmark role | `App.tsx:130` | `<main>` exists but needs `id="main-content"` for skip link | Quick |
| Custom cursor hides all native pointers | `index.css:330` | `html { cursor: none }` affects all users. Respect `prefers-reduced-motion` or add a user preference toggle | Medium |
| Focus management after route change | `App.tsx` | No focus reset to `<h1>` after navigation. Add `useEffect` to focus the page heading | Quick |
| Images lack explicit `width`/`height` | Various | Avatar image lacks aspect-ratio CLS optimization. Add `width`/`height` | Quick |
| No critical CSS inlining | `index.html` | Full CSS loaded via `@import` in `index.css`. Consider inlining above-fold styles | Medium |
| Bundle splitting | `App.tsx` | All 14 routes eagerly imported. Use `React.lazy` + `Suspense` for pages below the fold (Gallery, Certificates, Playground, Security)* | Medium |
| No AVIF/WebP fallback | Public images | Only `.jpg` found. Add AVIF with `<picture>` fallback | Quick |
| `key` prop warnings | `Security.tsx:207` | Fragment rows missing keys | Quick |

*Suspension note: `lazy()` is safe here because React 19 supports it natively and the `AnimatePresence` wrapper will handle the loading state gracefully.

---

## 7. Recommended Motion Verb Distribution

Per the design system rule "2–3 primary verbs per project," currently the site overuses `fade-up` (applied to every section) and underuses the other four declared verbs. Recommended redistribution:

| Verb | Current Usage | Target Usage |
|---|---|---|
| `split-text` | Hero name, subtitle, section titles (6 pages) | Keep — good coverage, but add character-level for short names |
| `clip-reveal` | Section labels, menu overlay | Reduce — use only for primary hero and page transitions |
| `fade-up` | Every section body (overused) | Reduce by 50% — replace with `clip-reveal` for section containers and `scale-materialize` for cards |
| `scale-materialize` | Project cards, certificates | Keep — good fit, add to Skills category bubbles |
| `draw-stroke` | **Unused (dead code)** | Add to Experience timeline + ornamental page dividers |

Unused verbs from design system that should be considered:
- `blur-sharpen` → Home hero background entrance
- `magnetic-hover` → All CTA buttons, social icons, nav links
- `odometer-roll` → About stats, Security counters
- `typewriter` → Contact headline, security disclosure intro text

---

## 8. Summary of Recommendations by Priority

### Must-fix (compliance + correctness)
1. Add `prefers-reduced-motion` fallback to SplitText component
2. Fix table row `key` prop warnings in Security.tsx
3. Resolve font pairing compliance (choose `font-editorial` or `font-minimal`)
4. Add per-verb reduced-motion fallbacks (or document why the global blanket rule is sufficient)
5. Remove dead `draw-stroke` keyframes OR wire them into actual elements

### Should-fix (experience + polish)
6. Replace raw scroll listener with Motion's `useScroll` on Home hero
7. Wire page transitions to `clip-reveal` overlay
8. Apply `archive-list` pattern to Security timeline waves
9. Apply `draw-stroke` to Experience timeline
10. Add `ScrollTrigger.refresh()` on tag filter change in Projects
11. Add print CSS to CV page

### Could-fix (major redesigns)
12. Desktop nav redesign with `sticky-split-panel-minimal` pattern
13. Projects page with `project-numbered-grid` + `infinite-scroll-carousel`
14. Cinematic hero with `parallax-image-stack` + `blur-sharpen` + `magnetic-hover`
15. About page with `odometer-roll` stats and `split-text lines`
