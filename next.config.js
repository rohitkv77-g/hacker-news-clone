/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "news.ycombinator.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  nextConfig,
};
