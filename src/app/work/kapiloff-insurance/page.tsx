import type { Metadata } from 'next'
import Kapiloff from '../../pages/portfolio/Kapiloff'

export const metadata: Metadata = {
  title: "Kapiloff Insurance — Brand Identity",
  description: "Brand identity design for Kapiloff Insurance — a refreshed mark, typography system, and visual language that brings warmth and clarity to a legacy insurance firm.",
  alternates: {
    canonical: '/work/kapiloff-insurance',
  },
}

export default function KapiloffPage() {
  return <Kapiloff />
}
