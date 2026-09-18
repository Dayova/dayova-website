# Dayova content SEO — 18 September 2026

## Scope update

At the user’s request, both proposed feature pages have been removed from the draft. The free study-plan calculator is the only new website route. Navigation, sitemap and contextual links now point to the calculator or existing pages. Nothing from this package has been released to production.

## Research and editorial decisions

Research combines Dayova's Search Console query report with a qualitative review of public search results. The site's non-brand data is sparse. These are search-intent hypotheses, not keyword-volume estimates or a ranking forecast. Raw account metrics stay outside this public repository.

| Search cluster | Intent | Destination and distinct benefit |
| --- | --- | --- |
| Lernplan erstellen kostenlos, ohne Anmeldung | Complete a task immediately | `/tools/study-plan`: working calculator with editable topics, weekday selection, capacity limits, later review sessions, text export and printing |
| Lernplan für Prüfungen, Lernzeit einteilen | Learn a method | Existing `/blog/ein-lernplan-der-in-deinen-alltag-passt`: five-step guide and a checkable weekly-time calculation |
| Lernfortschritt messen, nachvollziehbare Lernfortschritte | Evaluate learning independently | Existing `/blog/warum-fortschritt-unsichtbar-bleibt`: observation template and comparable-task examples; no grade predictions |
| Lern-App oder Nachhilfe, passende Lernhilfe | Compare alternatives | Existing `/blog/eine-lern-app-sollte-dir-arbeit-abnehmen`: calendar, flashcards, videos, planner and personal help compared by need; vendor authorship disclosed |
| Dayova Erfahrungen | Check credibility | `/about`: established company history and a link to public App Store reviews; no invented testimonials or efficacy statistics |

The three existing guides retain their established URLs and original publication dates. Nine overlapping supplemental sections are consolidated into the revised core articles. There are still 45 articles. Revised articles display the actual update date. No arbitrary word-count target or weekly-publication promise is used.

New routes and code identifiers are English; editorial copy remains German. Existing German article slugs are retained to preserve their incoming links.

## Evidence boundaries

- Product examples are explicitly illustrative, not documented customer outcomes.
- No completed school pilot, before/after result or customer quotation is claimed without supplied evidence and permission.
- App Store and website annual prices differ; copy identifies website prices and directs readers to the purchase confirmation for the actual store offer.
- Competitor pages inform intent classification, not unverified feature-by-feature superiority claims.

## Calculator design

One examination, 1–8 topics, 1–90 calendar days, selected weekdays, 15–240 available minutes per day. The examination day is excluded. At least 20% of daily time remains free, rounded conservatively to five-minute capacity. Initial practice alternates between topics in blocks of at most 25 minutes. Review time is an additional 25%, rounded up to five minutes with a ten-minute minimum per topic, and starts no earlier than a later study day. These are transparent model assumptions, not scientifically validated prescriptions.

Unscheduled practice and review remain visible. Input changes mark the result as stale and disable download/print until recalculated. Calculations run locally in the browser without an account or persistent plan storage. Static instructions and an example remain available without JavaScript. The tool makes no assessment of examination readiness.

## Sources reviewed

- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [StudySmarter: Lernplan](https://www.studysmarter.de/features/lernplan/)
- [Studyflix: Lernplan erstellen](https://studyflix.de/schule-und-lernen/lernplan-erstellen-5991)
- [MyMap: Study Plan Maker](https://www.mymap.ai/de/tools/study-plan-maker)
- [Studentenring: Online-Nachhilfe vs. Lernapp](https://onlinenachhilfe.studentenring.de/online-nachhilfe-vs-lernapp/)
- [EEF: Metacognition and Self-Regulated Learning](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition)
- [Dayova's public App Store listing](https://apps.apple.com/de/app/dayova/id6768416097)

## Validation status

- Production build, TypeScript and ESLint pass.
- Eight calculator tests pass: example calculation, time bounds, weekday/examination exclusions, overflow accounting, later review, multiple-topic conservation, calendar edge cases, invalid input and plain-text export.
- Before the scope reduction: SEO audit 56 pages / 0 errors; technical audit 60 internal targets and 32 legacy redirects / 0 failures; smoke test 75 pages and 14 images passes. Downloads and support retain their two existing optional structured-data notices.
- Chrome: successful example calculation, insufficient-time warning, stale-result export protection, empty-weekday validation and adding/removing topics verified.
- Chrome visual review: calculator at 390px and 1440px, learning-planning page and updated article at 390px; no horizontal document overflow. Corrected a nested date badge found during review. Text download verified on disk; two-page print preview inspected with repeated table header and assumptions intact, then cancelled without printing.
- Final route count after removing the two feature pages and excluding the QR landing page: 53 indexable sitemap pages. No production deployment has been performed for this content package.

## Requested refinements

- Study-plan FAQ now reuses the homepage accordion component, including its styling and native details/summary behavior; inline links remain accessible.
- The example uses exactly three consecutive learning days (weekends included), with shorter topic estimates that fit the available time. The explanatory static example also uses three days.
- “Neuen Plan erstellen” clears dates, topics and results. Custom plans retain the existing 1–90 day range and editable weekdays.
- `/downloads` remains a working direct/QR landing page with its existing canonical and store links. Removed from menu, footer, internal content links and sitemap; set to `noindex, follow`. Main app-download buttons continue linking directly to the appropriate store.
- Validation: nine calculator tests, ESLint, production build and TypeScript pass. SEO audit: 53 pages, zero errors, one pre-existing support JSON-LD advisory. Technical audit: 57 internal targets, 32 redirects, zero failures, including the QR landing page's 200 response and canonical.
- Chrome confirmed the three-day result (100/100 minutes), clearing the example, and the expanded FAQ in the shared homepage design.
