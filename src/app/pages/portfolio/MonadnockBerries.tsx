'use client'
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";

import heroImg from "../../../imports/Screenshot_2026-07-02_at_7.07.27_PM.png";
import estateHarvestBoard from "../../../imports/Screenshot_2026-07-02_at_6.56.40_PM.png";
import harvestHeritageBoard from "../../../imports/Screenshot_2026-07-02_at_6.55.44_PM.png";
import minimalistBotanicalBoard from "../../../imports/Screenshot_2026-07-02_at_6.55.32_PM.png";
import originalBannerLogo from "../../../imports/MB_bannerlogo.gif";
import primaryMt from "../../../imports/MB_RGB_Primary_Mt_16.png";
import primaryNoMt from "../../../imports/MB_RGB_Primary_NoMt_11.png";
import heritageMark from "../../../imports/MB_RGB_Heritage_ESTdate_9.png";
import brandSeal from "../../../imports/MB_RGB_BrandSeal_10.png";
import monogramMark from "../../../imports/MB_RGB_Monogram_19.png";
import appToteImg from "../../../imports/Untitled-10.png";
import appMugImg from "../../../imports/Untitled-11.png";
import appCardImg from "../../../imports/Untitled-12.png";
import appHatImg from "../../../imports/Front.png";
import appStampImg from "../../../imports/stamp.png";
import appHoodieImg from "../../../imports/Untitled-1.png";
import appTeePrimaryImg from "../../../imports/Untitled-3.png";
import appSignageImg from "../../../imports/Untitled-6.png";
import appTeeSealImg from "../../../imports/Untitled-7.png";
import appPackagingImg from "../../../imports/Untitled-8.png";

type Application = {
  key: string;
  src: string;
  label: string;
  caption: string;
  span?: "wide" | "tall";
};

const applications: Application[] = [
  {
    key: "signage",
    src: appSignageImg,
    label: "Signage",
    caption:
      "Primary mark. Large. Clear. Commands the space without shouting.",
    span: "wide",
  },
  {
    key: "tote",
    src: appToteImg,
    label: "Tote Bag",
    caption:
      "The seal becomes a signature detail. Ceremonial. Owned. Something you'd display, not hide.",
  },
  {
    key: "mug",
    src: appMugImg,
    label: "Mug",
    caption:
      "The primary mark works here. Simple. Clear. Refined. You pick it up and know exactly what it is.",
  },
  {
    key: "card",
    src: appCardImg,
    label: "Business Card",
    caption:
      "Heritage mark. Establishes formality without overdoing it. The establishment date tells the story.",
  },
  {
    key: "hat",
    src: appHatImg,
    label: "Hat / Apparel",
    caption:
      "Monogram-forward. Scaled appropriately. Clean. Not crowded.",
  },
  {
    key: "packaging",
    src: appPackagingImg,
    label: "Packaging",
    caption:
      "Primary mark on retail packaging — brand and product living together, no compromise.",
  },
  {
    key: "stamp",
    src: appStampImg,
    label: "Embossed Seal",
    caption:
      "The seal, made physical. A quiet detail that turns paper into a keepsake.",
  },
  {
    key: "tee-primary",
    src: appTeePrimaryImg,
    label: "T-Shirt — Primary",
    caption:
      "Reversed primary mark on soft cotton. Wearable, without looking like a corporate freebie.",
  },
  {
    key: "tee-seal",
    src: appTeeSealImg,
    label: "T-Shirt — Seal",
    caption:
      "The seal centered on the chest. A collectible piece — the kind you keep.",
  },
  {
    key: "hoodie",
    src: appHoodieImg,
    label: "Hoodie",
    caption:
      "Full seal on the back. A quiet nod for people who know the place.",
  },
];

const delivered = [
  {
    label: "Strategic clarity",
    body: "Three distinct directions forced the hard conversation: Who are we, really? The answer shaped every decision that followed.",
  },
  {
    label: "A mark system",
    body: "Primary. Heritage. Seal. Monogram. Four marks, each intentional. Each works for different moments. Each reinforces the same brand.",
  },
  {
    label: "Scalability",
    body: "From tiny embroidery to large signage, the system remains clear and ownable. No confusion. No dilution.",
  },
  {
    label: "Flexibility without chaos",
    body: "The monogram works standalone. The seal works ceremonial. The primary mark works everywhere. But they're all unmistakably Monadnock Berries.",
  },
  {
    label: "Confidence",
    body: "When Oliver and Elise put this on a hat or tote or signage, they know it feels right. Not generic. Not like someone else's brand.",
  },
];

const demonstrates = [
  {
    label: "Strategy before design",
    body: "We don't start with design. We start with strategy. Three directions aren't cosmetic choices — they're positioning options. You choose the direction. We execute the system.",
  },
  {
    label: "Process matters",
    body: "You see the thinking. You understand why each decision was made.",
  },
  {
    label: "Systems beat single marks",
    body: "A logo isn't one thing. It's a coherent set of marks that work together across real applications.",
  },
  {
    label: "Application thinking is built in",
    body: "The design didn't happen in a vacuum. Every mark was tested against how it actually gets used.",
  },
];

type LogoBlock = {
  key: string;
  eyebrow: string;
  headline: string;
  intro: string;
  works: string[];
  usage?: string;
  image: string;
  imageAlt: string;
  imageExtra?: { src: string; alt: string };
};

const logoBlocks: LogoBlock[] = [
  {
    key: "primary",
    eyebrow: "Primary Mark",
    headline: "The Anchor",
    intro:
      "The primary mark is designed to position Monadnock Berries as a refined destination. Built around a distinctive MB monogram and paired with elegant serif typography, the logo balances structure and softness. It captures both the landscape and the elevated experience of the space.",
    works: [
      "The monogram is bold yet refined — distinctive enough to own, refined enough to feel intentional.",
      "The typography is classic serif forms with modern spacing. Timeless without feeling dated.",
      "The hierarchy is clear. Your eye moves naturally through the mark. No confusion. No guessing.",
    ],
    usage: "The result: a mark that feels quietly luxurious. Timeless. Intentional.",
    image: primaryMt,
    imageAlt:
      "Monadnock Berries primary logo mark with mountain silhouette — refined destination brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    imageExtra: {
      src: primaryNoMt,
      alt:
        "Monadnock Berries primary logo mark without mountain — clean variation by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    },
  },
  {
    key: "heritage",
    eyebrow: "Heritage Mark",
    headline: "The Formal Variation",
    intro:
      "The secondary mark expands the identity into a structured, heritage-driven format. By introducing the establishment date and a centered composition, this variation emphasizes history and permanence — while maintaining the elegance of the primary mark.",
    works: [
      "The monogram stays consistent, anchoring the system.",
      "The establishment date reinforces legacy. 1996 becomes an asset, not an afterthought.",
      "The centered composition feels formal and balanced. More grounded. More permanent.",
    ],
    usage:
      "When to use it: applications where the brand benefits from a traditional, established presence. Signage. Formal stationery. Moments that need weight.",
    image: heritageMark,
    imageAlt:
      "Monadnock Berries heritage mark with EST 1996 date — formal brand variation by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
  },
  {
    key: "seal",
    eyebrow: "Brand Seal",
    headline: "The Signature",
    intro:
      "The seal is the most expressive element of the system. It brings together place, history, and experience into a single mark. The circular form creates a sense of continuity and completeness. The subtle landscape line grounds the brand in its actual environment.",
    works: [
      "The encircling typography reinforces location and recognition.",
      "The landscape detail is subtle. It's there. It matters. It grounds the mark in place.",
      "The scale is versatile. Clear at large. Clear at small. Legible on stamps, signage, embroidery.",
    ],
    usage:
      "When to use it: anywhere you want the brand to feel ceremonial. Signature-like. Rooted.",
    image: brandSeal,
    imageAlt:
      "Monadnock Berries brand seal — circular signature mark with landscape detail by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
  },
  {
    key: "monogram",
    eyebrow: "Monogram Mark",
    headline: "The Essential Form",
    intro:
      "The monogram distills the identity to its most essential form. Using MB as a standalone element, the mark creates a recognizable symbol that works across smaller-scale applications while maintaining consistency with the broader system.",
    works: [
      "The letterforms are refined. Custom enough to feel distinctive. Simple enough to scale.",
      "The mark is strong enough to work alone. No supporting typography needed.",
      "The scale is versatile. From embroidery to digital. From tiny favors to large prints.",
    ],
    usage:
      "When to use it: when simplicity and clarity are key. When the space needs the brand but shouldn't be overwhelmed. Apparel. Favors. Digital icons.",
    image: monogramMark,
    imageAlt:
      "Monadnock Berries MB monogram — essential brand mark by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
  },
];

type Direction = {
  key: string;
  title: string;
  overview: string;
  typography: string;
  palette: { hex: string; label: string }[];
  paletteNote: string;
  positioning: string;
  image: string;
  chosen?: boolean;
};

const directions: Direction[] = [
  {
    key: "estate-harvest",
    title: "Estate Harvest",
    overview:
      "A refined, destination-driven experience — elevating Monadnock from traditional farm setting to a curated estate environment.",
    typography:
      "Elegant serif typography with clean spacing creates a timeless, sophisticated feel while remaining approachable and modern.",
    palette: [
      { hex: "#4d5a48", label: "Sage" },
      { hex: "#2b3a4a", label: "Navy" },
      { hex: "#e6ddd1", label: "Warm Cream" },
      { hex: "#8a7a63", label: "Warm Tan" },
    ],
    paletteNote:
      "A muted, nature-inspired palette of sage, navy, and warm neutrals reflects the landscape while adding depth and refinement.",
    positioning:
      "For clients seeking an elevated yet grounded atmosphere. The landscape is there. The refinement is intentional.",
    image: estateHarvestBoard,
    chosen: true,
  },
  {
    key: "harvest-heritage",
    title: "Harvest Heritage",
    overview:
      "A warm, harvest-driven wedding destination blending refined design with the authenticity of a working farm. It shifts away from formal luxury toward a more seasonal, experiential atmosphere rooted in gathering, food, and landscape.",
    typography:
      "A heritage-inspired serif creates a timeless, grounded feel, balanced by a clean sans serif for clarity.",
    palette: [
      { hex: "#6a2735", label: "Deep Berry" },
      { hex: "#6f6a3a", label: "Olive" },
      { hex: "#7d5872", label: "Muted Plum" },
      { hex: "#b5895c", label: "Warm Wood" },
    ],
    paletteNote:
      "A rich, nature-inspired palette of deep berry, olive, muted plum, and warm wood tones reflect the harvest season while adding depth and warmth.",
    positioning:
      "For couples seeking an elevated yet organic celebration. This one leans into the farm. Makes it intentional. Makes it warm.",
    image: harvestHeritageBoard,
  },
  {
    key: "minimalist-botanical",
    title: "Minimalist Botanical",
    overview:
      "A refined, modern wedding experience rooted in simplicity and space. This direction embraces restraint — letting natural materials, soft light, and subtle botanical elements speak without excess.",
    typography:
      "A modern serif with generous spacing creates a clean, editorial feel, paired with a neutral sans serif for balance.",
    palette: [
      { hex: "#f0ede6", label: "Warm White" },
      { hex: "#b8b6b1", label: "Cool Gray" },
      { hex: "#8a9482", label: "Sage" },
      { hex: "#2f2f2f", label: "Charcoal" },
    ],
    paletteNote:
      "A soft, neutral palette of warm whites, cool grays, sage, and deep charcoal creates a calm, modern foundation with subtle contrast.",
    positioning:
      "For those seeking elevated, calm, and intentionally minimal. The restraint is the point. Nothing unnecessary.",
    image: minimalistBotanicalBoard,
  },
];

// Monadnock Berries brand palette
const bg = "#2A303E";      // dark navy
const fg = "#EBE6DE";      // warm cream
const accent = "#B7C0B1";  // sage
const muted = "#7D796C";   // warm gray/olive
const panelDark = "#1f2431"; // slight elevation off bg for logo panels

const meta = [
  { label: "Client", value: "Monadnock Berries (Oliver & Elise)" },
  { label: "Project", value: "Logo Identity System" },
  { label: "Timeline", value: "4 weeks" },
  { label: "Status", value: "Completed April 2026" },
];

const deliverables = [
  "Primary mark",
  "Heritage mark",
  "Brand seal",
  "Monogram",
  "Guidelines",
];

const brief = [
  "Elevate from farm to destination venue",
  "Appeal to customers seeking curated experiences",
  "Work across signage, packaging, merchandise, digital",
  "Feel timeless, not trendy",
];

export default function MonadnockBerries() {
  useSEO({
    title: "Monadnock Berries Brand Identity | Legacy Farm Rebrand | Black Rabbit Creative, Portsmouth NH",
    description:
      "Logo identity system for Monadnock Berries — a 30-year legacy berry farm reimagined as a curated destination experience. Primary mark, heritage mark, brand seal, and monogram by Black Rabbit Creative.",
    canonical: "/work/monadnock-berries",
  });

  return (
    <div style={{ backgroundColor: bg, color: fg }} className="min-h-screen">

      {/* ── Back nav ── */}
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#EBE6DE]/40 hover:text-[#B7C0B1] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Work
        </Link>
      </div>

      {/* ── SECTION 1: Hero ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
            Legacy Farm Rebrand
          </span>
          <h1
            className="font-black uppercase tracking-[0.06em] leading-[0.95] max-w-5xl"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
          >
            Monadnock Berries:{" "}
            <em className="not-italic" style={{ color: accent }}>
              A Refined Destination Reimagined
            </em>
          </h1>
          <p className="mt-6 text-[#EBE6DE]/60 text-base md:text-lg leading-relaxed max-w-2xl">
            Logo identity system for a legacy berry farm positioning as a curated estate experience.
          </p>
        </motion.div>
      </section>

      {/* ── Hero image + Quick stats card ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative overflow-hidden rounded-sm"
          >
            <img
              src={heroImg}
              alt="Oliver and Elise, owners of Monadnock Berries, standing in front of Mount Monadnock holding their farm sign — legacy berry farm brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Quick stats card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 border border-[#EBE6DE]/15 p-6 md:p-8 flex flex-col gap-6 self-start rounded-sm"
          >
            <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: accent }}>
              Project Snapshot
            </p>

            <ul className="flex flex-col gap-4">
              {meta.map((item) => (
                <li key={item.label} className="flex flex-col gap-1 border-b border-[#EBE6DE]/8 pb-4 last:border-b-0 last:pb-0">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#EBE6DE]/40">
                    {item.label}
                  </span>
                  <span className="text-sm text-[#EBE6DE]/90 leading-snug">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 border-t border-[#EBE6DE]/8 pt-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#EBE6DE]/40">
                Deliverables
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-[11px] uppercase tracking-[0.15em] px-2.5 py-1 border border-[#EBE6DE]/15 text-[#EBE6DE]/80"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── SECTION 2: The Challenge ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              The Challenge
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              From Farm to{" "}
              <em className="not-italic" style={{ color: accent }}>Destination</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/80">
              Monadnock Berries is 30 years old. They're not a commodity producer — they're a
              destination experience. But their visual identity didn't reflect that positioning.
              They needed a mark that felt elevated, grounded, and distinctly theirs.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/55">
              The question wasn't <em className="text-[#EBE6DE]/90 not-italic">"make a pretty logo."</em> It was:{" "}
              <em className="text-[#EBE6DE]/90 not-italic">
                "Should we lean into history and heritage, or lean into minimalism and refinement, or lean into the warmth of the harvest?"
              </em>{" "}
              Three completely different strategies. One brand. Which one feels right?
            </p>

            {/* The Brief */}
            <div className="pt-6 mt-2 border-t border-[#EBE6DE]/8">
              <p className="text-[10px] uppercase tracking-[0.35em] mb-5" style={{ color: accent }}>
                The Brief (as presented)
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {brief.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3 text-sm md:text-base text-[#EBE6DE]/75 leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: The Process — Three Directions ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20"
          >
            <div className="lg:col-span-5">
              <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
                The Process
              </span>
              <h2
                className="font-black uppercase tracking-[0.06em] leading-[0.95]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
              >
                Three Strategic{" "}
                <em className="not-italic" style={{ color: accent }}>Directions</em>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/70">
                Before sketching a single mark, we explored three distinct positioning strategies.
                Each one answered the brand question differently. Each one was defensible.
                Only one felt right.
              </p>
            </div>
          </motion.div>

          {/* Direction cards */}
          <div className="flex flex-col gap-16 md:gap-24">
            {directions.map((d, idx) => (
              <motion.article
                key={d.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Mood board image */}
                <div className={`lg:col-span-7 overflow-hidden rounded-sm border border-[#EBE6DE]/10 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={d.image}
                    alt={`${d.title} — mood board direction for Monadnock Berries brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England`}
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#EBE6DE]/40">
                      Direction {String(idx + 1).padStart(2, "0")}
                    </span>
                    {d.chosen && (
                      <span
                        className="text-[10px] uppercase tracking-[0.25em] px-2 py-0.5 rounded-sm"
                        style={{ backgroundColor: accent, color: "#fff" }}
                      >
                        Chosen
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-black uppercase tracking-[0.06em] leading-[1]"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                  >
                    {d.title}
                  </h3>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#EBE6DE]/40 mb-2">
                      Overview
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-[#EBE6DE]/80">
                      {d.overview}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#EBE6DE]/40 mb-2">
                      Typography
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-[#EBE6DE]/70">
                      {d.typography}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#EBE6DE]/40 mb-3">
                      Color Palette
                    </p>
                    <div className="flex gap-1.5 mb-3">
                      {d.palette.map((c) => (
                        <div key={c.hex} className="flex-1 flex flex-col items-center gap-1.5">
                          <div
                            className="w-full aspect-square rounded-sm border border-[#EBE6DE]/10"
                            style={{ backgroundColor: c.hex }}
                            title={`${c.label} ${c.hex}`}
                          />
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#EBE6DE]/50 text-center leading-tight">
                            {c.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-[#EBE6DE]/60">
                      {d.paletteNote}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EBE6DE]/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: accent }}>
                      Strategic Positioning
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-[#EBE6DE]/85 italic">
                      {d.positioning}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: The Decision ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-5" style={{ color: accent }}>
              The Decision
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95] mb-10"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Estate Harvest{" "}
              <em className="not-italic" style={{ color: accent }}>Won.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 text-left md:text-center max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/80">
              After reviewing all three directions, Oliver and Elise chose{" "}
              <span className="text-[#EBE6DE]">Estate Harvest.</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/60">
              Why? Because it positioned Monadnock Berries as a destination without
              abandoning the place itself. It felt elevated but never pretentious.
              Timeless but contemporary. Rooted in landscape but intentional about
              experience.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/85">
              That clarity — knowing exactly what the brand is and isn't — unlocked
              everything that came next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: The Logo System ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              The Logo System
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95] max-w-4xl"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              From Strategy to{" "}
              <em className="not-italic" style={{ color: accent }}>Symbol</em>
            </h2>
          </motion.div>

          {/* Original logo callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-32"
          >
            <div className="lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#EBE6DE]/40 mb-4">
                Before
              </p>
              <h3
                className="font-black uppercase tracking-[0.06em] leading-[1] mb-5"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}
              >
                The Original Mark
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/70">
                The original logo was created in the 1990s by one of the owners' children —
                a painting of the farm with hand-lettered text laid over it. Charming,
                personal, and unmistakably of its era. But not the mark of a destination.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#EBE6DE] rounded-sm p-6 md:p-10 flex items-center justify-center">
                <img
                  src={originalBannerLogo}
                  alt="Original 1990s Monadnock Berries logo — painted farm scene with hand-lettered text | Before the rebrand by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Four logo blocks */}
          <div className="flex flex-col gap-20 md:gap-28">
            {logoBlocks.map((b, idx) => (
              <motion.article
                key={b.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Logo canvas */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-[#1f2431] border border-[#7D796C]/25 rounded-sm p-6 md:p-10 flex items-center justify-center min-h-[320px] md:min-h-[440px]">
                    <img
                      src={b.image}
                      alt={b.imageAlt}
                      className="w-full max-w-[92%] max-h-[420px] object-contain"
                    />
                  </div>
                  {b.imageExtra && (
                    <div className="mt-4 bg-[#1f2431] border border-[#7D796C]/25 rounded-sm p-5 md:p-8 flex items-center justify-center min-h-[220px]">
                      <img
                        src={b.imageExtra.src}
                        alt={b.imageExtra.alt}
                        className="w-full max-w-[80%] max-h-[260px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#EBE6DE]/40 mb-2">
                      {b.eyebrow}
                    </p>
                    <h3
                      className="font-black uppercase tracking-[0.06em] leading-[1]"
                      style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
                    >
                      {b.headline}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/80">
                    {b.intro}
                  </p>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>
                      What Makes It Work
                    </p>
                    <ul className="flex flex-col gap-3">
                      {b.works.map((w) => (
                        <li key={w} className="flex items-start gap-3 text-sm md:text-base text-[#EBE6DE]/75 leading-relaxed">
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: accent }}
                          />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {b.usage && (
                    <p className="text-sm md:text-base leading-relaxed text-[#EBE6DE]/85 italic border-t border-[#EBE6DE]/10 pt-5">
                      {b.usage}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Applications ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14 md:mb-20"
          >
            <div className="lg:col-span-5">
              <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
                Applications
              </span>
              <h2
                className="font-black uppercase tracking-[0.06em] leading-[0.95]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
              >
                A System in{" "}
                <em className="not-italic" style={{ color: accent }}>Practice</em>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/70">
                Each application was designed with intention. Not every mark works everywhere.
                The system allows flexibility without losing coherence.
              </p>
            </div>
          </motion.div>

          {/* Bento gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {applications.map((a, i) => (
              <motion.figure
                key={a.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${a.span === "wide" ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <div className="overflow-hidden rounded-sm border border-[#7D796C]/20 bg-[#1f2431] group">
                  <img
                    src={a.src}
                    alt={`${a.label} — Monadnock Berries brand application by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England`}
                    className={`w-full ${a.span === "wide" ? "aspect-[21/9]" : "aspect-[4/3]"} object-cover transition-transform duration-700 group-hover:scale-[1.03]`}
                  />
                </div>
                <figcaption className="mt-4 flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: accent }}>
                    {a.label}
                  </span>
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#EBE6DE]/70">
                    {a.caption}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: More Than a Logo ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              More Than a Logo
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              What Actually Got{" "}
              <em className="not-italic" style={{ color: accent }}>Delivered</em>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/80">
              Monadnock Berries didn't just get a logo.{" "}
              <span className="text-[#EBE6DE]">They got clarity.</span>
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col divide-y divide-[#EBE6DE]/8">
            {delivered.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="py-5 md:py-6 first:pt-0 last:pb-0"
              >
                <p
                  className="text-[10px] uppercase tracking-[0.3em] mb-2"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")} — {d.label}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/75">
                  {d.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: What This Demonstrates ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20 max-w-3xl"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              What This Demonstrates
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              What We're Actually{" "}
              <em className="not-italic" style={{ color: accent }}>Good At</em>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]/70">
              This project shows how we think about branding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {demonstrates.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border border-[#7D796C]/25 p-6 md:p-8 rounded-sm flex flex-col gap-3 bg-[#1f2431]/40"
              >
                <span
                  className="text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#EBE6DE]">
                  {d.label}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#EBE6DE]/70">
                  {d.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Next Steps ── */}
      <section className="border-t border-[#EBE6DE]/8 px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-5" style={{ color: accent }}>
              Next Steps
            </span>
            <h2
              className="font-black uppercase tracking-[0.06em] leading-[0.95] mb-10"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              Your Brand Could Be{" "}
              <em className="not-italic" style={{ color: accent }}>Next.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 text-left md:text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/70">
              If you're tired of looking like competitors. If you're ready to invest in
              a brand that actually stands apart. If you want strategy before design —
              not after.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#EBE6DE]">
              Let's talk about your brand.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#EBE6DE]/60">
              The process starts with one conversation. Understanding who you actually
              are. What makes you different. What you want to feel like.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold transition-all duration-500 rounded-sm"
              style={{ backgroundColor: accent, color: bg }}
            >
              Start a Discovery Call
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
