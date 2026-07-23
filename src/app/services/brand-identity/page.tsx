import type { Metadata } from 'next'
import BrandIdentity from '../../pages/services/BrandIdentity'

export const metadata: Metadata = {
  title: 'Brand Identity Design',
  description: "Strategic brand identity design — positioning, voice, logo systems, and complete visual guidelines for product-based businesses in New Hampshire and New England.",
  alternates: {
    canonical: '/services/brand-identity',
  },
}

export default function BrandIdentityPage() {
  return <BrandIdentity />
}
