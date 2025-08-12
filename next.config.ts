import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/lz-marketing',
  assetPrefix: '/lz-marketing',
  /* config options here */
};

export default nextConfig;
