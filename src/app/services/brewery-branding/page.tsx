import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '../../structured-data'
import BreweryBranding from '../../pages/services/BreweryBranding'

export const metadata: Metadata = {
  title: "Brewery Branding & Beer Label Design",
  description: "Brewery branding and craft beer label design from Portsmouth, NH — brand identity systems, can and bottle labels, taproom signage, and merchandise for breweries.",
  alternates: {
    canonical: '/services/brewery-branding',
  },
}

export default function BreweryBrandingPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Brewery Branding',
            description: 'Brewery branding and craft beer label design — taproom identity, can and label systems, merchandise and signage.',
            path: '/services/brewery-branding',
          }),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Brewery Branding', path: '/services/brewery-branding' },
          ]),
        ]}
      />
      <BreweryBranding />
    </>
  )
}
