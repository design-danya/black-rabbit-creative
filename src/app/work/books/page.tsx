import type { Metadata } from 'next'
import Books from '../../pages/portfolio/Books'

export const metadata: Metadata = {
  title: 'Books | Black Rabbit Creative',
  description: 'Case study: Books',
  alternates: {
    canonical: '/work/books',
  },
}

export default function BooksPage() {
  return <Books />
}
