export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dự Án Thực Tế & Case Studies In Ấn Công Nghiệp B2B',
  description:
    'Tổng hợp các dự án triển khai thực tế của VNPIS: giải pháp in lụa PCB điện tử, in mã QR biến đổi ngành dược phẩm, in date chai thủy tinh ướt lạnh F&B và in gia công nhựa.',
  keywords: [
    'dự án in công nghiệp VNPIS',
    'case studies in ấn gia công',
    'in lụa pcb điện tử',
    'in qr code dược phẩm',
    'in chai thủy tinh ướt lạnh',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      href: '/case-studies/dien-tu-in-lua-pcb',
      category: 'Ngành Điện Tử & Bán Dẫn',
      title: 'Tự Động Hóa Dây Chuyền In Lụa Mạch Điện Tử (PCB) & Mặt Kính Cảm Ứng',
      summary:
        'Giải quyết triệt để lỗi lệch tâm chồng màu và nâng độ chính xác định vị CCD lên ±0.02mm cho nhà máy sản xuất linh kiện điện tử FDI.',
      result: 'Giảm 85% tỷ lệ phế phẩm, tăng 40% năng suất ca máy',
    },
    {
      href: '/case-studies/duoc-pham-qr-code',
      category: 'Ngành Dược Phẩm & Thiết Bị Y Tế',
      title: 'Giải Pháp In Mã QR Code Biến Đổi (VDP) Truy Xuất Nguồn Gốc Dược Phẩm Chuẩn GS1',
      summary:
        'Tích hợp hệ thống in phun nhiệt TIJ 600 DPI kết hợp Camera Vision kiểm tra 100% mã QR trên hộp thuốc tốc độ 120 sản phẩm/phút.',
      result: 'Tỷ lệ đọc mã đạt chuẩn Grade A 99.98%, kháng cồn y tế 90°',
    },
    {
      href: '/case-studies/fnb-wet-glass',
      category: 'Ngành Đồ Uống & Thực Phẩm (F&B)',
      title: 'In Date Code Bám Dính Tuyệt Đối Trên Chai Thủy Tinh Ướt Lạnh Dây Chuyền Bia & Nước Ngọt',
      summary:
        'Ứng dụng mực in phun CIJ chuyên dụng kháng ngưng tụ hơi nước, bám chặt ngay tức thì trên vỏ chai thủy tinh lạnh ướt và chịu thanh trùng.',
      result: 'Tiết kiệm 35% chi phí mực & dung môi so với mực hãng',
    },
  ];

  return (
    <>
      <LandingPage
        title="Dự Án Thực Tế & Hồ Sơ Năng Lực (Case Studies)"
        subtitle="Minh chứng năng lực kỹ thuật của VNPIS qua các dự án thực chiến tại hàng trăm nhà máy FDI và doanh nghiệp sản xuất bao bì, dược phẩm, F&B, điện tử trên toàn quốc."
        category="Hồ Sơ Năng Lực B2B"
      />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block text-orange-600 font-bold text-sm uppercase tracking-wider mb-2">
              Dự Án Tiêu Biểu
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nghiên Cứu Tình Huống Thực Tế Tại Nhà Máy Khách Hàng
            </h2>
            <p className="text-slate-600">
              Khám phá cách đội ngũ kỹ sư VNPIS phân tích nguyên nhân gốc rễ, thử nghiệm tại phòng Lab và triển khai giải pháp in công nghiệp tối ưu chi phí.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, index) => (
              <Link
                key={index}
                href={cs.href}
                className="flex flex-col bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-orange-500 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    {cs.category}
                  </span>
                  <FileText className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {cs.summary}
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cs.result}</span>
                </div>
                <span className="inline-flex items-center font-bold text-sm text-orange-600">
                  Xem chi tiết dự án <ArrowRight className="w-4 h-4 ml-1.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
