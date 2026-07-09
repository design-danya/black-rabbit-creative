import type { Metadata } from 'next'
import GraniteRoots from '../../pages/portfolio/GraniteRoots'

export const metadata: Metadata = {
  title: 'GraniteRoots | Black Rabbit Creative',
  description: 'Case study: GraniteRoots',
  alternates: {
    canonical: '/work/granite-roots-brewing',
  },
}

export default function GraniteRootsPage() {
  return <GraniteRoots />
}
