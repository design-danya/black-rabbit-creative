'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { Plus, Minus, ArrowUpRight } from 'lucide-react'

/**
 * "When do you actually need branding?" — an accordion of the common triggers,
 * each with the tell-tale signs and what we'd recommend. The scenarios are
 * standard practice; every line is written in Black Rabbit's own voice.
 */
type Scenario = {
  title: string
  hint: string
  signs: string[]
  need: string
  href: string
}

const SCENARIOS: Scenario[] = [
  {
    title: "You're starting from scratch",
    hint: 'New company, new product, nothing built yet',
    signs: [
      'You need a name and a logo, honestly, yesterday.',
      'You’re raising money and the pitch has to look the part.',
      'There’s a great idea here but nothing to make it feel real yet.',
    ],
    need: 'A full brand identity',
    href: '/services/brand-identity',
  },
  {
    title: 'Your name no longer fits',
    hint: 'Outgrown it, or it’s working against you',
    signs: [
      'The name describes who you were, not who you are now.',
      'It gets mispronounced, misspelled, or misread.',
      'You have to explain it every time you say it.',
    ],
    need: 'Naming + identity',
    href: '/services/brand-identity',
  },
  {
    title: "You've outgrown your look",
    hint: 'The brand feels a step behind the business',
    signs: [
      'Your competitors look sharper, and you can feel it.',
      'You wince a little when you hand over a business card.',
      'The logo works, but the rest of the system never caught up.',
    ],
    need: 'A rebrand or refresh',
    href: '/services/brand-identity',
  },
  {
    title: 'Nothing matches',
    hint: 'Every touchpoint tells a slightly different story',
    signs: [
      'Your website, deck, and packaging look like three companies.',
      'Everyone reaches for their own fonts and colors.',
      'There’s no single source of truth for how the brand looks.',
    ],
    need: 'A brand system + guidelines',
    href: '/services/brand-identity',
  },
  {
    title: "You're stepping onto a bigger stage",
    hint: 'New market, new audience, higher stakes',
    signs: [
      'You’re moving upmarket and the brand needs to keep up.',
      'You’re entering a new region or category.',
      'The work is great; the packaging on the shelf doesn’t say so yet.',
    ],
    need: 'Repositioning + packaging',
    href: '/services/packaging-design',
  },
]

export function SignsItsTime() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
          Not sure if you need this?
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] leading-[1.02] mb-5">
          Signs it&apos;s time
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Most branding projects start with a nagging feeling, not a brief. See
          which one sounds like you — and what we&apos;d reach for.
        </p>

        <div className="border-t border-white/10">
          {SCENARIOS.map((s, i) => {
            const isOpen = open === i
            return (
              <div key={s.title} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className="flex flex-col gap-1">
                    <span className="text-lg md:text-2xl font-black uppercase tracking-[0.04em]">
                      {s.title}
                    </span>
                    <span className="text-xs md:text-sm text-white/45 tracking-[0.02em]">
                      {s.hint}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 flex items-center justify-center border transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#5b3fd6] border-[#5b3fd6] text-white'
                        : 'border-white/20 text-white/60 group-hover:border-white/50'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-8">
                          <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                            Sounds like you if
                          </span>
                          <ul className="flex flex-col gap-3">
                            {s.signs.map((sign) => (
                              <li key={sign} className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0 bg-[#5b3fd6]" />
                                {sign}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-6">
                          <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
                            What you&apos;d need
                          </span>
                          <Link
                            href={s.href}
                            className="group inline-flex items-center gap-2 text-[#a894f0] hover:text-white text-sm md:text-base font-bold uppercase tracking-[0.04em] transition-colors"
                          >
                            {s.need}
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
