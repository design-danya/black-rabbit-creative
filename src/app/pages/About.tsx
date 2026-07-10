'use client'
import Link from 'next/link';
import { useSEO } from "../components/useSEO";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
// Headshot — hosted externally // cache-bust-v2
const danyaImg = "https://i.imgur.com/kUWmB0z.jpeg";
const rabbitBoutiqueImg = "/assets/placeholder-portfolio.png";

const beliefs = [
  {
    num: "01",
    statement: "Design should be felt, not just seen.",
    detail:
      "The strongest brands create an immediate impression. We design identity systems that connect instinctively — work that resonates before a single word is read.",
  },
  {
    num: "02",
    statement: "Simplicity is the hardest thing to get right.",
    detail:
      "Clarity takes discipline. We remove what doesn't serve the brand and refine what remains until every element feels intentional, balanced, and built to last.",
  },
  {
    num: "03",
    statement: "Your brand should hold its ground.",
    detail:
      "In crowded markets, blending in is the fastest way to be overlooked. We create distinctive brand systems that give businesses the confidence to stand apart and be remembered.",
  },
];

const stats = [
  {
    value: "10+",
    label: "Years",
    sub: "Experience across branding, packaging, and identity systems.",
  },
  {
    value: "50+",
    label: "Projects",
    sub: "Strategic work delivered for product-based and growing brands.",
  },
  {
    value: "GDUSA",
    label: "National Recognition",
    sub: "2025 GDUSA Award for Packaging Design.",
  },
  {
    value: "100%",
    label: "Independent",
    sub: "Boutique by design. Every project receives focused attention.",
  },
];

export default function About() {
  useSEO({
    title: "About Black Rabbit Creative | Boutique Branding Studio, Portsmouth NH",
    description: "Meet Danya Pugliese, founder of Black Rabbit Creative — a boutique brand identity and packaging design studio in Portsmouth, New Hampshire. Founder-to-founder collaboration for breweries, CPG brands, and businesses across New England.",
    canonical: "/about",
  });

  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ─── HERO ─── */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 pb-24 md:pb-32 max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10"
        >
          About Black Rabbit Creative
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
          style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
        >
          We make brands{" "}
          <em className="not-italic text-[#5b3fd6]">distinct.</em>
        </motion.h1>
      </section>

      {/* ─── STUDIO INTRO ─── */}
      <section className="bg-white text-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* RIGHT — rabbit + heading + copy */}
          <motion.div
            className="flex flex-col items-center text-center justify-center gap-8 px-6 md:px-10 lg:px-16 pt-2 md:pt-4 pb-6 md:pb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Rabbit — no background, floats above the heading */}
            <motion.img
              src={rabbitBoutiqueImg}
              alt="Black Rabbit Creative mascot — branding and design studio, Portsmouth NH, New Hampshire, New England"
              className="w-72 md:w-96 lg:w-[26rem] object-contain select-none pointer-events-none"
              animate={{ opacity: [0.15, 1, 0.15] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
            />

            <h2
              className="font-black uppercase tracking-[0.07em] leading-[1.0]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Boutique by{" "}
              <em className="not-italic text-[#5b3fd6]">design.</em>
            </h2>
            <p className="text-gray-600 leading-[1.9]">
              Black Rabbit Creative is a boutique branding and packaging studio for businesses that refuse to look like everyone else.
            </p>
            <p className="text-gray-600 leading-[1.9]">
              Founded on a simple principle — no generic work — we partner with product-based brands, breweries, and growing businesses ready to claim their space in competitive markets.
            </p>
            <p className="text-gray-600 leading-[1.9]">
              Our approach is collaborative, transparent, and deeply detail-driven. We don't just deliver a logo. We build cohesive visual systems designed to perform in the real world — on the shelf, on screen, and everywhere your brand appears.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.span
            className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Founded by a designer who understands business
          </motion.span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Photo */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden bg-[#111] max-w-xs mx-auto sm:max-w-sm lg:max-w-none">
                <img
                  src={danyaImg}
                  alt="Danya Pugliese, founder of Black Rabbit Creative — branding and design studio in Portsmouth NH, New Hampshire, New England"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {/* subtle gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#060606]/60 to-transparent" />
              </div>
              <div className="mt-4">
                <p className="text-white font-black uppercase tracking-[0.07em] text-sm">Danya Pugliese</p>
                <p className="text-[#5b3fd6] text-[11px] uppercase tracking-[0.25em] mt-1">Founder & Creative Director</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="lg:col-span-8 flex flex-col gap-8 lg:pt-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h2
                className="font-black uppercase tracking-[0.07em] leading-[0.95]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
              >
                Award-winning design.<br />
                <em className="not-italic text-[#5b3fd6]">Business-minded thinking.</em>
              </h2>

              <p className="text-gray-400 leading-[1.9]">
                Black Rabbit Creative was founded by award-winning designer Danya Pugliese, whose work sits at the intersection of strategic thinking and distinctive visual design.
              </p>
              <p className="text-gray-400 leading-[1.9]">
                With a Master of Fine Arts in Media Design (4.0 GPA) and Goldman Sachs 10,000 Small Businesses certification, Danya brings both creative depth and business insight to every project. Her background as an entrepreneur and creative director informs a practical, real-world approach to branding — one grounded not just in aesthetics, but in how brands actually grow.
              </p>
              <p className="text-gray-400 leading-[1.9]">
                Her packaging work has earned national recognition, including a 2025 GDUSA Packaging Design Award.
              </p>

              {/* Credential tags */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "MFA Media Design — 4.0 GPA",
                  "Goldman Sachs 10KSB",
                  "2025 GDUSA Award",
                  "Entrepreneur",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-white/10 text-[11px] uppercase tracking-[0.15em] text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.span
            className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Believe
          </motion.span>

          <div className="space-y-0">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="border-t border-[#060606]/10 py-12 md:py-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <span className="md:col-span-1 text-xs tracking-[0.2em] text-[#5b3fd6] font-mono">
                    {belief.num}
                  </span>
                  <h3
                    className="md:col-span-5 font-black uppercase tracking-[0.07em] leading-tight"
                    style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
                  >
                    {belief.statement}
                  </h3>
                  <p className="md:col-span-6 text-gray-500 leading-[1.9] md:pt-1">
                    {belief.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#060606]/10" />
          </div>
        </div>
      </section>

      {/* ─── STUDIO SNAPSHOT ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.span
            className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Studio Snapshot
          </motion.span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#060606] px-8 py-10"
              >
                <p
                  className="font-black tracking-tight text-white mb-2"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#5b3fd6] mb-3">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-sm leading-[1.7]">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOK A CALL ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 pt-20 pb-8 md:pt-28 md:pb-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.span
            className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.span>

          <motion.div
            className="flex flex-col sm:flex-row gap-10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">Email</p>
              <a
                href="mailto:hello@blackrabbit-creative.com"
                className="text-white hover:text-[#5b3fd6] transition-colors"
              >
                hello@blackrabbit-creative.com
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-2">Phone</p>
              <a
                href="tel:6032079890"
                className="text-white hover:text-[#5b3fd6] transition-colors"
              >
                603-207-9890
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Book a Discovery Call
            </p>
            <MoxieBooking />
          </motion.div>
        </div>
      </section>

      {/* ─── LOOKING AHEAD / CTA ─── */}
      <section className="bg-white text-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-[#060606]/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-10">
              Looking Ahead
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)" }}
            >
              Distinct{" "}
              <em className="not-italic text-[#5b3fd6]">by design.</em>
            </h2>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gray-500 leading-[1.9]">
              Black Rabbit Creative exists to help distinctive brands emerge with clarity, confidence, and presence. As the studio continues to grow, the focus remains the same: thoughtful strategy, refined execution, and work built to stand out in the real world.
            </p>
            <div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-[#060606] text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-[#060606]/80 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start a Project <ArrowRight size={14} />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function MoxieBooking() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    const existingScript = document.querySelector(
      'script[src*="iframeResizer.min.js"]'
    );

    const initResizer = () => {
      setTimeout(() => {
        if (typeof (window as any).iFrameResize === "function") {
          (window as any).iFrameResize(
            { heightCalculationMethod: "min", sizeWidth: true, sizeHeight: true, log: false, checkOrigin: false },
            "#moxie-discovery-call"
          );
        }
      }, 200);
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js";
      script.onload = initResizer;
      document.head.appendChild(script);
    } else {
      initResizer();
    }

    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://hello.withmoxie.com" &&
        event.data &&
        typeof event.data === "string" &&
        event.data.startsWith("[Redirect]")
      ) {
        window.location.href = event.data.slice(10);
      }
    };
    window.addEventListener("message", handleMessage, false);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "300px" }}>
      <iframe
        src="https://hello.withmoxie.com/01/danya-designs/discovery-call?inFrame=true"
        id="moxie-discovery-call"
        title="Book a Discovery Call"
        style={{
          display: "block",
          padding: 0,
          margin: 0,
          border: "none",
          width: "100%",
          minWidth: "100%",
          height: "500px",
        }}
      />
    </div>
  );
}