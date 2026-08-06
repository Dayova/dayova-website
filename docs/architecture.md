# Dayova Website Architecture

## Marketing routes

All public pages live in the `src/app/(marketing)` route group. Its shared
layout renders the header and footer once, while every page owns its metadata
and page-specific content.

The current public routes are:

- `/` — student-focused homepage
- `/blog` — editorial shell; article data starts in `src/content/blog.ts`
- `/parents` — parent audience
- `/schools` — institutional audience and offer request
- `/pricing` — student subscriptions and custom school pricing
- `/impressum` and `/datenschutz` — legal content

The next editorial step can add `src/app/(marketing)/blog/[slug]/page.tsx`
without changing the shared layout or navigation.

## Future school access

A teacher or school access product is intentionally not implemented yet. When
approved, it should use a separate route group such as
`src/app/(school-access)` with its own authenticated layout. Public school
marketing remains under `/schools`; authenticated application screens should
not be placed inside that marketing route.

## Checkout boundary

Pricing content is typed in `src/content/pricing.ts`. The student offer uses one
interactive card with the stable billing IDs `annual` and `monthly`; its CTA
renders the active cycle as a matching `data-plan-id`. At the moment, the CTA
opens a contact email because the payment provider, tax model, and app-store
compliance decision are not final.

When checkout is approved:

1. Keep the billing IDs and unified student pricing card unchanged.
2. Add a server-side checkout adapter for the selected provider.
3. Replace the email destination with a route handler or server action.
4. Validate prices on the server; never trust the browser plan price.
5. Add provider-specific environment variables and update the privacy policy.

This keeps payment infrastructure outside the presentation components and
allows Stripe, a Merchant of Record, or another provider to be selected without
redesigning the page.

## Content and design system

- Global launch and external links: `src/config/site.ts`
- Navigation: `src/content/navigation.ts`
- Homepage copy: `src/content/home.ts`
- Pricing: `src/content/pricing.ts`
- Blog planning: `src/content/blog.ts`
- Typography: `src/app/typography.css` and `docs/typography.md`
- Theme and spacing: `src/app/tokens.css`
- Shared component styles: `src/app/globals.css`
