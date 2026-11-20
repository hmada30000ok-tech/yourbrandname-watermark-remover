/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a purely static site in `out/` (Cloudflare Pages ready).
  output: 'export',

  // We never use the Next image optimizer; all visuals are inline SVG/CSS.
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // Keep URLs clean for Cloudflare Pages directory indexes.
  trailingSlash: false,

  // ffmpeg.wasm is loaded at runtime from a pinned CDN, not bundled.
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, path: false };
    return config;
  },
};

export default nextConfig;
