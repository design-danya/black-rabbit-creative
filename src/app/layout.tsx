import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ClientShell } from './_client'
import { organizationSchema, websiteSchema } from './structured-data'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.blackrabbit-creative.com'),
  title: {
    default: 'Black Rabbit Creative | Branding & Packaging Design, Portsmouth NH',
    template: '%s | Black Rabbit Creative',
  },
  description:
    'Brand identity, logo, and packaging design for product-based businesses. A Portsmouth, NH studio building brands that stand apart from their competition.',
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
    title: 'Black Rabbit Creative — Branding & Packaging Design',
    description:
      'Brand identity, logo, and packaging design for product-based businesses across New England. Based in Portsmouth, NH.',
    // og image supplied by src/app/opengraph-image.tsx (file convention)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Rabbit Creative — Branding & Packaging Design',
    description:
      'Brand identity, logo, and packaging design for product-based businesses across New England.',
    // twitter image supplied by src/app/opengraph-image.tsx (file convention)
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

        {/* Google Ads conversion tracking — reuses the gtag.js loaded above. */}
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `gtag('config', 'AW-17440004789');`,
          }}
        />

        {/* Organization / LocalBusiness structured data, server-rendered so
            crawlers receive it in the initial HTML. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
