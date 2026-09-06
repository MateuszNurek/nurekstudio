# NurekStudio — website

Portfolio and lead-generation website for **NurekStudio**, an independent web studio founded by Mateusz Nurek in Vienna, Austria.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons. No analytics, tracking or non-essential cookies are included, so no consent banner is needed in this version.

---

## Local setup

Requirements: Node.js 20 or newer (tested with Node 22) and npm.

```bash
npm install
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server at http://localhost:3000 |
| `npm run build` | Production build (also runs type checking) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript without emitting |

---

## Project structure

```
src/
  app/                    Routes (App Router)
    layout.tsx            Fonts, metadata, header/footer, shared contact dialog
    page.tsx              Homepage (composes the sections below)
    work/7sinne/page.tsx  Case study page
    impressum/page.tsx    Legal notice (contains TODO placeholders)
    privacy/page.tsx      Privacy policy (contains TODO placeholders)
    sitemap.ts, robots.ts, not-found.tsx, icon.svg
  config/
    site.ts               Business facts, phone, WhatsApp, URLs, asset paths
    navigation.ts         Header and footer navigation items
  content/
    types.ts              Shared content shapes (used by every locale)
    en/                   All English copy (home, work, legal, common)
    index.ts              Locale entry point (`content` object used by components)
  components/
    ui/                   Button, SectionHeading, ServiceCard, ProjectFrame,
                          ProcessStep, Faq, ContactCta, ContactChoices, Reveal
    site/                 Header, Footer, MobileContactBar, Wordmark, JsonLd, LegalPage
    sections/             One component per homepage section
  lib/
    assets.ts             `publicAssetExists()` — renders placeholders for missing images
    cn.ts                 Class-name helper
public/images/            Image assets (see checklist below)
```

---

## Where to edit things

### Contact information and business facts

Everything lives in **`src/config/site.ts`**:

- telephone number (E.164 and display format),
- WhatsApp number and the prefilled message,
- production URL (`url`) used for canonical links, sitemap and Open Graph,
- starting price,
- asset paths,
- `contact.email` (currently `null`; set a string to show it in the footer).

The `tel:` and `wa.me` links are generated here once and imported everywhere. Do not hard-code them in components.

### Copy

All text is in **`src/content/en/`**:

| File | Contains |
| --- | --- |
| `common.ts` | CTA labels, dialog text, footer text, site title and meta description |
| `home.ts` | Hero, problem, services, featured work, visual work slots, process, care, about, pricing, FAQ, final CTA |
| `work.ts` | Case studies (currently 7sinne.at) |
| `legal.ts` | Impressum and privacy policy content, including TODO placeholders |

Components never contain business copy, so editing these files is enough.

### Navigation

`src/config/navigation.ts` (primary and legal navigation).

---

## Asset checklist

Components check whether each file exists and render a clearly labelled placeholder if it does not. Missing files never produce broken image icons. Add the files below to make the site complete:

| Asset | Path | Notes |
| --- | --- | --- |
| Portrait of Mateusz Nurek | `public/images/mateusz-nurek.webp` | 4:5 portrait, at least 1200 px wide |
| 7sinne desktop screenshot | `public/images/work/7sinne/desktop.webp` | 16:10, at least 1600 px wide |
| 7sinne mobile screenshot | `public/images/work/7sinne/mobile.webp` | 9:19, at least 800 px wide |
| Selected visual work | `public/images/visual-work/visual-01.webp` … `visual-06.webp` | Any ratio; set each item's `image` and `ratio` in `src/content/en/home.ts` → `visualWork.items` |
| Social sharing image | `public/images/og-image.jpg` | 1200 × 630; picked up automatically for Open Graph and Twitter cards |
| Logo (optional) | `public/images/nurekstudio-logo.svg` | The text wordmark in `src/components/site/Wordmark.tsx` is used until then |

To populate a visual-work slot, edit the item in `visualWork.items`:

```ts
{ id: "visual-01", label: "Bakery identity", category: "Branding",
  image: { src: "/images/visual-work/visual-01.webp", alt: "Logo and packaging for …" }, ratio: "portrait" }
```

Paths for the portrait, logo and OG image are configured in `src/config/site.ts` → `assets`.

---

## Adding another case study

1. Add a new `CaseStudy` object to `src/content/en/work.ts` and include it in the `caseStudies` array (the sitemap reads from it).
2. Create `src/app/work/<slug>/page.tsx`. Copy `src/app/work/7sinne/page.tsx` and change the `project` constant to the new entry.
3. Add screenshots under `public/images/work/<slug>/` and reference them in the `screenshots` field.
4. Optionally feature it on the homepage by adapting `src/components/sections/FeaturedCase.tsx`, which currently shows `content.sevenSinne`.

---

## Deployment

The site is fully static (every route is prerendered) and can be deployed anywhere that runs Next.js:

- **Vercel / Netlify**: import the repository; the defaults (`npm run build`) work as-is.
- **Node server**: `npm run build && npm run start` (listens on port 3000 by default).
- **Docker or other hosts**: build with `npm run build` and run `npm run start`, or set `output: "standalone"` in `next.config.ts`.

Before deploying, set `siteConfig.url` in `src/config/site.ts` to the final domain so canonical URLs, sitemap and Open Graph tags are correct.

---

## Legal checklist (required before publication)

The Impressum and Privacy pages are structurally complete but contain visible **TODO** placeholders. Complete these in `src/content/en/legal.ts`:

- [ ] Postal business address
- [ ] Public email address (also set `contact.email` in `src/config/site.ts`)
- [ ] VAT number (UID), if applicable
- [ ] Trade authority (Gewerbebehörde) and, if applicable, company register details
- [ ] Professional association membership (e.g. WKO), if applicable
- [ ] Hosting provider name, location, privacy-policy link and log retention period
- [ ] Update the "Last updated" value in `src/app/impressum/page.tsx` and `src/app/privacy/page.tsx`
- [ ] Revisit the privacy policy if analytics, contact forms, embeds or cookies are added later
- [ ] Have the final wording reviewed for Austrian requirements (ECG §5, MedienG §25, GDPR)

The TODO warning banner disappears automatically once no item is flagged `todo: true`.

---

## Future German version

The content layer is already structured for a second language:

- [ ] Create `src/content/de/` with the same exports as `src/content/en/` (`common.ts`, `home.ts`, `work.ts`, `legal.ts`, `index.ts`). The types in `src/content/types.ts` enforce the same shape.
- [ ] Decide on routing (`/de/...` segment or a separate domain) and resolve the locale in `src/content/index.ts` instead of the hard-coded `activeLocale`.
- [ ] Add `hreflang` alternates to the metadata in `src/app/layout.tsx` and localised entries to `sitemap.ts`.
- [ ] Add the language switcher to `Header.tsx` only once the German content is complete.
- [ ] Translate the WhatsApp prefilled message in `src/config/site.ts` per locale.

---

## Other planned extensions

- **Email address**: set `contact.email` in `src/config/site.ts`; the footer and legal pages pick it up.
- **Scheduling integration**: the "Free 20-minute project call" currently routes to WhatsApp or phone. A booking link can be added to the contact dialog in `src/components/ui/ContactChoices.tsx`.
- **More services**: add items to `services.items` in `src/content/en/home.ts` (icons are mapped in `src/components/ui/ServiceCard.tsx`).
- **Website care pricing**: add to `care` copy once decided.

---

## Content principles

The site deliberately contains no testimonials, client logos, awards, statistics or invented results. Add such content only when it is real and verifiable.
