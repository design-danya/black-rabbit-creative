import type { Metadata } from 'next'
import About from '../pages/About'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Black Rabbit Creative and our approach to branding and design.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <About />
}
