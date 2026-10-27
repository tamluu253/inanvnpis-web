export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  ChevronDown,
} from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata: Metadata = {
  title: 'Gia Công In Kỹ Thuật Số, In Mã QR Biến Đổi (VDP) & Số Nhảy Serial Chống Giả',
  description:
    'Xưởng VNPIS chuyên in dữ liệu biến đổi VDP: in mã QR biến đổi, in tem QR code chống giả, in số nhảy serial number, in thẻ cào biến đổi, in mã vạch biến đổi, in tem truy xuất nguồn gốc, gia công in phun date code số lô 60m/phút.',
  keywords: [
    'in mã QR biến đổi',
    'in tem QR code chống giả',
    'in số nhảy serial number',
    'in thẻ cào biến đổi',
    'in mã vạch biến đổi',
    'in tem truy xuất nguồn gốc',
    'gia công in phun date code số lô',
    'in dữ liệu biến đổi VDP',
    'variable data printing Vietnam Cambodia Laos',
    'in kỹ thuật số',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: 'https://www.inanvnpis.com/in-ky-thuat-so',
  },
  openGraph: {
    title: 'Gia Công In Kỹ Thuật Số, In Mã QR Biến Đổi (VDP) & Số Nhảy Serial Chống Giả | VNPIS',
    description:
      'Dịch vụ in dữ liệu biến đổi VDP (in mã QR biến đổi, in tem QR code chống giả, in số nhảy serial number, in thẻ cào biến đổi, in mã vạch biến đổi, in tem truy xuất nguồn gốc) tích hợp Camera Vision QC 100%.',
    url: 'https://www.inanvnpis.com/in-ky-thuat-so',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    images: [
      {
        url: '/images/qr-code-printing.jpg',
        width: 1200,
        height: 630,
        alt: 'Dịch vụ gia công in kỹ thuật số và mã QR Code biến đổi VDP tại xưởng VNPIS',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gia Công In Kỹ Thuật Số, In Mã QR Biến Đổi (VDP) & Số Nhảy Serial Chống Giả',
    description:
      'Xưởng in ấn gia công VNPIS chuyên in mã QR biến đổi, tem QR code chống giả, số nhảy serial number, thẻ cào biến đổi, tem truy xuất nguồn gốc.',
    images: ['/images/qr-code-printing.jpg'],
  },
};

const ktsFaqs = [
  {
    question: 'In dữ liệu biến đổi (Variable Data Printing - VDP) là gì và ứng dụng như thế nào?',
    answer:
      'In dữ liệu biến đổi VDP là công nghệ in kỹ thuật số công nghiệp cho phép thay đổi nội dung in trên từng đơn vị sản phẩm liên tiếp mà không cần dừng dây chuyền hay thay bản in. Mỗi sản phẩm sẽ được in mã QR biến đổi độc nhất, in số nhảy serial number liên tục, in thẻ cào biến đổi (mã PIN trúng thưởng ngẫu nhiên) hoặc in mã vạch biến đổi chuẩn GS1 khác nhau để làm in tem QR code chống giả, kích hoạt bảo hành điện tử, in tem truy xuất nguồn gốc và quản lý phân phối chống bán lấn vùng.',
  },
  {
    question: 'Làm sao để đảm bảo 100% mã QR biến đổi không bị trùng lặp hoặc lỗi không quét được?',
    answer:
      'Dây chuyền in kỹ thuật số VDP tại xưởng in ấn gia công VNPIS được trang bị hệ thống Camera Vision (CCD) công nghiệp ngay sau cụm đầu in UV Single Pass (Ricoh Gen5/Gen6, Epson i3200) / TIJ. Camera sẽ chụp ảnh và giải mã 100% mã QR/Barcode vừa in ở tốc độ 60m/phút, đối chiếu trực tiếp với cơ sở dữ liệu gốc để phát hiện tức thì mã mờ, mã trùng hoặc khuyết nét, đảm bảo tỷ lệ quét thành công đạt 100% (Grade A/B theo chuẩn ISO/IEC 15415) trước khi bàn giao.',
  },
  {
    question: 'Xưởng VNPIS có nhận gia công in phun date code số lô và in mã QR lên những vật liệu nào?',
    answer:
      'Nhờ kết hợp 3 công nghệ đầu in hiện đại (UV Piezo Single Pass, Thermal Inkjet TIJ 2.5 và Continuous Inkjet CIJ), VNPIS nhận in tem QR code chống giả, in tem truy xuất nguồn gốc trên decal cuộn/tờ (decal giấy, decal nhựa PVC, decal vỡ bảo hành, tem xi bạc), in thẻ cào biến đổi, in trực tiếp lên bao bì hộp giấy dược – mỹ phẩm, màng nhôm vỉ thuốc, túi màng ghép và gia công in phun date code số lô (NSX/HSD/Batch No) lên chai lọ, lon nhôm, nắp chai nhựa HDPE/PP.',
  },
  {
    question: 'VNPIS có nhận kết hợp in thẻ cào biến đổi / tem QR chống giả và kéo nhũ cào bảo mật (Scratch-off) trọn gói không?',
    answer:
      'Có. Đây là dịch vụ thế mạnh cốt lõi của xưởng VNPIS. Sau khi in mã QR biến đổi hoặc mã PIN trúng thưởng lên tem nhãn decal, thẻ cào biến đổi hoặc bao bì hộp giấy, chúng tôi chuyển trực tiếp sang dây chuyền gia công sau in để cán màng bảo vệ và kéo lớp nhũ cào bảo mật (nhũ bạc, nhũ xám sóng nước hoặc dán nhũ nóng hologram) khép kín ngay tại xưởng, cam kết ký NDA bảo mật dữ liệu tuyệt đối.',
  },
  {
    question: 'Xưởng VNPIS có cung ứng tem QR biến đổi cho nhà máy tại Việt Nam, Lào và Campuchia không?',
    answer:
      'Có. VNPIS là nhà thầu Variable Data Printing Vietnam Cambodia Laos uy tín: ngoài việc giao hàng tận nơi hoặc mang cụm băng tải máy in đến gia công trực tiếp tại kho khách hàng ở TP.HCM, Bình Dương, Đồng Nai, Long An, chúng tôi còn sản xuất và xuất khẩu trọn gói tem QR code chống giả, tem truy xuất nguồn gốc, thẻ cào biến đổi sang Phnom Penh, Bavet (Campuchia) và Vientiane, Savannakhet (Lào) chỉ trong 24–72 giờ.',
  },
];

export default function InKyThuatSoPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dịch Vụ Gia Công In Kỹ Thuật Số & In Mã QR Biến Đổi (VDP) Công Nghiệp',
    serviceType: 'Gia Công In Kỹ Thuật Số & Dữ Liệu Biến Đổi VDP (Variable Data Printing)',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.inanvnpis.com/#organization',
      name: 'Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS',
      url: 'https://www.inanvnpis.com',
      telephone: '+84901836344',
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
      'Chuyên nhận in dữ liệu biến đổi VDP: in mã QR biến đổi, in tem QR code chống giả, in số nhảy serial number, in thẻ cào biến đổi, in mã vạch biến đổi, in tem truy xuất nguồn gốc và gia công in phun date code số lô tích hợp Camera Vision kiểm lỗi 100%.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: '80',
      highPrice: '450',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ktsFaqs.map((faq) => ({
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
        name: 'In Kỹ Thuật Số & QR Code Biến Đổi (VDP)',
        item: 'https://www.inanvnpis.com/in-ky-thuat-so',
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
          <Link href="/" className="hover:text-purple-600 font-medium">
            Trang Chủ
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">
            In Kỹ Thuật Số &amp; Mã QR Biến Đổi (VDP)
          </span>
        </nav>

        {/* 1. HEADER / HERO */}
        <div className="text-center mb-10">
          <span className="inline-block py-2 px-4 rounded-full bg-purple-100/80 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
            In Dữ Liệu Biến Đổi VDP — Variable Data Printing Vietnam Cambodia Laos
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Gia Công In Kỹ Thuật Số, In Mã QR Biến Đổi (VDP) &amp; Số Nhảy Chống Giả
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Dịch vụ <strong>in dữ liệu biến đổi VDP</strong> tốc độ cao: chuyên <strong>in mã QR biến đổi</strong>, <strong>in tem QR code chống giả</strong>, <strong>in số nhảy serial number</strong>, <strong>in thẻ cào biến đổi</strong>, <strong>in mã vạch biến đổi</strong> chuẩn GS1, <strong>in tem truy xuất nguồn gốc</strong> và <strong>gia công in phun date code số lô</strong> trên tem nhãn decal, bao bì hộp giấy, túi màng ghép, nắp chai. Tích hợp Camera Vision kiểm lỗi 100%.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0901836344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-2xl shadow-lg shadow-purple-600/25 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In KTS / VDP): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa / Sau In): 0901 826 344
            </a>
          </div>
        </div>

        {/* DIRECT ANSWER (TL;DR) CALLOUT BOX FOR AI SEARCH & B2B ENGINEERS */}
        <div className="bg-purple-50/90 border-2 border-purple-200 rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-purple-900 font-extrabold text-sm uppercase tracking-wider mb-3">
            <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0" />
            <span>Tóm Tắt Kỹ Thuật Nhanh (Direct Answer — In Dữ Liệu Biến Đổi VDP VNPIS)</span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
            <strong>Dịch vụ in kỹ thuật số dữ liệu biến đổi (VDP) tại Xưởng VNPIS</strong> sử dụng cụm đầu phun Piezo công nghiệp <strong>Ricoh Gen5/Gen6 &amp; Epson i3200 UV Single Pass (600–1200 DPI)</strong> cùng hệ thống <strong>TIJ 2.5 / CIJ</strong> tốc độ <strong>60–80 m/phút</strong> (công suất 100.000 – 300.000 mã/ngày). Chúng tôi nhận sản xuất trọn gói: <strong>in mã QR biến đổi</strong> (kích thước từ 3x3mm), <strong>in tem QR code chống giả</strong> phủ nhũ cào, <strong>in số nhảy serial number</strong>, <strong>in thẻ cào biến đổi</strong>, <strong>in mã vạch biến đổi GS1</strong>, <strong>in tem truy xuất nguồn gốc</strong> và <strong>gia công in phun date code số lô</strong>. 100% đơn hàng được quét kiểm tự động bằng <strong>Camera Vision CCD Online</strong> đạt chuẩn <strong>ISO/IEC 15415 Grade A/B</strong> với đơn giá chỉ từ <strong>80đ – 350đ/mã</strong>.
          </p>
          <div className="text-xs font-bold text-slate-500">
            Tiêu chuẩn kiểm định: Kỹ Sư Lưu Trọng Tâm &amp; Chuyên gia Mr. Giang | ISO/IEC 15415 Grade A • GS1 Standard • 100% Vision QC • Cam kết bảo mật NDA
          </div>
        </div>

        {/* Illustrative Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
          <img
            src="/images/qr-code-printing.jpg"
            alt="Dịch vụ gia công in kỹ thuật số và mã QR Code biến đổi VDP trên tem nhãn decal bao bì hộp giấy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 2. 3 CÔNG NGHỆ IN KỸ THUẬT SỐ & MÃ HÓA CÔNG NGHIỆP TẠI VNPIS (H2 -> H3) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              3 Công Nghệ In Kỹ Thuật Số &amp; Mã Hóa Dữ Liệu Biến Đổi Cốt Lõi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Làm chủ cả phần cứng <Link href="/products/digital-printers" className="text-purple-600 font-semibold hover:underline">máy in kỹ thuật số công nghiệp</Link> lẫn phần mềm xử lý cơ sở dữ liệu lớn (Big Data RIP), xưởng in ấn gia công VNPIS triển khai 3 giải pháp chuyên biệt:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In UV Single Pass Mã QR Biến Đổi (600–1200 DPI)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Sử dụng dàn đầu phun Piezo công nghiệp (Ricoh Gen5/Gen6, Epson I3200) kết hợp đèn sấy UV LED năng lượng cao. Mực đóng rắn tức thì trong 0.1 giây, chuyên dùng để <strong>in mã QR biến đổi</strong> siêu nhỏ (từ 3x3mm), <strong>in số nhảy serial number</strong> và <strong>in mã vạch biến đổi</strong> sắc nét trên tem nhãn decal cuộn, thẻ nhựa PVC, nắp chai và bao bì hộp giấy.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Gia Công In Phun Date Code Số Lô (TIJ &amp; CIJ)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Giải pháp <strong>gia công in phun date code số lô</strong> tốc độ cao (60–120m/phút) chuyên trị bài toán in NSX/HSD (Date/Lot), số nhảy Serial, mã vạch 1D/2D DataMatrix lên bề mặt thấm hút (thùng carton, hộp thuốc, túi giấy) và bề mặt không thấm hút (màng nilon PE/PP, lon nhôm, lọ thủy tinh, ống nhựa).
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Kiểm Soát Mã Lỗi Tự Động Bằng Camera Vision (CCD)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Mỗi đơn hàng <strong>in dữ liệu biến đổi VDP</strong> đều được kiểm định real-time bằng Camera Vision độ phân giải cao. Tự động phát hiện và loại bỏ (Reject) các mã lỗi, mã trùng lặp hoặc mã không đạt độ tương phản, xuất báo cáo đối soát file Excel/CSV hoàn chỉnh bàn giao cho bộ phận IT của doanh nghiệp.
              </p>
            </div>
          </div>
        </section>

        {/* 3. GIẢI PHÁP TRỌN GÓI: IN TEM NHÃN DECAL, THẺ CÀO, BAO BÌ HỘP GIẤY & GIA CÔNG SAU IN */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Ứng Dụng In Mã QR Biến Đổi, Tem Chống Giả, Thẻ Cào &amp; Truy Xuất Nguồn Gốc
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            <strong>Xưởng in ấn gia công VNPIS</strong> cung cấp chuỗi sản xuất khép kín từ khâu thiết kế phôi, in nền màu, <strong>in dữ liệu biến đổi VDP</strong> cho đến <strong>gia công sau in</strong> (cán màng, phủ nhũ cào bảo mật, bế đứt nửa cuộn/tờ) cho doanh nghiệp tại Việt Nam, Lào và Campuchia:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. In Tem QR Code Chống Giả &amp; In Tem Truy Xuất Nguồn Gốc
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhận <strong>in tem QR code chống giả</strong> và <strong>in tem truy xuất nguồn gốc</strong> tích hợp mã QR động kết nối hệ thống iCheck, VietCheck, GS1 hoặc CRM riêng của doanh nghiệp. Đa dạng chất liệu: decal vỡ (tem bể), decal nhựa PVC, decal xi bạc, tem Hologram 7 màu kết hợp phủ nhũ cào bảo mật chống quét trộm trước khi mua hàng.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. In Số Nhảy Serial Number &amp; Mã Vạch Biến Đổi Lên Bao Bì Hộp Giấy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chạy phôi hộp giấy bế phẳng qua băng tải tách tờ tự động (Friction Feeder) để <strong>in số nhảy serial number</strong>, <strong>in mã vạch biến đổi</strong> GS1-128, mã QR định danh đại lý và <strong>gia công in phun date code số lô</strong> trực tiếp lên <strong>bao bì hộp giấy</strong> dược phẩm, mỹ phẩm, nông dược mà không cần tốn chi phí dán tem phụ.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. In Thẻ Cào Biến Đổi Trúng Thưởng &amp; Voucher Khuyến Mãi
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gia công trọn gói <strong>in thẻ cào biến đổi</strong> trên giấy Couche/Ivory hoặc nhựa PVC: in mã PIN ngẫu nhiên 8–16 ký tự kèm mã QR quét trúng thưởng tự động, số Serial kiểm soát phát hành, cán màng BOPP và kéo lụa nhũ cào bạc/nhũ hologram chống soi xuyên thấu 100%.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                4. In QR Code Trong Lòng Nắp Chai &amp; Đáy Lon Ngành Đồ Uống (F&amp;B)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sử dụng hệ thống cấp phôi nắp tự động kết hợp đầu in UV/TIJ/Laser để <strong>in mã QR biến đổi</strong> dự thưởng bên trong lòng nắp chai nhựa HDPE/PP hoặc dưới đáy lon/hộp cho các chiến dịch Marketing quy mô hàng triệu sản phẩm, kháng nước đá và độ ẩm cao.
              </p>
            </div>
          </div>
        </section>

        {/* 4. THÔNG SỐ KỸ THUẬT HỆ THỐNG IN KỸ THUẬT SỐ & VDP */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Thông Số Kỹ Thuật Hệ Thống In Kỹ Thuật Số &amp; VDP Tại Xưởng VNPIS
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Bảng thông số kỹ thuật dây chuyền in dữ liệu biến đổi và kiểm tra mã vạch tại VNPIS:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 rounded-tl-xl">Hạng Mục Kỹ Thuật</th>
                  <th className="p-4">Thông Số Dây Chuyền VNPIS</th>
                  <th className="p-4 rounded-tr-xl">Tiêu Chuẩn Đạt Được</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Công nghệ đầu in</td>
                  <td className="p-4">UV Piezo Single Pass (Ricoh Gen5/Gen6, Epson i3200), TIJ 2.5, CIJ</td>
                  <td className="p-4">In sắc nét trên mọi bề mặt thấm &amp; không thấm hút</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ phân giải in (Resolution)</td>
                  <td className="p-4 font-semibold text-purple-700">300 x 300 DPI đến 1200 x 600 DPI</td>
                  <td className="p-4">Đọc tốt mã QR Code kích thước siêu nhỏ 3x3 mm</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Các chuẩn mã vạch biến đổi hỗ trợ</td>
                  <td className="p-4">QR Code, DataMatrix, GS1-128, EAN-13, Code 128, PDF417</td>
                  <td className="p-4">Đạt chuẩn GS1 Quốc tế &amp; ISO/IEC 15415 Grade A/B</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Tốc độ dây chuyền băng tải / cuộn</td>
                  <td className="p-4">30 – 80 mét/phút (100.000 – 300.000 mã/ngày)</td>
                  <td className="p-4">Đáp ứng tiến độ chiến dịch khuyến mãi lớn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Định dạng dữ liệu tiếp nhận</td>
                  <td className="p-4">Excel (.xlsx), CSV, TXT, SQL Database, API</td>
                  <td className="p-4">Cam kết ký NDA bảo mật 100% dữ liệu mã trúng thưởng</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Hệ thống kiểm lỗi (QC)</td>
                  <td className="p-4 font-semibold text-emerald-700">Camera Vision CCD Online + Còi báo/Gạt lỗi</td>
                  <td className="p-4">Loại bỏ 100% mã trùng, mã khuyết nét, xuất log đối soát</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold">
            <Link
              href="/products/digital-printers"
              className="text-purple-600 hover:text-purple-800 inline-flex items-center"
            >
              Xem các dòng Máy In Kỹ Thuật Số UV &amp; TIJ/CIJ của VNPIS <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <Link
              href="/products/consumables"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Xem danh mục Hộp Mực TIJ (Gốc Nước / Solvent) &amp; Mực UV <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </section>

        {/* 5. BẢNG GIÁ THAM KHẢO GIA CÔNG IN KỸ THUẬT SỐ & QR CODE BIẾN ĐỔI */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Bảng Giá Gia Công In Kỹ Thuật Số &amp; Mã QR Biến Đổi Tham Khảo
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Tham khảo đơn giá gia công in dữ liệu biến đổi VDP tại xưởng VNPIS (hoặc mang máy in tận kho khách hàng):
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="p-4 rounded-tl-xl">Hạng Mục Gia Công In KTS / VDP</th>
                  <th className="p-4">Số Lượng 5.000 – 20.000 sp</th>
                  <th className="p-4">Số Lượng 20.000 – 100.000 sp</th>
                  <th className="p-4">Số Lượng &gt; 100.000 sp</th>
                  <th className="p-4 rounded-tr-xl">Dịch Vụ Đi Kèm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Mã QR Biến Đổi / Số Nhảy Serial Lên Phôi Hộp Giấy / Thẻ Cào
                  </td>
                  <td className="p-4 font-semibold">200đ – 350đ / mã</td>
                  <td className="p-4 font-semibold">120đ – 200đ / mã</td>
                  <td className="p-4 font-bold text-purple-600">80đ – 120đ / mã</td>
                  <td className="p-4 text-xs">Bao gồm quét kiểm Camera Vision</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    In Tem QR Code Chống Giả / Tem Truy Xuất Nguồn Gốc (Trọn gói decal)
                  </td>
                  <td className="p-4 font-semibold">300đ – 550đ / tem</td>
                  <td className="p-4 font-semibold">180đ – 320đ / tem</td>
                  <td className="p-4 font-bold text-purple-600">110đ – 180đ / tem</td>
                  <td className="p-4 text-xs">Hỗ trợ phủ nhũ cào bảo mật</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    Gia Công In Phun Date Code Số Lô / Mã Vạch Biến Đổi Lên Chai Lọ, Nắp
                  </td>
                  <td className="p-4 font-semibold">250đ – 450đ / sp</td>
                  <td className="p-4 font-semibold">150đ – 250đ / sp</td>
                  <td className="p-4 font-bold text-purple-600">90đ – 150đ / sp</td>
                  <td className="p-4 text-xs">Mực UV/Solvent kháng nước &amp; cồn</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">
                    Dịch Vụ Mang Máy Đến In Gia Công Tận Kho Khách Hàng
                  </td>
                  <td className="p-4 font-semibold">Theo ca máy / ngày</td>
                  <td className="p-4 font-semibold">180đ – 300đ / sp</td>
                  <td className="p-4 font-bold text-purple-600">Báo giá trọn gói</td>
                  <td className="p-4 text-xs">Kỹ sư VNPIS trực tiếp vận hành</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Câu Hỏi Thường Gặp Về Dịch Vụ In Kỹ Thuật Số &amp; QR Code Biến Đổi (VDP)
            </h2>
            <p className="text-slate-600 text-sm">
              Giải đáp chi tiết về bảo mật dữ liệu, độ bền mực in và quy trình kiểm tra mã vạch tại VNPIS.
            </p>
          </div>
          <div className="space-y-4">
            {ktsFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base pr-6">{faq.question}</h3>
                  <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-open:bg-purple-600 group-open:text-white transition-colors">
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

        {/* 7. CTA BANNER */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn Cần Gia Công In Mã QR Biến Đổi, Tem Chống Giả &amp; Số Nhảy Serial?
          </h2>
          <p className="text-purple-100 text-base mb-8 max-w-2xl mx-auto">
            Liên hệ ngay kỹ sư VNPIS để được tư vấn giải pháp in dữ liệu biến đổi tại xưởng hoặc xuất khẩu tem QR chống giả sang Lào &amp; Campuchia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://zalo.me/0901836344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-white text-purple-700 hover:bg-slate-100 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In KTS / VDP): 0901 836 344
            </a>
            <a
              href="https://zalo.me/0901826344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-purple-900 text-white hover:bg-purple-950 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa / Sau In): 0901 826 344
            </a>
          </div>
        </div>

        {/* 8. CONSULTATION FORM */}
        <ConsultationForm
          title="Nhận Báo Giá In Kỹ Thuật Số & Mã QR Biến Đổi (VDP)"
          subtitle="Để lại thông tin về loại bao bì/tem nhãn và số lượng mã QR/Serial cần in, kỹ sư VNPIS sẽ tư vấn giải pháp tối ưu chi phí nhất."
          pageTitle="Trang Gia Công In Kỹ Thuật Số (/in-ky-thuat-so)"
        />
      </div>
    </div>
  );
}
