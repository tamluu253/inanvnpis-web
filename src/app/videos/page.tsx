export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PlayCircle, Phone, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Video Thực Tế Xưởng In Ấn Gia Công Tampon, In Lụa & Máy In Công Nghiệp',
  description:
    'Xem trực tiếp video vận hành thực tế tại xưởng in ấn gia công VNPIS: Máy in Tampon 4 màu tự động, máy in lụa hộp rượu/bao bì hộp giấy, máy in nắp chai tự động, in lụa phẳng CNC và test độ bền mực CIJ.',
  keywords: [
    'video xưởng in ấn gia công VNPIS',
    'video máy in tampon 4 màu',
    'video gia công in lụa',
    'video in bao bì hộp giấy',
    'in ấn gia công',
  ],
  alternates: {
    canonical: '/videos',
  },
  openGraph: {
    title: 'Video Thực Tế Xưởng In Ấn Gia Công Tampon, In Lụa & Máy In | VNPIS',
    description:
      'Thư viện video thực tế các dây chuyền gia công in Tampon, in Lụa, in bao bì hộp giấy và kiểm nghiệm độ bám dính mực in tại xưởng VNPIS.',
    url: 'https://www.inanvnpis.com/videos',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
};

const factoryVideos = [
  {
    id: 'hj-4color',
    category: 'Gia Công In Tampon Tự Động',
    title: 'Vận Hành Máy In Tampon 4 Màu Cốc Mực Kín Kết Hợp Băng Tải Tự Động',
    description:
      'Dây chuyền gia công in tampon 4 màu chồng màu chính xác ±0.05mm trên linh kiện nhựa và đồ gia dụng tại xưởng in ấn gia công VNPIS.',
    videoUrl: '/media/machines/hj-4color.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/images/pad-printing-cups.jpg',
    uploadDate: '2026-01-15T08:00:00+07:00',
  },
  {
    id: 'sj-ss250-3-wine-box',
    category: 'In Lụa Bao Bì & Gia Công Sau In',
    title: 'Gia Công In Lụa & Phủ UV Định Hình Trên Bao Bì Hộp Rượu / Hộp Giấy Cao Cấp',
    description:
      'Quá trình kéo lụa nhũ kim và phủ UV cục bộ sắc nét trên vỏ hộp rượu và bao bì hộp giấy cao cấp bằng máy in lụa bán tự động tại xưởng VNPIS.',
    videoUrl: '/media/machines/sj/sj-ss250-3-wine-box.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/images/screen-printing-bags.jpg',
    uploadDate: '2026-01-20T08:00:00+07:00',
  },
  {
    id: 'sj-s400t-cap',
    category: 'In Nắp Chai Tự Động',
    title: 'Hệ Thống Máy In Tự Động Tốc Độ Cao Lên Nắp Chai Nhựa HDPE / PP',
    description:
      'Dây chuyền cấp phôi tự động, xử lý bề mặt Flame/Corona và in logo sắc nét lên nắp chai nhựa công suất hàng chục ngàn sản phẩm mỗi ngày.',
    videoUrl: '/media/machines/sj/sj-s400t-cap.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/media/blog/muc-in-nhua-pp-pe-abs-hdpe.jpg',
    uploadDate: '2026-02-01T08:00:00+07:00',
  },
  {
    id: 'sj-sls400-2h-panel',
    category: 'Gia Công In Lụa Phẳng CNC',
    title: 'Gia Công In Lụa Phẳng Độ Chính Xác Cao Lên Tấm Panel Điện Tử & Mặt Máy',
    description:
      'Vận hành máy in lụa phẳng bàn hút chân không in thông số kỹ thuật và ký hiệu lên mặt kính, tấm nhựa Acrylic/ABS và mặt máy kim loại.',
    videoUrl: '/media/machines/sj/sj-sls400-2h-panel.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/media/blog/muc-in-nhua-abs.jpg',
    uploadDate: '2026-02-10T08:00:00+07:00',
  },
  {
    id: 'sanjin-150x400-pen',
    category: 'In Lụa Tròn Quà Tặng & Mỹ Phẩm',
    title: 'Gia Công In Lụa Tròn Tự Động Trên Thân Bút Bi, Ống Son & Chai Lọ Nhỏ',
    description:
      'Hệ thống in lụa xoay tròn tốc độ cao chuyên dụng cho thân bút quà tặng doanh nghiệp, vỏ ống son mỹ phẩm, ống nghiệm y tế và lọ serum.',
    videoUrl: '/media/machines/sanjin-150x400-pen.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/images/pad-printing-cups.jpg',
    uploadDate: '2026-02-18T08:00:00+07:00',
  },
  {
    id: 'cij-boiling-test',
    category: 'Kiểm Định Độ Bền Mực In (QC Test)',
    title: 'Thử Nghiệm Luộc Sôi Kiểm Tra Độ Bám Dính Của Mực In Date CIJ / Tampon',
    description:
      'Bài test thực tế đun sôi sản phẩm trong nước nhiệt độ 100°C để kiểm chứng khả năng chịu nhiệt thanh trùng và chống bong tróc của hệ mực in VNPIS.',
    videoUrl: '/media/cij-boiling-test.mp4',
    thumbnailUrl: 'https://www.inanvnpis.com/media/blog/muc-in-tij-tieu-chuan-fda.jpg',
    uploadDate: '2026-03-01T08:00:00+07:00',
  },
];

export default function VideosPage() {
  const videoListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: factoryVideos.map((vid, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'VideoObject',
        name: vid.title,
        description: vid.description,
        thumbnailUrl: [vid.thumbnailUrl],
        uploadDate: vid.uploadDate,
        contentUrl: `https://www.inanvnpis.com${vid.videoUrl}`,
        embedUrl: `https://www.inanvnpis.com${vid.videoUrl}`,
        publisher: {
          '@type': 'Organization',
          name: 'Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS',
          url: 'https://www.inanvnpis.com',
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoListSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/20 text-red-300 text-xs sm:text-sm font-bold tracking-widest mb-6 border border-red-500/30 uppercase">
            Thư Viện Video Thực Tế Tại Xưởng VNPIS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Video Vận Hành Máy In &amp; Gia Công <span className="text-red-500">Thực Tế</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Trăm nghe không bằng một thấy&rdquo;. Xem trực tiếp các dây chuyền <strong>gia công in Tampon</strong>, <strong>gia công in Lụa</strong>, <strong>in bao bì hộp giấy</strong> và kiểm định chất lượng mực in hoạt động thực tế tại <strong>xưởng in ấn gia công VNPIS</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0901836344"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-extrabold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-all shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon / KTS): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="inline-flex items-center justify-center px-7 py-4 text-sm font-extrabold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2 text-teal-600" /> Mr. Giang (In Lụa / Bao Bì): 0901 826 344
            </a>
          </div>
        </div>
      </section>

      {/* 2. PLAYABLE VIDEO GALLERY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              6 Video Thực Tế Dây Chuyền Gia Công In Ấn &amp; Kiểm Định Mực In
            </h2>
            <p className="text-slate-600 text-sm">
              Nhấn nút Play trên từng video để xem tốc độ in, độ chính xác của đồ gá Jig và chất lượng sản phẩm thực tế tại xưởng VNPIS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factoryVideos.map((vid) => (
              <article
                key={vid.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="aspect-video bg-slate-950 relative overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={vid.videoUrl} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ phát video.
                  </video>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">
                    {vid.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {vid.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Muốn Xem Video In Thử Trên Chính Sản Phẩm Của Bạn?
              </h2>
              <p className="text-slate-300 text-sm">
                Gửi mẫu phôi về xưởng VNPIS — kỹ sư của chúng tôi sẽ quay video quá trình in test và kiểm tra băng keo 3M gửi trực tiếp qua Zalo cho bạn trong 24h!
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-full text-sm shrink-0 transition-all"
            >
              Đăng Ký In Mẫu Test Miễn Phí <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
