# website-starter

Client website boilerplate by [Maurine Kacel](https://moestudio.co). Nuxt 4 + Tailwind 4 + Nuxt Content — no UI library, fully owned components, designed to be rebranded in two files.

## Stack

| | |
|---|---|
| Framework | Nuxt 4 |
| Content | Nuxt Content v3 (markdown + YAML) |
| Styling | Tailwind CSS 4 |
| Icons | lucide-vue-next |
| Animations | motion-v |
| SEO | nuxt-og-image |

## To rebrand for a new client

**1. Colors + fonts** — `app/assets/css/main.css`
Edit the `@theme static` block. Replace `--color-primary-*` and `--font-*` variables. Update the Google Fonts URL in `nuxt.config.ts` to match.

**2. Site metadata** — `app/brand.config.ts`
Set name, tagline, description, contact info, social links, and nav.

**3. Content** — `content/`
- `index.yml` — homepage title and SEO
- `work/*.md` — project case studies (set `featured: true` to show on homepage)
- `blog/*.md` — blog posts (set `published: true` to show)
- `pages/*.md` — standalone pages (about, services, etc.)

**4. Images** — `public/`
Drop images here. Reference them as `/filename.jpg` in content frontmatter.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, featured work, services, testimonials, contact |
| `/work` | Project index |
| `/work/[slug]` | Project case study |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/[slug]` | Flexible landing pages |

## Components

| Component | Purpose |
|---|---|
| `BaseButton` | Button + link, `primary / ghost / outline` variants |
| `BaseInput` | Text input |
| `BaseTextarea` | Textarea |
| `SectionHero` | Homepage hero with title, subtitle, CTA |
| `SectionServices` | Service/feature grid |
| `SectionTestimonials` | Quote grid |
| `SectionContact` | Contact form + email |
| `CardWork` | Project card |
| `CardBlog` | Blog post card |
| `AppHeader` | Sticky nav with mobile drawer |
| `AppFooter` | Footer with nav, contact, socials |
| `ColorModeButton` | Light/dark toggle |

## Dev

```bash
pnpm install
pnpm dev
```

## License

MIT — use it, adapt it, ship it.
