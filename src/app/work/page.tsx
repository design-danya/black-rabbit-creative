import type { Metadata } from 'next'
import Portfolio from '../pages/Portfolio'

export const metadata: Metadata = {
  title: 'Branding & Logo Design Portfolio',
  description: "Branding and logo design portfolio from Black Rabbit Creative — brand identity, packaging, and graphic design case studies for businesses across New England.",
  alternates: {
    canonical: '/work',
  },
}

export default function WorkPage() {
  return <Portfolio />
}
