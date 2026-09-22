import type { Metadata } from 'next'
import ElmCityBrewing from '../../pages/portfolio/ElmCityBrewing'
import { JsonLd } from '../../components/JsonLd'
import { caseStudySchema, breadcrumbSchema, faqSchema } from '../../structured-data'
import { elmCityFaq } from '../../data/elmCityFaq'

const PATH = '/work/elm-city-brewing'
const HERO = '/assets/dc05ed0777eabfe2a20f4c9e9b1782312618c371.png'
const DESCRIPTION =
  "Comprehensive brand identity for Elm City Brewing, Keene NH's first brewery. A refine-and-strengthen rebrand under new ownership: four-mark logo system, five-color palette, illustration set, taproom signage, merchandise and a 31-page brand guide."

export const metadata: Metadata = {
  title: 'Elm City Brewing — Brewery Brand Identity Case Study',
  description: DESCRIPTION,
  keywords: [
    'brewery branding',
    'brewery logo design',
    'brand identity New Hampshire',
    'taproom signage',
    'brand guidelines',
    'Keene NH brewery',
    'rebrand vs refresh',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    title: 'Elm City Brewing — Brewery Brand Identity',
    description: DESCRIPTION,
    url: PATH,
    images: [
      {
        url: HERO,
        width: 1600,
        height: 1067,
        alt: 'Elm City Brewing diamond badge logo on taproom wall signage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elm City Brewing — Brewery Brand Identity',
    description: DESCRIPTION,
    images: [HERO],
  },
}

export default function ElmCityBrewingPage() {
  return (
    <>
      <JsonLd
        schema={[
          caseStudySchema({
            name: 'Elm City Brewing — Brand Identity',
            headline: 'Refining a thirty-year brewery brand without throwing away its equity',
            description: DESCRIPTION,
            path: PATH,
            image: HERO,
            clientName: 'Elm City Brewing Company',
            datePublished: '2026-09-22',
            keywords: [
              'brewery branding',
              'brand identity design',
              'logo system',
              'brand guidelines',
              'taproom signage',
              'Keene New Hampshire',
            ],
          }),
          breadcrumbSchema([
            { name: 'Work', path: '/work' },
            { name: 'Elm City Brewing', path: PATH },
          ]),
          faqSchema(elmCityFaq, PATH),
        ]}
      />
      <ElmCityBrewing />
    </>
  )
}
