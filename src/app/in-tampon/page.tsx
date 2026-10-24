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
  Layers,
  Settings,
  HelpCircle,
  ChevronDown,
  PlayCircle,
  Award,
  Clock,
} from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export const metadata: Metadata = {
  title: 'Gia Công In Tampon (Pad Printing) Đa Bề Mặt Theo Yêu Cầu TP.HCM',
  description:
    'Xưởng in ấn gia công VNPIS chuyên nhận gia công in tampon (Pad Printing) độ chính xác ±0.05mm trên ly nhựa, nắp chai, linh kiện điện tử, nhựa ABS, PP, PE, HDPE. Test mẫu & bám dính 3M miễn phí. Hotline: 0901 836 344.',
  keywords: [
    'gia công in tampon',
    'in tampon',
    'in pad printing',
    'in ấn gia công',
    'xưởng in tampon tphcm',
    'in tampon trên nhựa abs pp pe',
    'in logo nắp chai ly nhựa',
    'in tampon linh kiện điện tử',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/in-tampon',
  },
  openGraph: {
    title: 'Gia Công In Tampon (Pad Printing) Đa Bề Mặt Theo Yêu Cầu TP.HCM | VNPIS',
    description:
      'Chuyên nhận gia công in tampon sắc nét (±0.05mm) trên bề mặt cong, lõm, gồ ghề: tô chén ly nhựa, nắp chai, linh kiện điện tử, thiết bị y tế. Mực Marabu/Afford đạt chuẩn RoHS, test 3M 5B.',
    url: 'https://www.inanvnpis.com/in-tampon',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    images: [
      {
        url: '/images/pad-printing-cups.jpg',
        width: 1200,
        height: 630,
        alt: 'Dịch vụ gia công in tampon đa bề mặt tại xưởng VNPIS',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gia Công In Tampon (Pad Printing) Đa Bề Mặt Theo Yêu Cầu TP.HCM',
    description:
      'Xưởng in ấn gia công VNPIS chuyên nhận gia công in tampon trên nhựa ABS, PP, PE, kim loại, thủy tinh. Test mẫu miễn phí 24h.',
    images: ['/images/pad-printing-cups.jpg'],
  },
};

const tamponFaqs = [
  {
    question: 'Gia công in tampon (Pad Printing) là gì và khác gì so với in lụa?',
    answer:
      'In tampon (Pad Printing) là công nghệ in gián tiếp sử dụng đầu bông silicone đàn hồi cao để lấy mực từ bản khắc thép (Cliche) và ép truyền mực lên bề mặt sản phẩm. Khác với in lụa chỉ in được trên bề mặt phẳng hoặc trụ tròn đều, gia công in tampon có thể in logo và ký hiệu siêu mảnh (độ chính xác ±0.05mm) lên các bề mặt cong 3D, lõm sâu, lồi lõm, góc khuất hoặc có gân sần như lòng chén nhựa, nút bấm bàn phím, vỏ thiết bị y tế, nắp chai có khía.',
  },
  {
    question: 'Xưởng VNPIS sử dụng dòng mực in tampon nào để đảm bảo không bong tróc?',
    answer:
      'Xưởng in ấn gia công VNPIS sử dụng 100% các dòng mực in tampon công nghiệp nhập khẩu từ Đức và châu Âu như Marabu (Tampapur TPU, Tampaplus TPL), Afford KT1, và RUCO. Mực in có đầy đủ chứng nhận an toàn RoHS, REACH, Halogen-Free và được phối trộn cùng chất đóng rắn (Hardener) chuyên dụng giúp vượt qua bài kiểm tra độ bám dính băng keo 3M Cross-cut đạt cấp độ 5B, kháng cồn IPA, mồ hôi tay và ma sát cơ học.',
  },
  {
    question: 'Nhựa PP, PE, HDPE trơn bóng có in tampon bám mực được không?',
    answer:
      'Hoàn toàn được. Nhựa PP, PE, HDPE là nhóm nhựa không phân cực có sức căng bề mặt thấp (<32 dynes/cm). Tại xưởng VNPIS, trước khi đưa vào máy in tampon tự động, phôi nhựa PP/PE/HDPE sẽ được xử lý hoạt hóa bề mặt bằng công nghệ Corona, Plasma hoặc khò lửa (Flame Treatment) kết hợp Primer chuyên dụng, nâng sức căng bề mặt lên >42 dynes/cm giúp mực bám vĩnh viễn không bong tróc.',
  },
  {
    question: 'Chi phí làm khuôn bản thép (Cliche) và khuôn gá (Jig) tính như thế nào?',
    answer:
      'Đối với các đơn hàng gia công in tampon số lượng từ 10.000 sản phẩm trở lên, VNPIS hỗ trợ miễn phí 100% chi phí chế tạo bản thép Cliche và đồ gá Jig cơ bản. Với các đơn hàng số lượng nhỏ hoặc in thử nghiệm lô đầu, chi phí khuôn bản rất tiết kiệm và được bảo lưu tại xưởng cho các lần đặt hàng tiếp theo.',
  },
  {
    question: 'Xưởng VNPIS có nhận in tampon nhiều màu chồng màu chính xác không?',
    answer:
      'Có. Hệ thống máy in tampon cốc mực kín từ 1 đến 4 màu và 6 màu tự động tích hợp bàn xoay (Rotary Indexing Table) hoặc băng tải servo Shuttle tại VNPIS cho phép in chồng nhiều màu trong một chu trình duy nhất với sai số định vị dưới ±0.05mm, đảm bảo logo đa sắc sắc nét tuyệt đối.',
  },
];

export default function InTamponPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dịch Vụ Gia Công In Tampon (Pad Printing) Đa Bề Mặt Theo Yêu Cầu',
    serviceType: 'Gia Công In Tampon Công Nghiệp',
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: {
      '@type': 'Country',
      name: 'Việt Nam',
    },
    description:
      'Dịch vụ gia công in tampon (Pad Printing) chính xác cao (±0.05mm) từ 1 đến 6 màu trên nhựa ABS, PP, PE, HDPE, thủy tinh, kim loại, linh kiện điện tử, nắp chai, tô chén ly nhựa.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      lowPrice: '150',
      highPrice: '850',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tamponFaqs.map((faq) => ({
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
        name: 'Gia Công In Tampon',
        item: 'https://www.inanvnpis.com/in-tampon',
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
          <Link href="/" className="hover:text-blue-600 font-medium">
            Trang Chủ
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Gia Công In Tampon (Pad Printing)</span>
        </nav>

        {/* 1. HEADER / HERO */}
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-4 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            Xưởng In Ấn Gia Công VNPIS — Công Nghệ Pad Printing Chuẩn Đức
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Gia Công In Tampon Đa Bề Mặt (Pad Printing) Theo Yêu Cầu
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Giải pháp <strong>gia công in tampon</strong> sắc nét với độ chính xác <strong>±0.05mm</strong> trên mọi bề mặt phức tạp, hình cầu, lõm sâu, gồ ghề: Tô chén dĩa, ly nhựa PP/PET, nắp chai, bình giữ nhiệt, linh kiện điện tử ABS/PC, thiết bị y tế và đồ gia dụng. Cam kết mực in đạt chuẩn <strong>RoHS/REACH</strong> và vượt bài test bám dính <strong>3M Cross-cut 5B</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0901836344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-600/25 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl shadow-lg transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa): 0901 826 344
            </a>
          </div>
        </div>

        {/* Illustrative Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
          <img
            src="/images/pad-printing-cups.jpg"
            alt="Dịch vụ gia công in tampon ly nhựa tô chén dĩa linh kiện nhựa tại xưởng VNPIS"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 2. ƯU ĐIỂM CÔNG NGHỆ GIA CÔNG IN TAMPON TẠI VNPIS (H2 -> H3) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Ưu Điểm Vượt Trội Khi Gia Công In Tampon Tại Xưởng VNPIS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
              Nhờ đầu tư đồng bộ hệ thống <Link href="/products/pad-printers" className="text-blue-600 font-semibold hover:underline">máy in tampon cốc mực kín tự động</Link> và phòng pha chế mực tiêu chuẩn, xưởng in ấn gia công VNPIS giải quyết triệt để các bài toán in khó mà phương pháp in lụa hay in phun không thể thực hiện.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                In Sắc Nét Trên Bề Mặt Cong 3D &amp; Lõm Sâu
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Đầu bông silicone đàn hồi cao ôm sát bề mặt hình cầu, lòng tô chén lõm sâu, mặt cong rãnh khía hoặc gồ ghề, tái tạo hoàn hảo nét chữ siêu mảnh từ 0.1mm mà không bị nhòe hay biến dạng.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Mực In Chuẩn RoHS &amp; Bám Dính 3M 5B
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sử dụng hệ mực 2 thành phần Marabu, Afford KT1, RUCO chuyên biệt cho nhựa PP, PE, HDPE, ABS, PC, Nylon, kim loại sơn tĩnh điện và thủy tinh. Đạt chuẩn test kéo băng keo 3M Cross-cut 5B và ngâm cồn.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Công Suất Lớn 50.000+ SP/Ngày, Chồng Màu ±0.05mm
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dàn máy in Tampon tự động từ 1 đến 6 màu kết hợp băng tải Jig CNC giúp in chồng nhiều màu chính xác ±0.05mm, đáp ứng nhanh các đơn hàng gấp cho nhà máy FDI và doanh nghiệp xuất khẩu.
              </p>
            </div>
          </div>
        </section>

        {/* 3. THÔNG SỐ KỸ THUẬT NĂNG LỰC GIA CÔNG IN TAMPON */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Thông Số Kỹ Thuật &amp; Tiêu Chuẩn Chất Lượng Gia Công In Tampon
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Bảng thông số năng lực máy móc và tiêu chuẩn kiểm định chất lượng (QC) áp dụng cho mọi đơn hàng <strong>in ấn gia công</strong> tại xưởng VNPIS:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 rounded-tl-xl">Hạng Mục Kỹ Thuật</th>
                  <th className="p-4">Thông Số Tiêu Chuẩn Tại Xưởng VNPIS</th>
                  <th className="p-4 rounded-tr-xl">Ghi Chú &amp; Chứng Nhận</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Số màu in tối đa / chu trình</td>
                  <td className="p-4">Từ 1 màu đến 6 màu (Chồng màu tự động)</td>
                  <td className="p-4">Máy băng tải Shuttle Servo &amp; mâm xoay</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ chính xác lặp lại (Repeatability)</td>
                  <td className="p-4 font-semibold text-blue-700">±0.05 mm</td>
                  <td className="p-4">Đảm bảo không lệch màu các chi tiết nhỏ</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ mảnh nét in tối thiểu</td>
                  <td className="p-4">0.08 mm – 0.1 mm</td>
                  <td className="p-4">In rõ mã vạch, ký hiệu thông số mạch điện</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Hệ mực in công nghiệp sử dụng</td>
                  <td className="p-4">Marabu (Đức), Afford KT1, RUCO, Seiko</td>
                  <td className="p-4">Đạt chuẩn RoHS, REACH, Halogen-Free, FDA</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Tiêu chuẩn kiểm tra độ bám dính</td>
                  <td className="p-4 font-semibold text-emerald-700">ASTM D3359 (3M Cross-cut 5B)</td>
                  <td className="p-4">Test ngâm nước đá, cồn IPA 99%, ma sát tẩy</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Xử lý bề mặt trước khi in</td>
                  <td className="p-4">Corona, Plasma, Flame Treatment &amp; Primer</td>
                  <td className="p-4">Chuyên trị nhựa PP, PE, HDPE, Silicone, POM</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Năng lực sản xuất</td>
                  <td className="p-4">50.000 – 100.000 sản phẩm / ngày</td>
                  <td className="p-4">Có nhận tăng ca đêm cho đơn hàng gấp</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold">
            <Link
              href="/products/pad-printers"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              Khám phá các dòng Máy In Tampon VNPIS đang vận hành <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <Link
              href="/products/consumables"
              className="text-teal-600 hover:text-teal-800 inline-flex items-center"
            >
              Xem danh mục Mực In Tampon &amp; Vật Tư Tiêu Hao <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <Link
              href="/documents"
              className="text-purple-600 hover:text-purple-800 inline-flex items-center"
            >
              Tải chứng nhận RoHS &amp; Halogen-Free của mực in <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </section>

        {/* 4. REAL FACTORY VIDEO SECTION */}
        <section className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
                <PlayCircle className="w-4 h-4" /> Video Thực Tế Tại Xưởng VNPIS
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                Vận Hành Máy In Tampon 4 Màu Tự Động Độ Chính Xác Cao
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Xem trực tiếp quy trình vận hành máy in Tampon 4 màu cốc mực kín kết hợp băng tải tự động tại xưởng VNPIS. Hệ thống cho phép in logo nhiều màu chồng khít tuyệt đối trên bề mặt cong của linh kiện nhựa và đồ gia dụng với tốc độ lên tới 1.200 – 2.500 sản phẩm/giờ.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cốc mực kín gốm Ceramic giúp độ nhớt mực ổn định suốt ca chạy máy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hệ thống thổi khí sấy khô giữa các trạm màu giúp mực không bị lem</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Đồ gá Jig nhôm CNC định vị phôi chống xê dịch 100%</span>
                </li>
              </ul>
              <Link
                href="/videos"
                className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300"
              >
                Xem thêm thư viện Video Demo máy in công nghiệp <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster="/images/pad-printing-cups.jpg"
                >
                  <source src="/media/machines/hj-4color.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ phát video.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ỨNG DỤNG SẢN PHẨM NHẬN GIA CÔNG IN TAMPON */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Các Nhóm Sản Phẩm Nhận Gia Công In Tampon Phổ Biến
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Với hơn 10 năm kinh nghiệm trong lĩnh vực <strong>in ấn gia công</strong>, VNPIS là đối tác gia công chiến lược cho hàng trăm doanh nghiệp thuộc nhiều ngành công nghiệp:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: '1. Bao Bì Thực Phẩm & F&B',
                desc: 'In logo thương hiệu lên ly nhựa PP/PET đáy bầu, tô nhựa, chén dĩa Melamine, nắp chai nhựa HDPE, nút bấc và khay đựng thực phẩm.',
              },
              {
                title: '2. Linh Kiện Điện Tử & Điện Dân Dụng',
                desc: 'In ký hiệu thông số lên công tắc ổ cắm, aptomat (CB), vỏ router Wi-Fi, phím bấm bàn phím, tai nghe, vỏ sạc dự phòng nhựa ABS/PC.',
              },
              {
                title: '3. Thiết Bị Y Tế & Dược Phẩm',
                desc: 'In vạch chia độ chính xác cao trên ống tiêm, ống nghiệm, vỏ máy đo huyết áp, que test nhanh, lọ thuốc nhỏ mắt bằng mực y tế an toàn.',
              },
              {
                title: '4. Mỹ Phẩm & Chăm Sóc Cá Nhân',
                desc: 'In logo, thành phần lên vỏ thỏi son, nắp hũ kem dưỡng da, cổ chai serum, lược nhựa, bàn chải đánh răng và dao cạo râu.',
              },
              {
                title: '5. Quà Tặng Doanh Nghiệp & Đồ Chơi',
                desc: 'In logo đa sắc lên bút bi, bật lửa, bình giữ nhiệt inox, móc khóa, quả bóng golf, nón bảo hiểm và đồ chơi trẻ em nhựa ABS.',
              },
              {
                title: '6. Phụ Tùng Ô Tô - Xe Máy & Cơ Khí',
                desc: 'In ký hiệu chịu nhiệt và kháng dầu nhớt lên nút điều khiển taplo ô tô, công tắc xe máy, nắp bình dầu và linh kiện cơ khí sơn tĩnh điện.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col"
              >
                <div className="flex items-center text-blue-600 mb-2">
                  <CheckCircle className="w-5 h-5 mr-2 shrink-0" />
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. BẢNG GIÁ THAM KHẢO GIA CÔNG IN TAMPON THEO SỐ LƯỢNG */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Bảng Giá Gia Công In Tampon Tham Khảo Tại Xưởng TP.HCM
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Đơn giá <strong>gia công in tampon</strong> được tính theo số lượng sản phẩm và số màu in. Số lượng càng lớn, đơn giá trên từng sản phẩm càng tối ưu:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 rounded-tl-xl">Quy Mô Đơn Hàng (Số Lượng)</th>
                  <th className="p-4">In Tampon 1 Màu</th>
                  <th className="p-4">In Tampon 2 Màu</th>
                  <th className="p-4">In Tampon 3 – 4 Màu</th>
                  <th className="p-4 rounded-tr-xl">Ưu Đãi Khuôn &amp; Vận Chuyển</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">1.000 – 3.000 sp</td>
                  <td className="p-4 font-semibold">350đ – 500đ / sp</td>
                  <td className="p-4 font-semibold">550đ – 750đ / sp</td>
                  <td className="p-4 font-semibold">800đ – 1.200đ / sp</td>
                  <td className="p-4 text-xs">Miễn phí test mẫu 3M</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">3.000 – 10.000 sp</td>
                  <td className="p-4 font-semibold">250đ – 350đ / sp</td>
                  <td className="p-4 font-semibold">400đ – 550đ / sp</td>
                  <td className="p-4 font-semibold">650đ – 900đ / sp</td>
                  <td className="p-4 text-xs">Giảm 50% phí bản Cliche</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">10.000 – 50.000 sp</td>
                  <td className="p-4 font-bold text-blue-600">180đ – 250đ / sp</td>
                  <td className="p-4 font-bold text-blue-600">300đ – 420đ / sp</td>
                  <td className="p-4 font-bold text-blue-600">500đ – 700đ / sp</td>
                  <td className="p-4 text-xs font-semibold text-emerald-700">
                    Miễn phí 100% khuôn + Giao hàng nội thành
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Trên 50.000 sp / tháng</td>
                  <td className="p-4 font-extrabold text-orange-600">Từ 120đ – 180đ / sp</td>
                  <td className="p-4 font-extrabold text-orange-600">Từ 220đ – 300đ / sp</td>
                  <td className="p-4 font-extrabold text-orange-600">Báo giá hợp đồng năm</td>
                  <td className="p-4 text-xs font-semibold text-emerald-700">
                    Miễn phí khuôn Jig CNC + Công nợ linh hoạt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 italic">
            * Lưu ý: Bảng giá trên mang tính chất tham khảo cho các sản phẩm kích thước nhỏ/trung bình, dễ gá đặt. Đối với các sản phẩm cồng kềnh cần tháo lắp bao bì hoặc xử lý bề mặt đặc biệt (PP/PE/Thủy tinh/Kim loại), vui lòng gửi hình ảnh phôi qua Zalo 0901 836 344 để nhận báo giá chính xác.
          </p>
        </section>

        {/* 7. QUY TRÌNH 5 BƯỚC NHẬN GIA CÔNG IN TAMPON */}
        <section className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
            Quy Trình 5 Bước Gia Công In Tampon Chuẩn B2B Tại VNPIS
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Khảo Sát Phôi & File',
                desc: 'Nhận mẫu phôi thực tế và file thiết kế AI/Corel/PDF, kiểm tra chất liệu nhựa/kim loại và độ cong bề mặt.',
              },
              {
                step: '02',
                title: 'Khắc Bản & Pha Mực',
                desc: 'Chế tạo bản thép Cliche độ phân giải cao, chọn đầu bông silicone phù hợp và pha mực chuẩn mã màu Pantone.',
              },
              {
                step: '03',
                title: 'In Test & Kiểm Định 3M',
                desc: 'In mẫu thử miễn phí, sấy khô và test kéo băng keo 3M, ngâm cồn/nước gửi khách hàng ký duyệt mẫu chuẩn.',
              },
              {
                step: '04',
                title: 'Chạy Máy Tự Động',
                desc: 'Đưa phôi lên dây chuyền máy in Tampon tự động kết hợp Jig CNC, kiểm soát chất lượng từng khay hàng.',
              },
              {
                step: '05',
                title: 'KCS 100% & Bàn Giao',
                desc: 'Kiểm tra loại bỏ phế phẩm, đóng gói chống trầy xước theo quy cách nhà máy và giao hàng tận nơi.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-black text-blue-600 bg-blue-100 px-2.5 py-1 rounded-lg inline-block mb-3">
                  Bước {item.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Câu Hỏi Thường Gặp Về Dịch Vụ Gia Công In Tampon
            </h2>
            <p className="text-slate-600 text-sm">
              Giải đáp chi tiết các vấn đề kỹ thuật và chính sách báo giá in tampon tại xưởng VNPIS.
            </p>
          </div>
          <div className="space-y-4">
            {tamponFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base pr-6">{faq.question}</h3>
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-open:bg-blue-600 group-open:text-white transition-colors">
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

        {/* 9. CTA BANNER */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl shadow-xl mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bạn Cần Báo Giá Gia Công In Tampon &amp; In Mẫu Thử Miễn Phí?
          </h2>
          <p className="text-blue-100 text-base mb-8 max-w-2xl mx-auto">
            Liên hệ trực tiếp kỹ sư phụ trách xưởng VNPIS để nhận mẫu in test thử miễn phí trong 24h và bảng giá gia công tận xưởng tốt nhất tại TP.HCM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://zalo.me/0901836344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-white text-blue-600 hover:bg-slate-100 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon): 0901 836 344
            </a>
            <a
              href="https://zalo.me/0901826344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3.5 bg-blue-900 text-white hover:bg-blue-950 font-bold rounded-2xl shadow-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa): 0901 826 344
            </a>
          </div>
        </div>

        {/* 10. CONSULTATION FORM */}
        <ConsultationForm
          title="Đăng Ký In Mẫu Test Tampon Miễn Phí & Nhận Báo Giá"
          subtitle="Để lại thông tin sản phẩm cần gia công in tampon, kỹ sư VNPIS sẽ liên hệ tư vấn giải pháp mực in và báo giá trong 15 phút."
          pageTitle="Trang Gia Công In Tampon (/in-tampon)"
        />
      </div>
    </div>
  );
}
