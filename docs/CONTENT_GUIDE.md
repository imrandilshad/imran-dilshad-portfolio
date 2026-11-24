# Content guide

All content is in typed files. Change the data and the UI updates automatically. TypeScript will flag missing fields.

| What to change                                                  | File                     |
| --------------------------------------------------------------- | ------------------------ |
| Name, headline, summary, about, principles, stats               | `src/data/profile.ts`    |
| Employment history                                              | `src/data/experience.ts` |
| Featured projects and "More engineering work"                   | `src/data/projects.ts`   |
| Skills                                                          | `src/data/skills.ts`     |
| Services                                                        | `src/data/services.ts`   |
| Education and certifications                                    | `src/data/education.ts`  |
| Site URL, SEO title/description, nav, social links, resume path | `src/config/site.ts`     |

## Common tasks

### Update the resume

Replace `public/resume/imran-dilshad-senior-software-engineer-resume.pdf`. If you rename it, update `resumePath` in `src/config/site.ts`.

### Change the profile photo

Replace `public/images/imran-dilshad.jpg` with a square image (360×360 or larger). Update `profile.photo` if the path changes.

### Add a job

Add an entry at the **top** of `experiences`. Set `current: true` on the active role only, since the JSON-LD `worksFor` uses it.

### Add a featured project

Add an object to `featuredProjects`:

- `slug` must be unique and URL-safe (it's used for the heading id)
- `flow` takes 3–6 short steps describing the high-level architecture
- `confidential: true` shows the confidentiality note
- Add `links` only for **public** repositories or live demos

### Highlight a skill

Set `core: true` on skills you use day to day. Keep the highlighted set small so it stays meaningful.

### Add a social link

Add an entry to `socialLinks` in `src/config/site.ts`. Supported icons are `github`, `linkedin`, and `email`. To add a new one, extend `SocialIcon` in `src/types/portfolio.ts` and the `socialIcons` map in `src/components/ui/SocialLinks.tsx`.

### After any content change

Update `lastUpdated` in `src/config/site.ts`, then run `npm run check && npm run build`.

## Content rules

- Treat the resume as the source of truth for roles, dates, and education.
- Don't invent metrics or achievements. Add numbers only when they're verified.
- Keep enterprise work high-level: no internal URLs, screenshots, data, or code.
- The phone number is intentionally not published.
