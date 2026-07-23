import type { Metadata } from 'next'
import Services from '../pages/Services'

export const metadata: Metadata = {
  title: "Branding & Design Services",
  description: 'Brand Identity, Logo Design, Packaging Design, and Graphic Design services.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return <Services />
}
