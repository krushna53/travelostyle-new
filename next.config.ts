import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // pdfkit (used by lib/generateBookingPdf.js) pulls in fontkit, whose
  // compiled output is incompatible with Turbopack's strict ESM bundling.
  // Keeping it external makes Next.js `require()` it natively at runtime
  // in the API route instead of trying to bundle/transpile it.
  serverExternalPackages: ["pdfkit", "fontkit"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
