import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    // !!! Important: This option is required to allow TypeScript to work properly with Next.js
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
      remotePatterns: [
          { hostname: 'img.clerk.com'}
      ]
  }
};

export default nextConfig;
