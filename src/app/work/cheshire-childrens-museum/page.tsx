import type { Metadata } from 'next'
import CheshireMuseum from '../../pages/portfolio/CheshireMuseum'

export const metadata: Metadata = {
  title: "Cheshire Children's Museum — Brand Identity",
  description: "Brand identity design for Cheshire Children's Museum — a playful, durable visual system built for wayfinding, exhibits, and family audiences in Keene, NH.",
  alternates: {
    canonical: '/work/cheshire-childrens-museum',
  },
}

export default function CheshireMuseumPage() {
  return <CheshireMuseum />
}
