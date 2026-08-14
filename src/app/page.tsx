'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Zap, CheckCircle, MessageSquare, Award, Clock, Sparkles } from 'lucide-react';

export default function Home() {
  const [serviceType, setServiceType] = useState<string>('In Tampon Gia Công');
  const [quantity, setQuantity] = useState<number>(1000);
  const [colors, setColors] = useState<number>(1);

  // Price calculation logic
  const calculateEstimate = () => {
    let baseRate = 500;
    if (serviceType.includes('Tampon')) baseRate = 800;
    else if (serviceType.includes('Lụa')) baseRate = 500;
    else baseRate = 1200;

    let total = baseRate * quantity * (1 + (colors - 1) * 0.35);
    if (quantity >= 10000) total *= 0.65;
    else if (quantity >= 5000) total *= 0.8;

    return Math.max(250000, Math.round(total / 1000) * 1000);
  };

  const estimatedPrice = calculateEstimate();

  const handleZaloSubmit = () => {
    const text = `Chào Xưởng In VNPIS, tôi cần báo giá:\n- Dịch vụ: ${serviceType}\n- Số lượng: ${quantity.toLocaleString('vi-VN')} SP\n- Số màu: ${colors} màu\n- Dự toán: ${estimatedPrice.toLocaleString('vi-VN')} VNĐ`;
    window.open(`https://zalo.me/0987453866?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-800">
      {/* 1. HERO BANNER - LIGHT EYE-SOOTHING STYLE */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 bg-gradient-to-b from-blue-50/60 via-slate-50 to-slate-50 overflow-hidden border-b border-slate-200/80">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-cyan-100/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <span className="inline-flex items-center py-2 px-4 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-bold tracking-wider mb-6 border border-blue-200/80 uppercase shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" /> XƯỞNG GIA CÔNG IN ẤN ĐA CHẤT LIỆU #1 TP.HCM
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight text-slate-900">
            Giải Pháp In Gia Công <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
              Chuyên Nghiệp &amp; Toàn Diện
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            VNPIS Solutions chuyên gia công in ấn chất lượng cao trên <strong className="text-slate-900 font-bold">mọi bề mặt &amp; chất liệu</strong> (Nhựa, Tô chén ly dĩa, Vải may mặc, Linh kiện điện tử, Kim loại, Bao bì) và phân phối vật tư ngành in Lụa, in Tampon, in Kỹ Thuật Số.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#quote" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl">
              Nhận Báo Giá In Gia Công <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#capacity" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-300 rounded-2xl hover:bg-slate-100 transition-colors shadow-sm">
              Năng Lực Xưởng In
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT CAPACITY SECTION */}
      <section id="capacity" className="py-20 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xs uppercase font-extrabold text-blue-600 tracking-wider mb-2">Chất lượng vượt trội</h4>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hệ Thống Máy In Tampon &amp; In Lụa Tự Động Công Suất Cao</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Xưởng trang bị máy móc hiện đại nhập khẩu, đáp ứng tiến độ 50,000+ sản phẩm/ngày cho các tập đoàn và nhà máy lớn.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">VNPIS SOLUTIONS</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Xưởng Gia Công In Ấn Hàng Đầu Cho Doanh Nghiệp B2B
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Với bề dày kinh nghiệm và đội ngũ kỹ thuật giàu kinh nghiệm, VNPIS mang đến giải pháp in gia công trọn gói từ tư vấn thiết kế, chọn mực phù hợp đến in test mẫu thực tế và sản xuất hàng loạt.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: 'Hơn 20 năm kinh nghiệm', desc: 'Am hiểu sâu sắc về mọi chất liệu & bề mặt' },
                  { title: 'Thiết bị & Mực chuẩn Châu Âu', desc: 'Mực bám dính siêu cường pass test 3M' },
                  { title: 'In test mẫu miễn phí', desc: 'Hỗ trợ làm mẫu trước khi ký hợp đồng' },
                  { title: 'Hợp tác với 100+ nhà máy', desc: 'Đối tác tin cậy của các doanh nghiệp lớn' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3 CORE SUBCONTRACTING SERVICES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">3 Dịch Vụ In Gia Công Cốt Lõi</h2>
            <p className="text-slate-600 text-lg">Gia công sắc nét trên mọi hình dạng, bề mặt gồ ghề và chất liệu khó bám dính nhất.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: In Tampon */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-3.5 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full mb-6 border border-blue-200">01</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">In Tampon (Pad Printing)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Chuyên in gia công trên bề mặt cong, lõm, hình cầu, gồ ghề: tô chén ly dĩa nhựa, quà tặng doanh nghiệp, linh kiện điện tử, nút bấm gia dụng...
                </p>
              </div>
              <Link href="/in-tampon" className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline mt-4">
                Gia công In Tampon <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 2: In Lụa */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-3.5 py-1 bg-teal-50 text-teal-700 font-bold text-xs rounded-full mb-6 border border-teal-200">02</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">In Lụa Gia Công</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Gia công in lụa màng nhựa phẳng, túi giấy, túi nilon, vải may mặc, áo đồng phục, bề mặt kim loại với độ phủ màu đều và sắc nét tuyệt đối.
                </p>
              </div>
              <Link href="/in-lua" className="inline-flex items-center text-teal-600 font-bold text-sm hover:underline mt-4">
                Gia công In Lụa <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 3: In KTS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-3.5 py-1 bg-purple-50 text-purple-700 font-bold text-xs rounded-full mb-6 border border-purple-200">03</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">In Kỹ Thuật Số (VDP)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  In trực tiếp mã QR Code biến đổi, Barcode, Số Serial nhảy liên tục phục vụ quản lý kho, chống hàng giả và truy xuất nguồn gốc sản phẩm.
                </p>
              </div>
              <Link href="/in-ky-thuat-so" className="inline-flex items-center text-purple-600 font-bold text-sm hover:underline mt-4">
                Gia công In KTS &amp; VDP <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY / REAL PROJECTS */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Hình Ảnh Dự Án Thực Tế</h2>
            <p className="text-slate-600 text-base">Hàng ngàn sản phẩm đã được VNPIS gia công in ấn cho các đối tác lớn nhỏ toàn quốc.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'In Tampon Tô Ly Nhựa', sub: 'Chất liệu PP/PET' },
              { title: 'In Lụa Túi Giấy Cao Cấp', sub: 'Bao bì thương hiệu' },
              { title: 'In QR Code Biến Đổi', sub: 'Truy xuất nguồn gốc' },
              { title: 'In Linh Kiện Điện Tử', sub: 'Bề mặt nhựa ABS' },
              { title: 'In Nón Bảo Hiểm', sub: 'Sơn phủ bảo vệ' },
              { title: 'In Thùng Carton TIJ', sub: 'In date & mã vạch' },
              { title: 'In Quà Tặng Doanh Nghiệp', sub: 'Bút, bình giữ nhiệt' },
              { title: 'In Vải Thun & May Mặc', sub: 'Mực in dẻo cao cấp' },
            ].map((proj, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden p-4 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="w-full h-36 bg-blue-50/50 rounded-xl flex items-center justify-center mb-3 text-slate-400 font-bold text-xs border border-blue-100">
                  [Hình ảnh sản phẩm in #{idx + 1}]
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{proj.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{proj.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/#capacity" className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md">
              Xem Tất Cả Dự Án In Gia Công
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALCULATOR & QUOTE SECTION */}
      <section id="quote" className="py-24 bg-gradient-to-b from-blue-50/40 via-slate-50 to-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Báo Giá Tận Xưởng</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Bạn Cần Báo Giá In Gia Công Tận Xưởng?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Hãy gửi thông số sản phẩm hoặc gọi ngay cho đội ngũ kỹ thuật của VNPIS. Chúng tôi cam kết đưa ra phương án in gia công tối ưu chi phí nhất cho doanh nghiệp của bạn.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  'Đảm bảo in sắc nét, bám dính siêu cường',
                  'Hỗ trợ in mẫu thử (sample test) miễn phí',
                  'Giao hàng đúng hẹn - Giá cả cạnh tranh',
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center text-slate-700 font-semibold">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Hotline / Zalo tư vấn 24/7</div>
                <a href="tel:0987453866" className="text-3xl font-black text-blue-600 hover:underline">
                  0987 453 866
                </a>
              </div>
            </div>

            {/* Right Calculator Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" /> Tính Giá Tự Động (Tham khảo)
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Chọn dịch vụ</label>
                    <select 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-900 text-sm font-bold focus:border-blue-600 focus:outline-none"
                    >
                      <option value="In Tampon Gia Công">In Tampon Gia Công</option>
                      <option value="In Lụa Gia Công">In Lụa Gia Công</option>
                      <option value="In KTS / QR Code">In KTS / Mã QR Code</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Số lượng sản phẩm</label>
                      <input 
                        type="number"
                        min="100"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-900 text-sm font-bold focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Số màu in</label>
                      <input 
                        type="number"
                        min="1"
                        max="6"
                        value={colors}
                        onChange={(e) => setColors(Number(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-900 text-sm font-bold focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-200/80">
                    <div className="text-xs text-slate-600 mb-1 font-medium">Dự toán chi phí tham khảo:</div>
                    <div className="text-3xl font-black text-blue-600">
                      {estimatedPrice.toLocaleString('vi-VN')} <span className="text-sm font-semibold text-slate-500">VNĐ</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">*Chưa bao gồm VAT và chi phí khuôn/bản in đặc biệt</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button 
                    onClick={handleZaloSubmit}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center text-sm"
                  >
                    Gửi Yêu Cầu Tính Giá Ngay
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://zalo.me/0987453866" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl text-center border border-slate-200 block"
                    >
                      Nhắn Zalo
                    </a>
                    <a 
                      href="https://zalo.me/0987453866" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl text-center block shadow-md"
                    >
                      WhatsApp / Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
