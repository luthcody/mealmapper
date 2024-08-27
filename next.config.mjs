/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/blog/:slug',
            destination: '/news/:slug',
            permanent: true,
          },
        ]
    },
};

export default nextConfig;
