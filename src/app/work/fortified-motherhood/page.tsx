import type { Metadata } from 'next'
import FortifiedMotherhood from '../../pages/portfolio/FortifiedMotherhood'

export const metadata: Metadata = {
  title: 'Fortified Motherhood — Brand Identity',
  description:
    "Brand strategy, logo suite, hand-drawn botanical illustration and pattern design for Fortified Motherhood — a postpartum care practice in the Monadnock region of New Hampshire.",
  alternates: { canonical: '/work/fortified-motherhood' },
}

export default function FortifiedMotherhoodPage() {
  return <FortifiedMotherhood />
}
