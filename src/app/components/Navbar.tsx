'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import rabbitLogo from '/public/assets/navbar-logo.png'

const links = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "https://danya87.wixsite.com/blackrabbitcreative", external: true },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { num: "01", name: "Logo Design", path: "/services/logo-design" },
  { num: "02", name: "Brand Identity", path: "/services/brand-identity" },
  { num: "03", name: "Packaging Design", path: "/services/packaging-design" },
  { num: "04", name: "Graphic Design & Illustration", path: "/services/graphic-design" },
  { num: "05", name: "Brewery Branding", path: "/services/brewery-branding" },
];

const aboutLinks = [
  { num: "01", name: "FAQ", path: "/about/faq" },
  { num: "02", name: "Press & Awards", path: "/about/press-awards" },
];

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const [aboutExpanded, setAboutExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const isDark = (isHome && !scrolled) || isOpen;

  const close = () => {
    setIsOpen(false);
    setServicesExpanded(false);
    setAboutExpanded(false);
  };

  const renderSubMenu = (
    expanded: boolean,
    toggleFn: () => void,
    label: string,
    overviewPath: string,
    overviewLabel: string,
    subLinks: { num: string; name: string; path: string }[],
    isActive: boolean
  ) => (
    <div>
      <button
        onClick={toggleFn}
        className={`w-full flex items-center justify-between py-3 text-2xl font-black uppercase tracking-[0.07em] transition-colors ${
          isActive ? "text-[#5b3fd6]" : "text-white/50 hover:text-white"
        }`}
      >
        <span>{label}</span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col border-l border-white/10 ml-1 pl-4 mb-3 mt-1 gap-0">
              <Link
                href={overviewPath}
                onClick={close}
                className={`py-2 text-[10px] uppercase tracking-[0.25em] transition-colors ${
                  pathname === overviewPath
                    ? "text-[#5b3fd6]"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {overviewLabel}
              </Link>
              <div className="border-t border-white/8 my-1" />
              {subLinks.map((s, si) => (
                <motion.div
                  key={s.path}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: si * 0.05 }}
                >
                  <Link
                    href={s.path}
                    onClick={close}
                    className={`flex items-baseline gap-2 py-2.5 transition-colors group/sub ${
                      pathname === s.path
                        ? "text-[#5b3fd6]"
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-[#5b3fd6]/60 group-hover/sub:text-[#5b3fd6] transition-colors shrink-0">
                      {s.num}
                    </span>
                    <span className="text-[13px] font-semibold uppercase tracking-[0.06em] leading-tight">
                      {s.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isDark && !isOpen
          ? "bg-black"
          : !isDark
          ? "bg-white/95 backdrop-blur-sm border-b border-black/5"
          : ""
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group" onClick={close}>
          <img
            src={rabbitLogo.src}
            alt="Black Rabbit Creative logo — branding and design studio, Portsmouth NH, New Hampshire, New England"
            className={`h-10 md:h-12 w-auto transition-all duration-500 ease-out group-hover:scale-105 ${
              isDark ? "invert" : ""
            }`}
            width={144}
            height={48}
          />
        </Link>

        {/* Hamburger toggle */}
        <button
          className={`relative z-[110] p-2 rounded-full transition-all duration-300 backdrop-blur-md border ${
            isDark
              ? "text-white bg-white/10 border-white/10 hover:bg-white/20"
              : "text-black bg-black/5 border-black/5 hover:bg-black/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Right-side drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
            />

            {/* Drawer panel */}
            <motion.div
              className="fixed top-0 right-0 h-full z-[106] bg-[#060606] w-72 flex flex-col pt-24 pb-12 px-10 border-l border-white/8 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-1">
                {links.map((link, i) => {
                  const isServices = link.name === "Services";
                  const isAbout = link.name === "About";
                  const isActive = isServices
                    ? pathname === link.path || pathname.startsWith("/services")
                    : isAbout
                    ? pathname === link.path || pathname.startsWith("/about/")
                    : pathname === link.path;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.35 }}
                    >
                      {isServices ? (
                        renderSubMenu(
                          servicesExpanded,
                          () => setServicesExpanded(!servicesExpanded),
                          "Services",
                          "/services",
                          "All Services",
                          serviceLinks,
                          isActive
                        )
                      ) : isAbout ? (
                        renderSubMenu(
                          aboutExpanded,
                          () => setAboutExpanded(!aboutExpanded),
                          "About",
                          "/about",
                          "About Us",
                          aboutLinks,
                          isActive
                        )
                      ) : link.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={close}
                          className="block py-3 text-2xl font-black uppercase tracking-[0.07em] transition-colors text-white/50 hover:text-white"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          onClick={close}
                          className={`block py-3 text-2xl font-black uppercase tracking-[0.07em] transition-colors ${
                            pathname === link.path
                              ? "text-[#5b3fd6]"
                              : "text-white/50 hover:text-white"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom contact hint */}
              <div className="mt-auto">
                <div className="border-t border-white/8 pt-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-2">Get in touch</p>
                  <a
                    href="mailto:hello@blackrabbit-creative.com"
                    className="text-[11px] text-white/40 hover:text-[#5b3fd6] transition-colors duration-300"
                    onClick={close}
                  >
                    hello@blackrabbit-creative.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}