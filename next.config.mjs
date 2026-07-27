/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization runs on Vercel at request time. Source files in
  // public/assets are never modified — resized WebP/AVIF derivatives are
  // generated on demand and cached at the edge.
  images: {
    formats: ['image/avif', 'image/webp'],
    // Allow admin-uploaded thumbnails/gallery served from Supabase Storage.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bfmqwlyjdctfmebdagej.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Configure basePath if needed (e.g., for non-root deployments)
  // basePath: '/black-rabbit',

  // Configure page extensions to include .tsx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // Ignore TypeScript errors during build if needed (set to false in production)
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Configure redirects, rewrites, and headers if needed later
  // async redirects() {
  //   return []
  // },
}

export default nextConfig
