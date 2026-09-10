import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '../../structured-data'
import GraphicDesign from '../../pages/services/GraphicDesign'

export const metadata: Metadata = {
  title: "Graphic Design & Illustration",
  description: "Print and digital graphic design services — brochures, signage, illustration, templates, and campaign collateral for brands across New Hampshire and New England.",
  alternates: {
    canonical: '/services/graphic-design',
  },
}

export default function GraphicDesignPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Graphic Design & Illustration',
            description: 'Marketing collateral, social and print graphics, environmental design and custom illustration as an extension of an existing brand system.',
            path: '/services/graphic-design',
          }),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Graphic Design', path: '/services/graphic-design' },
          ]),
        ]}
      />
      <GraphicDesign />
    </>
  )
}
