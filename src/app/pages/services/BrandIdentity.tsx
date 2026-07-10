'use client'
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { ArrowRight, ArrowUpRight, Check, ArrowLeft, Clock, DollarSign, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
const sketchbookImg = "/assets/64f24a4d091804c95a77a759ece275d2b4458b22.png";
const rabbitImg = "/assets/eed29b13bea1a52313221c289bafae04132dc381.png";
const senseImg = "/assets/eb19e6f509c3380dcf33a87840d5d7aad8341860.png";
const lobsterMenuImg = "/assets/03f18bfe8e04d5774abf120d1f3fad955b9c299e.png";
const lobsterHoodieImg = "/assets/3600427455a05045405b90350f411e3023b4f419.png";

const packages = [
  {
    id: "comprehensive",
    label: "Comprehensive Branding",
    tagline: "Deep dive into strategy + design for businesses ready to stand out",
    timeline: "8–12 weeks",
    investment: "Custom pricing",
    recommended: true,
    process: [
      {
        num: "1",
        title: "Research & Strategy",
        desc: "Discovery session, competitor research, brand direction",
      },
      {
        num: "2",
        title: "Mood Boards & Concept",
        desc: "Visual exploration and creative direction",
      },
      {
        num: "3",
        title: "Design & Logo Suite",
        desc: "Full logo system, illustrations, color palette",
      },
      {
        num: "4",
        title: "Templates & Guidelines",
        desc: "Templates, brand guidelines, packaged files",
      },
    ],
    deliverables: [
      "In-depth brand strategy + presentation",
      "Complete logo suite (primary, secondary, submarks)",
      "Custom illustrations or patterns",
      "Font pairings + color palette",
      "Branded templates",
      "Comprehensive brand guidelines",
    ],
    example: {
      label: "See Elm City Brewing",
      href: "/work/elm-city-brewing",
    },
  },
  {
    id: "streamlined",
    label: "Streamlined Branding",
    tagline: "Essential professional identity for businesses who need clarity fast",
    timeline: "6–8 weeks",
    investment: "Custom pricing",
    recommended: false,
    process: [
      {
        num: "1",
        title: "Mini Strategy & Mood Boards",
        desc: "Focused session to define goals and direction",
      },
      {
        num: "2",
        title: "Design & Logo Suite",
        desc: "Professional logo system, patterns, colors",
      },
      {
        num: "3",
        title: "Brand Guidelines & Wrap-Up",
        desc: "Concise guidelines + packaged files",
      },
    ],
    deliverables: [
      "Mini strategy presentation",
      "Cohesive logo suite",
      "Illustrations or patterns",
      "Font pairings + color palette",
      "Concise brand guidelines",
      "2 rounds of revisions at each stage",
    ],
    example: {
      label: "See Basic Balance Acupuncture",
      href: "/work/basic-balance-acupuncture",
    },
  },
];

const faqs = [
  {
    q: "What's the difference between Comprehensive and Streamlined?",
    a: "Comprehensive Branding is a full deep-dive — in-depth strategy, custom illustrations, and a complete brand system built over 8–12 weeks. Streamlined Branding is a focused, faster engagement ideal for businesses that need a professional identity quickly, delivered in 6–8 weeks.",
  },
  {
    q: "How long does each stage take?",
    a: "Each stage runs approximately 2 weeks. This gives us enough time to do the work properly and gives you enough time to review and respond thoughtfully at each milestone.",
  },
  {
    q: "How many revisions do I get?",
    a: "The Streamlined package includes 2 rounds of revisions at each stage. Comprehensive projects are handled collaboratively — we work together until the direction is right, within the agreed scope.",
  },
  {
    q: "How is pricing determined?",
    a: "Both packages are custom-priced based on the scope and complexity of your project. We don't believe in one-size-fits-all pricing — reach out and we'll put together a proposal tailored to your needs.",
  },
  {
    q: "What do I need to prepare before we start?",
    a: "Not much. A brief overview of your business, your goals, and any brands you admire is a great starting point. We guide you through everything in the Discovery or Mini Strategy session at the beginning of the project.",
  },
];

export default function BrandIdentity() {
  useSEO({
    title: "Brand Identity Design | Black Rabbit Creative, Portsmouth NH",
    description: "Full brand identity design services from Black Rabbit Creative in Portsmouth, New Hampshire — strategy, logo systems, typography, color palettes, and comprehensive brand guidelines for businesses across New England.",
    canonical: "/services/brand-identity",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Clean dark background */}
        <div className="absolute inset-0 z-0 bg-[#060606]" />

        {/* Rabbit mascot — right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.88, 0.88, 0], y: 0 }}
          transition={{
            opacity: {
              duration: 12,
              times: [0, 0.12, 0.88, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: { duration: 1.2, delay: 0.3, ease: "easeOut" },
          }}
          className="hidden md:block absolute top-1/2 -translate-y-1/2 md:right-[-160px] lg:right-[-180px] z-10 md:w-[800px] lg:w-[1000px] pointer-events-none select-none"
        >
          <div
            style={{
              maskImage: "radial-gradient(ellipse 70% 85% at 60% 50%, black 42%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 85% at 60% 50%, black 42%, transparent 75%)",
            }}
          >
            <img
              src={rabbitImg}
              alt="Black Rabbit Creative mascot — brand identity design studio, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Content: aligned to same grid as sections below */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 min-h-[90vh] flex flex-col justify-between pt-28 pb-20">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
            >
              <ArrowLeft size={12} /> All Services
            </Link>
          </motion.div>

          {/* Hero copy — left half */}
          <div className="lg:max-w-[44%]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8"
            >
              Service — 01
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="font-black uppercase tracking-[0.07em] leading-[0.9] mb-10"
              style={{ fontSize: "clamp(2.6rem, 6vw, 6.5rem)" }}
            >
              Brand{" "}
              <em className="not-italic text-[#5b3fd6]">Identity</em>
              <br />
              Design
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <p className="text-gray-400 text-base leading-relaxed">
                A complete brand system built from insight to execution — the
                strategic foundation and visual language your business needs to
                own its space.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project <ArrowRight size={14} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div />
        </div>
      </section>

      {/* ─── WHAT IT IS ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-16 md:py-[90px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              What It Is
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              More than a logo.
              <br />A complete{" "}
              <em className="not-italic text-[#5b3fd6]">system.</em>
            </h2>
            <p className="text-gray-500 leading-[1.9] mb-6">
              Your brand identity is the sum of every visual and verbal signal
              your business sends to the world. Done well, it works quietly and
              powerfully — building recognition, trust, and desirability over
              time.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              We create brand identities that are not just beautiful, but
              strategically engineered — designed to communicate the right
              things to the right people, and to endure.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7 overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* ── Lobster Lab editorial collage ── */}
            <div className="w-full flex flex-col gap-3">
              {/* Top row: large packaging shot + portrait hoodie side by side */}
              <div className="grid grid-cols-5 gap-3">
                {/* Packaging / menu spread — wide */}
                <motion.div
                  className="col-span-3 overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <img
                    src={lobsterMenuImg}
                    alt="Lobster Lab menu design — restaurant branding by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </motion.div>

                {/* Hoodie model — portrait */}
                <motion.div
                  className="col-span-2 overflow-hidden"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.32 }}
                >
                  <img
                    src={lobsterHoodieImg}
                    alt="Lobster Lab branded hoodie — merchandise design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="w-full h-full object-cover object-top"
                    style={{ aspectRatio: "2/3" }}
                  />
                </motion.div>
              </div>

              {/* Bottom row: brand identity mockup full width */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.44 }}
              >
                <img
                  src={senseImg}
                  alt="Lobster Lab complete brand identity system — designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/7" }}
                />
              </motion.div>

              {/* Label */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">
                  Lobster Lab 2025
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#060606]/30">
                  Brand Identity
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS / PACKAGES ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-16 md:py-[90px] border-t border-[#060606]/10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              The Process
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-2xl"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              How we{" "}
              <em className="not-italic text-[#5b3fd6]">get there.</em>
            </h2>
          </motion.div>

          {/* Two package columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {packages.map((pkg, pi) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.12, duration: 0.7 }}
                className="relative flex flex-col bg-[#060606] text-white p-8 md:p-12"
              >
                {/* Recommended badge */}
                {pkg.recommended && (
                  <span className="absolute top-8 right-8 md:top-12 md:right-12 text-[10px] uppercase tracking-[0.25em] text-[#5b3fd6] border border-[#5b3fd6]/40 px-3 py-1">
                    Most Popular
                  </span>
                )}

                {/* Package name */}
                <div className="mb-8 pr-0 md:pr-28">
                  <h3
                    className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-3"
                    style={{ fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}
                  >
                    {pkg.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Meta: timeline + investment */}
                <div className="flex gap-6 mb-10 pb-10 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[#5b3fd6] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5 text-gray-500">
                        Timeline
                      </p>
                      <p className="text-sm font-bold uppercase tracking-[0.04em] text-white">
                        {pkg.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={13} className="text-[#5b3fd6] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5 text-gray-500">
                        Investment
                      </p>
                      <p className="text-sm font-bold uppercase tracking-[0.04em] text-white">
                        {pkg.investment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-6 text-gray-500">
                    Process — 2 weeks each
                  </p>
                  <div className="space-y-0">
                    {pkg.process.map((step) => (
                      <div
                        key={step.num}
                        className="flex gap-5 py-5 border-t border-white/10"
                      >
                        <span className="text-[#5b3fd6] text-xs font-mono tracking-[0.2em] shrink-0 mt-0.5 w-4">
                          {step.num}
                        </span>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.06em] mb-1 text-white">
                            {step.title}
                          </p>
                          <p className="text-xs leading-relaxed text-gray-500">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-white/10" />
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-10 flex-grow">
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-6 text-gray-500">
                    What You Get
                  </p>
                  <ul className="space-y-3">
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={13} className="text-[#5b3fd6] shrink-0 mt-0.5" />
                        <span className="text-sm leading-snug text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example project link */}
                {pkg.example && (
                  <Link
                    href={pkg.example.href}
                    className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#5b3fd6] hover:text-white transition-colors duration-300 mb-4 mt-auto"
                  >
                    {pkg.example.label}
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                )}

                {/* CTA */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 uppercase tracking-[0.25em] text-xs font-bold transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Enquire About This Package <ArrowRight size={13} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-[4.32rem] md:py-[5.76rem] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              FAQ
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0]"
              style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
            >
              Common{" "}
              <em className="not-italic text-[#5b3fd6]">questions.</em>
            </h2>
          </motion.div>

          <div className="lg:col-span-8 space-y-0 border-t border-white/10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.07em] text-white group-hover:text-[#5b3fd6] transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-white/15 group-hover:border-[#5b3fd6]/50 transition-colors duration-300">
                    {openFaq === i
                      ? <Minus size={12} className="text-[#5b3fd6]" />
                      : <Plus size={12} className="text-white/50 group-hover:text-[#5b3fd6]" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm leading-[1.9] pb-7 pr-4 md:pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-black uppercase tracking-[0.07em]"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Other Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {[
              { num: "02", label: "Logo Design", to: "/services/logo-design" },
              { num: "03", label: "Packaging Design", to: "/services/packaging-design" },
              { num: "04", label: "Graphic Design & Illustration", to: "/services/graphic-design" },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col"
              >
                <Link
                  href={s.to}
                  className="group relative overflow-hidden flex flex-1 items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-10 min-h-[100px] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  <div className="relative z-10 flex items-center gap-5">
                    <span className="text-[11px] tracking-[0.25em] text-[#5b3fd6] font-mono">
                      {s.num}
                    </span>
                    <span className="text-base font-black uppercase tracking-[0.07em] text-white transition-colors duration-300">
                      {s.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 text-white/20 group-hover:text-[#5b3fd6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}