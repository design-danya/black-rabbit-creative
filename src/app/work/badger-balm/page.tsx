import type { Metadata } from 'next'
import BadgerBalm from '../../pages/portfolio/BadgerBalm'

export const metadata: Metadata = {
  title: 'Badger Balm — Packaging Design',
  description: "Packaging design for Badger Balm — retail-ready label systems and product packaging built to hold the shelf for a New England natural care brand.",
  alternates: {
    canonical: '/work/badger-balm',
  },
}

export default function BadgerBalmPage() {
  return <BadgerBalm />
}
