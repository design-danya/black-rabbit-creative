'use client'
import { motion } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Accordion } from "../../components/Accordion";
import { faqData } from "../../data/faq";

export default function FAQ() {
  useSEO({
    title: "FAQ | Black Rabbit Creative — Branding & Design Studio Portsmouth NH",
    description:
      "Frequently asked questions about Black Rabbit Creative's branding, packaging design, logo design, creative direction, pricing, and project process. A studio in Portsmouth, NH.",
    canonical: "/about/faq",
  });

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
              <Accordion items={category.items} idPrefix={`faq-${catIdx}`} />
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