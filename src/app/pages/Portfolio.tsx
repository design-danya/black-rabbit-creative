import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { useSEO } from "../components/useSEO";
import graniteRootsImg from "figma:asset/50e23837cf920f2e5faee0e0a19273c2909f747d.png";
import kapiloffLogoNew from "figma:asset/9f3b646f87bf88255b78b61243df754e1cc4a02a.png";
import basicBalanceThumb from "figma:asset/c2966b48a7c59fc377cbe7b0bbefc3111f13f42b.png";
import novaDermThumb from "figma:asset/e70fdcb5ccc84272667c059482c68732ec2f27a7.png";
import hendricksThumb from "figma:asset/ce45cde349dc30f5f89c11e2c69e3ff0a5d834c7.png";
import cheshireThumb from "figma:asset/8dc83a7b88b02077a8109e5054207db15a94c7bb.png";
import keenePrideThumb from "figma:asset/80d637756726e86dd3d855c41a7fac9b5da2473a.png";
import printMaterialsThumb from "figma:asset/27b429ff9bf6ae77c400a58d4198a2382953e9e5.png";
import sequoiaThumb from "figma:asset/6a9e50f522155b75baf5e7ef9d9c159116527921.png";
import badgerBalmThumb from "figma:asset/24b92cae45ca047c0ff92c7910f024424d35b8af.png";
import lobsterLabThumb from "figma:asset/eb19e6f509c3380dcf33a87840d5d7aad8341860.png";
import hitchhikersThumb from "figma:asset/7247983c9ca5f40235ae9b6a57322f2241c68aa8.png";
import elmCityThumb from "figma:asset/dc05ed0777eabfe2a20f4c9e9b1782312618c371.png";
import monadnockBerriesThumb from "../../imports/Untitled-8.png";

const CATEGORIES = ["All", "Branding", "Logo Design", "Packaging", "Graphic Design", "Case Studies", "Books"];

const projects = [
  {
    id: 14,
    title: "Monadnock Berries",
    category: "Logo Design",
    desc: "Logo identity system for a legacy berry farm positioning as a curated estate experience.",
    image: monadnockBerriesThumb,
    href: "/work/monadnock-berries",
    year: "2026",
    tag: "New",
  },
  {
    id: 13,
    title: "Elm City Brewing",
    category: "Branding",
    desc: "Comprehensive brand identity system for Keene's beloved hometown brewery.",
    image: elmCityThumb,
    href: "/work/elm-city-brewing",
    year: "2026",
    tag: "New",
  },
  {
    id: 1,
    title: "Granite Roots Brewing",
    category: "Packaging",
    desc: "Award-winning beer label rooted in local heritage.",
    image: graniteRootsImg,
    href: "/work/granite-roots-brewing",
    award: "GDUSA 2025",
    year: "2025",
  },
  {
    id: 2,
    title: "Kapiloff Insurance",
    category: "Branding",
    desc: "Legacy brand modernization for a new generation.",
    image: kapiloffLogoNew,
    href: "/work/kapiloff-insurance",
    year: "2025",
    lightCard: true,
  },
  {
    id: 3,
    title: "Basic Balance Acupuncture",
    category: "Branding",
    desc: "A calm, trust-building identity for a modern acupuncture practice.",
    image: basicBalanceThumb,
    href: "/work/basic-balance-acupuncture",
    year: "2025",
  },
  {
    id: 4,
    title: "Nova Dermatology",
    category: "Branding",
    desc: "Sophisticated medical brand identity built on trust and clarity.",
    image: novaDermThumb,
    href: "/work/nova-dermatology",
    year: "2024",
  },
  {
    id: 5,
    title: "Hendrick's Lutherie",
    category: "Branding",
    desc: "Heritage-focused brand transformation for a specialist guitar repair shop.",
    image: hendricksThumb,
    href: "/work/hendricks-lutherie",
    year: "2024",
  },
  {
    id: 6,
    title: "Cheshire Children's Museum",
    category: "Branding",
    desc: "Brand solidification, social media strategy, and event marketing for a community museum.",
    image: cheshireThumb,
    href: "/work/cheshire-childrens-museum",
    year: "2024",
    lightCard: true,
  },
  {
    id: 7,
    title: "Keene Pride Festival",
    category: "Graphic Design",
    desc: "Bold festival merchandise celebrating community, visibility, and pride.",
    image: keenePrideThumb,
    href: "/work/keene-pride-festival",
    year: "2024",
    lightCard: true,
  },
  {
    id: 8,
    title: "Print Materials",
    category: "Graphic Design",
    desc: "Event posters, outdoor signage, banners, and merchandise for local brands and organizations.",
    image: printMaterialsThumb,
    href: "/work/print-materials",
    year: "2023 — 2025",
  },
  {
    id: 9,
    title: "Sequoia Sex Toys",
    category: "Packaging",
    desc: "Full brand identity and collateral system for an award-winning wooden sex toy company.",
    image: sequoiaThumb,
    href: "/work/sequoia-sex-toys",
    year: "2024",
  },
  {
    id: 10,
    title: "Badger Balm",
    category: "Packaging",
    desc: "Face oil line packaging support for an established natural skincare brand.",
    image: badgerBalmThumb,
    href: "/work/badger-balm",
    year: "2025",
  },
  {
    id: 11,
    title: "Case Studies",
    category: "Case Studies",
    desc: "Self-initiated practice briefs — full brand systems built from concept to completion.",
    image: lobsterLabThumb,
    href: "/work/case-studies",
    year: "2024",
  },
  {
    id: 12,
    title: "Books",
    category: "Books",
    desc: "Book cover redesigns — reimagining iconic covers through modern design sensibilities.",
    image: hitchhikersThumb,
    href: "/work/books",
    year: "2025",
  },
];

export default function Portfolio() {
  useSEO({
    title: "Portfolio | Brand Identity, Packaging & Logo Design Work | Black Rabbit Creative, Portsmouth NH",
    description: "Browse the portfolio of Black Rabbit Creative — brand identity, logo design, packaging design, and graphic design for product-based businesses and bold brands across New Hampshire and New England.",
    canonical: "/work",
  });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-[#060606] text-white min-h-screen pt-28 pb-24">

      {/* ── Header ── */}
      <div className="px-6 md:px-16 lg:px-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
            Selected Work
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] mb-10"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            Our Work
          </h1>
        </motion.div>

        {/* ── Category Filter ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-4 sm:px-6 py-2 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300 overflow-hidden group"
              style={{
                borderColor: active === cat ? "#5b3fd6" : "rgba(255,255,255,0.15)",
                backgroundColor: active === cat ? "#5b3fd6" : "transparent",
                color: active === cat ? "#fff" : "rgba(255,255,255,0.45)",
              }}
            >
              <span className="relative z-10">{cat}</span>
              {active !== cat && (
                <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Square Grid ── */}
      <div className="px-6 md:px-16 lg:px-24">
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.04]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.href ? (
                  <Link to={project.href} className="group block relative overflow-hidden aspect-square">
                    <ProjectCardInner project={project} />
                  </Link>
                ) : (
                  <div className="group relative overflow-hidden aspect-square cursor-default">
                    <ProjectCardInner project={project} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 text-white/20 uppercase tracking-[0.25em] text-sm"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProjectCardInner({ project }: { project: typeof projects[number] }) {
  const isLight = (project as any).lightCard;

  return (
    <>
      {/* Background */}
      {isLight ? (
        <div className="absolute inset-0 bg-[#f0f3fa] transition-colors duration-700 group-hover:bg-[#e4eaf5]" />
      ) : null}

      {/* Image — greyscale → colour */}
      <ImageWithFallback
        src={project.image}
        alt={`${project.title} — portfolio project by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England`}
        className={`absolute transition-all duration-700 ${
          isLight
            ? "inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-contain group-hover:scale-105 grayscale group-hover:grayscale-0"
            : "inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105"
        }`}
      />

      {/* Bottom vignette — only for photo cards */}
      {!isLight && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      )}

      {/* Light card overlay at bottom */}
      {isLight && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8edf7]/80 via-transparent to-transparent" />
      )}

      {/* Info overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-4 py-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400 ${
          isLight ? "text-[#111]" : "text-white"
        }`}
      >
        <span
          className="block text-[9px] uppercase tracking-[0.3em] mb-1"
          style={{ color: isLight ? "#1058CF" : "#5b3fd6" }}
        >
          {project.category}
        </span>
        <div className="flex items-end justify-between gap-2">
          <h3
            className="uppercase tracking-[0.06em] leading-tight text-[0.7rem] sm:text-[0.8rem] lg:text-[0.95rem]"
            style={{ color: isLight ? "#111" : "white" }}
          >
            {project.title}
          </h3>
          <span className={`text-[9px] flex-shrink-0 ${isLight ? "text-black/30" : "text-white/30"}`}>
            {project.year}
          </span>
        </div>
      </div>

      {/* Corner arrow */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight size={15} className={isLight ? "text-[#1058CF]" : "text-white"} />
      </div>

      {/* Award badge */}
      {"award" in project && (project as any).award && (
        <div className="absolute top-3 left-3 bg-[#5b3fd6]/90 backdrop-blur-sm px-2 py-[3px] text-[8px] uppercase tracking-[0.2em] text-white">
          ★ {(project as any).award}
        </div>
      )}

      {/* Tag badge */}
      {"tag" in project && (project as any).tag && !("award" in project && (project as any).award) && (
        <div className="absolute top-3 left-3 bg-[#5b3fd6]/90 backdrop-blur-sm px-2 py-[3px] text-[8px] uppercase tracking-[0.2em] text-white">
          {(project as any).tag}
        </div>
      )}
    </>
  );
}