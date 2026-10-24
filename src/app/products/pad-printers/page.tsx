export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

const padPrinters = [
  {
    id: 'hj-160byn',
    brand: 'HJ',
    name: 'HP-160AY',
    desc: 'Máy in pad 1 màu với hệ thống vận hành tự động, độ ổn định cao. Phù hợp cho đa dạng nhu cầu in ấn sản phẩm vừa và nhỏ.',
    video: '/media/machines/hp-160byn.mp4',
    features: ['Hệ thống cốc mực kín', 'Hành trình trượt mượt mà', 'Cảm biến an toàn']
  },
  {
    id: 'hj-200ay',
    brand: 'HJ',
    name: 'HP-200AY',
    desc: 'Dòng máy in pad cao cấp HP-200AY, tối ưu cho việc in các logo có kích thước lớn với khay mực mở rộng và lực in mạnh mẽ.',
    video: '/media/machines/hp-200ay.mp4',
    features: ['Lực in mạnh mẽ, đều màu', 'Màn hình điều khiển PLC', 'Tốc độ: 1600 nhịp/giờ']
  },
  {
    id: 'hj-200yx',
    brand: 'HJ',
    name: 'HP-200YX',
    desc: 'Hệ thống in pad chuyên dụng tốc độ cao, hiệu suất vượt trội, tiết kiệm tối đa thời gian và vật tư cho xưởng công nghiệp.',
    video: '/media/machines/hp-200yx.mp4',
    features: ['Cốc mực kín cỡ lớn', 'Linh kiện khí nén chuẩn Âu', 'Hệ thống sấy tích hợp']
  },
  {
    id: 'sj-150x400',
    brand: 'SJ',
    name: 'SJ-150x400 (1 Màu)',
    desc: 'Máy in pad 1 màu khổ 150x400, chuyên in logo lên vật thể cong như bút bi, thân ống. Hoạt động ổn định, độ nét cao.',
    video: '/media/machines/sanjin-150x400-pen.mp4',
    features: ['Cốc mực kín 90mm', 'Tốc độ: 1200 nhịp/giờ', 'Bàn làm việc X-Y-R']
  }
];

export const metadata = {
  title: 'Máy In Tampon (Pad Printer) Công Nghiệp Chính Hãng HJ, SJ, MC',
  description: 'Tổng hợp các model máy in Tampon (in Pad) công nghiệp 1 màu, 2 màu, 4 màu, 6 màu tự động từ các thương hiệu uy tín: HJ, Sanjin (SJ), Meichao (MC).',
  alternates: {
    canonical: '/products/pad-printers',
  },
  openGraph: {
    title: 'Máy In Tampon (Pad Printer) Công Nghiệp Chính Hãng HJ, SJ, MC | VNPIS',
    description: 'Giải pháp máy in pad công nghiệp cốc mực kín, bàn trượt Shuttle, mâm xoay Turntable tự động.',
    url: 'https://www.inanvnpis.com/products/pad-printers',
    type: 'website',
  },
};

export default function PadPrintersPage() {
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
        name: 'Máy In Tampon (Pad Printer)',
        item: 'https://www.inanvnpis.com/products/pad-printers',
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
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <Settings className="w-5 h-5" />
            <span>Tampography System</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Hệ Thống Máy In Pad (In Tampon) Công Nghiệp</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Giải pháp in ấn hoàn hảo trên các bề mặt cong, lồi lõm hoặc không bằng phẳng. Phân phối chính hãng các dòng máy in Pad từ các thương hiệu: HJ, Sanjin (SJ) và Meichao (MC).
          </p>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            <Link href="/products/pad-printers/hj" className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1">
              Catalog HJ (21 Models) <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/products/pad-printers/sj" className="inline-flex items-center bg-emerald-600 text-white hover:bg-emerald-700 font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-1">
              Catalog SJ (56 Models) <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/products/pad-printers/mc" className="inline-flex items-center bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-indigo-600/20 transition-all transform hover:-translate-y-1">
              Catalog Meichao MC (12 Models) <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {padPrinters.map((machine) => (
            <div key={machine.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group">
              <div className="relative aspect-video bg-slate-100">
                {machine.video ? (
                  <video src={machine.video} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-semibold text-xl">
                    {machine.name}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-slate-800 shadow-sm">
                  {machine.brand}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{machine.name}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{machine.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="#contact-form" className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors">
                  Yêu Cầu Báo Giá <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div id="contact-form" className="max-w-4xl mx-auto">
          <ConsultationForm
            title="Tư Vấn Chọn Máy In Pad"
            subtitle="Để lại thông tin về sản phẩm bạn cần in, chúng tôi sẽ tư vấn dòng máy có kích thước và số màu phù hợp nhất."
            pageTitle="Máy In Pad"
          />
        </div>

      </div>
    </main>
  );
}
