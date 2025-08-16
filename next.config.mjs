/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    // Exclude superdesign source from build
    config.watchOptions = { ignored: ['**/superdesign/**', '**/.superdesign/**'] };
    return config;
  },
};

export default nextConfig;
