/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/compliance', destination: '/about', permanent: true },
      { source: '/clients', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
