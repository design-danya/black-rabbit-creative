import type { Metadata } from 'next'
import KeenePride from '../../pages/portfolio/KeenePride'

export const metadata: Metadata = {
  title: "Keene Pride Festival — Event Branding",
  description: "Event branding and graphic design for Keene Pride Festival — identity, signage, and promotional materials for New Hampshire's celebration of community.",
  alternates: {
    canonical: '/work/keene-pride-festival',
  },
}

export default function KeenePridePage() {
  return <KeenePride />
}
