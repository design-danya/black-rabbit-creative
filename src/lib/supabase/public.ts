import { createServerClient } from '@supabase/ssr'

/**
 * Cookieless Supabase client for PUBLIC, cacheable reads (published work items).
 *
 * Unlike ./server's createClient(), this never calls next/headers `cookies()`,
 * so pages that read through it are NOT forced dynamic — they can be statically
 * generated and ISR-revalidated (fast TTFB from cache instead of a fresh
 * server render on every request). Only use it for data the RLS policies expose
 * to anonymous visitors (published rows); anything auth-scoped must use
 * createClient() so it sees the owner's session.
 */
export function createPublicClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return []
        },
        setAll() {
          // no-op: public client holds no session
        },
      },
    }
  )
}
