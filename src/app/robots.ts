import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/vnpis-analytics-dashboard', '/private/', '/pos', '/dbg', '/api/'],
    },
    sitemap: 'https://www.inanvnpis.com/sitemap.xml',
  };
}
