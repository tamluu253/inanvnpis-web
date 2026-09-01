import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t-4 border-cyan-500 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 bg-white p-2 rounded-xl shadow-sm">
              <img src="/images/inanvnpis-logo.png" alt="In Ấn VNPIS Logo" className="h-12 w-auto" />
            </Link>
            <p className="mb-4 text-xs leading-relaxed text-slate-400">
              <strong className="text-white">INANVNPIS.COM</strong> — Xưởng gia công in tampon, in lụa, in KTS dữ liệu biến đổi &amp; phân phối vật tư mực in công nghiệp hàng đầu TP.HCM. 
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-bold mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>In Mẫu Test Miễn Phí 24h &amp; Test 3M Bám Dính</span>
            </div>
          </div>

          {/* Column 2: Core Printing Services */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 text-cyan-400 uppercase tracking-wider">Dịch Vụ In Gia Công</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/in-tampon" className="hover:text-cyan-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-cyan-500" /> Gia Công In Tampon (Ly Nhựa, Tô Chén, Linh Kiện)</Link></li>
              <li><Link href="/in-lua" className="hover:text-cyan-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-cyan-500" /> Gia Công In Lụa (Màng Nhựa, Túi Giấy, Chai Lọ Tròn)</Link></li>
              <li><Link href="/in-ky-thuat-so" className="hover:text-cyan-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-cyan-500" /> Gia Công In KTS &amp; QR Code Dữ Liệu Biến Đổi</Link></li>
              <li><Link href="/services/pad-printing-service" className="hover:text-cyan-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-cyan-500" /> Báo Giá In Gia Công Theo Đơn Hàng Hàng Loạt</Link></li>
            </ul>
          </div>

          {/* Column 3: Materials & Supplies */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 text-orange-400 uppercase tracking-wider">Vật Tư &amp; Mực In Gia Công</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/products/pad-printing/inks" className="hover:text-orange-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-orange-500" /> Mực In Tampon Afford KT1 / Marabu / UV</Link></li>
              <li><Link href="/products/pad-printing/plates" className="hover:text-orange-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-orange-500" /> Bản Thép In Tampon (Cliche Phủ Sơn / Thép Dày)</Link></li>
              <li><Link href="/products/pad-printing/pads" className="hover:text-orange-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-orange-500" /> Cục In Silicone Đổ Khuôn Chuẩn Độ Cứng</Link></li>
              <li><Link href="/products/cij-ink" className="hover:text-orange-400 transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2 text-orange-500" /> Mực In CIJ / TIJ Khô Nhanh Bám Dính Cao</Link></li>
            </ul>
          </div>

          {/* Column 4: Dedicated Contact */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 text-emerald-400 uppercase tracking-wider">Hotline Tư Vấn Xưởng In</h3>
            <ul className="space-y-3 text-xs">
              <li className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block font-medium">Tư vấn In Tampon &amp; In KTS:</span>
                <a href="tel:0901836344" className="text-emerald-400 font-extrabold text-base hover:text-emerald-300 block mt-0.5">
                  0901 836 344 (Mr. Tâm)
                </a>
              </li>
              <li className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block font-medium">Tư vấn In Lụa Gia Công:</span>
                <a href="tel:0901826344" className="text-cyan-400 font-extrabold text-base hover:text-cyan-300 block mt-0.5">
                  0901 826 344 (Mr. Giang)
                </a>
              </li>
              <li className="flex items-start pt-2">
                <MapPin className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400">
                  <strong className="text-white block">Xưởng Gia Công VNPIS Solutions:</strong>
                  <span>18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP.HCM.</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=18+Đường+số+4,+KDC+Đại+Phúc+Green+Villas,+Xã+Bình+Hưng,+TP.+Hồ+Chí+Minh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold text-cyan-400 hover:text-cyan-300 mt-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    📍 Mở Google Maps chỉ đường &rarr;
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} INANVNPIS.COM — Xưởng Gia Công In Tampon &amp; In Lụa Hàng Đầu TP.HCM.</p>
          <div className="flex space-x-5 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-slate-300">Chính sách bảo mật</Link>
            <Link href="/terms-of-service" className="hover:text-slate-300">Điều khoản gia công</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300">Sitemap XML</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
