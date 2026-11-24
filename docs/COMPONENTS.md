# Components

## UI primitives (`src/components/ui`)

| Component     | Type   | Responsibility                                                                           |
| ------------- | ------ | ---------------------------------------------------------------------------------------- |
| `Section`     | Server | Standard section wrapper: `id`, `aria-labelledby`, container, eyebrow, `h2`, description |
| `ButtonLink`  | Server | Anchor styled as a button (`primary` / `secondary` / `ghost`), with `external` support   |
| `Tag`         | Server | Mono technology chip, optionally highlighted                                             |
| `SocialLinks` | Server | Icon links built from `socialLinks` config; exports `socialIcons`                        |
| `Logo`        | Server | "ID" monogram and name, linking to the top of the page                                   |
| `BrandIcons`  | Server | GitHub and LinkedIn SVG marks (lucide-react doesn't ship brand icons)                    |
| `Skeleton`    | Server | Shimmer placeholder block; size and shape via `className`                                |

## Sections (`src/components/sections`)

| Component          | Data source                          | Notes                                                      |
| ------------------ | ------------------------------------ | ---------------------------------------------------------- |
| `Hero`             | `profile`, `siteConfig`              | Holds the only `h1`, the CTAs, socials, and count-up stats |
| `TechMarquee`      | `marqueeTech`                        | Infinite scrolling technology strip (pauses on hover)      |
| `HeroCodeWindow`   | Static tokens                        | Decorative (`aria-hidden`) code editor visual              |
| `About`            | `profile`, `education`               | Photo, quick facts, strengths, engineering principles      |
| `Skills`           | `skillCategories`                    | Domain cards; `core` skills are highlighted                |
| `Experience`       | `experiences`                        | Vertical timeline                                          |
| `Projects`         | `featuredProjects`, `additionalWork` | Featured case studies plus "More engineering work"         |
| `ProjectCard`      | `Project`                            | Summary, challenge, contributions, tech, flow, features    |
| `ArchitectureFlow` | `Project.flow`                       | Numbered high-level solution flow diagram                  |
| `Services`         | `services`                           | What I do                                                  |
| `Education`        | `education`, `certifications`        | Degree is emphasised                                       |
| `Contact`          | `profile`, `socialLinks`             | `mailto` CTA and contact channels (no form)                |

## Client Components

| Component        | Why it's a client component                                       |
| ---------------- | ----------------------------------------------------------------- |
| `Navbar`         | Scroll state, mobile menu toggle, Escape handling, active section |
| `ThemeToggle`    | Writes `data-theme` and `localStorage`                            |
| `ScrollProgress` | Reading-progress bar driven by `useScroll`                        |
| `MotionProvider` | `LazyMotion` + `MotionConfig` for the whole app                   |
| `Reveal`         | Scroll-triggered fade/slide-in (`as`: div, li, header, aside, h3) |
| `CountUp`        | Animates a number such as `"15+"` when it enters the viewport     |

## Reuse guidelines

- New page section: build on `Section` and add the nav item in `src/config/site.ts` if it should appear in the menu.
- New card list: follow the existing pattern (`ul` > `li` with `rounded-2xl border border-line bg-surface`) rather than creating a generic `Card`.
- Pull content from `src/data`. Never hard-code profile facts inside components.
- Wrap elements that should animate in with `<Reveal>`; stagger siblings with `delay={index * 0.08}`. Server Components can be passed as children.
