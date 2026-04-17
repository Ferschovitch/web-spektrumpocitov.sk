import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF (smallest) then WebP, with JPEG/PNG fallback
    formats: ["image/avif", "image/webp"],
  },
  // Enable gzip / brotli compression (explicit for clarity)
  compress: true,
  experimental: {
    // Minify & dead-code-eliminate CSS output
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
