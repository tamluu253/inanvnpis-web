export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Printer,
  QrCode,
  ShieldCheck,
  Factory,
  CheckCircle2,
  ChevronRight,
  PhoneCall,
  RefreshCw,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi — Xưởng In Ấn Gia Công & Thiết Bị In Công Nghiệp',
  description:
    'Xưởng in ấn gia công VNPIS (Công ty TNHH VNPIS) là đơn vị hàng đầu chuyên gia công in tampon, in lụa, in QR Code biến đổi, in bao bì hộp giấy, gia công sau in và cung cấp máy in công nghiệp, vật tư mực in tại TP.HCM.',
  keywords: [
    'xưởng in ấn gia công VNPIS',
    'in ấn VNPIS',
    'in ấn gia công',
    'gia công sau in',
    'công ty TNHH VNPIS',
    'in tampon gia công',
    'in lụa gia công',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Về Chúng Tôi — Xưởng In Ấn Gia Công & Thiết Bị In Công Nghiệp | VNPIS',
    description:
      'Tìm hiểu năng lực xưởng in ấn gia công VNPIS: Gia công in tampon, in lụa, in KTS dữ liệu biến đổi, in bao bì hộp giấy, túi giấy, tem nhãn decal, gia công sau in và cung cấp máy in công nghiệp.',
    url: 'https://www.inanvnpis.com/about',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Về Chúng Tôi - Xưởng In Ấn Gia Công VNPIS (Công ty TNHH VNPIS)',
    url: 'https://www.inanvnpis.com/about',
    description:
      'Xưởng in ấn gia công VNPIS chuyên cung cấp dịch vụ in ấn gia công (in tampon, in lụa, in kỹ thuật số VDP, in bao bì hộp giấy, túi giấy, tem nhãn decal, gia công sau in) và phân phối thiết bị máy in, mực in công nghiệp.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Công ty TNHH VNPIS',
      alternateName: 'Xưởng In Ấn Gia Công VNPIS',
      taxID: '0318266611',
      url: 'https://www.inanvnpis.com',
      telephone: '+84901836344',
      email: 'info@inanvnpis.com',
    },
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
        name: 'Về Chúng Tôi',
        item: 'https://www.inanvnpis.com/about',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-wider mb-6 border border-blue-500/30">
              VỀ CHÚNG TÔI — CÔNG TY TNHH VNPIS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Xưởng In Ấn Gia Công VNPIS &amp; Giải Pháp{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                In Ấn Công Nghiệp Toàn Diện
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              <strong>In ấn VNPIS</strong> (Công ty TNHH VNPIS) là đối tác chiến lược cung cấp dịch vụ <strong>in ấn gia công</strong> chất lượng cao (gia công in tampon, in lụa tròn/phẳng, in bao bì hộp giấy, túi giấy, tem nhãn decal, <strong>gia công sau in</strong> ép kim/phủ UV), mã hóa dữ liệu biến đổi QR Code, công nghệ RFID và phân phối thiết bị máy in, mực in công nghiệp chính hãng.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE SOLUTIONS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Hệ Sinh Thái Giải Pháp Của Xưởng In Ấn Gia Công VNPIS
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600">
              Từ cung cấp máy móc, vật tư mực in đạt chuẩn RoHS đến dịch vụ <strong>in ấn gia công</strong> và <strong>gia công sau in</strong> trọn gói tại xưởng TP.HCM. Chúng tôi đáp ứng mọi tiêu chuẩn khắt khe nhất của các nhà máy FDI và doanh nghiệp sản xuất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Printer className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Máy In &amp; Vật Tư Công Nghiệp</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Cung cấp hệ thống máy in Tampon (Pad), máy in lụa, in UV Single Pass và đầu in (Ricoh, Epson), cùng các dòng mực in công nghiệp (Marabu, Afford, RUCO, TIJ, CIJ).{' '}
                <strong>Hỗ trợ linh hoạt: Bán máy mới &amp; Cho thuê máy in dài hạn.</strong>
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Bán mới &amp; Cho Thuê
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Mực in chuẩn RoHS/REACH
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">In Dữ Liệu Biến Đổi (VDP)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Giải pháp phần mềm và dây chuyền in kỹ thuật số tốc độ cao chuyên in Barcode GS1, QR Code chống giả, số nhảy Serial ngẫu nhiên trực tiếp lên bao bì hộp giấy, tem nhãn decal, thẻ cào và nắp chai.
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> QR Code Trực tiếp + Vision
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Số nhảy, Barcode GS1
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Truy Xuất &amp; Công Nghệ RFID</h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Tích hợp toàn diện công nghệ RFID ứng dụng trong quản lý kho bãi, ngành may mặc thông minh. Cung cấp giải pháp in tem nhãn decal bảo mật, kéo nhũ cào chống hàng giả tuyệt đối.
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> RFID May mặc / Kho bãi
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Chống giả bảo mật
                </li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                In Ấn Gia Công &amp; Gia Công Sau In
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Sở hữu <strong>xưởng in ấn gia công VNPIS</strong> quy mô lớn tại TP.HCM, chúng tôi nhận gia công in Tampon, in Lụa, in UV, in bao bì hộp giấy, túi giấy, tem nhãn decal và <strong>gia công sau in</strong> (ép kim, ép nhũ nóng, phủ UV cục bộ).
              </p>
              <ul className="space-y-2 mb-0 mt-auto">
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Gia công In Tampon, Lụa, UV
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> Ép kim, Phủ UV sau in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <RefreshCw className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Cho Thuê &amp; Gia Công Linh Hoạt</h3>
                  <p className="text-sm text-slate-500">
                    Tiết kiệm chi phí đầu tư ban đầu với dịch vụ in ấn gia công hoặc thuê máy theo tháng/năm.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Làm Chủ Hóa Chất Mực In</h3>
                  <p className="text-sm text-slate-500">
                    Test thử mực miễn phí trong 24h, đạt chuẩn kéo băng keo 3M Cross-cut 5B cho mọi bề mặt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center -mt-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Chất Lượng Cam Kết Chuẩn ISO</h3>
                  <p className="text-sm text-slate-500">
                    Dây chuyền in tự động và gia công sau in hiện đại, vận hành 24/7 ổn định, giao hàng đúng hẹn.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <PhoneCall className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Hỗ Trợ Kỹ Thuật Tận Xưởng</h3>
                  <p className="text-sm text-slate-500">
                    Đội ngũ kỹ sư in ấn VNPIS giàu kinh nghiệm sẵn sàng tư vấn và xử lý kỹ thuật tận nhà máy.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">
                Lợi thế cạnh tranh của In Ấn VNPIS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Tại Sao Doanh Nghiệp Chọn Xưởng In Ấn Gia Công VNPIS?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Chúng tôi không chỉ bán máy móc hay nhận in đơn thuần, <strong>in ấn VNPIS</strong> mang đến một quy trình hoàn thiện sản phẩm và bao bì nâng cấp toàn diện. Từ việc phân tích sức căng bề mặt nhựa/kim loại/giấy, lựa chọn công nghệ in (Tampon, Lụa, UV, TIJ, CIJ), đến các khâu <strong>gia công sau in</strong> (ép kim, ép nhũ nóng, phủ UV định hình), VNPIS bao quát mọi khía cạnh để sản phẩm của bạn đạt thẩm mỹ hoàn hảo nhất.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Tư vấn kỹ thuật chuyên sâu và in mẫu test 3M miễn phí 100%',
                  'Đầy đủ công nghệ in Tampon, in Lụa tròn/phẳng, in KTS VDP và gia công sau in',
                  'Giải pháp trọn gói: Gia công in ấn - Máy móc thiết bị - Mực in & Vật tư RoHS',
                  'Giao nhận hàng tận nơi tại TP.HCM, Bình Dương, Đồng Nai, Long An đúng tiến độ',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full transition-colors inline-flex items-center justify-center shadow-lg shadow-blue-600/30"
                >
                  Liên Hệ Báo Giá Ngay <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/du-an"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold py-3.5 px-8 rounded-full transition-colors inline-flex items-center justify-center"
                >
                  Xem Dự Án Thực Tế <ChevronRight className="w-5 h-5 ml-1 text-slate-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FOOTER */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn Sàng Nâng Tầm Chất Lượng In Ấn Sản Phẩm Của Bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Dù bạn đang tìm kiếm <strong>xưởng in ấn gia công VNPIS</strong> cho đơn hàng số lượng lớn hay muốn đầu tư máy in công nghiệp, chúng tôi luôn có giải pháp tối ưu chi phí dành cho bạn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0901836344"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-colors text-base shadow-xl shadow-slate-900/10 inline-block"
            >
              Mr. Tâm (In Tampon / KTS): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="bg-blue-900 text-white hover:bg-blue-950 font-bold py-4 px-8 rounded-full transition-colors text-base shadow-xl shadow-slate-900/10 inline-block"
            >
              Mr. Giang (In Lụa / Sau In): 0901 826 344
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
