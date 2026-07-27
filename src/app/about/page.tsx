import type { Metadata } from 'next'
import About from '../pages/About'

export const metadata: Metadata = {
  title: { absolute: 'About Black Rabbit Creative | Portsmouth, NH Design Studio' },
  description:
    'Black Rabbit Creative is a brand identity and packaging design studio in Portsmouth, NH. Meet the studio and how we build brands that stand apart.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <About />
}
