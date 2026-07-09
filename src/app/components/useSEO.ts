import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const BASE_URL = "https://www.blackrabbit-creative.com";

export function useSEO({ title, description, canonical, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    // ── Set page title ──
    document.title = title;

    // ── Remove any noindex meta tags ──
    const noindexTags = document.querySelectorAll('meta[name="robots"][content*="noindex"]');
    noindexTags.forEach((tag) => tag.remove());

    // ── Ensure robots meta allows indexing ──
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.name = "robots";
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = "index, follow";

    // ── Meta description ──
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // ── Canonical tag ──
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalUrl) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    } else if (link) {
      link.remove();
    }

    // ── Update OG & Twitter tags ──
    const updates: Record<string, string> = {
      "og:title": ogTitle || title,
      "og:description": ogDescription || description,
      "twitter:title": ogTitle || title,
      "twitter:description": ogDescription || description,
    };

    Object.entries(updates).forEach(([property, content]) => {
      const attr = property.startsWith("twitter:") ? "name" : "property";
      let meta = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    });
  }, [title, description, canonical, ogTitle, ogDescription]);
}
