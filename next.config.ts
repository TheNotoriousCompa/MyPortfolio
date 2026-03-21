import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Disable powered by header
  poweredByHeader: false,

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Disable production source maps
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Experimental features
  experimental: {
    webpackBuildWorker: false,
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      'three',
      '@react-three/fiber',
      '@react-three/drei'
    ]
  },

  // Webpack configuration
  webpack: (config) => {
    // Disable webpack build traces
    config.infrastructureLogging = { debug: false, level: 'error' };
    return config;
  },
};

export default nextConfig;
