import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  staticPageGenerationTimeout: 180,
  outputFileTracingIncludes: {
    '/**': ['./content/**/*'],
  },
  outputFileTracingRoot: path.join(process.cwd()),
  async redirects() {
    return [
      {
        source: '/kien-thuc/index',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/kien-thuc/index.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/kien-thuc',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/kien-thuc/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/bai-viet/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/tin-tuc/:slug',
        destination: '/blog/:slug',
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
        source: '/products/digital-printers',
        destination: '/products/uv-printers',
        permanent: true,
      },
      {
        source: '/products/consumables/inks',
        destination: '/products/pad-printing/inks',
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
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/dich-vu.html',
        destination: '/dich-vu-in-gia-cong',
        permanent: true,
      },
      {
        source: '/quy-trinh.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/vat-tu.html',
        destination: '/products/consumables',
        permanent: true,
      },
      {
        source: '/chinh-sach.html',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/sitemap.html',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/in-tampon-gia-re',
        destination: '/in-tampon',
        permanent: true,
      },
      {
        source: '/in-lua-gia-re',
        destination: '/in-lua',
        permanent: true,
      },
      {
        source: '/in-uv-gia-re',
        destination: '/services/uv-printing-service',
        permanent: true,
      },
      // Root content legacy slugs mapping
      {
        source: '/gioi-thieu',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/lien-he',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/ho-tro',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/giai-phap-in-tampon',
        destination: '/in-tampon',
        permanent: true,
      },
      {
        source: '/in-pad-and-lua',
        destination: '/in-tampon',
        permanent: true,
      },
      {
        source: '/in-uv-and-qr',
        destination: '/in-ky-thuat-so',
        permanent: true,
      },
      {
        source: '/in-qr-cho-nha-may',
        destination: '/in-ky-thuat-so',
        permanent: true,
      },
      {
        source: '/in-cho-thue-may-in-qr-cho-nha-may',
        destination: '/services/machine-rental',
        permanent: true,
      },
      {
        source: '/tin-tuc-and-kien-thuc',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/nganh-ung-dung',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/linh-kien',
        destination: '/products/consumables',
        permanent: true,
      },
      {
        source: '/muc-in',
        destination: '/products/consumables',
        permanent: true,
      },
      {
        source: '/dich-vu-in-gia-cong-sua-chua-cai-tien-may',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/giai-phap-in-du-lieu-bien-doi',
        destination: '/solutions/variable-data-printing',
        permanent: true,
      },
      {
        source: '/giai-phap-in-date-thuc-pham-dong-lanh',
        destination: '/solutions/industrial-coding',
        permanent: true,
      },
      {
        source: '/muc-in-cij-cho-day-cap-dien',
        destination: '/blog/muc-in-cij-cho-day-cap-dien',
        permanent: true,
      },
      {
        source: '/dau-in-phun-cong-ngiep-dau-in-konica-minolta-chuyen-du-lieu-bien-doi-dau-in-konica-1024i-she-6pl',
        destination: '/products/printheads',
        permanent: true,
      },
      {
        source: '/mayin-phun-cong-nghiep-kyocera-kj4a',
        destination: '/products/printheads',
        permanent: true,
      },
      {
        source: '/rfid',
        destination: '/products/rfid-warehouse-sme',
        permanent: true,
      },
      {
        source: '/ung-dung-chip-rfid',
        destination: '/products/rfid-warehouse-sme',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
