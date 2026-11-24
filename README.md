# Imran Dilshad — Portfolio

Personal portfolio of **Imran Dilshad**, Senior Software Engineer (React · Next.js · TypeScript · Node.js).
It's a single-page site built with the Next.js App Router. All content lives in typed data files, so you can update the portfolio without touching UI components.

## Features

- Dark-first design with a light theme, saved per visitor and applied before first paint (no flash)
- Sections: Hero, About, Skills, Experience, Featured Projects, Services, Education, and Contact
- Project case studies with a high-level "solution flow" diagram in place of screenshots of confidential work
- Scroll-reveal animations, count-up stats, a reading-progress bar, and a technology marquee, all respecting reduced-motion preferences
- Skeleton loading for route transitions and the profile photo
- SEO: Metadata API, Open Graph and Twitter cards, a generated OG image, canonical URL, `sitemap.xml`, `robots.txt`, and JSON-LD (`Person`, `WebSite`, `ProfilePage`)
- Accessibility: semantic landmarks, one `h1`, logical heading order, skip link, visible focus rings, 44px touch targets, and a keyboard-friendly mobile menu
- Performance: statically prerendered, Server Components by default, `next/font`, `next/image`, and small client islands only where interactivity is needed

## Tech stack

| Area      | Choice                                                    |
| --------- | --------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, Cache Components)      |
| Language  | TypeScript (strict)                                       |
| Styling   | Tailwind CSS v4 with CSS-variable design tokens           |
| Icons     | lucide-react, plus inline brand SVGs for GitHub/LinkedIn  |
| Animation | motion (`LazyMotion` + `m` components)                    |
| Quality   | ESLint (`eslint-config-next`), Prettier + Tailwind plugin |

Animations use [motion](https://motion.dev), the maintained successor to Framer Motion. `react-reveal` was not used because it only supports React 15–16.

## Getting started

Requirements: Node.js 20.9 or later (developed on Node 24) and npm.

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

## Scripts

| Script                 | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the development server                   |
| `npm run build`        | Create a production build                      |
| `npm run start`        | Serve the production build                     |
| `npm run lint`         | Run ESLint                                     |
| `npm run typecheck`    | Generate route types and run `tsc --noEmit`    |
| `npm run format`       | Format with Prettier                           |
| `npm run format:check` | Check formatting                               |
| `npm run check`        | Run typecheck, lint, and format check together |

## Project structure

```
src/
├── app/            # Routes, layout, metadata files (sitemap, robots, OG image, icons)
├── components/
│   ├── animations/ # MotionProvider, Reveal, CountUp (motion)
│   ├── layout/     # Footer, StructuredData (JSON-LD)
│   ├── navigation/ # Navbar, ThemeToggle
│   ├── sections/   # One component per page section (+ ProjectCard, ArchitectureFlow, HeroCodeWindow)
│   └── ui/         # Small reusable primitives (Section, ButtonLink, Tag, SocialLinks, Logo, BrandIcons)
├── config/site.ts  # Site URL, SEO defaults, navigation, social links, resume path
├── data/           # Portfolio content: profile, experience, projects, skills, services, education
├── hooks/          # useActiveSection
├── lib/            # cn/cssVars helpers, JSON-LD builder
└── types/          # Shared content interfaces
public/
├── images/         # Profile photo
└── resume/         # Downloadable resume PDF
docs/               # Architecture, development, components, SEO, deployment, content guides
```

## Updating content

Edit the files in `src/data/` and `src/config/site.ts`. See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md).

## Deployment

The recommended host is Vercel. Set `NEXT_PUBLIC_SITE_URL` to your production domain. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Development workflow](docs/DEVELOPMENT.md)
- [Components](docs/COMPONENTS.md)
- [SEO](docs/SEO.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Content guide](docs/CONTENT_GUIDE.md)
- [AI agent instructions](AGENTS.md)
