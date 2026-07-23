import type { Metadata } from 'next'
import BreweryBranding from '../../pages/services/BreweryBranding'

export const metadata: Metadata = {
  title: 'Brewery Branding',
  description: "Brewery branding and craft beer label design from Portsmouth, NH — brand identity systems, can and bottle labels, taproom signage, and merchandise for breweries.",
  alternates: {
    canonical: '/services/brewery-branding',
  },
}

export default function BreweryBrandingPage() {
  return <BreweryBranding />
}
