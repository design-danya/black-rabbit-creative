import type { Metadata } from 'next'
import Services from '../pages/Services'

export const metadata: Metadata = {
  title: 'Services | Black Rabbit Creative',
  description: 'Brand Identity, Logo Design, Packaging Design, and Graphic Design services.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return <Services />
}
