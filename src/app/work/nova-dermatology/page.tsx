import type { Metadata } from 'next'
import NovaDerm from '../../pages/portfolio/NovaDerm'

export const metadata: Metadata = {
  title: "Nova Dermatology — Brand Identity",
  description: "Brand identity design for Nova Dermatology — a clean, clinical-yet-human visual system covering logo, palette, and patient-facing collateral.",
  alternates: {
    canonical: '/work/nova-dermatology',
  },
}

export default function NovaDermPage() {
  return <NovaDerm />
}
