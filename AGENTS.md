<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules for AI coding agents

This is the personal portfolio of Imran Dilshad, built with Next.js 16 (App Router), TypeScript (strict), and Tailwind CSS v4. Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) before making structural changes.

## Content integrity (most important)

- `src/data/*` and `src/config/site.ts` are the single source of truth. The owner's resume is authoritative for employment history, dates, and education.
- **Never invent** achievements, metrics, percentages, testimonials, clients, or links. If information is missing, leave it out and say so.
- Enterprise projects are confidential. Do not add internal URLs, screenshots, source code, credentials, or business data.
- Do not publish the phone number. Only link to social profiles that have been verified.

## Code standards

- Use Server Components by default. Add `"use client"` only for real interactivity (state, effects, browser APIs). Current Client Components: `Navbar`, `ThemeToggle`, `ScrollProgress`, `MotionProvider`, `Reveal`, `CountUp`.
- Never import non-component values (constants, config) from a `"use client"` module into a Server Component. Put shared values in `src/config` or `src/lib`.
- No `any`. Shared shapes go in `src/types/portfolio.ts`.
- Use design tokens (`bg-surface`, `text-muted`, `border-line`, `text-accent`, …) instead of raw colors. Tokens are defined in `src/app/globals.css`.
- Keep components small and focused. Don't create a component for trivial one-off markup.
- Animations use `motion` (`motion/react`) through `LazyMotion` + `m.*` components only (strict mode — plain `motion.*` will throw). For scroll reveals, wrap content in `<Reveal as="li" delay={0.08}>` from `src/components/animations/Reveal.tsx`; for animated numbers use `<CountUp value="7+" />`. Never animate the hero `h1` (LCP). Don't add another animation library.
- Placeholders use `<Skeleton className="h-.. w-.." />` (shimmer, respects reduced motion).
- Cache Components is enabled. Synchronous `new Date()`/`Math.random()` in Server Components must be inside `"use cache"` (see `Footer.tsx`) or will fail the build.
- Accessibility: keep one `h1` (in the Hero), sections use `h2`, cards use `h3`/`h4`; icons are `aria-hidden`; interactive targets are at least 44px.
- Avoid new dependencies unless they deliver clear value. Explain why before adding one.

## Before you finish

```bash
npm run check   # typecheck + lint + format check
npm run build
```

Fix every error and warning. Update the relevant file in `docs/` when behavior or structure changes.
