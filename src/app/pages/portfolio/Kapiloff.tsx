import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import oldLogoFull   from "figma:asset/cff77871d546fe390d6ba12440edabc44aa2fdf1.png";
import oldLogoMark   from "figma:asset/1d73f619d040c6cc2752d231aadf121ea1d27d86.png";
import newLogoFull   from "figma:asset/66fcfb6e89320be0cf9d1c2fc5012e1f66bc7a90.png";
import newLogoMark   from "figma:asset/813500a7323a190b78d4a353bedbc57a5d5c1fd1.png";
import typoLemonMilk from "figma:asset/fc67eb2aa040222a861b1e7a36ae55dcf65d72c0.png";
import typoCalibri   from "figma:asset/cbe582959aa54a8427db1d29fd09a329b883cdf4.png";
import typoGeorgina  from "figma:asset/539fdac10ec1dab6e66660503cc0b33abbd3fbf3.png";
import signPhoto     from "figma:asset/2b0c1ad31365aab88f0215d56770c958966e84f0.png";
import mapsGalaAd    from "figma:asset/318b451ff66696cb786ea4c9289550bcf528c223.png";

const blue      = "#1058CF";
const blueLight = "#689BF8";

const meta = [
  { label: "Client",   value: "Kapiloff Insurance" },
  { label: "Industry", value: "Insurance & Financial Services" },
  { label: "Scope",    value: "Brand Identity Refresh" },
  { label: "Focus",    value: "Trust, Clarity & Modernization" },
];

const challenges = [
  "Feel more contemporary and professional",
  "Improve readability and recognition",
  "Maintain trust in a sensitive industry",
  "Create consistency across all materials",
  "Allow flexible logo usage moving forward",
];

const impacts = [
  { label: "Visual Clarity",    desc: "Cleaner hierarchy and stronger legibility across all sizes" },
  { label: "Brand Recognition", desc: "A distinctive mark that stands apart in the insurance space" },
  { label: "Consistency",       desc: "One unified system across digital, print, and internal materials" },
  { label: "Modern Presence",   desc: "Contemporary feel that earns trust without sacrificing authority" },
];

export default function Kapiloff() {
  useSEO({
    title: "Kapiloff Insurance Rebrand | Black Rabbit Creative, Portsmouth NH",
    description: "Legacy brand modernization for Kapiloff Insurance Solutions — new logo, signage, and brand identity by Black Rabbit Creative in Portsmouth, New Hampshire.",
    canonical: "/work/kapiloff-insurance",
  });
  return (
    <div className="bg-white text-[#111] min-h-screen">

      {/* ── Black top block ── */}
      <div className="bg-[#060606]">
        <div className="px-6 md:px-16 lg:px-24 pt-32 pb-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/25 hover:text-[#689BF8] transition-colors duration-300"
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
              Brand Identity Refresh
            </span>
            <h1
              className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-4xl text-white"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Kapiloff{" "}
              <em className="not-italic" style={{ color: blue }}>Insurance</em>
            </h1>
            <p className="mt-5 text-white/30 text-sm uppercase tracking-[0.2em] max-w-xl leading-relaxed">
              Legacy Brand Modernization for a New Generation
            </p>
            <a
              href="https://www.kapiloff.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:text-white"
              style={{ color: blueLight }}
            >
              Visit kapiloff.com <ArrowRight size={11} />
            </a>
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
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: blueLight }}>
                    {item.label}
                  </p>
                  <p className="text-sm text-white/50 leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Before / After ── */}
      <section className="px-6 md:px-16 lg:px-24 pt-16 md:pt-20 pb-12 md:pb-16 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: blueLight }}>
              The Evolution
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Before &amp; After
            </h2>
          </motion.div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">

            {/* ── BEFORE ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center md:flex-1"
            >
              <div className="flex flex-row items-center justify-center gap-8 z-10 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-sm flex items-center justify-center p-4"
                  style={{ width: "min(380px, 55%)" }}
                >
                  <img
                    src={oldLogoFull}
                    alt="Original Kapiloff Insurance logo before rebrand | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white rounded-sm flex items-center justify-center p-4"
                  style={{ width: "min(130px, 22%)", aspectRatio: "1" }}
                >
                  <img
                    src={oldLogoMark}
                    alt="Original Kapiloff Insurance K mark before rebrand | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>

              <div className="z-10 flex flex-wrap justify-center gap-x-5 gap-y-1">
                {["Ornate serif", "Poor scalability", "Dated language"].map((t) => (
                  <p key={t} className="text-sm text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* ── Centre arrow — desktop (horizontal) ── */}
            <div className="hidden md:flex items-center justify-center z-20 mx-4 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: blue }}
              >
                <ArrowRight size={15} color="white" />
              </motion.div>
            </div>

            {/* ── Centre arrow — mobile (vertical) ── */}
            <div className="flex md:hidden items-center justify-center z-20 -my-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-xl"
                style={{ backgroundColor: blue }}
              >
                <ArrowDown size={14} color="white" />
              </motion.div>
            </div>

            {/* ── AFTER ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative flex flex-col items-center md:flex-1"
            >
              <div className="flex flex-row items-center justify-center gap-8 z-10 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="bg-white rounded-sm flex items-center justify-center p-4"
                  style={{ width: "min(380px, 55%)" }}
                >
                  <img
                    src={newLogoFull}
                    alt="New Kapiloff Insurance Solutions wordmark — redesigned by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="object-contain w-full h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="bg-white rounded-sm flex items-center justify-center p-4"
                  style={{ width: "min(130px, 22%)", aspectRatio: "1" }}
                >
                  <img
                    src={newLogoMark}
                    alt="New Kapiloff Insurance K monogram mark — redesigned by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              </div>

              <div className="z-10 flex flex-wrap justify-center gap-x-5 gap-y-1">
                {["Geometric sans", "Unified system", "Fully scalable"].map((t) => (
                  <p key={t} className="text-sm flex items-center gap-1.5" style={{ color: blueLight }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: blueLight }} />
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview + Challenge ── */}
      <section className="bg-[#f7f8fa] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-8" style={{ color: blue }}>
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              Built for the{" "}
              <em className="not-italic" style={{ color: blue }}>next generation</em>
            </h2>
            <p className="text-black/55 leading-[1.9] text-[0.95rem]">
              Kapiloff Insurance came to the project at a pivotal moment — the business was being passed down to a new generation and needed a visual identity that felt current while preserving the credibility the company had built over time.
            </p>
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mt-5">
              The goal was not to reinvent the brand, but to{" "}
              <span className="text-[#111] font-semibold">refine and strengthen it</span> for the future.
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
            <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-8">
              The existing identity felt dated and lacked the clarity needed for modern applications. In the insurance space, even small visual shifts can impact perceived credibility — so the solution required precision.
            </p>
            <div className="space-y-0">
              {challenges.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
                  className="flex items-center gap-4 py-3 border-b border-black/6 last:border-0"
                >
                  <span className="text-[10px] font-black tracking-[0.15em] flex-shrink-0 w-7" style={{ color: blue }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-black/65 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The Approach ── */}
      <section className="bg-white px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              className="lg:col-span-4 lg:sticky lg:top-32 self-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="block text-[11px] uppercase tracking-[0.35em] mb-6" style={{ color: blue }}>
                The Approach
              </span>
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[1.05]"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
              >
                Strategic{" "}
                <em className="not-italic" style={{ color: blue }}>simplification</em>
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-8">
                The redesign focused on strategic simplification. A key move was refining the "K" into a more recognizable standalone mark, giving Kapiloff a flexible brand asset that works across multiple touchpoints.
              </p>
              <p className="text-black/55 leading-[1.9] text-[0.95rem] mb-10">
                The color system was updated with a confident blue palette —{" "}
                <span className="font-semibold text-[#111]">#1058CF</span> as the dominant trust signal and{" "}
                <span className="font-semibold" style={{ color: blueLight }}>#689BF8</span> as the supporting accent — aligned with industry expectations of stability, security, and expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/8">
                {[
                  { label: "Clean Typography",   desc: "Lemon Milk headers paired with email-safe Calibri body text for total usability" },
                  { label: "Visual Hierarchy",    desc: "Stronger structure that guides the eye and builds authority" },
                  { label: "Scalability",         desc: "Every element works from business card to billboard" },
                  { label: "Modern Trust Signal", desc: "Two-tone blue palette aligned with stability, security, and expertise" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="bg-white p-6 md:p-8"
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] mb-3" style={{ color: blue }}>
                      {item.label}
                    </p>
                    <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Brand in Action ── */}
      <section className="bg-[#060606] py-20 md:py-28">
        <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: blueLight }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden bg-[#060606] flex items-center justify-center w-full"
              style={{ height: "clamp(280px, 36vw, 480px)" }}
            >
              <img src={signPhoto} alt="Kapiloff Insurance Solutions outdoor LED pylon sign — designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
            </div>
            <div className="py-4 text-center">
              <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: blueLight }}>Environmental</p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">Outdoor LED Sign</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div
              className="relative overflow-hidden bg-[#060606] flex items-center justify-center w-full"
              style={{ height: "clamp(280px, 36vw, 480px)" }}
            >
              <img src={mapsGalaAd} alt="Kapiloff Insurance MAPS Gala sponsorship ad — designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
            </div>
            <div className="py-4 text-center">
              <p className="text-[9px] uppercase tracking-[0.35em] mb-1" style={{ color: blueLight }}>Digital / Print</p>
              <p className="text-white text-sm uppercase tracking-[0.15em]">Event Sponsorship Ad</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Color & Typography ── */}
      <section className="bg-[#0a0f1a] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: blueLight }}>
              Brand System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              Color &amp; Typography
            </h2>
          </motion.div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">Color Palette</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mb-16">
            {[
              { hex: "#000000", label: "Black",        bg: "#000000", textColor: "rgba(255,255,255,0.9)", subColor: "rgba(255,255,255,0.45)" },
              { hex: "#1058CF", label: "Primary Blue",  bg: "#1058CF", textColor: "rgba(255,255,255,0.9)", subColor: "rgba(255,255,255,0.45)" },
              { hex: "#FFFFFF", label: "White",         bg: "#FFFFFF", textColor: "rgba(0,0,0,0.7)",       subColor: "rgba(0,0,0,0.35)",       border: true },
              { hex: "#689BF8", label: "Light Blue",    bg: "#689BF8", textColor: "rgba(255,255,255,0.9)", subColor: "rgba(255,255,255,0.45)" },
            ].map((swatch) => (
              <motion.div
                key={swatch.hex}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col justify-between p-6 aspect-square ${(swatch as any).border ? "ring-1 ring-inset ring-white/15" : ""}`}
                style={{ backgroundColor: swatch.bg }}
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: swatch.subColor }} />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] mb-1" style={{ color: swatch.textColor }}>
                    {swatch.label}
                  </p>
                  <p className="text-[10px] font-mono tracking-wider" style={{ color: swatch.subColor }}>
                    {swatch.hex}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-4">Typography System</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {[
              { img: typoLemonMilk, alt: "Lemon Milk typeface", role: "Header / Display",  note: "Used for all headings, titles, and the logo. Geometric, bold, highly legible." },
              { img: typoCalibri,   alt: "Calibri typeface",    role: "Body / Email-Safe",  note: "Email and body copy. System-safe — renders correctly across all email clients." },
              { img: typoGeorgina,  alt: "Georgina typeface",   role: "Logo Use Only",      note: "Reserved exclusively for the logo lockup — not for general marketing use." },
            ].map((type, i) => (
              <motion.div
                key={type.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white p-8 flex flex-col"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: blue }}>
                  {type.role}
                </span>
                <div className="flex-1 flex items-center justify-center py-6">
                  <img src={type.img} alt={type.alt} className="w-full object-contain" />
                </div>
                <p className="text-[11px] text-black/40 mt-4">{type.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="bg-white px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: blue }}>
              Outcome
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-2xl"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
            >
              A brand ready for its{" "}
              <em className="not-italic" style={{ color: blue }}>next chapter</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
            {impacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="bg-white p-8 md:p-10"
              >
                <div className="w-8 h-px mb-6" style={{ backgroundColor: blue }} />
                <p className="text-[11px] uppercase tracking-[0.25em] mb-3" style={{ color: blue }}>
                  {item.label}
                </p>
                <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f7f8fa] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-black/6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/30 mb-4">
              Ready to modernize your brand?
            </p>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.05] max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
            >
              Let's build something{" "}
              <em className="not-italic" style={{ color: blue }}>intentional</em>
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
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-white text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
              style={{ backgroundColor: blue }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={13} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-10 py-4 text-xs uppercase tracking-[0.2em] border border-black/15 text-black/50 hover:text-black hover:border-black/30 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}