import type { Metadata } from 'next'
import FAQ from '../../pages/about/FAQ'
import { JsonLd } from '../../components/JsonLd'
import { faqSchema, breadcrumbSchema } from '../../structured-data'
import { faqItems } from '../../data/faq'

export const metadata: Metadata = {
  title: 'Branding FAQ',
  description:
    'Answers on branding, packaging and logo design — process, timelines, pricing and deliverables — from Black Rabbit Creative, a design studio in Portsmouth, NH.',
  alternates: {
    canonical: '/about/faq',
  },
}

export default function FAQPage() {
  return (
    <>
      <JsonLd
        schema={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'About', path: '/about' },
            { name: 'FAQ', path: '/about/faq' },
          ]),
        ]}
      />
      <FAQ />
    </>
  )
}
