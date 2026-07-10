'use client'
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, X, ZoomIn } from "lucide-react";
const rabbitImg = "/assets/placeholder-portfolio.png";
const carrotRabbitImg = "/assets/placeholder-portfolio.png";
const canImg = "/assets/placeholder-portfolio.png";
const sequoiaFlatImg = "/assets/placeholder-portfolio.png";
const sequoiaPeachBoxImg = "/assets/placeholder-portfolio.png";
const wetBoxImg = "/assets/placeholder-portfolio.png";
const sequoiaStickerImg = "/assets/placeholder-portfolio.png";
const sequoiaCardsImg = "/assets/placeholder-portfolio.png";
const sequoiaEnvelopeImg = "/assets/placeholder-portfolio.png";
const peachBoxImg = "/assets/placeholder-portfolio.png";
const staySafeImg = "/assets/placeholder-portfolio.png";
import React from "react";

const focusPoints = [
  "Distinctive on shelf",
  "Aligned with your brand identity",
  "Clear and easy to navigate",
  "Print-ready and production-aware",
  "Built to scale across product lines",
];

const services = [
  "Product packaging design",
  "Label systems",
  "Can and bottle labels",
  "Retail box design",
  "Packaging line extensions",
  "Print production setup",
  "Prepress and file preparation",
];

const bestFit = [
  "Breweries and beverage brands",
  "Food and specialty product businesses",
  "Beauty and wellness products",
  "Boutique retail brands",
  "Businesses preparing for retail placement",
];

const workItems = [
  {
    src: sequoiaFlatImg,
    alt: "Sequoia Sex Toys – box flat design with floral pattern",
    name: "Sequoia Sex Toys",
    label: "Retail Box Design",
    bg: "bg-[#5a2d82]",
    award: false,
  },
  {
    src: sequoiaPeachBoxImg,
    alt: "Sequoia – For Your Peach gift box packaging",
    name: "Sequoia Sex Toys",
    label: "Gift Box Packaging",
    bg: "bg-[#3a2a52]",
    award: false,
  },
  {
    src: wetBoxImg,
    alt: "WET & Tame the Beast Personal Lubricant – full product box line",
    name: "Sequoia Sex Toys",
    label: "Product Box Design",
    bg: "bg-[#4a2060]",
    award: false,
  },
  {
    src: sequoiaStickerImg,
    alt: "Sequoia – branded box with sticker roll",
    name: "Sequoia Sex Toys",
    label: "Packaging & Stickers",
    bg: "bg-[#5a2d82]",
    award: false,
  },
  {
    src: sequoiaCardsImg,
    alt: "Sequoia – thank you card suite spread",
    name: "Sequoia Sex Toys",
    label: "Insert Card Suite",
    bg: "bg-[#3a2a52]",
    award: false,
  },
  {
    src: sequoiaEnvelopeImg,
    alt: "Sequoia – branded envelope with illustrated liner",
    name: "Sequoia Sex Toys",
    label: "Branded Envelope",
    bg: "bg-[#4a2060]",
    award: false,
  },
  {
    src: peachBoxImg,
    alt: "Sequoia – For Your Peach gift box open with tissue paper",
    name: "Sequoia Sex Toys",
    label: "Gift Box Mockup",
    bg: "bg-[#3a1f5a]",
    award: false,
  },
  {
    src: staySafeImg,
    alt: "Sequoia – Stay Safe condom wrapper duo",
    name: "Sequoia Sex Toys",
    label: "Condom Packaging",
    bg: "bg-[#3a1a5c]",
    award: false,
  },
];

export default function PackagingDesign() {
  useSEO({
    title: "Packaging Design | Craft Beer Labels & CPG Packaging | Black Rabbit Creative, Portsmouth NH",
    description: "Award-winning packaging design by Black Rabbit Creative in Portsmouth, New Hampshire — craft beer labels, CPG product packaging, retail box design, and label systems for brands across New England. GDUSA 2025 award winner.",
    canonical: "/services/packaging-design",
  });

  const [lightbox, setLightbox] = React.useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);

  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#060606]" />

        {/* Rabbit mascot — behind content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.88, 0.88, 0] }}
          transition={{
            duration: 12,
            times: [0, 0.12, 0.88, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-220px] z-[1] w-[900px] pointer-events-none select-none"
        >
          <img
            src={carrotRabbitImg}
            alt="Black Rabbit Creative mascot — packaging design studio, Portsmouth NH, New Hampshire, New England"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 min-h-[90vh] flex flex-col justify-between pt-28 pb-20">

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

          {/* Hero — two columns */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Copy — left */}
            <div className="w-full lg:max-w-[48%]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8"
              >
                Service — 03
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-black uppercase tracking-[0.07em] leading-[0.9] mb-10"
                style={{ fontSize: "clamp(2.6rem, 6vw, 6.5rem)" }}
              >
                Packaging{" "}
                <em className="not-italic text-[#5b3fd6]">Design</em>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col gap-8"
              >
                <p className="text-gray-400 leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                  Packaging designed to stand out — and sell.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Start a Project <ArrowRight size={14} />
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Rabbit — right, absolutely positioned */}
          </div>

          <div />
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: copy */}
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
              Seconds to{" "}
              <em className="not-italic text-[#5b3fd6]">impress.</em>
            </h2>
            <p className="text-gray-500 leading-[1.9] mb-6">
              In competitive retail environments, packaging has seconds to make an impression. Strong packaging doesn't just look good — it communicates clearly, builds trust, and helps your product stand apart on crowded shelves.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              At Black Rabbit Creative, packaging is approached strategically and thoughtfully. Every design balances visual impact with real-world functionality, ensuring your product not only catches attention but holds it.
            </p>
          </motion.div>

          {/* Right: featured work — beer can with award badge */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative flex justify-center">
              <div className="w-4/5">
                <div className="relative overflow-hidden bg-[#1a2a1a]" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={canImg}
                    alt="Granite Roots Brewing Cheshire Czech Lager — award-winning packaging design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Caption */}
                <div className="flex items-center justify-between bg-[#060606] px-5 py-3.5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/55">Granite Roots Brewing</span>
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#5b3fd6]">GDUSA 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOCUS + SERVICES INCLUDE ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* What We Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              What We Focus On
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-10"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              Design that{" "}
              <em className="not-italic text-[#5b3fd6]">works.</em>
            </h3>
            <p className="text-gray-500 leading-[1.9] mb-8">
              We design packaging that is:
            </p>
            <ul className="space-y-4 mb-8">
              {focusPoints.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <Check size={13} className="text-[#5b3fd6] shrink-0 mt-0.5" />
                  <span className="text-[#060606] text-sm leading-snug">{point}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-gray-500 leading-[1.9] text-sm">
              Whether you're launching a new product or refining an existing line, the goal is the same: packaging that works as hard as your product does.
            </p>
          </motion.div>

          {/* Right column: Services + Best Fit */}
          <div className="flex flex-col gap-14">

            {/* Services Include */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
                Services Include
              </span>
              <div className="space-y-0 border-t border-[#060606]/8">
                {services.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-[#060606]/8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <span className="text-[9px] font-mono text-[#5b3fd6] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#060606]/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Best Fit */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
                Best Fit Clients
              </span>
              <div className="flex flex-wrap gap-2">
                {bestFit.map((item, i) => (
                  <motion.span
                    key={i}
                    className="inline-block px-4 py-2 text-[11px] uppercase tracking-[0.12em] border border-[#060606]/12 text-[#060606]/60 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Selected Work
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Packaging in{" "}
              <em className="not-italic text-[#5b3fd6]">the wild.</em>
            </h2>
          </motion.div>

          {/* Work grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                onClick={() => setLightbox(i)}
              >
                <div className={`${item.bg} relative overflow-hidden`} style={{ aspectRatio: "4/3" }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#060606]/0 group-hover:bg-[#060606]/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {item.award && (
                    <div className="absolute top-2 left-2 bg-[#060606]/90 backdrop-blur-sm px-2 py-1 border border-[#5b3fd6]/50">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-[#5b3fd6]">GDUSA 2025</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between bg-[#0d0d0d] px-3 py-2.5 border-t border-white/5">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 truncate">{item.name}</span>
                  <span className="text-[9px] font-mono tracking-[0.1em] text-[#5b3fd6] shrink-0 ml-1">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#060606]/95 backdrop-blur-md" />

            {/* Close button */}
            <button
              className="absolute top-5 right-5 z-10 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={closeLightbox}
            >
              <X size={22} />
            </button>

            {/* Prev / Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + workItems.length) % workItems.length); }}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % workItems.length); }}
            >
              <ArrowRight size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              className="relative z-10 flex flex-col items-center max-h-full"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[80vh] max-w-[90vw] md:max-w-[60vw]">
                <img
                  src={workItems[lightbox].src}
                  alt={workItems[lightbox].alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between w-full bg-[#0d0d0d] px-5 py-3 border-t border-white/5 mt-0">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/55">{workItems[lightbox].name}</span>
                <span className="text-[10px] font-mono tracking-[0.15em] text-[#5b3fd6]">{workItems[lightbox].label}</span>
              </div>
              <div className="flex gap-2 mt-4">
                {workItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(i)}
                    className={`w-1.5 h-1.5 transition-all duration-200 ${i === lightbox ? "bg-[#5b3fd6] w-4" : "bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── OUR APPROACH ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              Our Approach
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Strategy first,{" "}
              <em className="not-italic text-[#5b3fd6]">always.</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="space-y-0 border-t border-[#060606]/8 mt-2">
              {[
                {
                  num: "01",
                  title: "Understand",
                  desc: "Every packaging project begins with understanding your product, audience, and retail environment.",
                },
                {
                  num: "02",
                  title: "Concept",
                  desc: "We develop design concepts that balance shelf impact with clarity and brand cohesion.",
                },
                {
                  num: "03",
                  title: "Refine",
                  desc: "Iterative refinement ensures the design works at every scale — from thumbnail to shelf.",
                },
                {
                  num: "04",
                  title: "Deliver",
                  desc: "Print-ready files, prepress checks, and production support — ready for the real world.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  className="flex gap-8 py-8 border-b border-[#060606]/8"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <span className="text-[10px] font-mono text-[#5b3fd6] shrink-0 pt-0.5 w-6">{step.num}</span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.07em] mb-2 text-[#060606]">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-[1.8]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-400 leading-[1.9] text-sm mt-8">
              The result is packaging that feels intentional, distinctive, and ready for the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
                Ready to begin?
              </span>
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[0.92]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
              >
                Elevate your<br />
                <em className="not-italic text-[#5b3fd6]">packaging.</em>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <p className="text-gray-500 text-sm leading-[1.8] max-w-sm lg:text-right">
                Let's create something your customers can't ignore.
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enquire <ArrowRight size={13} />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">Other Services</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {[
              { num: "01", label: "Brand Identity Design", to: "/services/brand-identity" },
              { num: "02", label: "Logo Design", to: "/services/logo-design" },
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
                  className="group relative overflow-hidden flex flex-1 items-center justify-between bg-white/[0.04] hover:bg-white/[0.09] px-8 py-10 min-h-[100px] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] tracking-[0.3em] text-[#5b3fd6] font-mono">{s.num}</span>
                    <span className="text-sm font-black uppercase tracking-[0.07em] text-white">{s.label}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-white/15 group-hover:text-[#5b3fd6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}