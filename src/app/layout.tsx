import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ClientShell } from './_client'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.blackrabbit-creative.com'),
  title: {
    default: 'Branding Agency Keene NH Portsmouth NH Providence RI | Black Rabbit Creative',
    template: '%s | Black Rabbit Creative',
  },
  description:
    'Black Rabbit Creative: Branding Agency offering Branding Services, Website Design Agency, Logo Design Company, Graphic Design Agency in Keene, NH, Portsmouth, NH, Providence, RI.',
  keywords: [
    'branding agency',
    'logo design',
    'graphic design',
    'brand identity',
    'Keene NH',
    'Portsmouth NH',
    'Providence RI',
  ],
  authors: [{ name: 'Black Rabbit Creative' }],
  creator: 'Black Rabbit Creative',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.blackrabbit-creative.com',
    siteName: 'Black Rabbit Creative',
    title: 'Black Rabbit Creative | Branding & Design Studio',
    description:
      'Branding Agency offering Logo Design, Brand Identity, Packaging Design, and Graphic Design services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Black Rabbit Creative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Rabbit Creative',
    description: 'Branding Agency offering professional design services.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.blackrabbit-creative.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TBLST0QV2M"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TBLST0QV2M');
            `,
          }}
        />

        {/* Google Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* Constant Contact Popup */}
        <Script
          id="ctct_embed_script"
          async
          src="https://app.constantcontact.com/......js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
              <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
