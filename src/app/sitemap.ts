import { MetadataRoute } from 'next';
import { getAllDocumentsMeta } from '@/lib/mdx';

const DOMAIN = 'https://www.inanvnpis.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Articles (Non-draft blog posts)
  const articles = getAllDocumentsMeta('articles');
  const blogEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. Pillars (Non-draft Strategic Solution Pages)
  const pillars = getAllDocumentsMeta('pillars');
  const pillarEntries: MetadataRoute.Sitemap = pillars.map((pillar: any) => ({
    url: `${DOMAIN}/${pillar.slug}`,
    lastModified: new Date(pillar.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. Case Studies (Non-draft Case Studies)
  const caseStudies = getAllDocumentsMeta('case-studies');
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs: any) => ({
    url: `${DOMAIN}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.date || Date.now()),
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
    '/industries',
    '/documents',
    '/du-an',
    '/videos',
    '/services',
    '/services/industrial-printing',
    '/services/pad-printing-service',
    '/services/screen-printing-service',
    '/services/uv-printing-service',
    '/services/qr-printing',
    '/services/qr-printing-service',
    '/services/variable-data-printing',
    '/services/variable-data-service',
    '/services/color-management',
    '/services/machine-rental',
    '/services/machine-repair',
    '/services/consulting',
    '/solutions',
    '/solutions/pad-printing',
    '/solutions/screen-printing',
    '/solutions/industrial-coding',
    '/solutions/uv-single-pass-printing',
    '/solutions/variable-data-printing',
    '/resources',
    '/resources/download',
    '/resources/msds',
    '/resources/software',
    '/case-studies',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const serviceEntries: MetadataRoute.Sitemap = coreServices.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. Real Indexable Product Categories & Product Pages
  const productPaths = [
    '/products',
    '/products/consumables',
    '/products/pad-printing',
    '/products/pad-printing/machines',
    '/products/pad-printing/inks',
    '/products/pad-printing/pads',
    '/products/pad-printing/plates',
    '/products/pad-screen-machines',
    '/products/pad-screen-supplies',
    '/products/pad-printers',
    '/products/pad-printers/hj',
    '/products/pad-printers/sj',
    '/products/pad-printers/mc',
    '/products/screen-printers',
    '/products/screen-printers/hj',
    '/products/screen-printers/sj',
    '/products/hot-stamping',
    '/products/hot-stamping/sj',
    '/products/uv-printers',
    '/products/uv-printers/ct11',
    '/products/uv-printers/ct21',
    '/products/cij-ink',
    '/products/cij-inks',
    '/products/cij-inks/domino',
    '/products/cij-inks/hitachi',
    '/products/cij-inks/videojet',
    '/products/tij-ink',
    '/products/tij-inks',
    '/products/industrial-ink',
    '/products/special-inks',
    '/products/printheads',
    '/products/printheads/ricoh-gen5',
    '/products/printheads/ricoh-gen6',
    '/products/printheads/epson-i3200',
    '/products/printheads/kodak-s5',
    '/products/printheads/kodak-s10',
    '/products/ricoh-printheads',
    '/products/epson-printheads',
    '/products/laser-printers',
    '/products/barcode-readers',
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
      priority: 0.85,
    },
    ...serviceEntries,
    ...pillarEntries,
    ...caseStudyEntries,
    ...productEntries,
    ...blogEntries,
  ];
}
