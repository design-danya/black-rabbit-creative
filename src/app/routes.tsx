import { createBrowserRouter } from "react-router";
// build-cache-bust-v3
import { lazy } from "react";
import { Layout } from "./layouts/Layout";
import Home from "./pages/Home";
import SitemapRedirect from "./pages/SitemapRedirect";

// Lazy-load all non-homepage routes to reduce initial JS bundle
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BrandIdentity = lazy(() => import("./pages/services/BrandIdentity"));
const LogoDesign = lazy(() => import("./pages/services/LogoDesign"));
const PackagingDesign = lazy(() => import("./pages/services/PackagingDesign"));
const GraphicDesign = lazy(() => import("./pages/services/GraphicDesign"));
const BreweryBranding = lazy(() => import("./pages/services/BreweryBranding"));
const GraniteRoots = lazy(() => import("./pages/portfolio/GraniteRoots"));
const Kapiloff = lazy(() => import("./pages/portfolio/Kapiloff"));
const BasicBalance = lazy(() => import("./pages/portfolio/BasicBalance"));
const NovaDerm = lazy(() => import("./pages/portfolio/NovaDerm"));
const HendricksLutherie = lazy(() => import("./pages/portfolio/HendricksLutherie"));
const CheshireMuseum = lazy(() => import("./pages/portfolio/CheshireMuseum"));
const KeenePride = lazy(() => import("./pages/portfolio/KeenePride"));
const PrintMaterials = lazy(() => import("./pages/portfolio/PrintMaterials"));
const SequoiaSexToys = lazy(() => import("./pages/portfolio/SequoiaSexToys"));
const BadgerBalm = lazy(() => import("./pages/portfolio/BadgerBalm"));
const CaseStudies = lazy(() => import("./pages/portfolio/CaseStudies"));
const Books = lazy(() => import("./pages/portfolio/Books"));
const ElmCityBrewing = lazy(() => import("./pages/portfolio/ElmCityBrewing"));
const MonadnockBerries = lazy(() => import("./pages/portfolio/MonadnockBerries"));
const FAQ = lazy(() => import("./pages/about/FAQ"));
const PressAwards = lazy(() => import("./pages/about/PressAwards"));

export const router = createBrowserRouter([
  // Sitemap redirects — outside Layout so no Navbar/Footer wraps them
  {
    path: "sitemap.xml",
    Component: SitemapRedirect,
  },
  {
    path: "sitemap",
    Component: SitemapRedirect,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "work",
        Component: Portfolio,
      },
      {
        path: "work/elm-city-brewing",
        Component: ElmCityBrewing,
      },
      {
        path: "work/monadnock-berries",
        Component: MonadnockBerries,
      },
      {
        path: "work/granite-roots-brewing",
        Component: GraniteRoots,
      },
      {
        path: "work/kapiloff-insurance",
        Component: Kapiloff,
      },
      {
        path: "work/basic-balance-acupuncture",
        Component: BasicBalance,
      },
      {
        path: "work/nova-dermatology",
        Component: NovaDerm,
      },
      {
        path: "work/hendricks-lutherie",
        Component: HendricksLutherie,
      },
      {
        path: "work/cheshire-childrens-museum",
        Component: CheshireMuseum,
      },
      {
        path: "work/keene-pride-festival",
        Component: KeenePride,
      },
      {
        path: "work/print-materials",
        Component: PrintMaterials,
      },
      {
        path: "work/sequoia-sex-toys",
        Component: SequoiaSexToys,
      },
      {
        path: "work/badger-balm",
        Component: BadgerBalm,
      },
      {
        path: "work/case-studies",
        Component: CaseStudies,
      },
      {
        path: "work/books",
        Component: Books,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "about/faq",
        Component: FAQ,
      },
      {
        path: "about/press-awards",
        Component: PressAwards,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "services/brand-identity",
        Component: BrandIdentity,
      },
      {
        path: "services/logo-design",
        Component: LogoDesign,
      },
      {
        path: "services/packaging-design",
        Component: PackagingDesign,
      },
      {
        path: "services/graphic-design",
        Component: GraphicDesign,
      },
      {
        path: "services/brewery-branding",
        Component: BreweryBranding,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);