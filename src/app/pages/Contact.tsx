'use client'

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useSEO } from "../components/useSEO";

function JotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/242897098538072";
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} />;
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

export default function Contact() {
  useSEO({
    title: "Contact Black Rabbit Creative | Brand Identity & Packaging Design, Portsmouth NH",
    description: "Get in touch with Black Rabbit Creative — a brand identity, logo design, graphic design, and packaging design studio in Portsmouth, New Hampshire. Request a quote for branding, packaging, or visual identity projects for product-based businesses.",
    canonical: "/contact",
  });
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-3xl w-full mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.07em] mb-4">Let's Talk</h1>
          <p className="text-gray-500 max-w-xl">
            Ready to start your next project? Fill out the form below or reach us directly.
          </p>
        </motion.div>

        {/* Contact details — compact inline row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-x-12 gap-y-4 mb-10 pb-10 border-b border-gray-100"
        >
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#5b3fd6] mb-1">Email</span>
            <a href="mailto:hello@blackrabbit-creative.com" className="text-base hover:underline">
              hello@blackrabbit-creative.com
            </a>
          </div>
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#5b3fd6] mb-1">Phone</span>
            <a href="tel:6032079890" className="text-base hover:underline">603-207-9890</a>
          </div>
        </motion.div>

        {/* JotForm — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-10"
        >
          <JotForm />
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-10" />

        {/* Moxie booking — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#5b3fd6] mb-6">
            Book a Discovery Call
          </h3>
          <MoxieBooking />
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-10" />

        {/* Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#5b3fd6] mb-6">
            Reviews
          </h3>
          <div className="border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <div className="flex items-center gap-1 text-[#f4b400] text-xl mb-4" aria-label="5 star reviews">
              ★★★★★
            </div>

            <p className="text-lg md:text-xl font-semibold leading-relaxed text-black mb-3">
              Worked with Black Rabbit Creative?
            </p>

            <p className="text-sm md:text-base text-black/60 leading-relaxed mb-6 max-w-xl">
              Your feedback helps future clients feel confident choosing a creative partner.
            </p>

            <a
              href="https://g.page/r/CVgPQVm1INAxEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#5b3fd6] hover:bg-[#4a32b8] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors"
            >
              Leave a Google Review
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}