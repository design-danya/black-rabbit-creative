'use client'
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { useSEO } from "../../components/useSEO";

const A = "/assets/fortified-motherhood";

/** Core brand colours, taken from the delivered brand guide. */
const pomegranate = "#B34747";
const steelBlue = "#8DB6C8";
const slate = "#4B6D7B";
const ink = "#0F1416";
const ivory = "#F2F4F0";

const meta = [
  { label: "Client", value: "Fortified Motherhood" },
  { label: "Industry", value: "Postpartum Care" },
  { label: "Scope", value: "Strategy & Complete Identity" },
  { label: "Year", value: "2026" },
];

const challenges = [
  "Break from a category built on lotus flowers and blush pastels",
  "Carry warmth and weight at the same time",
  "Hold up from an Instagram avatar to a stamped tote bag",
  "Own the Monadnock region and travel well beyond it",
  "Give a one-woman practice the presence of an established brand",
];

/** Eight hand-drawn botanicals, each chosen for what it means in recovery. */
const illustrations = [
  { slug: "nettle", name: "Nettle", token: "Nourishment", desc: "A traditional mineral-rich tonic, long used to rebuild strength and replenish the body after birth." },
  { slug: "raspberry-leaf", name: "Raspberry Leaf", token: "Strength", desc: "Used for generations to tone and support the womb through pregnancy and recovery." },
  { slug: "milky-oats", name: "Milky Oats", token: "Rest", desc: "Calms and restores a depleted nervous system. Oats have long been a staple for nursing mothers." },
  { slug: "calendula", name: "Calendula", token: "Healing", desc: "A healing flower traditionally used in postpartum sitz baths and salves to soothe and mend tissue." },
  { slug: "violet", name: "Violet", token: "Soothe", desc: "Gentle and cooling. It stands for tenderness and quiet comfort in the early weeks." },
  { slug: "wild-rose", name: "Wild Rose", token: "Heart", desc: "Love, emotional healing and the fierce devotion of new motherhood." },
  { slug: "warm-meals", name: "Warm Meals", token: "Sustenance", desc: "The centre of Odell's practice. Across healing traditions, and especially the Asian practices behind her bodywork, warm food is the foundation of recovery." },
  { slug: "mother-and-baby", name: "Mother & Baby", token: "Bond", desc: "The brand's purpose in one image: a mother who is held, so she can hold everything else." },
];

const palette = [
  { hex: "#F2F4F0", label: "Warm Ivory", text: "rgba(15,20,22,0.75)", sub: "rgba(15,20,22,0.4)", border: true },
  { hex: "#8DB6C8", label: "Steel Blue", text: "rgba(15,20,22,0.8)", sub: "rgba(15,20,22,0.45)" },
  { hex: "#B34747", label: "Pomegranate", text: "rgba(255,255,255,0.92)", sub: "rgba(255,255,255,0.55)" },
  { hex: "#4B6D7B", label: "Slate", text: "rgba(255,255,255,0.92)", sub: "rgba(255,255,255,0.55)" },
  { hex: "#113F1A", label: "Forest Green", text: "rgba(255,255,255,0.9)", sub: "rgba(255,255,255,0.5)" },
  { hex: "#EF902B", label: "Clay", text: "rgba(15,20,22,0.8)", sub: "rgba(15,20,22,0.45)" },
  { hex: "#6A50C2", label: "Violet", text: "rgba(255,255,255,0.92)", sub: "rgba(255,255,255,0.55)" },
  { hex: "#0A0A0A", label: "Ink", text: "rgba(255,255,255,0.85)", sub: "rgba(255,255,255,0.4)" },
];

const logoSuite = [
  { role: "Primary Logo", file: "logo-primary-reversed", note: "Stacked lockup. The vendor default, and the version that leads on the website and printed collateral." },
  { role: "Secondary Logo", file: "logo-secondary-reversed", note: "Horizontal lockup for wide, short spaces — a site header, an email signature, the top of a form." },
  { role: "Logo Mark", file: "logo-mark-color", note: "The pomegranate standing alone, for favicons, seals and embroidery where the wordmark would not survive." },
  { role: "Submark", file: "logo-submark-reversed", note: "Compact badge for profile images, packaging seals and merchandise." },
];

const mockups = [
  { file: "mock-tote", label: "Merchandise", name: "Canvas Tote", alt: "Fortified Motherhood canvas tote bag printed with the stacked pomegranate logo" },
  { file: "mock-supplement-jar", label: "Packaging", name: "Supplement Label", alt: "Fortified Motherhood amber supplement jar with a milky oats illustration on the label" },
  { file: "mock-journal", label: "Print", name: "Postpartum Journal", alt: "Fortified Motherhood hardcover journal with the violet botanical illustration on the cover" },
  { file: "mock-onesie", label: "Apparel", name: "Infant Bodysuit", alt: "Fortified Motherhood infant bodysuit printed with the calendula illustration" },
  { file: "mock-swaddle", label: "Textiles", name: "Patterned Swaddle", alt: "Fortified Motherhood swaddle blanket in the botanical repeating pattern" },
  { file: "mock-robe", label: "Apparel", name: "Recovery Robe", alt: "Fortified Motherhood robe embroidered with the mother and baby illustration" },
  { file: "mock-meal-box", label: "Packaging", name: "Meal Delivery Box", alt: "Fortified Motherhood meal container with the warm meals illustration on the sleeve" },
  { file: "mock-balm-tin", label: "Packaging", name: "Balm Tin", alt: "Fortified Motherhood balm tin stamped with the pomegranate logo mark" },
  { file: "mock-bib", label: "Textiles", name: "Infant Bib", alt: "Fortified Motherhood infant bib printed with the wild rose illustration" },
  { file: "mock-sweatshirt", label: "Apparel", name: "Crewneck", alt: "Fortified Motherhood cream crewneck sweatshirt printed with the raspberry leaf illustration" },
  { file: "mock-pouch", label: "Merchandise", name: "Canvas Pouch", alt: "Fortified Motherhood canvas zip pouch printed with the pomegranate logo mark" },
  { file: "mock-nursing-pillow", label: "Textiles", name: "Nursing Pillow", alt: "Fortified Motherhood nursing pillow covered in the botanical repeating pattern" },
];

const impacts = [
  { label: "Category Break", desc: "No lotus, no script, no blush. The brand is recognisably not the practice next to it." },
  { label: "Meaning Throughout", desc: "Eight botanicals chosen for what they do in recovery, not for how they decorate." },
  { label: "Built to Scale", desc: "A system ready for a website, virtual coaching, packaging and merchandise before those exist." },
  { label: "Confidence to Share", desc: "An identity Odell can put in front of a client without explaining or apologising for it." },
];

export default function FortifiedMotherhood() {
  useSEO({
    title: "Fortified Motherhood Brand Identity | Black Rabbit Creative, Portsmouth NH",
    description:
      "Brand strategy, logo suite, hand-drawn botanical illustration and pattern design for Fortified Motherhood, a postpartum care practice — by Black Rabbit Creative in Portsmouth, New Hampshire.",
    canonical: "/work/fortified-motherhood",
  });

  return (
    <div className="bg-white text-[#111] min-h-screen">

      {/* ── Dark top block ── */}
      <div style={{ backgroundColor: ink }}>
        <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-[#8DB6C8] transition-colors duration-300"
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
              Postpartum Care Brand Identity
            </span>
            <h1
              className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Fortified{" "}
              <em className="not-italic" style={{ color: steelBlue }}>Motherhood</em>
            </h1>
            <p className="mt-5 text-white/30 text-sm uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              Strength supporting softness
            </p>
            <p className="mt-6 text-white/40 text-sm leading-relaxed max-w-2xl">
              Brand strategy · Visual identity · Logo suite · Hand-drawn illustration · Pattern design
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
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: steelBlue }}>
                    {item.label}
                  </p>
                  <p className="text-sm text-white/50 leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 md:px-16 lg:px-24 py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto"
          >
            <Image
              src={`${A}/hero-flatlay.webp`}
              width={1800}
              height={1200}
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              alt="Fortified Motherhood brand collateral — journal, supplement jar, infant bodysuit and patterned swaddle styled with a halved pomegranate"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>
      </div>

      {/* ── The Brief + The Challenge ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ivory }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-8" style={{ color: pomegranate }}>
              The Brief
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              A brand to match{" "}
              <em className="not-italic" style={{ color: pomegranate }}>the care</em>
            </h2>
            <p className="text-black/60 leading-[1.9] text-[0.95rem]">
              Odell Mayer-Bouchard is a mother of three, a trained bodyworker and a professional cook. She had spent
              years doing postpartum care quietly, through word of mouth, subcontracting and community. Her practice
              brings together Asian bodywork, doula care, nourishing meals and, soon, virtual coaching.
            </p>
            <p className="text-black/60 leading-[1.9] text-[0.95rem] mt-5">
              She came to me with a logo she had made with AI. The lines were thin, it was hard to read at small sizes,
              and it could not carry a real business. She needed a full identity she could share with confidence — one
              that would make her{" "}
              <span className="text-[#111] font-semibold">the go-to postpartum specialist in the Monadnock region</span>{" "}
              and reach mothers well beyond it.
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
            <p className="text-black/60 leading-[1.9] text-[0.95rem] mb-5">
              Postpartum branding has become wallpaper. Lotus flowers, mother-and-child silhouettes, watercolour
              florals, flowing scripts and blush palettes show up on almost every brand. A new mother searching for
              support cannot tell one practice from the next.
            </p>
            <p className="text-black/60 leading-[1.9] text-[0.95rem] mb-8">
              Fortified Motherhood is not soft or generic, so the brand could not be either. Odell&rsquo;s work has depth
              and substance. It is rooted in ancient traditions and in her own experience as a mother.
            </p>
            <div className="space-y-0">
              {challenges.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
                  className="flex items-center gap-4 py-3 border-b border-black/8 last:border-0"
                >
                  <span className="text-[10px] font-black tracking-[0.15em] flex-shrink-0 w-7" style={{ color: pomegranate }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-black/65 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Approach: the strategic finding ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ink }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-[11px] uppercase tracking-[0.35em] mb-8"
            style={{ color: steelBlue }}
          >
            The Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-black uppercase tracking-[0.06em] leading-[1.1] text-white mb-8"
            style={{ fontSize: "clamp(1.6rem, 3.4vw, 3rem)" }}
          >
            Less baby shower.{" "}
            <em className="not-italic" style={{ color: steelBlue }}>More ancient wisdom<br className="hidden md:block" /> meets modern woman.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/45 leading-[1.9] text-[0.95rem] max-w-2xl mx-auto"
          >
            I started with strategy: defining two core clients, analysing regional and national competitors, and mapping
            the brand&rsquo;s personality. The finding was clear. Nobody in this space was pairing intimacy with strength.
            That became the direction, and every decision after it — colour, type, illustration, pattern — was made
            against it.
          </motion.p>
        </div>
      </section>

      {/* ── Colour ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: "#141b1e" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: steelBlue }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Colour
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-[1.9] max-w-2xl">
              A deep pomegranate carries the mark. Steel blue and slate hold the brand steady around it, forest green
              and clay come from the botanicals, and warm ivory gives everything room to breathe. The palette is warm
              without being sweet and rich without being heavy. It breaks deliberately from the pastels that dominate
              the category.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8">
            {palette.map((swatch) => (
              <motion.div
                key={swatch.hex}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col justify-between p-6 aspect-square ${swatch.border ? "ring-1 ring-inset ring-white/15" : ""}`}
                style={{ backgroundColor: swatch.hex }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: swatch.sub }} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: swatch.text }}>
                    {swatch.label}
                  </p>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: swatch.sub }}>
                    {swatch.hex}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ivory }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: pomegranate }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Typography
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {[
              { name: "Aptly", role: "Logo Font", note: "Reserved for the wordmark alone — a condensed uppercase structure answered by rounded warmth." },
              { name: "Henriette", role: "Headlines", note: "Weighted, old-style and full of character. It gives the brand its sense of history and strength." },
              { name: "Avenir", role: "Body Copy", note: "The workhorse. Clear, calm and highly readable without ever feeling sterile." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 md:p-10 bg-white"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] block mb-6" style={{ color: pomegranate }}>
                  {t.role}
                </span>
                <p className="font-black tracking-[0.02em] mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
                  {t.name}
                </p>
                <p className="text-sm text-black/55 leading-relaxed">{t.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logo suite ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ink }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: steelBlue }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Logo Suite
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-[1.9] max-w-2xl">
              A complete system rather than a single mark: primary, secondary, logo mark and submark, plus versions
              carrying the tagline and the service line. Each ships in colour, black and reversed, for print and
              digital. Every mark holds up on a website header, an Instagram avatar or a stamped tote bag.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
            {logoSuite.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-8 flex flex-col"
                style={{ backgroundColor: "#1a2327" }}
              >
                <span className="text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: steelBlue }}>
                  {item.role}
                </span>
                <div
                  className="flex-1 flex items-center justify-center rounded-sm mb-4 p-4"
                  style={{ minHeight: 140, backgroundColor: "rgba(141,182,200,0.07)" }}
                >
                  <Image
                    src={`${A}/${item.file}.webp`}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 1024px) 50vw, 300px"
                    alt={`Fortified Motherhood ${item.role.toLowerCase()}`}
                    className="max-w-full h-auto max-h-[140px] w-auto object-contain"
                  />
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Illustration ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ivory }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: pomegranate }}>
              Hand-Drawn Illustration
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              An apothecary,{" "}
              <em className="not-italic" style={{ color: pomegranate }}>drawn by hand</em>
            </h2>
            <p className="text-black/60 leading-[1.9] text-[0.95rem]">
              This is where the brand becomes its own. I drew each illustration by hand instead of buying stock
              florals. The imperfect, human line is a quiet signal of what Odell offers: care from real hands, not a
              clinical process. Every subject was chosen for what it means in postpartum recovery — the eight read as
              an herbal apothecary for the brand, and each one tells part of the story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
            {illustrations.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                className="bg-white p-8 flex flex-col"
              >
                <div className="flex items-center justify-center mb-6" style={{ minHeight: 150 }}>
                  <Image
                    src={`${A}/illo-${item.slug}.webp`}
                    width={900}
                    height={900}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 260px"
                    alt={`${item.name} — hand-drawn botanical illustration for Fortified Motherhood by Black Rabbit Creative`}
                    className="w-auto h-auto max-h-[150px] max-w-[150px] object-contain"
                  />
                </div>
                <p className="text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color: pomegranate }}>
                  {item.token}
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.08em] mb-3">{item.name}</p>
                <p className="text-[13px] text-black/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pattern ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: ink }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: steelBlue }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Pattern
            </h2>
            <p className="text-white/45 leading-[1.9] text-[0.95rem]">
              The botanicals are woven into a repeating pattern that brings texture and richness to packaging, print,
              merchandise and digital backgrounds. It is used as accent, not decoration — a way for the brand to fill a
              surface without ever repeating the logo.
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src={`${A}/pattern.webp`}
              width={1600}
              height={1013}
              sizes="(max-width: 1024px) 100vw, 780px"
              alt="Fortified Motherhood repeating botanical pattern built from the hand-drawn herbs"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Brand in action ── */}
      <section style={{ backgroundColor: ink }} className="py-20 md:py-28 border-t border-white/5">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: steelBlue }}>
              Real-World Applications
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Brand in Action
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
          {mockups.map((item, i) => (
            <motion.div
              key={item.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              className="flex flex-col"
            >
              <div
                className="relative overflow-hidden flex items-center justify-center w-full"
                style={{ height: "clamp(280px, 34vw, 440px)", backgroundColor: "#1a2327" }}
              >
                <Image
                  src={`${A}/${item.file}.webp`}
                  width={1400}
                  height={1400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-4 text-center">
                <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: steelBlue }}>{item.label}</p>
                <p className="text-white text-sm uppercase tracking-[0.15em]">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={`${A}/mock-website.webp`}
              width={1800}
              height={1200}
              sizes="(max-width: 1280px) 100vw, 1200px"
              alt="Fortified Motherhood website design shown on a laptop and phone, with the pomegranate logo and botanical icons"
              className="w-full h-auto object-cover"
            />
            <p className="text-[9px] uppercase tracking-[0.35em] mt-4 text-center" style={{ color: steelBlue }}>
              Digital — Website Direction
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Brand guide ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28" style={{ backgroundColor: "#141b1e" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: steelBlue }}>
              Delivery
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Brand Guide
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-[1.9] max-w-2xl">
              Written for the people who will actually use it — a printer, a merch vendor, Odell herself at eleven at
              night. Logo rules, the full palette with production values, the botanical tokens and what each one means.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Image
                  src={`${A}/brand-guide-${n}.webp`}
                  width={1400}
                  height={1812}
                  sizes="(max-width: 768px) 100vw, 380px"
                  alt={`Fortified Motherhood brand guide page ${n} of 3 — designed by Black Rabbit Creative`}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="bg-white px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: pomegranate }}>
              The Solution
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              It feels like her,{" "}
              <em className="not-italic" style={{ color: pomegranate }}>not like the category</em>
            </h2>
            <p className="text-black/60 leading-[1.9] text-[0.95rem]">
              Fortified Motherhood now has a brand that matches the depth of Odell&rsquo;s work. Every element carries
              meaning: the pomegranate mark, the old-style type, and herbs drawn by hand that postpartum women have
              relied on for centuries. The system is complete — a full logo suite, brand typography and colour, eight
              hand-drawn illustrations, a signature pattern and a brand guide — and it is ready for her website, her
              virtual coaching and the community-funded care she plans to offer one day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 mt-16">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="bg-white p-8 md:p-10"
              >
                <div className="w-8 h-px mb-6" style={{ backgroundColor: pomegranate }} />
                <p className="text-[11px] uppercase tracking-[0.25em] mb-3" style={{ color: pomegranate }}>
                  {item.label}
                </p>
                <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-black/6" style={{ backgroundColor: ivory }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/30 mb-4">
              Tired of looking like everyone else in your category?
            </p>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Let&rsquo;s build something{" "}
              <em className="not-italic" style={{ color: pomegranate }}>distinct</em>
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
              style={{ backgroundColor: pomegranate }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={13} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              href="/services/brand-identity"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs uppercase tracking-[0.2em] border border-black/15 text-black/50 hover:text-black hover:border-black/30 transition-colors duration-300"
              style={{ borderColor: slate }}
            >
              See Branding Packages
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
