import type { Metadata } from 'next'
import PrintMaterials from '../../pages/portfolio/PrintMaterials'

export const metadata: Metadata = {
  title: 'PrintMaterials | Black Rabbit Creative',
  description: 'Case study: PrintMaterials',
  alternates: {
    canonical: '/work/print-materials',
  },
}

export default function PrintMaterialsPage() {
  return <PrintMaterials />
}
