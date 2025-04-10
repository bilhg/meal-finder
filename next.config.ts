import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'imgfp.hotp.jp',
      },
    ],    
  },
};

export default nextConfig;
