# Black Rabbit Creative — Next.js Migration Status

**Migration Date**: July 9, 2026  
**Current Status**: Foundation Phase Complete ✅  
**Next Phase**: Dependencies Installation & Build Testing

---

## ✅ Completed Work (Phase 1: Foundation)

### 1. Git Initialization
- ✅ Git repo initialized
- ✅ Baseline commit created: `d590e9d`
- **Purpose**: Rollback point for the entire migration

### 2. Next.js Configuration
- ✅ `next.config.mjs` created with `output: 'export'` for static generation
- ✅ `tsconfig.json` configured for Next.js (App Router, path aliases)
- ✅ `package.json` updated:
  - Removed: Vite, @vitejs/plugin-react, @tailwindcss/vite
  - Added: next (^15.0.0), React/React-DOM as dependencies
  - Updated scripts: `npm run dev` → `next dev`, `npm run build` → `next build`
  - Removed peerDependencies (moved react/react-dom to regular deps)

### 3. Root Layout & Shell
- ✅ `src/app/layout.tsx` created:
  - Metadata API configured with metadataBase
  - Poppins font via `next/font/google`
  - Script tags for Google Analytics, Ads, Constant Contact (ready for config)
  - All SEO defaults
- ✅ `src/app/_client.tsx` created:
  - Client-side wrapper (marked `'use client'`)
  - Navbar/Footer/noise overlay moved here
  - usePathname scroll-to-top implemented
- ✅ `src/app/globals.css` created:
  - Imports all existing styles (fonts, tailwind, theme)
  - Constant Contact form CSS rules preserved
  - Import statements for sonner, react-day-picker

### 4. Route Scaffolding (15 Pages + 5 Services + 7 Utility Routes)

#### Main Pages
- ✅ `app/page.tsx` (Home)
- ✅ `app/about/page.tsx`
- ✅ `app/about/faq/page.tsx`
- ✅ `app/about/press-awards/page.tsx`
- ✅ `app/services/page.tsx`
- ✅ `app/contact/page.tsx`
- ✅ `app/work/page.tsx` (Portfolio index)

#### Service Pages (with metadata)
- ✅ `app/services/brand-identity/page.tsx`
- ✅ `app/services/logo-design/page.tsx`
- ✅ `app/services/packaging-design/page.tsx`
- ✅ `app/services/graphic-design/page.tsx`
- ✅ `app/services/brewery-branding/page.tsx`

#### Case Study Pages (with metadata)
- ✅ `app/work/monadnock-berries/page.tsx`
- ✅ `app/work/elm-city-brewing/page.tsx`
- ✅ `app/work/granite-roots-brewing/page.tsx`
- ✅ `app/work/kapiloff-insurance/page.tsx`
- ✅ `app/work/basic-balance-acupuncture/page.tsx`
- ✅ `app/work/nova-dermatology/page.tsx`
- ✅ `app/work/hendricks-lutherie/page.tsx`
- ✅ `app/work/cheshire-childrens-museum/page.tsx`
- ✅ `app/work/keene-pride-festival/page.tsx`
- ✅ `app/work/print-materials/page.tsx`
- ✅ `app/work/sequoia-sex-toys/page.tsx`
- ✅ `app/work/badger-balm/page.tsx`
- ✅ `app/work/case-studies/page.tsx`
- ✅ `app/work/books/page.tsx`

**All pages** include:
- Per-page `metadata` export (title, description, canonical, OG)
- Import of corresponding page component
- Ready for static generation

### 5. SEO: Sitemap & Robots
- ✅ `app/sitemap.ts` created:
  - 27 URLs programmatically defined
  - Proper changeFrequency and priority
  - Served automatically at `/sitemap.xml`
  - **Note**: Removed gist-based redirect from index.html
- ✅ `app/robots.ts` created:
  - Allow all public content
  - Disallow admin, private
  - Points to sitemap.xml
  - Served automatically at `/robots.txt`

---

## 📋 Ready for Next Steps

### Immediate (Blocking Build)
1. **Install dependencies**: `npm install`
   - This will install Next.js, React 18.3.1, TypeScript, and all peer dependencies
   - Existing `node_modules/` needs refresh for new versions

2. **Update script references in page components**:
   - Replace `react-router` Link with `next/link`:
     ```tsx
     // OLD
     import { Link } from "react-router"
     <Link to="/work/monadnock">Portfolio</Link>
     
     // NEW
     import Link from "next/link"
     <Link href="/work/monadnock">Portfolio</Link>
     ```
   - This affects: Navbar, Footer, and all page components
   - Can be done via find-replace in IDE

3. **Update router state references**:
   - Remove `useLocation()`, use `usePathname()` from `next/navigation`
   - Remove `useParams()` from react-router, use `useParams()` from `next/navigation`
   - This mainly affects Navbar, Footer, and interactive components

### Phase 2 (Pages Migration)
4. **Remove `useSEO` hook usage**:
   - Delete `src/app/components/useSEO.ts`
   - Already replaced with per-page `metadata` export
   - No runtime penalty for changing metadata client-side

5. **Replace `figma:asset/` imports**:
   - Extract images to `public/assets/` or `src/assets/`
   - Update imports: `import hero from '@/assets/monadnock/hero.png'`
   - Convert `<img>` to `next/image` for optimization
   - Update `ImageWithFallback` wrapper if needed

6. **Remove lazy routes**:
   - Next.js code-splits per route automatically
   - Remove `React.lazy()` and `Suspense` wrappers
   - Keep `Suspense` only if actually needed for data loading

### Phase 3 (Configuration)
7. **Configure analytics scripts** in `app/layout.tsx`:
   - Update Google Analytics ID from placeholder `G-XXXXXXXXXX`
   - Update Google Ads ID from placeholder `ca-pub-...`
   - Update Constant Contact script URL

8. **Test static export**:
   - Run `next build`
   - Check `.next/out/` (the static export directory)
   - Inspect View Source on generated HTML files
   - Verify metadata is in initial HTML, not injected via JavaScript

---

## File Structure Summary

```
src/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── _client.tsx (shell with navbar/footer)
│   ├── globals.css (all styles)
│   ├── page.tsx (home)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── about/
│   │   ├── page.tsx
│   │   ├── faq/page.tsx
│   │   └── press-awards/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── brand-identity/page.tsx
│   │   ├── logo-design/page.tsx
│   │   ├── packaging-design/page.tsx
│   │   ├── graphic-design/page.tsx
│   │   └── brewery-branding/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   ├── monadnock-berries/page.tsx
│   │   ├── elm-city-brewing/page.tsx
│   │   ├── ... (13 more case studies)
│   │   └── books/page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── pages/ (existing page components, refactor during phase 2)
│   └── components/ (existing components, mark 'use client' as needed)
├── styles/ (existing theme/fonts/tailwind files)
├── assets/ (to be populated with figma:asset/ exports)
└── main.tsx (can be deleted or refactored)

public/
├── assets/ (to be populated with images)
├── og/ (OG images for case studies)
└── ... (existing static files)

.git/ (initialized)
next.config.mjs (created)
tsconfig.json (created)
package.json (updated)
```

---

## Known Issues to Address

1. **`figma:asset/` imports still present** in page components
   - Vite's custom resolver won't exist in Next.js
   - Need to export actual images from Figma and reference them normally
   - **Timeline**: Phase 2

2. **`react-router` references throughout codebase**
   - Navbar: `<Link>`, `useLocation()`
   - Footer: may have navigation
   - Page components: likely have links and route logic
   - **Timeline**: Phase 1 (before first build)

3. **Analytics tracking IDs not configured**
   - GA ID, Google Ads ID, Constant Contact URL are placeholders
   - **Timeline**: Phase 3

4. **Supabase backend functions**
   - Located at `supabase/functions/server/`
   - Frontend calls need verification once we build
   - **Timeline**: Post-build assessment

---

## Next Command to Run

```bash
cd /Users/danyapugliese/Documents/Black\ Rabbit
npm install
npm run build
```

This will:
1. Install Next.js and dependencies (may take 2-3 minutes)
2. Run the build, which will identify remaining issues
3. Generate `.next/out/` directory with static HTML

---

## Estimated Remaining Time

- **Phase 2 (import fixes + component updates)**: 1-2 hours
- **Phase 3 (analytics, final config, testing)**: 30 minutes
- **Total**: ~2-3 hours from npm install to production-ready

---

## Success Criteria

✅ `npm run build` completes without errors  
✅ View Source shows metadata in `<head>` (not injected via JS)  
✅ `/sitemap.xml` and `/robots.txt` are generated  
✅ All 27+ routes build as static HTML  
✅ Link previews work (test with a case study URL in Slack/LinkedIn)  

---

**Status**: Ready for Phase 2. Next action: install dependencies and run first build.
