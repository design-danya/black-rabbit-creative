/**
 * Historical no-op, kept so the 27 page components that call it keep compiling.
 *
 * This hook used to rewrite document.title, the meta description, the canonical
 * link and the OG/Twitter tags from a useEffect. That predates the Next.js
 * migration. Once every route gained a `metadata` export the two fought each
 * other: Next rendered one title into the HTML and this hook replaced it with
 * different text on mount, so crawlers and users saw different strings on every
 * page — and the client-side copy was often 90+ characters, well past what
 * Google renders.
 *
 * Metadata now lives in exactly one place: the `metadata` export of each
 * page.tsx. Call sites are left in place rather than edited out of 27 files;
 * remove them opportunistically when touching a page for other reasons.
 */
interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
}

export function useSEO(_props: SEOProps) {
  // Intentionally empty — see the note above.
}
