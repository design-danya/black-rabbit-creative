import type { Metadata } from 'next'
import Services from '../pages/Services'

export const metadata: Metadata = {
  title: "Branding & Design Services",
  description: 'Brand identity, logo design, packaging design, brewery branding and graphic design for product-based businesses. A Portsmouth, NH studio serving New England.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return <Services />
}
