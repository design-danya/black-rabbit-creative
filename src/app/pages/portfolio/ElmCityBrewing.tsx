'use client'
const logoEvolutionImg = "/assets/placeholder-portfolio.png";
const socialBannerImg = "/assets/placeholder-portfolio.png";
const toteBagImg = "/assets/placeholder-portfolio.png";
const sketchesImg = "/assets/placeholder-portfolio.png";
const burgerBoxImg = "/assets/placeholder-portfolio.png";
const mugsImg = "/assets/placeholder-portfolio.png";
const menuImg = "/assets/placeholder-portfolio.png";
const coastersImg = "/assets/placeholder-portfolio.png";
const wallSignImg = "/assets/placeholder-portfolio.png";
const pintGlassesImg = "/assets/placeholder-portfolio.png";
const whiteTeeImg = "/assets/placeholder-portfolio.png";
const greenTeeImg = "/assets/placeholder-portfolio.png";
const blackTeeImg = "/assets/placeholder-portfolio.png";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const coverImg = "/assets/placeholder-portfolio.png";
const bannerImg = "/assets/placeholder-portfolio.png";
const brandBannerStripImg = "/assets/placeholder-portfolio.png";
const contentsImg = "/assets/placeholder-portfolio.png";
const aboutBrandImg = "/assets/placeholder-portfolio.png";
const missionImg = "/assets/placeholder-portfolio.png";
const valuesImg = "/assets/placeholder-portfolio.png";
const personalityImg = "/assets/placeholder-portfolio.png";
const logoProgressionImg = "/assets/placeholder-portfolio.png";
const logosIntroImg = "/assets/placeholder-portfolio.png";
const primaryLogoImg = "/assets/placeholder-portfolio.png";
const secondaryLogoImg = "/assets/placeholder-portfolio.png";
const submarkLogoImg = "/assets/placeholder-portfolio.png";
const logoMarkImg = "/assets/placeholder-portfolio.png";
const incorrectUsageImg = "/assets/placeholder-portfolio.png";
const incorrectExamplesImg = "/assets/placeholder-portfolio.png";
const colorPaletteImg = "/assets/placeholder-portfolio.png";
const colorSwatchesImg = "/assets/placeholder-portfolio.png";
const colorUsageImg = "/assets/placeholder-portfolio.png";
const brandFontsImg = "/assets/placeholder-portfolio.png";
const fontSpecsImg = "/assets/placeholder-portfolio.png";
const fontApplicationImg = "/assets/placeholder-portfolio.png";
const fontIncorrectImg = "/assets/placeholder-portfolio.png";
const brandAssetsImg = "/assets/placeholder-portfolio.png";
const illustrationSystemImg = "/assets/placeholder-portfolio.png";
const assetUsageImg = "/assets/placeholder-portfolio.png";
const socialsPhotoImg = "/assets/placeholder-portfolio.png";
const socialsMockupImg = "/assets/placeholder-portfolio.png";
const photoGuideImg = "/assets/placeholder-portfolio.png";
const brandActionImg = "/assets/placeholder-portfolio.png";
const mockupsGridImg = "/assets/placeholder-portfolio.png";
const mockupsGrid2Img = "/assets/placeholder-portfolio.png";
const keepMeSafeImg = "/assets/placeholder-portfolio.png";

const meta = [
  { label: "Client", value: "Elm City Brewing Company" },
  { label: "Location", value: "Keene, NH" },
  { label: "Scope", value: "Comprehensive Branding Package" },
  { label: "Year", value: "2026" },
];

const brandSlides = [
  { src: coverImg, alt: "Elm City Brewing — Brand Guidelines Cover | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: contentsImg, alt: "Elm City Brewing — Table of Contents | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: aboutBrandImg, alt: "Elm City Brewing — About the Brand | Brand strategy by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: missionImg, alt: "Elm City Brewing — Mission, Vision & Purpose | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: valuesImg, alt: "Elm City Brewing — Brand Values | Brand strategy by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: personalityImg, alt: "Elm City Brewing — Brand Personality & Voice | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: logosIntroImg, alt: "Elm City Brewing — Logos & Clear Space | Logo system by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: primaryLogoImg, alt: "Elm City Brewing — Primary Logo | Logo design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: logoProgressionImg, alt: "Elm City Brewing — Logo Progression & Design Rationale | Logo design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: secondaryLogoImg, alt: "Elm City Brewing — Secondary Logo | Logo system by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: submarkLogoImg, alt: "Elm City Brewing — Submark Logo | Logo system by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: logoMarkImg, alt: "Elm City Brewing — Logo Mark | Logo design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: incorrectUsageImg, alt: "Elm City Brewing — Incorrect Logo Usage | Brand guidelines by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: incorrectExamplesImg, alt: "Elm City Brewing — Incorrect Usage Examples | Brand guidelines by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: colorPaletteImg, alt: "Elm City Brewing — Color Palette | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: colorSwatchesImg, alt: "Elm City Brewing — Color Swatches & Specs | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: colorUsageImg, alt: "Elm City Brewing — Color Usage Guidelines | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: brandFontsImg, alt: "Elm City Brewing — Brand Fonts | Typography by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: fontSpecsImg, alt: "Elm City Brewing — Font Specifications | Typography by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: fontApplicationImg, alt: "Elm City Brewing — Font Application | Typography by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: fontIncorrectImg, alt: "Elm City Brewing — Font Incorrect Usage | Brand guidelines by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: brandAssetsImg, alt: "Elm City Brewing — Brand Assets | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: illustrationSystemImg, alt: "Elm City Brewing — Illustration System | Brand assets by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: assetUsageImg, alt: "Elm City Brewing — Asset Usage | Brand guidelines by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: socialsPhotoImg, alt: "Elm City Brewing — Socials & Photography | Social media by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: socialsMockupImg, alt: "Elm City Brewing — Social Media Mockups | Social media by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: photoGuideImg, alt: "Elm City Brewing — Photography Guidelines | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: brandActionImg, alt: "Elm City Brewing — Brand in Action | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: mockupsGridImg, alt: "Elm City Brewing — Brand Mockups | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: mockupsGrid2Img, alt: "Elm City Brewing — Collateral Mockups | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
  { src: keepMeSafeImg, alt: "Elm City Brewing — Keep Me Safe | Brand guide by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" },
];

export default function ElmCityBrewing() {
  useSEO({
    title: "Elm City Brewing Brand Identity | Brewery Branding Case Study | Black Rabbit Creative, Portsmouth NH",
    description: "Complete brewery branding and brand identity system for Elm City Brewing in Portsmouth, NH — logo design, brand guidelines, taproom signage, merchandise, and environmental design by Black Rabbit Creative, New Hampshire.",
    canonical: "/work/elm-city-brewing",
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrentSlide(idx);
  }, []);

  const prev = useCallback(() => {
    setCurrentSlide(s => (s > 0 ? s - 1 : s));
  }, []);

  const next = useCallback(() => {
    setCurrentSlide(s => (s < brandSlides.length - 1 ? s + 1 : s));
  }, []);

  // Keyboard navigation for the brand-guide slideshow
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="bg-[#1F2010] text-[#E6E2D3] min-h-screen">

      {/* ── Back nav ─ */}
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#E6E2D3]/40 hover:text-[#C89B12] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Work
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="block text-[11px] uppercase tracking-[0.35em] text-[#E6E2D3]/30 mb-3">
            Comprehensive Branding
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Elm City{" "}
            <em className="not-italic text-[#C89B12]">Brewing</em>
          </h1>
        </motion.div>
      </section>

      {/* ── Meta bar ── */}
      <section className="border-t border-b border-[#E6E2D3]/8">
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {meta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                className="px-4 md:px-6 py-4 border-l border-[#E6E2D3]/8 first:border-l-0 md:first:border-l-0"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C89B12] mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[#E6E2D3]/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Banner Strip ── */}
      <section className="w-full overflow-hidden">
        <img
          src={bannerImg}
          alt="Elm City Brewing — brand overview strip | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
          className="w-full object-cover"
        />
      </section>

      {/* ── Process ── */}
      <section className="px-6 md:px-16 lg:px-24 py-4 md:py-5">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 mb-3 md:mb-4"
          >
            <div className="md:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C89B12]">
                Process
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#E6E2D3]/50 text-sm md:text-base leading-relaxed max-w-xl">
                This wasn't a rebrand from scratch. It was about finding what already worked, stripping away what didn't, and building a system that could actually hold up in the real world.
              </p>
            </div>
          </motion.div>

          {/* ── Act I: Understand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 mb-3"
          >
            <div className="md:col-span-4 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C89B12]/60 mb-1">01 — 02</p>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">Understand the foundation</h3>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed">
                Before designing anything, I audited what Elm City already had. The identity felt inconsistent, overly detailed, and hard to use. But this wasn't a "start over" situation — it was a <span className="text-[#E6E2D3]/70">refine and strengthen</span> one.
              </p>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed mt-2">
                Elm City is a local staple — built on community and approachability. The brand needed to feel welcoming, established, and simple without being generic.
              </p>
            </div>
            <div className="md:col-span-8">
              <img
                src={sketchesImg}
                alt="Early logo sketches and concept explorations for Elm City Brewing | Logo design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full rounded-sm object-cover rotate-180"
              />
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#E6E2D3]/[0.06] my-4 md:my-5" />

          {/* ── Act II: Simplify & Systematize ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 mb-3"
          >
            <div className="md:col-span-8 md:order-1 order-2">
              <img
                src={logoEvolutionImg}
                alt="Logo evolution — original vs simplified Elm City Brewing identity | Redesigned by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full rounded-sm object-cover"
              />
            </div>
            <div className="md:col-span-4 flex flex-col justify-center md:order-2 order-1">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C89B12]/60 mb-1">03 — 04</p>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">Strip it down. Build it up.</h3>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed">
                The biggest shift was restraint — removing unnecessary detail, visual noise, and inconsistencies. Then rebuilding around clean, recognizable forms that scale across menus, merch, signage, and digital.
              </p>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed mt-2">
                The goal wasn't a single logo. It was a flexible <span className="text-[#E6E2D3]/70">identity system</span> — multiple logo variations, a clear typographic hierarchy, an intentional color palette, and supporting assets that all work together.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#E6E2D3]/[0.06] my-4 md:my-5" />

          {/* ── Act III: Prove & Preserve ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 mb-3"
          >
            <div className="md:col-span-4 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C89B12]/60 mb-1">05 — 06</p>
              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">Test it. Keep what matters.</h3>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed">
                Every decision was tested against real use cases. Can this work on a beer can? Does it read from across the room? Will staff actually use this correctly? If it didn't work in the real world, it didn't make the cut.
              </p>
              <p className="text-[#E6E2D3]/40 text-sm leading-relaxed mt-2">
                The goal was never to erase Elm City's history — it was to <span className="text-[#E6E2D3]/70">distill it.</span> The final identity keeps the spirit of the original, just clearer, stronger, and built to last.
              </p>
            </div>
            <div className="md:col-span-8">
              <img
                src={burgerBoxImg}
                alt="Elm City Brewing branded burger box | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full rounded-sm object-contain max-h-[400px]"
              />
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 md:mt-7 text-center"
          >
            <p className="text-lg md:text-xl text-[#E6E2D3]/40 leading-relaxed">
              Most brands don't need more.
            </p>
            <p className="text-lg md:text-xl text-[#E6E2D3]/90 mt-1">
              They need less — done right.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Guide Slideshow ── */}
      <section id="brand-guidelines" className="px-6 md:px-16 lg:px-24 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.93] text-[#C89B12]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Brand<br />Guidelines.
            </h2>
          </motion.div>

          {/* Slide display — all slides stacked & preloaded for snappy cross-fades */}
          <div className="relative w-full overflow-hidden rounded-sm bg-[#1F2010]/60 select-none">
            {/* Sizer: first slide sets aspect ratio so the box doesn't jump */}
            <img
              src={brandSlides[0].src}
              alt=""
              aria-hidden="true"
              className="w-full block invisible"
            />
            {brandSlides.map((slide, i) => (
              <motion.img
                key={i}
                src={slide.src}
                alt={slide.alt}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                animate={{ opacity: i === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ pointerEvents: i === currentSlide ? "auto" : "none" }}
                className="absolute inset-0 w-full h-full object-cover rounded-sm"
              />
            ))}

            {/* Arrow overlays */}
            <button
              onClick={prev}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-[#1F2010]/70 backdrop-blur-sm text-[#E6E2D3]/70 hover:text-[#E6E2D3] hover:bg-[#1F2010]/90 transition-all disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              disabled={currentSlide === brandSlides.length - 1}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-[#1F2010]/70 backdrop-blur-sm text-[#E6E2D3]/70 hover:text-[#E6E2D3] hover:bg-[#1F2010]/90 transition-all disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Slide counter & progress */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#E6E2D3]/40">
              <span className="text-[#E6E2D3]/80">{String(currentSlide + 1).padStart(2, "0")}</span>
              {" / "}
              {String(brandSlides.length).padStart(2, "0")}
            </p>
            <div className="flex gap-1">
              {brandSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-6 bg-[#C89B12]"
                      : "w-1.5 bg-[#E6E2D3]/15 hover:bg-[#E6E2D3]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#E6E2D3]/30 text-xs uppercase tracking-[0.25em] mt-4"
          >
            Use the arrows to look through the guide.
          </motion.p>
        </div>
      </section>

      {/* ── Brand in Action ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#C89B12]">
              Brand in Action
            </span>
            <p className="text-[#E6E2D3]/40 text-sm leading-relaxed mt-3 max-w-md">
              A brand only matters if it works where people actually see it. Here's how Elm City shows up — from behind the bar to out in the world.
            </p>
          </motion.div>

          {/* ── Chapter 4: Out in the World ── */}
          {/* Row 1: Mugs + Black Tee */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 overflow-hidden rounded-sm"
            >
              <img src={mugsImg} alt="Elm City Brewing branded mugs | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-5 overflow-hidden rounded-sm"
            >
              <img src={blackTeeImg} alt="Elm City Brewing black t-shirt | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
          </div>

          {/* Row 2: Green Tee + Wall Sign */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 overflow-hidden rounded-sm"
            >
              <img src={greenTeeImg} alt="Elm City Brewing green t-shirt | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-7 overflow-hidden rounded-sm"
            >
              <img src={wallSignImg} alt="Elm City Brewing wall sign in Keene NH | Environmental design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
          </div>

          {/* Row 3: Pint Glasses + Tote + White Tee */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-sm"
            >
              <img src={pintGlassesImg} alt="Elm City Brewing branded pint glasses | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-sm"
            >
              <img src={toteBagImg} alt="Elm City Brewing tote bag — Drink Like a Local | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden rounded-sm"
            >
              <img src={whiteTeeImg} alt="Elm City Brewing white t-shirt | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
          </div>

          {/* Row 4: Coasters + Menu */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 overflow-hidden rounded-sm"
            >
              <img src={coastersImg} alt="Elm City Brewing branded coasters | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 overflow-hidden rounded-sm"
            >
              <img src={menuImg} alt="Elm City Brewing menu design | Print design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full max-h-[280px] object-cover" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#E6E2D3]/30 text-xs uppercase tracking-[0.3em]"
          >
            From the bar top to the street — the brand shows up everywhere it matters.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#E6E2D3] text-[#1F2010] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#1F2010]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#D14517] mb-8">
              Ready to build your brand?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Branding that builds{" "}
              <em className="not-italic text-[#C89B12]">connection.</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-6 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#1F2010] text-[#E6E2D3] px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#E6E2D3]/10 to-transparent" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 border border-[#1F2010]/20 text-[#1F2010] px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:border-[#1F2010]/60 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}