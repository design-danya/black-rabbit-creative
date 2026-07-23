import type { Metadata } from 'next'
import BasicBalance from '../../pages/portfolio/BasicBalance'

export const metadata: Metadata = {
  title: 'Basic Balance Acupuncture — Brand Identity Design',
  description: "Brand identity design for Basic Balance Acupuncture — a calm, grounded visual system spanning logo, typography, and practice collateral in Portsmouth, NH.",
  alternates: {
    canonical: '/work/basic-balance-acupuncture',
  },
}

export default function BasicBalancePage() {
  return <BasicBalance />
}
