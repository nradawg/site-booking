import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain files to `out/`, which any
  // static host (Cloudflare Pages) can serve.
  output: "export",
};

export default nextConfig;
