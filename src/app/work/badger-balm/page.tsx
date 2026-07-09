import type { Metadata } from 'next'
import BadgerBalm from '../../pages/portfolio/BadgerBalm'

export const metadata: Metadata = {
  title: 'BadgerBalm | Black Rabbit Creative',
  description: 'Case study: BadgerBalm',
  alternates: {
    canonical: '/work/badger-balm',
  },
}

export default function BadgerBalmPage() {
  return <BadgerBalm />
}
