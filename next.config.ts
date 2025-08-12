import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  distDir: 'docs',
  basePath: isProd ? '/lz-marketing' : undefined,
  assetPrefix: isProd ? '/lz-marketing' : undefined,
  reactStrictMode: true,
};

export default nextConfig;
