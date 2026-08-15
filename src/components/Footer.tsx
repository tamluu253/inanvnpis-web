import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-blue-600 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Workshop Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white p-2.5 rounded-xl shadow-sm border border-slate-200">
              <img src="/images/inanvnpis-logo.png" alt="In Ấn VNPIS Logo" className="h-10 w-auto" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Xưởng gia công in ấn VNPIS Solutions chuyên nhận in gia công Tampon, In Lụa, In KTS &amp; QR Code dữ liệu biến đổi trên mọi chất liệu và bề mặt phức tạp tại TP.HCM.
            </p>
            <div className="flex space-x-3">
              <a href="https://zalo.me/0987453866" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs hover:bg-blue-500 transition-colors shadow-md">
                Zalo
              </a>
              <a href="tel:0987453866" className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs hover:bg-emerald-500 transition-colors shadow-md">
                Call
              </a>
            </div>
          </div>

          {/* Column 2: Subcontracting Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Dịch Vụ Gia Công</h3>
            <ul className="space-y-3">
              <li><Link href="/in-tampon" className="hover:text-blue-400 transition-colors flex items-center text-sm"><ArrowRight className="w-3 h-3 mr-2 text-blue-500" /> Gia công in Tampon (Tô, Ly, Cốc)</Link></li>
              <li><Link href="/in-lua" className="hover:text-blue-400 transition-colors flex items-center text-sm"><ArrowRight className="w-3 h-3 mr-2 text-blue-500" /> Gia công in Lụa (Túi giấy, Nilon, Áo)</Link></li>
              <li><Link href="/in-ky-thuat-so" className="hover:text-blue-400 transition-colors flex items-center text-sm"><ArrowRight className="w-3 h-3 mr-2 text-blue-500" /> Gia công in KTS &amp; Dữ liệu biến đổi</Link></li>
              <li><Link href="/in-ky-thuat-so" className="hover:text-blue-400 transition-colors flex items-center text-sm"><ArrowRight className="w-3 h-3 mr-2 text-blue-500" /> In mã QR Code &amp; Serial nhảy</Link></li>
              <li><Link href="/#quote" className="hover:text-blue-400 transition-colors flex items-center text-sm"><ArrowRight className="w-3 h-3 mr-2 text-blue-500" /> Tính giá báo giá tự động 24/7</Link></li>
            </ul>
          </div>

          {/* Column 3: Quality Commitments */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Cam Kết Xưởng In</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> In test mẫu miễn phí trước sản xuất</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Mực bám dính siêu cường (test 3M)</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Công suất 50.000+ sản phẩm/ngày</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Tiến độ chuẩn xác - Giao hàng tận nơi</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" /> Giá gia công trực tiếp không qua trung gian</li>
            </ul>
          </div>

          {/* Column 4: Workshop Address & Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Xưởng In VNPIS</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed block">
                  <strong className="text-white block mb-1">XƯỞNG GIA CÔNG IN ẤN VNPIS</strong>
                  <span className="text-slate-300 block">18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP. Hồ Chí Minh.</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Zalo / Hotline Báo Giá</span>
                  <a href="tel:0987453866" className="font-extrabold text-blue-400 text-lg hover:underline">0987 453 866</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@inanvnpis.com" className="hover:text-blue-400 transition-colors text-sm text-slate-300">info@inanvnpis.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Xưởng In Gia Công VNPIS Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-slate-300">Chính sách bảo mật</Link>
            <Link href="/terms-of-service" className="hover:text-slate-300">Điều khoản dịch vụ</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
