'use client'
import { motion } from "motion/react";
import Link from 'next/link';
import { useSEO } from "../../components/useSEO";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
const elmCityThumb = "/assets/dc05ed0777eabfe2a20f4c9e9b1782312618c371.png";
const graniteRootsImg = "/assets/50e23837cf920f2e5faee0e0a19273c2909f747d.png";

const RABBIT_IMG =
  "/assets/9bcef0195920300136ab5fd442b3cfbd4197aa12.png";

const services = [
  "Brewery brand identity systems",
  "Craft beer label design",
  "Can & bottle label systems",
  "Taproom signage & environmental design",
  "Merchandise design (shirts, glassware, coasters)",
  "Brand guidelines for brewery teams",
  "Seasonal & limited-release label design",
  "Beverage packaging strategy",
];

const whyUs = [
  {
    title: "Deep Industry Knowledge",
    desc: "We understand craft beverage culture, TTB compliance, and what makes labels sell on-shelf and on-tap.",
  },
  {
    title: "Boutique & Agile",
    desc: "Unlike large agencies, you work directly with the designer. Faster turnaround, more personal attention, founder-to-founder collaboration.",
  },
  {
    title: "Award-Winning Work",
    desc: "Our Granite Roots Brewing label earned a GDUSA 2025 Packaging Design Award — proof that bold design gets recognized.",
  },
  {
    title: "Full Brand Ecosystems",
    desc: "We don't just design labels. We create complete brand identity systems — from taproom to tap handle to merch.",
  },
];

export default function BreweryBranding() {
  useSEO({
    title: "Brewery Branding & Craft Beer Label Design | Black Rabbit Creative, Portsmouth NH",
    description:
      "Specialized brewery branding and craft beer label design by Black Rabbit Creative in Portsmouth, New Hampshire. Award-winning beer packaging, taproom branding, and visual identity for craft breweries across New England.",
    canonical: "/services/brewery-branding",
    ogTitle: "Brewery Branding & Craft Beer Label Design | Black Rabbit Creative",
    ogDescription:
      "Award-winning craft beer label design, brewery brand identity, and beverage packaging from Portsmouth, NH. Serving breweries across New Hampshire & New England.",
  });

  return (
    <div className="bg-[#060606] text-white selection:bg-[#5b3fd6] selection:text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 pt-28 pb-12 overflow-hidden">
        {/* Background rabbit */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-end">
          <div
            className="hidden lg:block w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] scale-[1.3] opacity-30 translate-x-[25%]"
            style={{
              maskImage:
                "radial-gradient(ellipse 60% 60% at center, black 35%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at center, black 35%, transparent 65%)",
            }}
          >
            <img
              src={RABBIT_IMG}
              alt="Black Rabbit Creative mascot — brewery branding studio, Portsmouth NH, New Hampshire"
              className="w-full h-full object-contain mix-blend-lighten"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6"
          >
            Industry Specialty
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.07em] leading-[0.9] mb-8"
          >
            Brewery Branding
            <br />
            <span className="text-[#5b3fd6]">&amp; Craft Beer</span>
            <br />
            Label Design
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            From taproom to tap handle, we build brand identity systems and
            craft beer packaging that command attention on the shelf, on the bar,
            and online. Based in Portsmouth, NH — serving breweries across New
            Hampshire and New England.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#5b3fd6] hover:bg-[#4a32b8] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
            >
              Start Your Brewery Brand
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 bg-white/5 border border-white/15 hover:bg-white/10 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
            >
              View Brewery Work
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED BREWERY PROJECTS ─── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4"
          >
            Featured Brewery Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] mb-14"
          >
            Craft Beverage Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Elm City Brewing",
                subtitle: "Complete Brand Identity System",
                image: elmCityThumb,
                href: "/work/elm-city-brewing",
                tag: "Brand Identity",
              },
              {
                title: "Granite Roots Brewing",
                subtitle: "Cheshire Czech Lager Label",
                image: graniteRootsImg,
                href: "/work/granite-roots-brewing",
                tag: "GDUSA 2025 Award",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={project.href}
                  className="group block relative overflow-hidden aspect-[4/3]"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={`${project.title} — craft beer branding by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England`}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#5b3fd6]/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white">
                    {project.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-6">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.07em] text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4"
            >
              What We Deliver
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black uppercase tracking-[0.07em] mb-6"
            >
              Brewery Branding
              <br />
              <span className="text-[#5b3fd6]">Services</span>
            </motion.h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Every brewery has a story. We translate that story into a cohesive
              visual identity — from the first concept sketch to final
              print-ready files. Whether you're launching a new brewery or
              refreshing an existing brand, we build systems that scale.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {services.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-4 border-b border-white/5 pb-4"
              >
                <Check size={14} className="text-[#5b3fd6] flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BLACK RABBIT FOR BREWERIES ─── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-[10px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4"
          >
            Why Black Rabbit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase tracking-[0.07em] mb-14"
          >
            Built for <span className="text-[#5b3fd6]">Breweries</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-[#060606] p-8 md:p-10"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 md:px-12 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black uppercase tracking-[0.07em] mb-6"
          >
            Ready to brew a{" "}
            <span className="text-[#5b3fd6]">bold brand?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-10 max-w-xl mx-auto"
          >
            Let's create a brewery brand and packaging system that turns heads
            on the shelf and builds loyalty at the bar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#5b3fd6] hover:bg-[#4a32b8] px-10 py-5 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}