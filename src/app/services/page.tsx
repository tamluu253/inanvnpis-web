export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Factory, Wrench, Palette, QrCode } from 'lucide-react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ Xưởng In Ấn Gia Công Công Nghiệp & Kỹ Thuật Máy In B2B',
  description:
    'Hệ thống dịch vụ toàn diện tại xưởng in ấn gia công VNPIS: nhận gia công in Tampon, in Lụa, in UV, in mã QR biến đổi, cho thuê máy in, sửa chữa bảo trì và cân chỉnh màu sắc.',
  keywords: [
    'dịch vụ in ấn gia công',
    'xưởng in ấn gia công VNPIS',
    'gia công in tampon in lụa in uv',
    'cho thuê máy in công nghiệp',
    'sửa chữa máy in date code',
  ],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesHubPage() {
  const serviceLinks = [
    {
      href: '/services/pad-printing-service',
      title: 'Gia Công In Tampon (Pad Printing)',
      desc: 'In logo, thông số kỹ thuật trên linh kiện nhựa, kim loại, y tế, nắp chai với độ bám dính chuẩn 5B.',
      icon: Factory,
    },
    {
      href: '/services/screen-printing-service',
      title: 'Gia Công In Lụa Phẳng & Tròn',
      desc: 'In lụa tự động số lượng lớn trên chai lọ mỹ phẩm, thủy tinh, mặt kính cảm ứng và bảng mạch điện tử.',
      icon: Factory,
    },
    {
      href: '/services/uv-printing-service',
      title: 'Gia Công In Kỹ Thuật Số UV',
      desc: 'In UV phẳng, UV cuộn, phủ UV định hình và in dữ liệu biến đổi sắc nét khô tức thì.',
      icon: Palette,
    },
    {
      href: '/services/qr-printing-service',
      title: 'Gia Công In Mã QR & Dữ Liệu Biến Đổi',
      desc: 'In mã QR truy xuất nguồn gốc, tem chống giả, số nhảy serial và barcode chuẩn GS1 tốc độ cao.',
      icon: QrCode,
    },
    {
      href: '/services/machine-rental',
      title: 'Cho Thuê Máy In Công Nghiệp',
      desc: 'Thuê máy in phun date CIJ, TIJ, máy in Tampon trọn gói bảo trì 24/7, không tốn chi phí đầu tư CapEx.',
      icon: Wrench,
    },
    {
      href: '/services/machine-repair',
      title: 'Sửa Chữa & Bảo Trì Máy In Công Nghiệp',
      desc: 'Xử lý sự cố máy in Videojet, Domino, Hitachi, máy in Tampon, máy in Lụa và cân chỉnh màu ICC Profile.',
      icon: Wrench,
    },
  ];

  return (
    <>
      <LandingPage
        title="Hệ Sinh Thái Dịch Vụ In Ấn Gia Công & Kỹ Thuật Công Nghiệp"
        subtitle="Từ dịch vụ nhận in gia công Tampon, in Lụa, in UV, in bao bì tem nhãn tại xưởng VNPIS đến dịch vụ cho thuê máy, sửa chữa bảo trì và quản trị màu sắc chuyên sâu cho nhà máy B2B."
        category="Dịch Vụ Kỹ Thuật & Gia Công"
      />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Danh Mục Dịch Vụ Chủ Lực Tại VNPIS
            </h2>
            <p className="text-slate-600">
              Giải pháp linh hoạt giúp doanh nghiệp tối ưu hóa chi phí sản xuất và đảm bảo tiến độ giao hàng khắt khe nhất.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceLinks.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.href}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all group flex flex-col"
                >
                  <IconComponent className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {srv.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-orange-600">
                    Xem chi tiết dịch vụ <ArrowRight className="w-4 h-4 ml-1" />
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
