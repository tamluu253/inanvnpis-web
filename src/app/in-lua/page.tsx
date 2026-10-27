export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Phone,
  Package,
  PlayCircle,
  ChevronDown,
} from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata: Metadata = {
  title: 'Gia Công In Lụa Tròn 360 Độ, In Lụa Phẳng, Bao Bì Hộp Giấy & Sau In TP.HCM',
  description:
    'Xưởng in lụa gia công VNPIS chuyên gia công in lụa TPHCM Bình Dương: in lụa chai lọ mỹ phẩm, in lụa chai thủy tinh, in lụa tròn 360 độ, in lụa trên nhựa kim loại inox, in lụa bao bì hộp giấy túi giấy & ép kim phủ UV. Hotline: 0901 826 344.',
  keywords: [
    'in lụa gia công',
    'gia công in lụa',
    'gia công in lụa tphcm bình dương',
    'in lụa chai lọ mỹ phẩm',
    'in lụa chai thủy tinh',
    'in lụa tròn 360 độ',
    'in lụa trên nhựa kim loại inox',
    'in lụa bao bì hộp giấy túi giấy',
    'industrial screen printing Vietnam Cambodia Laos',
    'phủ uv định hình',
    'ép kim ép nhũ nóng',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: 'https://www.inanvnpis.com/in-lua',
  },
  openGraph: {
    title: 'Gia Công In Lụa Tròn 360 Độ, In Lụa Phẳng, Bao Bì Hộp Giấy & Gia Công Sau In | VNPIS',
    description:
      'Chuyên nhận in lụa gia công tròn 360 độ chai lọ mỹ phẩm, chai thủy tinh, in lụa trên nhựa kim loại inox, bao bì hộp giấy, túi giấy và gia công sau in (phủ UV cục bộ, ép kim) tại TP.HCM & Bình Dương.',
    url: 'https://www.inanvnpis.com/in-lua',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    images: [
      {
        url: '/images/screen-printing-bags.jpg',
        width: 1200,
        height: 630,
        alt: 'Dịch vụ gia công in lụa tròn phẳng bao bì hộp giấy túi giấy tại VNPIS',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gia Công In Lụa Tròn 360 Độ, In Lụa Phẳng, Bao Bì Hộp Giấy & Gia Công Sau In',
    description:
      'Xưởng in ấn gia công VNPIS chuyên in lụa chai lọ mỹ phẩm, chai thủy tinh, mặt máy CNC, bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in.',
    images: ['/images/screen-printing-bags.jpg'],
  },
};

const screenPrintFaqs = [
  {
    question: 'Gia công in lụa tại xưởng VNPIS có những ưu điểm gì so với các phương pháp in khác?',
    answer:
      'Dịch vụ in lụa gia công (Screen Printing) tại xưởng VNPIS tạo ra lớp mực có độ dày vượt trội từ 20 đến 100 micron (gấp 5–10 lần in phun hoặc in offset), mang lại độ che phủ tuyệt đối ngay cả trên nền sản phẩm tối màu (đen, xanh đậm, thủy tinh mờ) với độ lệch màu ΔE < 1.5. Lớp mực dày giúp màu sắc tươi sáng, nổi khối 3D nhẹ khi chạm tay và chống mài mòn cơ học, kháng hóa chất, kháng tia UV ngoài trời cực tốt.',
  },
  {
    question: 'Xưởng VNPIS nhận in lụa tròn 360 độ trên những loại chai lọ và sản phẩm nào?',
    answer:
      'Với hệ thống máy in lụa tròn tự động và bán tự động tích hợp cảm biến quang học định vị điểm G (Registration Sensor), VNPIS nhận gia công in lụa tròn 360 độ từ 1 đến 4 màu trên: in lụa chai lọ mỹ phẩm (lọ serum, tuýp kem mềm, hũ kem acrylic), in lụa chai thủy tinh (chai nước hoa, lọ tinh dầu), bình giữ nhiệt inox, ly nhựa trà sữa PP/PET, ly thủy tinh, thùng sơn và ống nhựa công nghiệp.',
  },
  {
    question: 'Dịch vụ in lụa trên nhựa kim loại inox và in lụa bao bì hộp giấy túi giấy tại VNPIS bao gồm những gì?',
    answer:
      'Xưởng in ấn gia công VNPIS chuyên nhận in lụa trên nhựa kim loại inox (mặt máy CNC, vỏ tủ điện sơn tĩnh điện, tấm nhôm anodized, kính cường lực, bảng mica) bằng hệ mực 2 thành phần kháng dung môi; đồng thời cung cấp trọn gói dịch vụ in lụa bao bì hộp giấy túi giấy (hộp mỹ phẩm, hộp rượu cao cấp, giấy mỹ thuật đen, túi giấy Kraft/Couche/Ivory) và in tem nhãn decal cuộn/tờ.',
  },
  {
    question: 'Gia công sau in (Phủ UV cục bộ, Ép kim, Ép nhũ nóng) được thực hiện như thế nào?',
    answer:
      'Gia công sau in (Post-press Finishing) tại VNPIS sử dụng máy kéo lụa UV tự động và máy ép nhũ nhiệt cao tần để tạo hiệu ứng sang trọng cho bao bì hộp giấy, túi giấy, tem nhãn decal và chai lọ: Phủ UV định hình (Spot UV bóng gương, UV cát nhám, UV nổi 3D), ép kim logo (vàng, bạc, đồng, hologram), ép nhũ nóng (Hot Stamping) lên viền nắp mỹ phẩm/hộp rượu, và in nhũ cào bảo mật (Scratch-off) cho thẻ cào/tem chống giả.',
  },
  {
    question: 'Thời gian làm khuôn lụa, test mẫu và giao hàng tại TPHCM, Bình Dương, Lào & Campuchia là bao lâu?',
    answer:
      'Xưởng VNPIS trang bị phòng chụp bản lụa căng lưới tiêu chuẩn Thụy Sĩ (từ 120T đến 420T) ngay tại xưởng, giúp hoàn thành khuôn lụa và in mẫu test miễn phí chỉ trong 24h. Thời gian sản xuất hàng loạt từ 2 – 5 ngày làm việc (công suất 30.000 – 50.000 sp/ngày), giao tận nơi tại TP.HCM, Bình Dương, Đồng Nai và hỗ trợ xuất khẩu sang Phnom Penh, Bavet (Campuchia), Vientiane, Savannakhet (Lào).',
  },
];

export default function InLuaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dịch Vụ Gia Công In Lụa Tròn 360 Độ, In Lụa Phẳng, In Bao Bì Hộp Giấy & Gia Công Sau In',
    serviceType: 'Gia Công In Lụa & Gia Công Sau In Bao Bì (Industrial Screen Printing)',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.inanvnpis.com/#organization',
      name: 'Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS',
      url: 'https://www.inanvnpis.com',
      telephone: '+84901826344',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '18 Đường số 4, KDC Đại Phúc Green Villas, Bình Hưng',
        addressLocality: 'TP. Hồ Chí Minh',
        addressCountry: 'VN',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Vietnam' },
      { '@type': 'Country', name: 'Cambodia' },
      { '@type': 'Country', name: 'Laos' },
    ],
    description:
      'Chuyên nhận in lụa gia công TPHCM Bình Dương: in lụa tròn 360 độ chai lọ mỹ phẩm, in lụa chai thủy tinh, in lụa trên nhựa kim loại inox, in lụa bao bì hộp giấy túi giấy và gia công sau in (phủ UV định hình, ép kim, ép nhũ nóng).',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: '200',
      highPrice: '1500',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: screenPrintFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang Chủ',
        item: 'https://www.inanvnpis.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gia Công In Lụa & Bao Bì Sau In',
        item: 'https://www.inanvnpis.com/in-lua',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb UI */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-teal-600 font-medium">
            Trang Chủ
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">
            Gia Công In Lụa, Bao Bì &amp; Gia Công Sau In
          </span>
        </nav>

        {/* 1. HEADER / HERO */}
        <div className="text-center mb-10">
          <span className="inline-block py-2 px-4 rounded-full bg-teal-100/80 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            Gia Công In Lụa TPHCM &amp; Bình Dương — Industrial Screen Printing Vietnam Cambodia Laos
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Gia Công In Lụa Tròn 360°, In Lụa Phẳng &amp; Bao Bì Sau In
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Xưởng <strong>in lụa gia công</strong> VNPIS chuyên nhận <strong>in lụa tròn 360 độ</strong> (<strong>in lụa chai lọ mỹ phẩm</strong>, <strong>in lụa chai thủy tinh</strong>, bình giữ nhiệt, ly nhựa), <strong>in lụa trên nhựa kim loại inox</strong> (mặt máy CNC, vỏ thiết bị), kết hợp <strong>in lụa bao bì hộp giấy túi giấy</strong>, tem nhãn decal và <strong>gia công sau in</strong> (phủ UV cục bộ, ép kim, ép nhũ nóng Hot Stamping) tại TP.HCM, Bình Dương và toàn Đông Dương.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0901826344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-2xl shadow-lg shadow-teal-600/25 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa / Bao Bì): 0901 826 344
            </a>
            <a
              href="tel:0901836344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon): 0901 836 344
            </a>
          </div>
        </div>

        {/* DIRECT ANSWER (TL;DR) CALLOUT BOX FOR AI SEARCH & B2B ENGINEERS */}
        <div className="bg-teal-50/90 border-2 border-teal-200 rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-teal-900 font-extrabold text-sm uppercase tracking-wider mb-3">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <span>Tóm Tắt Kỹ Thuật Nhanh (Direct Answer — Gia Công In Lụa VNPIS)</span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
            <strong>Dịch vụ in lụa gia công (Screen Printing) tại Xưởng VNPIS</strong> vận hành dây chuyền máy in lụa tròn xoay 360° định vị cảm biến quang học và máy in lụa phẳng kết hợp băng tải sấy UV LED, tạo màng mực dày <strong>20 – 100 µm</strong> che phủ 100% nền tối màu với độ chuẩn màu <strong>ΔE &lt; 1.5</strong>. Chuyên nhận: <strong>in lụa chai lọ mỹ phẩm</strong>, <strong>in lụa chai thủy tinh</strong>, <strong>in lụa tròn 360 độ</strong> (Ø10–250mm), <strong>in lụa trên nhựa kim loại inox</strong>, và <strong>in lụa bao bì hộp giấy túi giấy</strong> kèm ép kim, phủ UV định hình. Đơn giá từ <strong>200đ – 800đ/sp</strong>, miễn phí test mẫu 24h.
          </p>
          <div className="text-xs font-bold text-slate-500">
            Tiêu chuẩn kiểm định: Chuyên gia Mr. Giang &amp; Kỹ Sư Lưu Trọng Tâm | ISO 9001 • ASTM D3359 5B • Lưới Thụy Sĩ 120T–420T
          </div>
        </div>

        {/* Illustrative Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
          <img
            src="/images/screen-printing-bags.jpg"
            alt="Dịch vụ gia công in lụa túi giấy bao bì hộp giấy chai lọ tại xưởng VNPIS"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 2. 3 MẢNG DỊCH VỤ CHỦ LỰC TRONG GIA CÔNG IN LỤA & BAO BÌ (H2 -> H3) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              3 Giải Pháp Gia Công In Lụa &amp; Hoàn Thiện Bao Bì Chủ Lực
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Với hệ thống <Link href="/products/screen-printers" className="text-teal-600 font-semibold hover:underline">máy in lụa tự động &amp; bán tự động</Link> cùng hệ thống sấy UV băng tải công nghiệp, xưởng in ấn gia công VNPIS đáp ứng trọn gói 3 mảng dịch vụ chuyên sâu:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In Lụa Tròn 360 Độ (Chai Lọ Mỹ Phẩm &amp; Thủy Tinh)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Chuyên <strong>in lụa tròn 360 độ</strong> trực tiếp lên các sản phẩm hình trụ tròn, hình côn: <strong>in lụa chai lọ mỹ phẩm</strong>, <strong>in lụa chai thủy tinh</strong>, hũ kem, tuýp sữa rửa mặt, chai nước hoa, bình giữ nhiệt inox, ly nhựa PP/PET và thùng sơn công nghiệp. Định vị chồng nhiều màu chính xác bằng cảm biến quang.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In Lụa Trên Nhựa Kim Loại Inox Phẳng
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Nhận <strong>in lụa trên nhựa kim loại inox</strong> với độ bám dính 5B: in thông số kỹ thuật, sơ đồ mạch, logo thương hiệu lên mặt máy CNC kim loại, vỏ tủ điện sơn tĩnh điện, tấm nhựa Acrylic/Mica, kính cường lực mặt bếp từ, phím màng (Membrane Switch), vải không dệt và màng nhựa PE/PP.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In Lụa Bao Bì Hộp Giấy Túi Giấy &amp; Gia Công Sau In
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Nhận <strong>in lụa bao bì hộp giấy túi giấy</strong>, <strong>in tem nhãn decal</strong> và thực hiện các công đoạn <strong>gia công sau in</strong> cao cấp: kéo lụa <strong>phủ UV định hình (Spot UV)</strong>, UV cát, UV nổi, <strong>ép kim</strong>, <strong>ép nhũ nóng (Hot Stamping)</strong> và kéo nhũ cào thẻ cào bảo mật.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CHUYÊN SÂU: IN BAO BÌ HỘP GIẤY, TÚI GIẤY, TEM NHÃN DECAL & GIA CÔNG SAU IN */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-7 h-7 text-teal-600" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Giải Pháp In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal &amp; Gia Công Sau In
            </h2>
          </div>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Trong ngành mỹ phẩm, dược phẩm, rượu vang, thực phẩm chức năng và quà tặng doanh nghiệp, bao bì chính là yếu tố quyết định giá trị cảm nhận của khách hàng. <strong>Xưởng in ấn gia công VNPIS</strong> cung cấp dịch vụ hoàn thiện bao bì và <strong>gia công sau in</strong> chuẩn xuất khẩu:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. In Bao Bì Hộp Giấy &amp; Hộp Cứng Cao Cấp
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhận gia công <strong>in bao bì hộp giấy</strong> trên chất liệu giấy Ivory, Bristol, Duplex, giấy mỹ thuật đen/nhũ và hộp cứng bồi Carton lạnh (hộp rượu, hộp yến sào, hộp quà Tết, hộp mỹ phẩm). Lớp mực in lụa trắng/vàng kim/bạc có độ phủ cực dày trên nền giấy mỹ thuật tối màu mà in Offset thông thường không thể lên màu chuẩn.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. In Túi Giấy Thương Hiệu &amp; Túi Nilon Bao Bì
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dịch vụ <strong>in túi giấy</strong> Kraft nâu/trắng, túi giấy Couche/Ivory cán màng mờ, túi vải không dệt và túi nilon PE/HDPE/PP cho chuỗi cửa hàng, ngân hàng, hội nghị B2B. Nhận cả đơn hàng số lượng vừa (từ 500 túi) đến hàng chục ngàn túi với tiến độ lấy nhanh.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. In Tem Nhãn Decal Công Nghiệp &amp; Tem Bảo Hành
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chuyên <strong>in tem nhãn decal</strong> độ bền cao: decal nhựa sữa PVC chịu nước/đông lạnh, decal trong suốt dán chai lọ, decal xi bạc/nhôm dán thông số máy móc cơ khí, tem vỡ bảo hành điện tử và tem nhãn hóa chất chịu dung môi/dầu nhớt.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                4. Gia Công Sau In: Phủ UV Cục Bộ, Ép Kim &amp; Ép Nhũ Nóng
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tăng hiệu ứng thị giác cao cấp với dịch vụ <strong>gia công sau in</strong>: kéo lụa <strong>phủ UV cục bộ (Spot UV)</strong> làm bóng nổi logo, hiệu ứng UV cát/UV kim tuyến, <strong>ép kim – ép nhũ nóng (Hot Stamping)</strong> ánh vàng/bạc/hologram sắc sảo trên nắp chai, hộp giấy và bìa ấn phẩm.
              </p>
            </div>
          </div>
        </section>

        {/* 4. REAL FACTORY VIDEO SECTION */}
        <section className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">
                <PlayCircle className="w-4 h-4" /> Video Thực Tế Tại Xưởng VNPIS
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                Gia Công In Lụa Trên Bao Bì Hộp Quà &amp; Hộp Rượu Cao Cấp
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Trực tiếp quan sát máy in lụa chuyên dụng vận hành in logo nhũ kim và phủ UV định hình trên vỏ hộp rượu cao cấp tại xưởng VNPIS. Dao gạt mực áp lực khí nén ổn định giúp lớp mực phẳng mịn, sắc nét đến từng chi tiết chữ nhỏ nhất.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Độ dày lớp mực 30 – 80 micron che phủ hoàn hảo trên nền hộp tối màu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Kết hợp băng tải sấy UV LED giúp mực đóng rắn tức thì trong 0.5 giây</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Không làm cong vênh giấy, không lem nhòe khi đóng gói</span>
                </li>
              </ul>
              <Link
                href="/videos"
                className="inline-flex items-center text-xs font-bold text-teal-400 hover:text-teal-300"
              >
                Xem thêm các Video Demo in lụa tròn &amp; phẳng tại xưởng <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster="/images/screen-printing-bags.jpg"
                >
                  <source src="/media/machines/sj/sj-ss250-3-wine-box.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ phát video.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THÔNG SỐ KỸ THUẬT GIA CÔNG IN LỤA & GIA CÔNG SAU IN */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Thông Số Kỹ Thuật Gia Công In Lụa &amp; Gia Công Sau In Tại VNPIS
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Bảng tiêu chuẩn kỹ thuật áp dụng tại xưởng in lụa TPHCM &amp; Bình Dương của VNPIS:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 rounded-tl-xl">Thông Số Kỹ Thuật</th>
                  <th className="p-4">Năng Lực Xưởng In Ấn Gia Công VNPIS</th>
                  <th className="p-4 rounded-tr-xl">Ứng Dụng Thực Tế</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Đường kính sản phẩm in lụa tròn 360 độ</td>
                  <td className="p-4">Ø10 mm – Ø250 mm (Góc xoay 360°)</td>
                  <td className="p-4">In lụa chai lọ mỹ phẩm, in lụa chai thủy tinh, bình giữ nhiệt, thùng sơn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Khổ in lụa phẳng tối đa</td>
                  <td className="p-4">600 x 900 mm / 800 x 1200 mm</td>
                  <td className="p-4">In lụa trên nhựa kim loại inox, mặt kính, bảng mica, bao bì hộp giấy</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Mật độ mắt lưới (Mesh Count)</td>
                  <td className="p-4">100T – 420T (Lưới Polyester Thụy Sĩ &amp; Lưới Inox)</td>
                  <td className="p-4">Đảm bảo chữ nhỏ 0.15mm sắc nét, lớp mực đều</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ dày màng mực (Ink Film Thickness)</td>
                  <td className="p-4 font-semibold text-teal-700">20 µm – 100 µm (ΔE &lt; 1.5)</td>
                  <td className="p-4">Độ che phủ 100%, tạo hiệu ứng chữ nổi 3D cao cấp</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Hệ mực &amp; Hóa chất sau in</td>
                  <td className="p-4">Mực UV LED, Mực dung môi 2 thành phần, Vecni UV cục bộ</td>
                  <td className="p-4">Chứng nhận RoHS/REACH, bám dính chuẩn 3M 5B</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Công nghệ Gia Công Sau In</td>
                  <td className="p-4">Phủ UV định hình, UV cát, Ép kim, Ép nhũ nóng, Nhũ cào</td>
                  <td className="p-4">In lụa bao bì hộp giấy túi giấy, tem nhãn decal, nắp mỹ phẩm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold">
            <Link
              href="/products/screen-printers"
              className="text-teal-600 hover:text-teal-800 inline-flex items-center"
            >
              Xem danh mục Máy In Lụa Tròn &amp; Phẳng tại VNPIS <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <Link
              href="/products/consumables"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Xem danh mục Mực In Lụa, Mực UV &amp; Vật Tư <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </section>

        {/* 6. BẢNG GIÁ THAM KHẢO GIA CÔNG IN LỤA & BAO BÌ SAU IN */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Bảng Giá Gia Công In Lụa, In Bao Bì &amp; Gia Công Sau In Tham Khảo
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Tham khảo khung đơn giá gốc tận xưởng VNPIS tại TP.HCM &amp; Bình Dương (áp dụng năm 2026):
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="p-4 rounded-tl-xl">Hạng Mục Gia Công</th>
                  <th className="p-4">Số Lượng 500 – 3.000 sp</th>
                  <th className="p-4">Số Lượng 3.000 – 10.000 sp</th>
                  <th className="p-4">Số Lượng &gt; 10.000 sp</th>
                  <th className="p-4 rounded-tr-xl">Chính Sách Hỗ Trợ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Lụa Tròn 360 Độ Chai Lọ Mỹ Phẩm / Thủy Tinh / Ly Nhựa (1 màu)
                  </td>
                  <td className="p-4 font-semibold">450đ – 800đ / sp</td>
                  <td className="p-4 font-semibold">300đ – 500đ / sp</td>
                  <td className="p-4 font-bold text-teal-600">200đ – 320đ / sp</td>
                  <td className="p-4 text-xs">Miễn phí khung lụa từ 5.000 sp</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Lụa Trên Nhựa Kim Loại Inox / Mặt Máy CNC Phẳng
                  </td>
                  <td className="p-4 font-semibold">600đ – 1.500đ / sp</td>
                  <td className="p-4 font-semibold">400đ – 900đ / sp</td>
                  <td className="p-4 font-bold text-teal-600">250đ – 550đ / sp</td>
                  <td className="p-4 text-xs">Mực 2 thành phần kháng hóa chất</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Lụa Bao Bì Hộp Giấy Túi Giấy / Túi Nilon
                  </td>
                  <td className="p-4 font-semibold">500đ – 1.800đ / sp</td>
                  <td className="p-4 font-semibold">350đ – 1.100đ / sp</td>
                  <td className="p-4 font-bold text-teal-600">220đ – 750đ / sp</td>
                  <td className="p-4 text-xs">Hỗ trợ thiết kế &amp; bình file in</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    Gia Công Sau In (Phủ UV Định Hình / Ép Kim / Nhũ Cào)
                  </td>
                  <td className="p-4 font-semibold">400đ – 1.200đ / tờ/sp</td>
                  <td className="p-4 font-semibold">280đ – 750đ / tờ/sp</td>
                  <td className="p-4 font-bold text-teal-600">180đ – 450đ / tờ/sp</td>
                  <td className="p-4 text-xs">Test mẫu UV/Ép kim miễn phí</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Câu Hỏi Thường Gặp Về Gia Công In Lụa, Bao Bì &amp; Gia Công Sau In
            </h2>
            <p className="text-slate-600 text-sm">
              Giải đáp chi tiết về kỹ thuật in lụa tròn 360 độ, in lụa phẳng, in bao bì hộp giấy và phủ UV/ép kim tại VNPIS.
            </p>
          </div>
          <div className="space-y-4">
            {screenPrintFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base pr-6">{faq.question}</h3>
                  <span className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-open:bg-teal-600 group-open:text-white transition-colors">
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:-rotate-180" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 8. CTA BANNER */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn Cần Báo Giá Gia Công In Lụa, In Bao Bì Hoặc Gia Công Sau In?
          </h2>
          <p className="text-teal-100 text-base mb-8 max-w-2xl mx-auto">
            Liên hệ ngay xưởng VNPIS để được tư vấn kỹ thuật, làm mẫu thử miễn phí và nhận báo giá chi tiết tận xưởng với chiết khấu cao cho đơn hàng lớn tại Việt Nam, Lào &amp; Campuchia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://zalo.me/0901826344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-white text-teal-700 hover:bg-slate-100 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa): 0901 826 344
            </a>
            <a
              href="https://zalo.me/0901836344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-teal-900 text-white hover:bg-teal-950 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon): 0901 836 344
            </a>
          </div>
        </div>

        {/* 9. CONSULTATION FORM */}
        <ConsultationForm
          title="Nhận Báo Giá Gia Công In Lụa, Bao Bì Hộp Giấy & Gia Công Sau In"
          subtitle="Gửi thông số sản phẩm (chai lọ, hộp giấy, túi giấy, tem nhãn decal hoặc phôi công nghiệp), đội ngũ kỹ thuật VNPIS sẽ phản hồi báo giá trong 15 phút."
          pageTitle="Trang Gia Công In Lụa (/in-lua)"
        />
      </div>
    </div>
  );
}
