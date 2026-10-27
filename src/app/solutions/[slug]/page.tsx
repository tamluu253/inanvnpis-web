import React from 'react';
import { notFound } from 'next/navigation';
import { getDocumentBySlug } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft, Phone, ShieldCheck } from 'lucide-react';

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('pillars', resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  const canonicalUrl = `https://www.inanvnpis.com/${resolvedParams.slug}`;
  const ogImage = post.metadata.image || '/images/pad-printing-cups.jpg';

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.metadata.date || '2026-07-08T00:00:00.000Z',
      modifiedTime: post.metadata.updatedAt || post.metadata.date || '2026-07-08T00:00:00.000Z',
      images: [{ url: ogImage, alt: post.metadata.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.description,
      images: [ogImage],
    },
  };
}

export default async function PillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('pillars', resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const { metadata, contentHtml } = post;
  const pageUrl = `https://www.inanvnpis.com/${resolvedParams.slug}`;
  const publishedDate = metadata.date || '2026-07-08T00:00:00.000Z';
  const modifiedDate = metadata.updatedAt || metadata.date || '2026-07-08T00:00:00.000Z';
  const faqs = metadata.faqs || [];

  const graphItems: Record<string, any>[] = [
    {
      '@type': ['TechArticle', 'Article'],
      '@id': `${pageUrl}#article`,
      headline: metadata.title,
      description: metadata.description,
      articleSection: metadata.category,
      inLanguage: 'vi-VN',
      datePublished: publishedDate,
      dateModified: modifiedDate,
      author: {
        '@type': 'Person',
        name: 'Lưu Trọng Tâm - Kỹ Sư Trưởng In Công Nghiệp & Dữ Liệu Biến Đổi VDP tại VNPIS',
        jobTitle: 'Kỹ Sư Trưởng In Công Nghiệp & Dữ Liệu Biến Đổi VDP',
        worksFor: {
          '@id': 'https://www.inanvnpis.com/#organization',
        },
        url: 'https://www.inanvnpis.com/about',
      },
      reviewedBy: {
        '@type': 'Person',
        name: 'Mr. Giang - Chuyên Gia Kỹ Thuật In Lụa Công Nghiệp',
        jobTitle: 'Chuyên Gia Kỹ Thuật In Lụa Công Nghiệp & Gia Công Sau In',
        worksFor: {
          '@id': 'https://www.inanvnpis.com/#organization',
        },
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.inanvnpis.com/#organization',
        name: 'Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS Solutions',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.inanvnpis.com/images/inanvnpis-logo.png',
        },
      },
      about: [
        { '@type': 'Thing', name: 'Gia công in tampon (Pad Printing)' },
        { '@type': 'Thing', name: 'Gia công in lụa công nghiệp (Screen Printing)' },
        { '@type': 'Thing', name: 'In kỹ thuật số dữ liệu biến đổi VDP & QR Code chống giả' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trang chủ',
          item: 'https://www.inanvnpis.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: metadata.title,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faqs.length > 0) {
    graphItems.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': graphItems,
          }),
        }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-widest mb-6 border border-blue-500/30 uppercase">
            {metadata.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            {metadata.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 mx-auto leading-relaxed">
            {metadata.description}
          </p>
          {/* E-E-A-T Expert Verification Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-800/90 border border-emerald-500/40 text-emerald-200 px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              Tác giả: <strong>Kỹ Sư Lưu Trọng Tâm</strong> | Kiểm duyệt kỹ thuật: <strong>Chuyên gia Mr. Giang</strong> | Tiêu chuẩn: <strong>ISO 9001 / ASTM D3359 5B / RoHS</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 2. CONTENT WITH SIDEBAR */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:w-3/4 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div 
                className="prose prose-lg prose-slate max-w-none 
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-100
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-table:w-full prose-table:border-collapse
                prose-th:bg-slate-100 prose-th:p-4 prose-th:text-left prose-th:border prose-th:border-slate-200
                prose-td:p-4 prose-td:border prose-td:border-slate-200
                prose-li:text-slate-600"
                dangerouslySetInnerHTML={{ __html: contentHtml }} 
              />
            </article>

            {/* SIDEBAR */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">Cần Tư Vấn Nhanh?</h3>
                <p className="text-slate-600 text-sm mb-6">Kỹ sư VNPIS luôn sẵn sàng giải đáp thắc mắc và nhận in mẫu thử miễn phí về công nghệ {metadata.category}.</p>
                <a href="tel:0901836344" className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> Mr. Tâm: 0901 836 344
                </a>
                <a href="tel:0901826344" className="w-full inline-flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg font-bold mt-2.5 hover:bg-emerald-700 transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> Mr. Giang: 0901 826 344
                </a>
                <Link href="/solutions" className="w-full inline-flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-700 rounded-lg font-semibold mt-3 hover:bg-slate-200 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Xem giải pháp khác
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
