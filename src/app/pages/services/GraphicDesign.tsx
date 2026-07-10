'use client'
import Link from 'next/link';
// build-cache-bust-v2
import { useSEO } from "../../components/useSEO";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
const studioImg = "/assets/0073d227197a2d11078c48ed4c9955c144069439.png";
const rabbitImg = "/assets/9741a92e4ee4c1dd885eaf1bd19cfdc13c2c5de3.png";
const touchpointImg = "/assets/5d310534f3e3a5364f6b09941e1e6a7aeb24ea11.png";
const oldBrandImg = "/assets/12223c6312b759ed36ed217c3fe0a5dc4ccaa925.png";
const newBrandImg = "/assets/7c9c343e0780d9aeaac6fe49e459502282429caf.png";
const lobsterLabImg = "/assets/20f240a8ee30e1ccbb07e3d25224d0824577e939.png";
const calentonImg = "/assets/9487f73cf6857228ca1812e6af644c8fb87f662f.png";
const sequoiaImg = "/assets/8140257f03131aef1d3ebc0f25dc02ba7784ffe7.png";
const lobsterMenuImg = "/assets/88b89e394c1863621a0969459d4a1c52d920d3bf.png";
const novaDermImg = "/assets/1befc199b53a513fbd6cfef21325cdbc0d97cc67.png";
const basicBalanceMerchImg = "/assets/eee6a8e31ec3bd5688b0e312029b898cf6c3bf94.png";
const kapiloffImg = "/assets/7b601b39d3b58f9ece4134790020643744626ff9.png";
const monadnockImg = "/assets/4b8738d331bc018580f6aaa5ce7d8a9b5beae07a.png";
const keenePrideImg = "/assets/fa6880930640b741275a793c25b79c99740a3f75.png";
const hitchhikersImg = "/assets/2e28a03bd8af5876ba80e7d159f0248755d29eef.png";

const capabilities = [
  "Marketing and promotional materials",
  "Social and digital graphics",
  "Print collateral and editorial layouts",
  "Campaign and event design",
  "Custom illustration and icon systems",
  "Ongoing brand support",
];

const bestFit = [
  "Product-based brands expanding their visual system",
  "Breweries and specialty brands",
  "Businesses launching campaigns or promotions",
  "Brands needing cohesive ongoing design support",
  "Companies ready to elevate everyday brand materials",
];

const workItems = [
  {
    img: oldBrandImg,
    alt: "Basic Balance Acupuncture — Old Brand social media redesign",
    label: "Brand Refresh",
    tag: "Before",
  },
  {
    img: newBrandImg,
    alt: "Basic Balance Acupuncture — New Brand social media redesign",
    label: "Social Graphics",
    tag: "After",
  },
  {
    img: basicBalanceMerchImg,
    alt: "Basic Balance Acupuncture — branded tote bag and apparel merchandise",
    label: "Merchandise",
    tag: "Brand Merch",
  },
  {
    img: lobsterLabImg,
    alt: "Lobster Lab — storefront window illustration",
    label: "Environmental Graphics",
    tag: "Window Design",
  },
  {
    img: calentonImg,
    alt: "Calentón Mexican Hot Sauce — brand merchandise and illustration",
    label: "Merch & Illustration",
    tag: "Brand Support",
  },
  {
    img: sequoiaImg,
    alt: "Sequoia — print collateral and stationery system",
    label: "Print Collateral",
    tag: "Stationery System",
  },
  {
    img: lobsterMenuImg,
    alt: "Lobster Lab — branded menu design in print",
    label: "Menu Design",
    tag: "Print",
  },
  {
    img: novaDermImg,
    alt: "Nova Dermatology Specialists — brand signage in practice",
    label: "Brand Signage",
    tag: "Brand in Practice",
  },
  {
    img: kapiloffImg,
    alt: "Kapiloff Insurance Solutions — outdoor LED sign design",
    label: "Sign Design",
    tag: "Environmental",
  },
  {
    img: monadnockImg,
    alt: "The Monadnock Labyrinth — interpretive signage panel",
    label: "Interpretive Signage",
    tag: "Wayfinding",
  },
  {
    img: keenePrideImg,
    alt: "Keene Pride Festival — Danya Designs branded merchandise and apparel",
    label: "Merch Design",
    tag: "Event Branding",
  },
  {
    img: hitchhikersImg,
    alt: "The Hitchhiker's Guide to the Galaxy — book cover redesign",
    label: "Book Cover Design",
    tag: "Print Design",
  },
];

export default function GraphicDesign() {
  useSEO({
    title: "Graphic Design & Illustration | Black Rabbit Creative, Portsmouth NH",
    description: "Graphic design and custom illustration services from Black Rabbit Creative in Portsmouth, New Hampshire — event posters, marketing materials, social graphics, and print collateral for New England brands.",
    canonical: "/services/graphic-design",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] overflow-hidden px-6 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0 bg-[#060606]" />

        {/* Rabbit mascot — right side, desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.88, 0.88, 0], y: 0 }}
          transition={{
            opacity: {
              duration: 12,
              times: [0, 0.12, 0.88, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: { duration: 1.2, delay: 0.3, ease: "easeOut" },
          }}
          className="absolute top-1/2 -translate-y-1/2 right-[-160px] md:right-[-120px] lg:right-[-100px] z-10 w-[280px] sm:w-[400px] md:w-[600px] lg:w-[760px] pointer-events-none select-none hidden md:block"
        >
          <div
            style={{
              maskImage: "radial-gradient(ellipse 70% 85% at 60% 50%, black 42%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 85% at 60% 50%, black 42%, transparent 75%)",
            }}
          >
            <img
              src={rabbitImg}
              alt="Black Rabbit Creative mascot — graphic design and illustration studio, Portsmouth NH, New Hampshire, New England"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-between pt-28 pb-20">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
            >
              <ArrowLeft size={12} /> All Services
            </Link>
          </motion.div>

          {/* Hero copy */}
          <div className="lg:max-w-[50%]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8"
            >
              Service — 04
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-black uppercase tracking-[0.07em] leading-[0.9] mb-10"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 6rem)" }}
            >
              Graphic{" "}
              <em className="not-italic text-[#5b3fd6]">Design &amp;</em>
              <br />
              Illustration
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <p className="text-gray-400 leading-relaxed max-w-md" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                Strategic visuals that extend your brand.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start a Project <ArrowRight size={14} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div />
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left: copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              What It Is
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Every touchpoint,{" "}
              <em className="not-italic text-[#5b3fd6]">intentional.</em>
            </h2>
            <p className="text-gray-500 leading-[1.9] mb-6">
              Strong brands require more than a logo and packaging. Every touchpoint — from marketing materials to digital graphics — should feel cohesive, intentional, and unmistakably yours.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              Black Rabbit Creative provides graphic design and custom illustration that build on your brand foundation, ensuring your visual presence remains clear, consistent, and distinctive wherever it appears.
            </p>
          </motion.div>

          {/* Right: featured image */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative overflow-hidden bg-[#0a0a14] flex items-center justify-center mx-auto" style={{ aspectRatio: "4/5", maxHeight: "560px" }}>
              <img
                src={touchpointImg}
                alt="DJ Chris Hamilton 'Get Down' event poster — graphic design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DESIGNED TO SUPPORT ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Capabilities */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
              Capabilities
            </span>
            <div className="space-y-0 border-t border-[#060606]/8">
              {capabilities.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 py-5 border-b border-[#060606]/8"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <span className="text-[9px] font-mono text-[#5b3fd6] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Check size={11} className="text-[#5b3fd6] shrink-0" />
                  <span className="text-sm text-[#060606]/80 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Philosophy copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              Our Philosophy
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0] mb-8"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Designed to support the{" "}
              <em className="not-italic text-[#5b3fd6]">whole brand.</em>
            </h2>
            <p className="text-gray-500 leading-[1.9] mb-6">
              This work is never treated as one-off decoration. Every piece is developed within the context of your brand system, reinforcing the visual language we've established and maintaining consistency across platforms.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              The result is design that strengthens recognition, supports marketing efforts, and keeps your brand looking polished in the real world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SELECTED WORK ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Selected Work
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Design in{" "}
              <em className="not-italic text-[#5b3fd6]">practice.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
              >
                <div className="relative overflow-hidden bg-[#111] aspect-square">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[#060606]/0 group-hover:bg-[#060606]/25 transition-all duration-300" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#060606]/80 backdrop-blur-sm border border-white/10">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#5b3fd6]">{item.tag}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#0d0d0d] px-3 py-2.5 border-t border-white/5">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/45 truncate">{item.label}</span>
                  <span className="w-1 h-1 bg-[#5b3fd6] shrink-0 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRINT MATERIALS ─── */}
      {/* ... remove this code ... */}

      {/* ─── CUSTOM ILLUSTRATION ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Image */}
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden bg-[#0d2e1a]" style={{ aspectRatio: "1/1" }}>
              <img
                src={studioImg}
                alt="Design studio workspace with Adobe Illustrator on drawing tablet — Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8 lg:pt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">
              Custom Illustration
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Depth and personality,{" "}
              <em className="not-italic text-[#5b3fd6]">with intention.</em>
            </h2>
            <p className="text-gray-500 leading-[1.9]">
              Illustration can add depth and personality when used with intention. At Black Rabbit Creative, illustration is approached as a strategic extension of the brand — not surface decoration.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              Whether developing icons, packaging elements, or bespoke illustrated assets, the focus remains on clarity, cohesion, and long-term usability.
            </p>
            <p className="text-gray-500 leading-[1.9]">
              Our illustration style favors clean vector forms, strong silhouettes, and refined detail that integrates seamlessly with your visual identity.
            </p>

            {/* Illustration traits */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Clean Vector Forms", "Strong Silhouettes", "Refined Detail", "Brand-Integrated"].map((trait, i) => (
                <motion.span
                  key={i}
                  className="inline-block px-4 py-2 text-[11px] uppercase tracking-[0.12em] border border-[#060606]/12 text-[#060606]/60 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BEST FIT + APPROACH ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">

          {/* Best Fit — full width, tags wrap horizontally */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16 mb-8">
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] shrink-0">
                Best Fit Clients
              </span>
              <h3
                className="font-black uppercase tracking-[0.07em] leading-[1.0]"
                style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
              >
                This service is{" "}
                <em className="not-italic text-[#5b3fd6]">ideal for:</em>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {bestFit.map((item, i) => (
                <motion.div
                  key={i}
                  className="inline-flex items-center gap-2.5 px-5 py-3 border border-[#060606]/10 hover:border-[#5b3fd6]/40 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Check size={11} className="text-[#5b3fd6] shrink-0" />
                  <span className="text-sm text-[#060606]/75 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-[#060606]/8" />

          {/* Our Approach — full width, 2-col step grid on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16 mb-12">
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] shrink-0">
                Our Approach
              </span>
              <h3
                className="font-black uppercase tracking-[0.07em] leading-[1.0]"
                style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
              >
                Brand first,{" "}
                <em className="not-italic text-[#5b3fd6]">always.</em>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#060606]/6">
              {[
                {
                  num: "01",
                  title: "Brand Foundation",
                  desc: "Every project begins with the brand foundation — understanding the visual language, tone, and goals already established.",
                },
                {
                  num: "02",
                  title: "Concept & Direction",
                  desc: "We develop visual concepts aligned with your brand system, ensuring every new piece feels cohesive and intentional.",
                },
                {
                  num: "03",
                  title: "Design & Illustration",
                  desc: "Execution with precision — graphics, layouts, and illustrated assets built for real-world use.",
                },
                {
                  num: "04",
                  title: "Delivery & Support",
                  desc: "Print-ready and screen-ready files, organized and ready for deployment across every platform.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  className="flex gap-6 p-8 bg-white"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <span className="text-[10px] font-mono text-[#5b3fd6] shrink-0 pt-0.5 w-6">{step.num}</span>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.07em] mb-2 text-[#060606]">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-[1.8]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-400 text-sm leading-[1.9] mt-8">
              Strong brands aren't built through isolated pieces — they're built through consistency.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-8">
                Ready to begin?
              </span>
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[0.92]"
                style={{ fontSize: "clamp(2.4rem, 5vw, 5.5rem)" }}
              >
                Strengthen your<br />
                <em className="not-italic text-[#5b3fd6]">visual presence.</em>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
              <p className="text-gray-500 text-sm leading-[1.8] max-w-sm lg:text-right">
                Let's build what comes next.
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Enquire <ArrowRight size={13} />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="bg-[#060606] text-white px-6 md:px-16 lg:px-24 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="py-10">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">Other Services</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
            {[
              { num: "01", label: "Brand Identity Design", to: "/services/brand-identity" },
              { num: "02", label: "Logo Design", to: "/services/logo-design" },
              { num: "03", label: "Packaging Design", to: "/services/packaging-design" },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col"
              >
                <Link
                  href={s.to}
                  className="group relative overflow-hidden flex flex-1 items-center justify-between bg-white/[0.04] hover:bg-white/[0.09] px-8 py-10 min-h-[100px] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] tracking-[0.3em] text-[#5b3fd6] font-mono">{s.num}</span>
                    <span className="text-sm font-black uppercase tracking-[0.07em] text-white">{s.label}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-white/15 group-hover:text-[#5b3fd6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}