import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  trailingSlash: true,
  htmlLimitedBots: /.*/,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jedidiahweller.com" }],
        destination: "https://jedidiahweller.com/:path*",
        permanent: true,
      },
      { source: "/profile/jedi", destination: "/about/", permanent: true },
      { source: "/profile/jedi/", destination: "/about/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; frame-src https://www.youtube-nocookie.com; connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
