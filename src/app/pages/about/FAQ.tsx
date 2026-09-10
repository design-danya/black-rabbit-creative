'use client'
import { motion } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { ArrowRight, Plus, Minus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { faqData, type FAQItem } from "../../data/faq";



/**
 * The answer stays mounted at all times and collapses with a CSS grid-row
 * transition rather than being conditionally rendered. Unmounting it kept all
 * 42 answers out of the served HTML, so crawlers and AI assistants saw the
 * questions and nothing else — the answers are the part worth citing.
 */
function AccordionItem({
  item,
  isOpen,
  toggle,
  id,
}: {
  item: FAQItem
  isOpen: boolean
  toggle: () => void
  id: string
}) {
  return (
    <div className="border-t border-white/8">
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left group"
      >
        <span className={`text-[15px] md:text-base font-semibold leading-snug transition-colors duration-300 ${isOpen ? "text-[#7c5fe6]" : "text-white/80 group-hover:text-white"}`}>
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
        id={`faq-answer-${id}`}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 text-sm leading-[1.9] pb-7 pr-4 md:pr-12">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}


export default function FAQ() {
  useSEO({
    title: "FAQ | Black Rabbit Creative — Branding & Design Studio Portsmouth NH",
    description:
      "Frequently asked questions about Black Rabbit Creative's branding, packaging design, logo design, creative direction, pricing, and project process. A studio in Portsmouth, NH.",
    canonical: "/about/faq",
  });

  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#060606] text-white min-h-screen">
      {/* ─── HERO ─── */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 pb-16 md:pb-24 max-w-7xl mx-auto">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#7c5fe6] transition-colors mb-10"
        >
          <ArrowLeft size={12} /> About
        </Link>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="block text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-10"
        >
          Frequently Asked Questions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          Got <em className="not-italic text-[#7c5fe6]">questions?</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-gray-400 leading-[1.9] max-w-2xl mt-8"
        >
          Everything you need to know about working with Black Rabbit Creative — from our process and pricing to getting started on your next project.
        </motion.p>
      </section>

      {/* ─── FAQ CATEGORIES ─── */}
      {faqData.map((category, catIdx) => (
        <section
          key={category.title}
          className={`px-6 md:px-16 lg:px-24 py-16 md:py-20 ${
            catIdx % 2 === 0 ? "bg-[#060606]" : "bg-[#0a0a0a]"
          } border-t border-white/5`}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="font-black uppercase tracking-[0.07em] text-lg md:text-xl mb-2"
            >
              {category.title}
            </motion.h2>

            <div>
              {category.items.map((item, i) => {
                const key = `${catIdx}-${i}`;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                  >
                    <AccordionItem
                      item={item}
                      id={key}
                      isOpen={!!openItems[key]}
                      toggle={() => toggleItem(key)}
                    />
                  </motion.div>
                );
              })}
              <div className="border-t border-white/8" />
            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Still have <em className="not-italic text-[#7c5fe6]">questions?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 leading-[1.9] mb-10 max-w-lg mx-auto"
          >
            Reach out directly — we're happy to answer anything about our services, process, or how we can help your brand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-[#5b3fd6] text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-[#4a32b0] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get in Touch <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}