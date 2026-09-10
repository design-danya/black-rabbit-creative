import type { Metadata } from 'next'
import PressAwards from '../../pages/about/PressAwards'

export const metadata: Metadata = {
  title: 'Press & Awards',
  description: 'Awards and press for Black Rabbit Creative, including a GDUSA Package Design Award for craft beer label design. A branding studio based in Portsmouth, NH.',
  alternates: {
    canonical: '/about/press-awards',
  },
}

export default function PressAwardsPage() {
  return <PressAwards />
}
