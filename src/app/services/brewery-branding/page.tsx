import type { Metadata } from 'next'
import BreweryBranding from '../../pages/services/BreweryBranding'

export const metadata: Metadata = {
  title: 'Brewery Branding | Black Rabbit Creative',
  description: 'Specialized branding for breweries.',
  alternates: {
    canonical: '/services/brewery-branding',
  },
}

export default function BreweryBrandingPage() {
  return <BreweryBranding />
}
