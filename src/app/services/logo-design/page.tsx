import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '../../structured-data'
import LogoDesign from '../../pages/services/LogoDesign'

export const metadata: Metadata = {
  title: "Logo Design in Portsmouth, NH",
  description: "Custom logo design from Black Rabbit Creative in Portsmouth, NH — distinctive, precise marks engineered to last, with full typography and usage guidelines.",
  alternates: {
    canonical: '/services/logo-design',
  },
}

export default function LogoDesignPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Logo Design',
            description: 'Custom logo design: distinctive, precise marks engineered to last, delivered with typography and usage guidelines.',
            path: '/services/logo-design',
          }),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Logo Design', path: '/services/logo-design' },
          ]),
        ]}
      />
      <LogoDesign />
    </>
  )
}
