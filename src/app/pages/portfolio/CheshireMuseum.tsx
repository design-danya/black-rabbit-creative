'use client'
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const brandOverviewImg = "/assets/1a3266b3d9193a8ed951288cc5e847ed126d6f0e.png";
const shamrockImg = "/assets/0808beac1353910e6a43f23c50e30ac2b287c8d6.png";

const meta = [
  { label: "Client", value: "Cheshire Children's Museum" },
  { label: "Location", value: "Keene, New Hampshire" },
  { label: "Scope", value: "Branding, Social Media, Web, Event Marketing, Illustration" },
  { label: "Year", value: "2024" },
];

const scope = [
  "Brand solidification & style guidelines",
  "Social media content templates",
  "Website redesign & UX improvement",
  "Annual appeal campaign materials",
  "Shamrock Shuffle 5K fundraiser rebrand",
  "Event advertising (print & digital)",
  "Custom mascot illustration (Fergus the Frog)",
  "Canva brand kit & asset library",
];

const stats = [
  {
    num: "451%",
    label: "Facebook Reach Increase",
    note: "60 to 80,340 over 30 days",
  },
  {
    num: "1,143%",
    label: "Instagram Reach Growth",
    note: "221 to 2,746 reach increase",
  },
  {
    num: "100K+",
    label: "Ad Views",
    note: "60-day Facebook ad campaign",
  },
  {
    num: "9",
    label: "Fergus Variations",
    note: "Custom mascot illustrations in Procreate",
  },
];

const highlights = [
  {
    label: "Content Strategy",
    desc: "Developed cohesive Canva templates and a comprehensive brand kit enabling in-house content creation with consistent quality",
  },
  {
    label: "Web Redesign",
    desc: "Restructured website with refined branding, streamlined navigation, and improved SEO for increased community engagement",
  },
  {
    label: "Event Branding",
    desc: "Rebranded the annual Shamrock Shuffle from a 5K race into a full family-friendly festival, driving record sign-ups",
  },
  {
    label: "Mascot Design",
    desc: "Elevated Fergus the Frog from clip art to nine custom Procreate illustrations used across all brand touchpoints",
  },
];

export default function CheshireMuseum() {
  useSEO({
    title: "Cheshire Children's Museum Brand Solidification | Black Rabbit Creative, Portsmouth NH",
    description: "Brand solidification for Cheshire Children's Museum — social media strategy, content design, and Shamrock Shuffle event marketing by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/cheshire-childrens-museum",
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
            Branding &amp; Marketing
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
          >
            Cheshire Children's{" "}
            <em className="not-italic text-[#5b3fd6]">Museum</em>
          </h1>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Brand Solidification &amp; Community Growth
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
              Building trust through{" "}
              <em className="not-italic text-[#5b3fd6]">visual consistency.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                Collaborated with Cheshire Children's Museum to strengthen their brand
                messaging, increase social media engagement, and develop a cohesive
                visual identity across all touchpoints — from social content and website
                to fundraiser marketing and merchandise.
              </p>
              <p>
                The original content lacked consistency, reliability, and adherence to
                brand standards. We extracted the existing color palette from the
                Museum's logo and built a comprehensive style system — applying unified
                typefaces, colors, and layout principles across all materials.
              </p>
              <p>
                Additionally, a brand kit was established within Canva, empowering the
                museum's in-house team to maintain brand consistency independently while
                producing professional-quality content at scale.
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
              src={brandOverviewImg}
              alt="Cheshire Children's Museum brand solidification overview — social media, website, and content strategy | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-b border-white/8">
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="px-6 py-10 first:pl-0"
              >
                <p
                  className="font-black uppercase tracking-[0.05em] text-[#5b3fd6] mb-2"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.5rem)" }}
                >
                  {stat.num}
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
                  {stat.label}
                </p>
                <p className="text-[11px] text-white/30">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shamrock Shuffle Fundraiser ── */}
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
              Event Branding
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Shamrock Shuffle{" "}
              <em className="not-italic text-[#5b3fd6]">Annual Fundraiser.</em>
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
                The annual Shamrock Shuffle fundraiser was rebranded and revitalized —
                repositioning the event from a standard 5K race into a family-friendly
                festival with vendors, activities, and community engagement at its core.
              </p>
              <p>
                A new custom-designed logo was created, along with two distinct ad
                campaigns: one focused on the family-friendly aspects and the other
                targeting the competitive race itself. The ads garnered over 100K views,
                significantly increasing attention and resulting in a record number of
                runner sign-ups.
              </p>
              <p>
                Deliverables included print ads, rack cards, banners, flyers,
                sponsorship forms, donor letters, and a dedicated campaign landing page
                — each reinforcing the refreshed visual identity.
              </p>

              {/* Scope list */}
              <div className="pt-4">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-5">
                  Full Scope
                </p>
                <ul className="space-y-3">
                  {scope.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#5b3fd6] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src={shamrockImg}
                alt="Shamrock Shuffle fundraiser — logo, ads, rack cards, banners, flyers, and donor letters | Event marketing by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Highlights Grid ── */}
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
              Key Deliverables
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-2xl"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Consistency builds{" "}
              <em className="not-italic text-[#5b3fd6]">community trust.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border border-white/[0.06] p-8 md:p-12"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-4">
                  {h.label}
                </p>
                <p className="text-white/50 leading-[1.85] text-[0.95rem]">{h.desc}</p>
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
              Measurable growth,{" "}
              <em className="not-italic text-[#5b3fd6]">lasting identity.</em>
            </h2>
            <div className="space-y-5 text-white/50 leading-[1.9]">
              <p>
                The brand solidification project transformed Cheshire Children's Museum's
                public presence — from fragmented, inconsistent content to a polished,
                professional identity that reinforces community trust at every touchpoint.
              </p>
              <p>
                Social media reach exploded with a 451% increase on Facebook and an
                1,143% increase on Instagram within 30 days. The Shamrock Shuffle rebrand
                drove record participation and the custom Fergus illustrations gave the
                museum a distinctive, ownable mascot presence across all materials.
              </p>
              <p>
                The Canva brand kit and templates ensure continued success and
                community impact long after the engagement, empowering museum staff to
                produce on-brand content independently.
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Facebook</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">451% Growth</p>
                <p className="text-white/40 text-sm mt-1">Reach from 60 to 80,340</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Instagram</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">1,143% Growth</p>
                <p className="text-white/40 text-sm mt-1">Reach from 221 to 2,746</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-2">Campaign</p>
                <p className="font-black uppercase tracking-[0.07em] text-2xl">100K+ Views</p>
                <p className="text-white/40 text-sm mt-1">60-day Facebook ad campaign</p>
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
              Branding that builds{" "}
              <em className="not-italic text-[#5b3fd6]">community.</em>
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