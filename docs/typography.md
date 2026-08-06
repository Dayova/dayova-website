# Dayova Typography Guidelines

Dayova uses Poppins across the complete website. The type system is designed to
feel clear, calm, friendly, and product-focused, with hierarchy coming from
size, weight, spacing, and contrast rather than decoration.

## Typeface and loading

- Primary typeface: Poppins
- System fallback stack: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`,
  `system-ui`, `sans-serif`
- Source: locally hosted WOFF2 files through `next/font/local`
- Font display strategy: `swap`
- Website weights: 400, 500, 600, and 700

Local hosting avoids a render-blocking third-party font request while producing
the same Poppins visual result.

## Responsive scale

| Role | Size | Weight | Line height |
| --- | ---: | ---: | ---: |
| Hero claim | `clamp(40px, 5vw, 56px)` | 700 | 1.08 |
| Page heading | `clamp(28px, 3vw, 32px)` | 700 | 1.2 |
| Section heading | `clamp(20px, 2.4vw, 24px)` | 600 | 1.2 |
| Card heading | 20px | 600 | 1.2 |
| Body | 16px | 400 | 1.6 |
| Secondary/meta | 14px | 400–500 | 1.6 |
| Label | 12px | 600 | 1.5 |

The hero uses `-0.02em` tracking. Other headings use `-0.015em`; body text
keeps neutral tracking.

## Usage

- Use one `h1` per page for the primary message.
- Use the `.dayova-hero-claim` role only for the homepage claim.
- Use `h2` for major sections and `h3` for cards or smaller content groups.
- Keep semantic heading order; do not choose a heading only for its visual size.
- Keep paragraphs concise and no wider than approximately 70–80 characters.
- Use weight 500 for emphasis, 600 for controls and section titles, and 700
  only for main headings.
- The same scale applies in light and dark mode.

## Implementation

The source of truth is `src/app/typography.css`. Tailwind-compatible text roles
are exposed by `src/app/globals.css`:

- `text-dayova-hero`
- `text-dayova-h1`
- `text-dayova-h2`
- `text-dayova-h3`
- `text-dayova-body-lg`
- `text-dayova-body`
- `text-dayova-small`
- `text-dayova-label`

Prefer these roles and the semantic heading styles over one-off font sizes.
