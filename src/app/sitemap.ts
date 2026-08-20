import { MetadataRoute } from 'next';
import { getAllDocumentsMeta } from '@/lib/mdx';

const DOMAIN = 'https://vnpis.com';

const safeDate = (dateVal: any) => {
  const parsed = dateVal ? new Date(dateVal) : new Date();
  return isNaN(parsed.getTime()) ? new Date() : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllDocumentsMeta('articles');
  const pillars = getAllDocumentsMeta('pillars');
  
  const rootEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const tinTucEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/tin-tuc/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const kienThucEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/kien-thuc/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const pillarEntries: MetadataRoute.Sitemap = pillars.map((post: any) => ({
    url: `${DOMAIN}/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const coreServices = [
    '/in-tampon',
    '/in-lua',
    '/in-ky-thuat-so',
    '/about',
    '/contact',
    '/faq'
  ];

  const serviceEntries: MetadataRoute.Sitemap = coreServices.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
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
    ...rootEntries,
    ...pillarEntries,
    ...blogEntries,
    ...tinTucEntries,
    ...kienThucEntries,
  ];
}
