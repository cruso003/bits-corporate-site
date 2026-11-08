import type { NextConfig } from "next";

// Static export: the whole site ships as plain files to Cloudflare Pages.
// The only dynamic piece (the contact form) runs as a Pages Function in /functions.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
