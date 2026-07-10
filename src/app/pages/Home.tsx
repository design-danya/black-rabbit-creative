'use client'
const rabbitEars = "/assets/placeholder-portfolio.png";
const graniteRootsImg = "/assets/placeholder-portfolio.png";
const kapiloffLogoMark = "/assets/placeholder-portfolio.png";
const basicBalanceThumb = "/assets/placeholder-portfolio.png";
const novaDermThumb = "/assets/placeholder-portfolio.png";
const hendricksThumb = "/assets/placeholder-portfolio.png";
const cheshireThumb = "/assets/placeholder-portfolio.png";
const keenePrideThumb = "/assets/placeholder-portfolio.png";
const printMaterialsThumb = "/assets/placeholder-portfolio.png";
const sequoiaThumb = "/assets/placeholder-portfolio.png";
const badgerBalmThumb = "/assets/placeholder-portfolio.png";
const lobsterLabThumb = "/assets/placeholder-portfolio.png";
const booksThumb = "/assets/placeholder-portfolio.png";
const elmCityThumb = "/assets/placeholder-portfolio.png";
import monadnockBerriesThumb from "../../imports/Untitled-8.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useSEO } from "../components/useSEO";

const RABBIT_IMG = "https://www.blackrabbit-creative.com/_assets/v11/8c74470a05247f1f19f836e03a733eda74c86ffc.png";
const services = [
  {
    name: "Full Brand Identity",
    num: "01",
    desc: "Strategic brand systems built from insight to execution — positioning, voice, and visual identity",
  },
  {
    name: "Logo Design",
    num: "02",
    desc: "Distinctive, precise marks engineered to become lasting icons",
  },
  {
    name: "Packaging Design",
    num: "03",
    desc: "Shelf-stopping packaging with strategic intent and premium craft",
  },
  {
    name: "Graphic Design & Illustration",
    num: "04",
    desc: "High-impact print and digital design with clarity and character",
  },
];

const projects = [
  {
    title: "Monadnock Berries",
    category: "Logo Design",
    image: monadnockBerriesThumb,
    year: "2026",
    href: "/work/monadnock-berries",
    tag: "New",
  },
  {
    title: "Elm City Brewing",
    category: "Brand Identity",
    image: elmCityThumb,
    year: "2026",
    href: "/work/elm-city-brewing",
    tag: "New",
  },
  {
    title: "Granite Roots Brewing",
    category: "Packaging",
    image: graniteRootsImg,
    year: "2025",
    href: "/work/granite-roots-brewing",
    award: "GDUSA 2025",
  },
  {
    title: "Kapiloff Insurance",
    category: "Brand Identity",
    image: kapiloffLogoMark,
    year: "2025",
    href: "/work/kapiloff-insurance",
  },
  {
    title: "Basic Balance Acupuncture",
    category: "Brand Identity",
    image: basicBalanceThumb,
    year: "2025",
    href: "/work/basic-balance-acupuncture",
  },
  {
    title: "Nova Dermatology",
    category: "Brand Identity",
    image: novaDermThumb,
    year: "2024",
    href: "/work/nova-dermatology",
  },
  {
    title: "Hendrick's Lutherie",
    category: "Brand Identity",
    image: hendricksThumb,
    year: "2024",
    href: "/work/hendricks-lutherie",
  },
  {
    title: "Cheshire Children's Museum",
    category: "Brand Identity",
    image: cheshireThumb,
    year: "2024",
    href: "/work/cheshire-childrens-museum",
  },
  {
    title: "Keene Pride Festival",
    category: "Graphic Design",
    image: keenePrideThumb,
    year: "2024",
    href: "/work/keene-pride-festival",
  },
  {
    title: "Print Materials",
    category: "Graphic Design",
    image: printMaterialsThumb,
    year: "2023 — 2025",
    href: "/work/print-materials",
  },
  {
    title: "Sequoia Sex Toys",
    category: "Branding",
    image: sequoiaThumb,
    year: "2024",
    href: "/work/sequoia-sex-toys",
  },
  {
    title: "Badger Balm",
    category: "Packaging",
    image: badgerBalmThumb,
    year: "2025",
    href: "/work/badger-balm",
  },
  {
    title: "Case Studies",
    category: "Case Study",
    image: lobsterLabThumb,
    year: "2024",
    href: "/work/case-studies",
  },
  {
    title: "Books",
    category: "Book Design",
    image: booksThumb,
    year: "2025",
    href: "/work/books",
  },
  // Meridian Co. entry removed
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  useSEO({
    title: "Branding Agency Portsmouth NH Keene NH Providence RI Branding Services",
    description: "Black Rabbit Creative: Branding Agency offering Branding Services, Website Design Agency, Logo Design Company, Graphic Design Agency in Portsmouth, NH, Portsmouth, NH, Providence, RI.",
    canonical: "/",
    ogTitle: "Branding Agency Portsmouth NH Keene NH Providence RI Branding Services",
    ogDescription: "Black Rabbit Creative: Branding Agency offering Branding Services, Website Design Agency, Logo Design Company, Graphic Design Agency in Portsmouth, NH, Portsmouth, NH, Providence, RI.",
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [heroHeight, setHeroHeight] = useState(1);

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight || 1);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollYProgress = useTransform(scrollY, [0, heroHeight], [0, 1]);

  // Ears for next section - connected to overall page scroll or hero visibility
  const earsY = useTransform(scrollYProgress, [0.8, 1], [60, 0]);
  const earsOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);

  return (
    <div className="relative bg-white selection:bg-white selection:text-black">
      {/* ─── HERO ─── */}
      {/* Removed sticky container and complex scroll transforms.
          Now a standard flex column layout with simple entrance animations. */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 md:px-12 pt-40 md:pt-12 pb-12 overflow-visible"
      >
        {/* Subtle background blob (optional, as per request to remove bubble but keep depth) */}
        {/* Using a very subtle dark gradient to break the pure black flatness if needed, but keeping it minimal */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(91,63,214,0.15) 0%, transparent 70%)" }} />
        </div>

        {/* MAIN LAYOUT GRID */}
        {/* Reduced max-width and gap to bring elements closer together */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center h-full">
          
          {/* LEFT: RABBIT */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 pr-0 lg:-mr-16 z-0">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ 
                 opacity: [0, 1, 1, 0.3, 0] 
               }}
               transition={{ 
                 duration: 12, 
                 times: [0, 0.1, 0.75, 0.9, 1],
                 repeat: Infinity,
                 ease: "easeInOut" 
               }}
               className="relative w-full max-w-none will-change-opacity scale-[1.3] origin-center lg:translate-x-16"
            >
              <div className="relative w-full aspect-square flex items-center justify-center" style={{ maskImage: "radial-gradient(ellipse 60% 60% at center, black 35%, transparent 65%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at center, black 35%, transparent 65%)" }}>
                 <img
                   src={RABBIT_IMG}
                   alt="Black Rabbit Creative mascot — branding and design studio, Portsmouth NH, New Hampshire, New England"
                   className="w-full h-full object-contain mix-blend-lighten" 
                   loading="eager"
                   width={800}
                   height={800}
                   decoding="async"
                 />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: TEXT & CTA */}
          {/* Left aligned text as requested, items-start to align block left */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 pl-0 lg:pl-0 z-10 relative">
            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col text-4xl md:text-6xl lg:text-7xl xl:text-[6rem] uppercase tracking-[0.07em] font-black leading-[0.95] mb-8 pt-[0.15em]"
            >
              <span className="sr-only">Branding Agency in Portsmouth, NH | Branding Services, Website Design Agency, Logo Design Company, Graphic Design Agency, Creative Agency, Packaging Design Agency, Rebranding Services &amp; Brand Identity Design Services for Small Businesses</span>
              <span className="text-white" aria-hidden="true">Distinct</span>
              <span className="text-[#5b3fd6]" aria-hidden="true">By</span>
              <span className="text-white" aria-hidden="true">Design</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start gap-10 max-w-lg ml-2"
            >
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                A brand identity, logo design, graphic design, and packaging design studio in Portsmouth, NH — specializing in product-based businesses, and visual identity systems for bold brands across New England.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link
                  to="/work"
                  className="group relative w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Work
                    <ArrowRight size={14} />
                  </span>
                  {/* Liquid shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
                <Link
                  to="/contact"
                  className="group relative w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get in Touch <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
           <span className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6]">
              Scroll
           </span>
           <div className="h-12 w-px bg-gradient-to-b from-[#5b3fd6] to-transparent opacity-50" />
        </motion.div>
      </section>

      {/* ─── SECTION 2: BRAND PHILOSOPHY ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 pt-16 pb-14 md:pt-[5.5rem] md:pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-12"
          >
            Studio Philosophy
          </motion.span>

          {/* ── Two-column editorial block ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-14 md:mb-20">

            {/* LEFT — Headline */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32 self-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)" }}
              >
                Stand-out branding{" "}
                <em className="not-italic text-[#5b3fd6]">isn't optional</em>{" "}
                for serious brands.
              </h2>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 bg-[#060606]/80 backdrop-blur-xl border border-black/10 text-white px-12 py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-[#060606] hover:border-black/30 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)]"
              >
                <span className="relative z-10">Enquire</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </Link>
            </motion.div>

            {/* RIGHT — Body copy */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-gray-500 text-[0.95rem] leading-[1.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <p>
                In today's competitive landscape, a strong product alone isn't enough. More businesses than ever are competing for the same customers' attention.
              </p>
              <p>
                To succeed, your brand needs to be{" "}
                <span className="text-[#060606] font-semibold">noticed — remembered — and recognized.</span>
              </p>
              <p>
                At Black Rabbit Creative, we believe distinctive brands don't happen by accident. Like the black rabbit itself — a symbol of curiosity, agility, and emergence — strong brands stand out because every detail is intentional.
              </p>
              <p>
                That means going beyond surface-level design. You need branding and packaging with clarity and presence — work that stops the scroll, captures attention online and on the shelf, and communicates your brand's true value.
              </p>
            </motion.div>
          </div>

          {/* ── Services grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 mb-14">
            {[
              {
                num: "01",
                label: "Brand Identity Design",
                desc: "Full brand systems — strategy, positioning, voice, and visual identity built to last.",
                to: "/services/brand-identity",
              },
              {
                num: "02",
                label: "Logo Design",
                desc: "Precise, distinctive marks engineered to become the lasting face of your brand.",
                to: "/services/logo-design",
              },
              {
                num: "03",
                label: "Packaging",
                desc: "Shelf-stopping packaging that commands attention and earns trust at first glance.",
                to: "/services/packaging-design",
              },
              {
                num: "04",
                label: "Graphic Design & Illustration",
                desc: "High-impact print and digital design — clarity and character in every deliverable.",
                to: "/services/graphic-design",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={item.to}
                  className="group relative overflow-hidden flex flex-col justify-between bg-white hover:bg-[#060606] transition-colors duration-400 p-8 md:p-10 h-full min-h-[200px]"
                >
                  <img
                    src={rabbitEars}
                    alt="Black Rabbit Creative decorative rabbit ears — design studio, Portsmouth NH, New Hampshire, New England"
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-[70%] opacity-0 group-hover:opacity-[0.15] group-hover:translate-y-[62%] transition-all duration-1000 ease-out invert pointer-events-none select-none"
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#5b3fd6] group-hover:text-[#7c5fe6] transition-colors">
                      {item.num}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-black/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <p
                      className="font-black uppercase tracking-[0.07em] text-[#060606] group-hover:text-white transition-colors duration-300 mb-3"
                      style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-[0.8rem] text-gray-400 group-hover:text-white/50 leading-relaxed transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SELECTED WORKS ─── */}
      <section className="bg-neutral-950 text-white py-[5.5rem] md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#5b3fd6] block mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.07em]">
                Selected Works
              </h2>
            </motion.div>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#5b3fd6] hover:text-white transition-colors"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {/* 4-square uniform grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <Link href={project.href ?? "/work"} className="group block relative overflow-hidden aspect-square">
                  {/* Image — greyscale → colour */}
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} — portfolio project by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England`}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    width={600}
                    height={600}
                    loading="lazy"
                  />

                  {/* Permanent dark vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Info — sits at bottom, slides up slightly on hover */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">
                      {project.category}
                    </span>
                    <div className="flex items-end justify-between">
                      <h3 className="uppercase tracking-[0.06em] text-white leading-tight text-[0.75rem] sm:text-[0.85rem] lg:text-[0.95rem]">
                        {project.title}
                      </h3>
                      <span className="text-[10px] text-white/30 ml-3 flex-shrink-0">{project.year}</span>
                    </div>
                  </div>

                  {/* Corner arrow — appears on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                  {/* Award badge */}
                  {"award" in project && (project as any).award && (
                    <div className="absolute top-4 left-4 bg-[#5b3fd6]/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white">
                      ★ {(project as any).award}
                    </div>
                  )}
                  {/* Tag badge */}
                  {"tag" in project && (project as any).tag && (
                    <div className="absolute top-4 left-4 bg-[#5b3fd6]/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white">
                      {(project as any).tag}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] border-b border-white pb-1"
            >
              View All Projects <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}