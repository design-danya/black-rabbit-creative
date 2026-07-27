import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getWorkItemBySlug, workAssetUrl } from '../../../lib/work'

// Detail pages reflect the latest admin edits. Static case-study folders under
// /work take precedence over this dynamic segment; only admin-added slugs reach it.
export const dynamic = 'force-dynamic'

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
  const { item, images } = data
  const hero = item.thumbnail_path ? workAssetUrl(item.thumbnail_path) : null

  return (
    <div className="bg-[#060606] text-white min-h-screen">
      <section className="px-6 md:px-16 lg:px-24 pt-28 md:pt-36 pb-12 max-w-6xl mx-auto">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All work
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6]">
            {item.category}
          </span>
          {item.year && (
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
              {item.year}
            </span>
          )}
          {item.badge && (
            <span className="text-[10px] uppercase tracking-[0.2em] bg-[#5b3fd6] text-white px-2 py-1">
              {item.badge}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.06em] leading-[0.95] mb-8 max-w-4xl">
          {item.title}
        </h1>

        {item.description && (
          <div className="max-w-2xl text-gray-400 text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
            {item.description}
          </div>
        )}
      </section>

      {hero && (
        <section className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto mb-6">
          <div className="relative w-full aspect-[16/10] bg-white/[0.03] overflow-hidden">
            <Image
              src={hero}
              alt={`${item.title} — ${item.category} by Black Rabbit Creative`}
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img) => (
            <figure key={img.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-[4/3] bg-white/[0.03] overflow-hidden">
                <Image
                  src={workAssetUrl(img.storage_path)}
                  alt={img.caption || `${item.title} — detail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              {img.caption && (
                <figcaption className="text-xs text-white/40 tracking-[0.02em]">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </section>
      )}

      <section className="px-6 md:px-16 lg:px-24 max-w-6xl mx-auto pb-24 border-t border-white/5 pt-12">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-[#5b3fd6] hover:bg-[#4a32b8] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
        >
          Start a project like this
        </Link>
      </section>
    </div>
  )
}
