'use client'
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const printPosterImg = "/assets/27b429ff9bf6ae77c400a58d4198a2382953e9e5.png";
const printSignageImg = "/assets/da8799c4a22801c7bf7972cc8d63e82ed636a867.png";
const printBannerImg = "/assets/82b6155974800c3b6267bdb034889a1ad3d27b7b.png";
const labyrinthSignImg = "/assets/5f2985b47c9b27b00d3d122f4c725ea70d4dd635.png";
const danyaOsBackImg = "/assets/ccad00bb27b2ea1d0f638ab15b7411ee251631d4.png";
const danyaOsFrontImg = "/assets/6805f3d32128fccf47e76ec0876757d3abe45296.png";
const pridePosterImg = "/assets/f3e7689f6167dc5e912799624b422cacc8106736.png";
const shamrockTeeImg = "/assets/acc7b7043190d7bce172e8813d061a4b8079cdd2.png";
const stickerKettleImg = "/assets/1e7c6b05f17a15dc843083a598d98939651c6295.png";
const stickerHalloweenImg = "/assets/24dfc39e775a9ce10a9c4d3bde39e1501c234a66.png";
const stickerBeachImg = "/assets/09fa4ba1187f7ae7a3d091d29ce90fcbd5599abd.png";
const stickerGhostImg = "/assets/7a01ae7ef0f06c88802343ffc328b851489ef45a.png";

const meta = [
  { label: "Studio", value: "Black Rabbit Creative" },
  { label: "Project Type", value: "Print & Environmental Design" },
  { label: "Deliverables", value: "Posters, Signage, Banners, Merchandise, Self-Promo" },
  { label: "Years", value: "2023 — 2025" },
];

const printPieces = [
  {
    img: printPosterImg,
    alt: "DJ Chris Hamilton 'Get Down' event poster — bold illustrated promotional poster for Madame Sherri's, Keene NH | Graphic design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Event Poster Design",
    client: "Madame Sherri's",
    desc: "Illustrated promotional poster for a DJ event — bold pop-art style with custom lettering and halftone textures.",
  },
  {
    img: pridePosterImg,
    alt: "Keene Pride Prom After Party '2099' — futuristic neon-illustrated event poster | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Event Poster — Illustration",
    client: "Keene Pride Festival",
    desc: "Futuristic neon-illustrated poster for the '2099' Prom After Party — custom character, hand-lettering, and cyberpunk aesthetic.",
  },
  {
    img: printSignageImg,
    alt: "Kapiloff Insurance Solutions — outdoor LED pylon sign | Sign design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Outdoor Signage",
    client: "Kapiloff Insurance",
    desc: "Branded pylon sign with LED message board — clear hierarchy and roadside visibility for a high-traffic location.",
  },
  {
    img: labyrinthSignImg,
    alt: "The Monadnock Labyrinth — interpretive signage panel | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Interpretive Signage",
    client: "The Monadnock Labyrinth",
    desc: "Community land art project wayfinding panel — illustrative environmental signage designed for year-round outdoor durability.",
  },
  {
    img: printBannerImg,
    alt: "City of Keene Coming Events board — Shamrock Shuffle 5K banner | Event marketing by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Event Banners",
    client: "Cheshire Children's Museum",
    desc: "Large-format event banner for the Shamrock Shuffle 5K fundraiser — designed for outdoor community display.",
  },
  {
    img: shamrockTeeImg,
    alt: "Cheshire Children's Museum Shamrock 5K & Family Day — custom illustrated t-shirt | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England",
    label: "Event Merchandise",
    client: "Cheshire Children's Museum",
    desc: "Custom illustrated event t-shirt with retro mascot characters for the annual fundraiser.",
  },
];

const categories = [
  { label: "Event Posters", count: "2" },
  { label: "Outdoor Signage", count: "2" },
  { label: "Banners & Displays", count: "1" },
  { label: "Event Merchandise", count: "1" },
  { label: "Self-Promotion", count: "1" },
];

export default function PrintMaterials() {
  useSEO({
    title: "Print Materials & Signage | Black Rabbit Creative, Portsmouth NH",
    description: "Print materials, event posters, signage, banners, and promotional designs by Black Rabbit Creative — a graphic design studio in Portsmouth, New Hampshire, New England.",
    canonical: "/work/print-materials",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ── Back nav ── */}
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
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
          className="mb-10"
        >
          <span className="block text-[11px] uppercase tracking-[0.35em] text-white/30 mb-4">
            Graphic Design
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(2.6rem, 6vw, 6rem)" }}
          >
            Print{" "}
            <em className="not-italic text-[#5b3fd6]">Materials</em>
          </h1>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Posters, Signage, Banners &amp; Merchandise
          </p>
        </motion.div>
      </section>

      {/* ── Meta bar ── */}
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width hero — DJ Chris Hamilton poster ── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={printPosterImg}
            alt="DJ Chris Hamilton 'Get Down' event poster — bold illustrated promotional poster for Madame Sherri's, Keene NH | Graphic design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Designed for the{" "}
              <em className="not-italic text-[#5b3fd6]">real world.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                Print materials carry your brand into physical spaces where first
                impressions are made in seconds. From illustrated event posters and
                outdoor signage to large-format banners and custom merchandise, every
                piece is designed for impact, clarity, and production-ready precision.
              </p>
              <p>
                This collection showcases a range of print and environmental design
                work produced for local businesses, community organizations, and
                events across the Monadnock Region and beyond.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative overflow-hidden bg-[#0a0a0a]">
              <img
                src={pridePosterImg}
                alt="Keene Pride Prom After Party '2099' — futuristic neon-illustrated event poster | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Signage & Environmental ── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Signage &amp; Environmental
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Extending the brand into{" "}
              <em className="not-italic text-[#5b3fd6]">physical space.</em>
            </h2>
          </motion.div>

          {/* Two-column: signage + labyrinth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-[#f5f3f0] aspect-[4/5]">
                <img
                  src={printSignageImg}
                  alt="Kapiloff Insurance Solutions — outdoor LED pylon sign | Sign design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Outdoor Signage</p>
                <p className="text-sm text-gray-500 leading-relaxed">Branded pylon sign with LED message board — clear hierarchy and roadside visibility for a high-traffic location.</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#060606]/30 mt-2">Kapiloff Insurance</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-[#f5f3f0] aspect-[4/5]">
                <img
                  src={labyrinthSignImg}
                  alt="The Monadnock Labyrinth — interpretive signage panel | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Interpretive Signage</p>
                <p className="text-sm text-gray-500 leading-relaxed">Community land art project wayfinding panel — illustrative environmental signage designed for year-round outdoor durability.</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#060606]/30 mt-2">The Monadnock Labyrinth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Event Banners & Merchandise ── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Event Banners &amp; Merchandise
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              From banners to{" "}
              <em className="not-italic text-[#5b3fd6]">wearable design.</em>
            </h2>
          </motion.div>

          {/* Banner + Tee side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden bg-[#f5f3f0] aspect-[4/5] flex items-center justify-center p-6">
                <img
                  src={printBannerImg}
                  alt="City of Keene Coming Events board — Shamrock Shuffle 5K banner | Event marketing by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Event Banner</p>
                <p className="text-sm text-gray-500 leading-relaxed">Shamrock Shuffle 5K & Family Day — large-format community display</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#060606]/30 mt-2">Cheshire Children's Museum</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative overflow-hidden bg-[#f5f3f0] aspect-[4/5] flex items-center justify-center p-6">
                <img
                  src={shamrockTeeImg}
                  alt="Cheshire Children's Museum Shamrock 5K & Family Day — custom illustrated t-shirt | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Event Merchandise</p>
                <p className="text-sm text-gray-500 leading-relaxed">Custom illustrated t-shirt with retro mascot characters for the annual fundraiser</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#060606]/30 mt-2">Cheshire Children's Museum</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Custom Illustrated Stickers ── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Custom Illustrated Stickers
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Hand-drawn characters,{" "}
              <em className="not-italic text-[#5b3fd6]">die-cut & ready to stick.</em>
            </h2>
            <p className="mt-6 text-gray-500 leading-[1.9] max-w-2xl">
              Every sticker starts as a custom illustration — original characters drawn
              with personality, halftone textures, and bold line work. Die-cut to shape
              and printed on durable vinyl, they're designed to live on laptops, water
              bottles, and everywhere in between.
            </p>
          </motion.div>

          {/* 2x2 grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
            {[
              {
                img: stickerKettleImg,
                alt: "'Settle Your Kettle' — custom illustrated vinyl sticker featuring an ornate pink and green teapot with hand-lettered typography",
                title: "Settle Your Kettle",
              },
              {
                img: stickerHalloweenImg,
                alt: "Halloween glamour — custom illustrated die-cut sticker of an elegant character in a sparkling black gown under a full moon with bats",
                title: "Halloween Glamour",
              },
              {
                img: stickerBeachImg,
                alt: "'Whatever You Want, Baby' — retro pop-art illustrated sticker of a pin-up character sunbathing on a striped towel",
                title: "Whatever You Want, Baby",
              },
              {
                img: stickerGhostImg,
                alt: "Hiking ghost — custom illustrated die-cut sticker of a ghost with a sun hat, backpack, and walking stick on an adventure",
                title: "Hiking Ghost",
              },

            ].map((sticker, i) => (
              <motion.div
                key={sticker.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-square bg-[#f5f3f0] rounded-2xl overflow-hidden flex items-center justify-center p-4 group-hover:bg-[#eee9e4] transition-colors duration-500">
                  <img
                    src={sticker.img}
                    alt={sticker.alt}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#060606]/60">{sticker.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Format tag */}
          <motion.div
            className="mt-12 pt-8 border-t border-[#060606]/8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2">
              {["Custom Illustration", "Die-Cut Vinyl", "Character Design", "Hand-Lettering", "Halftone Textures"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-2 text-[11px] uppercase tracking-[0.12em] border border-[#060606]/10 text-[#060606]/50 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Self-Promotion: Danya-O's ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Self-Promotion
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Creative Crunch —{" "}
              <em className="not-italic text-[#5b3fd6]">award-winning self-promo.</em>
            </h2>
            <p className="mt-6 text-white/50 leading-[1.9] max-w-2xl">
              Danya-O's "Creative Crunch" is a custom illustrated cereal box self-promotion
              piece that earned a GD USA 2025 Package Design Award. Retro pop-art character
              art, hand-lettering, and a playful "Design Nutrition" panel showcase
              brand strategy through the lens of breakfast cereal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-[#111] aspect-[3/4] flex items-center justify-center p-6">
                <img
                  src={danyaOsFrontImg}
                  alt="Danya-O's Creative Crunch cereal box front — retro pop-art illustrated self-promotion piece | Illustration by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Front Panel</p>
                <p className="text-sm text-white/50 leading-relaxed">Custom illustrated character with retro pop-art styling and hand-lettered typography.</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-2">GD USA 2025 Award Winner</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative overflow-hidden bg-[#111] aspect-[3/4] flex items-center justify-center p-6">
                <img
                  src={danyaOsBackImg}
                  alt="Danya-O's Creative Crunch cereal box back — Design Nutrition panel with brand strategy breakdown | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Back Panel</p>
                <p className="text-sm text-white/50 leading-relaxed">"Design Nutrition" panel with ingredients, brand strategy breakdown, and interactive maze.</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 mt-2">Package Design Awards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
              Need print materials?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Bring your brand into the{" "}
              <em className="not-italic text-[#5b3fd6]">physical world.</em>
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
              className="group relative inline-flex items-center justify-center gap-3 bg-[#060606] text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-3 border border-[#060606]/20 text-[#060606] px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:border-[#060606]/60 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}