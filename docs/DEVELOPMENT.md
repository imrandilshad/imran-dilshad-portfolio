# Development

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Workflow

1. Make a focused change: content in `src/data`, UI in `src/components`.
2. Run `npm run format` to apply Prettier (it also sorts Tailwind classes).
3. Run `npm run check` (typecheck, lint, and format check).
4. Run `npm run build` to confirm the production build and static prerendering.
5. Check the page at mobile (≈375px), tablet (≈768px), and desktop (≥1280px) widths, in both themes.

## Coding standards

- TypeScript strict mode, no `any`. Shared shapes go in `src/types/portfolio.ts`.
- Use Server Components unless you need state, effects, or browser APIs.
- Name components in PascalCase with one component per file. Hooks are `useX`.
- Use `@/` path aliases instead of deep relative imports across folders.
- Style with Tailwind utilities that use the design tokens. Avoid raw hex colors in components (the OG image and icons are the exceptions, because `ImageResponse` can't read CSS variables).
- Use `cn()` for conditional classes and `cssVars()` for CSS custom properties in `style`.
- External links get `target="_blank" rel="noopener noreferrer"` (`ButtonLink` adds them when `external` is set).

## Accessibility checklist

- One `h1`, sections use `h2`, nested headings stay in order
- Decorative icons and visuals are `aria-hidden="true"`
- Icon-only buttons and links have an `aria-label`
- Focus rings stay visible (global `:focus-visible` style)
- Touch targets are at least 44×44px (`size-11` / `min-h-11`)
- Text passes WCAG AA contrast in both themes. Re-check if you change tokens.
- Motion respects `prefers-reduced-motion`

## Next.js version notes

This project uses Next.js 16.4 with Cache Components and partial prefetching. Read the bundled docs in `node_modules/next/dist/docs/` before using unfamiliar APIs. Key gotchas:

- `new Date()`, `Math.random()`, and similar calls in Server Components must run inside `"use cache"` or after `await io()`.
- `data-scroll-behavior="smooth"` on `<html>` keeps route transitions instant while in-page anchors scroll smoothly.
