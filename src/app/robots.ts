import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const disallowedPaths = ['/vnpis-analytics-dashboard', '/private/', '/pos', '/dbg', '/api/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/pos', '/dbg', '/api/'],
      },
    ],
    sitemap: 'https://www.inanvnpis.com/sitemap.xml',
  };
}
