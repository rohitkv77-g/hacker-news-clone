/** @type {import('next').NextConfig} */
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
    async headers() {
      return [
        {
          source: "/_next/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "http://hn.algolia.com/api/v1/",
            },
          ],
        },
      ];
    },
  },
};
