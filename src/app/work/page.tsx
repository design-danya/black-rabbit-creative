import type { Metadata } from 'next'
import Portfolio, { type DbProject } from '../pages/Portfolio'
import { getPublishedWorkItems, workAssetUrl } from '../../lib/work'

export const metadata: Metadata = {
  title: 'Branding & Logo Design Portfolio',
  description: "Branding and logo design portfolio from Black Rabbit Creative — brand identity, packaging, and graphic design case studies for businesses across New England.",
  alternates: {
    canonical: '/work',
  },
}

// Always reflect the latest admin edits.
export const dynamic = 'force-dynamic'

export default async function WorkPage() {
  const items = await getPublishedWorkItems()
  const dbItems: DbProject[] = items.map((w) => ({
    id: w.id,
    title: w.title,
    category: w.category,
    desc: w.description,
    image: workAssetUrl(w.thumbnail_path),
    href: `/work/${w.slug}`,
    year: w.year,
    tag: w.badge,
  }))
  return <Portfolio dbItems={dbItems} />
}
