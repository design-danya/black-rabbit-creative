import type { Metadata } from 'next'
import PressAwards from '../../pages/about/PressAwards'

export const metadata: Metadata = {
  title: 'Press & Awards',
  description: 'Awards, press mentions, and recognition for Black Rabbit Creative.',
  alternates: {
    canonical: '/about/press-awards',
  },
}

export default function PressAwardsPage() {
  return <PressAwards />
}
