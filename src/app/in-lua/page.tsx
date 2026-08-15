import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Phone } from 'lucide-react';

export const metadata = {
  title: 'Dịch Vụ In Lụa Gia Công | Xưởng In VNPIS TP.HCM',
  description: 'Chuyên nhận in lụa gia công túi giấy, túi nilon, bao bì đóng gói, vải thun, áo đồng phục, màng nhựa phẳng. Hotline/Zalo: 0901 836 344 (Mr. Tâm) - 0901 826 344 (Mr. Giang).',
};

export default function InLuaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-4 rounded-full bg-teal-100/80 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
            Dịch Vụ In Lụa Gia Công Chuyên Nghiệp
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Gia Công In Lụa Đa Chất Liệu (Screen Printing)
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Chuyên gia công in lụa màng nhựa phẳng, túi giấy, túi nilon, bao bì đóng gói, vải thun, áo đồng phục với mực in cao cấp cho độ phủ đều, màu tươi sáng và cực kỳ bền màu.
          </p>
        </div>

        {/* Generated Illustrative Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-lg border border-slate-200 max-w-4xl mx-auto">
          <img 
            src="/images/screen-printing-bags.jpg" 
            alt="Dịch vụ in lụa gia công túi giấy túi nilon vải thun" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">01</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phủ Màu Đều &amp; Sắc Nét</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Kỹ thuật kéo lụa chuẩn xác giúp lớp mực dày, đều màu, nổi bật chi tiết thương hiệu trên bao bì.</p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">02</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tối Ưu Chi Phí Đơn Lớn</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Giá thành in lụa gia công cực kỳ tiết kiệm cho các đơn hàng số lượng vừa và lớn.</p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">03</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Đa Dạng Chất Liệu</h3>
            <p className="text-slate-600 text-sm leading-relaxed">In mượt mà trên túi nilon PE/PP, túi giấy kraft, vải dệt, nhựa phẳng, mica, nhôm, kim loại.</p>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white border border-slate-200 p-10 rounded-3xl shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Sản Phẩm In Lụa Gia Công</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Túi nilon PE, PP, HD bao bì shop',
              'Túi giấy kraft, bao bì giấy couche',
              'Vải thun, áo đồng phục, balo túi xách',
              'Tấm nhựa phẳng, bảng hiệu mica',
              'Vỏ hộp quà tặng, thùng bìa cứng',
              'Tem nhãn decal & bao bì công nghiệp'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center text-slate-700 text-sm bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bạn Cần Báo Giá Gia Công In Lụa?</h3>
          <p className="text-teal-100 text-base mb-8 max-w-xl mx-auto">Liên hệ xưởng VNPIS để nhận báo giá chi tiết tận xưởng và ưu đãi cho đơn hàng lớn.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://zalo.me/0901836344" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3.5 bg-white text-teal-700 hover:bg-slate-100 font-bold rounded-2xl shadow-lg transition-colors text-sm">
              <Phone className="w-4 h-4 mr-2" /> Zalo Mr. Tâm: 0901 836 344
            </a>
            <a href="https://zalo.me/0901826344" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3.5 bg-teal-900 text-white hover:bg-teal-950 font-bold rounded-2xl shadow-lg transition-colors text-sm">
              <Phone className="w-4 h-4 mr-2" /> Zalo Mr. Giang: 0901 826 344
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
