# TypeScript Standards

The Dayova website uses TypeScript as a correctness tool, not only as syntax.
These conventions are inspired by Matt Pocock's Total TypeScript guidance and
adapted to the Next.js App Router.

## Compiler settings

The source of truth is `tsconfig.json`.

- `strict` enables TypeScript's strict checking family.
- `noUncheckedIndexedAccess` makes indexed array and object access reflect the
  possibility of a missing value.
- `verbatimModuleSyntax` requires type-only imports to be written with
  `import type`.
- `moduleDetection: "force"` treats every source file as a module.
- `noImplicitOverride` requires explicit `override` modifiers when classes are
  introduced.
- `noEmit` keeps transpilation under Next.js rather than TypeScript.

Do not disable production type checking. Run `npm run typecheck` before a
production build when changing shared types, content models, or configuration.

## Type design

- Prefer inference for local implementation details.
- Give exported data structures a named type when they form a stable boundary.
- Use discriminated unions for state with a finite set of valid variants.
- Use `satisfies` to validate configuration and content objects while
  preserving their literal types.
- Use `as const` for immutable literal collections only when literal inference
  is useful.
- Avoid `any`. Narrow `unknown` before using it.
- Avoid type assertions unless runtime knowledge cannot be represented more
  safely.

## React and Next.js

- Keep Server Components as the default; add `"use client"` only when browser
  state, effects, or event handlers require it.
- Use `import type` for React, Next.js, and library types.
- Keep component props small and explicit.
- Prefer composition over large components with many boolean props.
- Keep URL, launch, pricing, and navigation data in typed configuration or
  content modules rather than duplicating literals in components.

## Repository language

Developer-facing documentation, code comments, configuration notes, commit
messages, and pull request descriptions should be written in English.
Customer-facing website copy, metadata, labels, and accessibility text remain
in German while the website targets a German-speaking audience.
