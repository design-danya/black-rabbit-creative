import type { Metadata } from 'next'
import Contact from '../pages/Contact'

export const metadata: Metadata = {
  title: 'Contact | Black Rabbit Creative',
  description: 'Get in touch with Black Rabbit Creative for your branding project.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
