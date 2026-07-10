'use client'
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const heroGridImg = "/assets/placeholder-portfolio.png";
const backViewImg = "/assets/placeholder-portfolio.png";
const merchSpreadImg = "/assets/placeholder-portfolio.png";

const meta = [
  { label: "Client", value: "Keene Pride Festival" },
  { label: "Project Type", value: "Festival Merchandise Design" },
  { label: "Deliverables", value: "T-shirt Design, Merchandise Graphics" },
  { label: "Year", value: "2024" },
];

const features = [
  {
    label: "Rainbow Chevron Pattern",
    desc: "Bold chevron stripes in Pride flag colors create movement and visual impact.",
  },
  {
    label: "Festival Merchandise Design",
    desc: "Optimized for t-shirts and apparel worn by attendees and supporters.",
  },
  {
    label: "Community Representation",
    desc: "Color and pattern choices celebrate diversity while creating a shared visual identity for the festival.",
  },
];

const challenges = [
  "Represent the diversity of the LGBTQ+ community",
  "Create a sense of unity and celebration",
  "Stand out in a festival environment",
  "Reproduce cleanly across a variety of merchandise",
];

export default function KeenePride() {
  useSEO({
    title: "Keene Pride Festival Merchandise Design | Black Rabbit Creative, Portsmouth NH",
    description: "Vibrant merchandise design for Keene Pride Festival — rainbow chevron t-shirts, tote bags, and water bottles by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England.",
    canonical: "/work/keene-pride",
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
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl"
            style={{ fontSize: "clamp(2.6rem, 6vw, 6rem)" }}
          >
            Keene Pride{" "}
            <em className="not-italic text-[#5b3fd6]">Festival</em>
          </h1>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Pride Festival Merchandise Design
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

      {/* ── Full-width hero image ── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={heroGridImg}
            alt="Keene Pride Festival t-shirt designs — six views showing the rainbow chevron pattern across multiple models | Merchandise design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
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
              Bold festival{" "}
              <em className="not-italic text-[#5b3fd6]">merchandise.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                The Keene Pride Festival needed a vibrant merchandise design that would
                celebrate the LGBTQ+ community while creating something attendees would
                proudly wear long after the event ended.
              </p>
              <p>
                The goal was to create a design that felt joyful, inclusive, and instantly
                recognizable — something that captured the spirit of Pride while working
                seamlessly across t-shirts and other festival merchandise.
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
            <img
              src={backViewImg}
              alt="Keene Pride t-shirt back view — rainbow chevron pattern detail | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              The Challenge
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Balancing bold energy with{" "}
              <em className="not-italic text-[#5b3fd6]">meaningful symbolism.</em>
            </h2>
            <div className="space-y-5 text-gray-500 leading-[1.9]">
              <p>
                Designing for Pride means balancing bold visual energy with meaningful
                symbolism. The design needed to represent community, stand out in a
                festival environment, and reproduce cleanly across a variety of
                merchandise formats.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-5">
                Requirements
              </p>
              <ul className="space-y-3">
                {challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-[#5b3fd6] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Design Approach
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Chevrons as{" "}
              <em className="not-italic text-[#5b3fd6]">forward motion.</em>
            </h2>
            <div className="space-y-5 text-gray-500 leading-[1.9]">
              <p>
                The final concept uses rainbow chevron patterns to create movement and
                visual energy. Chevron shapes naturally communicate forward motion and
                progress, aligning with the Pride movement's continued push for
                visibility, equality, and celebration.
              </p>
              <p>
                The pattern also allowed the full Pride color spectrum to be expressed in
                a dynamic way while remaining simple enough for production across
                multiple garment types.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Full-width merch spread ── */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={merchSpreadImg}
            alt="Keene Pride Festival merchandise spread — tote bags, water bottles, and t-shirts featuring the rainbow chevron design | Merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ── Design Features ── */}
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
              Design Features
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Pattern, color,{" "}
              <em className="not-italic text-[#5b3fd6]">community.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border border-white/[0.06] p-8 md:p-12"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-4">
                  {f.label}
                </p>
                <p className="text-white/50 leading-[1.85] text-[0.95rem]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
              Impact
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Worn with{" "}
              <em className="not-italic text-[#5b3fd6]">pride.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                The design became a recognizable visual element of the 2024 Keene Pride
                Festival. Festival merchandise was widely worn throughout the event,
                reinforcing a sense of community and celebration while extending the
                festival's visibility beyond the day itself.
              </p>
              <p>
                The rainbow chevron pattern successfully translated across multiple
                merchandise formats — from t-shirts and tote bags to water bottles — each
                maintaining the bold, joyful energy of the original design concept.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="border border-white/10 p-8 space-y-6">
              <div className="border-b border-white/10 pb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Event</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">Keene Pride</p>
                <p className="text-white/40 text-sm mt-1">2024 Festival</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Merchandise</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">Multi-Format</p>
                <p className="text-white/40 text-sm mt-1">T-shirts, totes, bottles & more</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Reach</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">Community-Wide</p>
                <p className="text-white/40 text-sm mt-1">Visibility beyond the festival day</p>
              </div>
            </div>
          </motion.div>
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
              Ready to create something memorable?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Design that turns moments into{" "}
              <em className="not-italic text-[#5b3fd6]">lasting impressions.</em>
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