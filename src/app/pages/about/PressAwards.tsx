'use client'
import Link from 'next/link';
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Newspaper } from "lucide-react";
import { useSEO } from "../../components/useSEO";

const awardImage = "https://images.unsplash.com/photo-1619824130478-2fb945b98ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBhd2FyZCUyMHRyb3BoeSUyMGdvbGRlbnxlbnwxfHx8fDE3NzUwOTI4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface AwardRow {
  year: string;
  award: string;
  org: string;
  desc?: string;
}

interface PressRow {
  year: string;
  publication: string;
  title: string;
  desc: string;
}

const majorAwards: AwardRow[] = [
  { year: "2024", award: "Advanced Achievement Award", org: "Full Sail University", desc: "Awarded for exceptional mastery and leadership; only one per cohort." },
  { year: "2024", award: "Course Director Award", org: "Full Sail University", desc: "Recognized for leadership and mastery in the Copywriting course." },
  { year: "2021", award: "Goldman Sachs 10,000 Small Businesses", org: "Goldman Sachs", desc: "Participation in a prestigious business program to enhance strategic planning." },
];

const professionalRecognition: AwardRow[] = [
  { year: "2025", award: "American Package Design Award", org: "Graphic Design USA (for Granite Roots Beer Label)" },
  { year: "2024", award: "Course Director Award — Copywriting", org: "Full Sail University" },
  { year: "2024", award: "Advanced Achievement Award", org: "Full Sail University" },
  { year: "2023", award: "Best Rebranding Campaign", org: "Local Business Awards (for Cheshire Children's Museum)" },
  { year: "2022", award: "Excellence in Visual Identity", org: "New England Design Awards" },
  { year: "2021", award: "Outstanding Community Art Leadership", org: "Arts Alive Monadnock" },
  { year: "2020–2022", award: "Multiple Awards (Machina Kitchen & ArtBar)", org: 'Including "Best & Brightest Companies to Work For" and "Best Cocktails in NH"' },
  { year: "2017–2019", award: "NH Governor's Millennial Advisory Council", org: "Governor Chris Sununu Appointment" },
  { year: "2018", award: "Keene Sentinel Trendsetter Award", org: "Keene Sentinel" },
  { year: "2017", award: "TEDx Keene Co-Founder Recognition", org: "TEDx Organization" },
];

const pressItems: PressRow[] = [
  { year: "2025", publication: "The Keene Sentinel", title: "Creative Can Beauty for the Eye of the Beer-holder", desc: "Feature on the award-winning beer label design." },
  { year: "2024", publication: "My Keene Now Radio", title: "Monadtalk with Luca Paris, Black Rabbit Creative", desc: "Radio interview discussing design philosophy and business approach." },
  { year: "2023", publication: "Only In Your State", title: "Dine In An Art Gallery At This Farm-To-Table Restaurant", desc: "Feature on restaurant design and branding." },
  { year: "2022", publication: "NH Business Review", title: "Local Entrepreneur Makes National Impact", desc: "Profile on business leadership and community development." },
  { year: "2021", publication: "New Hampshire Magazine", title: "Rising Stars in New Hampshire Business", desc: "Recognition as an emerging business leader." },
  { year: "2020", publication: "Restaurant Business Magazine", title: "Art Meets Hospitality: A Unique Concept", desc: "National feature on an innovative restaurant concept." },
];

const sectionLabel = "block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-12";

export default function PressAwards() {
  useSEO({
    title: "Press & Awards | Black Rabbit Creative — Branding & Design Studio Portsmouth NH",
    description:
      "Awards, press coverage, and recognition for Black Rabbit Creative. GDUSA Package Design Award winner, Goldman Sachs 10KSB alumni, featured in NH Business Review, Keene Sentinel, and more.",
    canonical: "/about/press-awards",
  });

  return (
    <div className="bg-[#060606] text-white min-h-screen">
      {/* ─── HERO ─── */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 pb-16 md:pb-24 max-w-7xl mx-auto">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-[#5b3fd6] transition-colors mb-10"
        >
          <ArrowLeft size={12} /> About
        </Link>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={sectionLabel}
        >
          Recognition & Coverage
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          Press &{" "}
          <em className="not-italic text-[#5b3fd6]">Awards</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-gray-400 leading-[1.9] max-w-2xl mt-8"
        >
          Black Rabbit Creative has consistently been recognized for excellence in design, business leadership, and community involvement across New Hampshire and beyond.
        </motion.p>
      </section>

      {/* ─── LATEST RECOGNITION HIGHLIGHT ─── */}
      <section className="px-6 md:px-16 lg:px-24 pb-16 md:pb-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative border border-[#5b3fd6]/30 bg-[#5b3fd6]/5 p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="shrink-0 w-32 sm:w-40 md:w-44 lg:w-52 overflow-hidden">
                <img
                  src={awardImage}
                  alt="2025 American Package Design Award — Granite Roots Brewing beer label designed by Black Rabbit Creative"
                  className="w-full h-auto object-contain rounded-sm"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-5 mb-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[#5b3fd6]/20 text-[#5b3fd6]">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-3">
                      Latest Recognition — 2025
                    </span>
                    <h2
                      className="font-black uppercase tracking-[0.07em] leading-tight mb-4"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
                    >
                      American Package Design Award
                    </h2>
                  </div>
                </div>
                <p className="text-gray-400 leading-[1.9]">
                  Black Rabbit Creative received the 2025 American Package Design Award from Graphic Design USA for the innovative beer label design for Granite Roots Brewing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAJOR AWARDS ─── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={sectionLabel}
          >
            Major Awards
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {majorAwards.map((a, i) => (
              <motion.div
                key={a.award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col"
              >
                <span className="text-[#5b3fd6] text-sm font-mono mb-4">{a.year}</span>
                <h3 className="font-black uppercase tracking-[0.07em] text-base leading-tight mb-3">
                  {a.award}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">{a.org}</p>
                {a.desc && (
                  <p className="text-gray-500 text-sm leading-[1.8] mt-auto">{a.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROFESSIONAL RECOGNITION TIMELINE ─── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={sectionLabel}
          >
            Professional Recognition
          </motion.span>

          <div>
            {professionalRecognition.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.award}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="border-t border-white/8 py-6 md:py-7 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start"
              >
                <span className="md:col-span-2 text-[#5b3fd6] text-sm font-mono shrink-0">
                  {item.year}
                </span>
                <h3 className="md:col-span-5 font-semibold text-[15px] leading-snug text-white/90">
                  {item.award}
                </h3>
                <p className="md:col-span-5 text-sm text-gray-500 leading-[1.7]">
                  {item.org}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>

      {/* ─── PRESS COVERAGE ─── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <Newspaper size={16} className="text-[#5b3fd6]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6]">
              Recent Press Coverage
            </span>
          </motion.div>

          <div className="space-y-0">
            {pressItems.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.publication}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="border-t border-white/8 py-8 md:py-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="shrink-0 md:w-20">
                    <span className="text-[#5b3fd6] text-sm font-mono">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/35 mb-2">
                      {item.publication}
                    </p>
                    <h3 className="font-bold text-base md:text-lg leading-snug text-white mb-2">
                      "{item.title}"
                    </h3>
                    <p className="text-sm text-gray-500 leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#060606] px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Ready to build something{" "}
            <em className="not-italic text-[#5b3fd6]">award-winning?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 leading-[1.9] mb-10 max-w-lg mx-auto"
          >
            Let's create work that gets noticed — and gets results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-[#5b3fd6] text-white px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold hover:bg-[#4a32b0] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Project <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}