export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, ShieldCheck, Printer, Tag, ArrowRight, Layers, Cpu, Droplet, FolderArchive } from 'lucide-react';
import BlogList from '@/components/BlogList';
import { getAllDocumentsMeta } from '@/lib/mdx';

export const metadata = {
  title: 'Kiến Thức Kỹ Thuật In Ấn Gia Công, In Tampon, In Lụa & Bao Bì',
  description: 'Tổng hợp kiến thức kỹ thuật & báo giá in ấn gia công, gia công in tampon, in lụa, in bao bì hộp giấy, túi giấy, tem nhãn decal & vật tư in công nghiệp tại TP.HCM. Công ty TNHH VNPIS.',
  alternates: {
    canonical: 'https://www.inanvnpis.com/blog',
  },
  openGraph: {
    title: 'Kiến Thức Kỹ Thuật In Ấn Gia Công, In Tampon, In Lụa & Bao Bì | VNPIS',
    description: 'Tổng hợp kiến thức kỹ thuật & báo giá in ấn gia công, gia công in tampon, in lụa, in bao bì hộp giấy, túi giấy, tem nhãn decal & vật tư in công nghiệp tại TP.HCM.',
    url: 'https://www.inanvnpis.com/blog',
    type: 'website',
  },
};

export default function BlogIndex() {
  const blogData = getAllDocumentsMeta('articles');

  const categories = [
    {
      name: 'Gia Công In Tampon & Vật Tư Pad Printing',
      icon: Printer,
      color: 'blue',
      desc: 'Kỹ thuật in tampon linh kiện nhựa, tô chén ly, nắp chai, đầu silicon, bản thép cliché và mực in tampon chuyên dụng.',
    },
    {
      name: 'Gia Công In Lụa Chai Lọ & Công Nghiệp',
      icon: Layers,
      color: 'emerald',
      desc: 'Quy trình in lụa phẳng, in lụa tròn 360 độ chai lọ mỹ phẩm, bao bì hộp giấy, khung lụa nhôm và dao gạt PU.',
    },
    {
      name: 'In Kỹ Thuật Số, Mã QR Biến Đổi & UV Single Pass',
      icon: Cpu,
      color: 'purple',
      desc: 'Công nghệ in QR Code dữ liệu biến đổi VDP chống giả, số nhảy serial, máy in UV Single Pass và tích hợp Camera Vision QC.',
    },
    {
      name: 'Giải Pháp Mực In Date TIJ, CIJ & Bám Dính Nhựa Khó',
      icon: Droplet,
      color: 'amber',
      desc: 'Các dòng mực in bám dính siêu cường trên nhựa PP, PE, HDPE, kim loại, thủy tinh, màng BOPP và đạt chuẩn RoHS / ZDHC Level 3.',
    },
    {
      name: 'In Bao Bì, Tem Nhãn Decal & Gia Công Sau In B2B',
      icon: FolderArchive,
      color: 'cyan',
      desc: 'Giải pháp in bao bì hộp giấy, túi giấy, tem nhãn decal cuộn và gia công sau in ép kim nhũ vàng, phủ bóng UV định hình.',
    },
  ];
  
  return (
    <main className="min-h-screen pt-28 pb-20 bg-slate-50 font-sans">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-bold border border-blue-500/30 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-400" /> Thư Viện Kiến Thức Kỹ Thuật In Ấn &amp; Vật Tư VNPIS
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Kinh Nghiệm &amp; Báo Giá <span className="text-blue-400">In Tampon Giá Rẻ</span>, <span className="text-emerald-400">In Lụa Giá Rẻ</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cập nhật bài viết chuyên sâu về kỹ thuật gia công in tampon, in lụa bao bì, in QR code và hướng dẫn lựa chọn <strong>vật tư in tampon</strong> (đầu silicon, bản thép cliché) &amp; <strong>vật tư in lụa</strong> (khung lụa, dao gạt, mực in) chất lượng cao.
          </p>

          {/* Quick Keywords Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-semibold text-slate-300">
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl text-blue-300">#In Tampon Giá Rẻ</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl text-emerald-300">#In Lụa Giá Rẻ</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl text-orange-300">#Vật Tư In Tampon</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl text-teal-300">#Vật Tư In Lụa</span>
            <span className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-xl text-purple-300">#In QR Code Biến Đổi</span>
          </div>
        </div>
      </section>

      {/* Main Content with Interactive Search & Pagination */}
      <div className="container mx-auto px-4 max-w-7xl">
        <BlogList initialData={blogData} />
      </div>

      {/* Complete Indexable Topic Clusters Directory (Ensures 100% Crawl & Indexing of 300+ Articles) */}
      <section className="container mx-auto px-4 max-w-7xl mt-20 pt-16 border-t-2 border-slate-200">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" /> Topic Clusters &amp; Sơ Đồ Kiến Thức
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
            Mục Lục Toàn Bộ 300+ Bài Viết Kỹ Thuật In Ấn Gia Công VNPIS
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Hệ thống chuyên đề kỹ thuật in công nghiệp chuẩn hóa quốc tế ISO 9001, ASTM D3359 và RoHS được phân loại theo từng nhóm công nghệ cốt lõi.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const articlesInCat = blogData.filter((a: any) => (a.category || '').toLowerCase() === cat.name.toLowerCase());
            if (articlesInCat.length === 0) return null;

            return (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-slate-100 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 m-0">
                        {cat.name} ({articlesInCat.length} chuyên đề)
                      </h3>
                      <p className="text-xs text-slate-500 m-0 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {articlesInCat.map((item: any) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group p-3 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-200 transition-all flex items-start gap-2 text-xs font-semibold text-slate-700 hover:text-blue-700"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="line-clamp-2 leading-relaxed">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
