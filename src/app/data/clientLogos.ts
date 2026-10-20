/**
 * Companies Danya has worked with over the years, shown in the single
 * scrolling row under the homepage hero. This is a "worked with" row, not a
 * portfolio: most of these marks are the client's own, not Black Rabbit's
 * design work. Case studies live on /work, so nothing here links out.
 *
 * The band is light, so each file is the client's own light-background
 * artwork wherever Danya had one. Three marks only exist as reversed artwork
 * (Kapiloff, Granite Roots, Monadnock United Way) and had their
 * neutral tones flipped dark when the files were prepared — they are single
 * colour, so nothing is recoloured.
 *
 * Every file is also optically normalised: scaled so its ink area is
 * comparable to the rest, which is why a wide wordmark and a small badge sit
 * at the same visual weight despite different pixel heights.
 *
 * `w` and `h` are the file's intrinsic pixel dimensions so the row can size
 * each logo by aspect ratio and reserve space before the image loads.
 * Order alternates wide and narrow marks so the single line has rhythm.
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
  { slug: 'madame-sherris', name: "Madame Sherri's Lounge & Cabaret", w: 483, h: 348 },
  { slug: 'elm-city-brewing', name: 'Elm City Brewing', w: 1059, h: 348 },
  { slug: 'keene-pride', name: 'Keene Pride', w: 424, h: 348 },
  { slug: 'lamontagne-gallery', name: 'LaMontagne Gallery', w: 1084, h: 348 },
  { slug: 'granite-roots', name: 'Granite Roots Brewing', w: 588, h: 348 },
  { slug: 'hendricks-lutherie', name: "Hendrick's Lutherie", w: 1084, h: 348 },
  { slug: 'wild-mocktails', name: 'Wild Mocktails', w: 748, h: 348 },
  { slug: 'monadnock-berries', name: 'Monadnock Berries', w: 1045, h: 348 },
  { slug: 'keene-artwalk', name: 'Keene ArtWalk', w: 781, h: 348 },
  { slug: 'basic-balance-acupuncture', name: 'Basic Balance Acupuncture', w: 938, h: 348 },
  { slug: 'nova-dermatology', name: 'Nova Dermatology Specialists', w: 932, h: 348 },
  { slug: 'preferred-moving', name: 'Preferred Moving & Storage', w: 1084, h: 348 },
  { slug: 'fortified-motherhood', name: 'Fortified Motherhood', w: 962, h: 348 },
  { slug: 'monadnock-united-way', name: 'Monadnock United Way', w: 986, h: 348 },
]
