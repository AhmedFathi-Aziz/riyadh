import type { NextConfig } from "next";

/** Static export for Cloudflare Pages (output in /out). */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
