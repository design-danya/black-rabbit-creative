/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site generation (SSG)
  reactStrictMode: true,

  // Configure image optimization for static export
  images: {
    unoptimized: true, // Required for 'export' mode
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
