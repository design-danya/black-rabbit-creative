import type { Metadata } from 'next'
import Books from '../../pages/portfolio/Books'

export const metadata: Metadata = {
  title: 'Book Design & Layout Portfolio',
  description: "Book design and layout work by Black Rabbit Creative — cover design, interior typography, and print-ready production for independent authors and publishers.",
  alternates: {
    canonical: '/work/books',
  },
}

export default function BooksPage() {
  return <Books />
}
