# Black Rabbit — Next.js (App Router) Migration Plan

Goal: make every page crawler-readable and give real link previews, **without losing React,
`motion/react`, the Services drawer, Constant Contact popup, or the rabbit mascot.** We keep the
components; we change *where the initial HTML is generated* from "the browser" to "build time" (SSG).

> ⚠️ This CANNOT run inside Figma Make (locked Vite CSR, `vite build` disabled, auto-generated
> entrypoint). The plan assumes you **export the code** and run it in a normal repo hosted on
> Vercel / Netlify / Cloudflare Pages.

Recommended target: **Next.js 15, App Router, output mode `export` (static) — or default static
generation.** A portfolio is almost entirely fixed content, so Static Site Generation (SSG) is the
right model; no server runtime needed unless the contact form later needs a backend.

---

## 1. Route mapping (react-router → Next App Router files)

Your `routes.tsx` maps 1:1 to the App Router file tree. Each `Component` becomes a `page.tsx`.

| Current route (react-router)        | Next.js file                                          |
|-------------------------------------|-------------------------------------------------------|
| `/` (Home)                          | `app/page.tsx`                                         |
| `work` (Portfolio)                  | `app/work/page.tsx`                                    |
| `work/monadnock-berries`            | `app/work/monadnock-berries/page.tsx`                 |
| `work/elm-city-brewing`             | `app/work/elm-city-brewing/page.tsx`                  |
| `work/granite-roots-brewing`        | `app/work/granite-roots-brewing/page.tsx`             |
| `work/kapiloff-insurance`           | `app/work/kapiloff-insurance/page.tsx`                |
| `work/basic-balance-acupuncture`    | `app/work/basic-balance-acupuncture/page.tsx`         |
| `work/nova-dermatology`             | `app/work/nova-dermatology/page.tsx`                  |
| `work/hendricks-lutherie`           | `app/work/hendricks-lutherie/page.tsx`                |
| `work/cheshire-childrens-museum`    | `app/work/cheshire-childrens-museum/page.tsx`         |
| `work/keene-pride-festival`         | `app/work/keene-pride-festival/page.tsx`              |
| `work/print-materials`              | `app/work/print-materials/page.tsx`                   |
| `work/sequoia-sex-toys`             | `app/work/sequoia-sex-toys/page.tsx`                  |
| `work/badger-balm`                  | `app/work/badger-balm/page.tsx`                       |
| `work/case-studies`                 | `app/work/case-studies/page.tsx`                      |
| `work/books`                        | `app/work/books/page.tsx`                             |
| `about`                             | `app/about/page.tsx`                                  |
| `about/faq`                         | `app/about/faq/page.tsx`                              |
| `about/press-awards`                | `app/about/press-awards/page.tsx`                     |
| `services`                          | `app/services/page.tsx`                               |
| `services/brand-identity`           | `app/services/brand-identity/page.tsx`                |
| `services/logo-design`              | `app/services/logo-design/page.tsx`                   |
| `services/packaging-design`         | `app/services/packaging-design/page.tsx`              |
| `services/graphic-design`           | `app/services/graphic-design/page.tsx`                |
| `services/brewery-branding`         | `app/services/brewery-branding/page.tsx`              |
| `contact`                           | `app/contact/page.tsx`                                |
| `*` (NotFound)                      | `app/not-found.tsx`                                   |
| `sitemap.xml` / `sitemap` redirect  | `app/sitemap.ts` (native) — no more gist redirect     |

Lazy-loading (`React.lazy` + `Suspense`) is **deleted** — Next code-splits per route automatically.

---

## 2. The shell: `Layout.tsx` → `app/layout.tsx`

Your `Layout.tsx` (Navbar + noise overlay + `<main>` + Footer) becomes the root layout.

- `<Outlet/>` → `{children}`.
- `useLocation` scroll-reset → a tiny `"use client"` `ScrollToTop` component using `usePathname`.
- Navbar, Footer, drawer, popup, mascot are all interactive → mark those component files
  `"use client"` at the top. **This is the main mechanical change:** any file using `useState`,
  `useEffect`, `motion/react`, or event handlers gets `"use client"`. The *content* of case-study
  pages that is just markup can stay as server components (better for SEO + smaller JS).

---

## 3. SEO: replace `useSEO.ts` with Next Metadata (the big win)

Your `useSEO` hook sets `<title>`/description/OG/canonical **via `useEffect` after JS runs** — which
is exactly why crawlers and link-preview bots miss it today. Next injects these into the initial HTML.

Delete `useSEO`. In each `page.tsx` export a `metadata` object (or `generateMetadata`):

```ts
// app/work/monadnock-berries/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monadnock Berries — Logo Identity Case Study | Black Rabbit",
  description: "A heritage-driven logo system for a New Hampshire berry farm…",
  alternates: { canonical: "/work/monadnock-berries" },
  openGraph: {
    title: "Monadnock Berries — Logo Identity",
    description: "…",
    images: ["/og/monadnock-berries.png"], // now works in link previews
  },
};
```

Set `metadataBase: new URL("https://www.blackrabbit-creative.com")` once in the root layout so
canonical + OG URLs resolve absolutely. The `robots: index,follow` logic in `useSEO` moves to
`export const metadata = { robots: { index: true, follow: true } }` (or a root default).

---

## 4. Images: `figma:asset/` → Next's real asset pipeline (this unblocks you)

`figma:asset/` is a Figma-Make-only virtual scheme; it won't exist outside the environment. Once
exported you get the **normal, reliable** import pattern you've been missing:

1. During export, save the resolved binaries into `public/` (e.g. `public/work/monadnock/hero.png`)
   or `src/assets/`.
2. Reference via `next/image`, which gives you the `width`/`height`, `loading="lazy"`, and
   responsive optimization you hand-rolled during the PageSpeed pass — for free:

```tsx
import Image from "next/image";
import hero from "@/assets/monadnock/hero.png"; // standard import — WORKS here

<Image src={hero} alt="Monadnock Berries primary mark" placeholder="blur" />
```

`ImageWithFallback` can be kept as a thin `"use client"` wrapper over `next/image` if you still want
the fallback behavior.

---

## 5. Analytics & Ads tags

Move the GA + Google Ads (`AW-17440004789`) snippets from wherever they're injected today into the
root layout using `next/script` with `strategy="afterInteractive"`. Constant Contact popup script:
also `next/script`, `strategy="lazyOnload"`.

---

## 6. Sitemap & robots (native, no more gist)

- `app/sitemap.ts` returns the route list programmatically → served at `/sitemap.xml` automatically.
  Delete `SitemapRedirect.tsx` and its two routes.
- `app/robots.ts` for `/robots.txt`.

---

## 7. Tailwind / fonts / tokens

- Tailwind v4 works in Next unchanged; port `theme.css` / `globals.css` into `app/globals.css`.
- Poppins → `next/font/google` (self-hosted, no layout shift, no external request).

---

## 8. Suggested order of work (post-export)

1. `create-next-app` (TS, App Router, Tailwind), drop in `globals.css` + Poppins.
2. Build `app/layout.tsx` from `Layout.tsx`; port Navbar/Footer as `"use client"`. Verify shell.
3. Move assets into `public/`/`src/assets`; swap `figma:asset` imports → `next/image`.
4. Port pages simplest-first: `about/faq`, `about/press-awards`, service pages, then case studies.
5. Add `metadata` per page (kill `useSEO`).
6. `app/sitemap.ts` + `app/robots.ts`.
7. `next build` locally; inspect **View Source** (not devtools) to confirm content is in raw HTML.
8. Deploy to Vercel; validate with Google Rich Results Test + a LinkedIn/iMessage link preview.

## Effort estimate
- Shell + routing scaffold: ~0.5 day
- Asset/image migration: ~0.5–1 day (depends on asset count)
- Page ports + metadata: ~1–2 days (25 pages, mostly mechanical)
- Sitemap/robots/analytics/QA: ~0.5 day

Net: roughly **3–4 focused days**, and the result is fully indexable with working social previews.
