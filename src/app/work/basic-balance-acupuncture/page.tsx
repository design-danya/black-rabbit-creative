import type { Metadata } from 'next'
import BasicBalance from '../../pages/portfolio/BasicBalance'

export const metadata: Metadata = {
  title: 'BasicBalance | Black Rabbit Creative',
  description: 'Case study: BasicBalance',
  alternates: {
    canonical: '/work/basic-balance-acupuncture',
  },
}

export default function BasicBalancePage() {
  return <BasicBalance />
}
