export const dynamicParams = true;

import BlogPost, { generateMetadata as baseGenerateMetadata } from '@/app/blog/[slug]/page';
import { getAllSlugs } from '@/lib/mdx';

export function generateStaticParams() {
  const articleSlugs = getAllSlugs('articles');
  const pillarSlugs = getAllSlugs('pillars');
  return [...articleSlugs, ...pillarSlugs].map((slug) => ({
    slug: slug,
  }));
}

export const generateMetadata = baseGenerateMetadata;

export default BlogPost;
