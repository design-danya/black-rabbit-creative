'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Interactive "brand touchpoints" graphic. A brand isn't just a logo — it's
 * every place a person meets it. Hover/focus a touchpoint to light it up.
 * The idea is standard branding practice; the wording and grouping are ours.
 */
const GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'Seen first',
    items: ['Logo', 'Color', 'Typography', 'Packaging', 'Signage'],
  },
  {
    title: 'Everyday',
    items: ['Website', 'Social', 'Email', 'Business cards', 'Presentations'],
  },
  {
    title: 'In the world',
    items: ['Products', 'Vehicles', 'Merch', 'Trade shows', 'Environments'],
  },
  {
    title: 'Behind the scenes',
    items: ['Voice & tone', 'Proposals', 'Invoices', 'Hiring', 'Culture'],
  },
]

export function TouchpointsWheel() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
              Where a brand lives
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] leading-[1.02] mb-5">
              A brand is more than a logo
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              Every one of these is a place someone forms an opinion of you.
              A brand identity is the system that keeps them all saying the
              same thing. Hover to see how many there are.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {GROUPS.map((g) => (
              <div key={g.title} className="bg-[#060606] p-6 md:p-8">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
                  {g.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => {
                    const on = active === item
                    return (
                      <motion.button
                        key={item}
                        onMouseEnter={() => setActive(item)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(item)}
                        onBlur={() => setActive(null)}
                        animate={{ scale: on ? 1.04 : 1 }}
                        transition={{ duration: 0.2 }}
                        className={`px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.06em] border transition-colors duration-200 ${
                          on
                            ? 'bg-[#5b3fd6] border-[#5b3fd6] text-white'
                            : 'bg-white/[0.03] border-white/10 text-white/70 hover:text-white'
                        }`}
                      >
                        {item}
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
