import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import roseOilImg from "figma:asset/24b92cae45ca047c0ff92c7910f024424d35b8af.png";
import beautyBalmImg from "figma:asset/c052f3bd2f769ab0407b7f223cf6f136a1ac4413.png";
import roseBeautyOilImg from "figma:asset/e74b07e6aae925a2e3ccd3ec8bcba01971d9bc3c.png";
import glowBeautyOilImg from "figma:asset/0e63128127e54a4abd518c21d5f3744adc480212.png";
import faceOilLineImg from "figma:asset/85a36a7ad55f5acc16c3a8894ea9483780e2fd8f.png";

const accent = "#c9553d";
const warm = "#e8a77a";

const meta = [
  { label: "Client", value: "Badger Balm (W.S. Badger Company)" },
  { label: "Industry", value: "Natural Skincare / Personal Care" },
  { label: "Project Type", value: "Packaging Design Support" },
  { label: "Year", value: "2025" },
];

const contributions = [
  "Assisting with packaging design refinement",
  "Supporting layout development for product labels",
  "Preparing production-ready artwork",
  "Helping ensure visual consistency across the new product line",
];

const requirements = [
  { title: "Brand Alignment", desc: "Packaging that aligns with Badger's existing visual language and botanical illustration style." },
  { title: "Premium Communication", desc: "Clearly communicate premium skincare benefits within the facial care category." },
  { title: "Shelf Clarity", desc: "Maintain clarity and differentiation across multiple product variants." },
  { title: "Cross-Channel", desc: "Translate well across retail shelf and e-commerce environments." },
];

export default function BadgerBalm() {
  useSEO({
    title: "Badger Balm Product Photography | Black Rabbit Creative, Portsmouth NH",
    description: "Natural skincare product photography for Badger Balm — lifestyle and detail shots showcasing beauty oils and balms, by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/badger-balm",
  });
  return (
    <div className="bg-[#060606] text-white min-h-screen">

      {/* ── Back nav ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-28 pb-6">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
        >
          <ArrowLeft size={12} /> All Work
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="block text-[11px] uppercase tracking-[0.35em] text-white/30 mb-3">
            Face Oil Line Packaging Support
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
          >
            Badger{" "}
            <em className="not-italic" style={{ color: accent }}>Balm</em>
          </h1>
          <p className="mt-3 text-white/40 text-sm uppercase tracking-[0.2em]">
            Packaging Design Support &mdash; Natural Skincare
          </p>
        </motion.div>
      </section>

      {/* ── Meta bar ── */}
      <section className="border-t border-b border-white/8">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {meta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                className="px-5 py-6 first:pl-0"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] mb-1.5" style={{ color: accent }}>
                  {item.label}
                </p>
                <p className="text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero Image — Rose Body Oil ── */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={faceOilLineImg}
            alt="Badger Face Oil complete product line — Radiant Glow, Restore Rose, and Cleansing Oil held in hands | Product photography support by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
            className="w-full object-cover max-h-[75vh]"
          />
        </motion.div>
      </section>

      {/* ═══ 1. PROJECT OVERVIEW ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-6" style={{ color: accent }}>
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Supporting a new{" "}
              <em className="not-italic" style={{ color: accent }}>skincare launch.</em>
            </h2>
            <div className="space-y-4 text-white/50 leading-[1.8] text-[15px]">
              <p>
                I collaborated with the Badger Balm internal design team to support the
                development and launch of their new Face Oil product line.
              </p>
              <p>
                The goal of the project was to expand Badger's skincare offerings with a
                premium facial oil collection while maintaining the brand's long-standing
                reputation for organic ingredients, sustainability, and trusted herbal
                formulations.
              </p>
              <p>
                Working alongside the internal design team, I contributed to packaging
                development and visual design refinements to help bring the new product
                line to market.
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
                src={roseBeautyOilImg}
                alt="Woman holding Badger Rose Beauty Oil close-up — natural skincare product photography | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover max-h-[55vh]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. DESIGN CONTEXT ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              Design Context
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              A natural extension of{" "}
              <em className="not-italic" style={{ color: accent }}>trusted identity.</em>
            </h2>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              Badger Balm has built a strong identity around natural ingredients, environmental
              responsibility, and handcrafted quality. Any new product line must feel like a
              natural extension of the brand while still standing out within the skincare category.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#060606]/5">
            {requirements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white px-5 py-6"
              >
                <span className="block text-[10px] font-bold mb-1.5" style={{ color: accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[#060606] mb-1">{item.title}</p>
                <p className="text-xs text-[#060606]/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Full product line image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10"
          >
            <div className="overflow-hidden">
              <img
                src={roseOilImg}
                alt="Woman holding Badger Rose Body Oil — product lifestyle photography | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: accent }}>
                Rose Body Oil
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lifestyle product photography showcasing the Rose Body Oil — part of Badger's expanding natural skincare line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. MY ROLE ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-6" style={{ color: accent }}>
              My Role
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Collaborative{" "}
              <em className="not-italic" style={{ color: accent }}>design support.</em>
            </h2>
            <p className="text-white/50 leading-[1.8] text-[15px] mb-6">
              Working in collaboration with the Badger design team, I supported several
              aspects of the packaging development process. The project required careful
              attention to Badger's established brand standards while contributing design
              solutions that supported the launch timeline.
            </p>
            <ul className="space-y-2.5">
              {contributions.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 text-white/50 text-[15px] leading-[1.8]"
                >
                  <span
                    className="block w-1 h-1 rounded-full mt-[10px] shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
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
                src={beautyBalmImg}
                alt="Badger Beauty Balm held among wildflowers — natural skincare product photography | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: accent }}>
                Product Photography
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Badger Beauty Balm — botanical floral label design with signature rose illustration and teal cap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. DESIGN OUTCOME ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              Design Outcome
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Consistent, refined,{" "}
              <em className="not-italic" style={{ color: accent }}>trusted.</em>
            </h2>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              The new Face Oil line extends Badger's skincare offerings with packaging that
              feels consistent with the brand's trusted visual identity while introducing a
              refined look suited to the facial care category.
            </p>
            <p className="text-gray-500 leading-[1.8] text-[15px]">
              The final packaging successfully integrates into Badger's broader product family
              while clearly communicating the premium qualities of the new formulations.
            </p>
          </motion.div>

          {/* Full-width lifestyle image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden">
              <img
                src={glowBeautyOilImg}
                alt="Woman holding Badger Radiant Glow Beauty Oil close-up — natural sunlit skincare photography | Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover max-h-[55vh]"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: accent }}>
                Radiant Glow Beauty Oil
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Radiant Glow Beauty Oil with Seabuckthorn — warm botanical label design with cohesive visual identity across the Face Oil line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. PROJECT IMPACT ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] mb-4" style={{ color: accent }}>
              Project Impact
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Expanding a{" "}
              <em className="not-italic" style={{ color: accent }}>trusted brand.</em>
            </h2>
            <p className="text-white/50 leading-[1.8] text-[15px] mb-4">
              The Face Oil collection became part of Badger's expanding skincare line, helping
              introduce new facial care products to customers who already trust the brand's
              natural formulations.
            </p>
            <p className="text-white/50 leading-[1.8] text-[15px]">
              This project provided an opportunity to collaborate directly with an established
              natural skincare brand and contribute to a real-world product launch.
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
              {["Packaging Design", "Label Design", "Production Artwork", "Skincare", "Natural Products", "Brand Collaboration", "CPG"].map((tag) => (
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

      {/* ═══ IMAGE ATTRIBUTION ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/30 text-xs leading-relaxed">
            All product images shown on this page are owned by{" "}
            <span className="text-white/50 font-semibold">W.S. Badger Company</span> and are used here
            solely to illustrate the scope of design support provided. Visit their website at{" "}
            <a
              href="https://www.badgerbalm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9553d] hover:text-[#e8a77a] underline underline-offset-2 transition-colors duration-300"
            >
              badgerbalm.com
            </a>{" "}
            to explore their full range of natural skincare products.
          </p>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-[#060606] text-white px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-end">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Need Packaging That Stands Out?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              Strong design helps products{" "}
              <em className="not-italic text-[#5b3fd6]">connect.</em>
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
              className="group relative inline-flex items-center justify-center gap-3 bg-[#5b3fd6] text-white px-8 py-3.5 uppercase tracking-[0.25em] text-xs font-bold overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-3.5 uppercase tracking-[0.25em] text-xs font-bold hover:border-white/60 transition-colors duration-300"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}