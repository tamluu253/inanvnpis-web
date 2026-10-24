import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  Factory,
  Layers,
  Sparkles,
  FileCheck2,
  Cpu,
} from 'lucide-react';
import ConsultationForm from '@/components/ui/ConsultationForm';

export interface LandingPageProps {
  title: string;
  subtitle?: string;
  category?: string;
  externalCtaUrl?: string;
  externalCtaText?: string;
  painPoints?: string[];
  solutions?: (string | { title: string; description: string; icon?: string })[];
  industries?: (string | { name: string; icon?: string })[];
  features?: { title: string; desc: string }[];
  image?: string;
}

const DEFAULT_PAIN_POINTS = [
  'Chất lượng in không ổn định: Mực in bị nhòe, bong tróc trên các vật liệu khó bám dính như nhựa PP/PE, PET, Silicone, kim loại sơn tĩnh điện hay thủy tinh.',
  'Chi phí vận hành & Downtime cao: Máy móc hay hóc hỏng, thiếu vật tư tiêu hao và phụ tùng thay thế làm gián đoạn dây chuyền và kéo dài tiến độ giao hàng.',
  'Rào cản tiêu chuẩn xuất khẩu: Khách hàng FDI yêu cầu kiểm nghiệm hóa chất nghiêm ngặt theo tiêu chuẩn an toàn EU RoHS 10, REACH SVHC và độ bám dính ASTM D3359.',
];

const DEFAULT_SOLUTIONS = [
  {
    title: 'Độ Bám Dính Chuẩn Quốc Tế (5B - ASTM D3359)',
    description:
      'Cam kết vượt qua các bài test khắc nghiệt: test kẻ ô băng keo 3M, ngâm cồn công nghiệp 90°, chịu nhiệt và chống trầy xước cơ học.',
  },
  {
    title: 'Tối Ưu 30% - 40% Chi Phí Vận Hành (OPEX)',
    description:
      'Cung ứng trực tiếp mực in, dung môi, bản khắc cliché, quả tăm bông silicone và dịch vụ in ấn gia công tận gốc tại xưởng VNPIS.',
  },
  {
    title: 'Đạt Chuẩn An Toàn Xuất Khẩu RoHS & REACH',
    description:
      'Đầy đủ hồ sơ kỹ thuật TDS, MSDS và chứng nhận kiểm định SGS không chứa kim loại nặng, an toàn cho bao bì thực phẩm, y tế và đồ chơi trẻ em.',
  },
  {
    title: 'Hỗ Trợ Kỹ Thuật & In Mẫu Test Miễn Phí 24/7',
    description:
      'Phòng Lab R&D tại TP.HCM sẵn sàng test mẫu thực tế trên phôi của khách hàng và cử kỹ sư xuống nhà máy cân chỉnh thông số.',
  },
];

const DEFAULT_INDUSTRIES = [
  'Bao Bì Hộp Giấy & Túi Giấy Cao Cấp',
  'Tem Nhãn Decal & Mã Vạch QR Code',
  'Nhựa Công Nghiệp & Linh Kiện Điện Tử',
  'Mỹ Phẩm, Dược Phẩm & Thiết Bị Y Tế',
  'Thực Phẩm & Đồ Uống (F&B)',
  'Kim Loại, Thủy Tinh & Gia Dụng',
  'Dây Cáp Điện & Ống Nhựa',
  'Đồ Chơi, Quà Tặng & Gia Công Sau In',
];

const DEFAULT_FEATURES = [
  {
    title: 'In Tampon (Pad Printing) Độ Chính Xác Cao',
    desc: 'In logo, thông số kỹ thuật, vạch chia độ sắc nét trên bề mặt cong, lồi lõm, rãnh sâu của linh kiện nhựa, kim loại, y tế.',
  },
  {
    title: 'In Lụa (Screen Printing) Phẳng & Tròn Tự Động',
    desc: 'Lớp mực dày, độ che phủ (opacity) tuyệt đối, bền màu trước hóa chất và ma sát trên chai lọ mỹ phẩm, thủy tinh, mặt kính, bảng mạch.',
  },
  {
    title: 'In Kỹ Thuật Số UV, CIJ, TIJ & Laser Coding',
    desc: 'In phun date code, số lô, mã vạch 1D/2D, QR Code biến đổi (VDP) tốc độ cao trực tiếp trên dây chuyền đóng gói công nghiệp.',
  },
  {
    title: 'In Ấn Bao Bì, Tem Nhãn & Gia Công Sau In',
    desc: 'Giải pháp toàn diện cho hộp giấy, túi giấy, tem nhãn decal cuộn, kết hợp ép kim, phủ UV định hình, cán màng và bế nổi sắc sảo.',
  },
];

export default function LandingPage({
  title,
  subtitle,
  category,
  externalCtaUrl,
  externalCtaText,
  painPoints,
  solutions,
  industries,
  features,
  image = '/images/pad-printing-cups.jpg',
}: LandingPageProps) {
  const displayPainPoints =
    painPoints && painPoints.length > 0 ? painPoints : DEFAULT_PAIN_POINTS;
  const displaySolutions =
    solutions && solutions.length > 0 ? solutions : DEFAULT_SOLUTIONS;
  const displayIndustries =
    industries && industries.length > 0 ? industries : DEFAULT_INDUSTRIES;
  const displayFeatures =
    features && features.length > 0 ? features : DEFAULT_FEATURES;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {category && (
              <span className="inline-block py-1.5 px-4 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider mb-6 border border-orange-500/30 uppercase">
                {category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {subtitle ||
                'Giải pháp in ấn gia công công nghiệp và cung ứng thiết bị, vật tư in Tampon, in Lụa, in UV, in phun CIJ/TIJ toàn diện từ VNPIS. Tối ưu quy trình, cam kết độ bám dính chuẩn quốc tế và tiết kiệm chi phí vận hành cho nhà máy B2B.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {externalCtaUrl ? (
                <a
                  href={externalCtaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30"
                >
                  {externalCtaText || 'Xem Chi Tiết'}{' '}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              ) : (
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30"
                >
                  Nhận Báo Giá & Test Mẫu Miễn Phí{' '}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              )}
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
              >
                Khám Phá Giải Pháp Kỹ Thuật
              </Link>
            </div>

            {/* Quick B2B Hotline Bar */}
            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <a
                href="tel:0901836344"
                className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>
                  Hotline Kỹ Thuật (Mr. Tâm):{' '}
                  <strong className="text-white">0901 836 344</strong>
                </span>
              </a>
              <span className="hidden sm:inline text-slate-700">|</span>
              <a
                href="tel:0901826344"
                className="inline-flex items-center gap-2 hover:text-orange-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>
                  Tư Vấn Dự Án B2B (Mr. Giang):{' '}
                  <strong className="text-white">0901 826 344</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Các Thách Thức Sản Xuất & In Ấn Thường Gặp
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-600">
              Những bài toán kỹ thuật khiến nhiều nhà máy sản xuất tốn kém chi phí phế phẩm và chậm tiến độ giao hàng.
            </p>
          </div>
          <div
            className={`grid md:grid-cols-${
              displayPainPoints.length === 4 ? '2 lg:grid-cols-4' : '3'
            } gap-8 max-w-6xl mx-auto`}
          >
            {displayPainPoints.map((point, index) => {
              const badgeColors = [
                'bg-red-100 text-red-600',
                'bg-orange-100 text-orange-600',
                'bg-blue-100 text-blue-600',
                'bg-purple-100 text-purple-600',
              ];
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${
                      badgeColors[index % badgeColors.length]
                    } rounded-xl flex items-center justify-center mb-6 text-xl font-bold`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    Vấn Đề Thực Tế #{index + 1}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & VISUAL SHOWCASE CARD */}
      <section id="solutions" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">
                Tiêu Chuẩn Kỹ Thuật VNPIS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Giải Pháp Tối Ưu Từ Chuyên Gia In Công Nghiệp
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                VNPIS kết hợp năng lực nghiên cứu hóa học vật liệu (mực in, dung môi, primer) cùng hệ thống máy móc tự động hóa để giải quyết triệt để bài toán in ấn của doanh nghiệp.
              </p>
              <ul className="space-y-5">
                {displaySolutions.map((item, idx) => {
                  if (typeof item === 'string') {
                    return (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    );
                  }
                  return (
                    <li
                      key={idx}
                      className="flex items-start bg-slate-800/70 p-4 rounded-xl border border-slate-700/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-3.5 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Professional Visual Showcase Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                <div className="relative aspect-video bg-slate-950 overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} - Giải pháp in ấn gia công và vật tư công nghiệp VNPIS`}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow">
                      ISO 9001 & ASTM D3359 5B
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow">
                      EU RoHS 10 & REACH SVHC
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-semibold text-white">
                      Hệ Sinh Thái In Ấn Gia Công & Vật Tư Công Nghiệp VNPIS
                    </p>
                    <p className="text-xs text-slate-300">
                      Kiểm định độ bám dính, kháng cồn 90° và chuẩn hóa màu sắc Delta E &lt; 2 tại Lab Center TP.HCM
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8 text-orange-400 shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400">Cam Kết Bám Dính</div>
                        <div className="text-sm font-bold text-white">Test 3M & Cồn 90°</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-3">
                      <Award className="w-8 h-8 text-blue-400 shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400">Chứng Nhận An Toàn</div>
                        <div className="text-sm font-bold text-white">Đầy Đủ COA / MSDS</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Khám Phá Nhanh Các Mảng Chủ Lực:
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
                    <Link
                      href="/in-tampon"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-700/70 hover:bg-orange-600 text-white transition-colors flex items-center justify-between"
                    >
                      <span>Công Nghệ In Tampon</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/in-lua"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-700/70 hover:bg-orange-600 text-white transition-colors flex items-center justify-between"
                    >
                      <span>Công Nghệ In Lụa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/in-ky-thuat-so"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-700/70 hover:bg-orange-600 text-white transition-colors flex items-center justify-between"
                    >
                      <span>In Kỹ Thuật Số UV/CIJ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/products/consumables"
                      className="px-3.5 py-2.5 rounded-lg bg-slate-700/70 hover:bg-orange-600 text-white transition-colors flex items-center justify-between"
                    >
                      <span>Vật Tư In Công Nghiệp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NĂNG LỰC XƯỞNG IN ẤN GIA CÔNG & CUNG ỨNG VẬT TƯ VNPIS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">
              Năng Lực Toàn Diện B2B
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Năng Lực Xưởng In Ấn Gia Công & Cung Ứng Vật Tư VNPIS
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-slate-600">
              Đáp ứng đồng thời nhu cầu đặt in gia công sản lượng lớn tại xưởng và cung cấp trọn gói máy móc, vật tư tiêu hao cho dây chuyền nhà máy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4 font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUY TRÌNH KỸ THUẬT 5 BƯỚC */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Quy Trình Kỹ Thuật 5 Bước Chuẩn Hóa Tại VNPIS
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-600">
              Quy trình làm việc minh bạch, khoa học giúp rút ngắn thời gian duyệt mẫu và đảm bảo chất lượng đồng nhất 100% khi sản xuất hàng loạt.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Tiếp Nhận & Phân Tích Phôi',
                desc: 'Đánh giá chất liệu bề mặt (nhựa PP, PE, ABS, kim loại, thủy tinh, giấy) và yêu cầu bài test cơ lý hóa.',
              },
              {
                step: '02',
                title: 'Phối Mực & Chế Bản Tại Lab',
                desc: 'Lựa chọn dòng mực, dung môi, xử lý bề mặt Corona/Primer, khắc bản thép cliché hoặc chụp khung lụa.',
              },
              {
                step: '03',
                title: 'In Mẫu Test Thực Tế Miễn Phí',
                desc: 'Tiến hành in thử trực tiếp trên mẫu phôi của khách hàng và kiểm tra độ bám dính băng keo 3M, kháng cồn.',
              },
              {
                step: '04',
                title: 'Triển Khai Sản Xuất / Bàn Giao',
                desc: 'Chạy gia công hàng loạt tại xưởng VNPIS hoặc lắp đặt máy móc, bàn giao vật tư và hướng dẫn SOP tại nhà máy.',
              },
              {
                step: '05',
                title: 'Kiểm Soát QC & Bảo Hành 24/7',
                desc: 'Kiểm tra AQL nghiêm ngặt từng lô hàng xuất xưởng, cung cấp đầy đủ COA/MSDS và hỗ trợ kỹ thuật tận nơi.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col"
              >
                <span className="text-3xl font-black text-orange-500/30 mb-3 block">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ỨNG DỤNG THỰC TẾ & NGÀNH NGHỀ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ứng Dụng Thực Tế Đa Ngành Công Nghiệp
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-600">
              Giải pháp của VNPIS hiện diện trên hàng triệu sản phẩm bao bì hộp giấy, túi giấy, tem nhãn decal, linh kiện nhựa công nghiệp, kim loại, thủy tinh và các công đoạn gia công sau in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayIndustries.map((ind, idx) => {
              const label = typeof ind === 'string' ? ind : ind.name;
              return (
                <div
                  key={idx}
                  className="p-6 text-center bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm md:text-base">
                    {label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. LEAD FORM & B2B HOTLINES */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ConsultationForm
            title="Nhận Tư Vấn Kỹ Thuật & Báo Giá Miễn Phí"
            subtitle="Đội ngũ kỹ sư VNPIS sẵn sàng khảo sát, in mẫu thử miễn phí trên sản phẩm thật và thiết kế giải pháp tối ưu chi phí nhất cho nhà máy của bạn."
            pageTitle={title}
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-4 bg-slate-800/90 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Tư Vấn Kỹ Thuật & Vật Tư (Mr. Tâm)
                </div>
                <a
                  href="tel:0901836344"
                  className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
                >
                  0901 836 344
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">
                  Tư Vấn Máy Móc & Gia Công (Mr. Giang)
                </div>
                <a
                  href="tel:0901826344"
                  className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  0901 826 344
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
