import type { Metadata } from 'next'
import FortifiedMotherhood from '../../pages/portfolio/FortifiedMotherhood'
import { JsonLd } from '../../components/JsonLd'
import { caseStudySchema, breadcrumbSchema, faqSchema } from '../../structured-data'
import { fortifiedFaq } from '../../data/fortifiedFaq'

const PATH = '/work/fortified-motherhood'
const HERO = '/assets/fortified-motherhood/hero-flatlay.webp'
const DESCRIPTION =
  'Brand strategy, a four-mark logo suite, eight hand-drawn botanical illustrations and a pattern system for Fortified Motherhood, a postpartum care practice in the Monadnock region of New Hampshire. A case study in breaking out of a category built on lotus flowers and blush pastels.'

export const metadata: Metadata = {
  title: 'Fortified Motherhood — Postpartum Brand Identity & Illustration',
  description: DESCRIPTION,
  keywords: [
    'postpartum brand identity',
    'wellness brand design',
    'hand-drawn botanical illustration',
    'doula branding',
    'brand identity New Hampshire',
    'pattern design',
    'logo suite',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    title: 'Fortified Motherhood — Postpartum Brand Identity',
    description: DESCRIPTION,
    url: PATH,
    images: [
      {
        url: HERO,
        width: 1800,
        height: 1200,
        alt: 'Fortified Motherhood brand collateral — journal, supplement jar, infant bodysuit and patterned swaddle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortified Motherhood — Postpartum Brand Identity',
    description: DESCRIPTION,
    images: [HERO],
  },
}

export default function FortifiedMotherhoodPage() {
  return (
    <>
      <JsonLd
        schema={[
          caseStudySchema({
            name: 'Fortified Motherhood — Brand Identity',
            headline: 'A postpartum brand built on strength, not pastels',
            description: DESCRIPTION,
            path: PATH,
            image: HERO,
            clientName: 'Fortified Motherhood',
            datePublished: '2026-09-16',
            keywords: [
              'postpartum branding',
              'brand identity design',
              'hand-drawn illustration',
              'pattern design',
              'logo suite',
              'New Hampshire',
            ],
          }),
          breadcrumbSchema([
            { name: 'Work', path: '/work' },
            { name: 'Fortified Motherhood', path: PATH },
          ]),
          faqSchema(fortifiedFaq, PATH),
        ]}
      />
      <FortifiedMotherhood />
    </>
  )
}
