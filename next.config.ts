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
    qualities: [75, 85, 90, 95, 100], // Configure allowed quality values
  },
  // Enable experimental features for better performance
  experimental: {
    ppr: false, // Keep false for stability
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
  // Configure for optimal SSG + ISR
  async rewrites() {
    return [];
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
