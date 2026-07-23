import type { Metadata } from 'next'
import HendricksLutherie from '../../pages/portfolio/HendricksLutherie'

export const metadata: Metadata = {
  title: "Hendrick's Lutherie — Brand Identity",
  description: "Brand identity design for Hendrick's Lutherie — a craft-forward mark and visual system honoring handmade instrument building in New England.",
  alternates: {
    canonical: '/work/hendricks-lutherie',
  },
}

export default function HendricksLutheriePage() {
  return <HendricksLutherie />
}
