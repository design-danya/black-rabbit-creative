import type { Metadata } from 'next'
import HendricksLutherie from '../../pages/portfolio/HendricksLutherie'

export const metadata: Metadata = {
  title: 'HendricksLutherie | Black Rabbit Creative',
  description: 'Case study: HendricksLutherie',
  alternates: {
    canonical: '/work/hendricks-lutherie',
  },
}

export default function HendricksLutheriePage() {
  return <HendricksLutherie />
}
