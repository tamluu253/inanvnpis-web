import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MessageSquare, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function ArticleContactCTA({ title }: { title?: string }) {
  return (
    <div className="my-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-400/30 relative overflow-hidden font-sans">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
          <Zap className="w-4 h-4 mr-1.5 text-amber-300" /> TƯ VẤN &amp; IN TEST MẪU THỬ MIỄN PHÍ
        </span>

        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
          Bạn Cần Báo Giá In Gia Công Cho {title ? `"${title}"` : 'Sản Phẩm Của Bạn'}?
        </h3>

        <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Liên hệ ngay xưởng in VNPIS qua đội ngũ kỹ sư hỗ trợ 24/7 để được tư vấn kỹ thuật chọn mực, test mẫu thực tế và nhận báo giá tốt nhất:
        </p>

        {/* Contact Cards Grid */}
        <div className="max-w-md mx-auto mb-6">
          {/* Mr. Tâm */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex flex-col items-center">
            <span className="text-amber-300 font-black text-lg mb-2">Hotline / Zalo: Mr. Tâm - 0987 453 866</span>
            <div className="flex items-center justify-center gap-3 mt-2 w-full">
              <a
                href="https://zalo.me/0987453866"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 bg-white text-blue-700 hover:bg-blue-50 font-bold rounded-xl text-xs flex items-center justify-center transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-blue-600" /> Zalo Mr. Tâm
              </a>
              <a
                href="https://wa.me/84987453866"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-xs flex items-center justify-center transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" /> WhatsApp
              </a>
              <a
                href="tel:0987453866"
                className="py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-xs flex items-center justify-center transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 mr-1" /> Gọi ngay
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-blue-100 font-medium">
          <div className="flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
            <span>Mực bám dính siêu cường (Pass 3M)</span>
          </div>
          <div className="flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
            <span>In test mẫu thử miễn phí</span>
          </div>
          <div className="flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
            <span>Công suất 50.000+ SP/ngày</span>
          </div>
        </div>
      </div>
    </div>
  );
}
