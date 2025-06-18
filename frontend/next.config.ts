import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio',  // required for GitHub Pages
  assetPrefix: '/Portfolio/',

  devIndicators: false,
  // Disable the "N" button watermark
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
};

export default nextConfig;
