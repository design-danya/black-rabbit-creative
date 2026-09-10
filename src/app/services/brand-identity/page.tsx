import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '../../structured-data'
import BrandIdentity from '../../pages/services/BrandIdentity'

export const metadata: Metadata = {
  title: 'Brand Identity Design',
  description: "Strategic brand identity design — positioning, voice, logo systems, and complete visual guidelines for product-based businesses in New Hampshire and New England.",
  alternates: {
    canonical: '/services/brand-identity',
  },
}

export default function BrandIdentityPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Brand Identity Design',
            description: 'Strategic brand identity systems — positioning, voice, logo, typography, colour and brand guidelines — for product-based businesses.',
            path: '/services/brand-identity',
          }),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Brand Identity', path: '/services/brand-identity' },
          ]),
        ]}
      />
      <BrandIdentity />
    </>
  )
}
