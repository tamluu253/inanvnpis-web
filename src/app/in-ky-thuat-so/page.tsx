import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Phone } from 'lucide-react';

export const metadata = {
  title: 'Dịch Vụ In KTS & Dữ Liệu Biến Đổi (VDP) | Xưởng In VNPIS TP.HCM',
  description: 'Chuyên nhận in gia công KTS, in mã QR Code biến đổi, Barcode, Serial nhảy chống hàng giả và truy xuất nguồn gốc. Hotline/Zalo: 0987 453 866.',
};

export default function InKyThuatSoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-500/30">
            Dịch Vụ In Dữ Liệu Biến Đổi (VDP) &amp; KTS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Gia Công In Mã QR Code &amp; Serial Nhảy Tận Nơi
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            In kỹ thuật số trực tiếp mã QR Code động, Barcode, mã vạch và số Serial biến đổi nhảy liên tục trên sản phẩm &amp; bao bì, phục vụ quản lý kho thông minh và chống hàng giả.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">01</div>
            <h3 className="text-xl font-bold text-white mb-3">In Dữ Liệu Biến Đổi (VDP)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Mỗi sản phẩm mang 1 mã QR / Barcode duy nhất, không trùng lặp, quét camera đọc dữ liệu tức thì.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">02</div>
            <h3 className="text-xl font-bold text-white mb-3">Tốc Độ Cao 60m/Phút</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Đầu in UV Single Pass &amp; TIJ công nghiệp giúp in trực tiếp trên dây chuyền bao bì với độ phân giải 600DPI.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center font-bold text-xl mb-4">03</div>
            <h3 className="text-xl font-bold text-white mb-3">Dịch Vụ In Tận Nơi</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Đội ngũ kỹ thuật mang thiết bị chuyên dụng đến tận nhà máy của khách hàng để gia công in dữ liệu biến đổi.</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Ứng Dụng In KTS &amp; VDP Thực Tế</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'In mã QR Code tem chống hàng giả',
              'In mã vạch Barcode quản lý kho SME',
              'In số Serial nhảy liên tục trên thẻ/bao bì',
              'In Date & Lot hàng sản xuất',
              'In tem truy xuất nguồn gốc nông sản/dược',
              'In dữ liệu cá thể hóa theo file Excel'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center text-slate-300 text-sm bg-slate-950 p-4 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-purple-900 to-slate-900 border border-purple-500/30 p-10 rounded-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bạn Cần Gia Công In Mã QR &amp; Serial Biến Đổi?</h3>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Liên hệ xưởng VNPIS để được tư vấn giải pháp in dữ liệu biến đổi tận nhà máy của bạn.</p>
          <a href="https://zalo.me/0987453866" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg transition-colors">
            <Phone className="w-5 h-5 mr-2" /> Nhắn Zalo Báo Giá: 0987 453 866
          </a>
        </div>
      </div>
    </div>
  );
}
