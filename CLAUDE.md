@AGENTS.md

# Skógar Website

## Project overview

This is the website for **Skógar**, a Bahá'í-led NGO reforestation project in Þorskafjörður, Westfjords of Iceland. The design is natural, minimal, and appropriate for an environmental NGO — no flashy UI patterns.

- Contact email: info@skogarforest.org
- Location: Skógar í Þorskafirði, Iceland

---

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (inline utility classes, no config file)
- **Font:** Lora via `next/font/google` — serif, set as CSS variable `--font-lora`
- No external UI libraries. The gallery lightbox is custom React state (no deps).

---

## File structure

```
src/
  app/
    layout.tsx          # Root layout — wraps everything in LanguageProvider
    page.tsx            # Home (server wrapper → renders HomeContent)
    about/page.tsx      # About (server wrapper → renders AboutContent)
    gallery/page.tsx    # Gallery (server — reads images, renders GalleryContent)
    contact/page.tsx    # Contact (server wrapper → renders ContactContent)
    globals.css         # Tailwind import + CSS custom properties + nav underline animation

  components/
    Navbar.tsx          # Sticky nav with EN/IS language toggle
    Footer.tsx          # Three-column footer (brand, nav, contact)
    HomeContent.tsx     # Home page content (client component)
    AboutContent.tsx    # About page content (client component)
    GalleryContent.tsx  # Gallery page UI (client component, receives images as props)
    GalleryGrid.tsx     # Photo grid + lightbox (client component)
    ContactContent.tsx  # Contact page content (client component)
    ContactForm.tsx     # Contact form with success/error states (client component)
    VideoEmbed.tsx      # YouTube iframe embed with placeholder fallback

  context/
    LanguageContext.tsx # Language provider + useLanguage() hook

  lib/
    translations.ts     # All EN and IS strings, typed as `Translations`
    getGalleryImages.ts # Server-side: reads /public/images/gallery/, returns sorted list

public/
  home-feature.jpg          # Feature photo on home page (Who We Are section)
  images/
    about-feature.jpg       # Feature photo on about page
    gallery/                # All gallery photos go here (auto-detected)
```

---

## Design system

**Color palette** — all hardcoded as Tailwind arbitrary values, no config:

| Role | Hex |
|---|---|
| Forest dark (hero bg, primary buttons) | `#1e3a1e` |
| Forest mid (stats strip, hover) | `#2d5a27` |
| Forest light (accents) | `#4a7c3f` |
| Sage (eyebrows, labels, borders) | `#8aab7e` |
| Page background | `#fafaf7` |
| Section alternate | `#f0ece3` |
| Cream (footer bg) | `#f0ece3` |
| Border / divider | `#d4cfc4` |
| Body text | `#2c2c2c` |
| Muted text | `#4a4a4a` |

**Typography:**
- Headings: `font-[family-name:var(--font-lora)]` + appropriate weight/size
- Eyebrow labels: `text-xs tracking-[0.3em] uppercase text-[#8aab7e]`
- Body: default (inherits Georgia/serif from globals.css)

**Page sections follow a consistent pattern:**
1. Dark green header (`bg-[#1e3a1e]`) with eyebrow + h1
2. Alternating `bg-[#fafaf7]` and `bg-[#f0ece3]` content sections
3. Max width `max-w-6xl mx-auto px-6`

---

## Internationalisation (i18n)

The site is fully bilingual — English and Icelandic.

- **All strings** live in `src/lib/translations.ts`, exported as `{ en, is }`.
- **Language state** is managed by `LanguageContext` and persisted in `localStorage` under the key `skogar-lang`.
- **Pattern:** Page-level `page.tsx` files are server components (so they can export `metadata`). They render `*Content.tsx` client components that call `useLanguage()` to get the current translation object `t`.
- **Toggle:** The `EN | IS` pill in the Navbar switches language globally and instantly.

To add a new string:
1. Add the key to both `en` and `is` objects in `translations.ts`
2. The TypeScript type `typeof en` is used for `is`, so the compiler will catch missing keys.

---

## Adding content

### YouTube video
Set `YOUTUBE_VIDEO_ID` in `src/components/HomeContent.tsx`. Extract the ID from the URL (`?v=XXXX`). Currently set to `v5Hg26XUfJE`.

### Home feature photo
Place image at `/public/home-feature.jpg`. The `<Image>` component is already wired up.

### About feature photo
Place image at `/public/images/about-feature.jpg`. Already wired up.

### Gallery photos
Drop any `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` file into `/public/images/gallery/`. They are detected automatically by `getGalleryImages.ts` at build time, sorted alphabetically. Prefix filenames with numbers to control order (e.g. `01-planting.jpg`).

Alt text is auto-generated from filenames: `IMG_6220.jpeg` → `Img 6220`. For better accessibility, rename files descriptively (e.g. `01-planting-day.jpg` → `Planting Day`).

---

## Contact form

`ContactForm.tsx` currently simulates a submit (800ms delay → success). To wire it up:

**Formspree (easiest):**
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setState("success"); else setState("error");
```

Replace the simulated delay block in `handleSubmit` with the above. Create a free account at formspree.io to get a form ID.

---

## Deployment

The site builds to fully static output (`○ Static`). Deploy to Vercel, Netlify, or any static host:

```bash
npm run build   # produces .next/
npm run dev     # local dev server
```

No environment variables are required unless you add a form backend.
