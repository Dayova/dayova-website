# Dayova Website Design System

This document is the implementation reference for Dayova's marketing website. The system is inspired by Apple's clarity and restraint while preserving Dayova's own product identity.

## Principles

- Strong hierarchy and concise content
- Generous, intentional whitespace
- Calm surfaces with precise blue accents
- Robust responsive layouts without fragile overlaps
- Accessible controls with a minimum 44px target size
- Short, subtle motion that respects reduced-motion preferences

## Typography

Poppins is the primary typeface, with Apple and system fonts as fallbacks:

```css
font-family: "Poppins", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

The font files are stored locally and loaded through `next/font/local` to avoid an external font request and reduce layout shift.

| Role | Size | Weight | Line height |
| --- | --- | --- | --- |
| Hero claim | `clamp(40px, 5vw, 56px)` | 700 | 1.08 |
| Page title | `clamp(28px, 3vw, 32px)` | 700 | 1.15 |
| Section title | `clamp(20px, 2.4vw, 24px)` | 600 | 1.2 |
| Card title | 20px | 600 | 1.25 |
| Body | 16px | 400 | 1.6 |
| Secondary / meta | 14px | 400–500 | 1.55 |
| Navigation / button | 15–16px | 500–600 | 1.2 |

Display headings use slightly tightened tracking. Body copy remains neutral and should normally stay below 80 characters per line.

## Spacing

All layout spacing uses a 4px base grid:

| Token | Value |
| --- | --- |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-14` | 56px |
| `--space-16` | 64px |
| `--space-20` | 80px |

The homepage uses a wide presentation canvas up to 1920px so its composition
continues to match the approved reference screenshots. Text blocks and reading
content remain constrained to roughly 70–80 characters. Horizontal page
padding is 16px on mobile, 24px on tablet, and 32px on desktop.

Standard sections use 48px vertical padding on mobile and 64px on desktop. The homepage hero uses 56px on mobile and 80px on desktop.

## Grid

- Mobile: one column with 24px gaps
- Tablet: layouts may use two columns from 768px
- Desktop: twelve-column grid with 24px gaps from 1024px
- Cards and content align to the wide marketing canvas, while readable text
  remains constrained inside each composition

## Color

The main brand color is `#008aff`.

### Light mode

- Page background: `#f6f6f4`
- Surface: `#fafaf8`
- Elevated surface: `#ffffff`
- Primary text: `#1a1a1a`
- Secondary text: `#737780`
- Border: `#dedfdd`

### Dark mode

- Page background: `#212325`
- Surface: `#26292c`
- Elevated surface: `#2b2e32`
- Primary text: `#ffffff`
- Secondary text: `#b0b2ba`
- Border: `#41464c`

Blue is reserved for primary actions, links, selected states, and important product moments.

## Corner radii

| Token | Value | Typical use |
| --- | --- | --- |
| `--radius-xs` | 4px | Small badges |
| `--radius-sm` | 8px | Inputs and compact surfaces |
| `--radius-md` | 12px | Controls and standard cards |
| `--radius-lg` | 16px | Feature cards and panels |
| `--radius-xl` | 24px | Hero and CTA blocks |
| `--radius-pill` | 9999px | Pills and status chips |

For nested surfaces, use `inner radius = outer radius - padding` when practical. If the padding equals or exceeds the outer radius, the inner surface has no radius.

## Controls

- Minimum height: 44px
- Horizontal padding: 16–20px
- Primary: vertical Dayova blue-to-cyan gradient, white label, fully pill-shaped
- Secondary: transparent surface, blue border and label, matching pill radius
- Icon-to-label gap: 8px
- Focus: visible 2px blue ring with adequate offset

Primary buttons are at least 48px tall, while compact header controls remain at least 44px tall. Buttons use a deeper blue gradient and subtle elevation on hover. Decorative arrows are not added to button labels.

## Motion

- Standard duration: 180ms
- Easing: ease-out
- Cards may lift slightly and gain a soft shadow on hover
- Avoid parallax and large continuous movement
- Disable non-essential transitions when `prefers-reduced-motion: reduce` is active

## Implementation

- Design tokens: `src/app/tokens.css`
- Typography utilities: `src/app/typography.css`
- Global primitives and layout utilities: `src/app/globals.css`
- Shared layout components: `src/components/`

New components should consume these tokens and shared classes instead of introducing one-off colors, radii, or spacing values.
