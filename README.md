# Dayova Website

The launch website for Dayova, built with the Next.js App Router, TypeScript,
and Tailwind CSS.

The repository language is English. Customer-facing website copy remains in
German because the current product audience is German-speaking.

## Local development

```bash
npm install
npm run dev
```

The website is then available at
[http://localhost:3000](http://localhost:3000).

## Launch behavior

The launch date and all central links are defined in `src/config/site.ts`.
Before that date, the primary CTA points to Instagram. From the launch date
onward, the website automatically switches to App Store and Google Play
download buttons as soon as both final store links are configured.

The final store URLs can be supplied as environment variables without changing
the code:

```bash
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/...
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/...
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/...
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/...
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/@...
```

Until both store links are available, the Instagram CTA remains active. This
prevents the website from linking to an imprecise store search or an
unpublished product.

## Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Routes

- `/` — student-focused homepage
- `/blog` — blog shell with prepared article cards
- `/eltern` — parent-focused marketing page
- `/schulen` — school offer
- `/preise` — student subscriptions and custom school pricing
- `/impressum` and `/datenschutz` — legal pages

A future protected teacher experience will be implemented as a separate
product surface and will not be mixed into the public marketing routes.

## Project structure

- `src/app/(marketing)` — public marketing layout and audience routes
- `src/components/sections` — standalone homepage sections
- `src/components/blog` and `src/components/pricing` — domain components
- `src/components/ui` — reusable UI primitives
- `src/content` — centrally maintained navigation, articles, pricing, and copy
- `src/config/site.ts` — launch date, social, contact, and store links
- `src/app/tokens.css` — color, surface, spacing, and theme tokens
- `public/images` — product screens and mockups from the Dayova app

Additional architecture decisions and the prepared checkout boundary are
documented in [`docs/architecture.md`](docs/architecture.md).

The visual foundations, spacing rules, typography, color system, radii, and
interaction standards are documented in
[`docs/design-system.md`](docs/design-system.md).

## TypeScript standards

The project follows strict TypeScript practices inspired by Matt Pocock's
Total TypeScript guidance:

- strict type checking and safer indexed access
- explicit type-only imports
- `satisfies` for validating configuration objects without losing inference
- no unchecked type errors in production builds
- a dedicated `npm run typecheck` command for CI and local verification

See [`docs/typescript.md`](docs/typescript.md) for the complete conventions.
