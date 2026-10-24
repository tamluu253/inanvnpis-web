export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata = {
  title: 'Máy Ép Nhũ Nóng, Ép Kim (Hot Stamping) & Gia Công Sau In Bao Bì Hộp Giấy',
  description: 'Giải pháp máy ép nhũ nóng, máy ép kim (Hot Stamping) khí nén & thủy lực chuyên dụng cho gia công sau in, ép nhũ nóng bao bì hộp giấy, nắp chai mỹ phẩm, nhựa và da.',
  keywords: [
    'máy ép nhũ nóng',
    'máy ép kim',
    'gia công sau in',
    'ép nhũ nóng bao bì hộp giấy',
    'máy ép nhũ mỹ phẩm',
    'hot stamping machine',
  ],
  alternates: {
    canonical: '/products/hot-stamping',
  },
  openGraph: {
    title: 'Máy Ép Nhũ Nóng, Ép Kim & Gia Công Sau In Bao Bì Hộp Giấy | VNPIS',
    description: 'Hệ thống máy ép kim, ép nhũ nóng tự động cuộn màng nhũ tạo hiệu ứng ánh kim sang trọng cho bao bì hộp giấy, mỹ phẩm và linh kiện nhựa.',
    url: 'https://www.inanvnpis.com/products/hot-stamping',
    type: 'website',
  },
};

export default function HotStampingPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
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
        name: 'Sản phẩm',
        item: 'https://www.inanvnpis.com/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Máy Ép Nhũ Nóng & Gia Công Sau In',
        item: 'https://www.inanvnpis.com/products/hot-stamping',
      },
    ],
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <Layers className="w-5 h-5" />
            <span>Hot Stamping & Post-Press Finishing System</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Hệ Thống Máy Ép Nhũ Nóng, Ép Kim & Gia Công Sau In
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Giải pháp gia công sau in, ép kim và ép nhũ nóng bao bì hộp giấy, nắp lọ mỹ phẩm, thẻ nhựa, da thuộc. Tạo hiệu ứng ánh kim vàng/bạc sắc nét, nâng tầm giá trị thương hiệu sản phẩm.
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Link href="/products/hot-stamping/sj" className="inline-flex items-center bg-red-600 text-white hover:bg-red-700 font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-red-600/20 transition-all transform hover:-translate-y-1">
              Xem Catalog Máy Ép Nhũ SJ <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Highlights for Gia Công Sau In / Ép Kim */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-red-600 mr-2 shrink-0" />
              Ép Nhũ Nóng Bao Bì Hộp Giấy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gia công sau in chuyên nghiệp cho vỏ hộp quà tặng, bao bì mỹ phẩm, thiệp cưới và nhãn mác cao cấp với độ bám nhũ đồng đều tuyệt đối.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-red-600 mr-2 shrink-0" />
              Ép Kim Phẳng & Lăn Tròn 360°
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Đa dạng dòng máy ép kim phẳng khí nén, thủy lực áp lực lớn và máy ép nhũ lăn tròn viền nắp chai, tuýp kem, vỏ son môi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
              <CheckCircle2 className="w-5 h-5 text-red-600 mr-2 shrink-0" />
              Kiểm Soát Nhiệt & Xả Cuộn Tự Động
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tích hợp bộ điều khiển nhiệt độ PID chính xác từng độ C và motor thu xả màng nhũ tự động giúp tiết kiệm tối đa vật tư nhũ.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <ConsultationForm
            title="Tư Vấn Chọn Máy Ép Nhũ & Gia Công Sau In"
            subtitle="Để lại thông tin về sản phẩm bạn cần ép kim / ép nhũ nóng bao bì hộp giấy hoặc nhựa, kỹ sư VNPIS sẽ tư vấn dòng máy phù hợp nhất."
            pageTitle="Máy Ép Nhũ"
          />
        </div>

      </div>
    </main>
  );
}
