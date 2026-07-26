'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Interactive explainer of the nine logo families. Copy is written in Black
 * Rabbit's own voice — the categories themselves are standard design taxonomy,
 * the example brands are factual references. Not reproduced from any article.
 */
type LogoType = {
  key: string
  name: string
  tagline: string
  what: string
  bestFor: string
  examples: string
}

const TYPES: LogoType[] = [
  {
    key: 'wordmark',
    name: 'Wordmark',
    tagline: 'The name, drawn with intent.',
    what: 'The whole logo is the name itself, set in type shaped to carry the brand. No symbol to lean on — every ounce of character lives in the letterforms.',
    bestFor: 'Short, distinctive names that deserve to be said out loud.',
    examples: 'Google · Coca-Cola',
  },
  {
    key: 'lettermark',
    name: 'Lettermark',
    tagline: 'Initials doing the heavy lifting.',
    what: 'A monogram built from a few letters — usually the initials of a longer name. Compact, confident, and easy to stamp anywhere.',
    bestFor: 'Long or unwieldy names, and brands after a quiet, high-end feel.',
    examples: 'IBM · HBO · LV',
  },
  {
    key: 'pictorial',
    name: 'Pictorial mark',
    tagline: 'One icon, instantly read.',
    what: 'A recognizable picture of a real thing, distilled to its cleanest form. It only works once people have learned to connect the image to you — so it rewards consistency.',
    bestFor: 'Established brands with one clear idea to own.',
    examples: 'Apple · the Twitter bird',
  },
  {
    key: 'abstract',
    name: 'Abstract mark',
    tagline: 'A shape that means what you make it mean.',
    what: 'A symbol that points to nothing literal, so it can hold a whole idea — motion, connection, growth. Freeing to design, harder to make stick.',
    bestFor: 'Brands doing many things at once, or building meaning from scratch.',
    examples: 'Nike swoosh · Mastercard',
  },
  {
    key: 'combination',
    name: 'Combination mark',
    tagline: 'Name and symbol, side by side.',
    what: 'A symbol paired with the name so each teaches the other. Over time the mark can stand alone — but early on, nothing is left to guess.',
    bestFor: 'Newer brands building recognition from zero. Easy to trademark.',
    examples: 'Adidas · Amazon',
  },
  {
    key: 'emblem',
    name: 'Emblem',
    tagline: 'Name and symbol, fused.',
    what: 'The name lives inside the mark and can’t be pulled out. It reads as a crest or a seal — weighty, traditional, built to last.',
    bestFor: 'Heritage, craft, and institutions with a reputation to hold.',
    examples: 'Harley-Davidson · Harvard',
  },
  {
    key: 'mascot',
    name: 'Mascot',
    tagline: 'A face for the brand.',
    what: 'A character that gives the brand a personality to talk to. Warm and human — it can carry a whole campaign, not just a business card.',
    bestFor: 'Family, food, and anyone warming up a dry or complex offering.',
    examples: 'Michelin Man · Pringles',
  },
  {
    key: 'dynamic',
    name: 'Dynamic mark',
    tagline: 'One identity, many forms.',
    what: 'A mark built to move and adapt — shifting color, shape, or content by context while staying unmistakably itself. A system, not a single lockup.',
    bestFor: 'Creative brands and anything with sub-brands or a lot of surfaces.',
    examples: 'MTV · Nickelodeon',
  },
  {
    key: 'letterform',
    name: 'Letterform',
    tagline: 'A single letter, made to stand alone.',
    what: 'The brand distilled to one initial, drawn with enough character to work on its own. Endlessly scalable — down to a favicon.',
    bestFor: 'Long names that need a small, sharp mark to carry them.',
    examples: 'Pinterest · WordPress',
  },
]

export function LogoTypes() {
  const [active, setActive] = useState(0)
  const current = TYPES[active]

  return (
    <section className="bg-[#060606] text-white px-6 md:px-14 lg:px-20 py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
          Nine ways to build a mark
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] leading-[1.02] mb-4 max-w-3xl">
          Not every logo works the same way
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12">
          A logo is a choice between a handful of forms, each with its own
          strengths. Tap through the families — part of our job is knowing
          which one your brand actually needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Selector */}
          <div
            role="tablist"
            aria-label="Logo types"
            className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-px bg-white/5"
          >
            {TYPES.map((t, i) => {
              const selected = i === active
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`group relative text-left px-5 py-4 transition-colors duration-300 ${
                    selected
                      ? 'bg-[#5b3fd6] text-white'
                      : 'bg-white/[0.03] text-white/60 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <span className="text-[9px] font-mono tracking-[0.3em] opacity-60 mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.06em]">
                    {t.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="lg:col-span-7 border border-white/10 rounded-sm bg-white/[0.02] p-8 md:p-12 min-h-[320px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col h-full"
              >
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-4">
                  {current.examples}
                </span>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-[0.05em] mb-2">
                  {current.name}
                </h3>
                <p className="text-[#a894f0] text-lg md:text-xl font-light italic mb-8">
                  {current.tagline}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xl">
                  {current.what}
                </p>
                <div className="mt-auto pt-6 border-t border-white/8">
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                    Best for
                  </span>
                  <p className="text-white text-sm md:text-base font-medium max-w-xl">
                    {current.bestFor}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
