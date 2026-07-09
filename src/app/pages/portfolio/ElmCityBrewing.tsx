import logoEvolutionImg from "figma:asset/6f222756fe858988fa757a28f64eb074b6e575ae.png";
import socialBannerImg from "figma:asset/99d7e79fa4750d68decda3c0b667f6b263345ce3.png";
import toteBagImg from "figma:asset/0f320b84d56de72aab4d32aa7f9d9d3728524dba.png";
import sketchesImg from "figma:asset/bd3dd609dd0330a19b9fdd7cb16295a3c8e02584.png";
import burgerBoxImg from "figma:asset/5dfa9809b4c275b655fa39622d12524ed2656167.png";
import mugsImg from "figma:asset/601134ce891fb633c27cd62753888a783afe69a8.png";
import menuImg from "figma:asset/672a9710b7b9705f481ba6150bc4743d750a6fcf.png";
import coastersImg from "figma:asset/7365affe4888e095c7c95adfa15ba543ae3260b9.png";
import wallSignImg from "figma:asset/dc05ed0777eabfe2a20f4c9e9b1782312618c371.png";
import pintGlassesImg from "figma:asset/d9514fdc5fec4f5f3832efcd83753965963d15ac.png";
import whiteTeeImg from "figma:asset/c263200ce30e37d53f5ff6db026a4e526913d414.png";
import greenTeeImg from "figma:asset/01f861e418bf778bb42369a4719c8d450abd3c07.png";
import blackTeeImg from "figma:asset/e7a5c9433856757800295d1d2105caab3566ea9c.png";
import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

import coverImg from "figma:asset/75476b07de9f91eda62231c76391bf9a7b54bbd3.png";
import bannerImg from "figma:asset/631fbb173f6600af837c487e7380c1b29ad387d9.png";
import brandBannerStripImg from "figma:asset/26a23fde11cf3e61421bee420f7fcdf2c0ec8790.png";
import contentsImg from "figma:asset/0aa98a8dbd9046ce68cc36f47d7f8f78013ccfbd.png";
import aboutBrandImg from "figma:asset/5072aa48ba337ed7561bbd54f1923597c80fa5d4.png";
import missionImg from "figma:asset/b6f6023dc0ae08aff08c78dd0ed113886e33f000.png";
import valuesImg from "figma:asset/215c0b38142296867fd56792a9478434a0bd3dc9.png";
import personalityImg from "figma:asset/f401f0d41912b14f32253500a307df18a8b9af2c.png";
import logoProgressionImg from "figma:asset/b64d2d805f14d8b01696766589385679e0a547a0.png";
import logosIntroImg from "figma:asset/0dafdf7ae8cf8a1873ad3cf8b42e1ceee3f1718d.png";
import primaryLogoImg from "figma:asset/1c1efd84bbfdf345d9b63bd38bd6c9a477bc9990.png";
import secondaryLogoImg from "figma:asset/4c84cea0cb882dbb2a46c9a3a0706619a1901baf.png";
import submarkLogoImg from "figma:asset/5da8af26a417b1d7b8095cf23a3f9860b17bba77.png";
import logoMarkImg from "figma:asset/9934c246071b51822c4d944d0e5465ada83207e4.png";
import incorrectUsageImg from "figma:asset/baf173419cc5798161d6178f577d6e5930ffb12a.png";
import incorrectExamplesImg from "figma:asset/d8de10352c9599947b8af087640212be24ab7cae.png";
import colorPaletteImg from "figma:asset/b93ec8667a2b689db2ed4dc2e43f1323207bf000.png";
import colorSwatchesImg from "figma:asset/7b78c70046b243643bb192e07bc1b6af35ee68f6.png";
import colorUsageImg from "figma:asset/cfc072174726561234f6d479103066a3c664c9e8.png";
import brandFontsImg from "figma:asset/4d13d1a63bf5d28ebd7761427cac2e31e920fe90.png";
import fontSpecsImg from "figma:asset/d4e87f7bfc38a13ca7e123bcce3287ff6b5f1c47.png";
import fontApplicationImg from "figma:asset/4a80e3cfc75c7cbea98dec6979cc68850011112d.png";
import fontIncorrectImg from "figma:asset/a73d1a82ecfb4c8edd176a740be4356ea66a35ef.png";
import brandAssetsImg from "figma:asset/e157139dcc123fc3409f16501512076f33a867a6.png";
import illustrationSystemImg from "figma:asset/50db33fa9edfb2480899c59bf675b453d48c7746.png";
import assetUsageImg from "figma:asset/acb3ef49777b6ffb15d6c2f8374bb5a344abac69.png";
import socialsPhotoImg from "figma:asset/fec80ec102d65fb439d58bc2d6228c60460d66d4.png";
import socialsMockupImg from "figma:asset/faa9899e22899b54f4cab74fac5df4552ac69054.png";
import photoGuideImg from "figma:asset/6394e4f72ec52d57d9276824c24343bf9b47279a.png";
import brandActionImg from "figma:asset/f7e123f071199359e7515452e017bb9af26adca6.png";
import mockupsGridImg from "figma:asset/6adfb80d05db69570f5834c7e7a4992a22844a96.png";
import mockupsGrid2Img from "figma:asset/2a480d17f34915d27e5a6c2efac7b74cf89d41c7.png";
import keepMeSafeImg from "figma:asset/4868a6d5ce73a0c1b9b9d5db3f4557ae0c655a11.png";

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
          to="/work"
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
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#1F2010] text-[#E6E2D3] px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#E6E2D3]/10 to-transparent" />
            </Link>
            <Link
              to="/work"
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