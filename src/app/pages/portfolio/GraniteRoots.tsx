'use client'
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
const heroImg = "/assets/50e23837cf920f2e5faee0e0a19273c2909f747d.png";
const sideHouseImg = "/assets/9f287c83c845164e089b289e3024b4a7a8a5e465.png";
const sideTrainImg = "/assets/6479d3ffe8f0ef38bec89d85a84101ac451c0af2.png";
const backImg = "/assets/f4186fd57b287eaaf67087cab3a38d32ccca65df.png";
const fullLabelImg = "/assets/874f30422be2f740afa26039e87110aeaa92d620.png";
const trainStationImg = "/assets/d2cfeced632756eb4a0e48e7edff40d3e48f1322.png";

const meta = [
  { label: "Client", value: "Granite Roots Brewing" },
  { label: "Product", value: "Cheshire Czech 12° Lager" },
  { label: "Scope", value: "Packaging Design & Illustration" },
  { label: "Recognition", value: "2025 GDUSA Package Design Award" },
];

const features = [
  "Custom illustrated beer label",
  "Psychedelic 60s-inspired aesthetic",
  "Local landmark integration",
  "Mount Monadnock feature",
  "Steam train centerpiece",
  "Shelf-aware color strategy",
  "National award recognition",
];

export default function GraniteRoots() {
  useSEO({
    title: "Granite Roots Brewing Craft Beer Label Design | GDUSA 2025 Award | Black Rabbit Creative",
    description: "Award-winning craft beer label design for Granite Roots Brewing's Cheshire Czech Lager — GDUSA 2025 Packaging Award winner. Beer packaging and brewery branding by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/granite-roots-brewing",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ── Back nav ─ */}
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
          {/* Award badge */}
          <div className="inline-flex items-center gap-2 border border-[#5b3fd6]/50 bg-[#5b3fd6]/10 px-4 py-2 mb-8">
            <Award size={13} className="text-[#5b3fd6]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5b3fd6]">
              2025 GDUSA Package Design Award
            </span>
          </div>

          <span className="block text-[11px] uppercase tracking-[0.35em] text-white/30 mb-4">
            Packaging Design
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Granite Roots{" "}
            <em className="not-italic text-[#5b3fd6]">Brewing</em>
          </h1>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Steam Train Beer Label
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

      {/* ── Overview ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
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
              Local heritage,{" "}
              <em className="not-italic text-[#5b3fd6]">bold presence.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                Granite Roots Brewing commissioned this label to celebrate the town of Troy, New Hampshire's acquisition of a historic steam train. The goal was to create packaging that honored local pride while delivering strong visual impact in a competitive craft beer market.
              </p>
              <p>
                The final design blends regional landmarks with a bold psychedelic aesthetic, creating a label that feels both rooted in place and immediately eye-catching on shelf.
              </p>
              <p>
                Recognized in the 2025 GDUSA Package Design Awards, the project stood out in a highly competitive national field for its integration of local storytelling with a confident, shelf-ready visual approach.
              </p>
            </div>
            <a
              href="https://gdusa.com/competitions/package-design/?current_year=2025&section=winner&rns=0-11884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-[0.25em] text-[#5b3fd6] hover:gap-3 transition-all duration-300"
            >
              View GDUSA Award <ArrowRight size={12} />
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src={backImg}
              alt="Granite Roots Brewing Cheshire Czech Lager — back panel detail | Packaging design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Design Approach ── */}
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
              Design Approach
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Psychedelic art meets{" "}
              <em className="not-italic text-[#5b3fd6]">local story.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5 text-gray-500 leading-[1.9]"
            >
              <p>
                The visual direction draws inspiration from 1960s psychedelic poster art, with subtle influence from the work of Peter Max and the era's iconic graphic language. Vibrant color, rhythmic pattern, and strong illustration work together to create movement and energy across the can.
              </p>
              <p>
                Key elements were carefully integrated to maintain authenticity — the train station was illustrated from reference photography, Mount Monadnock anchors the composition as a recognizable local landmark, and the beer name signage echoes Troy's welcome sign.
              </p>
              <p>
                Color and pattern were balanced for both character and shelf clarity. The result is packaging that celebrates place while maintaining strong retail presence.
              </p>

              {/* Feature list */}
              <div className="pt-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-5">
                  Design Features
                </p>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#5b3fd6] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Full label illustration + reference photo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4"
            >
              <img
                src={fullLabelImg}
                alt="Granite Roots Brewing full wraparound label illustration — Czech village and Troy NH train station | Illustrated by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
              <div className="relative overflow-hidden">
                <img
                  src={trainStationImg}
                  alt="Troy, NH Train Station — original photo reference for Granite Roots label illustration | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    Reference — Troy Train Station, NH
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width image strip ── */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {[sideTrainImg, heroImg, sideHouseImg].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="overflow-hidden"
            style={{ aspectRatio: "1/1" }}
          >
            <img
              src={img}
              alt={`Granite Roots can view ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
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
              On shelves across{" "}
              <em className="not-italic text-[#5b3fd6]">New Hampshire.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                The finished can is now distributed across New Hampshire, successfully capturing the spirit of Troy while helping the product stand out in a crowded craft beer environment.
              </p>
              <p>
                The project demonstrates how locally rooted storytelling and strategic packaging design can work together to create memorable shelf presence — and earn national recognition in the process.
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Award</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">GDUSA 2025</p>
                <p className="text-white/40 text-sm mt-1">Package Design Award</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Distribution</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">Statewide</p>
                <p className="text-white/40 text-sm mt-1">New Hampshire retail locations</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Recognition</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">National</p>
                <p className="text-white/40 text-sm mt-1">Competitive national field</p>
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
              Ready to stand out?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
            >
              Packaging that earns{" "}
              <em className="not-italic text-[#5b3fd6]">attention.</em>
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