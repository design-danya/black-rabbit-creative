import type { Metadata } from 'next'
import SequoiaSexToys from '../../pages/portfolio/SequoiaSexToys'

export const metadata: Metadata = {
  title: "Sequoia — Branding & Packaging Design",
  description: "Product branding and packaging design for Sequoia — a confident, tasteful identity and retail packaging system for a modern wellness brand.",
  alternates: {
    canonical: '/work/sequoia-sex-toys',
  },
}

export default function SequoiaSexToysPage() {
  return <SequoiaSexToys />
}
