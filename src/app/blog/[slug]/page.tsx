import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getDocumentBySlug } from '@/lib/mdx';
import ConsultationForm from '@/components/ui/ConsultationForm';
import ArticleContactCTA from '@/components/ArticleContactCTA';

// Generate static params for all posts at build time
export function generateStaticParams() {
  const slugs = getAllSlugs('articles');
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('articles', resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.metadata.title} | In Ấn VNPIS`,
    description: post.metadata.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getDocumentBySlug('articles', resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const { metadata, contentHtml } = post;

  return (
    <main className="min-h-screen pt-28 pb-16 bg-slate-50">
      <article className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại thư viện bài viết
        </Link>
        
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
              {metadata.category}
            </span>
            <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-bold border border-slate-300">
              Mã: {metadata.code}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {metadata.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            {metadata.description}
          </p>

          <div className="w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden mb-12 shadow-lg relative flex items-center justify-center border border-slate-200">
            {metadata.mediaExt === 'mp4' && metadata.slug !== 'giai-phap-in-truc-tiep-len-vo-trung-ga-muc-he01' && metadata.slug !== 'muc-in-day-cap-trang-linx-videojet' ? (
              <video src={`/media/blog/${metadata.slug}.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <>
                <img 
                  src={metadata.mediaExt === 'jpg' ? `/media/blog/${metadata.slug}.jpg` : "/images/blog-placeholder.jpg"} 
                  alt={metadata.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" 
                />
                <span className="text-4xl md:text-6xl font-black text-white z-10 drop-shadow-2xl opacity-90">{metadata.code}</span>
              </>
            )}
          </div>
        </div>

        {/* MAIN ARTICLE CONTENT */}
        <div className="prose prose-lg max-w-none text-slate-700 mb-12">
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            <p>Nội dung chi tiết đang được cập nhật. Vui lòng liên hệ với VNPIS để được tư vấn trực tiếp về giải pháp này.</p>
          )}
        </div>

        {/* MID/END ARTICLE CTA BANNER FOR HOTLINE 0901 836 344 / ZALO / WHATSAPP */}
        <ArticleContactCTA title={metadata.title} />

        <div className="mt-12 bg-blue-50/80 border border-blue-200 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Tại sao chọn dịch vụ in gia công VNPIS?</h3>
          <ul className="space-y-3 mb-0 list-none pl-0">
            <li className="flex items-center text-slate-700 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Công nghệ in Tampon, in Lụa, in KTS hiện đại bám dính siêu cường.</li>
            <li className="flex items-center text-slate-700 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Mực in nhập khẩu chính hãng đầy đủ chứng nhận quốc tế (RoHS, FDA, ZDHC).</li>
            <li className="flex items-center text-slate-700 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Đội ngũ kỹ thuật hỗ trợ in test mẫu thử miễn phí trước khi sản xuất.</li>
            <li className="flex items-center text-slate-700 text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" /> Xưởng in tại TP.HCM đáp ứng tiến độ 50.000+ sản phẩm/ngày.</li>
          </ul>
        </div>

        <hr className="border-slate-200 mb-16" />
        
        <div className="max-w-4xl mx-auto">
          <ConsultationForm
            title="Nhận Báo Giá &amp; In Mẫu Thử Miễn Phí"
            subtitle="Yêu cầu kỹ sư VNPIS liên hệ tư vấn và mang mẫu mực đến thử trực tiếp."
            pageTitle={`Blog: ${metadata.title}`}
          />
        </div>
      </article>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": metadata.title,
            "description": metadata.description,
            "image": metadata.mediaExt === 'jpg' ? `https://inanvnpis.com/media/blog/${metadata.slug}.jpg` : "https://inanvnpis.com/images/blog-placeholder.jpg",
            "author": {
              "@type": "Organization",
              "name": "VNPIS Solutions"
            },
            "publisher": {
              "@type": "Organization",
              "name": "VNPIS Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://inanvnpis.com/images/inanvnpis-logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://inanvnpis.com/blog/${metadata.slug}`
            }
          })
        }}
      />
    </main>
  );
}
