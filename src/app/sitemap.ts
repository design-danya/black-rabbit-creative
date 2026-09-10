export const dynamic = "force-static"

import { MetadataRoute } from 'next'

/**
 * Sitemap.
 *
 * lastModified used to be `new Date()` on every entry, which claimed the whole
 * site changed on every deploy. Crawlers learn to discount a site that always
 * says "everything is new", so the dates below are real: update the entry when
 * you actually change a page. Everything else is derived from this one table.
 */

const BASE = 'https://www.blackrabbit-creative.com'

type Entry = {
  path: string
  lastModified: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

const PAGES: Entry[] = [
  { path: '/',                              lastModified: '2026-09-09', priority: 1,   changeFrequency: 'weekly'  },
  { path: '/work',                          lastModified: '2026-09-10', priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/services',                      lastModified: '2026-09-10', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/brand-identity',       lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/logo-design',          lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/packaging-design',     lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/graphic-design',       lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/brewery-branding',     lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about',                         lastModified: '2026-07-27', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about/faq',                     lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about/press-awards',            lastModified: '2026-09-10', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact',                       lastModified: '2026-09-10', priority: 0.8, changeFrequency: 'monthly' },

  { path: '/work/monadnock-berries',        lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/elm-city-brewing',         lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/granite-roots-brewing',    lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/kapiloff-insurance',       lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/basic-balance-acupuncture',lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/nova-dermatology',         lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/hendricks-lutherie',       lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/cheshire-childrens-museum',lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/keene-pride-festival',     lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/print-materials',          lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/sequoia-sex-toys',         lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/badger-balm',              lastModified: '2026-07-23', priority: 0.8, changeFrequency: 'yearly'  },
  { path: '/work/case-studies',             lastModified: '2026-07-23', priority: 0.7, changeFrequency: 'yearly'  },
  { path: '/work/books',                    lastModified: '2026-07-23', priority: 0.7, changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, priority, changeFrequency }) => ({
    url: path === '/' ? BASE : `${BASE}${path}`,
    lastModified: new Date(`${lastModified}T12:00:00Z`),
    changeFrequency,
    priority,
  }))
}
