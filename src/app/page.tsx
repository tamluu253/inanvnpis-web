export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Phone,
  Award,
  Truck,
  Layers,
  Zap,
  Clock,
  Printer,
  Sparkles,
  Package,
  HelpCircle,
  ChevronDown,
  Globe2,
  Settings,
} from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, In Mã QR Biến Đổi & Bao Bì #1 TP.HCM',
  },
  description:
    'Xưởng in ấn gia công VNPIS chuyên in tampon gia công, in lụa tròn 360 độ, in mã QR biến đổi VDP, in số nhảy serial, in bao bì hộp giấy, túi giấy, tem nhãn decal cho nhà máy tại Việt Nam, Lào & Campuchia.',
  keywords: [
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
    'in tampon gia công',
    'gia công in tampon',
    'in logo lên sản phẩm nhựa',
    'in chữ lên linh kiện điện tử',
    'in lụa gia công',
    'gia công in lụa',
    'in lụa chai lọ mỹ phẩm',
    'in lụa tròn 360 độ',
    'in kỹ thuật số dữ liệu biến đổi',
    'in mã QR biến đổi',
    'in tem QR code chống giả',
    'in số nhảy serial number',
    'in thẻ cào biến đổi',
    'in bao bì hộp giấy',
    'in túi giấy',
    'in tem nhãn decal',
    'gia công sau in',
    'pad printing service Vietnam Cambodia Laos',
  ],
  alternates: {
    canonical: 'https://www.inanvnpis.com',
  },
  openGraph: {
    title:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, In Mã QR Biến Đổi & Bao Bì #1 TP.HCM',
    description:
      'Xưởng in ấn gia công VNPIS chuyên gia công in tampon, in lụa tròn 360 độ, in KTS mã QR biến đổi VDP, in bao bì hộp giấy, túi giấy, tem nhãn decal tại Việt Nam, Lào & Campuchia.',
    url: 'https://www.inanvnpis.com',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, In Mã QR Biến Đổi & Bao Bì #1 TP.HCM',
    description:
      'Xưởng in ấn gia công VNPIS chuyên gia công in tampon, in lụa, in KTS QR Code biến đổi, in bao bì hộp giấy, túi giấy, tem nhãn decal uy tín tại TP.HCM.',
  },
};

const homeFaqs = [
  {
    question: 'Xưởng in ấn gia công VNPIS nhận gia công những dịch vụ và chất liệu nào?',
    answer:
      'Xưởng in ấn gia công VNPIS nhận in gia công trực tiếp lên mọi chất liệu phức tạp bao gồm: in tampon gia công (in logo lên sản phẩm nhựa ABS, PP, PE, HDPE, PET, in nắp chai, tô chén ly nhựa, in chữ lên linh kiện điện tử, in ống tiêm y tế, nút bấm silicone), in lụa gia công phẳng và in lụa tròn 360 độ (in lụa chai lọ mỹ phẩm, chai thủy tinh, bình giữ nhiệt, nhựa kim loại inox), in kỹ thuật số dữ liệu biến đổi (in mã QR biến đổi, in tem QR code chống giả, in số nhảy serial number, in thẻ cào biến đổi, in mã vạch biến đổi, in tem truy xuất nguồn gốc), cùng dịch vụ in bao bì hộp giấy, in túi giấy, in tem nhãn decal và gia công sau in (ép kim, ép nhũ nóng Hot Stamping, phủ UV định hình).',
  },
  {
    question: 'VNPIS có hỗ trợ in mẫu thử (Sample Test) và kiểm tra độ bám dính 3M miễn phí không?',
    answer:
      'Có 100%. Trước khi sản xuất hàng loạt, kỹ sư tại xưởng in ấn gia công VNPIS sẽ phân tích bề mặt phôi của khách hàng, xử lý Corona/Plasma/Flame và pha chế hệ mực chuyên dụng (Marabu, Afford, RUCO đạt chuẩn RoHS/REACH) để in mẫu test miễn phí trong 24h. Mẫu in được kiểm định bằng bài test kéo băng keo 3M Cross-cut (ASTM D3359 đạt chuẩn 5B) và ngâm cồn IPA 99% đảm bảo không bong tróc.',
  },
  {
    question: 'Xưởng VNPIS có cung ứng in ấn gia công cho nhà máy FDI tại Bình Dương, Bắc Ninh, Lào và Campuchia không?',
    answer:
      'Có. Bên cạnh đội xe tải giao nhận hàng ngày tại TP.HCM, Bình Dương, Đồng Nai, Long An và vận chuyển nhanh ra Bắc Ninh, Hà Nội, VNPIS là đối tác chiến lược cung ứng tem QR code chống giả, thẻ cào biến đổi, bao bì hộp giấy, gia công linh kiện nhựa và cung cấp khuôn bản Cliche/khung lụa/mực in xuyên biên giới cho các nhà máy tại Campuchia (Phnom Penh, Bavet, Sihanoukville) và Lào (Vientiane, Savannakhet).',
  },
  {
    question: 'Số lượng tối thiểu (MOQ) nhận in ấn gia công và thời gian giao hàng là bao lâu?',
    answer:
      'Xưởng in ấn VNPIS nhận đơn hàng linh hoạt từ lô nhỏ thử nghiệm (500 – 1.000 sản phẩm) đến các hợp đồng sản xuất công nghiệp hàng loạt (50.000 – 500.000+ sản phẩm/tháng). Với năng lực hơn 20 dây chuyền máy in tự động và bán tự động, thời gian trả hàng trung bình chỉ từ 2 – 5 ngày làm việc.',
  },
  {
    question: 'Làm thế nào để nhận báo giá in ấn gia công nhanh nhất tại xưởng VNPIS?',
    answer:
      'Quý khách chỉ cần gửi hình ảnh sản phẩm/phôi cần in, kích thước logo, số màu in và số lượng dự kiến qua Hotline/Zalo Mr. Tâm (0901 836 344 - In Tampon & In KTS QR Biến Đổi) hoặc Mr. Giang (0901 826 344 - In Lụa & Bao Bì Sau In). Đội ngũ kỹ thuật VNPIS sẽ phản hồi bảng báo giá gốc tận xưởng chỉ trong vòng 5 – 15 phút.',
  },
];

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-900/0 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest mb-6 border border-cyan-500/30 uppercase">
              <Factory className="w-4 h-4 text-cyan-400" />
              <span>Xưởng In Ấn Gia Công VNPIS — Chuẩn Công Nghiệp B2B Đông Dương</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Xưởng In Ấn Gia Công Công Nghiệp &amp; Dữ Liệu Biến Đổi VDP{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">
                #1 TP.HCM
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              <strong>Xưởng in ấn gia công VNPIS</strong> chuyên nhận{' '}
              <strong>in tampon gia công</strong> (in logo lên sản phẩm nhựa, linh kiện điện tử, nắp chai),{' '}
              <strong>in lụa gia công</strong> tròn 360° &amp; phẳng (chai lọ mỹ phẩm, thủy tinh, kim loại inox),{' '}
              <strong>in kỹ thuật số mã QR biến đổi (VDP) &amp; số nhảy serial chống giả</strong>, cùng giải pháp{' '}
              <strong>in bao bì hộp giấy, túi giấy, tem nhãn decal</strong> và{' '}
              <strong>gia công sau in</strong> cho nhà máy tại Việt Nam, Lào &amp; Campuchia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">In Mẫu Test Miễn Phí 24h</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Chuẩn ASTM D3359 3M 5B</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Công Suất 100.000 sp/Ngày</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0901836344"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-extrabold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/30 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" /> Tư Vấn In Tampon / KTS: 0901 836 344 (Mr. Tâm)
              </a>
              <a
                href="tel:0901826344"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-extrabold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-400/30 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" /> Tư Vấn In Lụa / Bao Bì: 0901 826 344 (Mr. Giang)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID (5 CARDS) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Hệ Sinh Thái Dịch Vụ In Ấn VNPIS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Dịch Vụ In Ấn Gia Công &amp; Giải Pháp Bao Bì Cốt Lõi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Hệ thống máy móc in công nghiệp hiện đại tại xưởng in ấn gia công VNPIS đáp ứng trọn gói từ in trực tiếp lên phôi sản phẩm đến in mã QR biến đổi chống giả, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: In Tampon */}
            <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl hover:border-orange-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Gia Công In Tampon (Pad Printing)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Chuyên <strong>in tampon gia công</strong> độ chính xác ±0.05mm trên bề mặt cong 3D, lồi lõm: <strong>in logo lên sản phẩm nhựa</strong>, <strong>in chữ lên linh kiện điện tử</strong>, <strong>in nắp chai</strong>, <strong>in ống tiêm y tế</strong>, <strong>in nút bấm nhựa silicone</strong>, ly tô chén nhựa PP/PET/ABS/HDPE.
              </p>
              <Link
                href="/in-tampon"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center mt-auto"
              >
                Xem Báo Giá In Tampon <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: In Lụa */}
            <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl hover:border-cyan-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Gia Công In Lụa Tròn 360° &amp; Phẳng</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Nhận <strong>in lụa gia công</strong> xoay <strong>in lụa tròn 360 độ</strong> lên <strong>chai lọ mỹ phẩm</strong>, <strong>in lụa chai thủy tinh</strong>, bình giữ nhiệt, ly nhựa và <strong>in lụa trên nhựa kim loại inox</strong>, mặt máy CNC, bao bì hộp giấy, túi giấy với lớp mực dày 20–100µm bền màu tuyệt đối.
              </p>
              <Link
                href="/in-lua"
                className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center mt-auto"
              >
                Xem Báo Giá In Lụa <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: In KTS & QR Code */}
            <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3. In Kỹ Thuật Số &amp; Mã QR Biến Đổi (VDP)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Chuyên <strong>in mã QR biến đổi</strong>, <strong>in tem QR code chống giả</strong>, <strong>in số nhảy serial number</strong>, <strong>in thẻ cào biến đổi</strong>, <strong>in mã vạch biến đổi</strong>, <strong>in tem truy xuất nguồn gốc</strong> và <strong>in phun date code số lô</strong> tốc độ 60m/phút tích hợp Camera Vision QC 100%.
              </p>
              <Link
                href="/in-ky-thuat-so"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center mt-auto"
              >
                Xem Báo Giá In KTS &amp; VDP <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal & Gia Công Sau In */}
            <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all flex flex-col lg:col-span-2">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                4. In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal &amp; Gia Công Sau In (Ép Kim, Ép Nhũ Nóng, Phủ UV)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Giải pháp sản xuất trọn gói <strong>in bao bì hộp giấy</strong> (hộp mỹ phẩm, hộp dược phẩm, hộp quà tặng cao cấp), <strong>in túi giấy</strong> (Kraft, Couche, Ivory), <strong>in tem nhãn decal</strong> (decal nhựa PVC, decal xi bạc, decal giấy, tem bảo hành) kết hợp công nghệ <strong>gia công sau in</strong> chuyên sâu: <strong>ép kim logo</strong>, <strong>ép nhũ nóng (Hot Stamping)</strong>, <strong>phủ UV định hình (Spot UV)</strong>, cán màng bóng/mờ và kéo nhũ cào bảo mật.
              </p>
              <div className="flex flex-wrap gap-4 mt-auto">
                <Link
                  href="/in-lua"
                  className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center"
                >
                  Tìm Hiểu In Bao Bì &amp; Gia Công Sau In <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center"
                >
                  Nhận Báo Giá Bao Bì &amp; Tem Nhãn <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 5: Vật Tư Mực In & Máy Móc */}
            <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">5. Máy In &amp; Vật Tư Ngành In B2B</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Phân phối máy in tampon, máy in lụa tự động, mực in công nghiệp đạt chuẩn RoHS/REACH (Marabu, Afford, RUCO), hộp mực TIJ, bản thép Cliche, đầu bông silicone &amp; dung môi chuẩn hãng.
              </p>
              <Link
                href="/products"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center mt-auto"
              >
                Xem Danh Mục Máy &amp; Vật Tư <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. AI-READY DIRECT COMPARISON TABLE: IN TAMPON VS IN LỤA VS IN KTS DỮ LIỆU BIẾN ĐỔI */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Bảng Đối Chiếu Kỹ Thuật Nhanh (Direct Summary)
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              So Sánh In Tampon vs In Lụa vs In KTS Dữ Liệu Biến Đổi (QR Biến Đổi, Số Nhảy)
            </h2>
            <p className="text-slate-600 text-sm">
              Lựa chọn đúng công nghệ in gia công theo hình dáng bề mặt phôi, độ dày màng mực và yêu cầu dữ liệu biến đổi của nhà máy:
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4">Tiêu Chí Kỹ Thuật</th>
                  <th className="p-4 text-orange-300">Gia Công In Tampon (Pad Printing)</th>
                  <th className="p-4 text-cyan-300">Gia Công In Lụa Tròn 360° &amp; Phẳng</th>
                  <th className="p-4 text-purple-300">In KTS Dữ Liệu Biến Đổi (VDP / QR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Bề mặt &amp; Hình học phôi</td>
                  <td className="p-4">Bề mặt cong 3D, lõm sâu, lồi lõm, gân sần, góc khuất nhỏ</td>
                  <td className="p-4">Trụ tròn/côn xoay 360° (Ø10–250mm) hoặc mặt phẳng lớn</td>
                  <td className="p-4">Tem nhãn decal cuộn/tờ, hộp giấy phẳng, thẻ cào, nắp chai</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Ứng dụng phổ biến nhất</td>
                  <td className="p-4">In logo lên sản phẩm nhựa, linh kiện điện tử, nắp chai, ống tiêm y tế, nút bấm silicone</td>
                  <td className="p-4">In lụa chai lọ mỹ phẩm, chai thủy tinh, bình giữ nhiệt, nhựa kim loại inox, hộp giấy túi giấy</td>
                  <td className="p-4">In mã QR biến đổi, tem QR code chống giả, số nhảy serial number, thẻ cào, mã vạch GS1, date/lot</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Độ chính xác / Độ dày mực</td>
                  <td className="p-4 font-semibold">Chồng màu ±0.05mm, nét mảnh 0.08mm, mực 6–15µm</td>
                  <td className="p-4 font-semibold">Màng mực siêu dày 20–100µm, che phủ 100% nền tối</td>
                  <td className="p-4 font-semibold">600–1200 DPI, đọc tốt QR 3x3mm chuẩn ISO 15415 Grade A</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Khả năng thay đổi dữ liệu</td>
                  <td className="p-4">Nội dung cố định theo bản thép Cliche (1–6 màu)</td>
                  <td className="p-4">Nội dung cố định theo khung lưới lụa (120T–420T)</td>
                  <td className="p-4 text-emerald-700 font-bold">Biến đổi 100% từng sản phẩm + Camera Vision QC</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">Đơn giá B2B tham khảo</td>
                  <td className="p-4 font-extrabold text-orange-600">120đ – 500đ / sp</td>
                  <td className="p-4 font-extrabold text-cyan-600">200đ – 800đ / sp</td>
                  <td className="p-4 font-extrabold text-purple-600">80đ – 350đ / mã</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. NĂNG LỰC XƯỞNG IN ẤN GIA CÔNG VNPIS & GIẢI PHÁP GIA CÔNG SAU IN */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
              Công Nghệ Đa Vật Liệu &amp; Hoàn Thiện Cao Cấp
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Năng Lực Xưởng In Ấn Gia Công VNPIS &amp; Giải Pháp Gia Công Sau In
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Không chỉ dừng lại ở các bề mặt dễ in, <strong>xưởng in ấn gia công VNPIS</strong> làm chủ công nghệ xử lý bề mặt (Corona, Plasma, Flame Treatment) và hóa chất mực in chuyên biệt cho từng nhóm vật liệu công nghiệp và bao bì thương mại.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Đa dạng vật liệu nhận in gia công */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Đa Dạng Chất Liệu Nhận In Ấn Gia Công
                  </h3>
                  <p className="text-xs text-slate-500">Độ bám dính đạt chuẩn 3M Cross-cut 5B, kháng cồn &amp; hóa chất</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    1. Nhựa Kỹ Thuật &amp; Nhựa Gia Dụng (ABS, PP, PE, HDPE, PET, PC, Nylon, Silicone):
                  </strong>
                  Nhận in logo lên sản phẩm nhựa, in chữ lên linh kiện điện tử, thiết bị điện gia dụng, in nắp chai nước giải khát, in ống tiêm y tế, nút bấm nhựa silicone, tô chén ly nhựa dùng một lần và phụ tùng ô tô – xe máy.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    2. Thủy Tinh, Kim Loại Nhôm Sơn Tĩnh Điện, Inox &amp; Gỗ:
                  </strong>
                  Sử dụng hệ mực 2 thành phần (2-Component Ink) đóng rắn nhiệt và mực UV chuyên dụng để in lụa chai lọ mỹ phẩm, in lụa chai thủy tinh, bình giữ nhiệt inox, mặt máy nhôm anodized và hộp gỗ quà tặng.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    3. Bao Bì Hộp Giấy, Túi Giấy &amp; Tem Nhãn Decal Chống Giả:
                  </strong>
                  Chuyên <strong>in bao bì hộp giấy</strong> (giấy Ivory, Bristol, Duplex, Carton lạnh), <strong>in túi giấy</strong> doanh nghiệp và <strong>in tem QR code chống giả</strong>, tem truy xuất nguồn gốc, thẻ cào biến đổi phục vụ đóng gói xuất khẩu.
                </div>
              </div>
            </div>

            {/* Column 2: Giải pháp Gia Công Sau In */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Giải Pháp Gia Công Sau In (Post-Press Finishing)
                  </h3>
                  <p className="text-xs text-slate-500">Nâng tầm thẩm mỹ và giá trị nhận diện thương hiệu cao cấp</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    1. Ép Kim &amp; Ép Nhũ Nóng (Hot Stamping):
                  </strong>
                  Gia công ép nhũ vàng, nhũ bạc, nhũ hologram ánh kim trực tiếp lên nắp hũ mỹ phẩm, thân chai nhựa/thủy tinh, cũng như ép kim logo sang trọng trên bề mặt <strong>bao bì hộp giấy</strong>, <strong>túi giấy</strong> và thiệp/thẻ bài cao cấp.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    2. Phủ UV Định Hình (Spot UV) &amp; UV Cát / UV Nổi:
                  </strong>
                  Ứng dụng kỹ thuật kéo lụa UV cục bộ tạo hiệu ứng bóng gương nổi 3D, UV cát nhám hoặc phủ bóng toàn phần trên hộp giấy mỹ phẩm, bìa catalogue, <strong>tem nhãn decal</strong> và bề mặt nhựa cao cấp.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    3. Cán Màng, Bế Nổi, Dập Chìm &amp; In Mã Bảo Mật Phủ Cào:
                  </strong>
                  Hoàn thiện đồng bộ các khâu <strong>gia công sau in</strong>: cán màng BOPP bóng/mờ chống thấm, bế khuôn tự động, bồi hộp cứng và kéo nhũ cào bảo mật (Scratch-off) đè lên mã QR Code trúng thưởng/chống giả.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. B2B INDOCHINA & FDI SUPPLY CHAIN SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold tracking-widest mb-4 border border-emerald-500/30 uppercase">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              <span>Indochina B2B Industrial Printing Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Cung Ứng In Ấn Gia Công Cho Nhà Máy FDI Tại Việt Nam, Lào &amp; Campuchia
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              VNPIS vận hành chuỗi cung ứng in ấn công nghiệp xuyên biên giới, đáp ứng tiêu chuẩn kiểm định khắt khe của các tập đoàn FDI Nhật Bản, Hàn Quốc, Âu – Mỹ, Đài Loan và Trung Quốc tại toàn khu vực Đông Dương.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 border border-slate-700/80 p-7 rounded-3xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-400 block mb-2">
                Việt Nam (Miền Nam &amp; Miền Bắc)
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                TP.HCM, Bình Dương, Đồng Nai, Long An, Bắc Ninh, Hà Nội
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Đội xe tải VNPIS giao nhận phôi và thành phẩm tận xưởng hàng ngày tại các KCN VSIP, Mỹ Phước, Sóng Thần, Amata, Long Hậu, Tân Tạo và vận chuyển nhanh Bắc – Nam cho các nhà máy điện tử tại Bắc Ninh, Bắc Giang, Hải Phòng.
              </p>
              <div className="text-xs text-emerald-400 font-bold">
                ✓ Hỗ trợ mang máy KTS VDP đến in trực tiếp tại kho khách hàng
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-700/80 p-7 rounded-3xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-400 block mb-2">
                Campuchia (Cambodia SEZs)
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Phnom Penh, Bavet (Manhattan SEZ), Sihanoukville
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Cung ứng nhanh qua cửa khẩu Mộc Bài chỉ từ 6–24 giờ: nhận in tem QR code chống giả, thẻ cào biến đổi, tem nhãn decal cuộn, bao bì hộp giấy, gia công in tampon/in lụa linh kiện nhựa và cung cấp bản thép Cliche, khung lụa, mực in chuẩn RoHS.
              </p>
              <div className="text-xs text-cyan-300 font-bold">
                ✓ Tư vấn kỹ thuật đa ngôn ngữ: Việt – Anh – Trung – Khmer
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-700/80 p-7 rounded-3xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 block mb-2">
                Lào (Laos Economic Zones)
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Vientiane, Savannakhet (Savan-Seno SEZ), Pakse
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Giải quyết bài toán thiếu hụt nhà thầu in công nghiệp kỹ thuật cao tại Lào: nhận sản xuất trọn gói tem truy xuất nguồn gốc, tem bảo hành, bao bì hộp giấy, in nắp chai, vỏ thiết bị và xuất khẩu trọn bộ máy in + khuôn gá Jig CNC + vật tư tiêu hao.
              </p>
              <div className="text-xs text-purple-300 font-bold">
                ✓ Đóng gói chuẩn xuất khẩu, đầy đủ chứng từ CO/CQ &amp; MSDS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUY TRÌNH NHẬN IN ẤN GIA CÔNG CHUẨN ISO (5 BƯỚC) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Quy Trình Kiểm Soát Chất Lượng B2B
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Quy Trình Nhận In Ấn Gia Công Chuẩn ISO (5 Bước)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Mọi đơn hàng tại <strong>xưởng in ấn gia công VNPIS</strong> đều tuân thủ quy trình 5 bước khép kín, đảm bảo tỷ lệ hao hụt thấp nhất và chất lượng đồng đều 100% giữa mẫu duyệt và hàng sản xuất.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: 'Bước 01',
                title: 'Tiếp Nhận Mẫu & File',
                desc: 'Tiếp nhận phôi sản phẩm thực tế, file thiết kế Vector (AI, PDF, Corel) và yêu cầu kỹ thuật từ khách hàng.',
              },
              {
                step: 'Bước 02',
                title: 'Test Mực & Độ Bám Dính 3M Miễn Phí',
                desc: 'Xử lý bề mặt, pha mực chuẩn Pantone, in mẫu thử miễn phí trong 24h và kiểm định độ bám dính bằng băng keo 3M.',
              },
              {
                step: 'Bước 03',
                title: 'Duyệt Mẫu Ký Chuẩn (Golden Sample)',
                desc: 'Gửi mẫu thực tế để khách hàng kiểm tra và ký duyệt mẫu chuẩn (Golden Sample) làm căn cứ nghiệm thu.',
              },
              {
                step: 'Bước 04',
                title: 'Sản Xuất Hàng Loạt Tự Động',
                desc: 'Chế tạo khuôn gá (Jig) CNC chính xác, vận hành dây chuyền in Tampon, in Lụa, in KTS công suất 100.000 sp/ngày.',
              },
              {
                step: 'Bước 05',
                title: 'QC 100% & Giao Hàng Tận Xưởng',
                desc: 'Kiểm tra ngoại quan & quét kiểm mã vạch 100%, đóng gói chống trầy xước và giao hàng tận nhà máy đúng tiến độ.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative flex flex-col hover:border-blue-500 transition-all"
              >
                <span className="inline-block text-xs font-black text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING TABLE SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Bảng Giá Tham Khảo 2026
            </span>
            <h2 className="text-3xl font-black mt-2">
              Bảng Giá Tham Khảo In Ấn Gia Công Tận Xưởng TP.HCM
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Đơn giá in ấn gia công thực tế phụ thuộc vào số lượng đơn hàng, số màu in, kích thước logo và độ khó của bề mặt phôi.
            </p>
          </div>

          <div className="overflow-x-auto bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                  <th className="pb-4 pr-4">Loại Hình In Ấn Gia Công</th>
                  <th className="pb-4 pr-4">Chất Liệu &amp; Sản Phẩm Điển Hình</th>
                  <th className="pb-4 pr-4">Số Lượng Đơn</th>
                  <th className="pb-4 text-right">Đơn Giá Tham Khảo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">Gia Công In Tampon (Pad Print)</td>
                  <td className="py-4 pr-4 text-slate-400">
                    In logo lên sản phẩm nhựa PP/PET/ABS/HDPE, nắp chai, linh kiện điện tử, ống tiêm y tế
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 1.000 — 100.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-orange-400">120đ — 450đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">Gia Công In Lụa Tròn 360° &amp; Phẳng</td>
                  <td className="py-4 pr-4 text-slate-400">
                    In lụa chai lọ mỹ phẩm, chai thủy tinh, bình giữ nhiệt, nhựa kim loại inox, túi giấy
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 500 — 50.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-cyan-400">200đ — 600đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">
                    In KTS Mã QR Biến Đổi (VDP) &amp; Số Nhảy Serial
                  </td>
                  <td className="py-4 pr-4 text-slate-400">
                    Tem QR code chống giả, thẻ cào biến đổi, tem truy xuất nguồn gốc, bao bì hộp giấy, nắp chai
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 5.000 — 200.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-emerald-400">80đ — 350đ / mã</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">
                    In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn &amp; Gia Công Sau In
                  </td>
                  <td className="py-4 pr-4 text-slate-400">
                    Hộp giấy Ivory/Couche, túi giấy Kraft, decal cuộn, ép kim, phủ UV định hình
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 1.000 — 100.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-purple-400">250đ — 1.500đ / sp</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="font-bold text-white text-base sm:text-lg">
                Cần Báo Giá Chính Xác Cho Đơn Hàng Gia Công Của Bạn?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Gửi kích thước &amp; hình ảnh mẫu qua Zalo để kỹ sư VNPIS báo giá gốc tận xưởng trong 5 phút.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="https://zalo.me/0901836344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs px-5 py-3.5 rounded-full transition-all shadow-lg text-center"
              >
                Zalo Mr. Tâm: 0901 836 344 (In Tampon / KTS)
              </a>
              <a
                href="https://zalo.me/0901826344"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-5 py-3.5 rounded-full transition-all shadow-lg text-center"
              >
                Zalo Mr. Giang: 0901 826 344 (In Lụa / Bao Bì)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE INANVNPIS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Cam Kết Chất Lượng Từ VNPIS
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Vì Sao Hơn 500+ Nhà Máy Chọn Xưởng In Ấn Gia Công VNPIS?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">1. In Mẫu Test Miễn Phí 100%</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hỗ trợ ra mẫu in test thử miễn phí trên đúng sản phẩm thực tế của khách hàng trong 24h trước khi ký hợp đồng in ấn gia công hàng loạt.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                2. Mực In Đạt Chuẩn RoHS &amp; Test 3M
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sử dụng 100% mực in công nghiệp cao cấp (Marabu, Afford, RUCO) có chứng nhận RoHS/REACH, vượt qua bài kiểm tra băng keo 3M và kháng dung môi/hóa chất.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200">
              <Truck className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                3. Giao Nhận Tận Xưởng Việt Nam – Lào – Campuchia
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Đội ngũ xe tải giao nhận tận nơi tại KCN TP.HCM, Bình Dương, Đồng Nai, Long An, Bắc Ninh và xuất khẩu đường bộ sang Phnom Penh, Bavet, Vientiane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Giải Đáp Thắc Mắc B2B</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              Câu Hỏi Thường Gặp Về Dịch Vụ In Ấn Gia Công
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg pr-6">
                    {faq.question}
                  </h3>
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

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              Xem toàn bộ Thư Viện Câu Hỏi Thường Gặp (FAQ) <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
