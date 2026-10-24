'use client';
export const dynamicParams = true;

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Gia Công In Tampon Logo Đa Sắc Trên Ly Nhựa, Tô Chén & Nắp Chai',
    category: 'Gia Công In Tampon',
    image: '/images/pad-printing-cups.jpg',
    description:
      'Dự án in ấn gia công bằng công nghệ in Tampon 4 màu tự động trên bề mặt cong của ly nhựa PP/PET, tô chén Melamine và nắp chai nước giải khát với độ bám dính đạt chuẩn 3M 5B.',
  },
  {
    id: 2,
    title: 'In Bao Bì Hộp Giấy, In Túi Giấy & Gia Công In Lụa Thương Hiệu',
    category: 'In Lụa & Bao Bì Sau In',
    image: '/images/screen-printing-bags.jpg',
    description:
      'Sản xuất trọn gói in túi giấy Kraft/Couche, in bao bì hộp giấy quà tặng kết hợp gia công in lụa và gia công sau in (ép kim logo, ép nhũ nóng, phủ UV định hình) sắc nét.',
  },
  {
    id: 3,
    title: 'In Tem Nhãn Decal Mã QR Code Biến Đổi (VDP) & Số Nhảy Chống Giả',
    category: 'In KTS & QR Code VDP',
    image: '/images/qr-code-printing.jpg',
    description:
      'Gia công in kỹ thuật số UV Single Pass mã QR Code biến đổi, số Serial nhảy liên tục và mã vạch GS1 trên tem nhãn decal, thẻ cào và bao bì hộp giấy dược phẩm tích hợp Camera Vision.',
  },
  {
    id: 4,
    title: 'Gia Công In Tampon & In Lụa Trên Linh Kiện Nhựa Kỹ Thuật ABS / PC',
    category: 'Linh Kiện Điện Tử',
    image: '/media/blog/muc-in-nhua-abs.jpg',
    description:
      'In ấn gia công thông số kỹ thuật và ký hiệu siêu mảnh (±0.05mm) lên vỏ thiết bị điện tử, nút bấm, công tắc nhựa ABS/PC bằng hệ mực công nghiệp đạt chuẩn RoHS và Halogen-Free.',
  },
  {
    id: 5,
    title: 'Giải Pháp In Ấn Gia Công Trên Nhựa Khó Bám PP, PE, HDPE Xử Lý Corona',
    category: 'Nhựa Công Nghiệp & Mỹ Phẩm',
    image: '/media/blog/muc-in-nhua-pp-pe-abs-hdpe.jpg',
    description:
      'Ứng dụng công nghệ xử lý bề mặt Corona/Plasma trước khi gia công in lụa tròn 360° và ép nhũ nóng (gia công sau in) lên chai lọ mỹ phẩm, can nhựa HDPE và phụ tùng nhựa PP/PE.',
  },
  {
    id: 6,
    title: 'In Ấn Bao Bì Thực Phẩm & Dược Phẩm Đạt Tiêu Chuẩn An Toàn FDA',
    category: 'Thực Phẩm & Dược Phẩm',
    image: '/media/blog/muc-in-tij-tieu-chuan-fda.jpg',
    description:
      'Gia công in mã truy xuất nguồn gốc, NSX/HSD và logo lên bao bì hộp giấy, màng ghép thực phẩm và vỉ thuốc sử dụng hệ mực in an toàn đạt tiêu chuẩn FDA Hoa Kỳ.',
  },
  {
    id: 7,
    title: 'In Mã Vạch GS1, Số Lô & Thông Tin Xuất Khẩu Trên Bao Bì Hộp Giấy & Carton',
    category: 'Bao Bì Đóng Gói Xuất Khẩu',
    image: '/media/blog/muc-nuoc-tij-hw-in-carton.jpg',
    description:
      'Dự án in ấn gia công mã vạch thùng carton, bao bì hộp giấy và túi giấy công nghiệp độ phân giải 600 DPI giúp tối ưu hóa quản lý kho thông minh cho doanh nghiệp xuất khẩu.',
  },
  {
    id: 8,
    title: 'In Tem Nhãn Decal Mã Vạch Tùy Biến & Gia Công Sau In Phủ Nhũ Cào',
    category: 'Tem Nhãn Bảo Mật & VDP',
    image: '/media/blog/muc-tij-tuy-bien-ma-vach.jpg',
    description:
      'In tem nhãn decal cuộn/tờ chứa dữ liệu biến đổi kết hợp gia công sau in: cán màng bóng/mờ, bế đứt nửa chính xác và kéo nhũ cào bảo mật (Scratch-off) chống hàng giả tuyệt đối.',
  },
];

export default function DuAnPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 pt-24">
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4 border border-cyan-500/30">
            Hồ Sơ Năng Lực Thực Tế — Xưởng In Ấn Gia Công VNPIS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Thư Viện Dự Án In Ấn Gia Công, Bao Bì &amp; Gia Công Sau In
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tổng hợp các dự án thực tế đã triển khai tại <strong>xưởng in ấn gia công VNPIS</strong>: từ <strong>gia công in tampon</strong>, <strong>gia công in lụa</strong> trên nhựa ABS/PP/PE, kim loại, thủy tinh đến <strong>in bao bì hộp giấy, in túi giấy, in tem nhãn decal</strong> và <strong>gia công sau in</strong> (ép kim, ép nhũ nóng, phủ UV định hình).
          </p>
        </div>
      </section>

      {/* 2. PROJECT CARDS GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              Các Dự Án Gia Công Tiêu Biểu Cho Khách Hàng Doanh Nghiệp (B2B)
            </h2>
            <p className="text-slate-600 text-sm">
              100% dự án đều được kiểm định độ bám dính bằng băng keo 3M Cross-cut 5B và kiểm soát chất lượng ngoại quan nghiêm ngặt trước khi xuất xưởng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 bg-slate-50 flex flex-col transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/85 text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Gửi Mẫu Sản Phẩm Để In Test Miễn Phí Ngay Hôm Nay
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Kỹ sư tại xưởng in ấn gia công VNPIS sẵn sàng hỗ trợ in mẫu thử miễn phí trong 24h và tư vấn giải pháp tối ưu chi phí nhất cho đơn hàng của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0901836344"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full text-sm transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon / KTS): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-full text-sm transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa / Bao Bì): 0901 826 344
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
