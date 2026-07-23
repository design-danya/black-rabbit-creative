import type { Metadata } from 'next'
import LogoDesign from '../../pages/services/LogoDesign'

export const metadata: Metadata = {
  title: "Logo Design in Portsmouth, NH",
  description: "Custom logo design from Black Rabbit Creative in Portsmouth, NH — distinctive, precise marks engineered to last, with full typography and usage guidelines.",
  alternates: {
    canonical: '/services/logo-design',
  },
}

export default function LogoDesignPage() {
  return <LogoDesign />
}
