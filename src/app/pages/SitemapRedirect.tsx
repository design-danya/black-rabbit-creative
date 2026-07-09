import { useEffect } from "react";

const SITEMAP_URL =
  "https://gist.githubusercontent.com/design-danya/e812570829c0becc93a098e525c94ae6/raw/b26e0af2c9ceca899e4bff0364d1c8dc33d900bc/sitemap.xml";

export default function SitemapRedirect() {
  useEffect(() => {
    window.location.href = SITEMAP_URL;
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center text-white/40 text-sm tracking-widest uppercase">
      Redirecting to sitemap…
    </div>
  );
}
