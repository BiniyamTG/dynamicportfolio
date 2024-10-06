/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
  eslint: {
    // Disable ESLint on build if necessary
    ignoreDuringBuilds: true,
  },
};

// Export the configuration
module.exports = nextConfig;
