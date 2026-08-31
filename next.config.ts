import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    qualities: [70, 75, 80, 85, 90],
  },
};

export default nextConfig;
