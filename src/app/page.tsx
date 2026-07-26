import type { Metadata } from 'next'
import Home from './pages/Home'

export const metadata: Metadata = {
  title: 'Branding & Packaging Design Studio in Portsmouth, NH',
  description:
    'Brand identity, logo, and packaging design for product-based businesses across New England. Based in Portsmouth, NH — serving Keene and Providence.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Black Rabbit Creative — Branding & Packaging Design',
    description:
      'Brand identity, logo, and packaging design for product-based businesses across New England. Based in Portsmouth, NH.',
    url: '/',
    type: 'website',
    // og image supplied by src/app/opengraph-image.tsx (file convention)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Rabbit Creative — Branding & Packaging Design',
    description:
      'Brand identity, logo, and packaging design for product-based businesses across New England.',
  },
}

export default function HomePage() {
  return <Home />
}
