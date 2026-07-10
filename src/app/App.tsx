import { RouterProvider } from "react-router";
// build-cache-bust-v3
import { router } from "./routes";
import { useEffect } from "react";
const faviconSrc = "/assets/placeholder-small.png";

function App() {
  useEffect(() => {
    // ── Open Graph / Twitter Card link preview ──
    const OG_IMAGE =
      "https://images.unsplash.com/photo-1653549892808-aa48a0a18ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYnJhbmRpbmclMjBkZXNpZ24lMjBzdHVkaW8lMjBwdXJwbGV8ZW58MXx8fHwxNzczMTU5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1200";

    const ogTags: Record<string, string> = {
      "og:title": "Black Rabbit Branding & Design Studio",
      "og:description":
        "Specializing in visual identities that are not just seen, but felt. We work with brands ready to take risks and stand out.",
      "og:image": OG_IMAGE,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": "Black Rabbit Branding & Design Studio",
      "twitter:description":
        "Specializing in visual identities that are not just seen, but felt. We work with brands ready to take risks and stand out.",
      "twitter:image": OG_IMAGE,
    };

    // Also set a meta description for SEO
    let metaDesc = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Specializing in visual identities that are not just seen, but felt. We work with brands ready to take risks and stand out.";

    Object.entries(ogTags).forEach(([property, content]) => {
      const attr = property.startsWith("twitter:") ? "name" : "property";
      let meta = document.querySelector(
        `meta[${attr}="${property}"]`
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Set page title
    document.title = "Black Rabbit Branding & Design Studio";

    // Remove any existing favicon links
    const existing = document.querySelectorAll("link[rel~='icon']");
    existing.forEach((el) => el.remove());

    // Inject the new favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = faviconSrc;
    document.head.appendChild(link);

    // ── Suppress Constant Contact "Div for inline form ... is missing" warning ──
    // Some inline forms exist in the CC account but aren't embedded in this site.
    // The widget logs a warning per orphan form; filter just that message.
    const origWarn = console.warn;
    const origError = console.error;
    const isCCMissingDivMsg = (args: unknown[]) =>
      typeof args[0] === "string" &&
      args[0].includes("inline form") &&
      args[0].includes("is missing");
    console.warn = (...args: unknown[]) => {
      if (isCCMissingDivMsg(args)) return;
      origWarn.apply(console, args as []);
    };
    console.error = (...args: unknown[]) => {
      if (isCCMissingDivMsg(args)) return;
      origError.apply(console, args as []);
    };

    // ── Constant Contact popup widget ──
    if (!document.getElementById("signupScript")) {
      (window as any)._ctct_m = "94ad48554a724fe816b6c1223098fdf6";

      const script = document.createElement("script");
      script.id = "signupScript";
      script.src =
        "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // ── Google Analytics (gtag.js) ──
    if (!document.getElementById("ga-gtag")) {
      const gtagScript = document.createElement("script");
      gtagScript.id = "ga-gtag";
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-TBLST0QV2M";
      document.head.appendChild(gtagScript);

      const gtagInline = document.createElement("script");
      gtagInline.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TBLST0QV2M');
      `;
      document.head.appendChild(gtagInline);
    }

    // ── Google Ads (gtag.js) ──
    if (!document.getElementById("gads-gtag")) {
      const gadsScript = document.createElement("script");
      gadsScript.id = "gads-gtag";
      gadsScript.async = true;
      gadsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17440004789";
      document.head.appendChild(gadsScript);

      const gadsInline = document.createElement("script");
      gadsInline.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('config', 'AW-17440004789');
      `;
      document.head.appendChild(gadsInline);
    }

    // ── Structured Data (JSON-LD) ──
    if (!document.getElementById("schema-jsonld")) {
      const jsonLd = document.createElement("script");
      jsonLd.id = "schema-jsonld";
      jsonLd.type = "application/ld+json";
      jsonLd.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Black Rabbit Creative",
        "description": "Black Rabbit Creative is a full-service Branding Agency serving Portsmouth, NH, Keene, NH, and Providence, RI. We deliver Branding Services, Rebranding Services, and Brand Identity Design Services for product-based and small businesses across New England—strategy, visual identity systems, and production-ready design. As a Creative Agency, we're a Logo Design Company and Graphic Design Agency offering custom logos, typography, illustration, templates, and brand guidelines, plus a Packaging Design Agency crafting retail-ready packaging. Need a Website Design Agency to bring it all to life online? We've got you.",
        "url": "https://www.blackrabbit-creative.com/",
        "telephone": "+18024160905",
        "image": "https://d17lvxud83eqj6.cloudfront.net/1a2a4c1a-2d3c-4004-b98b-806a45850f91.png",
        "logo": "https://d17lvxud83eqj6.cloudfront.net/1a2a4c1a-2d3c-4004-b98b-806a45850f91.png",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "134 South Street, Apt 4",
          "addressLocality": "Portsmouth",
          "addressRegion": "NH",
          "postalCode": "03801",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.0718,
          "longitude": -70.7626
        },
        "areaServed": [
          { "@type": "City", "name": "Portsmouth", "containedInPlace": { "@type": "State", "name": "New Hampshire" } },
          { "@type": "City", "name": "Keene", "containedInPlace": { "@type": "State", "name": "New Hampshire" } },
          { "@type": "City", "name": "Providence", "containedInPlace": { "@type": "State", "name": "Rhode Island" } }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/blackrabbitcreative/",
          "https://www.facebook.com/blackrabbitcreative",
          "https://www.instagram.com/black.rabbit.creative"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Branding & Design Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logo Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brewery Branding" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design" } }
          ]
        },
        "knowsAbout": [
          "Brand Identity", "Logo Design", "Packaging Design", "Graphic Design",
          "Brewery Branding", "Craft Beverage Packaging", "CPG Brand Strategy",
          "Rebranding", "Visual Identity Systems", "Small Business Branding"
        ]
      });
      document.head.appendChild(jsonLd);
    }

    return () => {
      // Do not remove the script on cleanup — removing and re-adding it
      // causes the "installed more than once" warning on navigation.
    };
  }, []);

  return (
    <>
      {/* Hidden CC placeholder — prevents "div missing" error for the contact-page form
          that was replaced by JotForm. The global CC widget script still expects this div. */}
      <div style={{ display: "none" }} aria-hidden="true">
        <div className="ctct-inline-form" data-form-id="d66fcd13-b17c-41e7-b6d1-dcb229e5a5d1" />
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;