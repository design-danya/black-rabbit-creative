import type { Metadata } from 'next'
import CaseStudies from '../../pages/portfolio/CaseStudies'

export const metadata: Metadata = {
  title: 'Branding Case Studies',
  description: "In-depth branding case studies from Black Rabbit Creative — how strategy, logo design, and packaging come together for product-based businesses in New England.",
  alternates: {
    canonical: '/work/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
