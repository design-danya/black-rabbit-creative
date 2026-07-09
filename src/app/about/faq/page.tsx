import type { Metadata } from 'next'
import FAQ from '../../pages/about/FAQ'

export const metadata: Metadata = {
  title: 'FAQ | Black Rabbit Creative',
  description: 'Frequently asked questions about Black Rabbit Creative services.',
  alternates: {
    canonical: '/about/faq',
  },
}

export default function FAQPage() {
  return <FAQ />
}
