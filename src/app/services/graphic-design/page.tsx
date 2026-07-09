import type { Metadata } from 'next'
import GraphicDesign from '../../pages/services/GraphicDesign'

export const metadata: Metadata = {
  title: 'Graphic Design | Black Rabbit Creative',
  description: 'Print and digital graphic design services.',
  alternates: {
    canonical: '/services/graphic-design',
  },
}

export default function GraphicDesignPage() {
  return <GraphicDesign />
}
