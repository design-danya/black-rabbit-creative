import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Lobster Lab images
import menuImg from "figma:asset/03f18bfe8e04d5774abf120d1f3fad955b9c299e.png";
import labIllustrationImg from "figma:asset/fd63c1b5d2868cff77ee9406126475825f091101.png";
import stackedBoxesImg from "figma:asset/87a38a6b1dcd3ee33bf1c96210e6ff8045d52682.png";
import takeoutBoxesImg from "figma:asset/eb19e6f509c3380dcf33a87840d5d7aad8341860.png";
import hoodieImg from "figma:asset/3600427455a05045405b90350f411e3023b4f419.png";
import storefrontImg from "figma:asset/c3a176e298012b00a8264eac6b76f36186b31b37.png";

// Calentón images
import calentonBrandSplitImg from "figma:asset/74ddf897dc27d3af21a310ff4b2955836fb1236e.png";
import calentonBottleImg from "figma:asset/8905280fcbbe6472c87d966e62b2820dfb0a08b2.png";
import calentonPackageImg from "figma:asset/771212747661ef21fb4fe98d1e6f64dbb222c7a9.png";
import calentonTVsImg from "figma:asset/6cf0157453a99927daa1bb516060e69723795c3a.png";
import calentonMerchImg from "figma:asset/bb18605de2d08ddbf9ab2c8fcc4762503b1226ae.png";

const teal = "#2a9d8f";
const red = "#c73e3a";

// Calentón palette
const salsa = "#d42c2c";
const maiz = "#f5c518";
const chile = "#5a7a4a";

const lobsterMeta = [
  { label: "Project", value: "Lobster Lab" },
  { label: "Type", value: "Concept / Practice Brief" },
  { label: "Scope", value: "Brand Identity, Packaging, Menu, Merch, Signage" },
  { label: "Year", value: "2024" },
];

const lobsterDeliverables = [
  "Custom lobster logo & retro hand-lettered wordmark",
  "Flowing wave pattern system with teal accent",
  "Bifold menu design with bold typographic hierarchy",
  "Takeout box packaging — two colorway variants",
  "Branded merchandise — hoodie mockup",
  "Storefront window signage & environmental graphics",
  "Custom lab equipment illustration",
];

const lobsterPrinciples = [
  { title: "Retro Science", desc: "A playful 'lobster laboratory' concept blending vintage scientific illustration with bold seafood branding." },
  { title: "Dual Palette", desc: "Teal and deep red work as complementary anchors — ocean meets the boil pot." },
  { title: "Hand-Drawn Character", desc: "Custom illustration gives the brand a handcrafted, one-of-a-kind personality that mass-market competitors can't replicate." },
  { title: "Tactile Presence", desc: "Packaging designed to feel as good as the food — bold patterns, saturated color, shelf-stopping presence." },
];

const calentonMeta = [
  { label: "Project", value: "Calentón Mexican Hot Sauce" },
  { label: "Type", value: "Concept / Practice Brief" },
  { label: "Scope", value: "Brand Identity, Packaging, Mascot, Merch, Advertising" },
  { label: "Year", value: "2025" },
];

const calentonDeliverables = [
  "Custom devil mascot character with multiple poses",
  "Hand-lettered Calentón logotype & wordmark",
  "Hot sauce bottle label design — full wrap",
  "Repeating chili pepper pattern system",
  "Retro TV advertising mockups",
  "Branded merchandise — hoodie & tote bag",
  "Full brand identity system & guidelines",
];

const calentonPrinciples = [
  { title: "Devilish Charm", desc: "A mischievous baby devil mascot with a halo — cute enough to love, hot enough to fear. The perfect embodiment of 'dangerously delicious.'" },
  { title: "Bold Tri-Color", desc: "Red, yellow, and green create an unmistakable Mexican-inspired palette that screams heat and flavor from the shelf." },
  { title: "Pattern Power", desc: "A custom chili pepper repeat pattern adds texture, depth, and instant brand recognition across every touchpoint." },
  { title: "Retro Attitude", desc: "Vintage TV mockups and halftone textures give the brand a playful, nostalgic edge that stands out in a crowded market." },
];

export default function CaseStudies() {
  useSEO({
    title: "Case Studies — Lobster Lab & Calentón | Black Rabbit Creative, Portsmouth NH",
    description: "Practice case studies by Black Rabbit Creative — Lobster Lab restaurant branding and Calentón hot sauce packaging identity. Brand identity design from Portsmouth, New Hampshire.",
    canonical: "/work/case-studies",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ── Back nav ── */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-28 pb-6">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Work
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          PAGE TITLE
      ══════════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-8 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] mb-3 md:mb-4"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            Case{" "}
            <em className="not-italic text-[#5b3fd6]">Studies</em>
          </h1>
          <p className="text-white/40 text-[13px] sm:text-sm md:text-base leading-relaxed max-w-2xl">
            Self-initiated practice briefs designed to push creative boundaries, explore
            new styles, and develop full brand systems from concept to completion —
            without client constraints.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* ══════════════════════════════════════════════
          CASE STUDY 01 — LOBSTER LAB
      ══════════════════════════════════════════════ */}

      {/* ── Case study header ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-4 border"
            style={{ borderColor: teal, color: teal }}
          >
            Case Study 01
          </span>
          <h2
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            Lobster{" "}
            <em className="not-italic" style={{ color: red }}>Lab</em>
          </h2>
          <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Brand Identity &amp; Packaging &mdash; Concept Restaurant
          </p>
        </motion.div>
      </section>

      {/* ── Meta bar ── */}
      <section className="border-t border-b border-white/8">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 md:gap-y-0 md:divide-x divide-white/8">
            {lobsterMeta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="px-0 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 md:first:pl-0"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-1.5" style={{ color: teal }}>
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero — Two-image spread ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          <img
            src={stackedBoxesImg}
            alt="Lobster Lab stacked takeout boxes — teal with retro lab illustration on dark red background | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-cover aspect-[4/3] md:aspect-[16/9]"
          />
          <img
            src={menuImg}
            alt="Lobster Lab bifold menu design — bold red with flowing wave patterns and retro typography | Menu design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-cover aspect-[4/3] md:aspect-[16/9]"
          />
        </motion.div>
      </section>

      {/* ═══ PROJECT OVERVIEW ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-14 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-4 sm:mb-6" style={{ color: teal }}>
              Project Overview
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Where science meets{" "}
              <em className="not-italic" style={{ color: red }}>seafood.</em>
            </h3>
            <div className="space-y-3 sm:space-y-4 text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              <p>
                Lobster Lab is a concept brand for a quirky, local lobster shack that
                leans into a playful "science experiment" theme — as if the perfect
                lobster roll was the result of mad-scientist-level dedication.
              </p>
              <p>
                Created as a self-initiated practice brief, this project explores full
                brand identity development from illustration and typography to packaging,
                merchandise, and environmental signage — all unified by a bold teal-and-red
                palette and hand-drawn character.
              </p>
              <p>
                The goal was to create a brand system that feels fun, memorable, and
                distinctly different from the typical rustic seafood aesthetic — proving
                that even casual dining can have serious design craft.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative overflow-hidden bg-white flex items-center justify-center p-5 sm:p-8 md:p-12">
              <img
                src={labIllustrationImg}
                alt="Lobster Lab custom illustration — retro science laboratory equipment with lobster motifs | Illustrated by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full max-w-lg object-contain"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: teal }}>
                Custom Illustration
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Hand-drawn laboratory equipment featuring lobster motifs — beakers, burners, and a signature
                Erlenmeyer flask with a lobster etched inside.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DESIGN CONTEXT — White section ═══ */}
      <section className="bg-white text-[#060606] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: red }}>
              Design Context
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Breaking the{" "}
              <em className="not-italic" style={{ color: red }}>nautical cliche.</em>
            </h3>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              Most seafood restaurants default to anchors, rope fonts, and weathered wood.
              Lobster Lab takes a completely different direction — leaning into retro science,
              bold illustration, and a color palette that pops on shelves and in social feeds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#060606]/5">
            {lobsterPrinciples.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white px-5 py-6"
              >
                <span className="block text-[10px] font-bold mb-1.5" style={{ color: teal }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[#060606] mb-1">{item.title}</p>
                <p className="text-xs text-[#060606]/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* ═══ PACKAGING & MERCH ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-4 sm:mb-6" style={{ color: teal }}>
              Packaging &amp; Merchandise
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Beyond the{" "}
              <em className="not-italic" style={{ color: red }}>plate.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px] mb-4 sm:mb-6">
              A brand isn't just a logo — it's every moment someone interacts with you.
              The Lobster Lab system extends across takeout packaging, branded merchandise,
              and storefront signage, creating a consistent experience from first impression
              to last bite.
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              {lobsterDeliverables.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2 sm:gap-3 text-white/50 text-sm sm:text-[15px] leading-[1.7] sm:leading-[1.8]"
                >
                  <span
                    className="block w-1 h-1 rounded-full mt-[10px] shrink-0"
                    style={{ backgroundColor: teal }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Takeout boxes — two variants */}
            <div className="relative overflow-hidden">
              <img
                src={takeoutBoxesImg}
                alt="Lobster Lab takeout boxes — teal waves design and cream lab illustration variant | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover max-h-[50vh]"
              />
            </div>

            {/* Stacked boxes */}
            <div className="relative overflow-hidden">
              <img
                src={stackedBoxesImg}
                alt="Lobster Lab stacked takeout boxes — teal with retro lab illustration on dark red background | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover max-h-[50vh]"
              />
            </div>

            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: teal }}>
                Takeout Packaging
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Two colorway variants — teal wave pattern and cream with lab illustration — designed for
                instant brand recognition at pickup and delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ENVIRONMENTAL & MERCH — White section ═══ */}
      <section className="bg-white text-[#060606] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: red }}>
              Environmental &amp; Merch
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Living the{" "}
              <em className="not-italic" style={{ color: red }}>brand.</em>
            </h3>
            <p className="text-gray-500 leading-[1.8] text-[15px]">
              The brand extends to physical spaces and wearable merch — the storefront window
              wraps the flowing wave pattern around the logo, while the branded hoodie turns
              customers into walking advertisements.
            </p>
          </motion.div>

          {/* Two-column image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden">
                <img
                  src={storefrontImg}
                  alt="Lobster Lab storefront window signage — flowing wave patterns and logo on glass | Environmental design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: red }}>
                  Storefront Signage
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Window graphics featuring the flowing wave pattern and logo — creating a bold
                  street presence that draws customers in.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="overflow-hidden">
                <img
                  src={hoodieImg}
                  alt="Woman wearing Lobster Lab branded red hoodie with retro logo | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: red }}>
                  Branded Merchandise
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Coral hoodie with cream logo — a wearable brand touchpoint that extends the
                  Lobster Lab identity beyond the restaurant.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DESIGN OUTCOME ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: teal }}>
              Design Outcome
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Bold, fun,{" "}
              <em className="not-italic" style={{ color: red }}>unforgettable.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px] mb-4">
              The finished brand system proves that restaurant branding doesn't have to play it safe.
              Every element — from the hand-drawn lab equipment to the wave-pattern takeout boxes to
              the storefront signage — works together to build a brand that's impossible to ignore.
            </p>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              As a practice brief, Lobster Lab demonstrates full-scope brand thinking: strategy,
              illustration, typography, packaging, merchandise, environmental graphics, and collateral
              design all working as one cohesive system.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="pt-6 border-t border-white/8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-1.5">
              {["Practice Brief", "Brand Identity", "Logo Design", "Packaging Design", "Menu Design", "Illustration", "Merchandise", "Environmental Graphics", "Restaurant Branding"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-white/10 text-white/40 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DIVIDER — Between case studies
      ══════════════════════════════════════════════ */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        <div className="border-t border-[#5b3fd6]/30" />
      </div>

      {/* ══════════════════════════════════════════════
          CASE STUDY 02 — CALENTÓN
      ══════════════════════════════════════════════ */}

      {/* ── Case study header ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-4 border"
            style={{ borderColor: salsa, color: salsa }}
          >
            Case Study 02
          </span>
          <h2
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            Calentón{" "}
            <em className="not-italic" style={{ color: red }}>Mexican Hot Sauce</em>
          </h2>
          <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Brand Identity &amp; Packaging &mdash; Concept Product
          </p>
        </motion.div>
      </section>

      {/* ── Meta bar ── */}
      <section className="border-t border-b border-white/8">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 md:gap-y-0 md:divide-x divide-white/8">
            {calentonMeta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="px-0 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 md:first:pl-0"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-1.5" style={{ color: salsa }}>
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero — Two-image spread ── */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          <img
            src={calentonBrandSplitImg}
            alt="Calentón brand identity — devil mascot with chili pepper pattern and hot sauce bottles | Brand design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-contain"
          />
          <img
            src={calentonBottleImg}
            alt="Calentón hot sauce bottle close-up — devil mascot label with chili pepper pattern background | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-contain"
          />
        </motion.div>
      </section>

      {/* ═══ PROJECT OVERVIEW ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-14 pb-10 md:pb-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-4 sm:mb-6" style={{ color: salsa }}>
              Project Overview
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Hot{" "}
              <em className="not-italic" style={{ color: red }}>Sauce</em> with a twist.
            </h3>
            <div className="space-y-4 text-white/50 leading-[1.8] text-[15px]">
              <p>
                Calentón is a concept brand for a Mexican hot sauce that leans into a playful,
                mischievous theme — as if the perfect blend of spices was the result of a
                devilish experiment.
              </p>
              <p>
                Created as a self-initiated practice brief, this project explores full
                brand identity development from illustration and typography to packaging,
                merchandise, and advertising — all unified by a bold red, yellow, and green
                palette and a custom chili pepper pattern.
              </p>
              <p>
                The goal was to create a brand system that feels fun, memorable, and
                distinctly different from the typical hot sauce aesthetic — proving
                that even condiments can have serious design craft.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={calentonPackageImg}
                alt="Calentón HOT TO GO package design — yellow background with devil mascot and bold typography | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: salsa }}>
                Packaging Design
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Bold yellow HOT TO GO package design featuring the devil mascot, hand-lettered
                logotype, and key product details — designed for maximum shelf impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DESIGN CONTEXT — White section ═══ */}
      <section className="bg-white text-[#060606] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: red }}>
              Design Context
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Breaking the{" "}
              <em className="not-italic" style={{ color: red }}>hot sauce cliche.</em>
            </h3>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              Most hot sauce brands rely on aggressive flames, skulls, and extreme heat imagery.
              Calentón takes a completely different direction — leaning into playful character
              design, a mischievous devil mascot, and a vibrant Mexican-inspired color palette
              that pops on shelves and in social feeds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#060606]/5">
            {calentonPrinciples.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white px-5 py-6"
              >
                <span className="block text-[10px] font-bold mb-1.5" style={{ color: salsa }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[#060606] mb-1">{item.title}</p>
                <p className="text-xs text-[#060606]/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* ═══ ADVERTISING & MERCH ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-4 sm:mb-6" style={{ color: salsa }}>
              Advertising &amp; Merchandise
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Beyond the{" "}
              <em className="not-italic" style={{ color: red }}>bottle.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px] mb-4 sm:mb-6">
              A brand isn't just a logo — it's every moment someone interacts with you.
              The Calentón system extends across bottle packaging, branded merchandise,
              and advertising, creating a consistent experience from first impression
              to last bite.
            </p>
            <ul className="space-y-2.5">
              {calentonDeliverables.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2 sm:gap-3 text-white/50 text-sm sm:text-[15px] leading-[1.7] sm:leading-[1.8]"
                >
                  <span
                    className="block w-1 h-1 rounded-full mt-[10px] shrink-0"
                    style={{ backgroundColor: salsa }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={calentonTVsImg}
                alt="Calentón retro TV advertising mockups — stacked vintage TVs displaying devil mascot and hot sauce bottles on chili pepper pattern | Advertising by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: salsa }}>
                Retro TV Advertising
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Stacked vintage TV mockups with the devil mascot and product lineup — a playful,
                retro advertising concept against the custom chili pepper pattern.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ MERCH — White section ═══ */}
      <section className="bg-white text-[#060606] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-4" style={{ color: salsa }}>
              Branded Merchandise
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Spreading the{" "}
              <em className="not-italic" style={{ color: salsa }}>heat.</em>
            </h3>
            <p className="text-gray-500 leading-[1.8] text-[15px]">
              The brand extends beyond the bottle into wearable merch — a branded hoodie
              and tote bag turn fans into walking brand ambassadors, keeping the Calentón
              identity alive far beyond the kitchen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden">
              <img
                src={calentonMerchImg}
                alt="Calentón branded merchandise — woman in teal hoodie with devil mascot logo and branded tote bag on chili pepper pattern | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: salsa }}>
                Hoodie &amp; Tote Bag
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Teal hoodie and branded tote bag featuring the devil mascot — wearable brand
                touchpoints that extend the Calentón identity beyond the shelf.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DESIGN OUTCOME ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: salsa }}>
              Design Outcome
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Devilishly{" "}
              <em className="not-italic" style={{ color: salsa }}>delicious.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px] mb-4">
              The finished brand system proves that hot sauce branding doesn't have to play it safe.
              Every element — from the hand-drawn devil mascot to the chili pepper pattern to the
              retro TV advertising — works together to build a brand that's impossible to ignore.
            </p>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              As a practice brief, Calentón demonstrates full-scope brand thinking: strategy,
              character design, typography, packaging, merchandise, advertising, and pattern
              design all working as one cohesive, fiery system.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="pt-6 border-t border-white/8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-1.5">
              {["Practice Brief", "Brand Identity", "Logo Design", "Packaging Design", "Character Design", "Illustration", "Merchandise", "Pattern Design", "Hot Sauce", "CPG Branding"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-white/10 text-white/40 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY PRACTICE BRIEFS ═══ */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: "#5b3fd6" }}>
              Why Practice Briefs?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Sharpening the{" "}
              <em className="not-italic text-[#5b3fd6]">craft.</em>
            </h2>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px] mb-4">
              Practice briefs are self-initiated projects designed to push creative boundaries
              without client constraints. They're an opportunity to explore new illustration
              styles, experiment with bold color palettes, and develop full brand systems
              from concept to completion.
            </p>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              These projects demonstrate the same strategic thinking and design craft applied
              to client work — the only difference is the freedom to take bigger creative risks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#060606] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-20 items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Like What You See?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              Let's build something{" "}
              <em className="not-italic text-[#5b3fd6]">bold.</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-6 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#5b3fd6] text-white px-6 sm:px-8 py-3.5 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-6 sm:px-8 py-3.5 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs font-bold hover:border-white/60 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}