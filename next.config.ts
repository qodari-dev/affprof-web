import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/month", destination: "/en#pricing", permanent: true },
      { source: "/en/month", destination: "/en#pricing", permanent: true },
      { source: "/es/month", destination: "/es#pricing", permanent: true },
    ];
  },
};

export default nextConfig;
