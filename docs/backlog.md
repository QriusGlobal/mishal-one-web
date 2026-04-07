# mishal.one — Page Backlog

## BRAND-001: Brand & Trademark Guidelines Page

**Priority**: P2 (2 weeks)
**Route**: `/brand`
**Reference**: [Framer /brand](https://www.framer.com/brand) — clean, single-page layout with assets, usage rules, and legal language.

### Problem

No public-facing brand page exists. External collaborators, press, event organisers, and partners have no canonical source for:
- Correct logo usage
- Official colour palette
- Typography rules
- Trademark / attribution requirements

### Page Sections

#### 1. Hero
- Page title: "Brand Guidelines"
- One-line description: usage guidance for the Mishal name, logo, and wordmark
- Last-updated date

#### 2. Essentials — Logo & Wordmark
- **Logo icon** — primary mark, square crop, SVG + PNG
- **Wordmark** — "mishal.one" horizontal lockup, SVG + PNG
- Variants: light background, dark background, monochrome
- Download button per asset (zip of SVG + PNG @1x @2x)

#### 3. Colour Palette
- Primary palette (sourced from design tokens `color.navy.*`, `color.gold.*`, `color.teal.*`, `color.coral.*`)
- Neutral palette (sourced from `color.neutral.*`)
- Semantic colours (background, surface, primary, secondary, accent)
- Each swatch: name, hex, oklch/hsl value, copy-to-clipboard
- Dark mode variants shown side-by-side

#### 4. Typography
- Display typeface: Artifika (serif) — headings, hero text
- Body typeface: Atkinson Hyperlegible Next (sans) — body, UI text, accessibility-first
- Monospace typeface: Fira Code — code blocks
- Type scale: display, heading, body, caption sizes from design tokens
- Line height guidance

#### 5. Partnerships & Co-branding
- Clear space rules (minimum padding around logo)
- Pairing rules: match logo types (wordmark + wordmark, icon + icon)
- Sizing: partner marks must match the Mishal mark in visual weight
- Separator: use a divider line or "x" between marks

#### 6. Usage Rules — Do's and Don'ts
Visual grid showing correct vs incorrect usage:

**Never**:
- Outline or stroke the logo
- Rotate, skew, or warp
- Apply unapproved colour treatments
- Place on low-contrast backgrounds
- Stretch or distort proportions
- Combine the wordmark with other words
- Use non-official typefaces in the logo
- Modify spacing between logo elements

**Always**:
- Use provided SVG/PNG assets
- Maintain minimum clear space
- Use on solid or simple backgrounds
- Respect minimum size (define px minimum)

#### 7. Trademark & Legal
- Trademark ownership statement
- Attribution requirements for third-party use
- Link to full trademark policy (separate page or PDF, future)
- Contact for brand enquiries: brand@mishal.one (or similar)

#### 8. Download
- Single "Download Brand Kit" button
- Contains: all logo variants, colour swatches, usage one-pager PDF

---

### Dependencies

| Dependency | Status | Notes |
|-----------|--------|-------|
| Brand identity designed (logo, wordmark) | **Not started** | Placeholder SVGs exist — need final design |
| Design tokens finalised | **Done** | DTCG pipeline operational, brand palette applied |
| Accent colour palette chosen | **Done** | Navy/Gold/Teal/Coral — see branding/color-role-analysis.md |
| Typography confirmed | **Done** | Artifika (display) + Atkinson Hyperlegible Next (body) |
| Astro page routing | **Ready** | Create `src/pages/brand.astro` |
| Asset export pipeline | **Not started** | SVG source → optimised SVG + PNG @1x @2x |

### Implementation Plan

#### Phase 1: Content & Structure (no design needed)
1. Create `src/pages/brand.astro` with route `/brand`
2. Create `src/components/brand/` component directory:
   - `ColourSwatch.astro` — renders a single colour card with hex, copy button
   - `ColourPalette.astro` — renders a palette section from token data
   - `AssetCard.astro` — logo variant with preview + download link
   - `UsageRule.astro` — do/don't card with image + label
3. Build page skeleton with all 8 sections using placeholder content
4. Wire colour palette section to read from `design-tokens/` at build time
5. Add `noindex` meta until page is ready for public

#### Phase 2: Brand Assets (requires design work)
1. Finalise logo icon + wordmark (Mishal's creative decision)
2. Choose accent colour palette → update `design-tokens/primitive/color.tokens.json`
3. Confirm typography choices → update `design-tokens/primitive/typography.tokens.json`
4. Export logo variants: light, dark, monochrome × SVG, PNG @1x, PNG @2x
5. Create brand kit zip for download section
6. Populate do's/don'ts with real visual examples

#### Phase 3: Polish & Ship
1. Remove `noindex` from brand page
2. Add to site navigation
3. Add OG image for the brand page
4. Final review of legal/trademark language

### Acceptance Criteria

- [ ] `/brand` route renders all 8 sections
- [ ] Colour palette reads live from design tokens (not hardcoded)
- [ ] All logo variants downloadable as SVG + PNG
- [ ] Copy-to-clipboard works for colour hex values
- [ ] Dark mode renders correctly with inverted examples
- [ ] Usage rules grid has visual examples (not just text)
- [ ] Trademark section has clear attribution language
- [ ] Page passes Lighthouse accessibility audit
- [ ] Brand kit download contains all assets in one zip
