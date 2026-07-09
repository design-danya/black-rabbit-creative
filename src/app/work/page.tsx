import type { Metadata } from 'next'
import Portfolio from '../pages/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Black Rabbit Creative',
  description: 'Explore our branding and design case studies.',
  alternates: {
    canonical: '/work',
  },
}

export default function WorkPage() {
  return <Portfolio />
}
