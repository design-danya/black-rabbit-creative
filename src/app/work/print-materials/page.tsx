import type { Metadata } from 'next'
import PrintMaterials from '../../pages/portfolio/PrintMaterials'

export const metadata: Metadata = {
  title: 'Print Materials — Graphic Design Portfolio',
  description: "Print and graphic design portfolio from Black Rabbit Creative — brochures, posters, signage, and collateral produced for brands across New England.",
  alternates: {
    canonical: '/work/print-materials',
  },
}

export default function PrintMaterialsPage() {
  return <PrintMaterials />
}
