'use client'
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Book cover images
const hitchhikersOriginalImg = "/assets/c2dae3274ecf60f8e6f2b97c7ab7a87a42689708.png";
const hitchhikersRedesignImg = "/assets/d722827696a730f2c261adcfc080ff1dde43c556.png";
const hitchhikersBothImg = "/assets/7247983c9ca5f40235ae9b6a57322f2241c68aa8.png";
const watercolorDreamImg = "/assets/a3affc9c8fa7f33683e419f95c9ba3bf7d8fc4e1.png";

const cosmic = "#3a8fd6";
const gold = "#d4a017";

const hitchhikersMeta = [
  { label: "Project", value: "The Hitchhiker's Guide to the Galaxy" },
  { label: "Type", value: "Book Cover Redesign" },
  { label: "Scope", value: "Cover Design, Typography, Illustration" },
  { label: "Year", value: "2025" },
];

export default function Books() {
  useSEO({
    title: "Book Cover Design | Black Rabbit Creative, Portsmouth NH",
    description: "Book cover redesigns and design — Hitchhiker's Guide to the Galaxy cover redesign and The Watercolor Dream Book by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/books",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* -- Back nav -- */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-28 pb-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Work
        </Link>
      </div>

      {/* PAGE TITLE */}
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
            Book{" "}
            <em className="not-italic text-[#5b3fd6]">Design</em>
          </h1>
          <p className="text-white/40 text-[13px] sm:text-sm md:text-base leading-relaxed max-w-2xl">
            Full book projects — from cover redesigns to complete book proposals,
            exploring typography, illustration, layout, and editorial design.
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* ======================================================
          BOOK 01 — THE HITCHHIKER'S GUIDE TO THE GALAXY
      ====================================================== */}

      {/* -- Header -- */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-4 border"
            style={{ borderColor: cosmic, color: cosmic }}
          >
            Book 01
          </span>
          <h2
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            The Hitchhiker's{" "}
            <em className="not-italic" style={{ color: gold }}>Guide to the Galaxy</em>
          </h2>
          <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Book Cover Redesign &mdash; Douglas Adams
          </p>
        </motion.div>
      </section>

      {/* -- Meta bar -- */}
      <section className="border-t border-b border-white/8">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 md:gap-y-0 md:divide-x divide-white/8">
            {hitchhikersMeta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="px-0 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 md:first:pl-0"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-1.5" style={{ color: cosmic }}>
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Image 1: Original cover + text -- */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={hitchhikersOriginalImg}
              alt="The Hitchhiker's Guide to the Galaxy — original 1979 Pocket Books cover | Book cover analysis by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full max-w-xs mx-auto lg:max-w-none object-contain"
            />
          </motion.div>
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-3" style={{ color: cosmic }}>
              The Original
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
            >
              Redesigning a{" "}
              <em className="not-italic" style={{ color: gold }}>classic.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              The 1979 Pocket Books cover is iconic — surreal illustration, a hitchhiking thumb,
              floating planets, and a grinning green alien. This project reimagines it for a modern
              audience, swapping painterly surrealism for retro-futuristic minimalism with a mechanical
              robot hand, bold angular type, and a deep navy &amp; amber gold palette.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Image 2: Redesigned cover -- */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-3" style={{ color: cosmic }}>
              The Redesign
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
            >
              Don't{" "}
              <em className="not-italic" style={{ color: gold }}>panic.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              The mechanical hand replaces the original's organic thumb — a nod to Marvin the Paranoid
              Android. Circular astronomical diagrams, bold angular sci-fi type, and the iconic
              "DON'T PANIC" seal anchor a cover that feels both vintage paperback and modern graphic novel.
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-4 order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={hitchhikersRedesignImg}
              alt="The Hitchhiker's Guide to the Galaxy — redesigned cover with mechanical robot hand and bold orange typography | Book cover design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full max-w-xs mx-auto lg:max-w-none object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* -- Image 3: Side-by-side mockup -- */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={hitchhikersBothImg}
            alt="Side-by-side 3D mockup comparing original and redesigned Hitchhiker's Guide book covers | Book design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full max-w-2xl mx-auto object-contain"
          />
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: cosmic }}>
              Original vs. Redesign
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              Same spirit, completely different visual language — reverence meets reinvention.
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="max-w-5xl mx-auto pt-6 mt-6 border-t border-white/8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-1.5">
            {["Book Cover Design", "Redesign", "Typography", "Illustration", "Sci-Fi", "Print Design", "Douglas Adams"].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-white/10 text-white/40 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider before Book 02 */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        <div className="border-t border-[#5b3fd6]/30" />
      </div>

      {/* ======================================================
          BOOK 02 — WILD MOCKTAIL BOOK PROPOSAL
      ====================================================== */}

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-4 border"
            style={{ borderColor: "#4a9e6f", color: "#4a9e6f" }}
          >
            Book 02
          </span>
          <h2
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            Wild{" "}
            <em className="not-italic" style={{ color: "#4a9e6f" }}>Mocktail</em>
          </h2>
          <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Book Proposal &mdash; Rebecca Hamilton
          </p>
        </motion.div>
      </section>

      {/* Meta bar */}
      <section className="border-t border-b border-white/8">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 md:gap-y-0 md:divide-x divide-white/8">
            {[
              { label: "Project", value: "Wild Mocktail" },
              { label: "Author", value: "Rebecca Hamilton" },
              { label: "Scope", value: "Layout, Typography, Editorial Design" },
              { label: "Format", value: "Digital Book" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="px-0 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 md:first:pl-0"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-1.5" style={{ color: "#4a9e6f" }}>
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief description */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 border-b border-white/5">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
            A complete book proposal for a wild-foraged mocktail recipe book — designed
            from cover to interior layout. Flip through the full proposal below to see
            the editorial design, typography, and layout in action.
          </p>
        </motion.div>
      </section>

      {/* Flipbook embed */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ position: "relative", paddingTop: "max(60%,324px)", width: "100%", height: 0 }}>
            <iframe
              style={{ position: "absolute", border: "none", width: "100%", height: "100%", left: 0, top: 0 }}
              src="https://online.fliphtml5.com/blackrabbitcreative/Wild-Mocktail---Book-Propsal/"
              title="Wild Mocktail - Book Proposal"
              seamless
              scrolling="no"
              frameBorder="0"
              allowTransparency
              allowFullScreen
            />
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: "#4a9e6f" }}>
              Interactive Flipbook
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              Browse the full book proposal — cover, interior spreads, recipes, and back matter.
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="max-w-6xl mx-auto pt-6 mt-6 border-t border-white/8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-1.5">
            {["Book Design", "Editorial Layout", "Typography", "Recipe Book", "Proposal", "Digital Book", "Mocktails"].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-white/10 text-white/40 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider before Book 03 */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        <div className="border-t border-[#5b3fd6]/30" />
      </div>

      {/* ======================================================
          BOOK 03 — THE WATERCOLOR DREAM BOOK
      ====================================================== */}

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-4 border"
            style={{ borderColor: "#6a9fd8", color: "#6a9fd8" }}
          >
            Book 03
          </span>
          <h2
            className="font-black uppercase tracking-[0.04em] sm:tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            The Watercolor{" "}
            <em className="not-italic" style={{ color: "#6a9fd8" }}>Dream Book</em>
          </h2>
          <p className="mt-2 sm:mt-3 text-white/40 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Book Design &mdash; Bill Whyte
          </p>
        </motion.div>
      </section>

      {/* Meta bar */}
      <section className="border-t border-b border-white/8">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 md:gap-y-0 md:divide-x divide-white/8">
            {[
              { label: "Project", value: "The Watercolor Dream Book" },
              { label: "Author", value: "Bill Whyte" },
              { label: "Scope", value: "Full Book Design & Layout" },
              { label: "Type", value: "Self-Published" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="px-0 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 md:first:pl-0"
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-1.5" style={{ color: "#6a9fd8" }}>
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cover image + description */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={watercolorDreamImg}
              alt="The Watercolor Dream Book by Bill Whyte — printed book with watercolor artwork on cover | Book design support by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full max-w-sm mx-auto lg:max-w-none object-contain"
            />
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.35em] mb-3" style={{ color: "#6a9fd8" }}>
              A Simple Nighttime Painting Practice
            </span>
            <h3
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-4"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
            >
              Art, ideas, and{" "}
              <em className="not-italic" style={{ color: "#6a9fd8" }}>purple birds.</em>
            </h3>
            <p className="text-white/50 leading-[1.7] sm:leading-[1.8] text-sm sm:text-[15px]">
              A self-published book written by Bill Whyte exploring watercolor as a nighttime painting
              practice to help you sleep and dream better. We handled the design — cover, interior
              layout, typography, and page composition — to feel as soft and flowing as the
              watercolor artwork itself. The result is a meditative, beautiful book that invites
              readers to slow down and create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flipbook embed */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ position: "relative", paddingTop: "max(60%,324px)", width: "100%", height: 0 }}>
            <iframe
              style={{ position: "absolute", border: "none", width: "100%", height: "100%", left: 0, top: 0 }}
              src="https://online.fliphtml5.com/blackrabbitcreative/ugzt/"
              title="The Watercolor Dream Book by Bill Whyte"
              seamless
              scrolling="no"
              frameBorder="0"
              allowTransparency
              allowFullScreen
            />
          </div>
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: "#6a9fd8" }}>
              Interactive Flipbook
            </p>
            <p className="text-xs text-white/40 leading-relaxed">
              Browse the full book — cover, interior spreads, and artwork throughout.
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="max-w-6xl mx-auto pt-6 mt-6 border-t border-white/8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-1.5">
            {["Book Design", "Watercolor", "Art Book", "Typography", "Editorial Layout", "Print Design", "Bill Whyte"].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-white/10 text-white/40 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#5b3fd6] text-white px-6 sm:px-8 py-3.5 uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              href="/work"
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