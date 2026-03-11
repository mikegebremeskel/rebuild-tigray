# Rebuild Tigray — Design Guidelines

> This file is the single source of truth for all visual decisions. 
> Read this before building or modifying anything on the site.

---

## Brand Overview

Rebuild Tigray is a platform spotlighting the Tigrayan diaspora — the individuals and organizations doing the tireless work of rebuilding. The site is not a news aggregator or political mouthpiece. It is a lens on the people, their missions, and the common ground that connects them.

**Motto:** ዘይንድይቦ ጎቦ ዘይንሰግሮ ሩባ — "There are no mountains we would not climb"

**Domain:** rebuild-tigray.com

---

## Logo System

Two marks that share the same DNA: same sun, same mountain silhouette, same gold.

### Primary Mark — Horizon (A)
- **Used for:** Website nav, favicon, blog headers, social profile avatar, email signature
- **Files:** `public/logo-horizon.svg`, `public/logo-horizon-icon.svg`
- **Minimum size:** 28px height for icon, 120px width for full lockup
- **Always give the logo breathing room — don't crowd it with text or edges**

### Ceremonial Mark — Emblem (D)
- **Used for:** Manifesto page seal, About page, formal documents, merchandise, event materials
- **Includes:** Ge'ez motto wrapping inside the circle
- **Files:** `public/logo-emblem.svg`
- **Minimum size:** 120px (this mark is never used at small sizes)

The Horizon is the Emblem's core, extracted and simplified. They feel like the same brand at two different levels of formality.

---

## Colors — Heritage Warm

Gold for invitation and celebration. Burgundy for gravity and seriousness.

### Primary Accents
| Name | Hex | Usage |
|------|-----|-------|
| Tigray Gold | `#D4A843` | Buttons, links, highlights, logo sun, primary CTA |
| Burgundy | `#7A2E2E` | Emphasis, important callouts, alerts, secondary CTA |
| Soft Gold | `#C9A96E` | Muted gold backgrounds, subtle fills, hover states |

### Neutrals
| Name | Hex | Usage |
|------|-----|-------|
| Night | `#1A1A1A` | Headings, dark backgrounds, footer |
| Dark Earth | `#4A3728` | Body text on light backgrounds |
| Sandstone | `#9B8068` | Muted text, captions, timestamps, metadata |
| Sand | `#F2EDE6` | Card backgrounds, section fills, subtle dividers |
| Parchment | `#FAFAF7` | Page backgrounds |

### Tailwind Config
```js
colors: {
  gold: '#D4A843',
  burgundy: '#7A2E2E',
  'soft-gold': '#C9A96E',
  night: '#1A1A1A',
  'dark-earth': '#4A3728',
  sandstone: '#9B8068',
  sand: '#F2EDE6',
  parchment: '#FAFAF7',
}
```

---

## Typography

The type carries the "ancient people, modern movement" duality.

### Fonts (Google Fonts — free)
| Role | Font | Why |
|------|------|-----|
| Headings & Reading | **EB Garamond** | 16th-century serif. Historical weight, warmth, and elegance. Used for manifesto, blog body, article headlines, pull quotes. |
| UI & Body | **Outfit** | Contemporary geometric sans-serif. 9 weights. Clean, modern, highly readable. Used for nav, buttons, cards, tags, metadata. |

### Sizing
- Manifesto / blog body: EB Garamond at **18-19px**, line-height **1.8**
- Article headlines: EB Garamond at **32-38px**, line-height **1.2-1.3**
- Nav items: Outfit at **13-14px**
- Buttons: Outfit at **14px**, font-weight **600**
- Cards / tags: Outfit at **12-13px**
- Captions / metadata: Outfit at **11-12px**

### Tailwind Config
```js
fontFamily: {
  serif: ['EB Garamond', 'Georgia', 'serif'],
  sans: ['Outfit', '-apple-system', 'sans-serif'],
}
```

### Google Fonts Import
```
https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap
```

---

## Tone & Feel

- **Text-forward:** The writing is the hero, not graphics
- **Warm but direct:** Matches the manifesto voice — unapologetic, urgent, human
- **Photography:** Should feel human and real, not stock-photo sterile
- **Whitespace:** Generous. Let things breathe. Don't fill every pixel.
- **Formality spectrum:** The site ranges from modern platform (directory, nav) to literary essay (manifesto, blog). The type and color handle this naturally.

---

## Component Patterns

### Buttons
- **Primary:** Gold background (#D4A843), dark text (#111), rounded (8px), Outfit 14px/600
- **Secondary:** Transparent, border (1.5px), rounded, Outfit 14px/600
- **Text link:** Gold color, underline on hover, no background

### Cards (Organization Directory)
- Background: Parchment (#FAFAF7) or Sand (#F2EDE6)
- Border: 1px solid, subtle (Sand or Sandstone at low opacity)
- Rounded corners: 10-12px
- Content: Outfit for name, tag, description

### Tags / Badges
- Pill-shaped (border-radius: 12-20px)
- Small text: Outfit 10-11px
- Colors: Gold background at low opacity with gold text, or Burgundy for emphasis

### Blog Posts
- Headline: EB Garamond, 28-34px, bold
- Body: EB Garamond, 18px, line-height 1.8
- Tags / metadata: Outfit, 11-12px
- Max reading width: 640-680px

### Navigation
- Desktop: Horizon icon + "REBUILD TIGRAY" wordmark (Outfit, 14px, 700, letterspacing 0.06em) + nav items
- Mobile: Horizon icon + condensed wordmark + hamburger menu
- Nav items: Outfit, 13px, regular weight, Sandstone color

---

## What NOT to Do

- Don't use the Emblem mark at small sizes (below 120px)
- Don't use more than Gold + Burgundy as accent colors
- Don't set EB Garamond below 16px (it loses clarity)
- Don't use decorative or script fonts anywhere
- Don't crowd the logo — minimum clear space equal to the height of the sun element
- Don't use pure black (#000000) — use Night (#1A1A1A) instead
- Don't use pure white (#FFFFFF) for backgrounds — use Parchment (#FAFAF7)
