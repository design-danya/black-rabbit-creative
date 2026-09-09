/**
 * Client reviews, sourced from the Black Rabbit Creative Google Business Profile.
 * Self-hosted (previously a Merchynt iframe that stopped rendering).
 * Keep newest first. `short` is optional — a pull-quote used for emphasis.
 */

export type Review = {
  name: string
  initial: string
  rating: 5
  quote: string
  meta?: string
}

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Black+Rabbit+Creative+Portsmouth+NH#lrd=0x0:0x0,1'

export const reviews: Review[] = [
  {
    name: 'Rebecca Hamilton',
    initial: 'R',
    rating: 5,
    quote:
      'I hired Black Rabbit Creative to make my book proposal. It was a unique and challenging project and they did an absolutely amazing job! I was able to land a literary agent and have received several offers for my book. I couldn’t have done it without them!',
    meta: 'Book proposal design',
  },
  {
    name: 'Ian Hendrick',
    initial: 'I',
    rating: 5,
    quote:
      'I worked with Black Rabbit Creative and was impressed by Danya’s creativity and innovative ideas. She was collaborative and listened to my input, making the process smooth and flexible. Her professionalism stood out in every meeting and the final brand identity felt fresh and polished.',
    meta: 'Brand identity',
  },
  {
    name: 'Tyler Walters',
    initial: 'T',
    rating: 5,
    quote:
      'I was really impressed with the creativity, professionalism, communication, expertise and innovation at Black Rabbit Creative. I felt heard and valued throughout the process, and the final results were both fresh and polished. Highly recommend and would definitely work with them again.',
    meta: 'Branding',
  },
  {
    name: 'Ben Row',
    initial: 'B',
    rating: 5,
    quote:
      'From the first meeting to the final deliverables, Black Rabbit Creative was incredibly creative, collaborative and flexible. Their expertise and innovative approach made our brand identity feel fresh and professional, and the whole process was seamless.',
    meta: 'Brand identity',
  },
  {
    name: 'Emerald Levick',
    initial: 'E',
    rating: 5,
    quote:
      'Black Rabbit Creative took the time to listen to my ideas, then turned them into fresh, innovative concepts that exceeded my expectations. Their creative approach made the whole process fun and inspiring — a professional yet personable partner.',
    meta: 'Branding',
  },
  {
    name: 'Cam Paul',
    initial: 'C',
    rating: 5,
    quote:
      'I worked with Black Rabbit Creative on a brand identity redesign and was impressed by their creativity and flexibility. The team delivered innovative concepts that matched my vision and the results were clear and professional. I am excited to return for my next project.',
    meta: 'Rebrand',
  },
  {
    name: 'Brenna Morris',
    initial: 'B',
    rating: 5,
    quote:
      'I worked with Black Rabbit Creative on a brand identity project and was impressed by how professional and reliable they are. The team was creative, responded quickly to every question, and their expertise showed in the polished results.',
    meta: 'Brand identity',
  },
  {
    name: 'Thomas Pugliese',
    initial: 'T',
    rating: 5,
    quote:
      'I was impressed by their creativity, professionalism and original ideas. The team delivered fresh branding concepts that exceeded my expectations and made the whole process enjoyable. I’m excited to return for my next branding project.',
    meta: 'Branding',
  },
  {
    name: 'Sarah Stockton',
    initial: 'S',
    rating: 5,
    quote: 'Highly recommend Black Rabbit to anyone looking for top-notch branding.',
    meta: 'Branding',
  },
]

export const reviewCount = reviews.length
export const averageRating = 5.0
