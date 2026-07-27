'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Interactive five-step branding process. The stages are standard practice;
 * the descriptions are Black Rabbit's own account of how we work.
 */
const STEPS = [
  {
    n: '01',
    title: 'Research',
    blurb:
      'We start by looking, not designing. Your market, your customers, your competitors — and the honest gap between how you see the brand and how the world does.',
  },
  {
    n: '02',
    title: 'Strategy',
    blurb:
      "We decide what the brand stands for and, just as importantly, what it won't chase. Positioning, voice, and the one idea everything else hangs off.",
  },
  {
    n: '03',
    title: 'Identity',
    blurb:
      'Only now do we design. Logo, type, color, and the visual system — built to carry the strategy, not just to look good in isolation.',
  },
  {
    n: '04',
    title: 'Touchpoints',
    blurb:
      'A brand lives in the places people meet it. We extend the system to packaging, signage, social, and every surface that matters to you.',
  },
  {
    n: '05',
    title: 'Handover',
    blurb:
      "You leave with guidelines and production-ready files, so the brand stays consistent long after we're done — whoever picks it up next.",
  },
]

export function BrandProcess() {
  const [active, setActive] = useState(0)
  const current = STEPS[active]

  return (
    <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-[#060606]/10">
      <div className="max-w-6xl mx-auto">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
          How we work
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] leading-[1.02] mb-12 max-w-3xl">
          Branding is a deliberate process
        </h2>

        {/* Step rail */}
        <div className="grid grid-cols-5 gap-px bg-[#060606]/10 mb-10">
          {STEPS.map((s, i) => {
            const on = i === active
            return (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                aria-current={on}
                className={`relative flex flex-col items-start gap-2 px-3 py-4 md:px-5 md:py-6 text-left transition-colors duration-300 ${
                  on ? 'bg-[#060606] text-white' : 'bg-white text-[#060606]/50 hover:text-[#060606]'
                }`}
              >
                <span
                  className={`text-[10px] font-mono tracking-[0.3em] ${
                    on ? 'text-[#a894f0]' : 'text-[#7c5fe6]'
                  }`}
                >
                  {s.n}
                </span>
                <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.06em] leading-tight">
                  {s.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.n}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
          >
            <div className="md:col-span-3">
              <span className="text-6xl md:text-7xl font-black text-[#060606]/10 leading-none">
                {current.n}
              </span>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.05em] mb-4">
                {current.title}
              </h3>
              <p className="text-[#060606]/70 text-base md:text-lg leading-relaxed max-w-2xl">
                {current.blurb}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
