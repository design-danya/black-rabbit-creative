import type { Metadata } from 'next'
import SequoiaSexToys from '../../pages/portfolio/SequoiaSexToys'

export const metadata: Metadata = {
  title: 'SequoiaSexToys | Black Rabbit Creative',
  description: 'Case study: SequoiaSexToys',
  alternates: {
    canonical: '/work/sequoia-sex-toys',
  },
}

export default function SequoiaSexToysPage() {
  return <SequoiaSexToys />
}
