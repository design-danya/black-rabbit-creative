'use client'

import { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'

/**
 * Disclosure list.
 *
 * The panel stays mounted at all times and collapses with a CSS grid-row
 * transition. Conditionally rendering it — the obvious way to write this —
 * keeps the answers out of the served HTML entirely, which is how the FAQ page
 * ended up publishing 41 questions and no answers. Shared so that fix can't
 * quietly regress the next time one of these is built.
 */

export type AccordionEntry = {
  q: string
  a: string
  /**
   * Optional "read more" link rendered under the answer. Kept out of `a` so the
   * FAQPage structured data stays clean prose — schema.org wants answer text,
   * not markup.
   */
  link?: { href: string; label: string }
}

export function Accordion({ items, idPrefix }: { items: AccordionEntry[]; idPrefix: string }) {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = !!open[i]
        return (
          <div key={item.q} className="border-t border-white/8">
            <button
              type="button"
              onClick={() => setOpen((p) => ({ ...p, [i]: !p[i] }))}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${i}`}
              className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group"
            >
              <span
                className={`text-[15px] md:text-base font-semibold leading-snug transition-colors duration-300 ${
                  isOpen ? 'text-[#7c5fe6]' : 'text-white/80 group-hover:text-white'
                }`}
              >
                {item.q}
              </span>
              <span className="shrink-0 mt-0.5">
                {isOpen ? (
                  <Minus size={16} className="text-[#7c5fe6]" />
                ) : (
                  <Plus size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
                )}
              </span>
            </button>
            <div
              id={`${idPrefix}-${i}`}
              role="region"
              className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pr-4 md:pr-12">
                  <p className="text-gray-400 text-sm leading-[1.9]">{item.a}</p>
                  {item.link ? (
                    <a
                      href={item.link.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#7c5fe6] hover:text-white transition-colors duration-300"
                    >
                      {item.link.label}
                      <ArrowRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="border-t border-white/8" />
    </div>
  )
}
