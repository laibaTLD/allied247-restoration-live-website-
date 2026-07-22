/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for SSG + ISR (no output: 'export' to keep ISR functionality)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any host
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    ppr: false,
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
    staticGenerationMaxConcurrency: 2,
    staticGenerationRetryCount: 3,
  },
  async redirects() {
    const services = [
      "water-restoration",
      "fire-restoration",
      "mold-remediation",
      "reconstruction",
      "radon-mitigation",
      "multi-surface-cleaning",
    ] as const;

    return services.map((service) => ({
      source: `/service/${service}/service-areas/columbia-fall-mt`,
      destination: `/service/${service}/service-areas/columbia-falls-mt`,
      permanent: true,
    }));
  },
  async rewrites() {
    return [];
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
