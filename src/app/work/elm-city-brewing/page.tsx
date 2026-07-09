import type { Metadata } from 'next'
import ElmCityBrewing from '../../pages/portfolio/ElmCityBrewing'

export const metadata: Metadata = {
  title: 'Elm City Brewing — Brand Identity | Black Rabbit Creative',
  description: 'Complete brand identity for a craft brewery.',
  alternates: { canonical: '/work/elm-city-brewing' },
}

export default function ElmCityBrewingPage() {
  return <ElmCityBrewing />
}
