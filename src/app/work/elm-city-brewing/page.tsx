import type { Metadata } from 'next'
import ElmCityBrewing from '../../pages/portfolio/ElmCityBrewing'

export const metadata: Metadata = {
  title: 'Elm City Brewing — Brand Identity',
  description: "Complete brand identity for Elm City Brewing in Keene, NH — logo, taproom signage, merchandise, and a craft beer packaging system built to scale.",
  alternates: { canonical: '/work/elm-city-brewing' },
}

export default function ElmCityBrewingPage() {
  return <ElmCityBrewing />
}
