export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileCheck2, Cpu } from 'lucide-react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Trung Tâm Tài Liệu Kỹ Thuật, Hồ Sơ MSDS/TDS & Phần Mềm Ngành In',
  description:
    'Thư viện tài liệu kỹ thuật ngành in công nghiệp VNPIS: tải Catalogue máy in, thông số kỹ thuật mực in (TDS), phiếu an toàn hóa chất (MSDS/RoHS) và phần mềm điều khiển.',
  keywords: [
    'tài liệu kỹ thuật ngành in',
    'hồ sơ msds tds mực in',
    'chứng nhận rohs reach mực in',
    'catalogue máy in tampon in lụa',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  return (
    <>
      <LandingPage
        title="Trung Tâm Tài Liệu Kỹ Thuật & Hồ Sơ Chất Lượng (Resources)"
        subtitle="Tra cứu và tải xuống đầy đủ Catalogue thiết bị, bảng thông số kỹ thuật (TDS), phiếu an toàn hóa chất (MSDS), chứng nhận RoHS/REACH và phần mềm điều khiển từ VNPIS."
        category="Thư Viện Kỹ Thuật B2B"
      />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/resources/download"
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <Download className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                Catalogue & Cẩm Nang Kỹ Thuật
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Tải hồ sơ năng lực VNPIS, brochure máy in Tampon, máy in Lụa, máy in phun CIJ/TIJ và bảng chọn mã mực.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-blue-600">
                Truy cập trang tải về <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/resources/msds"
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <FileCheck2 className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600">
                Chứng Nhận MSDS / TDS / RoHS
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Hồ sơ an toàn hóa chất MSDS, COA, báo cáo kiểm định SGS RoHS 10 và REACH SVHC phục vụ kiểm toán nhà máy FDI.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-emerald-600">
                Yêu cầu hồ sơ MSDS <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/resources/software"
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all group"
            >
              <Cpu className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600">
                Phần Mềm RIP & Quản Lý Dữ Liệu VDP
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Trình điều khiển đầu in, phần mềm thiết kế mã vạch GS1, phần mềm RIP màu ICC Profile và kết nối cơ sở dữ liệu ERP.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-orange-600">
                Xem giải pháp phần mềm <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
