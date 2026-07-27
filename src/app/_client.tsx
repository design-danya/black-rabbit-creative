'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { OnlynessPopup } from './components/OnlynessPopup'

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
    /* reducedMotion="user" makes every motion component in the tree respect the
       OS "Reduce motion" setting — transform and layout animations are dropped,
       opacity is kept. The site runs ~940 motion components and ~380 scroll-
       triggered reveals, which is a lot of movement for anyone with a
       vestibular disorder (WCAG 2.3.3). One wrapper covers all of them. */
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col relative">
      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      {/* First focusable element on every page, so keyboard users can jump the
          nav instead of tabbing through it on every navigation (WCAG 2.4.1). */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-black focus:text-white focus:px-5 focus:py-3 focus:text-xs focus:uppercase focus:tracking-[0.2em] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow w-full relative z-0">
        {children}
      </main>
      <Footer />
      <OnlynessPopup />
    </div>
    </MotionConfig>
  )
}
