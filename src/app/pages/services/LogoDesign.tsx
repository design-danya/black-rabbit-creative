import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { ArrowRight, ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import seatedRabbit from "figma:asset/fd0fa931e00acfa6c15863207bc0a21f97710af2.png";
import kapiloffLogo from "figma:asset/dac533663b508268f043b4fa54db52f02c04b87c.png";
import hendricksLogo from "figma:asset/f1c91b1c74eea1db011e92c7ccbc33ab4d2367e3.png";
import novaLogo from "figma:asset/e312a94d37336f32774b6a79ae7fe18a0aa10c91.png";
import wildMocktailsLogo from "figma:asset/685fa1794cb357a4dcf82c129c9189b4da1af472.png";
import basicBalanceLogo from "figma:asset/700e6be5ebf8a0e2924550b263c23c2bf13325a0.png";
import sequoiaLogo from "figma:asset/ee86d18b3d5cd3d334334dace81a750418f87f47.png";
import calentonLogo from "figma:asset/df5caeefc604f30141dac9c5cfa2e7bfeccfa457.png";
import nyfbLogo from "figma:asset/b9f2ef1f88bc1f9be9a6218d97ac0ffd61ac279a.png";
import lobsterLabLogo from "figma:asset/9c86fcd1543696ac99e58187ed9599e5c1d65a16.png";
import shamrockLogo from "figma:asset/47ebd0de1bd734fa7b804aaf2bbfd9feb5cabf05.png";
import monadnockLogo from "../../../imports/MB_RGB_Primary_Mt_Troy_26.png";

const logos = [
  { src: monadnockLogo,     alt: "Monadnock Berries logo",                        name: "Monadnock Berries",         year: "2026", maxW: "360px", maxH: "260px", nudge: "0px"   },
  { src: kapiloffLogo,      alt: "Kapiloff Insurance logo",                       name: "Kapiloff Insurance",       year: "2023", maxW: "432px", maxH: "240px", nudge: "0px"   },
  { src: wildMocktailsLogo, alt: "Wild Mocktails logo",                           name: "Wild Mocktails",            year: "2025", maxW: "408px", maxH: "240px", nudge: "0px"   },
  { src: hendricksLogo,     alt: "Hendrick's Lutherie logo",                      name: "Hendrick's Lutherie",       year: "2025", maxW: "360px", maxH: "240px", nudge: "0px"   },
  { src: novaLogo,          alt: "Nova Dermatology Specialists logo",             name: "Nova Dermatology",          year: "2024", maxW: "520px", maxH: "240px", nudge: "0px"   },
  { src: basicBalanceLogo,  alt: "Basic Balance Acupuncture logo",                name: "Basic Balance Acupuncture", year: "2025", maxW: "360px", maxH: "240px", nudge: "0px"   },
  { src: sequoiaLogo,       alt: "Sequoia Sex Toys logo",                         name: "Sequoia Sex Toys",          year: "2024", maxW: "360px", maxH: "240px", nudge: "0px"   },
  { src: calentonLogo,      alt: "Calentón Mexican Hot Sauce logo",               name: "Calentón Hot Sauce",        year: "2025", maxW: "320px", maxH: "240px", nudge: "0px"   },
  { src: nyfbLogo,          alt: "New York Fresh Bagels logo",                    name: "New York Fresh Bagels",     year: "2025", maxW: "720px", maxH: "360px", nudge: "-40px" },
  { src: lobsterLabLogo,    alt: "Lobster Lab logo",                              name: "Lobster Lab",               year: "2024", maxW: "300px", maxH: "240px", nudge: "0px"   },
  { src: shamrockLogo,      alt: "Cheshire Children's Museum Shamrock 5K logo",  name: "Cheshire Children's Museum — Shamrock 5K & Family Day", year: "2025", maxW: "300px", maxH: "240px", nudge: "0px" },
];

export default function LogoDesign() {
  useSEO({
    title: "Logo Design | Black Rabbit Creative, Portsmouth NH",
    description: "Custom logo design by Black Rabbit Creative in Portsmouth, New Hampshire — distinctive, versatile marks engineered to become the lasting face of your brand across New England.",
    canonical: "/services/logo-design",
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDir, setSlideDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setSlideDir(1);
    setActiveSlide((prev) => (prev + 1) % logos.length);
  }, []);

  const prev = useCallback(() => {
    setSlideDir(-1);
    setActiveSlide((prev) => (prev - 1 + logos.length) % logos.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) next();
    }, 4000);
    return () => clearInterval(interval);
  }, [next, paused]);

  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[#060606]">

        {/* Text: aligned to same grid as content below */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-14 lg:px-20 min-h-[80vh] flex flex-col justify-between pt-28 pb-10">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
            >
              <ArrowLeft size={11} /> All Services
            </Link>
          </div>

          <div className="lg:max-w-[45%]">
            <motion.span
              className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Logo Design
            </motion.span>

            <motion.h1
              className="font-black uppercase tracking-[0.07em] leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Distinctive marks<br />
              built with{" "}
              <em className="not-italic text-[#5b3fd6]">purpose.</em>
            </motion.h1>

            <motion.p
              className="text-gray-400 leading-[1.9] max-w-[400px] mb-10"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Simple, memorable, and built to last across every medium — from a business card to a billboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-9 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start a Project <ArrowRight size={13} />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </motion.div>
          </div>

          <div />
        </div>

        {/* Right: rabbit — desktop */}
        <motion.div
          className="hidden lg:block absolute right-0 top-0 w-[64%] h-full pointer-events-none select-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 12, times: [0, 0.12, 0.88, 1], repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060606] to-transparent z-10" />
          <img
            src={seatedRabbit}
            alt="Black Rabbit Creative mascot — logo design studio, Portsmouth NH, New Hampshire, New England"
            className={`h-full w-full object-contain mix-blend-lighten`}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#060606_92%)] z-10" />
        </motion.div>

        {/* Rabbit — mobile only, bottom-right corner */}
        <motion.div
          className="lg:hidden absolute bottom-0 right-[-30px] w-[220px] sm:w-[280px] pointer-events-none select-none z-10 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: 12, times: [0, 0.12, 0.88, 1], repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <img
            src={seatedRabbit}
            alt="Black Rabbit Creative mascot — logo design services, Portsmouth NH, New Hampshire, New England"
            className="h-full w-full object-contain mix-blend-lighten"
          />
        </motion.div>
      </section>

      {/* ─── WHAT IT IS + SELECTED WORK ─── */}
      <section className="bg-white text-[#060606]">
        <div className="px-6 md:px-14 lg:px-20 py-20 md:py-28 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

            {/* Left: copy */}
            <div>
              <motion.h3
                className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-12"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                A smart place{" "}
                <em className="not-italic text-[#5b3fd6]">to begin.</em>
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 gap-x-10 gap-y-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-gray-500">
                  Not every business is ready for a full brand identity — but that doesn't mean you should settle for generic design. A professionally crafted logo is a smart place to begin.
                </p>
                <p className="text-gray-500">
                  It establishes the tone for your future branding, marketing, and design work — which is why a thoughtful, strategic approach from the start makes a meaningful difference.
                </p>
                <p className="text-gray-500">
                  Your logo is often the first visual touchpoint for your brand. Done well, it creates recognition, builds credibility, and sets the foundation for everything that follows.
                </p>
                <p className="text-gray-500">
                  At Black Rabbit Creative, every logo is designed to be distinctive, versatile, and built to last — combining custom typography, considered colour, and refined visual detail.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  to="/work/monadnock-berries"
                  className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#5b3fd6] hover:text-[#060606] transition-colors duration-300"
                >
                  See a Logo Case Study — Monadnock Berries
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* Right: slideshow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">Selected Work</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#060606]/25 font-mono">
                  {String(activeSlide + 1).padStart(2, "0")} / {String(logos.length).padStart(2, "0")}
                </span>
              </div>

              {/* Slideshow */}
              <div
                className="relative overflow-hidden bg-[#f7f7f7] select-none"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Logo stage */}
                <div className="relative flex items-center justify-center" style={{ minHeight: "320px" }}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeSlide}
                      className="absolute inset-0 flex items-center justify-center px-12 py-12"
                      initial={{ opacity: 0, x: slideDir * 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: slideDir * -60 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={logos[activeSlide].src}
                        alt={logos[activeSlide].alt}
                        className="object-contain"
                        style={{ maxWidth: logos[activeSlide].maxW, maxHeight: logos[activeSlide].maxH, width: "100%", transform: `translateY(${logos[activeSlide].nudge})` }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Prev / Next */}
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-[#060606]/10 bg-white/80 backdrop-blur-sm hover:border-[#5b3fd6]/50 hover:text-[#5b3fd6] text-[#060606]/40 transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-[#060606]/10 bg-white/80 backdrop-blur-sm hover:border-[#5b3fd6]/50 hover:text-[#5b3fd6] text-[#060606]/40 transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight size={14} />
                </button>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#060606]/6">
                  {!paused && (
                    <motion.div
                      key={`bar-${activeSlide}`}
                      className="h-full bg-[#5b3fd6]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.5, ease: "linear" }}
                    />
                  )}
                </div>
              </div>

              {/* Caption bar */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${activeSlide}`}
                  className="flex items-center justify-between bg-[#060606] px-5 py-3.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/55">{logos[activeSlide].name}</span>
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#5b3fd6]">{logos[activeSlide].year}</span>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2.5 mt-5">
                {logos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setSlideDir(i > activeSlide ? 1 : -1); setActiveSlide(i); }}
                    className="transition-all duration-300"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        i === activeSlide
                          ? "w-5 h-1.5 bg-[#5b3fd6]"
                          : "w-1.5 h-1.5 bg-[#060606]/15 hover:bg-[#060606]/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── LOGO PACKAGE ─── */}
      <section className="bg-[#060606] text-white px-6 md:px-14 lg:px-20 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20"
          >
            <div className="lg:col-span-5">
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
                Logo Package
              </span>
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[0.95]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
              >
                Your Brand's{" "}
                <em className="not-italic text-[#5b3fd6]">Starting Point.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end gap-6">
              <p className="text-lg md:text-xl leading-relaxed text-white/70">
                A focused three-stage process to get you a strong, ownable logo — without a full brand
                rebuild. Same thinking we bring to comprehensive projects, scoped to fit a logo.
              </p>
              <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-white/50">
                <span>
                  Total Timeframe:{" "}
                  <span className="text-white">4 – 6 weeks</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Three stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-16">
            {[
              {
                num: "01",
                title: "Mood Boards",
                weeks: "2 weeks",
                body:
                  "We explore 2–3 distinct strategic directions for your brand before any logo sketches happen. Each direction tells a different story about who you are.",
              },
              {
                num: "02",
                title: "Logo Design Presentation",
                weeks: "2 weeks",
                body:
                  "You'll receive 3 logo variations (full mark, icon, horizontal) in all file formats (AI, PNG, PDF), along with font pairings and color palette guidance. Each presentation includes 2 rounds of revisions.",
              },
              {
                num: "03",
                title: "Offboarding",
                weeks: "1 week",
                body:
                  "Final files, usage guidelines, and you're set to go.",
              },
            ].map((stage, i) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#060606] p-8 md:p-10 flex flex-col gap-4"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-[#5b3fd6] font-mono">
                    Stage {stage.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {stage.weeks}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.05em] leading-tight">
                  {stage.title}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-white/60">
                  {stage.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What you get + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
                What You Get
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "3 logo variations (full, icon, horizontal)",
                  "All file formats (AI, PNG, PDF)",
                  "Font pairings & color palette",
                  "2 revision rounds included",
                  "Ready-to-use brand assets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/75 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0 bg-[#5b3fd6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 border border-white/10 p-6 md:p-8 rounded-sm bg-white/[0.03] flex flex-col gap-5"
            >
              <p className="text-sm md:text-[15px] leading-relaxed text-white/70">
                This package is perfect if you already know your brand direction and just need a
                strong, ownable mark. If you need deeper brand strategy first, consider our{" "}
                <Link
                  to="/services/brand-identity"
                  className="text-[#5b3fd6] hover:text-white underline underline-offset-4 decoration-[#5b3fd6]/40 hover:decoration-white transition-colors duration-300"
                >
                  full brand identity package
                </Link>.
              </p>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/40 transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enquire About This Package <ArrowRight size={13} />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="bg-[#060606] text-white px-6 md:px-14 lg:px-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">Other Services</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {[
              { num: "01", label: "Brand Identity Design", to: "/services/brand-identity" },
              { num: "03", label: "Packaging Design",      to: "/services/packaging-design" },
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
                  to={s.to}
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