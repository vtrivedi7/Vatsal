/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Allow the build to pass even if there are ESLint or TypeScript errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: ['placeholder.com'],
    unoptimized: true,                // <— added
  },

  // Ensure proper transpilation of framer-motion
  transpilePackages: ['framer-motion'],

  async redirects() {
    return [
      {
        source: '/runlogai',
        destination: '/work',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
