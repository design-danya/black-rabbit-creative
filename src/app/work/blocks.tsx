import Image from 'next/image'

/**
 * The block kit the AI composes portfolio pages from. Everything is safe: text
 * is rendered as text (never HTML/JSX), images are referenced only by index
 * into the item's own uploaded images. Unknown blocks or bad indices are dropped.
 */
export type LayoutImage = { url: string; caption: string }

export type Block =
  | { type: 'statement'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'image'; image: number }
  | { type: 'imagePair'; images: number[] }
  | { type: 'textImage'; text: string; image: number; side?: 'left' | 'right' }
  | { type: 'gallery'; images: number[] }
  | { type: 'stat'; value: string; label: string }

const TYPES = new Set(['statement', 'paragraph', 'quote', 'image', 'imagePair', 'textImage', 'gallery', 'stat'])

/** Coerce arbitrary JSON (e.g. from the AI) into a safe Block[]. */
export function sanitizeLayout(raw: unknown, imageCount: number): Block[] {
  const arr = Array.isArray(raw) ? raw : Array.isArray((raw as { blocks?: unknown[] })?.blocks) ? (raw as { blocks: unknown[] }).blocks : []
  const validIdx = (n: unknown) => typeof n === 'number' && Number.isInteger(n) && n >= 0 && n < imageCount
  const str = (s: unknown) => (typeof s === 'string' ? s : '')
  const out: Block[] = []
  for (const b of arr) {
    const t = (b as { type?: string })?.type
    if (!t || !TYPES.has(t)) continue
    const o = b as Record<string, unknown>
    switch (t) {
      case 'statement': if (str(o.text)) out.push({ type: 'statement', text: str(o.text) }); break
      case 'paragraph': if (str(o.text)) out.push({ type: 'paragraph', text: str(o.text) }); break
      case 'quote': if (str(o.text)) out.push({ type: 'quote', text: str(o.text), attribution: str(o.attribution) || undefined }); break
      case 'image': if (validIdx(o.image)) out.push({ type: 'image', image: o.image as number }); break
      case 'imagePair': {
        const imgs = Array.isArray(o.images) ? o.images.filter(validIdx).slice(0, 2) : []
        if (imgs.length === 2) out.push({ type: 'imagePair', images: imgs as number[] })
        break
      }
      case 'textImage': if (str(o.text) && validIdx(o.image)) out.push({ type: 'textImage', text: str(o.text), image: o.image as number, side: o.side === 'right' ? 'right' : 'left' }); break
      case 'gallery': {
        const imgs = Array.isArray(o.images) ? o.images.filter(validIdx) : []
        if (imgs.length) out.push({ type: 'gallery', images: imgs as number[] })
        break
      }
      case 'stat': if (str(o.value) && str(o.label)) out.push({ type: 'stat', value: str(o.value), label: str(o.label) }); break
    }
  }
  return out
}

function Frame({ url, alt, ratio = 'aspect-[16/10]' }: { url: string; alt: string; ratio?: string }) {
  return (
    <div className={`relative w-full ${ratio} bg-white/[0.03] overflow-hidden`}>
      <Image src={url} alt={alt} fill sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" />
    </div>
  )
}

export function BlockRenderer({ blocks, images, title }: { blocks: Block[]; images: LayoutImage[]; title: string }) {
  const img = (i: number) => images[i]
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {blocks.map((b, k) => {
        switch (b.type) {
          case 'statement':
            return (
              <h2 key={k} className="max-w-4xl mx-auto text-3xl md:text-5xl font-black uppercase tracking-[0.05em] leading-[1.05]">
                {b.text}
              </h2>
            )
          case 'paragraph':
            return (
              <p key={k} className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
                {b.text}
              </p>
            )
          case 'quote':
            return (
              <figure key={k} className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl md:text-4xl font-light italic text-white leading-snug">“{b.text}”</blockquote>
                {b.attribution && <figcaption className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#7c5fe6]">{b.attribution}</figcaption>}
              </figure>
            )
          case 'image':
            return <div key={k} className="max-w-6xl mx-auto w-full"><Frame url={img(b.image).url} alt={img(b.image).caption || title} /></div>
          case 'imagePair':
            return (
              <div key={k} className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {b.images.map((i) => <Frame key={i} url={img(i).url} alt={img(i).caption || title} ratio="aspect-[4/5]" />)}
              </div>
            )
          case 'textImage':
            return (
              <div key={k} className={`max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${b.side === 'right' ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed whitespace-pre-line">{b.text}</p>
                <Frame url={img(b.image).url} alt={img(b.image).caption || title} ratio="aspect-[4/3]" />
              </div>
            )
          case 'gallery':
            return (
              <div key={k} className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {b.images.map((i) => <Frame key={i} url={img(i).url} alt={img(i).caption || title} ratio="aspect-square" />)}
              </div>
            )
          case 'stat':
            return (
              <div key={k} className="max-w-3xl mx-auto text-center">
                <div className="text-5xl md:text-7xl font-black text-[#7c5fe6] leading-none">{b.value}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-white/50">{b.label}</div>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
