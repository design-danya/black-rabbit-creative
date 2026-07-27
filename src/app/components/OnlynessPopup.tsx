'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight } from 'lucide-react'

const TEST_URL = 'https://www.blackrabbit-brandtest.com/'
const STORAGE_KEY = 'br_onlyness_popup_dismissed'

/**
 * A polite, dismissible corner popup promoting the Onlyness Test. Replaces the
 * old Constant Contact newsletter pop-up. Shows once per visitor a few seconds
 * after landing; a dismiss or a click is remembered in localStorage so it
 * doesn't nag. Non-blocking (no backdrop) so it can never break page layout.
 */
export function OnlynessPopup() {
  const [open, setOpen] = useState(false)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      /* private mode — just show it */
    }
    if (dismissed) return
    const t = setTimeout(() => setOpen(true), 4500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    ctaRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  function remember() {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  function dismiss() {
    setOpen(false)
    remember()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="The Onlyness Test"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-[120] w-[calc(100%-2rem)] max-w-[360px] bg-[#060606] text-white border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>

          <div className="p-6 md:p-7">
            <span className="block text-[10px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-4">
              Free positioning exercise
            </span>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.04em] leading-[1.05] mb-3">
              What can only <span className="text-[#7c5fe6]">you</span> say?
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Six quick questions surface your brand gap — the one thing a
              competitor can&apos;t claim. Take the Onlyness Test and find it.
            </p>
            <a
              ref={ctaRef}
              href={TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={remember}
              className="group inline-flex items-center gap-2 bg-[#5b3fd6] hover:bg-[#4a32b8] px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold text-white transition-colors duration-300"
            >
              Take the test
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
