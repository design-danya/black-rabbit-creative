import type { Metadata } from 'next'
import CaseStudies from '../../pages/portfolio/CaseStudies'

export const metadata: Metadata = {
  title: 'CaseStudies | Black Rabbit Creative',
  description: 'Case study: CaseStudies',
  alternates: {
    canonical: '/work/case-studies',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
