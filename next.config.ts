import type { NextConfig } from "next";

/** Static export for Cloudflare Pages (output in /out) — production build only. */
const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "production" ? { output: "export" as const } : {}),
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
