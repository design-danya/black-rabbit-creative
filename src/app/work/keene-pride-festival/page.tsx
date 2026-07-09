import type { Metadata } from 'next'
import KeenePride from '../../pages/portfolio/KeenePride'

export const metadata: Metadata = {
  title: 'KeenePride | Black Rabbit Creative',
  description: 'Case study: KeenePride',
  alternates: {
    canonical: '/work/keene-pride-festival',
  },
}

export default function KeenePridePage() {
  return <KeenePride />
}
