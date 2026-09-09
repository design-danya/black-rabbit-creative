'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import {
  illustrations,
  categories,
  type Illustration,
  type IllustrationCategory,
} from '../data/illustrations'

/**
 * Filterable illustration archive.
 *
 * Masonry via CSS columns so mixed aspect ratios pack without cropping.
 * next/image handles lazy loading and serves AVIF/WebP derivatives; intrinsic
 * dimensions come from the data file so the grid reserves space and doesn't
 * shift as images arrive.
 *
 * The lightbox is keyboard-driven (arrows, Escape), locks body scroll while
 * open, and is portalled to document.body so it clears the fixed navbar
 * (z-100) and the Onlyness popup (z-120) regardless of what stacking context
 * the gallery happens to sit in. Motion is scoped to opacity/transform only, and the grid re-flows
 * without animating position — animating masonry columns fights the browser.
 */

type Filter = 'all' | IllustrationCategory

/** Most pieces live in /assets/illustrations; a few reuse an existing asset. */
const srcFor = (i: Illustration) => i.src ?? '/assets/illustrations/' + i.slug + '.webp'

export function IllustrationGallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: illustrations.length }
    for (const i of illustrations) c[i.category] = (c[i.category] ?? 0) + 1
    return c
  }, [])

  const visible = useMemo(
    () => (filter === 'all' ? illustrations : illustrations.filter((i) => i.category === filter)),
    [filter],
  )

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (d: number) =>
      setOpenIndex((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [openIndex, close, step])

  // Changing filter invalidates the index the lightbox is pointing at.
  useEffect(() => setOpenIndex(null), [filter])

  const active: Illustration | null = openIndex === null ? null : visible[openIndex]
  const label = (id: Filter) =>
    id === 'all' ? 'All' : (categories.find((c) => c.id === id)?.label ?? id)

  return (
    <div>
      {/* ── Filters ── */}
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter illustrations">
        {(['all', ...categories.map((c) => c.id)] as Filter[]).map((id) => {
          const on = filter === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={on}
              className={[
                'border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-200',
                on
                  ? 'border-[#5b3fd6] bg-[#5b3fd6] text-white'
                  : 'border-white/15 text-white/55 hover:border-white/40 hover:text-white',
              ].join(' ')}
            >
              {label(id)}
              <span className={on ? 'ml-2 text-white/70' : 'ml-2 text-white/30'}>{counts[id] ?? 0}</span>
            </button>
          )
        })}
      </div>

      {/* ── Masonry grid ── */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
        {visible.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={'View ' + item.title}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden border border-white/10 bg-[#0c0c0c] transition-colors duration-300 hover:border-[#5b3fd6]/70 focus:outline-none focus-visible:border-[#5b3fd6]"
          >
            <Image
              src={srcFor(item)}
              alt={item.alt}
              width={item.w}
              height={item.h}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 pt-8 text-left text-[10px] uppercase tracking-[0.18em] text-white transition-transform duration-300 group-hover:translate-y-0">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center text-sm text-white/40">Nothing in this category yet.</p>
      )}

      {/* ── Lightbox (portalled to body) ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[130] flex flex-col bg-black/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <div className="flex shrink-0 items-center justify-between px-5 py-4 md:px-8">
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                {openIndex! + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="p-2 text-white/60 transition-colors hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="flex min-h-0 flex-1 items-stretch justify-center gap-2 px-2 md:gap-6 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous illustration"
                className="my-auto shrink-0 self-center border border-white/15 p-2.5 text-white/60 transition-colors hover:border-white/50 hover:text-white md:p-3"
              >
                <ArrowLeft size={18} />
              </button>

              <motion.div
                key={active.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="relative min-h-0 min-w-0 flex-1"
              >
                <Image
                  src={srcFor(active)}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority
                  className="object-contain"
                />
              </motion.div>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next illustration"
                className="my-auto shrink-0 self-center border border-white/15 p-2.5 text-white/60 transition-colors hover:border-white/50 hover:text-white md:p-3"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="shrink-0 px-5 py-5 text-center md:px-8" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
                {active.title}
              </h3>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.24em] text-[#7c5fe6]">
                {label(active.category)}
              </p>
            </div>
          </motion.div>
        )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  )
}
