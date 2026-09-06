import { MetadataRoute } from 'next';
import { getAllDocumentsMeta, getAllSlugs } from '@/lib/mdx';

const DOMAIN = 'https://www.inanvnpis.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Articles (Blog posts)
  const articles = getAllDocumentsMeta('articles');
  const blogEntries: MetadataRoute.Sitemap = articles
    .filter((post: any) => post.draft !== true && post.status !== 'draft')
    .map((post: any) => ({
      url: `${DOMAIN}/blog/${post.slug}`,
      lastModified: new Date(post.date || Date.now()),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  // 2. Pillars (Strategic Solution Pages)
  const pillarSlugs = getAllSlugs('pillars');
  const pillarEntries: MetadataRoute.Sitemap = pillarSlugs.map((slug) => ({
    url: `${DOMAIN}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Case Studies
  const caseStudySlugs = getAllSlugs('case-studies');
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${DOMAIN}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 4. Core Services & Static Landing Pages
  const coreServices = [
    '/in-tampon',
    '/in-lua',
    '/in-ky-thuat-so',
    '/about',
    '/contact',
    '/faq',
    '/products',
    '/case-studies',
    '/privacy-policy',
    '/terms-of-service'
  ];

  const serviceEntries: MetadataRoute.Sitemap = coreServices.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. Product Categories & Product Pages
  const productPaths = [
    '/products/special-inks',
    '/products/rfid-warehouse-sme',
    '/products/printheads',
    '/products/cij-ink',
    '/products/pad-printers',
    '/products/laser-printers',
    '/products/pad-printing',
    '/products/screen-printers',
    '/products/uv-printers',
    '/products/tij-printers',
    '/products/cij-printers',
    '/products/tij-inks',
    '/products/cij-inks',
    '/products/ricoh-printheads',
    '/products/epson-printheads',
    '/products/hot-stamping',
    '/products/pad-screen-supplies',
    '/products/industrial-ink',
    '/products/consumables',
    '/products/pad-screen-machines',
    '/products/tij-ink',
    '/products/barcode-readers'
  ];

  const productEntries: MetadataRoute.Sitemap = productPaths.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...serviceEntries,
    ...pillarEntries,
    ...caseStudyEntries,
    ...productEntries,
    ...blogEntries,
  ];
}

