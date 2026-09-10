/**
 * The studio's FAQ. Lives here rather than inside the page component so the
 * route can also emit FAQPage structured data from the same source — the
 * answers can never drift from the markup.
 */

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "About Black Rabbit Creative",
    items: [
      {
        q: "What does Black Rabbit Creative do?",
        a: "Black Rabbit Creative is a branding and packaging design studio that helps product-based businesses build distinctive, strategic brands. We specialize in brand identity design, packaging design, website design, SEO foundations, graphic design, and custom illustration.",
      },
      {
        q: "What services does Black Rabbit Creative offer?",
        a: "Black Rabbit Creative offers brand identity design, logo design, branding strategy, rebranding, packaging design, website design, UX/UI design, SEO website optimization, brand guidelines, graphic design support, and custom illustration. We focus on strategic design services for businesses that want a strong, cohesive brand presence.",
      },
      {
        q: "Who does Black Rabbit Creative work with?",
        a: "Black Rabbit Creative works with product-based businesses, small businesses, startups, retail brands, food and beverage brands, and growing companies that need professional branding, packaging, and design support. We especially love working with brands that want to stand out in a crowded market.",
      },
      {
        q: "Where is Black Rabbit Creative located?",
        a: "Black Rabbit Creative is based in New England and works with clients throughout New Hampshire, Vermont, Massachusetts, Maine, Rhode Island, and beyond.",
      },
      {
        q: "What makes Black Rabbit Creative different from other branding studios?",
        a: "Black Rabbit Creative combines strategy, design expertise, and real business experience. We don't believe in generic branding. Every logo, package, website, and visual system is created to help your business look distinct, feel cohesive, and support long-term growth.",
      },
    ],
  },
  {
    title: "Branding Services",
    items: [
      {
        q: "Do you offer logo design?",
        a: "Yes. Black Rabbit Creative offers logo design as part of a larger brand identity process. We create logos that are distinctive, versatile, and built to work across packaging, websites, social media, print materials, and more.",
      },
      {
        q: "Do you offer brand identity design?",
        a: "Yes. Brand identity design is one of our core services. We create full visual identity systems that can include logos, typography, color palettes, supporting brand elements, illustration, and brand guidelines.",
      },
      {
        q: "Do you help with branding strategy?",
        a: "Yes. We help businesses define brand strategy, positioning, and creative direction so the visual identity is aligned with the business goals, audience, and overall market presence.",
      },
      {
        q: "Can you help with rebranding?",
        a: "Yes. We work with businesses that need a rebrand, brand refresh, or stronger visual direction. Whether your current branding feels outdated, inconsistent, or no longer reflects your business, we can help refine and reposition it.",
      },
    ],
  },
  {
    title: "Packaging Design Services",
    items: [
      {
        q: "Do you offer packaging design?",
        a: "Yes. Packaging design is one of Black Rabbit Creative's specialties. We design product packaging that is visually strong, brand-aligned, and ready for real-world production.",
      },
      {
        q: "What types of packaging do you design?",
        a: "We design beer labels, food packaging, product boxes, cosmetic and wellness packaging, retail packaging systems, and packaging graphics and supporting brand elements.",
      },
      {
        q: "Can you design packaging for product-based businesses?",
        a: "Yes. We specialize in packaging design for product-based businesses and understand how packaging affects shelf presence, customer perception, and brand recognition.",
      },
    ],
  },
  {
    title: "Website Design and SEO",
    items: [
      {
        q: "Do you offer website design?",
        a: "Yes. Black Rabbit Creative offers website design with a focus on user experience, strong visual branding, and conversion-driven layout. We design websites that are clear, polished, and aligned with your overall brand.",
      },
      {
        q: "Do you offer UX/UI design?",
        a: "Yes. We design user-focused digital experiences that prioritize clarity, usability, and strong visual communication. Our UX/UI work supports websites that are easy to navigate and built to convert.",
      },
      {
        q: "Do you offer SEO services?",
        a: "We offer SEO-focused website improvements and SEO foundations, especially as part of website projects. This can include page structure, keyword alignment, on-page optimization, and content recommendations to help your site perform better in search.",
      },
      {
        q: "Can you improve an existing website?",
        a: "Yes. We can refine and improve an existing website through design updates, homepage improvements, visual consistency, SEO recommendations, and user experience upgrades.",
      },
    ],
  },
  {
    title: "Graphic Design Support",
    items: [
      {
        q: "Do you offer graphic design services?",
        a: "Yes. We provide graphic design support for businesses that need cohesive visual materials across print and digital platforms.",
      },
      {
        q: "What kind of graphic design work do you do?",
        a: "Graphic design services may include print collateral, marketing materials, product inserts, menus, flyers, social graphics, presentation design, and promotional design assets.",
      },
      {
        q: "Do you offer ongoing design support?",
        a: "Yes. We offer ongoing graphic design support for businesses that need a reliable creative partner for recurring design needs.",
      },
    ],
  },
  {
    title: "Illustration Services",
    items: [
      {
        q: "Do you offer custom illustration?",
        a: "Yes. Black Rabbit Creative offers custom illustration for branding, packaging, and design projects. Illustration can help a brand feel more distinctive, memorable, and ownable.",
      },
      {
        q: "What types of illustration do you create?",
        a: "We create custom illustrations for packaging, brand assets, icons, decorative visual elements, marketing materials, and product-focused artwork.",
      },
    ],
  },
  {
    title: "Process and Timeline",
    items: [
      {
        q: "What is your design process?",
        a: "Our design process typically includes discovery and strategy, creative direction, concept development, design refinement, and final file delivery. This process helps ensure the final work is both visually strong and strategically aligned.",
      },
      {
        q: "How long does a branding project take?",
        a: "Most branding projects take around 4 to 8 weeks depending on scope, feedback timing, and deliverables.",
      },
      {
        q: "How long does a website design project take?",
        a: "Most website design projects take around 6 to 10 weeks depending on the number of pages, complexity, and content readiness.",
      },
      {
        q: "How many revisions are included?",
        a: "We typically include 2 rounds of revisions per stage so the project stays focused and efficient while still allowing room for collaboration.",
      },
    ],
  },
  {
    title: "Pricing and Investment",
    items: [
      {
        q: "How much does branding cost?",
        a: "Branding costs vary depending on the scope of the project, deliverables, and timeline. We provide custom proposals based on your specific needs.",
      },
      {
        q: "How much does packaging design cost?",
        a: "Packaging design pricing depends on the type of product, number of SKUs, production needs, and overall project scope.",
      },
      {
        q: "How much does website design cost?",
        a: "Website pricing depends on the size of the site, functionality, SEO needs, and whether it is a new design or an existing site refresh.",
      },
      {
        q: "Do you offer custom quotes?",
        a: "Yes. Every project is scoped individually so you receive a proposal tailored to your business goals and design needs.",
      },
    ],
  },
  {
    title: "Working With Black Rabbit Creative",
    items: [
      {
        q: "Who is Black Rabbit Creative for?",
        a: "Black Rabbit Creative is for businesses that want more than a generic logo or quick design fix. We work best with brands that value thoughtful strategy, strong visuals, and a distinct market presence.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Yes. We work with small businesses, founders, startups, and growing brands that need branding, packaging, website design, and graphic design support.",
      },
      {
        q: "Do you work with businesses outside New England?",
        a: "Yes. While Black Rabbit Creative is based in New England, we work with clients in other locations as well.",
      },
      {
        q: "Can you work with my existing team?",
        a: "Yes. We can lead projects directly or collaborate with your in-house team, developers, marketing partners, or other creative collaborators.",
      },
      {
        q: "What if I do not have a clear vision yet?",
        a: "That is completely normal. Part of our process is helping you clarify your direction, identify what makes your brand different, and turn that into a clear visual system.",
      },
    ],
  },
  {
    title: "Deliverables and Files",
    items: [
      {
        q: "What files do you provide?",
        a: "We provide professional final files based on the project, which may include AI files, EPS files, PNG files, JPG files, PDF files, web-ready assets, and print-ready files.",
      },
      {
        q: "Do I get the source files?",
        a: "Yes. Final deliverables include the appropriate source files so you can properly use your brand assets moving forward.",
      },
      {
        q: "Can you use assets I already have?",
        a: "Yes. We can work with existing brand assets, photography, packaging files, or visual materials when appropriate.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        q: "How do I get started with Black Rabbit Creative?",
        a: "You can get started by reaching out through the website contact form or email. From there, we'll talk through your project, goals, and next steps.",
      },
      {
        q: "What should I include when I inquire?",
        a: "Helpful information includes the type of project, your business or brand, your goals, your timeline, your budget range, and any current website or brand materials.",
      },
      {
        q: "Do you require a deposit?",
        a: "Yes. A signed agreement and deposit are required before a project begins.",
      },
      {
        q: "Do you offer discovery calls?",
        a: "Yes. Discovery calls help determine if the project is a good fit and allow us to better understand your goals before preparing a proposal.",
      },
    ],
  },
];

export const faqItems = faqData.flatMap((c) => c.items)
