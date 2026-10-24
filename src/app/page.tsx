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
  FileCheck2,
  Settings,
} from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, Bao Bì & Sau In #1 TP.HCM',
  },
  description:
    'Xưởng in ấn gia công VNPIS chuyên gia công in tampon, in lụa, in KTS QR Code, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in uy tín tại TP.HCM.',
  keywords: [
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
    'in ấn VNPIS',
    'gia công in tampon',
    'gia công in lụa',
    'in kỹ thuật số',
    'in bao bì hộp giấy',
    'in túi giấy',
    'in tem nhãn decal',
    'gia công sau in',
    'ép kim ép nhũ nóng',
    'phủ UV định hình',
  ],
  alternates: {
    canonical: 'https://www.inanvnpis.com',
  },
  openGraph: {
    title:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, Bao Bì & Sau In #1 TP.HCM',
    description:
      'Xưởng in ấn gia công VNPIS chuyên gia công in tampon, in lụa, in KTS QR Code, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in uy tín tại TP.HCM.',
    url: 'https://www.inanvnpis.com',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'In Ấn Gia Công VNPIS | Xưởng Gia Công In Tampon, In Lụa, Bao Bì & Sau In #1 TP.HCM',
    description:
      'Xưởng in ấn gia công VNPIS chuyên gia công in tampon, in lụa, in KTS QR Code, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in uy tín tại TP.HCM.',
  },
};

const homeFaqs = [
  {
    question: 'Xưởng in ấn gia công VNPIS nhận gia công những dịch vụ và chất liệu nào?',
    answer:
      'Xưởng in ấn gia công VNPIS nhận in gia công trực tiếp lên mọi chất liệu phức tạp bao gồm: gia công in tampon (trên nhựa ABS, PP, PE, HDPE, PET, nắp chai, tô chén ly nhựa, linh kiện điện tử), gia công in lụa phẳng và tròn (chai lọ mỹ phẩm, bình giữ nhiệt, tấm kim loại, mặt máy CNC), in kỹ thuật số dữ liệu biến đổi (QR Code chống giả, số nhảy serial, mã vạch GS1), cùng dịch vụ in bao bì hộp giấy, in túi giấy, in tem nhãn decal và gia công sau in (ép kim, ép nhũ nóng Hot Stamping, phủ UV định hình, cán màng).',
  },
  {
    question: 'VNPIS có hỗ trợ in mẫu thử (Sample Test) và kiểm tra độ bám dính 3M miễn phí không?',
    answer:
      'Có 100%. Trước khi sản xuất hàng loạt, kỹ sư tại xưởng in ấn gia công VNPIS sẽ phân tích bề mặt phôi của khách hàng, pha chế hệ mực chuyên dụng (Marabu, Afford, RUCO đạt chuẩn RoHS/REACH) và tiến hành in mẫu test miễn phí trong 24h. Mẫu in được kiểm định bằng bài test kéo băng keo 3M Cross-cut (đạt chuẩn 5B) và ngâm cồn/nước để đảm bảo không bong tróc.',
  },
  {
    question: 'Số lượng tối thiểu (MOQ) nhận in ấn gia công và thời gian giao hàng là bao lâu?',
    answer:
      'Xưởng in ấn VNPIS nhận đơn hàng linh hoạt từ lô nhỏ thử nghiệm (500 – 1.000 sản phẩm) đến các hợp đồng sản xuất công nghiệp hàng loạt (50.000 – 500.000+ sản phẩm/tháng). Với năng lực hơn 20 dây chuyền máy in tự động và bán tự động, thời gian trả hàng trung bình chỉ từ 2 – 5 ngày làm việc và hỗ trợ xe tải giao nhận tận nơi tại TP.HCM, Bình Dương, Đồng Nai, Long An.',
  },
  {
    question: 'Dịch vụ in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in tại VNPIS có ưu điểm gì?',
    answer:
      'VNPIS cung cấp giải pháp trọn gói từ in ấn bao bì hộp giấy, in túi giấy kraft/couche/ivory, in tem nhãn decal cuộn/tờ cho đến các công đoạn gia công sau in cao cấp: ép kim logo, ép nhũ nóng (Hot Stamping) lên hộp mỹ phẩm & nắp chai, phủ UV định hình (Spot UV) làm nổi bật chi tiết thương hiệu, cán màng bóng/mờ và bế thành phẩm chính xác cao.',
  },
  {
    question: 'Làm thế nào để nhận báo giá in ấn gia công nhanh nhất tại xưởng VNPIS?',
    answer:
      'Quý khách chỉ cần gửi hình ảnh sản phẩm/phôi cần in, kích thước logo, số màu in và số lượng dự kiến qua Hotline/Zalo Mr. Tâm (0901 836 344 - In Tampon & KTS) hoặc Mr. Giang (0901 826 344 - In Lụa & Bao Bì). Đội ngũ kỹ thuật VNPIS sẽ phản hồi bảng báo giá gốc tận xưởng chỉ trong vòng 5 – 15 phút.',
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
              <span>Xưởng In Ấn Gia Công VNPIS — Chuẩn Công Nghiệp B2B</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Xưởng In Ấn Gia Công Công Nghiệp &amp; Bao Bì Theo Yêu Cầu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">
                #1 TP.HCM
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              <strong>Xưởng in ấn gia công VNPIS</strong> chuyên nhận{' '}
              <strong>gia công in tampon</strong>, <strong>gia công in lụa</strong> tròn/phẳng,{' '}
              <strong>in kỹ thuật số QR Code biến đổi (VDP)</strong>, cùng giải pháp{' '}
              <strong>in bao bì hộp giấy, in túi giấy, in tem nhãn decal</strong> và{' '}
              <strong>gia công sau in</strong> (ép kim, ép nhũ nóng, phủ UV định hình) trực tiếp trên mọi chất liệu nhựa ABS/PP/PE/HDPE, thủy tinh, kim loại, gỗ.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">In Mẫu Test Miễn Phí 24h</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Test 3M Bám Dính Tuyệt Đối</span>
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
              Hệ thống máy móc in công nghiệp hiện đại tại xưởng in ấn gia công VNPIS đáp ứng trọn gói từ in trực tiếp lên phôi sản phẩm đến in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in.
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
                Chuyên gia công in logo, thông số kỹ thuật sắc nét (±0.05mm) trên bề mặt cong 3D, lồi lõm: tô chén ly nhựa PP/PET, nắp chai, linh kiện điện tử, vỏ thiết bị y tế, phím nhựa ABS, PP, PE, HDPE.
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
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Gia Công In Lụa Tròn &amp; Phẳng</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                Nhận gia công in lụa xoay tròn 360° lên chai lọ mỹ phẩm, hũ thủy tinh, bình giữ nhiệt, ly nhựa và in lụa phẳng trên mặt máy CNC, tấm kim loại, nhựa phẳng với lớp mực dày, bền màu tuyệt đối.
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
                3. In Kỹ Thuật Số &amp; QR Code Biến Đổi (VDP)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                In mã QR Code chống giả, barcode chuẩn GS1, số nhảy serial biến đổi bằng công nghệ UV Single Pass &amp; TIJ/CIJ tốc độ 60m/phút, tích hợp Camera Vision kiểm tra mã lỗi tự động 100%.
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
                Giải pháp sản xuất trọn gói <strong>in bao bì hộp giấy</strong> (hộp mỹ phẩm, hộp dược phẩm, hộp quà tặng cao cấp), <strong>in túi giấy</strong> (Kraft, Couche, Ivory), <strong>in tem nhãn decal</strong> (decal nhựa PVC, decal xi bạc, decal giấy, tem bảo hành) kết hợp công nghệ <strong>gia công sau in</strong> chuyên sâu: <strong>ép kim logo</strong>, <strong>ép nhũ nóng (Hot Stamping)</strong>, <strong>phủ UV định hình (Spot UV)</strong>, cán màng bóng/mờ và bế nổi thương hiệu.
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
                Phân phối máy in tampon, máy in lụa tự động, mực in công nghiệp đạt chuẩn RoHS/REACH (Marabu, Afford, RUCO), hộp mực TIJ, bản thép Cliche, quả تی silicone &amp; dung môi chuẩn hãng.
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
                    1. Nhựa Kỹ Thuật &amp; Nhựa Gia Dụng (ABS, PP, PE, HDPE, PET, PC, Nylon):
                  </strong>
                  Nhận in gia công trên vỏ linh kiện điện tử, thiết bị điện gia dụng, nắp chai nước giải khát, tô chén ly nhựa dùng một lần, thùng sơn, can nhựa hóa chất và phụ tùng ô tô – xe máy.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    2. Thủy Tinh, Kim Loại Nhôm Sơn Tĩnh Điện, Inox &amp; Gỗ:
                  </strong>
                  Sử dụng hệ mực 2 thành phần (2-Component Ink) đóng rắn nhiệt và mực UV chuyên dụng để in trên chai lọ nước hoa, hũ mỹ phẩm thủy tinh, bình giữ nhiệt inox, mặt máy nhôm аноdized và hộp gỗ quà tặng.
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <strong className="text-slate-900 block mb-1">
                    3. Bao Bì Hộp Giấy, Túi Giấy &amp; Tem Nhãn Decal Công Nghiệp:
                  </strong>
                  Chuyên <strong>in bao bì hộp giấy</strong> (giấy Ivory, Bristol, Duplex, Carton lạnh), <strong>in túi giấy</strong> thời trang/doanh nghiệp và <strong>in tem nhãn decal</strong> (decal nhựa sữa, decal trong, decal xi bạc, tem nhãn mã vạch cuộn) phục vụ đóng gói xuất khẩu.
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
                    Tô chén ly nhựa PP/PET, nắp chai, nhựa ABS/HDPE, linh kiện điện tử
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 1.000 — 100.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-orange-400">150đ — 450đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">Gia Công In Lụa Tròn &amp; Phẳng</td>
                  <td className="py-4 pr-4 text-slate-400">
                    Chai lọ mỹ phẩm, bình giữ nhiệt, túi giấy, màng nhựa, mặt máy CNC
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 500 — 50.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-cyan-400">200đ — 600đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-bold text-white">
                    In KTS QR Code Dữ Liệu Biến Đổi (VDP)
                  </td>
                  <td className="py-4 pr-4 text-slate-400">
                    Tem nhãn decal chống giả, bao bì hộp giấy, thẻ cào, nắp chai
                  </td>
                  <td className="py-4 pr-4 text-slate-400">Từ 5.000 — 200.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-emerald-400">100đ — 350đ / sp</td>
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
                3. Giao Nhận Tận Xưởng Đúng Tiến Độ
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Đội ngũ xe tải giao nhận tận nơi cho các nhà máy tại KCN TP.HCM, Bình Dương, Đồng Nai, Long An, cam kết đáp ứng tiến độ đơn hàng gấp.
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
