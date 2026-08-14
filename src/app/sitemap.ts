import { MetadataRoute } from 'next';
import { getAllDocumentsMeta } from '@/lib/mdx';

const DOMAIN = 'https://inanvnpis.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllDocumentsMeta('articles');
  const blogEntries: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.8,
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
    ...blogEntries,
  ];
}
