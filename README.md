# Rebuild Tigray

> ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ — *"There are no mountains we would not climb, and no rivers we would not cross."*

A platform that points a lens at the Tigrayan diaspora — the individuals and organizations already doing the tireless, often invisible work of rebuilding — so that others might find them, learn from them, join them, or simply feel less alone in caring.

**Live site:** [rebuild-tigray.com](https://rebuild-tigray.com) · **Status:** active, building in public

---

## What this is

Rebuild Tigray is **not** a news outlet, a political organization, or a fundraising platform. It asks for nothing.

It is an aggregator of the good work happening across the diaspora — the organizations, the people, the stories — all in one place, with no spin and no agenda. Three things, mainly:

- **A directory** of the organizations rebuilding Tigray, in their own words.
- **A space** for their stories, interviews, and perspectives on what matters.
- **A gallery** of what we are fighting for — the land, the people, the future.

## Why I'm building it

In November 2020 a war was waged on Tigray. The devastation — hundreds of thousands killed, millions displaced, heritage erased, a genocide the world still does not fully understand — left generational work behind it. The Pretoria agreement of 2022 brought an incomplete peace; much of the harm remains unaddressed.

The diaspora has the freedom, the resources, and the reach to act. But it is divided — by money, by power, by politics, by city. Other diasporas (the Armenians, the Koreans, and others) built their infrastructure in peacetime, before the emergency, so it was there when crisis came. We are trying to build ours in the middle of the fire. It is not too late.

The bet behind this site is simple and explicit:

> **Visibility creates empathy. Empathy creates common ground. Common ground creates collaboration.**

By giving an unblemished glimpse of the work and the people doing it, we realize we share more than we thought — and more voices, hands, and minds find their way to the right causes. Strength in numbers, not just effort.

The full reasoning lives in **[the manifesto](content/manifesto.mdx)**. Read that first if you want to understand the project.

## Product thinking

I designed and built this end to end — I made the product calls *and* wrote the code. These docs show how I thought through it (and keep the two kinds of decisions separate):

- **[Product brief](docs/product-brief.md)** — the problem, who it's for, the strategy, what's in/out of scope and why, success metrics, and key risks.
- **[Roadmap](docs/roadmap.md)** — Now / Next / Later, what I deliberately cut, and what I'd do differently.
- **[Decision log](docs/decisions.md)** — the key product and engineering decisions, each with the trade-off I accepted.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + `@tailwindcss/typography` |
| Content | MDX via `next-mdx-remote`, frontmatter parsed with `gray-matter` |
| Hosting | Vercel |

Content is file-based — no database, no CMS. Each organization, blog post, and the manifesto is an `.mdx` file with frontmatter, so the site is editable by anyone comfortable with Markdown and a pull request.

## Project structure

```
app/                      Next.js routes (App Router)
  about/                  About the project
  directory/              Org directory + [slug] detail pages
  blog/                   Stories & interviews + [slug] detail pages
  gallery/                Visual gallery
  manifesto/              The manifesto
content/
  directory/*.mdx         One file per organization
  blog/*.mdx              One file per story/interview
  manifesto.mdx           The manifesto
components/               Shared React components
lib/                      Content loading & helpers
public/                   Logos, icons, static assets
DESIGN.md                 Brand & visual source of truth
STYLE.md                  Writing & style guide
```

## Running locally

Requires Node.js 18+ and npm.

```bash
git clone git@github.com:mikegebremeskel/rebuild-tigray.git
cd rebuild-tigray
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # lint
```

## Adding content

Add a new organization by dropping a file into `content/directory/`:

```mdx
---
name: "Omna Tigray"
slug: "omna-tigray"
mission: "One-line description of what they do"
tags: ["advocacy", "legal", "media"]
website: "https://omnatigray.org"
founded: "2020"
location: "United States"
---

## What they do
...
```

Blog posts/interviews go in `content/blog/` with `title`, `subtitle`, `date`, `tags`, and `author` frontmatter. The slug comes from the filename.

## Design & writing

Two documents govern how the site looks and reads — please skim them before contributing:

- **[DESIGN.md](DESIGN.md)** — brand, logo system, color, typography. The single source of truth for visual decisions.
- **[STYLE.md](STYLE.md)** — voice and writing conventions. No spin, no agenda, organizations in their own words.

## Roadmap

This is an evolving, build-in-public project. Rough direction:

- [ ] Expand the directory beyond the initial seed organizations
- [ ] Publish real interviews (current blog content is placeholder structure)
- [ ] Build out the gallery
- [ ] Connection / "find each other across the diaspora" feature

## Contributing

If you run or know of a diaspora organization doing this work and want it represented accurately, or you'd like to contribute a story, open an issue or a pull request. The goal is to represent the work honestly and without agenda — contributions are welcome in that spirit.

## License

© Mike Gebremeskel. All rights reserved (for now — license TBD). The written content reflects the words and missions of the organizations and people featured.

---

*I regret and despise thinking of a future where the Tigrayan diaspora allowed itself to squabble and bicker itself into irrelevance. May that never happen. My future children deserve better. So do yours.*
