/**
 * Organization / LocalBusiness schema, server-rendered into the root layout.
 *
 * This previously lived in src/app/App.tsx and was injected client-side via
 * useEffect — but App.tsx was orphaned during the Next.js migration and never
 * imported, so no structured data was ever delivered. Rendering it server-side
 * means crawlers get it in the initial HTML.
 */
export const SITE_URL = 'https://www.blackrabbit-creative.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Black Rabbit Creative',
  description:
    'Black Rabbit Creative is a brand identity and packaging design studio in Portsmouth, NH. Brand strategy, visual identity systems, logo design, and production-ready packaging for product-based businesses across New England.',
  url: `${SITE_URL}/`,
  telephone: '+18024160905',
  image: `${SITE_URL}/assets/Black_Rabbitv3-16.png`,
  logo: `${SITE_URL}/assets/Black_Rabbitv3-16.png`,
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '134 South Street, Apt 4',
    addressLocality: 'Portsmouth',
    addressRegion: 'NH',
    postalCode: '03801',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.0718,
    longitude: -70.7626,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Portsmouth',
      containedInPlace: { '@type': 'State', name: 'New Hampshire' },
    },
    {
      '@type': 'City',
      name: 'Keene',
      containedInPlace: { '@type': 'State', name: 'New Hampshire' },
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/blackrabbitcreative/',
    'https://www.facebook.com/blackrabbitcreative',
    'https://www.instagram.com/black.rabbit.creative',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Branding & Design Services',
    itemListElement: [
      'Brand Identity Design',
      'Logo Design',
      'Packaging Design',
      'Graphic Design',
      'Brewery Branding',
      'Website Design',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
  knowsAbout: [
    'Brand Identity',
    'Logo Design',
    'Packaging Design',
    'Graphic Design',
    'Brewery Branding',
    'Craft Beverage Packaging',
    'CPG Brand Strategy',
    'Rebranding',
    'Visual Identity Systems',
    'Small Business Branding',
  ],
}

/** Sitewide search + site identity, helps Google build the knowledge panel. */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Black Rabbit Creative',
  publisher: { '@id': `${SITE_URL}/#organization` },
}
