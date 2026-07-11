'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
const rabbitLogo = "/assets/Black_Rabbitv3-16.png";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/black.rabbit.creative" },
  { name: "Facebook", href: "https://www.facebook.com/blackrabbitcreative" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/blackrabbitcreative" },
];

const footerLinks = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function ConstantContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Give the CC widget a moment to hydrate the div
    const timer = setTimeout(() => {
      if (containerRef.current && containerRef.current.children.length > 0) {
        setLoaded(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Constant Contact renders into this div on the live site */}
      <div
        ref={containerRef}
        className="ctct-inline-form"
        data-form-id="c0788666-de04-4c19-bb8c-373d62ca80fa"
      />
      {/* Fallback visible in preview / when script is blocked */}
      {!loaded && (
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/5 border border-white/15 px-5 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-[#5b3fd6] transition-colors"
          />
          <button className="group inline-flex items-center justify-center gap-2 bg-[#5b3fd6] hover:bg-[#4a32b8] px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 whitespace-nowrap">
            Subscribe
            <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* CTA Band */}
      <div className="border-b border-white/10 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.07em] leading-[1.05]">
            Let's work <br className="hidden md:block" />
            <span className="text-[#5b3fd6] italic font-light">together.</span>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            Start a Project
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Constant Contact Inline Form */}
      <div className="border-b border-white/10 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#5b3fd6] mb-6 text-center">Stay in the Loop</h3>
          <div className="max-w-xl mx-auto">
            <ConstantContactForm />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="md:col-span-3">
            <img
              src={rabbitLogo}
              alt="Black Rabbit Creative logo — branding and design studio, Portsmouth NH, New Hampshire, New England"
              className="h-10 w-auto invert opacity-70 mb-6"
              width={120}
              height={40}
              loading="lazy"
            />
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Brand identity, logo design, graphic design &amp; packaging
              design studio in Portsmouth, NH — specializing in product-based
              businesses and visual identity systems for bold brands
              across New England.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#5b3fd6] mb-5">Navigation</h3>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Specialties — niche keyword links for SEO */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#5b3fd6] mb-5">Specialties</h3>
            <div className="flex flex-col gap-3">
              <Link href="/services/brand-identity" className="text-sm text-gray-300 hover:text-white transition-colors">Brand Identity Design</Link>
              <Link href="/services/packaging-design" className="text-sm text-gray-300 hover:text-white transition-colors">Packaging Design</Link>
              <Link href="/services/brewery-branding" className="text-sm text-gray-300 hover:text-white transition-colors">Brewery Branding</Link>
              <Link href="/services/logo-design" className="text-sm text-gray-300 hover:text-white transition-colors">Logo Design</Link>
              <Link href="/services/graphic-design" className="text-sm text-gray-300 hover:text-white transition-colors">Graphic Design</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#5b3fd6] mb-5">Connect</h3>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
              <a
                href="https://www.giveratings.com/black-rabbit-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>

          {/* Studio */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#5b3fd6] mb-5">Contact</h3>
            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <a href="mailto:hello@blackrabbit-creative.com" className="hover:text-white transition-colors">hello@blackrabbit-creative.com</a>
              <a href="tel:6032079890" className="mt-3 hover:text-white transition-colors">603-207-9890</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-gray-500 tracking-wide">&copy; 2025 Black Rabbit Creative. All rights reserved.</span>
          <div className="flex gap-8 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}