import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['gsap', '@gsap/react'],
  experimental: {
    optimizePackageImports: ['@stripe/stripe-js'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ]
  },
}

export default nextConfig
