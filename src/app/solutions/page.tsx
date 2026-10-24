export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cog, Layers, QrCode, Zap, Cpu } from 'lucide-react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Giải Pháp In Ấn Gia Công Công Nghiệp & Tự Động Hóa Dây Chuyền B2B',
  description:
    'Tổng hợp các giải pháp in công nghiệp toàn diện từ VNPIS: giải pháp In Tampon, In Lụa tự động, In Kỹ Thuật Số UV Single Pass, In Date Code CIJ/TIJ và In Dữ Liệu Biến Đổi VDP.',
  keywords: [
    'giải pháp in công nghiệp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
    'giải pháp in tampon in lụa in uv',
    'tự động hóa dây chuyền in',
  ],
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsHubPage() {
  const solutionsList = [
    {
      href: '/solutions/pad-printing',
      title: 'Giải Pháp In Tampon (Pad Printing) Toàn Diện',
      desc: 'Chìa khóa trao tay từ máy in Tampon tự động, mực in đạt chuẩn RoHS, quả tăm bông Silicone, bản khắc thép đến dịch vụ in gia công.',
      icon: Cog,
    },
    {
      href: '/solutions/screen-printing',
      title: 'Giải Pháp In Lụa Công Nghiệp (Screen Printing)',
      desc: 'Hệ thống máy in lụa phẳng/tròn tự động, mực in lụa UV/Solvent bám dính cao trên chai lọ mỹ phẩm, thủy tinh, nhựa, kim loại.',
      icon: Layers,
    },
    {
      href: '/solutions/uv-single-pass-printing',
      title: 'Giải Pháp In Kỹ Thuật Số UV Single Pass 80m/Phút',
      desc: 'In 1 lượt chạy tốc độ cao không qua chế bản cho bao bì thùng carton, vỏ hộp, thẻ nhựa và nắp chai trên dây chuyền tự động.',
      icon: Zap,
    },
    {
      href: '/solutions/variable-data-printing',
      title: 'Giải Pháp In Dữ Liệu Biến Đổi (VDP & QR Code)',
      desc: 'In mã QR định danh, Barcode GS1, Serial Number chống giả và truy xuất nguồn gốc tích hợp Camera Vision kiểm soát 100%.',
      icon: QrCode,
    },
    {
      href: '/solutions/industrial-coding',
      title: 'Giải Pháp In Phun Date Code & Ký Mã Hiệu (CIJ / TIJ)',
      desc: 'In ngày sản xuất, hạn sử dụng, số lô tốc độ cao và tiết kiệm đến 40% chi phí vận hành với hệ mực tương thích VNPIS.',
      icon: Cpu,
    },
  ];

  return (
    <>
      <LandingPage
        title="Hệ Sinh Thái Giải Pháp In Công Nghiệp & Gia Công B2B"
        subtitle="Thiết kế và triển khai các giải pháp in ấn công nghiệp may đo riêng theo từng chất liệu phôi và tốc độ dây chuyền sản xuất của nhà máy bạn."
        category="Giải Pháp Cốt Lõi VNPIS"
      />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              5 Trụ Cột Giải Pháp Công Nghệ Tại VNPIS
            </h2>
            <p className="text-slate-600">
              Lựa chọn công nghệ tối ưu nhất cho bài toán bám dính, năng suất và chi phí của doanh nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsList.map((sol, idx) => {
              const IconComp = sol.icon;
              return (
                <Link
                  key={idx}
                  href={sol.href}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all group flex flex-col"
                >
                  <IconComp className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600">
                    {sol.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {sol.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-blue-600">
                    Khám phá giải pháp <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
