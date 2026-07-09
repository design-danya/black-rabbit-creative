import { Link } from "react-router";
import { useSEO } from "../../components/useSEO";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import stationeryImg from "figma:asset/8140257f03131aef1d3ebc0f25dc02ba7784ffe7.png";
import letterheadImg from "figma:asset/7f36d760097949a5cbf16b8abc94e1ad4f6127bc.png";
import socialImg from "figma:asset/9e6fb10fce4e50491d20a842bbe6a8698c11c4a7.png";
import businessCardImg from "figma:asset/4bdc6f75ae0826340a16c5eccded41d9772eccda.png";
import instagramImg from "figma:asset/da0b4d0a018f03fb094a493b7eadf3182698f41d.png";
import envelopeImg from "figma:asset/f197c68eb63b0a64283819205b1451fe5b0c7121.png";
import thankYouCardsImg from "figma:asset/c3e6a7f6b0685bbc7da3611c6fb4f543a7e50462.png";
import peachBoxImg from "figma:asset/c623085a0fa6b8d6f06c6c8a1164e462be62b41c.png";
import floralBoxImg from "figma:asset/4eed3acad87e65ab0e3933e8340dd64f53b44948.png";
import lubricantBoxImg from "figma:asset/6a9e50f522155b75baf5e7ef9d9c159116527921.png";
import stickerTapeImg from "figma:asset/c390af4e482dba3c7b0dd5acd8a94f8b5a3de2c1.png";
import condomPacketsImg from "figma:asset/9224ae1519040450d99ad7ef61a74d4a48844b14.png";
import waterBottlesImg from "figma:asset/852e4838ec683852d8a89e2270ca82065afb2add.png";
import websiteDesignImg from "figma:asset/4801931dd1bb4e47323e36c0f77772a25b7077ac.png";
import logoDarkImg from "figma:asset/5dddcbadf5da4c35fa79deac7747192351fc3476.png";
import logoLightImg from "figma:asset/70896d185cb15cf69e7e9cafbe260c8a8c8a79de.png";
import swagImg from "figma:asset/0ce5651d6803e4d65610e67759ef9705f33646f9.png";
import facebookImg from "figma:asset/3a763002cf809757cfcb9651f07a080c9feb6424.png";

const meta = [
  { label: "Project Type", value: "Master of Fine Arts Thesis" },
  { label: "Focus", value: "Brand Identity, Packaging, Illustration & E-Commerce" },
  { label: "Industry", value: "Adult Wellness / Consumer Products" },
  { label: "Concept", value: "Sequoia Sex Toys" },
];

const deliverables = [
  "Brand Strategy & Positioning",
  "Logo & Visual Identity System",
  "Custom Illustration Suite",
  "Stationery & Printed Materials",
  "Packaging & Gift Box System",
  "Lubricant Product Packaging",
  "Merchandise & Promotional Items",
  "Responsive E-Commerce Website",
  "Social Media Templates & Assets",
];

export default function SequoiaSexToys() {
  useSEO({
    title: "Sequoia Sex Toys Brand Identity & Packaging | Black Rabbit Creative, Portsmouth NH",
    description: "Bold, playful brand identity for Sequoia Sex Toys — logo, stationery, packaging, merchandise, web, and social media design by Black Rabbit Creative, Portsmouth NH, New Hampshire.",
    canonical: "/work/sequoia-sex-toys",
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
            MFA Thesis Project
          </span>
          <h1
            className="font-black uppercase tracking-[0.07em] leading-[0.93] max-w-5xl"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
          >
            Sequoia{" "}
            <em className="not-italic text-[#5b3fd6]">Sex Toys</em>
          </h1>
          <p className="mt-3 text-white/40 text-sm uppercase tracking-[0.2em]">
            Brand Identity &amp; Packaging System
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm text-white/80 leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 1. OVERVIEW ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-6">
              Project Overview
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Rooted in{" "}
              <em className="not-italic text-[#5b3fd6]">pleasure.</em>
            </h2>
            <div className="space-y-4 text-white/50 leading-[1.8] text-[15px]">
              <p>
                This project was developed as my Master of Fine Arts thesis in Media
                Design, exploring how thoughtful branding can reshape the visual
                language of the adult wellness industry.
              </p>
              <p>
                Adult product brands typically fall into two visual extremes: sterile,
                clinical aesthetics or overtly explicit imagery. This thesis explored
                a third direction — a brand identity that celebrates craftsmanship,
                humor, nature, and body positivity while maintaining a refined retail
                presence.
              </p>
              <p>
                The concept brand, Sequoia Sex Toys, is imagined as a socially
                conscious wooden toy company rooted in sustainable materials, artisan
                production, and open conversations around pleasure and intimacy.
                The final outcome is a complete brand ecosystem designed to function
                across retail packaging, digital commerce, and lifestyle merchandise.
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
            <div className="relative overflow-hidden bg-[#2a1854]">
              <img
                src={businessCardImg}
                alt="Sequoia Sex Toys business cards — front and back with jackalope logo and botanical illustrations | Brand identity by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
            <div className="relative overflow-hidden bg-[#2a1854] mt-4">
              <img
                src={stationeryImg}
                alt="Sequoia Sex Toys complete stationery suite — letterhead, business cards, and envelopes | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ RESEARCH & STRATEGY ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Research &amp; Strategy
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Finding the{" "}
              <em className="not-italic text-[#5b3fd6]">middle ground.</em>
            </h2>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              The thesis began with research into how branding shapes consumer
              perception in industries historically associated with stigma or
              discomfort. Key observations included:
            </p>
            <ul className="space-y-2 text-gray-500 leading-[1.8] text-[15px] mb-8 pl-1">
              <li className="flex items-start gap-3">
                <span className="block w-1 h-1 rounded-full bg-[#5b3fd6] mt-[10px] shrink-0" />
                Many adult brands rely on clinical minimalism, which can feel cold or impersonal.
              </li>
              <li className="flex items-start gap-3">
                <span className="block w-1 h-1 rounded-full bg-[#5b3fd6] mt-[10px] shrink-0" />
                Others lean into shock value and explicit visuals, limiting mainstream appeal.
              </li>
              <li className="flex items-start gap-3">
                <span className="block w-1 h-1 rounded-full bg-[#5b3fd6] mt-[10px] shrink-0" />
                Few brands balance playfulness, sophistication, and warmth.
              </li>
            </ul>
            <p className="text-gray-500 leading-[1.8] text-[15px] mb-6">
              Sequoia was designed to occupy this middle ground. The brand positioning
              is built around three principles:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#060606]/5 mt-2">
            {[
              { title: "Nature", desc: "Grounding the brand in natural materials and botanical symbolism." },
              { title: "Craft", desc: "Highlighting the handmade quality of wooden products." },
              { title: "Play", desc: "Embracing humor and storytelling to normalize conversations about pleasure." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white px-6 py-8"
              >
                <p className="text-sm font-bold text-[#060606] mb-2 uppercase tracking-[0.15em]">{item.title}</p>
                <p className="text-sm text-[#060606]/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 2. LOGO DESIGN ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Logo Design
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              The{" "}
              <em className="not-italic text-[#5b3fd6]">jackalope</em> identity.
            </h2>
            <p className="mt-4 text-white/50 leading-[1.8] max-w-2xl text-[15px]">
              At the center of the brand identity is a mirrored jackalope crest — a
              mythical creature chosen to represent Sequoia's playful and slightly
              irreverent spirit. Two jackalopes face one another in symmetrical
              formation, their antlers interlocking to form a unified crest
              symbolizing connection, intimacy, and balance. The illustration style
              uses fine pen-and-ink linework, reinforcing the handcrafted nature of
              the brand's products while introducing a whimsical, storytelling
              element to the identity.
            </p>
          </motion.div>

          {/* Side-by-side logo variations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#060606] aspect-square flex items-center justify-center p-10 md:p-14">
                <img src={logoDarkImg} alt="Sequoia Sex Toys logo reversed on black — jackalope crest mark | Brand design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8 pr-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Reversed — Dark</p>
                <p className="text-xs text-gray-400 leading-relaxed">White jackalope mark with gold wordmark on black — primary logo for packaging and dark-ground applications.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="bg-white border border-[#060606]/8 aspect-square flex items-center justify-center p-10 md:p-14">
                <img src={logoLightImg} alt="Sequoia Sex Toys logo standard on white — jackalope crest with terracotta wordmark | Brand design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8 pl-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Standard — Light</p>
                <p className="text-xs text-gray-400 leading-relaxed">Black jackalope with terracotta-red wordmark on white — for stationery and light-ground print.</p>
              </div>
            </motion.div>
          </div>

          {/* Logo anatomy grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mt-10">
            {[
              { num: "01", title: "Mirrored Symmetry", desc: "Interlocking antlers create a symbolic crest representing connection and intimacy" },
              { num: "02", title: "Hand-Drawn Craft", desc: "Detailed linework evokes artisanal production and authenticity" },
              { num: "03", title: "Dual Colorways", desc: "Gold-on-black and terracotta-on-white versions provide versatility across packaging and print" },
              { num: "04", title: "Mythical Character", desc: "The jackalope introduces humor, mythology, and personality into the brand system" },
            ].map((item) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(item.num) * 0.05, duration: 0.4 }}
                className="bg-[#060606] px-5 py-6"
              >
                <span className="block text-[10px] text-[#5b3fd6] mb-1.5 font-bold">{item.num}</span>
                <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Logo design process video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14"
          >
            <div className="relative w-full overflow-hidden bg-[#060606]" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/1UiCE8LaVgQ?rel=0&modestbranding=1&color=white"
                title="Sequoia Sex Toys — Logo Design Ideation Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Logo Design Process</p>
              <p className="text-xs text-white/40 leading-relaxed">From initial sketches and concept exploration through to the final mirrored jackalope mark and wordmark system.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. STATIONERY ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Stationery System
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Building a cohesive{" "}
              <em className="not-italic text-[#5b3fd6]">brand world.</em>
            </h2>
            <p className="mt-4 text-white/50 leading-[1.8] max-w-2xl text-[15px]">
              The stationery system extends the brand's illustrated personality into
              tactile printed materials. Botanical borders, playful fruit illustrations,
              and cheeky messaging establish a tone that is both sophisticated and
              mischievous — transforming routine communication into part of the brand
              experience.
            </p>
          </motion.div>

          {/* Letterhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden bg-[#f5f3f0]">
              <img src={letterheadImg} alt="Sequoia Sex Toys branded letterhead spread with botanical border illustrations | Stationery design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full object-contain" />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Branded Letterhead</p>
              <p className="text-xs text-white/40 leading-relaxed">Hand-illustrated botanical border pattern, jackalope logo lockup, and signature sign-off.</p>
            </div>
          </motion.div>

          {/* Envelope + Thank-You Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#2a1854] aspect-[4/3] flex items-center justify-center p-6">
                <img src={envelopeImg} alt="Sequoia Sex Toys branded envelopes with jackalope mark and fruit-motif liner | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Envelope System</p>
                <p className="text-xs text-white/40 leading-relaxed">Branded outer with jackalope mark and poppy illustrations. Custom patterned fruit-motif liner.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#2a1854] aspect-[4/3] flex items-center justify-center p-6">
                <img src={thankYouCardsImg} alt="Sequoia Sex Toys illustrated thank-you insert cards with cheeky fruit messaging | Designed by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Thank-You Cards</p>
                <p className="text-xs text-white/40 leading-relaxed">"Peel Me Baby," "Let's Get Spicy," "I-peach-iate you" — cheeky illustrated insert cards.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 4. PACKAGING ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Packaging Design
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Designing the{" "}
              <em className="not-italic text-[#5b3fd6]">unboxing experience.</em>
            </h2>
            <p className="mt-4 text-gray-500 leading-[1.8] max-w-2xl text-[15px]">
              A major focus of the thesis explored how packaging design can elevate
              a product purchase into a memorable brand moment. The packaging system
              treats each order as a gift experience, combining illustrated wrapping
              paper, custom tissue, and playful messaging. The result is packaging
              designed to feel premium, playful, and collectible.
            </p>
          </motion.div>

          {/* Peach gift box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="overflow-hidden bg-[#3d2a5e]">
              <img src={peachBoxImg} alt="Sequoia Sex Toys 'For Your Peach' illustrated gift box with custom tissue paper | Packaging design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full object-contain" />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Gift Box System</p>
              <p className="text-xs text-gray-400 leading-relaxed">"For Your Peach" gift box with illustrated pin-up character, polka-dot panels, and custom tissue paper.</p>
            </div>
          </motion.div>

          {/* Floral box + sticker tape */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#4a2d7a] aspect-[4/3] flex items-center justify-center p-5">
                <img src={floralBoxImg} alt="Sequoia Sex Toys botanical wrap and gift box with gold jackalope seal | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Botanical Wrap & Box</p>
                <p className="text-xs text-gray-400 leading-relaxed">Art nouveau floral wrap with tonal inner box and gold jackalope seal.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#4a2d7a] aspect-[4/3] flex items-center justify-center p-5">
                <img src={stickerTapeImg} alt="Sequoia Sex Toys branded sticker tape with repeating jackalope logo | Packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-[#060606]/8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Branded Sticker Tape</p>
                <p className="text-xs text-gray-400 leading-relaxed">Custom shipping tape with repeating jackalope logo seals for a premium unboxing.</p>
              </div>
            </motion.div>
          </div>

          {/* Lubricant packaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden bg-[#2a1854]">
              <img src={lubricantBoxImg} alt="Sequoia Sex Toys lubricant packaging with illustrated mermaid and sea dragon artwork | Product packaging by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full object-contain" />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Lubricant Packaging</p>
              <p className="text-xs text-gray-400 leading-relaxed">"Wet" and "Tame the Beast" — custom illustrated mermaid and sea dragon artwork on coral with gold accents.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. BRAND EXTENSIONS ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Brand Extensions
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Merchandise &amp;{" "}
              <em className="not-italic text-[#5b3fd6]">lifestyle products.</em>
            </h2>
            <p className="mt-4 text-white/50 leading-[1.8] max-w-2xl text-[15px]">
              To test the flexibility of the identity system, the thesis expanded
              the brand into a series of lifestyle merchandise and promotional
              items. Each piece reinforces the brand's playful, nature-inspired
              tone while maintaining visual consistency across the identity system.
            </p>
          </motion.div>

          {/* Apparel / Swag — full width hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="overflow-hidden bg-[#2a1854]">
              <img
                src={swagImg}
                alt="Sequoia Sex Toys branded apparel — crop tops, hoodies, underwear, and t-shirts featuring jackalope logo, fruit pattern, and botanical designs | Merchandise design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Branded Apparel Collection</p>
              <p className="text-xs text-white/40 leading-relaxed">Crop tops, hoodies, underwear, and tees — featuring the jackalope mark, fruit-pattern allover print, botanical illustrations, and cheeky produce graphics.</p>
            </div>
          </motion.div>

          {/* Condom packets + water bottles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#2a1854] aspect-square flex items-center justify-center p-8">
                <img src={condomPacketsImg} alt="Sequoia Sex Toys branded condom packets with jackalope and fruit-pattern designs | Promotional merchandise by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Condom Packets</p>
                <p className="text-xs text-white/40 leading-relaxed">"Stay Safe" jackalope design on purple, paired with a fruit-pattern variant on gold.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6 }}
            >
              <div className="overflow-hidden bg-[#2a1854] aspect-square flex items-center justify-center p-5">
                <img src={waterBottlesImg} alt="Sequoia Sex Toys branded water bottles with fruit and botanical patterns | Merchandise design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Branded Water Bottles</p>
                <p className="text-xs text-white/40 leading-relaxed">"Play. Hydrate. Repeat." — four BPA-free metal designs with fruit and botanical patterns.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 6. WEBSITE DESIGN ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Website Design
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Translating the brand into{" "}
              <em className="not-italic text-[#5b3fd6]">digital space.</em>
            </h2>
            <p className="mt-4 text-gray-500 leading-[1.8] max-w-2xl text-[15px]">
              The thesis also included the design of a fully responsive e-commerce
              experience. The website extends the illustrated identity into a digital
              environment featuring bold hero sections, product galleries, category
              navigation, and brand storytelling pages. The digital experience was
              designed to feel as distinctive and expressive as the physical packaging.
            </p>
          </motion.div>

          {/* Device mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-sm">
              <div
                className="relative w-full"
                style={{
                  background: "radial-gradient(ellipse at 30% 50%, #d4547a 0%, #e8768e 30%, #d4547a 60%, #c24a6e 100%)",
                }}
              >
                <img src={websiteDesignImg} alt="Sequoia Sex Toys responsive e-commerce website — desktop, laptop, tablet, and mobile views | Web design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full object-contain" />
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Responsive E-Commerce Website</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Squarespace e-commerce build with plum-to-gold palette, illustrated hero sections,
                product galleries, and "Rooted in Pleasure" marquee across all breakpoints.
              </p>
            </div>
          </motion.div>

          {/* Website highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#060606]/5 mt-10">
            {[
              { num: "01", title: "Custom Hero", desc: "'Let's Play' landing with shushing character and 'We won't tell' tagline" },
              { num: "02", title: "E-Commerce", desc: "Full catalog with lubricant, toy, and merchandise categories" },
              { num: "03", title: "Brand Story", desc: "'Embrace Pleasure & Embrace Nature' narrative with founder story" },
              { num: "04", title: "Responsive", desc: "Optimized across desktop, laptop, tablet, and mobile" },
            ].map((item) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(item.num) * 0.05, duration: 0.4 }}
                className="bg-white px-5 py-6"
              >
                <span className="block text-[10px] text-[#5b3fd6] mb-1.5 font-bold">{item.num}</span>
                <p className="text-sm font-semibold text-[#060606] mb-1">{item.title}</p>
                <p className="text-xs text-[#060606]/45 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Website walkthrough video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14"
          >
            <div className="relative w-full overflow-hidden bg-[#060606]" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/1OQCcpfCmg4?rel=0&modestbranding=1&color=white"
                title="Sequoia Sex Toys — Website Design Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3 pt-3 border-t border-[#060606]/8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Website Design Walkthrough</p>
              <p className="text-xs text-gray-400 leading-relaxed">A walkthrough of the responsive Sequoia e-commerce website — hero sections, product pages, brand story, and mobile experience.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. SOCIAL MEDIA ═══ */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Social Media &amp; Digital
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              Extending the brand{" "}
              <em className="not-italic text-[#5b3fd6]">online.</em>
            </h2>
            <p className="mt-4 text-white/50 leading-[1.8] max-w-2xl text-[15px]">
              Custom header graphics, profile imagery, and a cohesive visual language
              that translates the illustrated identity into scroll-stopping presence.
            </p>
          </motion.div>

          {/* Twitter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="overflow-hidden bg-[#0a0a0a]">
              <img src={socialImg} alt="Sequoia Sex Toys Twitter/X profiles in light and dark mode with illustrated eggplant header | Social media design by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full object-contain" />
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Twitter / X Profiles</p>
              <p className="text-xs text-white/40 leading-relaxed">"The Hardwood You've Been Looking For" header with illustrated eggplant — light and dark mode.</p>
            </div>
          </motion.div>

          {/* Facebook + Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden bg-[#f0f2f5] aspect-[4/3] flex items-center justify-center">
                <img src={facebookImg} alt="Sequoia Sex Toys Facebook business page with branded cover photo and curated posts | Social media by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="w-full h-full object-cover" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Facebook Business Page</p>
                <p className="text-xs text-white/40 leading-relaxed">"Amazon Doesn't Need to Know Your Kinks. Order Direct." — custom cover photo, branded posts, and curated photo gallery.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <div className="overflow-hidden bg-[#2a1854] aspect-[4/3] flex items-center justify-center py-4 px-5">
                <img src={instagramImg} alt="Sequoia Sex Toys Instagram profile with curated grid and consistent visual identity | Social media by Black Rabbit Creative, Portsmouth NH, New Hampshire, New England" className="max-h-full w-auto object-contain" />
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5b3fd6] mb-1">Instagram Profile</p>
                <p className="text-xs text-white/40 leading-relaxed">Curated grid with product photography, illustrated content, and consistent visual identity.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 8. DELIVERABLES ═══ */}
      <section className="bg-white text-[#060606] px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="block text-[11px] uppercase tracking-[0.35em] text-[#5b3fd6] mb-4">
              Full Deliverables
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
            >
              A complete brand{" "}
              <em className="not-italic text-[#5b3fd6]">ecosystem.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-px bg-[#060606]/5">
            {deliverables.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.35 }}
                className="bg-white px-5 py-6"
              >
                <span className="block text-[10px] text-[#5b3fd6] mb-1.5 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[#060606]/70 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Tags */}
          <motion.div
            className="mt-8 pt-6 border-t border-[#060606]/8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-1.5">
              {["Brand Identity", "Logo Design", "Custom Illustration", "Stationery", "Packaging", "Apparel & Swag", "Website Design", "Social Media", "E-Commerce", "Adult Wellness"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] border border-[#060606]/10 text-[#060606]/50 hover:border-[#5b3fd6]/40 hover:text-[#5b3fd6] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. CTA ═══ */}
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
              Ready to build your brand?
            </span>
            <h2
              className="font-black uppercase tracking-[0.07em] leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}
            >
              Let's create something{" "}
              <em className="not-italic text-[#5b3fd6]">unforgettable.</em>
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