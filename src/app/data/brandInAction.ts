/**
 * Brand-in-action mockups shown under Design in Practice on the Graphic Design
 * page — finished identity work photographed on real products.
 *
 * Files are 1600px WebP derivatives in public/assets/brand-in-action. To add
 * one, drop the WebP there and add an entry below; `client` groups the tiles,
 * `tag` is the small purple label on the image, and `alt` carries the SEO and
 * accessibility weight.
 */

export type BrandShot = {
  slug: string
  tag: string
  client: string
  alt: string
  w: number
  h: number
}

export const brandInAction: BrandShot[] = [
  { slug: 'elm-city-glassware', tag: 'Glassware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded pint glasses filled with three beers', w: 1200, h: 800 },
  { slug: 'elm-city-coasters', tag: 'Coasters', client: 'Elm City Brewing', alt: 'Elm City Brewing coaster set with Stay Awhile and Big Bite Energy slogans', w: 1600, h: 1143 },
  { slug: 'elm-city-food-packaging', tag: 'Food Packaging', client: 'Elm City Brewing', alt: 'Elm City Brewing branded burger box and fry carton on red', w: 1280, h: 1600 },
  { slug: 'elm-city-drinkware', tag: 'Drinkware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded mugs with a repeating beer glass pattern', w: 1600, h: 1067 },
  { slug: 'elm-city-apparel', tag: 'Apparel', client: 'Elm City Brewing', alt: 'Elm City Brewing Big Bite Energy hoodie worn from behind', w: 1600, h: 1067 },
  { slug: 'granite-roots-can', tag: 'GDUSA 2025 Winner', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager can, winner of a 2025 GDUSA Package Design Award', w: 940, h: 788 },
  { slug: 'granite-roots-label', tag: 'Can Label', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager label artwork', w: 1200, h: 754 },
  { slug: 'monadnock-signage', tag: 'Signage', client: 'Monadnock Berries', alt: 'Monadnock Berries exterior stone sign', w: 1600, h: 1067 },
  { slug: 'monadnock-packaging', tag: 'Packaging', client: 'Monadnock Berries', alt: 'Monadnock Berries branded blueberry container', w: 1600, h: 1067 },
  { slug: 'monadnock-stationery', tag: 'Wax Seal', client: 'Monadnock Berries', alt: 'Monadnock Berries stationery set with a brass wax seal', w: 1600, h: 1067 },
  { slug: 'monadnock-cards', tag: 'Stationery', client: 'Monadnock Berries', alt: 'Monadnock Berries business card styled with a leaf', w: 1600, h: 1067 },
  { slug: 'monadnock-cards-styled', tag: 'Business Cards', client: 'Monadnock Berries', alt: 'Monadnock Berries business cards on a table set with roses', w: 1600, h: 1067 },
  { slug: 'monadnock-emboss', tag: 'Blind Emboss', client: 'Monadnock Berries', alt: 'Monadnock Berries logo blind embossed into paper', w: 1600, h: 960 },
  { slug: 'monadnock-tote', tag: 'Tote', client: 'Monadnock Berries', alt: 'Monadnock Berries canvas tote bag hanging on a wooden chair', w: 1600, h: 1600 },
  { slug: 'monadnock-drinkware', tag: 'Drinkware', client: 'Monadnock Berries', alt: 'Monadnock Berries branded mugs in navy and white', w: 1600, h: 1067 },
  { slug: 'monadnock-headwear', tag: 'Headwear', client: 'Monadnock Berries', alt: 'Monadnock Berries embroidered navy cap', w: 1600, h: 1067 },
  { slug: 'monadnock-apparel-field', tag: 'Apparel', client: 'Monadnock Berries', alt: 'Monadnock Berries branded tee worn in a cornfield at golden hour', w: 1600, h: 1200 },
  { slug: 'monadnock-apparel', tag: 'Apparel', client: 'Monadnock Berries', alt: 'Monadnock Berries sage green branded tee worn in a meadow', w: 1600, h: 1112 },
  { slug: 'monadnock-embroidery', tag: 'Embroidery', client: 'Monadnock Berries', alt: 'Monadnock Berries monogram embroidered on a shirt pocket', w: 1600, h: 1067 },
]

export const brandInActionCount = brandInAction.length
