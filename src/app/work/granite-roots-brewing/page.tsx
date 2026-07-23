import type { Metadata } from 'next'
import GraniteRoots from '../../pages/portfolio/GraniteRoots'

export const metadata: Metadata = {
  title: 'Granite Roots Brewing — Award-Winning Craft Beer Packaging',
  description: "GDUSA 2025 award-winning craft beer packaging for Granite Roots Brewing — can label design and brand system for a New Hampshire brewery.",
  alternates: {
    canonical: '/work/granite-roots-brewing',
  },
}

export default function GraniteRootsPage() {
  return <GraniteRoots />
}
