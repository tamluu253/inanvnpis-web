export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { Package, ArrowRight, Printer, Droplet, Layers, Tag, Zap, Flame, Eye } from 'lucide-react';

export const metadata = {
  title: 'Danh Mục Sản Phẩm: Máy In Công Nghiệp, Mực In & Vật Tư In Tampon',
  description: 'Khám phá danh mục máy in tampon (in pad), máy in lụa, máy ép nhũ nóng, máy in UV Single Pass, đầu phun công nghiệp, mực in CIJ/TIJ và siêu thị vật tư in công nghiệp từ VNPIS.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Danh Mục Sản Phẩm: Máy In Công Nghiệp, Mực In & Vật Tư In Tampon | VNPIS',
    description: 'Cung cấp trọn gói máy in tampon, máy in lụa, máy ép nhũ nóng, đầu phun công nghiệp, mực in CIJ/TIJ và vật tư tiêu hao chính hãng.',
    url: 'https://www.inanvnpis.com/products',
    type: 'website',
  },
};

const productCategories = [
  {
    title: 'Mực In CIJ/TIJ Đặc Biệt',
    description: 'Mực dùng cho máy in phun CIJ/TIJ có đặc tính chuyên dụng: kháng dung môi, chịu nhiệt độ cao, bám dính siêu việt trên thủy tinh, cáp điện, kim loại.',
    href: '/products/special-inks',
    icon: <Droplet className="w-10 h-10 text-purple-500" />
  },
  {
    title: 'Siêu Thị Vật Tư In Tampon & In Lụa Công Nghiệp',
    description: 'Cung cấp đầy đủ mực in Marabu/RUCO, đầu in silicone chống tĩnh điện, khuôn bản thép CNC, cốc mực gốm Zirconia, dao gạt và dung môi phụ gia.',
    href: '/products/consumables',
    icon: <Layers className="w-10 h-10 text-orange-500" />
  },
  {
    title: 'Đầu Phun Công Nghiệp',
    description: 'Cung cấp đầu phun Ricoh Gen5/Gen6, Epson i3200, Kyocera, Konica chính hãng hiệu suất cao cho hệ thống in kỹ thuật số UV.',
    href: '/products/printheads',
    icon: <Printer className="w-10 h-10 text-blue-500" />
  },
  {
    title: 'Mực In CIJ & TIJ Công Nghiệp',
    description: 'Mực in phun CIJ tương thích Videojet, Domino, Linx & Hộp mực in nhiệt TIJ HP 45A sắc nét 600dpi tiết kiệm đến 40% chi phí.',
    href: '/products/cij-ink',
    icon: <Package className="w-10 h-10 text-green-500" />
  },
  {
    title: 'Máy In Tampon (Pad Printer)',
    description: 'Hệ thống máy in pad 1 đến 6 màu tự động từ HJ, Sanjin (SJ), Meichao (MC) cho linh kiện điện tử, thiết bị y tế và đồ nhựa gia dụng.',
    href: '/products/pad-printers',
    icon: <Tag className="w-10 h-10 text-red-500" />
  },
  {
    title: 'Máy In Lụa Công Nghiệp (Screen Printer)',
    description: 'Máy in lụa phẳng bàn hút chân không và máy in lụa xoay tròn 360 độ chuyên in chai lọ mỹ phẩm, tuýp nhựa, cốc thủy tinh.',
    href: '/products/screen-printers',
    icon: <Layers className="w-10 h-10 text-emerald-500" />
  },
  {
    title: 'Máy Ép Nhũ Nóng & Gia Công Sau In',
    description: 'Giải pháp máy ép kim, ép nhũ nóng (Hot Stamping) khí nén & thủy lực tạo điểm nhấn ánh kim sang trọng trên bao bì hộp giấy, nắp mỹ phẩm, nhựa, da.',
    href: '/products/hot-stamping',
    icon: <Flame className="w-10 h-10 text-rose-500" />
  },
  {
    title: 'Máy In UV Single Pass & Camera Inspection',
    description: 'Hệ thống máy in UV Single Pass cấp tờ rời tự động và máy cuộn tích hợp Camera Inspection kiểm tra mã biến đổi QR/Barcode 100%.',
    href: '/products/uv-printers',
    icon: <Eye className="w-10 h-10 text-cyan-500" />
  },
  {
    title: 'Máy Khắc Laser Công Nghiệp',
    description: 'Khắc laser Fiber, CO2, UV tốc độ cao, vĩnh viễn trên kim loại, nhựa chống giả và truy xuất nguồn gốc sản phẩm.',
    href: '/products/laser-printers',
    icon: <Zap className="w-10 h-10 text-yellow-500" />
  }
];

export default function ProductsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://www.inanvnpis.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sản phẩm',
        item: 'https://www.inanvnpis.com/products',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-bold tracking-wider mb-4">
            DANH MỤC SẢN PHẨM VNPIS
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Giải Pháp Thiết Bị & Vật Tư In Công Nghiệp
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp trang thiết bị máy in công nghiệp, đầu phun, mực in và vật tư tiêu hao chính hãng giúp tối ưu hóa năng suất và chất lượng dây chuyền sản xuất của bạn.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {cat.title}
              </h2>
              <p className="text-slate-600 mb-8 flex-grow">
                {cat.description}
              </p>
              <div className="flex items-center text-orange-600 font-bold text-sm mt-auto">
                XEM CHI TIẾT <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/30 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Bạn chưa tìm thấy sản phẩm phù hợp?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Đội ngũ kỹ sư VNPIS luôn sẵn sàng khảo sát trực tiếp tại nhà máy để tư vấn giải pháp &ldquo;may đo&rdquo; chính xác theo yêu cầu.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
              Liên Hệ Khảo Sát Ngay (0901 836 344)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
