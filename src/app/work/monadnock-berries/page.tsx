import type { Metadata } from 'next'
import MonadnockBerries from '../../pages/portfolio/MonadnockBerries'

export const metadata: Metadata = {
  title: 'Monadnock Berries — Logo Identity Case Study | Black Rabbit Creative',
  description: 'A heritage-driven logo system for a New Hampshire berry farm.',
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
