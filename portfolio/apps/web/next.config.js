/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],
  // Fix for Windows path issues with Turbopack
  experimental: {
    turbo: {
      resolveAlias: {
        // Prevent path resolution issues on Windows
      }
    }
  },
  // Alternative: disable turbo entirely
  // experimental: {
  //   turbo: false
  // }
};

export default nextConfig;
