import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

import oldLogo from "figma:asset/27c2293749cce214d7b669de432a539d6ffe15ac.png";
import badgeLogo from "figma:asset/ce45cde349dc30f5f89c11e2c69e3ff0a5d834c7.png";
import horizontalLogo from "figma:asset/38fb5f36cd00ed2b540bad89804222d6bcea6b2b.png";
import stackedLogo from "figma:asset/4820e1d75fe987e7157cd2223d79b7c9b7281d35.png";
import lyreMark from "figma:asset/6dde127992d64a2181b0474bcb1b6d564592d34e.png";
import typographyImg from "figma:asset/63e8ec913872ed9549c13e545812c4fe1f448fdb.png";
import workshopColorImg from "figma:asset/7f41d04f1b99f6a3bd6f86a9139fa0a10bd23315.png";

const copper = "#C46A2C";
const copperLight = "#D4943A";
const maroon = "#7B2D26";
const darkWood = "#1a1510";

const workshopImg =
  "https://images.unsplash.com/photo-1660006417074-91711e3ff86c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXRoaWVyJTIwZ3VpdGFyJTIwd29ya3Nob3AlMjBjcmFmdHNtYW4lMjB0b29sc3xlbnwxfHx8fDE3NzI0MTY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const meta = [
  { label: "Client", value: "Hendrick's Lutherie" },
  { label: "Industry", value: "Musical Instruments & Repair" },
  { label: "Scope", value: "Logo Design & Brand Identity" },
  { label: "Focus", value: "Craft Credibility & Heritage" },
];

const challenges = [
  "Strengthen professional credibility",
  "Reflect traditional craftsmanship",
  "Move beyond hobbyist visual cues",
  "Improve scalability across applications",
  "Create a cohesive, flexible logo system",
];

const scope = [
  "Primary circular badge",
  "Horizontal logo configuration",
  "Standalone lyre mark",
  "Alternative refined mark",
  "Typography guidance",
  "Warm, craftsmanship-inspired color palette",
];

const impacts = [
  {
    label: "Professional Presence",
    desc: "A structured heritage badge that commands respect in the musical instrument space",
  },
  {
    label: "Brand Recognition",
    desc: "A strong silhouette and consistent system that's instantly recognizable at any scale",
  },
  {
    label: "Application Flexibility",
    desc: "Multiple logo variations designed for signage, merchandise, digital, and print",
  },
  {
    label: "Heritage Positioning",
    desc: "Clear visual communication of craftsmanship, tradition, and specialist expertise",
  },
];

export default function HendricksLutherie() {
  useSEO({
    title: "Hendrick's Lutherie Brand Identity | Black Rabbit Creative, Portsmouth NH",
    description: "Heritage-focused brand transformation for Hendrick's Lutherie guitar repair — new logo, typography, color system, and brand guidelines by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/hendricks-lutherie",
  });
  return (
    <div className="bg-white text-[#111] min-h-screen">
      {/* ── Dark top block ── */}
      <div style={{ backgroundColor: darkWood }}>
        <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-[#D4943A] transition-colors duration-300"
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
              Heritage-Focused Brand Transformation
            </span>
            <h1
              className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Hendrick's{" "}
              <em className="not-italic" style={{ color: copperLight }}>
                Lutherie
              </em>
            </h1>
            <p className="mt-5 text-white/30 text-sm uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              A refined identity system designed to elevate a skilled guitar
              repair shop into a more credible, heritage-driven brand
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
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] mb-2"
                    style={{ color: copperLight }}
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
        style={{ backgroundColor: "#f5f1ec" }}
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
              style={{ color: copper }}
            >
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Craft demands{" "}
              <em className="not-italic" style={{ color: copper }}>
                credibility
              </em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem]">
              Hendrick's Lutherie needed a more professional visual identity
              that reflected the depth of craftsmanship behind the work. The
              existing logo leaned casual and did not fully communicate the
              expertise and tradition associated with professional lutherie.
            </p>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mt-5">
              The objective was to develop an identity that felt{" "}
              <span className="text-[#111] font-semibold">
                established, trustworthy, and rooted in traditional craft
              </span>{" "}
              while remaining clean and versatile for modern applications.
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
              The original guitar pick logo conveyed creativity but lacked the
              authority expected from a specialist repair shop. The new identity
              needed to feel more established without losing its handcrafted
              character.
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
                    style={{ color: copper }}
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
              style={{ color: copper }}
            >
              The Approach
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Heritage, form,{" "}
              <em className="not-italic" style={{ color: copper }}>
                symbolism
              </em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-5">
              The redesign centered on strategic repositioning through form and
              symbolism. A circular badge format was developed to evoke heritage
              craftsmanship and create a stronger visual presence across
              merchandise, signage, and digital use.
            </p>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-5">
              At the center, a refined lyre symbol replaced the generic guitar
              imagery, signaling deeper musical tradition and artisanal
              expertise.
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Heritage-inspired structure",
                "Refined, etched-style typography",
                "Warm, wood-influenced color relationships",
                "Strong silhouette for recognizability",
                "Flexible logo variations for real-world use",
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
                    style={{ backgroundColor: copper }}
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
              <ImageWithFallback
                src={workshopImg}
                alt="Guitar repair workshop with luthier tools — brand photography for Hendrick's Lutherie by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: darkWood }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span
              className="block text-[11px] uppercase tracking-[0.35em] mb-4"
              style={{ color: copperLight }}
            >
              Transformation
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Before &amp; After
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              From a casual, hobbyist impression to an established and credible
              heritage presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-14 flex flex-col items-center"
              style={{ backgroundColor: "#0f0b08" }}
            >
              <span
                className="text-[9px] uppercase tracking-[0.35em] mb-8 self-start"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Before
              </span>
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={oldLogo}
                  alt="Hendrick's Lutherie original guitar pick logo before rebrand | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="max-w-[200px] w-full h-auto object-contain opacity-70"
                />
              </div>
              <p className="text-[11px] text-white/25 leading-relaxed mt-8 text-center">
                An orange guitar pick mark that felt creative but informal
              </p>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 md:p-14 flex flex-col items-center"
              style={{ backgroundColor: "#141008" }}
            >
              <span
                className="text-[9px] uppercase tracking-[0.35em] mb-8 self-start"
                style={{ color: copperLight }}
              >
                After
              </span>
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={badgeLogo}
                  alt="Hendrick's Lutherie new heritage circle badge logo — redesigned by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="max-w-[240px] w-full h-auto object-contain"
                />
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed mt-8 text-center">
                A structured heritage badge communicating craftsmanship,
                longevity, and professional expertise
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Logo Suite ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: "#0f0b08" }}
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
              style={{ color: copperLight }}
            >
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Logo Suite
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              A comprehensive system designed for versatility and long-term
              brand consistency across every touchpoint
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {[
              {
                role: "Primary Badge",
                note: "Full circular lockup with lyre, wordmark, and date ring for signage and hero applications",
                img: badgeLogo,
              },
              {
                role: "Horizontal Lockup",
                note: "Wide-format logo with lyre mark and wordmark for headers and print collateral",
                img: horizontalLogo,
              },
              {
                role: "Stacked Mark",
                note: "Vertical configuration with lyre mark above wordmark for compact applications",
                img: stackedLogo,
              },
              {
                role: "Lyre Symbol",
                note: "Standalone mark for favicons, embossing, watermarks, and pattern use",
                img: lyreMark,
              },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 flex flex-col"
                style={{ backgroundColor: darkWood }}
              >
                <span
                  className="text-[9px] uppercase tracking-[0.3em] mb-4"
                  style={{ color: copperLight }}
                >
                  {item.role}
                </span>
                <div
                  className="flex-1 flex items-center justify-center rounded-sm mb-4 p-6"
                  style={{
                    minHeight: 160,
                    backgroundColor: "rgba(196,106,44,0.04)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={`Hendrick's Lutherie ${item.role}`}
                    className="max-w-full max-h-[160px] object-contain"
                  />
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>

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
              style={{ color: copperLight }}
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
                  style={{ backgroundColor: darkWood }}
                >
                  <span
                    className="text-[9px] font-mono tracking-[0.2em] flex-shrink-0"
                    style={{ color: copper }}
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

      {/* ── Typography System ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: darkWood }}
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
              style={{ color: copperLight }}
            >
              Visual Foundation
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Typography System
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              ELLERY typeface was selected for its classical elegance and
              craftsmanship heritage, perfectly complementing the traditional
              lutherie aesthetic
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white overflow-hidden"
          >
            <img
              src={typographyImg}
              alt="Hendrick's Lutherie typography system — primary font ELLERY with brand name treatment and craftsmanship-inspired lettering | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <p className="mt-6 text-white/30 text-[11px] leading-relaxed max-w-2xl">
            The ELLERY typeface bridges classical elegance with handcrafted
            character — etched-style lettering that feels at home carved into
            wood as much as it does on a business card or shop sign.
          </p>
        </div>
      </section>

      {/* ── Color Inspiration ── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
        style={{ backgroundColor: "#0f0b08" }}
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
              style={{ color: copperLight }}
            >
              Craft Atmosphere
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Color Inspiration
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xl">
              Color palette inspired by authentic lutherie workshop materials,
              capturing the warmth of wood tones and the richness of traditional
              craftsmanship
            </p>
          </motion.div>

          {/* Workshop photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden mb-8"
          >
            <img
              src={workshopColorImg}
              alt="Authentic lutherie workspace showing guitar parts, wooden surfaces, tools, and materials that inspired the warm brand color palette | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Color Palette swatches */}
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">
            Extracted Palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/8">
            {[
              {
                hex: "#7B2D26",
                label: "Deep Maroon",
                bg: "#7B2D26",
                textColor: "rgba(255,255,255,0.9)",
                subColor: "rgba(255,255,255,0.4)",
              },
              {
                hex: "#C46A2C",
                label: "Copper",
                bg: "#C46A2C",
                textColor: "rgba(255,255,255,0.9)",
                subColor: "rgba(255,255,255,0.45)",
              },
              {
                hex: "#D4943A",
                label: "Warm Gold",
                bg: "#D4943A",
                textColor: "rgba(42,30,18,0.85)",
                subColor: "rgba(42,30,18,0.45)",
              },
              {
                hex: "#2A1E12",
                label: "Dark Wood",
                bg: "#2A1E12",
                textColor: "rgba(255,255,255,0.8)",
                subColor: "rgba(255,255,255,0.35)",
              },
              {
                hex: "#F5F1EC",
                label: "Warm Linen",
                bg: "#F5F1EC",
                textColor: "rgba(42,30,18,0.7)",
                subColor: "rgba(42,30,18,0.35)",
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
              style={{ color: copper }}
            >
              Outcome
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              A brand that commands{" "}
              <em className="not-italic" style={{ color: copper }}>
                respect
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
                  style={{ backgroundColor: copper }}
                />
                <p
                  className="text-[11px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: copper }}
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
        style={{ backgroundColor: "#f5f1ec" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/30 mb-4">
              Ready to elevate your brand with the credibility it deserves?
            </p>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Let's build something{" "}
              <em className="not-italic" style={{ color: copper }}>
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
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-white text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
              style={{ backgroundColor: copper }}
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