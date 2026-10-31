import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getAllDocumentsMeta, getDocumentBySlug, getDocumentMetadataBySlug } from '@/lib/mdx';
import ConsultationForm from '@/components/ui/ConsultationForm';
import ArticleContactCTA from '@/components/ArticleContactCTA';

export const dynamicParams = true;

// Generate static params for all posts at build time
export function generateStaticParams() {
  const slugs = getAllSlugs('articles');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slugs = getAllSlugs('articles');
  if (!slugs.includes(resolvedParams.slug)) {
    return { title: 'Not Found' };
  }
  
  const meta = getDocumentMetadataBySlug('articles', resolvedParams.slug);
  if (!meta) return { title: 'Not Found' };
  
  const isDraft = meta.draft === true || meta.status === 'draft';
  const canonicalUrl = `https://www.inanvnpis.com/blog/${resolvedParams.slug}`;
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <BlogPostContainer slug={resolvedParams.slug} contentType="articles" />;
}

export async function BlogPostContainer({ 
  slug, 
  contentType 
}: { 
  slug: string; 
  contentType: 'articles' | 'pillars'; 
}) {
  const slugs = getAllSlugs(contentType);
  if (!slugs.includes(slug)) {
    notFound();
  }

  const post = await getDocumentBySlug(contentType, slug);
  if (!post) {
    notFound();
  }

  const { metadata, contentHtml } = post;
  const hasDedicatedMedia = Boolean(metadata.mediaExt || metadata.image);

  const allArticles = getAllDocumentsMeta('articles');
  const relatedArticles = allArticles
    .filter((a: any) => a.slug !== slug && !a.draft)
    .sort((a: any, b: any) => {
      let scoreA = 0;
      let scoreB = 0;
      if (a.category && a.category === metadata.category) scoreA += 5;
      if (b.category && b.category === metadata.category) scoreB += 5;
      return scoreB - scoreA;
    })
    .slice(0, 4);
  
  const pageUrl = contentType === 'articles' ? `https://www.inanvnpis.com/blog/${slug}` : `https://www.inanvnpis.com/${slug}`;
  const publishedDate = metadata.date || '2026-07-08T00:00:00.000Z';
  const modifiedDate = metadata.updatedAt || metadata.date || '2026-07-08T00:00:00.000Z';
  const faqs = metadata.faqs || [];

  const graphItems: Record<string, any>[] = [
    {
      "@type": contentType === 'pillars' ? ["TechArticle", "Article"] : ["TechArticle", "Article"],
      "@id": `${pageUrl}#article`,
      "headline": metadata.title,
      "description": metadata.description,
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "inLanguage": "vi-VN",
      "image": metadata.image || (hasDedicatedMedia ? `https://www.inanvnpis.com/media/blog/${metadata.slug}.${metadata.mediaExt}` : 'https://www.inanvnpis.com/icon.png'),
      "author": {
        "@type": "Person",
        "name": "Lưu Trọng Tâm - Kỹ Sư Trưởng In Công Nghiệp & Dữ Liệu Biến Đổi VDP tại VNPIS",
        "jobTitle": "Kỹ Sư Trưởng In Công Nghiệp & Dữ Liệu Biến Đổi VDP",
        "worksFor": {
          "@id": "https://www.inanvnpis.com/#organization"
        },
        "url": "https://www.inanvnpis.com/about"
      },
      "reviewedBy": {
        "@type": "Person",
        "name": "Mr. Giang - Chuyên Gia Kỹ Thuật In Lụa Công Nghiệp",
        "jobTitle": "Chuyên Gia Kỹ Thuật In Lụa Công Nghiệp & Gia Công Sau In",
        "worksFor": {
          "@id": "https://www.inanvnpis.com/#organization"
        }
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.inanvnpis.com/#organization",
        "name": "Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.inanvnpis.com/icon.png"
        }
      },
      "about": [
        { "@type": "Thing", "name": "Gia công in tampon (Pad Printing)" },
        { "@type": "Thing", "name": "Gia công in lụa công nghiệp (Screen Printing)" },
        { "@type": "Thing", "name": "In kỹ thuật số dữ liệu biến đổi VDP & QR Code chống giả" }
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": contentType === 'articles'
        ? [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Trang chủ",
              "item": "https://www.inanvnpis.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Kiến thức in ấn",
              "item": "https://www.inanvnpis.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": metadata.title,
              "item": pageUrl
            }
          ]
        : [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Trang chủ",
              "item": "https://www.inanvnpis.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": metadata.title,
              "item": pageUrl
            }
          ]
    }
  ];

  if (faqs.length > 0) {
    graphItems.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50 font-sans">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link href={contentType === 'articles' ? '/blog' : '/'} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-extrabold mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> {contentType === 'articles' ? 'Quay lại thư viện bài viết' : 'Quay lại trang chủ'}
        </Link>
        
        <div className="mb-10">
          <div className="flex flex-wrap gap-2.5 mb-6">
            <span className="bg-blue-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-extrabold shadow-sm uppercase tracking-wider">
              {metadata.category || (contentType === 'articles' ? 'KIẾN THỨC IN ẤN' : 'GIẢI PHÁP IN')}
            </span>
            {metadata.code && !metadata.code.startsWith('WEEK') && (
              <span className="bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-slate-300">
                {metadata.code}
              </span>
            )}
            <span className="bg-slate-100 text-slate-600 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-600" /> 5 phút đọc
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {metadata.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed font-medium">
            {metadata.description}
          </p>

          {/* E-E-A-T Expert Verification Badge */}
          <div className="flex flex-wrap items-center gap-2 bg-emerald-50/90 border border-emerald-200 text-emerald-950 px-4 py-3 rounded-2xl text-xs md:text-sm font-semibold mb-10 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Tác giả: <strong>Kỹ Sư Lưu Trọng Tâm</strong> | Kiểm duyệt kỹ thuật: <strong>Chuyên gia Mr. Giang</strong> | Tiêu chuẩn: <strong>ISO 9001 / ASTM D3359 5B / RoHS</strong>
            </span>
          </div>

          {hasDedicatedMedia && (
            <div className="w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden mb-12 shadow-xl relative flex items-center justify-center border border-slate-200">
              {metadata.mediaExt === 'mp4' && metadata.slug !== 'giai-phap-in-truc-tiep-len-vo-trung-ga-muc-he01' && metadata.slug !== 'muc-in-day-cap-trang-linx-videojet' ? (
                <video src={`/media/blog/${metadata.slug}.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full relative">
                  <img 
                    src={metadata.image || `/media/blog/${metadata.slug}.${metadata.mediaExt}`} 
                    alt={metadata.title} 
                    className="w-full h-full object-cover opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              )}
            </div>
          )}
        </div>

        {/* MAIN ARTICLE CONTENT */}
        <div className="prose prose-lg max-w-none text-slate-700 mb-12 leading-relaxed">
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            <p>Nội dung chi tiết đang được cập nhật. Vui lòng liên hệ với Xưởng In VNPIS để được tư vấn trực tiếp về giải pháp này.</p>
          )}
        </div>

        {/* MID/END ARTICLE CTA BANNER FOR HOTLINE 0901 836 344 / ZALO / WHATSAPP */}
        <ArticleContactCTA title={metadata.title} slug={metadata.slug} />

        <div className="mt-12 bg-blue-50/90 border border-blue-200 rounded-3xl p-8 mb-16 shadow-sm">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-4 mt-0">Tại sao chọn dịch vụ gia công in ấn VNPIS?</h3>
          <ul className="space-y-3 mb-0 list-none pl-0">
            <li className="flex items-center text-slate-700 text-sm md:text-base font-semibold"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Gia công in Tampon, in Lụa, in KTS dữ liệu biến đổi VDP sắc nét, bám dính pass test 3M 5B.</li>
            <li className="flex items-center text-slate-700 text-sm md:text-base font-semibold"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Cung cấp đầy đủ vật tư mực in Marabu/Afford/RUCO đạt chuẩn RoHS, đầu silicon, bản thép cliché chính hãng.</li>
            <li className="flex items-center text-slate-700 text-sm md:text-base font-semibold"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Kỹ thuật hỗ trợ in mẫu thử (sample test) miễn phí 24h trước khi chốt đơn hàng.</li>
            <li className="flex items-center text-slate-700 text-sm md:text-base font-semibold"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Xưởng in tại TP.HCM công suất 100.000+ sản phẩm/ngày, giao hàng toàn Việt Nam, Lào &amp; Campuchia.</li>
          </ul>
        </div>

        {/* RELATED ARTICLES - TOPIC CLUSTER INTERNAL LINKING */}
        {relatedArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3 border-b border-slate-200 gap-2">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                  Kiến Thức Cùng Chuyên Đề
                </span>
                <h3 className="text-2xl font-black text-slate-900 m-0">
                  Bài Viết Kỹ Thuật Liên Quan
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0"
              >
                Xem tất cả 300+ bài viết <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel: any) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold px-3 py-1 rounded-lg bg-blue-50 text-blue-700 mb-3 uppercase tracking-wider">
                      {rel.category || 'KIẾN THỨC IN ẤN'}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2 m-0">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed m-0">
                      {rel.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>Đọc chi tiết giải pháp</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <hr className="border-slate-200 mb-16" />
        
        <div className="max-w-4xl mx-auto">
          <ConsultationForm
            title="Nhận Báo Giá In Gia Công &amp; In Mẫu Thử Miễn Phí"
            subtitle="Đội ngũ kỹ sư Công ty TNHH VNPIS sẽ tiếp nhận sản phẩm, in mẫu thử và báo giá tốt nhất cho anh/chị."
            pageTitle={`${contentType === 'articles' ? 'Blog' : 'Pillar'}: ${metadata.title}`}
          />
        </div>
      </article>

      {/* SCHEMA MARKUP: TechArticle + BreadcrumbList + Dynamic FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": graphItems
          })
        }}
      />
    </main>
  );
}
