import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.blackrabbit-creative.com'

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/press-awards`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/brand-identity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/logo-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/packaging-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/graphic-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/brewery-branding`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Case studies
  const caseStudies: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/work/monadnock-berries`, priority: 0.8 },
    { url: `${baseUrl}/work/elm-city-brewing`, priority: 0.8 },
    { url: `${baseUrl}/work/granite-roots-brewing`, priority: 0.8 },
    { url: `${baseUrl}/work/kapiloff-insurance`, priority: 0.8 },
    { url: `${baseUrl}/work/basic-balance-acupuncture`, priority: 0.8 },
    { url: `${baseUrl}/work/nova-dermatology`, priority: 0.8 },
    { url: `${baseUrl}/work/hendricks-lutherie`, priority: 0.8 },
    { url: `${baseUrl}/work/cheshire-childrens-museum`, priority: 0.8 },
    { url: `${baseUrl}/work/keene-pride-festival`, priority: 0.8 },
    { url: `${baseUrl}/work/print-materials`, priority: 0.8 },
    { url: `${baseUrl}/work/sequoia-sex-toys`, priority: 0.8 },
    { url: `${baseUrl}/work/badger-balm`, priority: 0.8 },
    { url: `${baseUrl}/work/case-studies`, priority: 0.7 },
    { url: `${baseUrl}/work/books`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  return [...mainPages, ...caseStudies]
}
