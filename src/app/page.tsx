export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Phone, Award, Truck, Layers, Zap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-slate-900/0 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest mb-6 border border-cyan-500/30 uppercase">
              <Factory className="w-4 h-4 text-cyan-400" />
              <span>Xưởng Gia Công In Tampon &amp; In Lụa Chuyên Nghiệp TP.HCM</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Gia Công In Logo, Ký Hiệu &amp; QR Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400">Trực Tiếp Trên Mọi Chất Liệu</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Chuyên nhận in gia công hàng loạt cho nhà máy &amp; doanh nghiệp: tô chén ly nhựa, nắp chai, màng bao bì, chai lọ tròn, linh kiện nhựa ABS/PP &amp; mã QR code dữ liệu biến đổi.
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
                <Phone className="w-4 h-4 mr-2" /> Tư Vấn In Lụa Gia Công: 0901 826 344 (Mr. Giang)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-4">4 Dịch Vụ Gia Công In Ấn Cốt Lõi</h2>
            <p className="text-slate-600 text-sm">Hệ thống máy móc in công nghiệp hiện đại, nhận gia công mọi đơn hàng từ nhỏ đến sản xuất quy mô công nghiệp hàng loạt.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: In Tampon */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-orange-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Gia Công In Tampon</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                In logo, thông số trên bề mặt cong, lồi lõm: tô chén ly nhựa, nắp chai, linh kiện điện tử, phím nhựa ABS, PP, PET.
              </p>
              <Link href="/in-tampon" className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center mt-auto">
                Xem Báo Giá In Tampon <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: In Lụa */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-cyan-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Gia Công In Lụa</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                In bao bì màng nhựa, túi giấy, chai lọ tròn, thùng sơn, bề mặt phẳng &amp; hình trụ tròn độ nét cực cao.
              </p>
              <Link href="/in-lua" className="text-xs font-bold text-cyan-600 hover:text-cyan-700 flex items-center mt-auto">
                Xem Báo Giá In Lụa <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 3: In KTS & QR Code */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. In KTS &amp; QR Code</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                In mã QR động, barcode, số nhảy biến đổi bằng công nghệ Single Pass UV &amp; TIJ bám dính nhanh kết hợp Camera kiểm tra.
              </p>
              <Link href="/in-ky-thuat-so" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center mt-auto">
                Xem Báo Giá In KTS <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 4: Vật Tư Mực In */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">4. Mực &amp; Vật Tư Ngành In</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Phân phối mực in Tampon Afford KT1, Marabu, bản thép Cliche, silicone pad &amp; dung môi pha mực chuẩn xưởng.
              </p>
              <Link href="/products" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center mt-auto">
                Xem Danh Mục Vật Tư <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRICING TABLE SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Bảng Giá Tham Khảo 2026</span>
            <h2 className="text-3xl font-black mt-2">Đơn Giá In Gia Công Tận Xưởng TP.HCM</h2>
            <p className="text-slate-400 text-xs mt-2">Giá in thực tế phụ thuộc vào số lượng đơn hàng, số màu in và kích thước bề mặt sản phẩm.</p>
          </div>

          <div className="overflow-x-auto bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                  <th className="pb-4">Loại Hình In Gia Công</th>
                  <th className="pb-4">Chất Liệu Sản Phẩm</th>
                  <th className="pb-4">Số Lượng Đơn</th>
                  <th className="pb-4 text-right">Đơn Giá Tham Khảo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-4 font-bold text-white">Gia Công In Tampon (Pad Print)</td>
                  <td className="py-4 text-slate-400">Tô chén ly nhựa PP/PET, nắp chai, nhựa ABS</td>
                  <td className="py-4 text-slate-400">Từ 1.000 — 50.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-orange-400">150đ — 450đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Gia Công In Lụa (Screen Print)</td>
                  <td className="py-4 text-slate-400">Màng nhựa, túi giấy, bao bì, chai lọ tròn</td>
                  <td className="py-4 text-slate-400">Từ 500 — 20.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-cyan-400">200đ — 600đ / sp</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">In KTS QR Code Dữ Liệu Biến Đổi</td>
                  <td className="py-4 text-slate-400">Bao bì tem nhãn, thùng carton, thẻ cào</td>
                  <td className="py-4 text-slate-400">Từ 5.000 — 100.000 sp</td>
                  <td className="py-4 text-right font-extrabold text-emerald-400">100đ — 350đ / sp</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-white text-base">Cần Báo Giá Chính Xác Đơn Hàng Của Bạn?</h4>
              <p className="text-xs text-slate-400">Gửi kích thước &amp; hình ảnh mẫu qua Zalo để nhận báo giá chi tiết trong 5 phút.</p>
            </div>
            <a 
              href="https://zalo.me/0987453866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-6 py-3 rounded-full transition-all shadow-lg shrink-0"
            >
              Gửi Mẫu Báo Giá Zalo (0987 453 866)
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE INANVNPIS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">Vì Sao Khách Hàng Chọn Xưởng INANVNPIS.COM?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="font-bold text-base text-slate-900 mb-2">1. In Mẫu Test Miễn Phí</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hỗ trợ ra mẫu in test thử 100% miễn phí trên đúng sản phẩm của khách hàng trước khi ký hợp đồng in hàng loạt.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-bold text-base text-slate-900 mb-2">2. Kiểm Tra Bám Dính 3M</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sử dụng mực in cao cấp đạt tiêu chuẩn kiểm tra độ bám dính băng keo 3M, chống bong tróc trong môi trường nước/hóa chất.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Truck className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-base text-slate-900 mb-2">3. Giao Hàng Tận Nơi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đội ngũ xe giao nhận tận xưởng cho nhà máy khu vực TP.HCM, Bình Dương, Đồng Nai, Long An đúng tiến độ hợp đồng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
