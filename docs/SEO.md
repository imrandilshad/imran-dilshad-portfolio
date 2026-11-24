# SEO

## Configuration

Everything starts from `src/config/site.ts`:

- `url` comes from `NEXT_PUBLIC_SITE_URL`, then `VERCEL_PROJECT_PRODUCTION_URL` (on Vercel), then `http://localhost:3000`.
- `title`, `description`, and `keywords` are the defaults used in metadata.
- `lastUpdated` is used by `sitemap.xml` and JSON-LD `dateModified`. Update it when content changes.

> Set `NEXT_PUBLIC_SITE_URL` in production. Otherwise canonical, Open Graph, sitemap, and JSON-LD URLs will point to the wrong host.

## What's implemented

| Feature                               | Where                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Title, description, keywords, authors | `metadata` in `src/app/layout.tsx`                                                                      |
| Canonical URL                         | `alternates.canonical: "/"` resolved against `metadataBase`                                             |
| Open Graph (`profile`)                | `metadata.openGraph` + generated `src/app/opengraph-image.tsx` (1200×630)                               |
| Twitter card                          | `summary_large_image`; image falls back to the OG image                                                 |
| Robots directives                     | `metadata.robots` (index/follow, large image previews)                                                  |
| `robots.txt`                          | `src/app/robots.ts`                                                                                     |
| `sitemap.xml`                         | `src/app/sitemap.ts`                                                                                    |
| Structured data                       | `src/lib/structured-data.ts` → `Person`, `WebSite`, `ProfilePage` JSON-LD, injected by `StructuredData` |
| Favicons                              | `src/app/icon.tsx`, `src/app/apple-icon.tsx`                                                            |
| Theme color                           | `viewport.themeColor` for light and dark                                                                |
| 404                                   | `src/app/not-found.tsx` with `noindex`                                                                  |

JSON-LD is serialised with `<` escaped to prevent script injection.

## On-page SEO

- One `h1` combining name, role, and value proposition. Each section has an `h2` labelled with `aria-labelledby`.
- Semantic landmarks: `header`/`nav`, `main`, `section`, `article`, `footer`.
- Descriptive `alt` text on the profile photo. Decorative visuals are `aria-hidden`.
- Fonts load through `next/font` (self-hosted, no layout shift). The photo uses `next/image` with `sizes`.

## Validating

- Rich results: https://search.google.com/test/rich-results
- Schema: https://validator.schema.org/
- Social previews: LinkedIn Post Inspector and https://www.opengraph.xyz/
- Lighthouse: run in Chrome DevTools against the production build (`npm run build && npm run start`).

After deploying, submit `https://<your-domain>/sitemap.xml` in Google Search Console.
