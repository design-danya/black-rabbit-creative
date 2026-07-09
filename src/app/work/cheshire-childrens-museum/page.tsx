import type { Metadata } from 'next'
import CheshireMuseum from '../../pages/portfolio/CheshireMuseum'

export const metadata: Metadata = {
  title: 'CheshireMuseum | Black Rabbit Creative',
  description: 'Case study: CheshireMuseum',
  alternates: {
    canonical: '/work/cheshire-childrens-museum',
  },
}

export default function CheshireMuseumPage() {
  return <CheshireMuseum />
}
