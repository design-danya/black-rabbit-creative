import type { Metadata } from 'next'
import GraphicDesign from '../../pages/services/GraphicDesign'

export const metadata: Metadata = {
  title: 'Graphic Design',
  description: "Print and digital graphic design services — brochures, signage, illustration, templates, and campaign collateral for brands across New Hampshire and New England.",
  alternates: {
    canonical: '/services/graphic-design',
  },
}

export default function GraphicDesignPage() {
  return <GraphicDesign />
}
