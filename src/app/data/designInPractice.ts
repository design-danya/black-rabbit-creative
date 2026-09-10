/**
 * Design in Practice â every piece of finished client work shown on the
 * Graphic Design page, in one scrolling row. Ordered by client so each brand
 * reads as a run rather than scattered tiles.
 *
 * `src` points at the file directly; most live in public/assets/brand-in-action,
 * the rest reuse images already shipped for the case-study pages. `w`/`h` are
 * intrinsic dimensions so the row can size each tile by aspect ratio instead of
 * square-cropping.
 */

export type WorkShot = {
  slug: string
  tag: string
  client: string
  alt: string
  src: string
  w: number
  h: number
}

export const designInPractice: WorkShot[] = [
  { slug: 'monadnock-signage', tag: 'Signage', client: 'Monadnock Berries', alt: 'Monadnock Berries exterior stone sign', src: '/assets/brand-in-action/monadnock-signage.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-packaging', tag: 'Packaging', client: 'Monadnock Berries', alt: 'Monadnock Berries branded blueberry container', src: '/assets/brand-in-action/monadnock-packaging.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-stationery', tag: 'Wax Seal', client: 'Monadnock Berries', alt: 'Monadnock Berries stationery set with a brass wax seal', src: '/assets/brand-in-action/monadnock-stationery.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-cards', tag: 'Stationery', client: 'Monadnock Berries', alt: 'Monadnock Berries business card styled with a leaf', src: '/assets/brand-in-action/monadnock-cards.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-cards-styled', tag: 'Business Cards', client: 'Monadnock Berries', alt: 'Monadnock Berries business cards on a table set with roses', src: '/assets/brand-in-action/monadnock-cards-styled.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-emboss', tag: 'Blind Emboss', client: 'Monadnock Berries', alt: 'Monadnock Berries logo blind embossed into paper', src: '/assets/brand-in-action/monadnock-emboss.webp', w: 1600, h: 960 },
  { slug: 'monadnock-tote', tag: 'Tote', client: 'Monadnock Berries', alt: 'Monadnock Berries canvas tote bag hanging on a wooden chair', src: '/assets/brand-in-action/monadnock-tote.webp', w: 1600, h: 1600 },
  { slug: 'monadnock-drinkware', tag: 'Drinkware', client: 'Monadnock Berries', alt: 'Monadnock Berries branded mugs in navy and white', src: '/assets/brand-in-action/monadnock-drinkware.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-headwear', tag: 'Headwear', client: 'Monadnock Berries', alt: 'Monadnock Berries embroidered navy cap', src: '/assets/brand-in-action/monadnock-headwear.webp', w: 1600, h: 1067 },
  { slug: 'monadnock-apparel-field', tag: 'Apparel', client: 'Monadnock Berries', alt: 'Monadnock Berries branded tee worn in a cornfield at golden hour', src: '/assets/brand-in-action/monadnock-apparel-field.webp', w: 1600, h: 1200 },
  { slug: 'monadnock-apparel', tag: 'Apparel', client: 'Monadnock Berries', alt: 'Monadnock Berries sage green branded tee worn in a meadow', src: '/assets/brand-in-action/monadnock-apparel.webp', w: 1600, h: 1112 },
  { slug: 'monadnock-embroidery', tag: 'Embroidery', client: 'Monadnock Berries', alt: 'Monadnock Berries monogram embroidered on a shirt pocket', src: '/assets/brand-in-action/monadnock-embroidery.webp', w: 1600, h: 1067 },
  { slug: 'lobster-lab-wordmark', tag: 'Wordmark', client: 'Lobster Lab', alt: 'Lobster Lab wordmark and lobster mark in cream on red', src: '/assets/brand-in-action/lobster-lab-wordmark.webp', w: 1600, h: 1600 },
  { slug: 'lobster-lab-illustration', tag: 'Illustration', client: 'Lobster Lab', alt: 'Lobster Lab laboratory glassware illustration in red and teal', src: '/assets/fd63c1b5d2868cff77ee9406126475825f091101.png', w: 1400, h: 1400 },
  { slug: 'lobster-lab-window', tag: 'Window Graphics', client: 'Lobster Lab', alt: 'Lobster Lab storefront window graphics on a restaurant facade', src: '/assets/c3a176e298012b00a8264eac6b76f36186b31b37.png', w: 1920, h: 1080 },
  { slug: 'lobster-lab-takeaway', tag: 'Takeaway Packaging', client: 'Lobster Lab', alt: 'Lobster Lab takeaway food boxes in teal and cream', src: '/assets/eb19e6f509c3380dcf33a87840d5d7aad8341860.png', w: 1200, h: 900 },
  { slug: 'lobster-lab-packaging', tag: 'Packaging', client: 'Lobster Lab', alt: 'Lobster Lab teal product box on a deep red ground', src: '/assets/87a38a6b1dcd3ee33bf1c96210e6ff8045d52682.png', w: 1200, h: 800 },
  { slug: 'lobster-lab-apparel', tag: 'Apparel', client: 'Lobster Lab', alt: 'Lobster Lab hoodie worn in coral red', src: '/assets/3600427455a05045405b90350f411e3023b4f419.png', w: 600, h: 900 },
  { slug: 'lobster-lab-storefront', tag: 'Window Design', client: 'Lobster Lab', alt: 'Lobster Lab storefront window illustration on an arched shopfront', src: '/assets/20f240a8ee30e1ccbb07e3d25224d0824577e939.png', w: 2000, h: 1428 },
  { slug: 'lobster-lab-print-menu', tag: 'Print', client: 'Lobster Lab', alt: 'Lobster Lab branded menu design in print', src: '/assets/88b89e394c1863621a0969459d4a1c52d920d3bf.png', w: 1440, h: 1440 },
  { slug: 'sequoia-packaging', tag: 'Product Packaging', client: 'Sequoia', alt: 'Sequoia product boxes with Wet and Tame the Beast lettering', src: '/assets/6a9e50f522155b75baf5e7ef9d9c159116527921.png', w: 2048, h: 1366 },
  { slug: 'sequoia-cards', tag: 'Insert Cards', client: 'Sequoia', alt: 'Sequoia thank-you and product insert cards with fruit illustrations', src: '/assets/c3e6a7f6b0685bbc7da3611c6fb4f543a7e50462.png', w: 2048, h: 1463 },
  { slug: 'sequoia-gift-box', tag: 'Gift Box', client: 'Sequoia', alt: 'Sequoia purple gift box with a patterned lining', src: '/assets/c623085a0fa6b8d6f06c6c8a1164e462be62b41c.png', w: 2048, h: 1424 },
  { slug: 'sequoia-pattern-tape', tag: 'Pattern & Tape', client: 'Sequoia', alt: 'Sequoia patterned shipping box with branded tape', src: '/assets/c390af4e482dba3c7b0dd5acd8a94f8b5a3de2c1.png', w: 2048, h: 1503 },
  { slug: 'sequoia-pattern', tag: 'Pattern System', client: 'Sequoia', alt: 'Sequoia floral pattern system on a card and sleeve', src: '/assets/4eed3acad87e65ab0e3933e8340dd64f53b44948.png', w: 2048, h: 1152 },
  { slug: 'sequoia-business-cards', tag: 'Business Cards', client: 'Sequoia', alt: 'Sequoia business cards for Black Rabbit Creative on a purple ground', src: '/assets/brand-in-action/sequoia-business-cards.webp', w: 1440, h: 1029 },
  { slug: 'sequoia-print', tag: 'Stationery System', client: 'Sequoia', alt: 'Sequoia print collateral and stationery system', src: '/assets/8140257f03131aef1d3ebc0f25dc02ba7784ffe7.png', w: 1440, h: 1029 },
  { slug: 'elm-city-glassware', tag: 'Glassware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded pint glasses filled with three beers', src: '/assets/d9514fdc5fec4f5f3832efcd83753965963d15ac.png', w: 1200, h: 800 },
  { slug: 'elm-city-coasters', tag: 'Coasters', client: 'Elm City Brewing', alt: 'Elm City Brewing coaster set with Stay Awhile and Big Bite Energy slogans', src: '/assets/7365affe4888e095c7c95adfa15ba543ae3260b9.png', w: 3500, h: 2500 },
  { slug: 'elm-city-food-packaging', tag: 'Food Packaging', client: 'Elm City Brewing', alt: 'Elm City Brewing branded burger box and fry carton on red', src: '/assets/brand-in-action/elm-city-food-packaging.webp', w: 1280, h: 1600 },
  { slug: 'elm-city-drinkware', tag: 'Drinkware', client: 'Elm City Brewing', alt: 'Elm City Brewing branded mugs with a repeating beer glass pattern', src: '/assets/601134ce891fb633c27cd62753888a783afe69a8.png', w: 6000, h: 4000 },
  { slug: 'elm-city-apparel', tag: 'Apparel', client: 'Elm City Brewing', alt: 'Elm City Brewing Big Bite Energy hoodie worn from behind', src: '/assets/brand-in-action/elm-city-apparel.webp', w: 1600, h: 1067 },
  { slug: 'calenton-merch', tag: 'Brand Support', client: 'Calentón', alt: 'Calentón Mexican Hot Sauce branded merchandise and illustration', src: '/assets/9487f73cf6857228ca1812e6af644c8fb87f662f.png', w: 1440, h: 1440 },
  { slug: 'calenton-identity', tag: 'Mascot & Logo', client: 'Calentón', alt: 'Calentón Mexican Hot Sauce brand identity and devil mascot', src: '/assets/74ddf897dc27d3af21a310ff4b2955836fb1236e.png', w: 1400, h: 1400 },
  { slug: 'calenton-bottles', tag: 'Label Design', client: 'Calentón', alt: 'Calentón Mexican Hot Sauce bottle range and label design', src: '/assets/8905280fcbbe6472c87d966e62b2820dfb0a08b2.png', w: 1400, h: 1400 },
  { slug: 'calenton-broadcast', tag: 'Retro Broadcast', client: 'Calentón', alt: 'Calentón Mexican Hot Sauce retro television campaign mockup', src: '/assets/6cf0157453a99927daa1bb516060e69723795c3a.png', w: 1400, h: 1400 },
  { slug: 'basic-balance-before', tag: 'Before', client: 'Basic Balance Acupuncture', alt: 'Basic Balance Acupuncture social media before the rebrand', src: '/assets/12223c6312b759ed36ed217c3fe0a5dc4ccaa925.png', w: 2000, h: 2000 },
  { slug: 'basic-balance-after', tag: 'After', client: 'Basic Balance Acupuncture', alt: 'Basic Balance Acupuncture social media after the rebrand', src: '/assets/7c9c343e0780d9aeaac6fe49e459502282429caf.png', w: 2000, h: 2000 },
  { slug: 'basic-balance-merch', tag: 'Brand Merch', client: 'Basic Balance Acupuncture', alt: 'Basic Balance Acupuncture branded tote bag and apparel', src: '/assets/eee6a8e31ec3bd5688b0e312029b898cf6c3bf94.png', w: 2048, h: 2048 },
  { slug: 'granite-roots-can', tag: 'GDUSA 2025 Winner', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager can, winner of a 2025 GDUSA Package Design Award', src: '/assets/50e23837cf920f2e5faee0e0a19273c2909f747d.png', w: 940, h: 788 },
  { slug: 'granite-roots-label', tag: 'Can Label', client: 'Granite Roots Brewing', alt: 'Granite Roots Brewing Cheshire Czech lager label artwork', src: '/assets/874f30422be2f740afa26039e87110aeaa92d620.png', w: 1200, h: 754 },
  { slug: 'nova-derm-signage', tag: 'Brand in Practice', client: 'Nova Dermatology', alt: 'Nova Dermatology Specialists brand signage in practice', src: '/assets/1befc199b53a513fbd6cfef21325cdbc0d97cc67.png', w: 1179, h: 1179 },
  { slug: 'kapiloff-sign', tag: 'Environmental', client: 'Kapiloff Insurance', alt: 'Kapiloff Insurance Solutions outdoor LED sign design', src: '/assets/7b601b39d3b58f9ece4134790020643744626ff9.png', w: 840, h: 1120 },
  { slug: 'monadnock-labyrinth', tag: 'Wayfinding', client: 'The Monadnock Labyrinth', alt: 'The Monadnock Labyrinth interpretive signage panel', src: '/assets/4b8738d331bc018580f6aaa5ce7d8a9b5beae07a.png', w: 1759, h: 2000 },
  { slug: 'keene-pride-merch', tag: 'Event Branding', client: 'Keene Pride Festival', alt: 'Keene Pride Festival branded merchandise and apparel', src: '/assets/fa6880930640b741275a793c25b79c99740a3f75.png', w: 1079, h: 1079 },
  { slug: 'hitchhikers-cover', tag: 'Print Design', client: 'Editorial', alt: "The Hitchhiker's Guide to the Galaxy book cover redesign", src: '/assets/2e28a03bd8af5876ba80e7d159f0248755d29eef.png', w: 1920, h: 1440 },
]

export const designInPracticeCount = designInPractice.length
