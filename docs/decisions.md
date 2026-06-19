# Decision Log

*Lightweight ADRs — one decision per entry: context, the options, the choice, and the trade-off I accepted. Decisions are labeled `[Product]` or `[Eng]` because they're different jobs, and a PM should know which is which. Append-only. Last updated 2026-06.*

---

### 1. `[Product]` Position as a neutral "lens," not a news outlet, advocacy org, or fundraiser

**Context:** The Tigrayan diaspora is deeply divided — politically (TPLF vs. interim government, secession vs. federalism), and by money, power, and city. Almost any stance alienates half the audience.

**Options:** (a) Advocacy platform with a clear position. (b) News aggregator. (c) Neutral directory/"lens" with no agenda.

**Decision:** (c). The site shows the work and the people, in their own words, and takes no side.

**Trade-off accepted:** Less immediate "punch" and no obvious monetization or activism hook — in exchange for the one thing the entire strategy depends on: being trusted by *all* sides. Neutrality *is* the product.

---

### 2. `[Product]` Launch with curated, verified orgs only — defer open submissions

**Context:** The fastest way to look comprehensive is to let anyone add their org. The fastest way to lose trust is to publish something inaccurate or bad-faith.

**Options:** (a) Open submissions from day one. (b) Curated seed set, open up later.

**Decision:** (b). Hand-verified seed directory at launch; structured submission flow comes in "Next."

**Trade-off accepted:** Slower coverage and more manual work now, in exchange for accuracy and credibility at the moment of first impression — when it matters most.

---

### 3. `[Product]` Represent every organization in their own words

**Context:** Summarizing orgs myself would be faster and more consistent, but it injects my voice and judgment into a project whose value rests on the *absence* of agenda.

**Decision:** Orgs are presented in their own words wherever possible.

**Trade-off accepted:** Less editorial consistency and more coordination effort, in exchange for authenticity and neutrality.

---

### 4. `[Product]` Withhold interviewee names pending consent

**Context:** This is an active conflict. Featuring named individuals can expose them to real risk.

**Decision:** Interview content ships with names withheld until explicit consent is confirmed; the launch interview is a clearly-labeled placeholder structure rather than a real person published without sign-off.

**Trade-off accepted:** Less "real" content at launch, in exchange for not putting anyone at risk. Safety gates publishing.

---

### 5. `[Eng]` File-based MDX + frontmatter instead of a CMS or database

**Context:** A content site needs a way to manage entries. Options ranged from a headless CMS to a database to flat files.

**Options:** (a) Headless CMS (Contentful/Sanity). (b) Database. (c) MDX files with frontmatter, parsed at build.

**Decision:** (c). Each org, story, and the manifesto is an `.mdx` file with frontmatter (`gray-matter` + `next-mdx-remote`).

**Trade-off accepted:** No fancy editorial UI and edits require a commit — in exchange for **zero infrastructure cost, zero database to maintain, and contributions via pull request.** This directly serves the "must stay low-maintenance for a solo maintainer" constraint from the [product brief](product-brief.md).

---

### 6. `[Eng]` Next.js 14 (App Router) + static generation on Vercel

**Context:** Need a fast, cheap, low-ops way to serve a content site that I can build and maintain alone.

**Decision:** Next.js 14 with static generation, deployed on Vercel.

**Trade-off accepted:** Tied to one framework/host and its conventions, in exchange for speed, near-zero hosting cost, great defaults, and minimal ops overhead — the right call for a solo, content-driven project.

---

### 7. `[Product]` / `[Eng]` Defer multilingual (Tigrinya) support

**Context:** A platform for the Tigrayan diaspora arguably *should* be in Tigrinya. But internationalization done badly is worse than not done.

**Decision:** English-first at launch; multilingual deferred to "Later" and done properly.

**Trade-off accepted:** Doesn't fully serve Tigrinya-first speakers at launch, in exchange for reaching the broadest diaspora audience now and avoiding a half-built i18n layer. Flagged as a deliberate debt, not an oversight.
