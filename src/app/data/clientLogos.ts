/**
 * Companies Danya has worked with over the years, shown in the row under the
 * homepage hero. This is a "worked with" row, not a portfolio: most of these
 * marks are the client's own, not Black Rabbit's design work. Case studies
 * live on /work, so nothing here links out.
 *
 * Every file in /public/assets/clients is prepared for a LIGHT band. Marks
 * that only existed as reversed (white or cream) artwork have had their
 * neutrals flipped dark so they read on near-white; coloured marks are
 * untouched. Each file is also optically normalised — scaled so its ink area
 * is comparable to the others — which is why a wide wordmark and a small
 * badge sit at the same visual weight despite different pixel heights.
 *
 * `w` and `h` are the file's intrinsic pixel dimensions so the row can size
 * each logo by aspect ratio and reserve space before the image loads.
 * Adding a client is one line plus a webp in /public/assets/clients.
 */
export type ClientLogo = {
  slug: string
  name: string
  w: number
  h: number
}

export const clientLogos: ClientLogo[] = [
  { slug: 'bensonwood', name: 'Bensonwood', w: 1084, h: 348 },
  { slug: 'badger', name: 'Badger Balm', w: 377, h: 348 },
  { slug: 'kapiloff-insurance', name: 'Kapiloff Insurance', w: 1084, h: 348 },
  { slug: 'monadnock-united-way', name: 'Monadnock United Way', w: 875, h: 348 },
  { slug: 'elm-city-brewing', name: 'Elm City Brewing', w: 345, h: 348 },
  { slug: 'granite-roots', name: 'Granite Roots Brewing', w: 588, h: 348 },
  { slug: 'preferred-moving', name: 'Preferred Moving & Storage', w: 1078, h: 348 },
  { slug: 'nova-dermatology', name: 'Nova Dermatology Specialists', w: 932, h: 348 },
  { slug: 'basic-balance-acupuncture', name: 'Basic Balance Acupuncture', w: 559, h: 348 },
  { slug: 'keene-artwalk', name: 'Keene ArtWalk', w: 708, h: 348 },
  { slug: 'madame-sherris', name: "Madame Sherri's Lounge & Cabaret", w: 424, h: 348 },
  { slug: 'monadnock-berries', name: 'Monadnock Berries', w: 348, h: 348 },
  { slug: 'wild-mocktails', name: 'Wild Mocktails', w: 748, h: 348 },
  { slug: 'fortified-motherhood', name: 'Fortified Motherhood', w: 343, h: 348 },
  { slug: 'hendricks-lutherie', name: "Hendrick's Lutherie", w: 327, h: 348 },
  { slug: 'keene-pride', name: 'Keene Pride', w: 353, h: 348 },
  { slug: 'sequoia', name: 'Sequoia', w: 305, h: 348 },
]
