'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Interactive bar chart of the State of Brand 2023 survey.
 *
 * The data is Jacob Cass / JUST Creative's survey (250+ branding
 * professionals) — reported here as a cited fact, attributed below the chart.
 * Framing and copy are Black Rabbit's own.
 */
const DATA = [
  { label: 'Authenticity', value: 74.5, highlight: true },
  { label: 'Personalization', value: 58.8 },
  { label: 'Purpose-driven branding', value: 57.3 },
  { label: 'Sustainability & ethical branding', value: 56.5 },
  { label: 'Emotional branding', value: 49.4 },
  { label: 'Technology integration (AI)', value: 28.0 },
]

const MAX = 80 // axis ceiling, keeps bars off the right edge

export function StateOfBrandChart() {
  const [hover, setHover] = useState<number | null>(null)

  return (
    <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
          What the industry says
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] leading-[1.02] mb-5 max-w-3xl">
          Authenticity beats everything else
        </h2>
        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-12">
          Asked what matters most for the future of branding, professionals
          didn&apos;t pick trends or technology. They picked being real — by a
          wide margin. It&apos;s the whole reason we start with strategy, not
          decoration.
        </p>

        <div className="flex flex-col gap-5">
          {DATA.map((d, i) => {
            const isHot = d.highlight
            const active = hover === i
            return (
              <div
                key={d.label}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className={`text-xs md:text-sm uppercase tracking-[0.08em] transition-colors ${
                      isHot ? 'text-white font-bold' : 'text-white/60'
                    }`}
                  >
                    {d.label}
                  </span>
                  <span
                    className={`text-sm md:text-base font-black tabular-nums transition-colors ${
                      isHot ? 'text-[#7c5fe6]' : active ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {d.value}%
                  </span>
                </div>
                <div className="h-3 md:h-3.5 w-full bg-white/[0.06] rounded-sm overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(d.value / MAX) * 100}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-sm transition-colors duration-300 ${
                      isHot
                        ? 'bg-[#5b3fd6]'
                        : active
                        ? 'bg-white/50'
                        : 'bg-white/25'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* axis ticks */}
        <div className="flex justify-between mt-3 text-[10px] text-white/25 font-mono tabular-nums">
          {[0, 20, 40, 60, 80].map((t) => (
            <span key={t}>{t}%</span>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-white/35 leading-relaxed max-w-2xl">
          Source: State of Brand 2023, a survey of 250+ branding professionals by
          Jacob Cass / JUST Creative. Chart rebuilt by Black Rabbit Creative.
        </p>
      </div>
    </section>
  )
}
