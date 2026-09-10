/**
 * Brand-in-action mockups shown under Design in Practice on the Graphic Design
 * page — finished identity work photographed on real products.
 *
 * Tiles are grouped by client. Most images are 1600px WebP derivatives in
 * public/assets/brand-in-action; where a shot already ships in public/assets
 * for a case-study page, `src` points at that file instead of storing a second
 * copy.
 */

export type BrandShot = {
  slug: string
  tag: string
  client: string
  alt: string
  /** Set when the shot reuses an image that already ships in public/assets. */
  src?: string
  w: number
  h: number
}

export const brandInAction: BrandShot[] = [
  { slug: 'elm-city-glassware', tag: 'Glassware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded pint glasses filled with three beers', src: '/assets/d9514fdc5fec4f5f3832efcd83753965963d15ac.png', w: 1200, h: 800 },
  { slug: 'elm-city-coasters', tag: 'Coasters', client: 'Elm City Brewing', alt: 'Elm City Brewing coaster set with Stay Awhile and Big Bite Energy slogans', src: '/assets/7365affe4888e095c7c95adfa15ba543ae3260b9.png', w: 3500, h: 2500 },
  { slug: 'elm-city-food-packaging', tag: 'Food Packaging', client: 'Elm City Brewing', alt: 'Elm City Brewing branded burger box and fry carton on red', w: 1280, h: 1600 },
  { slug: 'elm-city-drinkware', tag: 'Drinkware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded mugs with a repeating beer glass pattern', src: '/assets/601134ce891fb633c27cd62753888a783afe69a8.png', w: 6000, h: 4000 },
  { slug: 'elm-city-apparel', tag: 'Apparel', client: 'Elm City Brewing', alt: 'Elm City Brewing Big Bite Energy hoodie worn from behind', w: 1600, h: 1067 },
  { slug: 'granite-roots-can', tag: 'GDUSA 2025 Winner', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager can, winner of a 2025 GDUSA Package Design Award', src: '/assets/50e23837cf920f2e5faee0e0a19273c2909f747d.png', w: 940, h: 788 },
  { slug: 'granite-roots-label', tag: 'Can Label', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager label artwork', src: '/assets/874f30422be2f740afa26039e87110aeaa92d620.png', w: 1200, h: 754 },
  { slug: 'lobster-lab-wordmark', tag: 'Wordmark', client: 'Lobster Lab', alt: 'Lobster Lab wordmark and lobster mark in cream on red', w: 1600, h: 1600 },
  { slug: 'lobster-lab-illustration', tag: 'Illustration', client: 'Lobster Lab', alt: 'Lobster Lab laboratory glassware illustration in red and teal', src: '/assets/fd63c1b5d2868cff77ee9406126475825f091101.png', w: 1400, h: 1400 },
  { slug: 'lobster-lab-window', tag: 'Window Graphics', client: 'Lobster Lab', alt: 'Lobster Lab storefront window graphics on a restaurant facade', src: '/assets/c3a176e298012b00a8264eac6b76f36186b31b37.png', w: 1920, h: 1080 },
  { slug: 'lobster-lab-menu', tag: 'Menu Design', client: 'Lobster Lab', alt: 'Lobster Lab menu design in red and teal', src: '/assets/03f18bfe8e04d5774abf120d1f3fad955b9c299e.png', w: 1920, h: 1408 },
  { slug: 'lobster-lab-takeaway', tag: 'Takeaway Packaging', client: 'Lobster Lab', alt: 'Lobster Lab takeaway food boxes in teal and cream', src: '/assets/eb19e6f509c3380dcf33a87840d5d7aad8341860.png', w: 1200, h: 900 },
  { slug: 'lobster-lab-packaging', tag: 'Packaging', client: 'Lobster Lab', alt: 'Lobster Lab teal product box on a deep red ground', src: '/assets/87a38a6b1dcd3ee33bf1c96210e6ff8045d52682.png', w: 1200, h: 800 },
  { slug: 'lobster-lab-apparel', tag: 'Apparel', client: 'Lobster Lab', alt: 'Lobster Lab hoodie worn in coral red', src: '/assets/3600427455a05045405b90350f411e3023b4f419.png', w: 600, h: 900 },
  { slug: 'sequoia-packaging', tag: 'Product Packaging', client: 'Sequoia', alt: 'Sequoia product boxes with Wet and Tame the Beast lettering', src: '/assets/6a9e50f522155b75baf5e7ef9d9c159116527921.png', w: 2048, h: 1366 },
  { slug: 'sequoia-cards', tag: 'Insert Cards', client: 'Sequoia', alt: 'Sequoia thank-you and product insert cards with fruit illustrations', src: '/assets/c3e6a7f6b0685bbc7da3611c6fb4f543a7e50462.png', w: 2048, h: 1463 },
  { slug: 'sequoia-gift-box', tag: 'Gift Box', client: 'Sequoia', alt: 'Sequoia purple gift box with a patterned lining', src: '/assets/c623085a0fa6b8d6f06c6c8a1164e462be62b41c.png', w: 2048, h: 1424 },
  { slug: 'sequoia-pattern-tape', tag: 'Pattern & Tape', client: 'Sequoia', alt: 'Sequoia patterned shipping box with branded tape', src: '/assets/c390af4e482dba3c7b0dd5acd8a94f8b5a3de2c1.png', w: 2048, h: 1503 },
  { slug: 'sequoia-pattern', tag: 'Pattern System', client: 'Sequoia', alt: 'Sequoia floral pattern system on a card and sleeve', src: '/assets/4eed3acad87e65ab0e3933e8340dd64f53b44948.png', w: 2048, h: 1152 },
  { slug: 'sequoia-business-cards', tag: 'Business Cards', client: 'Sequoia', alt: 'Sequoia business cards for Black Rabbit Creative on a purple ground', w: 1440, h: 1029 },
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
