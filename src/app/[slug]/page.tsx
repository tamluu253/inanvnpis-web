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
  const canonicalUrl = meta.canonical || `https://www.inanvnpis.com/${resolvedParams.slug}`;
  const ogImage = meta.image || '/images/pad-printing-cups.jpg';
  
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      type: 'article',
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
