'use client'
import { motion, AnimatePresence } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { SignsItsTime } from "./SignsItsTime";
import { BrandProcess } from "./BrandProcess";
import { TouchpointsWheel } from "./TouchpointsWheel";
import { StateOfBrandChart } from "./StateOfBrandChart";
import { ArrowRight, ArrowUpRight, Check, ArrowLeft, Clock, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
const sketchbookImg = "/assets/64f24a4d091804c95a77a759ece275d2b4458b22.png";
const rabbitImg = "/assets/eed29b13bea1a52313221c289bafae04132dc381.png";
const senseImg = "/assets/eb19e6f509c3380dcf33a87840d5d7aad8341860.png";
const lobsterMenuImg = "/assets/03f18bfe8e04d5774abf120d1f3fad955b9c299e.png";
const lobsterHoodieImg = "/assets/3600427455a05045405b90350f411e3023b4f419.png";

type Stage = { title: string; weeks: string; desc?: string };
type Group = { heading?: string; items: string[] };
type Pkg = {
  id: string;
  label: string;
  timeline: string;
  process: Stage[];
  groups: Group[];
  bestFor: string;
  notFor?: string;
};
type Track = { id: string; label: string; blurb: string; packages: Pkg[] };

const tracks: Track[] = [
  {
    id: "new",
    label: "New Brand",
    blurb: "For businesses building an identity from scratch.",
    packages: [
      {
        id: "logo-only",
        label: "Logo Only",
        timeline: "5 weeks",
        process: [
          { title: "Mood Boards", weeks: "2 wks", desc: "2–3 distinct strategic directions" },
          { title: "Logo Design", weeks: "2 wks", desc: "Presentation and refinement" },
          { title: "Offboarding", weeks: "1 wk", desc: "Final files and usage guidelines" },
        ],
        groups: [
          {
            items: [
              "3 logo variations (full, icon, horizontal)",
              "All file formats (AI, PNG, PDF, SVG)",
              "Font pairings + color palette",
              "Basic usage guidelines",
              "2 revision rounds",
            ],
          },
        ],
        bestFor:
          "A clear name and direction already in place, needing a professional mark — not a full system.",
      },
      {
        id: "streamlined",
        label: "Streamlined Branding",
        timeline: "6 weeks",
        process: [
          { title: "Mini Strategy & Mood Boards", weeks: "2 wks" },
          { title: "Design & Logo Suite", weeks: "2 wks" },
          { title: "Guidelines & Wrap-Up", weeks: "2 wks" },
        ],
        groups: [
          {
            heading: "Brand Strategy & Creative Direction",
            items: [
              "Brand overview, values, and goals",
              "Audience avatars (2 personas)",
              "Competitor analysis",
              "Competitive advantage and differentiation",
              "Brand personality profile",
              "Positioning statement + core value proposition",
              "Two mood board directions with typography, color, and illustration intent",
            ],
          },
          {
            heading: "Brand Presentation",
            items: [
              "Cohesive logo suite (primary, secondary, mark) with design rationale",
              "3–5 supporting illustrations or one pattern set",
              "Font pairings + color palette with codes",
              "Brand in action — mockup applications (illustrative, not production files)",
            ],
          },
          {
            heading: "Delivery",
            items: [
              "One-page brand guideline sheet",
              "Packaged files",
              "2 revision rounds per stage (6 total)",
            ],
          },
        ],
        bestFor:
          "New businesses launching with a polished, consistent foundation — where one person is applying the brand.",
      },
      {
        id: "comprehensive",
        label: "Comprehensive Branding",
        timeline: "8–12 weeks",
        process: [
          { title: "Research & Strategy", weeks: "2–3 wks" },
          { title: "Mood Boards & Concept", weeks: "2 wks" },
          { title: "Design & Logo Suite", weeks: "2–3 wks" },
          { title: "Applications & Guidelines", weeks: "2–3 wks" },
        ],
        groups: [
          {
            heading: "Brand Strategy & Creative Direction",
            items: [
              "Brand overview, values, and goals",
              "Audience avatars",
              "Problems & solutions mapping (per audience)",
              "Buyer journey mapping — awareness, consideration, purchase, retention",
              "Competitor analysis with trends and strategic recommendations",
              "Competitive advantage and differentiation",
              "Brand foundations — mission, vision, purpose, values, personality",
              "Messaging framework — positioning, value proposition, key messages, terminology",
              "Brand voice — defined tones with dos, don'ts, and example copy",
              "Mood board directions with creative rationale",
            ],
          },
          {
            heading: "Visual System",
            items: [
              "Complete logo suite (primary, secondary, submarks, all formats)",
              "6–10 custom illustrations or icons + pattern system",
              "Color system with codes (RGB, CMYK, HEX), proportion rules, and usage rules",
              "Typography system with hierarchy and usage rules",
              "Photography direction",
              "Social media templates and applications",
              "Brand in action — mockup applications (illustrative, not production files)",
            ],
          },
          {
            heading: "Delivery",
            items: [
              "Comprehensive brand guidelines (25+ pages)",
              "Asset usage guide",
              "Packaged files",
              "2 revision rounds per stage (8 total)",
            ],
          },
        ],
        bestFor:
          "New businesses building with a team, vendors, or multiple channels from day one — and who need to know what to say, not just how to look.",
      },
    ],
  },
  {
    id: "existing",
    label: "Established Brand",
    blurb: "For companies with equity worth keeping.",
    packages: [
      {
        id: "logo-refinement",
        label: "Logo Refinement",
        timeline: "4–5 weeks",
        process: [
          { title: "Mark Audit & Direction", weeks: "1–2 wks", desc: "Evaluation of the current mark, 1–2 refinement directions" },
          { title: "Logo Design", weeks: "2 wks", desc: "Presentation and refinement" },
          { title: "Offboarding", weeks: "1 wk", desc: "Final files and usage guidelines" },
        ],
        groups: [
          {
            items: [
              "Mark audit — what's working, what's failing, and why",
              "Refined logo suite (primary, secondary, mark)",
              "All file formats (AI, PNG, PDF, SVG)",
              "Color codes and typography documentation for the existing palette",
              "Basic usage guidelines (clear space, minimum size, misuse)",
              "2 revision rounds",
            ],
          },
        ],
        bestFor:
          "An established business whose mark is dated, inconsistent, or failing at certain sizes — where the name, positioning, and audience are all working and only the mark needs attention.",
        notFor:
          "A name change, a new service category, or a brand nobody knows how to apply consistently. Those need strategy underneath the mark.",
      },
      {
        id: "solidification-essentials",
        label: "Solidification Essentials",
        timeline: "6 weeks",
        process: [
          { title: "Brand Audit & Strategy", weeks: "2 wks" },
          { title: "Visual System Refinement", weeks: "2 wks" },
          { title: "Guidelines & Delivery", weeks: "2 wks" },
        ],
        groups: [
          {
            heading: "Brand Audit & Strategy",
            items: [
              "Audit of current identity — what's working, what needs refinement",
              "Audience avatars (2 personas)",
              "Competitor analysis",
              "Competitive advantage and differentiation",
              "Brand personality profile",
              "Positioning statement + core value proposition",
            ],
          },
          {
            heading: "Visual System",
            items: [
              "Logo refinement (primary, secondary, submark)",
              "3–5 supporting illustrations or one pattern set",
              "Color palette with codes (RGB, CMYK, HEX)",
              "Typography system",
              "Brand in action — mockup applications (illustrative, not production files)",
            ],
          },
          {
            heading: "Delivery",
            items: [
              "One-page brand guideline sheet",
              "Packaged files",
              "2 revision rounds per stage (6 total)",
            ],
          },
        ],
        bestFor:
          "Established businesses where the owner is the primary person applying the brand.",
      },
      {
        id: "solidification-complete",
        label: "Solidification Complete",
        timeline: "8–12 weeks",
        process: [
          { title: "Brand Audit & Strategy", weeks: "2–3 wks" },
          { title: "Visual System Refinement", weeks: "2–3 wks" },
          { title: "Brand in Action", weeks: "2 wks" },
          { title: "Guidelines & Delivery", weeks: "2–3 wks" },
        ],
        groups: [
          {
            heading: "Brand Audit & Strategy",
            items: [
              "Audit of current identity — what to protect, what to refine",
              "Audience avatars",
              "Problems & solutions mapping (per audience)",
              "Buyer journey mapping — awareness, consideration, purchase, retention",
              "Competitor analysis with trends and strategic recommendations",
              "Competitive advantage and differentiation",
              "Brand foundations — mission, vision, purpose, values, personality",
              "Messaging framework — positioning, value proposition, key messages, terminology",
              "Brand voice — defined tones with dos, don'ts, and example copy",
            ],
          },
          {
            heading: "Visual System",
            items: [
              "Logo refinement (primary, secondary, submarks, all formats)",
              "6–10 custom illustrations or icons + pattern system",
              "Color system — codes, proportion rules, usage rules, accessibility contrast testing",
              "Typography system with hierarchy and usage rules",
              "Photography direction",
              "Social media templates and applications",
              "Brand in action — mockup applications (illustrative, not production files)",
            ],
          },
          {
            heading: "Delivery",
            items: [
              "Comprehensive brand guidelines (25+ pages)",
              "Asset usage guide",
              "Packaged files",
              "2 revision rounds per stage (8 total)",
            ],
          },
        ],
        bestFor:
          "Established companies with employees, vendors, or physical presence — where people other than the owner need to apply the brand correctly.",
      },
    ],
  },
];

const faqs = [
  {
    q: "How do I choose between all these packages?",
    a: "Start with your situation. If you're building a brand from scratch, look at the New Brand track; if you already have equity worth keeping, look at Established Brand. Within each track the packages scale by depth — a focused logo, a streamlined identity, or a comprehensive system with full strategy and messaging. Not sure? Tell us where you are and we'll point you to the right fit.",
  },
  {
    q: "How long does each stage take?",
    a: "Most stages run about two weeks; the larger packages run two to three weeks per stage, so there's room to do the work properly and for you to review thoughtfully at each milestone. Each package lists its own timeline.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every package includes two rounds of revisions at each stage. We work collaboratively throughout, refining the direction together until it's right, within the agreed scope.",
  },
  {
    q: "How is pricing determined?",
    a: "Every package is custom-priced to the scope and complexity of your project — we don't believe in one-size-fits-all pricing. Tell us what you need and we'll put together a proposal tailored to you.",
  },
  {
    q: "What do I need to prepare before we start?",
    a: "Not much. A brief overview of your business, your goals, and any brands you admire is a great starting point. We guide you through everything in the strategy session at the beginning of the project.",
  },
];

export default function BrandIdentity() {
  useSEO({
    title: "Brand Identity Design | Black Rabbit Creative, Portsmouth NH",
    description: "Full brand identity design services from Black Rabbit Creative in Portsmouth, New Hampshire — strategy, logo systems, typography, color palettes, and comprehensive brand guidelines for businesses across New England.",
    canonical: "/services/brand-identity",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTrack, setActiveTrack] = useState(0);
  const [openId, setOpenId] = useState<string | null>(tracks[0].packages[0].id);

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
              alt="Black Rabbit Creative mascot — brand identity design studio"
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
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#7c5fe6] transition-colors duration-300"
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
              className="block text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-8"
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
              <em className="not-italic text-[#7c5fe6]">Identity</em>
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
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-10">
              What It Is
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              More than a logo.
              <br />A complete{" "}
              <em className="not-italic text-[#7c5fe6]">system.</em>
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
                    alt="Lobster Lab menu design — restaurant branding by Black Rabbit Creative"
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
                    alt="Lobster Lab branded hoodie — merchandise design by Black Rabbit Creative"
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
                  alt="Lobster Lab complete brand identity system — designed by Black Rabbit Creative"
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/7" }}
                />
              </motion.div>

              {/* Label */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6]">
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
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-6">
              The Process
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-2xl"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              How we{" "}
              <em className="not-italic text-[#7c5fe6]">get there.</em>
            </h2>
          </motion.div>

          {/* Track toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div className="inline-flex self-start p-1 border border-white/10 bg-white/[0.03]">
              {tracks.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrack(i);
                    setOpenId(tracks[i].packages[0].id);
                  }}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    activeTrack === i
                      ? "bg-white text-[#060606]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="max-w-sm text-sm text-gray-400 sm:text-right">
              {tracks[activeTrack].blurb}
            </p>
          </div>

          {/* Package accordions */}
          <div className="border-b border-white/10">
            {tracks[activeTrack].packages.map((pkg) => {
              const open = openId === pkg.id;
              return (
                <div key={pkg.id} className="border-t border-white/10">
                  <button
                    onClick={() => setOpenId(open ? null : pkg.id)}
                    aria-expanded={open}
                    className="w-full flex items-center gap-4 md:gap-8 py-7 text-left"
                  >
                    <h3
                      className="flex-1 font-black uppercase tracking-[0.06em] leading-none text-white"
                      style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.9rem)" }}
                    >
                      {pkg.label}
                    </h3>
                    <span className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-400 shrink-0">
                      <Clock size={13} className="text-[#7c5fe6]" /> {pkg.timeline}
                    </span>
                    <span className="hidden md:inline w-32 text-right text-xs uppercase tracking-[0.15em] text-[#7c5fe6] shrink-0">
                      Custom pricing
                    </span>
                    <span className="shrink-0 text-[#7c5fe6]">
                      {open ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 pb-14 pt-2">
                          {/* Left: process, best-for, CTA */}
                          <div className="lg:col-span-2 space-y-10">
                            <div className="flex gap-8 md:hidden">
                              <div className="flex items-center gap-2">
                                <Clock size={13} className="text-[#7c5fe6]" />
                                <span className="text-xs uppercase tracking-[0.15em] text-gray-300">
                                  {pkg.timeline}
                                </span>
                              </div>
                              <span className="text-xs uppercase tracking-[0.15em] text-[#7c5fe6]">
                                Custom pricing
                              </span>
                            </div>

                            <div>
                              <p className="text-[10px] uppercase tracking-[0.3em] mb-5 text-gray-500">
                                Process
                              </p>
                              <div className="space-y-0">
                                {pkg.process.map((step, si) => (
                                  <div
                                    key={step.title}
                                    className="flex gap-4 py-4 border-t border-white/10"
                                  >
                                    <span className="text-[#7c5fe6] text-xs font-mono shrink-0 mt-0.5 w-4">
                                      {si + 1}
                                    </span>
                                    <div>
                                      <p className="text-sm font-bold uppercase tracking-[0.05em] text-white">
                                        {step.title}
                                        <span className="ml-2 text-[10px] font-normal tracking-[0.1em] text-gray-500">
                                          {step.weeks}
                                        </span>
                                      </p>
                                      {step.desc && (
                                        <p className="text-xs leading-relaxed text-gray-500 mt-1">
                                          {step.desc}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                ))}
                                <div className="border-t border-white/10" />
                              </div>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#7c5fe6]">
                                  Best for
                                </p>
                                <p className="text-sm leading-relaxed text-gray-300">
                                  {pkg.bestFor}
                                </p>
                              </div>
                              {pkg.notFor && (
                                <div>
                                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-500">
                                    Not for
                                  </p>
                                  <p className="text-sm leading-relaxed text-gray-500">
                                    {pkg.notFor}
                                  </p>
                                </div>
                              )}
                            </div>

                            <Link
                              href="/contact"
                              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-500"
                            >
                              <span className="relative z-10 flex items-center gap-3">
                                Enquire About This Package <ArrowRight size={13} />
                              </span>
                              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                            </Link>
                          </div>

                          {/* Right: deliverables */}
                          <div className="lg:col-span-3">
                            <p className="text-[10px] uppercase tracking-[0.3em] mb-6 text-gray-500">
                              What You Get
                            </p>
                            <div className="space-y-8">
                              {pkg.groups.map((g, gi) => (
                                <div key={gi}>
                                  {g.heading && (
                                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white mb-4">
                                      {g.heading}
                                    </p>
                                  )}
                                  <ul className="space-y-3">
                                    {g.items.map((item) => (
                                      <li key={item} className="flex items-start gap-3">
                                        <Check size={13} className="text-[#7c5fe6] shrink-0 mt-1" />
                                        <span className="text-sm leading-snug text-gray-300">
                                          {item}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#7c5fe6] mb-10">
              FAQ
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0]"
              style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
            >
              Common{" "}
              <em className="not-italic text-[#7c5fe6]">questions.</em>
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
                  <span className="text-sm font-bold uppercase tracking-[0.07em] text-white group-hover:text-[#7c5fe6] transition-colors duration-300">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-white/15 group-hover:border-[#5b3fd6]/50 transition-colors duration-300">
                    {openFaq === i
                      ? <Minus size={12} className="text-[#7c5fe6]" />
                      : <Plus size={12} className="text-white/50 group-hover:text-[#7c5fe6]" />
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

      {/* ─── BRANDING CONCEPTS (interactive) ─── */}
      <SignsItsTime />
      <BrandProcess />
      <TouchpointsWheel />
      <StateOfBrandChart />

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
                    <span className="text-[11px] tracking-[0.25em] text-[#7c5fe6] font-mono">
                      {s.num}
                    </span>
                    <span className="text-base font-black uppercase tracking-[0.07em] text-white transition-colors duration-300">
                      {s.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="relative z-10 text-white/20 group-hover:text-[#7c5fe6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
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