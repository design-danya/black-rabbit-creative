'use client'
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";

const brandBoardImg = "/assets/da5b6063e3f263dd4a30d4ca74ba3eb8a74be11c.png";
const drPortrait = "/assets/e70fdcb5ccc84272667c059482c68732ec2f27a7.png";
const drWide = "/assets/d26a5785d38f95abb7a1c39e26ecb4aebc748945.png";
const lobbyImg = "/assets/129d0cca6ea9eb569a062a5cc08e4db124f09188.png";

const taupe = "#B7AB9F";
const taupeLight = "#CCC5BD";
const charcoal = "#585858";

const meta = [
  { label: "Client", value: "Nova Dermatology Specialists" },
  { label: "Industry", value: "Medical / Dermatology" },
  { label: "Scope", value: "Complete Brand Identity" },
  { label: "Focus", value: "Trust, Clarity & Elevated Experience" },
];

const challenges = [
  "Establish immediate patient trust",
  "Convey clinical expertise",
  "Feel elevated without becoming cold",
  "Differentiate from overly sterile competitors",
  "Maintain consistency across physical and digital touchpoints",
];

const scope = [
  "Primary and secondary logo suite",
  "Refined typography system",
  "Professional color palette",
  "Brand application guidelines",
  "Environmental branding direction",
  "Patient-facing material support",
];

const impacts = [
  {
    label: "Brand Recognition",
    desc: "A sophisticated mark that stands apart in a competitive medical market",
  },
  {
    label: "Patient Confidence",
    desc: "A calm, credible identity that earns trust before the first appointment",
  },
  {
    label: "Clinical Cohesion",
    desc: "One unified system from signage to patient materials to digital presence",
  },
  {
    label: "Premium Positioning",
    desc: "Clear differentiation as an elevated, modern dermatology practice",
  },
];

export default function NovaDerm() {
  useSEO({
    title: "Nova Dermatology Brand Identity | Black Rabbit Creative, Portsmouth NH",
    description: "Sophisticated medical brand identity for Nova Dermatology Specialists — logo, brand board, environmental signage, and collateral by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/nova-dermatology",
  });
  return (
    <div className="bg-white text-[#111] min-h-screen">
      {/* ── Dark top block ── */}
      <div style={{ backgroundColor: "#0e0d0b" }}>
        <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-[#CCC5BD] transition-colors duration-300"
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
              Sophisticated Medical Brand Identity
            </span>
            <h1
              className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Nova{" "}
              <em className="not-italic" style={{ color: taupeLight }}>
                Dermatology
              </em>
            </h1>
            <p className="mt-5 text-white/30 text-sm uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              A refined identity system designed to build trust while elevating a
              modern dermatology practice
            </p>
            <a
              href="https://novadermatologyspecialists.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:text-white"
              style={{ color: taupeLight }}
            >
              Visit novadermatologyspecialists.com <ArrowRight size={11} />
            </a>
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
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] mb-2"
                    style={{ color: taupeLight }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm text-white/50 leading-snug">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Overview + Challenge ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: "#f6f4f2" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-8"
              style={{ color: charcoal }}
            >
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Elevated{" "}
              <em className="not-italic" style={{ color: charcoal }}>
                precision
              </em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem]">
              Nova Dermatology Specialists required a complete brand identity
              that would communicate medical credibility while presenting a more
              elevated and approachable patient experience.
            </p>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mt-5">
              The objective was to position the practice as{" "}
              <span className="text-[#111] font-semibold">
                premium yet accessible
              </span>{" "}
              — moving beyond generic clinical branding while maintaining the
              professionalism essential in healthcare.
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
              Medical branding must walk a careful line between authority and
              approachability. Nova needed a system that would feel confident,
              modern, and reassuring from the very first impression.
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
                  <span
                    className="text-[10px] font-black tracking-[0.15em] flex-shrink-0 w-7"
                    style={{ color: charcoal }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-black/65 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Approach ── */}
      <section className="bg-white px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-black/6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-8"
              style={{ color: charcoal }}
            >
              The Approach
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Restraint, clarity,{" "}
              <em className="not-italic" style={{ color: charcoal }}>
                refinement
              </em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-5">
              The visual direction focused on restraint, clarity, and refined
              structure. Every decision was made to support a patient experience
              that feels calm, professional, and trustworthy.
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Clean, confident typography",
                "Controlled, professional color palette",
                "Strong visual hierarchy",
                "Flexible logo applications",
                "Cohesive environmental integration",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: taupe }}
                  />
                  <p className="text-sm text-black/65">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={drPortrait}
                alt="Dr. Marina Jungwirth with Nova Dermatology Specialists signage — brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Identity System ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: "#0e0d0b" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-4"
              style={{ color: taupeLight }}
            >
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Identity &amp; Applications
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              A comprehensive brand board covering logo suite, typography, color
              palette, and merchandise mockups
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden"
          >
            <img
              src={brandBoardImg}
              alt="Nova Dermatology brand board — logo suite, color palette, typography, merchandise mockups | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Scope deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14"
          >
            <p
              className="text-[10px] uppercase tracking-[0.3em] mb-6"
              style={{ color: taupeLight }}
            >
              Scope of Delivery
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
              {scope.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-4 p-6"
                  style={{ backgroundColor: "#1a1916" }}
                >
                  <span
                    className="text-[9px] font-mono tracking-[0.2em] flex-shrink-0"
                    style={{ color: taupe }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/50">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Color System ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: "#1a1916" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-4"
              style={{ color: taupeLight }}
            >
              Visual Foundation
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Color &amp; Typography
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              Warm neutrals and refined serif forms that convey medical authority
              with approachable elegance
            </p>
          </motion.div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">
            Color Palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mb-16">
            {[
              {
                hex: "#585858",
                label: "Charcoal",
                bg: "#585858",
                textColor: "rgba(255,255,255,0.9)",
                subColor: "rgba(255,255,255,0.4)",
              },
              {
                hex: "#B7AB9F",
                label: "Warm Taupe",
                bg: "#B7AB9F",
                textColor: "rgba(42,38,34,0.85)",
                subColor: "rgba(42,38,34,0.45)",
              },
              {
                hex: "#CCC5BD",
                label: "Soft Stone",
                bg: "#CCC5BD",
                textColor: "rgba(42,38,34,0.85)",
                subColor: "rgba(42,38,34,0.45)",
              },
              {
                hex: "#F5F3F0",
                label: "Warm White",
                bg: "#F5F3F0",
                textColor: "rgba(42,38,34,0.7)",
                subColor: "rgba(42,38,34,0.35)",
                border: true,
              },
            ].map((swatch) => (
              <motion.div
                key={swatch.hex}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col justify-between p-6 aspect-square ${
                  (swatch as any).border
                    ? "ring-1 ring-inset ring-white/15"
                    : ""
                }`}
                style={{ backgroundColor: swatch.bg }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: swatch.subColor }}
                />
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] mb-1"
                    style={{ color: swatch.textColor }}
                  >
                    {swatch.label}
                  </p>
                  <p
                    className="text-[10px] font-mono tracking-wider"
                    style={{ color: swatch.subColor }}
                  >
                    {swatch.hex}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">
            Primary Typeface
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 flex flex-col gap-3"
            style={{ backgroundColor: "#0e0d0b" }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ color: taupeLight }}
            >
              The Seasons Light
            </span>
            <p
              className="text-white/80 leading-[1.3]"
              style={{
                fontSize: "clamp(2rem, 4vw, 4rem)",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 300,
              }}
            >
              Nova Dermatology Specialists
            </p>
            <p className="text-white/25 text-sm mt-2">
              A refined serif that communicates elegance and medical authority
              while remaining approachable
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Environmental Integration ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "#0e0d0b" }}
      >
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-4"
              style={{ color: taupeLight }}
            >
              Environmental Integration
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Brand in Space
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl mx-auto">
              The identity extends seamlessly into the physical space,
              reinforcing the brand at key patient touchpoints
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden w-full"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={lobbyImg}
                alt="Nova Dermatology reception area with branded signage — environmental design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4 text-center">
              <p
                className="text-[9px] uppercase tracking-[0.35em] mb-1"
                style={{ color: taupeLight }}
              >
                Reception
              </p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">
                Interior Signage
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden w-full"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={drWide}
                alt="Dr. Marina Jungwirth with Nova Dermatology branded wall signage — brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4 text-center">
              <p
                className="text-[9px] uppercase tracking-[0.35em] mb-1"
                style={{ color: taupeLight }}
              >
                Brand Presence
              </p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">
                Practice Signage
              </p>
            </div>
          </motion.div>
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
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-4"
              style={{ color: charcoal }}
            >
              Outcome
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              A brand that{" "}
              <em className="not-italic" style={{ color: charcoal }}>
                builds trust
              </em>
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
                <div
                  className="w-8 h-px mb-6"
                  style={{ backgroundColor: taupe }}
                />
                <p
                  className="text-[11px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: charcoal }}
                >
                  {item.label}
                </p>
                <p className="text-sm text-black/55 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-black/6"
        style={{ backgroundColor: "#f6f4f2" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/30 mb-4">
              Need a medical brand that builds trust at first glance?
            </p>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Let's create something{" "}
              <em className="not-italic" style={{ color: charcoal }}>
                intentional
              </em>
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
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-white text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
              style={{ backgroundColor: charcoal }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={13} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              href="/work"
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