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
renders the active cycle as a matching `data-plan-id`. The student CTA now
starts a server-validated RevenueCat Web Purchase Link. The current website has
no production learner login, so anonymous checkout and a short-lived RevenueCat
Redemption Link provide the secure handoff to the authenticated mobile app
account, including the approved parent-payer flow.

Checkout follows these boundaries:

1. Keep the billing IDs and unified student pricing card unchanged.
2. Resolve RevenueCat package IDs only on the server.
3. Validate the billing cycle in the `/checkout` route handler before redirecting.
4. Validate prices on the server; never trust the browser plan price.
5. Configure production and sandbox purchase links separately and complete the
   privacy-policy review before launch.

Implementation and RevenueCat dashboard requirements are documented in
`docs/revenuecat-checkout.md`.

## Content and design system

- Global launch and external links: `src/config/site.ts`
- Navigation: `src/content/navigation.ts`
- Homepage copy: `src/content/home.ts`
- Pricing: `src/content/pricing.ts`
- Blog planning: `src/content/blog.ts`
- Typography: `src/app/typography.css` and `docs/typography.md`
- Theme and spacing: `src/app/tokens.css`
- Shared component styles: `src/app/globals.css`
