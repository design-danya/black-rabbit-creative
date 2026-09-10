import type { Metadata } from 'next'
import { JsonLd } from '../../components/JsonLd'
import { serviceSchema, breadcrumbSchema } from '../../structured-data'
import PackagingDesign from '../../pages/services/PackagingDesign'

export const metadata: Metadata = {
  title: "Packaging Design for Product Brands",
  description: "Packaging design for product-based businesses — retail-ready label systems, structural guidance, and shelf-tested design from a Portsmouth, NH studio.",
  alternates: {
    canonical: '/services/packaging-design',
  },
}

export default function PackagingDesignPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: 'Packaging Design',
            description: 'Production-ready packaging and label design for food, beverage and consumer product brands.',
            path: '/services/packaging-design',
          }),
          breadcrumbSchema([
            { name: 'Services', path: '/services' },
            { name: 'Packaging Design', path: '/services/packaging-design' },
          ]),
        ]}
      />
      <PackagingDesign />
    </>
  )
}
