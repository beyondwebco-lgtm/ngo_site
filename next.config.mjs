/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/initiatives/naadha-ashram',
        destination: '/initiatives',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
