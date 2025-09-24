import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  experimental: {
    // Server Actions configuration
    serverActions: {
      bodySizeLimit: '2mb',
    },
    
    // Optimize package imports
    optimizePackageImports: [
      'framer-motion',
      'lucide-react'
    ]
  },
  
  // Webpack configuration
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
