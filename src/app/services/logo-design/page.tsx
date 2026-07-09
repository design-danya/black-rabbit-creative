import type { Metadata } from 'next'
import LogoDesign from '../../pages/services/LogoDesign'

export const metadata: Metadata = {
  title: 'Logo Design | Black Rabbit Creative',
  description: 'Distinctive logo design for brands.',
  alternates: {
    canonical: '/services/logo-design',
  },
}

export default function LogoDesignPage() {
  return <LogoDesign />
}
