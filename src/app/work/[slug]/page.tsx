import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWorkItemBySlug } from '../../../lib/work'
import { WorkDetail } from '../WorkDetail'

// Static case-study folders under /work take precedence over this dynamic
// segment; only admin-added slugs reach it. Cached with a 60s revalidate so
// detail pages serve from cache (fast TTFB) and pick up admin edits within ~1m.
export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = await getWorkItemBySlug(slug)
  if (!data) return { title: 'Work' }
  const { item } = data
  return {
    title: `${item.title} — ${item.category}`,
    description: item.description.slice(0, 155) || `${item.title} by Black Rabbit Creative.`,
    alternates: { canonical: `/work/${item.slug}` },
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const data = await getWorkItemBySlug(slug)
  if (!data) notFound()
  return <WorkDetail item={data.item} images={data.images} />
}
