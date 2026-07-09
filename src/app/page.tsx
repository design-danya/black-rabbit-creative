import type { Metadata } from 'next'
import Home from './pages/Home'

export const metadata: Metadata = {
  title: 'Branding Agency Keene NH Portsmouth NH Providence RI | Black Rabbit Creative',
  description:
    'Black Rabbit Creative: Branding Agency offering Branding Services, Logo Design Company, Packaging Design, Graphic Design Agency in Keene, NH, Portsmouth, NH, Providence, RI.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Black Rabbit Creative | Branding & Design Studio',
    description: 'Branding Agency offering Logo Design, Brand Identity, Packaging Design, and Graphic Design.',
    url: '/',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Rabbit Creative',
    description: 'Branding & Design Studio',
    images: ['/og-image.png'],
  },
}

export default function HomePage() {
  return <Home />
}
