# Technical SEO audit — 18 September 2026

Production baseline: `6992ee1b500a217747ecad1c3af98ac2da4d18b0`.
Canonical origin: `https://dayova.com`.

## Findings and changes

- All 53 sitemap pages return HTTP 200, have a unique canonical matching their
  sitemap URL, and allow indexing. Their main content and links are present in
  the server HTML. No JavaScript execution is required to discover the articles.
- `/downloads` was an orphan: listed in the sitemap but absent from internal
  links. Added a permanent Downloads link to both main navigation and footer.
- `/kontakt` redirected to a nonexistent `/#kontakt` anchor. It now redirects
  directly to `/support`.
- The former contact URL
  `/kontakt-zu-dayova-schuelerfoerderung-fuer-leichteres-lernen/` was reported as
  a 404 in Search Console. Both slash variants now redirect to `/support`.
- `/ueberuns` now points directly to the dedicated `/about` page.
- Legacy URLs with a trailing slash used two redirects: slash removal, then
  legacy mapping. Legacy mappings now run first and accept both variants;
  canonical URLs with a slash still redirect to their slash-free equivalent.
  Query parameters remain intact.
- Removed an unreliable shared static-page `lastmod` date. The blog overview
  now uses the latest actual article modification date. Article dates and the
  verified downloads modification date remain available in the sitemap.
- New code, added link labels and destination paths use English. Existing
  German editorial content and established blog slugs are preserved.

## Domain and indexing policy

- HTTPS works and sends HSTS. `www.dayova.com`, `dayova.de` and `www.dayova.de`
  permanently redirect to `https://dayova.com`, preserving the path.
- Vercel first upgrades HTTP to HTTPS on the requested host. An HTTP request to
  an alias therefore takes two platform redirects. The application cannot
  shorten a redirect that happens before it executes. Internal links and
  sitemap entries use the canonical HTTPS origin, avoiding this path.
- Legal, checkout and app-only legal/support pages intentionally retain
  `noindex`; they are absent from the sitemap. Dashboard/API crawl restrictions
  and the production dashboard gate are preserved.
- The retired author archive `/author/philipp-schossig/` and the invalid path
  `/Caroudsana/takes/takes/ul` have no equivalent current content and retain real
  404 responses. They are not linked internally. Redirecting them to unrelated
  content would not be a useful repair.

## Search Console baseline

The Page Indexing report was last updated on 14 September 2026:

| Status | Count | Interpretation |
| --- | ---: | --- |
| Indexed | 59 | Includes Google's historical URL inventory |
| Excluded by noindex | 4 | Legal pages and old legal URLs |
| Redirected | 4 | Historical URL variants |
| Not found | 3 | Old contact URL repaired; two legitimate removals |
| Crawled, not indexed | 4 | One current article, favicon and two old URLs |
| Discovered, not indexed | 7 | Five articles, parents and schools |

Validation for the seven discovered URLs was already running since
17 September. A technically indexable page is not necessarily indexed;
Google decides when to crawl and whether to include it.

## Verification

- Production build, TypeScript, ESLint and whitespace validation.
- Existing SEO audit: 53 pages, zero errors; optional structured-data notices
  on downloads and support are outside this technical-foundation change.
- Public smoke test: 72 pages, 14 images, zero failures.
- `npm run seo:technical`: checks direct HTTP responses, canonical URLs,
  robots headers/metadata, robots.txt, sitemap consistency, server-rendered
  content, homepage reachability, internal links and anchors, slash
  normalization, legacy redirects, campaign parameters, intended noindex and
  genuine 404 responses. Set `SEO_BASE_URL` to audit a deployed origin.

Deployment and Search Console submission results are recorded after the
production verification.
