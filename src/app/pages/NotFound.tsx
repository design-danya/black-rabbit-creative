'use client'
import Link from 'next/link';
import { useSEO } from "../components/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Black Rabbit Creative",
    description: "The page you're looking for doesn't exist. Return to Black Rabbit Creative — branding and design studio in Portsmouth, NH.",
  });
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold mb-4 text-gray-200">404</h1>
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="border-b border-black pb-1 hover:pb-2 transition-all uppercase tracking-widest text-sm">
        Return Home
      </Link>
    </div>
  );
}