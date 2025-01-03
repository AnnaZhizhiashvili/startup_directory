import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Limit to Unsplash for added security
      },
    ]

  },
  experimental: {
    ppr: 'incremental',
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right"
  }


};

export default nextConfig;
