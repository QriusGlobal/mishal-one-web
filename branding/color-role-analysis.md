# Color Role Analysis — mishal.one

## Source Palette (9 colors from Coolors)

| # | Name | Hex | Group |
|---|------|-----|-------|
| 1 | Black | #000000 | Dark |
| 2 | Prussian Blue | #001d3d | Dark |
| 3 | Regal Navy | #003566 | Dark |
| 4 | School Bus Yellow | #ffc300 | Light/Warm |
| 5 | Gold | #ffd60a | Light/Warm |
| 6 | Alabaster Grey | #e5e5e5 | Light/Neutral |
| 7 | Pale Sky | #b3cde0 | Light/Cool |
| 8 | Vibrant Coral | #ff6f61 | Accent/Warm |
| 9 | Pine Teal | #004d40 | Dark/Cool |

## Contrast Matrix (WCAG AA 4.5:1) — from Coolors checker

Accessible foreground/background pairs:

| Background | Passes with (foreground) |
|-----------|------------------------|
| Black (#000000) | Yellow, Gold, Alabaster, Pale Sky |
| Prussian Blue (#001d3d) | Yellow, Gold, Alabaster, Pale Sky |
| Regal Navy (#003566) | Yellow, Gold, Alabaster, Pale Sky, Coral |
| Yellow (#ffc300) | Black, Prussian Blue, Regal Navy, Pine Teal |
| Gold (#ffd60a) | Black, Prussian Blue, Regal Navy, Pine Teal |
| Alabaster (#e5e5e5) | Black, Prussian Blue, Regal Navy, Pine Teal |
| Pale Sky (#b3cde0) | Black, Prussian Blue, Regal Navy |
| Coral (#ff6f61) | Black, Prussian Blue, Regal Navy |
| Pine Teal (#004d40) | Yellow, Gold, Alabaster, Pale Sky, Coral |

**Failing pairs (do NOT use for text):**
- Yellow on Alabaster (both light)
- Coral on Yellow/Gold/Alabaster/Pale Sky (insufficient contrast)
- Pine Teal on Black/Prussian/Navy (dark-on-dark)
- Pale Sky on Alabaster (both light)

## Laws of UX Applied

### 1. Von Restorff Effect (Isolation Effect)
The item that visually differs from a group is most remembered.
- **Decision**: Yellow (#ffc300) is the CTA/action color — it's the warmest, most saturated color against the cool navy palette
- Yellow on Navy is the highest-impact pair in this palette

### 2. Aesthetic-Usability Effect
Beautiful interfaces are perceived as more usable.
- **Decision**: Navy + Gold is a premium, authoritative pairing — suits "Builder. Thinker. Operator." positioning
- Avoid overusing Coral — it competes with Yellow for attention

### 3. Hick's Law (Reduce Choices)
- **Decision**: ONE primary action color (Yellow), ONE secondary action color (Pine Teal)
- Coral reserved exclusively for destructive/error states — never for CTA

### 4. Jakob's Law (Familiar Patterns)
Users expect: dark text on light backgrounds for body, blue-ish tones for links, warm tones for alerts.
- **Decision**: Black/Navy text on white/Alabaster for body text
- Regal Navy for links (familiar "blue link" pattern but on-brand)
- Coral for errors/warnings (universally understood warm = caution)

### 5. Doherty Threshold (Response Perception)
Visual hierarchy guides scanning speed.
- **Decision**: 3-level typographic hierarchy using color weight:
  - H1/hero: Regal Navy or White-on-Navy (highest weight)
  - H2/section: Regal Navy on light (medium weight)
  - Body: Black on white (neutral, fast reading)
  - Meta/caption: Pale Sky or Navy at reduced opacity

### 6. Accessibility (WCAG AA — non-negotiable)
All text pairings MUST hit 4.5:1. The contrast matrix is the hard constraint.
- Body text: Black on White (21:1) or Prussian Blue on White (~16:1)
- CTA: Black on Yellow (~15:1)
- Dark mode body: Alabaster on Prussian Blue (~12:1)

## Semantic Role Assignment

### Light Mode

| Role | Token | Color | Hex | Contrast Pair | Ratio |
|------|-------|-------|-----|---------------|-------|
| Background | `background` | White | #ffffff | — | — |
| On-background (body text) | `on-background` | Black | #000000 | on White | 21:1 |
| Surface (cards) | `surface` | White | #ffffff | — | — |
| Surface muted (sections) | `surface-muted` | Alabaster | #e5e5e5 | — | — |
| On-surface | `on-surface` | Black | #000000 | on White | 21:1 |
| On-surface-variant (secondary text) | `on-surface-variant` | Regal Navy | #003566 | on White | ~11:1 |
| Primary (brand identity) | `primary` | Regal Navy | #003566 | — | — |
| On-primary | `on-primary` | White | #ffffff | on Navy | ~11:1 |
| Primary container (light navy bg) | `primary-container` | Pale Sky | #b3cde0 | — | — |
| On-primary-container | `on-primary-container` | Prussian Blue | #001d3d | on Pale Sky | ~8:1 |
| Secondary (supporting accent) | `secondary` | Pine Teal | #004d40 | — | — |
| On-secondary | `on-secondary` | White | #ffffff | on Teal | ~8:1 |
| Accent (CTA / action) | `accent` | Yellow | #ffc300 | — | — |
| On-accent | `on-accent` | Black | #000000 | on Yellow | ~15:1 |
| Accent highlight (hover) | `accent-highlight` | Gold | #ffd60a | — | — |
| Outline (borders) | `outline` | Pale Sky | #b3cde0 | — | — |
| Outline variant (subtle dividers) | `outline-variant` | Alabaster | #e5e5e5 | — | — |
| Error | `error` | Coral | #ff6f61 | — | — |
| On-error | `on-error` | Black | #000000 | on Coral | ~5:1 |

### Dark Mode

| Role | Token override | Color | Hex | Contrast Pair | Ratio |
|------|---------------|-------|-----|---------------|-------|
| Background | `background` | Prussian Blue | #001d3d | — | — |
| On-background | `on-background` | Alabaster | #e5e5e5 | on Prussian | ~12:1 |
| Surface | `surface` | Regal Navy | #003566 | — | — |
| Surface muted | `surface-muted` | Prussian Blue | #001d3d | — | — |
| On-surface | `on-surface` | Alabaster | #e5e5e5 | on Navy | ~8:1 |
| On-surface-variant | `on-surface-variant` | Pale Sky | #b3cde0 | on Navy | ~5:1 |
| Primary | `primary` | Gold | #ffd60a | — | — |
| On-primary | `on-primary` | Black | #000000 | on Gold | ~16:1 |
| Primary container | `primary-container` | Prussian Blue | #001d3d | — | — |
| On-primary-container | `on-primary-container` | Gold | #ffd60a | on Prussian | ~13:1 |
| Accent | `accent` | Yellow | #ffc300 | — | — |
| On-accent | `on-accent` | Black | #000000 | on Yellow | ~15:1 |
| Outline | `outline` | Regal Navy | #003566 | — | — |
| Error | `error` | Coral | #ff6f61 | — | — |
| On-error | `on-error` | Black | #000000 | on Coral | ~5:1 |

## Color Usage Rules

### Primary Actions (buttons, CTAs)
- Light mode: Yellow (#ffc300) bg + Black text
- Dark mode: Yellow (#ffc300) bg + Black text (same — yellow works universally)
- Hover: Gold (#ffd60a) bg + Black text

### Links
- Light mode: Regal Navy (#003566) — familiar blue-link pattern, on-brand
- Dark mode: Gold (#ffd60a) — high contrast on dark backgrounds

### Destructive Actions
- Coral (#ff6f61) bg + Black text
- NEVER use Coral for CTAs — reserved for error/warning states only

### Informational / Passive
- Pale Sky (#b3cde0) bg + Prussian Blue (#001d3d) text
- Used for: info banners, tags, badges, code blocks

### Typography

| Typeface | Role | Why |
|----------|------|-----|
| Artifika | Display/headings | Serif character adds warmth + authority to the navy/gold palette |
| Atkinson Hyperlegible | Body/UI text | Designed by Braille Institute for maximum legibility — every letterform is distinct. Critical for accessibility. |

## Palette Harmony

The palette follows a **split-complementary** structure:
- **Dominant**: Navy family (Prussian Blue → Regal Navy) — cool, authoritative
- **Accent warm**: Yellow/Gold — complementary to blue, creates energy
- **Accent cool**: Pine Teal — analogous to navy, adds depth without competing
- **Neutral**: Black + Alabaster + Pale Sky — the workhorses
- **Signal**: Coral — isolated for attention states only

This structure means you can build an entire page with just Navy + Alabaster + Yellow and it will feel complete. Pine Teal, Pale Sky, and Coral are supporting players.
