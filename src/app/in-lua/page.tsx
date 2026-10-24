export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Zap,
  Phone,
  Printer,
  Package,
  Sparkles,
  PlayCircle,
  ChevronDown,
} from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata: Metadata = {
  title: 'Gia Công In Lụa Tròn, In Lụa Phẳng, Bao Bì Hộp Giấy & Gia Công Sau In',
  description:
    'Xưởng in ấn gia công VNPIS chuyên gia công in lụa tròn chai lọ mỹ phẩm, in lụa phẳng kim loại/nhựa, in bao bì hộp giấy, in túi giấy, in tem nhãn decal và gia công sau in (ép kim, ép nhũ nóng, phủ UV cục bộ) tại TP.HCM. Hotline: 0901 826 344.',
  keywords: [
    'gia công in lụa',
    'in ấn gia công',
    'in bao bì hộp giấy',
    'in túi giấy',
    'in tem nhãn decal',
    'gia công sau in',
    'in lụa tròn chai lọ mỹ phẩm',
    'in lụa phẳng công nghiệp',
    'phủ uv định hình',
    'ép kim ép nhũ nóng',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/in-lua',
  },
  openGraph: {
    title: 'Gia Công In Lụa Tròn, In Lụa Phẳng, Bao Bì Hộp Giấy & Gia Công Sau In | VNPIS',
    description:
      'Chuyên nhận gia công in lụa tròn chai lọ, in lụa phẳng, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in (phủ UV cục bộ, ép kim, ép nhũ nóng) chất lượng cao tại TP.HCM.',
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
    title: 'Gia Công In Lụa Tròn, In Lụa Phẳng, Bao Bì Hộp Giấy & Gia Công Sau In',
    description:
      'Xưởng in ấn gia công VNPIS chuyên gia công in lụa chai lọ, mặt máy CNC, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in.',
    images: ['/images/screen-printing-bags.jpg'],
  },
};

const screenPrintFaqs = [
  {
    question: 'Gia công in lụa tại xưởng VNPIS có những ưu điểm gì so với các phương pháp in khác?',
    answer:
      'Gia công in lụa (Screen Printing) tại xưởng VNPIS tạo ra lớp mực có độ dày vượt trội từ 20 đến 100 micron (gấp 5–10 lần in phun hoặc in offset), mang lại độ che phủ tuyệt đối ngay cả trên nền sản phẩm tối màu (đen, xanh đậm, thủy tinh mờ). Lớp mực dày giúp màu sắc tươi sáng, nổi khối 3D nhẹ khi chạm tay và có khả năng chống mài mòn cơ học, kháng hóa chất, kháng tia UV ngoài trời cực tốt.',
  },
  {
    question: 'Xưởng VNPIS nhận in lụa tròn trên những loại chai lọ và sản phẩm nào?',
    answer:
      'Với hệ thống máy in lụa tròn tự động và bán tự động tích hợp cảm biến quang học định vị điểm G (Registration Sensor), VNPIS nhận gia công in lụa xoay tròn 360 độ từ 1 đến 4 màu trên: chai lọ mỹ phẩm (lọ serum, tuýp kem mềm, hũ kem thủy tinh/acrylic), chai nước hoa, bình giữ nhiệt inox, ly nhựa trà sữa PP/PET, ly thủy tinh, thùng sơn và ống nhựa công nghiệp.',
  },
  {
    question: 'Dịch vụ in bao bì hộp giấy, in túi giấy và in tem nhãn decal tại VNPIS bao gồm những gì?',
    answer:
      'Bên cạnh in trực tiếp lên vật thể, xưởng in ấn gia công VNPIS cung cấp giải pháp trọn gói cho ngành bao bì: in bao bì hộp giấy (hộp mỹ phẩm, hộp thuốc, hộp rượu cao cấp, hộp cứng bồi carton), in túi giấy (túi giấy Kraft, Couche, Ivory cho shop và sự kiện doanh nghiệp), và in tem nhãn decal (tem nhãn decal nhựa PVC, decal trong, decal xi bạc máy móc, decal vỡ bảo hành) với độ sắc nét và đồng đều màu chuẩn Pantone.',
  },
  {
    question: 'Gia công sau in (Phủ UV cục bộ, Ép kim, Ép nhũ nóng) được thực hiện như thế nào?',
    answer:
      'Gia công sau in (Post-press Finishing) tại VNPIS sử dụng máy kéo lụa UV tự động và máy ép nhũ nhiệt cao tần để tạo hiệu ứng sang trọng cho bao bì hộp giấy, túi giấy, tem nhãn decal và chai lọ: Phủ UV định hình (Spot UV bóng gương, UV cát nhám, UV nổi 3D), ép kim logo (vàng, bạc, đồng, hologram), ép nhũ nóng (Hot Stamping) lên viền nắp mỹ phẩm/hộp rượu, và in nhũ cào bảo mật (Scratch-off) cho thẻ cào/tem chống giả.',
  },
  {
    question: 'Thời gian làm khuôn lụa, test mẫu và giao hàng đơn gia công in lụa là bao lâu?',
    answer:
      'Xưởng VNPIS trang bị phòng chụp bản lụa натяг căng lưới tiêu chuẩn (từ 120T đến 420T) ngay tại xưởng, giúp hoàn thành khuôn lụa và in mẫu test miễn phí chỉ trong vòng 24h. Thời gian sản xuất hàng loạt từ 2 – 5 ngày làm việc với công suất đạt 30.000 – 50.000 sản phẩm/ngày.',
  },
];

export default function InLuaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dịch Vụ Gia Công In Lụa Tròn, In Lụa Phẳng, In Bao Bì Hộp Giấy & Gia Công Sau In',
    serviceType: 'Gia Công In Lụa & Gia Công Sau In Bao Bì',
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: {
      '@type': 'Country',
      name: 'Việt Nam',
    },
    description:
      'Chuyên nhận gia công in lụa tròn chai lọ mỹ phẩm, in lụa phẳng mặt máy CNC, in bao bì hộp giấy, in túi giấy, in tem nhãn decal và gia công sau in (phủ UV định hình, ép kim, ép nhũ nóng) tại TP.HCM.',
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
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-4 rounded-full bg-teal-100/80 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            Xưởng In Ấn Gia Công VNPIS — Công Nghệ Screen Printing &amp; Post-Press
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Gia Công In Lụa Đa Chất Liệu, Bao Bì Hộp Giấy &amp; Gia Công Sau In
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Chuyên nhận <strong>gia công in lụa tròn</strong> (chai lọ mỹ phẩm, bình giữ nhiệt, ly nhựa/thủy tinh), <strong>in lụa phẳng</strong> (mặt máy CNC, tấm nhựa, kim loại), kết hợp sản xuất <strong>in bao bì hộp giấy, in túi giấy, in tem nhãn decal</strong> và <strong>gia công sau in</strong> (phủ UV cục bộ, ép kim, ép nhũ nóng Hot Stamping) sắc nét, bền màu vượt trội tại TP.HCM.
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
                Gia Công In Lụa Tròn (Xoay 360°)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                In trực tiếp lên các sản phẩm hình trụ tròn, hình côn (loại nhỏ đến lớn): chai lọ mỹ phẩm, hũ kem thủy tinh, tuýp sữa rửa mặt, chai nước hoa, bình giữ nhiệt inox, ly nhựa PP/PET và xô/thùng sơn công nghiệp. Định vị chồng nhiều màu chính xác bằng cảm biến quang.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Gia Công In Lụa Phẳng Công Nghiệp
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                In thông số kỹ thuật, sơ đồ mạch, logo thương hiệu lên các bề mặt phẳng độ khó cao: mặt máy CNC kim loại, vỏ tủ điện sơn tĩnh điện, tấm nhựa Acrylic/Mica, kính cường lực mặt bếp từ, phím màng (Membrane Switch), vải không dệt và màng nhựa PE/PP.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn &amp; Gia Công Sau In
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Nhận <strong>in bao bì hộp giấy</strong>, <strong>in túi giấy</strong>, <strong>in tem nhãn decal</strong> và thực hiện các công đoạn <strong>gia công sau in</strong> cao cấp: kéo lụa <strong>phủ UV định hình (Spot UV)</strong>, UV cát, UV nổi, <strong>ép kim</strong>, <strong>ép nhũ nóng (Hot Stamping)</strong> và kéo nhũ cào thẻ cào bảo mật.
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
            Bảng tiêu chuẩn kỹ thuật áp dụng tại xưởng in lụa và hoàn thiện sau in của VNPIS:
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
                  <td className="p-4 font-bold text-slate-900">Đường kính sản phẩm in lụa tròn</td>
                  <td className="p-4">Ø10 mm – Ø250 mm (Góc xoay 360°)</td>
                  <td className="p-4">Ống son, lọ serum, chai mỹ phẩm, bình giữ nhiệt, thùng sơn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Khổ in lụa phẳng tối đa</td>
                  <td className="p-4">600 x 900 mm / 800 x 1200 mm</td>
                  <td className="p-4">Tấm kim loại CNC, mặt kính, bảng mica, bao bì hộp giấy</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Mật độ mắt lưới (Mesh Count)</td>
                  <td className="p-4">100T – 420T (Lưới Polyester Thụy Sĩ &amp; Lưới Inox)</td>
                  <td className="p-4">Đảm bảo chữ nhỏ 0.15mm sắc nét, lớp mực đều</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ dày màng mực (Ink Film Thickness)</td>
                  <td className="p-4 font-semibold text-teal-700">20 µm – 100 µm</td>
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
                  <td className="p-4">Bao bì hộp giấy, túi giấy, tem nhãn decal, nắp mỹ phẩm</td>
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
            Tham khảo khung đơn giá gốc tận xưởng VNPIS tại TP.HCM (áp dụng năm 2026):
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
                    In Lụa Tròn Chai Lọ Mỹ Phẩm / Ly Nhựa (1 màu)
                  </td>
                  <td className="p-4 font-semibold">450đ – 800đ / sp</td>
                  <td className="p-4 font-semibold">300đ – 500đ / sp</td>
                  <td className="p-4 font-bold text-teal-600">200đ – 320đ / sp</td>
                  <td className="p-4 text-xs">Miễn phí khung lụa từ 5.000 sp</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Lụa Phẳng Mặt Máy / Nhựa / Kim Loại
                  </td>
                  <td className="p-4 font-semibold">600đ – 1.500đ / sp</td>
                  <td className="p-4 font-semibold">400đ – 900đ / sp</td>
                  <td className="p-4 font-bold text-teal-600">250đ – 550đ / sp</td>
                  <td className="p-4 text-xs">Mực 2 thành phần kháng hóa chất</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Túi Giấy / Bao Bì Hộp Giấy / Túi Nilon
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
              Giải đáp chi tiết về kỹ thuật in lụa tròn, in lụa phẳng, in bao bì hộp giấy và phủ UV/ép kim tại VNPIS.
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
            Liên hệ ngay xưởng VNPIS để được tư vấn kỹ thuật, làm mẫu thử miễn phí và nhận báo giá chi tiết tận xưởng với chiết khấu cao cho đơn hàng lớn.
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
