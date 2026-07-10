'use client'
import { motion } from "motion/react";
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";
import { useSEO } from "../components/useSEO";

const services = [
  {
    num: "01",
    title: "Brand Identity Design",
    tagline: "Build a brand with clarity, cohesion, and presence.",
    description:
      "Brand identity design is more than a logo — it's the complete visual foundation of your business. At Black Rabbit Creative, we develop thoughtful identity systems that ensure your brand looks consistent, confident, and recognisable across every touchpoint.",
    listLabel: "Includes",
    items: [
      "Brand strategy foundations",
      "Primary and secondary logos",
      "Typography system",
      "Color palette",
      "Core brand assets",
      "Brand guidelines",
    ],
    bestFor: "Businesses ready to build or fully refresh their brand.",
    to: "/services/brand-identity",
  },
  {
    num: "02",
    title: "Logo Design",
    tagline: "Distinctive marks built with purpose.",
    description:
      "A strong logo should be simple, memorable, and built to last. Whether you need a focused standalone mark or a logo within a broader system, each design is crafted to work clearly across digital and print applications.",
    listLabel: "Focus areas",
    items: [
      "Custom logo design",
      "Wordmarks and brand marks",
      "Responsive logo variations",
      "File packages for real-world use",
    ],
    bestFor: "Businesses that need a professional, versatile logo solution.",
    to: "/services/logo-design",
  },
  {
    num: "03",
    title: "Packaging Design",
    tagline: "Designed to stand out on the shelf.",
    description:
      "In competitive retail environments, packaging has seconds to make an impression. Black Rabbit Creative creates packaging that captures attention, communicates clearly, and reflects the quality of what's inside.",
    listLabel: "Capabilities",
    items: [
      "Product packaging design",
      "Label systems",
      "Retail and shelf-ready layouts",
      "Print production setup",
      "Packaging line extensions",
    ],
    bestFor: "Product-based businesses ready to elevate their shelf presence.",
    to: "/services/packaging-design",
  },
  {
    num: "04",
    title: "Graphic Design & Illustration",
    tagline: "Strategic visuals with personality and purpose.",
    description:
      "Beyond core branding, consistent visual design keeps your brand cohesive across every touchpoint. Black Rabbit Creative provides thoughtful graphic design and custom illustration that support your brand while adding distinctive character where it matters.\n\nWhether you need polished marketing materials or bespoke illustrated assets, every piece is created to align with your brand system and communicate with clarity and confidence.",
    listLabel: "Common projects",
    items: [
      "Marketing and promotional materials",
      "Social and digital graphics",
      "Print collateral",
      "Custom illustrations and icons",
      "Event and campaign design",
      "Ongoing design support",
    ],
    bestFor: "Brands that want cohesive visuals with a distinctive edge.",
    to: "/services/graphic-design",
  },
  {
    num: "05",
    title: "Brewery Branding",
    tagline: "From taproom to tap handle.",
    description:
      "Craft breweries need brands that are as bold as their beers. We build complete brewery identity systems — from logo and label design to taproom signage, merchandise, and brand guidelines — creating cohesive visual ecosystems that build recognition on the shelf and loyalty at the bar.",
    listLabel: "Capabilities",
    items: [
      "Brewery brand identity systems",
      "Craft beer label design",
      "Can & bottle label systems",
      "Taproom signage & environmental design",
      "Merchandise design",
      "Seasonal & limited-release labels",
    ],
    bestFor: "Craft breweries and beverage brands launching or refreshing their identity.",
    to: "/services/brewery-branding",
  },
];

export default function Services() {
  useSEO({
    title: "Services | Brand Identity, Packaging, Logo & Graphic Design | Black Rabbit Creative, Portsmouth NH",
    description: "Design services from Black Rabbit Creative in Portsmouth, NH — brand identity design, logo design, packaging design, graphic design & illustration for product-based businesses and bold brands across New Hampshire and New England.",
    canonical: "/services",
  });
  return (
    <div className="bg-white min-h-screen pt-28 pb-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Hero statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-14"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.07em] leading-[0.95] max-w-4xl">
            What we{" "}
            <em className="not-italic text-[#5b3fd6]">do.</em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mt-6 max-w-lg"
          >
            We don't do everything. We do the right things — with precision,
            taste, and zero filler.
          </motion.p>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group border-t border-gray-200 py-12 md:py-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">

                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-xs tracking-[0.2em] text-[#5b3fd6] font-mono">
                    {service.num}
                  </span>
                </div>

                {/* Title + tagline */}
                <div className="md:col-span-3">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.04em] group-hover:text-[#5b3fd6] transition-colors duration-300 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    {service.tagline}
                  </p>
                </div>

                {/* Description + best for */}
                <div className="md:col-span-4">
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    <span className="text-[#060606] font-bold">Best for: </span>
                    {service.bestFor}
                  </p>
                </div>

                {/* List items + CTA */}
                <div className="md:col-span-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-3">
                    {service.listLabel}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[12px] text-gray-600"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#5b3fd6] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.to}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#060606] hover:text-[#5b3fd6] transition-colors duration-300 font-bold group/link"
                  >
                    Learn more
                    <ArrowUpRight
                      size={13}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-gray-200" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Have something in mind?
          </p>
          <Link
            to="/contact"
            className="inline-block text-2xl md:text-3xl font-black uppercase tracking-[0.07em] hover:text-[#5b3fd6] transition-colors border-b-2 border-black hover:border-[#5b3fd6] pb-1"
          >
            Let's talk about it
          </Link>
        </motion.div>
      </div>
    </div>
  );
}