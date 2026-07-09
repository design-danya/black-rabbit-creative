'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E`

/**
 * Client-side shell component that wraps all pages.
 * Handles scroll-to-top on route changes and renders interactive shell (Navbar/Footer).
 */
export function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      <Navbar />
      <main className="flex-grow w-full relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  )
}
