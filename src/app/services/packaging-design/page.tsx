import type { Metadata } from 'next'
import PackagingDesign from '../../pages/services/PackagingDesign'

export const metadata: Metadata = {
  title: 'Packaging Design',
  description: "Packaging design for product-based businesses — retail-ready label systems, structural guidance, and shelf-tested design from a Portsmouth, NH studio.",
  alternates: {
    canonical: '/services/packaging-design',
  },
}

export default function PackagingDesignPage() {
  return <PackagingDesign />
}
