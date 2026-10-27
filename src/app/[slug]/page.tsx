export const dynamicParams = true;

import { BlogPostContainer } from '@/app/blog/[slug]/page';
import { getAllSlugs, getDocumentMetadataBySlug } from '@/lib/mdx';

export function generateStaticParams() {
  const pillarSlugs = getAllSlugs('pillars');
  return pillarSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slugs = getAllSlugs('pillars');
  if (!slugs.includes(resolvedParams.slug)) {
    return { title: 'Not Found' };
  }
  
  const meta = getDocumentMetadataBySlug('pillars', resolvedParams.slug);
  if (!meta) return { title: 'Not Found' };
  
  const isDraft = meta.draft === true || meta.status === 'draft';
  const canonicalUrl = `https://www.inanvnpis.com/${resolvedParams.slug}`;
  const ogImage = meta.image || '/images/pad-printing-cups.jpg';
  const keywords = Array.isArray(meta.keywords)
    ? meta.keywords
    : typeof meta.keywords === 'string'
    ? meta.keywords.split(',').map((k: string) => k.trim()).filter(Boolean)
    : undefined;
  
  return {
    title: meta.title,
    description: meta.description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: meta.date || '2026-07-08T00:00:00.000Z',
      modifiedTime: meta.updatedAt || meta.date || '2026-07-08T00:00:00.000Z',
      images: [{ url: ogImage, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    ...(isDraft ? { robots: { index: false, follow: false } } : {}),
  };
}

export default async function PillarPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogPostContainer slug={resolvedParams.slug} contentType="pillars" />;
}
