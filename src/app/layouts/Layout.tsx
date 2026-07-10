'use client'

import { usePathname } from 'next/navigation'
import { useEffect, Suspense, type ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='.05'/%3E%3C/svg%3E`

export function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      <Navbar />

      <main className="flex-grow w-full relative z-0">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          {children}
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
