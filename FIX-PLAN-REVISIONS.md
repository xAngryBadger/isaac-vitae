# Fix Plan: Visual Regressions on `ousado` Branch

## Summary
The Sprint 0-5 rework introduced 5 regressions vs the gold-deployed site (and vs `feature/pink-reskin`):

| # | Issue | File | Origin Commit | Severity |
|---|-------|------|---------------|----------|
| 1 | Home: parallax background duplicates avatar photo | `src/pages/Home.tsx` | `5471abf` (Sprint 2.1) | High |
| 2 | Skills: lost rich StoryCards + Playground, reduced 1096→254 lines | `src/pages/Skills.tsx` | `5f39bfa` (Sprint 4.1) | Critical |
| 3 | Projects: numbered card numeral overlaps year display | `src/pages/Projects.tsx` | `0ee4723` (Sprint 3.1) | Medium |
| 4 | Security: expandible detail rows don't match bookshelf table layout | `src/pages/Security.tsx` | `125b852` (Sprint 3.2) | Medium |
| 5 | Font inconsistency: Skills heading uses `--font-display` (Cinzel), others use `--font-serif` (Libre Caslon) | `src/pages/Skills.tsx`, `src/index.css` | `e857da6` + `5f39bfa` | Medium |

---

## Fix 1: Home — Remove Parallax Background Photo Duplication

**File**: `src/pages/Home.tsx`  
**Lines**: 54-62  
**Problem**: Lines 54-61 set `foto-isaac.jpg` as full-screen parallax background. Lines 96-100 render the same photo as avatar.  
**Solution**: Revert to subtle gradient background (original from before Sprint 2.1), keep parallax on gradient only.

```tsx
// REPLACE lines 54-62:
<div className="hero-bg-gradient absolute inset-0 blur-sharpen parallax-bg"
  data-speed="0.3"
  style={{
    backgroundImage:
    "radial-gradient(ellipse at 70% 20%, var(--color-bg-elevated) 0%, transparent 50%)",
  }}
/>
<div className="absolute inset-0" style={{ backgroundColor: "rgba(29,32,33,0.55)" }} />
```

---

## Fix 2: Skills — Restore Original Rich Layout (StoryCards + Playground)

**File**: `src/pages/Skills.tsx`  
**Problem**: Complete rewrite lost 840 lines of rich content.  
**Source**: Recover from `5f39bfa^:src/pages/Skills.tsx` (the original before refactor).  
**Must Restore**:
- `StoryCard` component with: icon, story proof, skill tags with hover, `CodeReveal`, linked projects
- `Playground` component with 4 tabs: Spring, Parallax, ReAct, Pipeline demos
- GSAP scroll animations for header, StoryCards, Playground
- Heading "A história das minhas habilidades" with `SplitText` (words) using `font-serif` (Libre Caslon)
- 2-column grid responsive (1 col mobile)
- Category icons per group (Cpu, Server, Cloud, Brain, Plug, Wrench)

**Merge Strategy**: Keep the filter buttons from new version if desired, but primary UI = original StoryCard grid. The filter can be a progressive enhancement on top.

---

## Fix 3: Projects — Separate Numeral from Year

**File**: `src/pages/Projects.tsx`  
**Lines**: 50-70 (NumberedGridCard)  
**Problem**: `project-card-num` (large serif numeral) at top-left, AND `proj.year` in small mono font immediately below → visual clash.  
**Solution**: 
- Option A: Move year to bottom of card (near tech tags)
- Option B: Keep year but style it as a small badge, numeral stays top-left as visual anchor
- Option C: Remove year from Tier 1/2 cards (it's in the case study detail anyway)

**Recommended**: Option B — year as subtle badge top-right, numeral top-left.

```tsx
// In NumberedGridCard, replace lines 54-70:
<div className="flex items-center justify-between flex-wrap gap-2">
  <span className="project-card-num absolute top-4 left-5 pointer-events-none select-none z-10">
    {num}
  </span>
  <div className="flex items-center gap-2 flex-wrap">
    <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: proj.color }}>
      {proj.year}
    </span>
    {proj.inProgress && (/* WIP badge */)}
  </div>
</div>
```

---

## Fix 4: Security — Align Expandibles with Bookshelf Table

**File**: `src/pages/Security.tsx`  
**Problem**: The expandible detail rows (`.sec-detail-row`) render as separate table rows below the main table, but they don't visually connect to the "bookshelf" aesthetic (Gwern-style table). The expand animation is missing/broken.  
**Solution**: 
- Ensure expandibles use same column structure as main table
- Add smooth height/opacity animation on expand
- Keep the numbered wave timeline (from Sprint 3.2) but ensure it doesn't conflict

**Check**: The `sec-detail-row` cells should span all columns, use same border/background tokens as table rows.

---

## Fix 5: Font Consistency — Unify Heading Font Tokens

**Files**: `src/pages/Skills.tsx` (line 73), `src/index.css` (tokens), other pages  
**Problem**: 
- Skills h2 uses `fontFamily: "var(--font-display)"` (Cinzel Decorative)
- All other pages use `font-serif` (Libre Caslon Display) for headings
- Original Skills used `font-serif` + `SplitText` for "minhas habilidades"

**Decision**: 
- `--font-serif` = Libre Caslon Display → all page headings (h1, h2, h3, h4)
- `--font-display` = Cinzel Decorative → ONLY for designated display/accent slots (hero numerals, eyebrow labels, special hero text)
- `--font-menu` = Playfair Display → nav only

**Action**: 
1. Change Skills h2 to use `font-serif` class (or `fontFamily: "var(--font-serif)"`)
2. Keep `SplitText` on "minhas habilidades" heading
3. Audit all pages for consistent heading font usage

---

## Implementation Order

1. **Fix 1 (Home)** — Quick, isolated, high impact
2. **Fix 2 (Skills)** — Largest, restore from git, test
3. **Fix 5 (Fonts)** — Quick, affects consistency
4. **Fix 3 (Projects)** — Isolated component change
5. **Fix 4 (Security)** — Verify expandibles, adjust CSS

---

## Verification Checklist

- [ ] Home: no duplicate photo, avatar only, subtle gradient bg
- [ ] Skills: StoryCards grid, Playground tabs, GSAP animations, SplitText heading
- [ ] Projects: numeral top-left, year top-right, no visual clash
- [ ] Security: expandibles match table aesthetic, smooth animation
- [ ] All pages: headings use Libre Caslon (--font-serif), Cinzel only for display accents
- [ ] Build passes: `npm run build` ✓, `npx tsc --noEmit` ✓