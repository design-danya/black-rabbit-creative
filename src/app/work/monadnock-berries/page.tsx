import type { Metadata } from 'next'
import MonadnockBerries from '../../pages/portfolio/MonadnockBerries'

export const metadata: Metadata = {
  title: 'Monadnock Berries — Logo Identity Case Study',
  description: "A heritage-driven logo and identity system for Monadnock Berries, a New Hampshire berry farm — mark, palette, and packaging rooted in the land it grew from.",
  alternates: {
    canonical: '/work/monadnock-berries',
  },
  openGraph: {
    title: 'Monadnock Berries — Logo Identity',
    description: 'Heritage branding for a New Hampshire berry farm.',
    images: [{ url: '/og/monadnock-berries.png', width: 1200, height: 630 }],
  },
}

export default function MonadnockBerriesPage() {
  return <MonadnockBerries />
}
