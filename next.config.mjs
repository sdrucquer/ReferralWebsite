/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/gusto-bonus",
        destination: "/gusto",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
