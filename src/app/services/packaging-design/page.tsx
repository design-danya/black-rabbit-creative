import type { Metadata } from 'next'
import PackagingDesign from '../../pages/services/PackagingDesign'

export const metadata: Metadata = {
  title: 'Packaging Design | Black Rabbit Creative',
  description: 'Strategic packaging design for products.',
  alternates: {
    canonical: '/services/packaging-design',
  },
}

export default function PackagingDesignPage() {
  return <PackagingDesign />
}
