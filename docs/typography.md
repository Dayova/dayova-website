# Dayova Typography Guidelines

Dayova uses Poppins across the complete website. The type system should feel
clean, calm, friendly, and product-focused. Hierarchy comes from size, weight,
spacing, and contrast rather than decorative treatments.

## Typeface and loading

- Primary and only typeface: Poppins
- Source: locally hosted WOFF2 files through `next/font/local`
- Fallback: Arial, then the browser sans-serif default
- Font display strategy: `swap`
- Supported weights in the website bundle: 400, 500, 600, and 700
- Approved weights for website content:
  - 700 for the main page heading and the Dayova wordmark
  - 600 for section headings, card headings, important buttons, and questions
  - 500 for lower-priority controls and labels
  - 400 for paragraphs, descriptions, answers, and form inputs

## Responsive scale

| Role | Desktop | Tablet | Mobile | Weight |
| --- | ---: | ---: | ---: | ---: |
| Heading 1 | 44px | 36px | 28px | 700 |
| Heading 2 | 26px | 22px | 20px | 600 |
| Heading 3 | 22px | 20px | 18px | 600 |
| Large body | 18px | 17px | 16px | 400 |
| Body | 16px | 16px | 15px | 400 |
| Small text | 14px | 14px | 13px | 400 |
| Label | 12px | 12px | 11px | 500–600 |

Tablet begins below 1024px. Mobile begins below 640px.

## Line height and tracking

- Headings use a compact `1.16` line height on desktop and tablet.
- Headings use a `1.18` line height on mobile.
- Body text uses a generous `1.72` line height, reduced slightly to `1.7` on
  mobile.
- Heading tracking is slightly tightened at `-0.025em`.
- Body tracking remains neutral.
- Uppercase section labels use `0.12em` tracking for clarity at small sizes.

## Usage

- Use one `h1` per page for the primary message.
- Use `h2` for major sections.
- Use `h3` for cards, steps, payment paths, and smaller content groups.
- Do not use heading sizes only to make text visually larger. Preserve semantic
  heading order.
- Keep paragraphs short and scannable. Avoid bolding entire paragraphs.
- Buttons use 600 for primary actions and may use 500 for secondary controls.
- FAQ questions use 600; answers use 400.
- The same tokens apply in light and dark mode. Theme changes affect color and
  contrast, not hierarchy.

## Implementation

The source of truth is `src/app/typography.css`. Color, surface, spacing, and
motion tokens live in `src/app/tokens.css`. Responsive CSS custom properties
control the scale, and `src/app/globals.css` exposes matching Tailwind v4
utilities:

- `font-sans`
- `text-dayova-h1`
- `text-dayova-h2`
- `text-dayova-h3`
- `text-dayova-body-lg`
- `text-dayova-body`
- `text-dayova-small`
- `text-dayova-label`

Prefer these roles and tokens over one-off font sizes.
