import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

/**
 * Next only renders app/not-found.tsx. The older src/app/pages/NotFound.tsx
 * was never wired up, so every 404 fell through to Next's unstyled default.
 */
export default function NotFound() {
  return (
    <section className="min-h-[75vh] bg-black text-white flex items-center px-6 md:px-12 py-24">
      <div className="max-w-3xl mx-auto w-full">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
          404
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.07em] leading-[0.9] mb-8">
          This page
          <br />
          <span className="text-[#5b3fd6]">doesn&apos;t exist.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
          It may have moved, or the link may be wrong. The work is still here.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 bg-[#5b3fd6] hover:bg-[#4a32b8] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
          >
            View Work
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-white/5 border border-white/15 hover:bg-white/10 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
          >
            Back Home
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
