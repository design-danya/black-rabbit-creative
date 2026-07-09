import type { Metadata } from 'next'
import Kapiloff from '../../pages/portfolio/Kapiloff'

export const metadata: Metadata = {
  title: 'Kapiloff | Black Rabbit Creative',
  description: 'Case study: Kapiloff',
  alternates: {
    canonical: '/work/kapiloff-insurance',
  },
}

export default function KapiloffPage() {
  return <Kapiloff />
}
