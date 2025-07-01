import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply basePath and assetPrefix in production (for GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  }),

  devIndicators: false,
  // Disable the "N" button watermark
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

export default nextConfig;
