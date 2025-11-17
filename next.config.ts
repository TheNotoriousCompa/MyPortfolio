import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Disable production source maps
  productionBrowserSourceMaps: false,
  
  // Image optimization
  images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Disable Next.js telemetry
  telemetry: false,
  
  // Disable webpack build traces
  experimental: {
    webpackBuildWorker: false,
    optimizePackageImports: [
      'framer-motion',
      'lucide-react'
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
