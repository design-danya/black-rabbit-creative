'use client'
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";

const oldBrand = "/assets/placeholder-portfolio.png";
const newBrand = "/assets/placeholder-portfolio.png";
const mugPhoto = "/assets/placeholder-portfolio.png";
const bagShirt = "/assets/placeholder-portfolio.png";
const merch = "/assets/placeholder-portfolio.png";
const logoSubmark = "/assets/placeholder-portfolio.png";
const logoPrimary = "/assets/placeholder-portfolio.png";
const logoMark = "/assets/placeholder-portfolio.png";
const logoStacked = "/assets/placeholder-portfolio.png";
const brandGuideImg = "/assets/placeholder-portfolio.png";

const plum  = "#7b5c80";
const mauve = "#c9a5c1";

const meta = [
  { label: "Client",   value: "Basic Balance Acupuncture" },
  { label: "Industry", value: "Holistic Healthcare" },
  { label: "Scope",    value: "Complete Brand Identity" },
  { label: "Focus",    value: "Trust, Warmth & Clarity" },
];

const challenges = [
  "Build immediate patient trust",
  "Communicate professionalism and expertise",
  "Reflect holistic, natural healing principles",
  "Create consistency across the patient experience",
  "Stand out within a crowded wellness market",
];

const impacts = [
  { label: "Patient Trust",       desc: "A calm, credible identity that earns confidence before the first appointment" },
  { label: "Visual Consistency",  desc: "One unified system from signage to social media to merchandise" },
  { label: "Polished Presence",   desc: "A clinic experience that feels as intentional as the care provided" },
  { label: "Market Positioning",  desc: "Clear differentiation within a saturated wellness landscape" },
];

export default function BasicBalance() {
  useSEO({
    title: "Basic Balance Acupuncture Brand Identity | Black Rabbit Creative, Portsmouth NH",
    description: "Calm, trust-building brand identity for Basic Balance Acupuncture — logo, guidelines, and merchandise design by Black Rabbit Creative in Portsmouth, New Hampshire.",
    canonical: "/work/basic-balance-acupuncture",
  });
  return (
    <div className="bg-white text-[#111] min-h-screen">

      {/* ── Dark top block ── */}
      <div style={{ backgroundColor: "#0f0a10" }}>
        <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-[#c9a5c1] transition-colors duration-300"
          >
            <ArrowLeft size={12} /> All Work
          </Link>
        </div>

        <section className="px-6 md:px-16 lg:px-24 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-white/25 mb-4">
              Holistic Wellness Brand Identity
            </span>
            <h1
              className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Basic{" "}
              <em className="not-italic" style={{ color: mauve }}>Balance</em>
            </h1>
            <p className="mt-5 text-white/30 text-sm uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              A calm, trust-building identity for a modern acupuncture practice
            </p>
          </motion.div>
        </section>

        <section className="border-t border-b border-white/8 mt-0">
          <div className="px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
              {meta.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                  className="px-6 py-8 first:pl-0"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: mauve }}>
                    {item.label}
                  </p>
                  <p className="text-sm text-white/50 leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Before / After ── */}
      <section className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28 pb-16 md:pb-24" style={{ backgroundColor: "#0f0a10" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: mauve }}>
              The Evolution
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Before &amp; After
            </h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-center">

            {/* ── BEFORE ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 self-start">Before</p>
              <motion.img
                src={oldBrand}
                alt="Basic Balance Acupuncture old brand on laptop — before rebrand by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-full max-w-[480px] h-auto object-contain"
              />
              <div className="mt-6 flex flex-wrap gap-4 self-start">
                {["Dated typography", "Low visual impact", "Inconsistent system"].map((t) => (
                  <p key={t} className="text-[10px] text-white/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/15 flex-shrink-0" />
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* ── Centre arrow ── */}
            <div className="hidden md:flex items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: plum }}
              >
                <ArrowRight size={15} color="white" />
              </motion.div>
            </div>

            {/* ── AFTER ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 self-start">After</p>
              <motion.img
                src={newBrand}
                alt="Basic Balance Acupuncture new brand on laptop — redesigned by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="w-full max-w-[480px] h-auto object-contain"
              />
              <div className="mt-6 flex flex-wrap gap-4 self-start">
                {["Modern mark", "Unified system", "Calm authority"].map((t) => (
                  <p key={t} className="text-[10px] text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: mauve }} />
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview + Challenge ── */}
      <section className="bg-[#f7f5f8] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-8" style={{ color: plum }}>
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Grounded in{" "}
              <em className="not-italic" style={{ color: plum }}>balance</em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem]">
              Basic Balance Acupuncture needed a cohesive brand identity that would establish credibility in the healthcare space while preserving the warmth and approachability essential to holistic care.
            </p>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mt-5">
              The goal was to create a visual system that felt{" "}
              <span className="text-[#111] font-semibold">grounded, professional, and deeply aligned</span> with the clinic's philosophy of balance and natural healing.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-black/30 mb-8">
              The Challenge
            </span>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-8">
              Healthcare branding requires a careful balance — too clinical feels cold, too soft can feel unprofessional. Basic Balance needed an identity that earned trust without sacrificing warmth.
            </p>
            <div className="space-y-0">
              {challenges.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
                  className="flex items-center gap-4 py-3 border-b border-black/6 last:border-0"
                >
                  <span className="text-[10px] font-black tracking-[0.15em] flex-shrink-0 w-7" style={{ color: plum }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-black/65 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Guideline ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: "#0f0a10" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: mauve }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Brand Guideline Sheet
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              Logo suite, colour palette, brand assets, typography, and real-world
              applications — the complete identity system at a glance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={brandGuideImg}
              alt="Basic Balance Acupuncture brand guideline sheet — logo suite, colour palette, brand assets, brand fonts, and real-world applications | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Brand in Action ── */}
      <section style={{ backgroundColor: "#0f0a10" }} className="py-20 md:py-28">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: mauve }}>
              Real-World Applications
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Brand in Action
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden flex items-center justify-center w-full"
              style={{ height: "clamp(280px, 36vw, 480px)", backgroundColor: "#0f0a10" }}
            >
              <img
                src={merch}
                alt="Basic Balance branded t-shirt and water bottle — merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="py-4 text-center">
              <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: mauve }}>Merchandise</p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">Apparel &amp; Branded Goods</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden flex items-center justify-center w-full"
              style={{ height: "clamp(280px, 36vw, 480px)", backgroundColor: "#0f0a10" }}
            >
              <img
                src={bagShirt}
                alt="Basic Balance branded tote bag and cherry blossom t-shirt — merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="py-4 text-center">
              <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: mauve }}>Lifestyle</p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">Tote &amp; Apparel</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden flex items-center justify-center w-full"
              style={{ height: "clamp(280px, 36vw, 480px)", backgroundColor: "#0f0a10" }}
            >
              <img
                src={mugPhoto}
                alt="Basic Balance branded mug with stacked stones — merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="py-4 text-center">
              <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: mauve }}>Patient Experience</p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">In-Clinic Merchandise</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Color System ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: "#1a0f1e" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: mauve }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Color &amp; Identity
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              Earthy plum and mauve tones grounded in organic healing traditions
            </p>
          </motion.div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">Color Palette</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mb-16">
            {[
              { hex: "#2a1a2e", label: "Deep Plum",    bg: "#2a1a2e", textColor: "rgba(255,255,255,0.9)", subColor: "rgba(255,255,255,0.4)" },
              { hex: "#7b5c80", label: "Plum",         bg: "#7b5c80", textColor: "rgba(255,255,255,0.9)", subColor: "rgba(255,255,255,0.5)" },
              { hex: "#c9a5c1", label: "Mauve",        bg: "#c9a5c1", textColor: "rgba(42,26,46,0.85)",   subColor: "rgba(42,26,46,0.45)" },
              { hex: "#f5f0f6", label: "Blush White",  bg: "#f5f0f6", textColor: "rgba(42,26,46,0.7)",   subColor: "rgba(42,26,46,0.35)", border: true },
            ].map((swatch) => (
              <motion.div
                key={swatch.hex}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col justify-between p-6 aspect-square ${(swatch as any).border ? "ring-1 ring-inset ring-white/15" : ""}`}
                style={{ backgroundColor: swatch.bg }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: swatch.subColor }} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: swatch.textColor }}>
                    {swatch.label}
                  </p>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: swatch.subColor }}>
                    {swatch.hex}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-6">Logo Suite</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {[
              { role: "Primary Logo",   note: "Full horizontal lockup with wordmark and acupuncture needle arc mark", img: logoPrimary },
              { role: "Stacked Logo",   note: "Vertical lockup for larger-format brand presentations and signage", img: logoStacked },
              { role: "Submark",        note: "Compact circular badge for profile imagery, small-scale applications, and merchandise", img: logoSubmark },
              { role: "Brand Mark",     note: "Standalone needle arc icon for favicons, patterns, and subtle brand moments", img: logoMark },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 flex flex-col"
                style={{ backgroundColor: "#2a1a2e" }}
              >
                <span className="text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: mauve }}>
                  {item.role}
                </span>
                <div
                  className="flex-1 flex items-center justify-center rounded-sm mb-4 p-4"
                  style={{ minHeight: 120, backgroundColor: "rgba(201,165,193,0.07)" }}
                >
                  <img
                    src={item.img}
                    alt={`Basic Balance ${item.role}`}
                    className="max-w-full max-h-[120px] object-contain"
                  />
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="bg-white px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: plum }}>
              Outcome
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              A brand that{" "}
              <em className="not-italic" style={{ color: plum }}>earns trust</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="bg-white p-8 md:p-10"
              >
                <div className="w-8 h-px mb-6" style={{ backgroundColor: plum }} />
                <p className="text-[11px] uppercase tracking-[0.25em] mb-3" style={{ color: plum }}>
                  {item.label}
                </p>
                <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f7f5f8] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-black/6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/30 mb-4">
              Building a wellness brand that needs to earn trust?
            </p>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Let's create something{" "}
              <em className="not-italic" style={{ color: plum }}>intentional</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-white text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
              style={{ backgroundColor: plum }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={13} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs uppercase tracking-[0.2em] border border-black/15 text-black/50 hover:text-black hover:border-black/30 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}