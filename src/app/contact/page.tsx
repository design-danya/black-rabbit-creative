import type { Metadata } from 'next'
import Contact from '../pages/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a branding, packaging or logo design project with Black Rabbit Creative. A Portsmouth, NH studio working with product-based businesses across New England.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
