/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 180,
  async redirects() {
    return [
      {
        source: '/kien-thuc/index',
        destination: '/kien-thuc',
        permanent: true,
      },
      {
        source: '/kien-thuc/index.html',
        destination: '/kien-thuc',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
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
      {
        source: '/tin-tuc.html',
        destination: '/kien-thuc',
        permanent: true,
      },
      {
        source: '/dich-vu.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quy-trinh.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/vat-tu.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chinh-sach.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap.html',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/:slug.html',
        destination: '/kien-thuc/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
