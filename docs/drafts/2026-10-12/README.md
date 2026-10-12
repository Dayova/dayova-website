# Unpublished website drafts — 12 October 2026

The school marketing page, free web study planner and homepage contact form were withdrawn from the public website at the owner’s request. These snapshots are drafts, not routes, and are outside `public/` and `src/app/`.

Baseline: `f93ae945cc4f8ae934f7ed96563155ee10fd294e` on `Dayova/dayova-website`.

## Restoring a draft

- `schools-page.tsx.txt` → `src/app/(marketing)/schools/page.tsx`
- `study-plan-page.tsx.txt` → `src/app/(marketing)/tools/study-plan/page.tsx`
- `contact-form.tsx.txt` → `src/components/contact-form.tsx`; restore its import and render in the homepage only when approved.
- `school-pricing-card.tsx.txt` and `pricing.ts.txt` preserve the school offer and FAQ. Shared implementation and styling remain in source for reuse but are not mounted publicly.

The planner implementation remains in `src/components/tools/study-plan-builder.tsx` and `src/lib/study-plan.ts`, with its existing tests. Reintroducing either page also requires a deliberate review of navigation, sitemap, metadata and inbound article links.

The retired URLs `/schools`, `/schulen` and `/tools/study-plan` must return 404. Hiding navigation alone or using noindex is not sufficient. No publicly accessible draft route is provided.
