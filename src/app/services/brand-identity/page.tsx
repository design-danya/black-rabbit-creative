import type { Metadata } from 'next'
import BrandIdentity from '../../pages/services/BrandIdentity'

export const metadata: Metadata = {
  title: 'Brand Identity Design | Black Rabbit Creative',
  description: 'Strategic brand identity systems and visual design.',
  alternates: {
    canonical: '/services/brand-identity',
  },
}

export default function BrandIdentityPage() {
  return <BrandIdentity />
}
