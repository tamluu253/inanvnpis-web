/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products/cij-printers',
        destination: '/products/cij-ink',
        permanent: true,
      },
      {
        source: '/products/tij-printers',
        destination: '/products/tij-ink',
        permanent: true,
      },
      {
        source: '/bai-viet',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/tin-tuc',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
