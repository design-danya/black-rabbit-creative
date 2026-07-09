import type { Metadata } from 'next'
import NovaDerm from '../../pages/portfolio/NovaDerm'

export const metadata: Metadata = {
  title: 'NovaDerm | Black Rabbit Creative',
  description: 'Case study: NovaDerm',
  alternates: {
    canonical: '/work/nova-dermatology',
  },
}

export default function NovaDermPage() {
  return <NovaDerm />
}
