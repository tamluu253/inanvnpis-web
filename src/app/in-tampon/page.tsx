import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Phone } from 'lucide-react';

export const metadata = {
  title: 'Dịch Vụ In Tampon Gia Công | Xưởng In VNPIS TP.HCM',
  description: 'Chuyên nhận in gia công in tampon trên bề mặt cong, lõm, ly nhựa, tô chén dĩa, linh kiện điện tử, quà tặng doanh nghiệp. Hotline/Zalo: 0987 453 866.',
};

export default function InTamponPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
            Dịch Vụ In Tampon Gia Công Chuyên Nghiệp
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Gia Công In Tampon Đa Bề Mặt (Pad Printing)
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Giải pháp in sắc nét trên các bề mặt phức tạp, hình cầu, lõm, gồ ghề: Tô chén dĩa, ly nhựa, bình giữ nhiệt, nón bảo hiểm, linh kiện điện tử và đồ gia dụng.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">01</div>
            <h3 className="text-xl font-bold text-white mb-3">In Bề Mặt Cong &amp; Lõm</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Đầu in silicone linh hoạt chuyển mực chính xác lên bề mặt hình cầu, lõm sâu hoặc hình dáng bất quy tắc.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">02</div>
            <h3 className="text-xl font-bold text-white mb-3">Mực Bám Dính 3M</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Sử dụng mực chuyên dụng cao cấp cho nhựa PP, PET, ABS, Kim loại, Thủy tinh đạt chuẩn test kéo băng keo 3M.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">03</div>
            <h3 className="text-xl font-bold text-white mb-3">Công Suất Lớn 50k SP/Ngày</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Hệ thống máy in Tampon tự động nhiều màu giúp đáp ứng các đơn hàng lớn với tiến độ nhanh chóng.</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Sản Phẩm In Tampon Phổ Biến</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Ly nhựa, tô chén dĩa nhựa PP/PET',
              'Quà tặng bút viết, bình giữ nhiệt',
              'Linh kiện điện tử, bàn phím, nút bấm',
              'Nón bảo hiểm & đồ bảo hộ',
              'Đồ chơi trẻ em & dụng cụ thể thao',
              'Nắp chai, hũ mỹ phẩm, chai lọ'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center text-slate-300 text-sm bg-slate-950 p-4 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-500/30 p-10 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bạn Cần Báo Giá Gia Công In Tampon?</h3>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Liên hệ xưởng VNPIS để nhận mẫu in test thử miễn phí và báo giá tận xưởng tốt nhất.</p>
          <a href="https://zalo.me/0987453866" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-colors">
            <Phone className="w-5 h-5 mr-2" /> Nhắn Zalo Báo Giá: 0987 453 866
          </a>
        </div>
      </div>
    </div>
  );
}
