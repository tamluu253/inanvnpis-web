export const dynamicParams = true;
import React from 'react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hộp Mực In Phun Nhiệt TIJ 2.5 Tương Thích In Mã QR 600 DPI',
  description:
    'Hộp mực in phun nhiệt TIJ 2.5 VNPIS gốc nước và gốc dung môi nhanh khô dưới 1 giây. In mã vạch 1D/2D, QR Code biến đổi sắc nét 600 DPI trên hộp giấy, màng nilon, nhựa, nhôm.',
  keywords: [
    'mực in tij',
    'hộp mực in phun nhiệt',
    'cartridge mực in date',
    'mực in mã qr 600 dpi',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/tij-inks',
  },
};

export default function TIJInksPage() {
  const content = {
    title: 'Giải Pháp Hộp Mực In Phun Nhiệt TIJ 2.5 Công Nghiệp',
    subtitle:
      'Chất lượng in mã QR và Barcode siêu nét chuẩn 600 DPI. Khô tức thì dưới 1 giây, tương thích hoàn hảo với các dòng máy in TIJ băng tải và cầm tay trên thị trường.',
    category: 'Mực In Mã Vạch & Date Code',
    painPoints: [
      'Mã QR in ra hay bị lem nhem, đứt nét khiến camera kiểm tra hoặc máy quét không đọc được?',
      'Tốc độ dây chuyền đóng gói quá nhanh khiến mực không kịp khô và dính bẩn sang sản phẩm khác?',
      'Chi phí thay hộp mực cartridge chính hãng quá đắt đỏ làm đội giá thành sản xuất?',
      'Đầu phun hộp mực bị khô tắc nghẽn chỉ sau vài giờ hoặc vài ngày ngưng máy?',
    ],
    solutions: [
      {
        title: 'Tốc Độ Khô Cực Nhanh Dưới 1 Giây',
        description:
          'Công thức dung môi Solvent bay hơi nhanh, bám dính ngay lập tức trên màng BOPP, PE, PET, nhôm và giấy cán màng.',
        icon: 'Zap',
      },
      {
        title: 'Độ Phân Giải Chuẩn 600 DPI (Grade A)',
        description:
          'In mã vạch, DataMatrix, QR Code biến đổi sắc nét tuyệt đối, đạt tỷ lệ quét mã thành công 100%.',
        icon: 'ScanLine',
      },
      {
        title: 'Công Nghệ Chống Khô Đầu Phun (Decap Time Dài)',
        description:
          'Giữ đầu in thông thoáng kể cả khi tạm dừng chuyền giữa các ca sản xuất, tiết kiệm lượng mực xả bỏ.',
        icon: 'Droplet',
      },
      {
        title: 'Tiết Kiệm Đến 40% Chi Phí Vật Tư',
        description:
          'Giá thành tối ưu cho nhà máy B2B với đầy đủ tùy chọn chip thông minh và đa dạng màu mực (Đen, Đỏ, Xanh, Trắng, Vàng).',
        icon: 'Wallet',
      },
    ],
    industries: [
      { name: 'Bao bì hộp giấy dược phẩm', icon: 'Pill' },
      { name: 'Thùng carton & túi giấy', icon: 'Box' },
      { name: 'Linh kiện điện tử & PCB', icon: 'Cpu' },
      { name: 'Mỹ phẩm & Thực phẩm F&B', icon: 'Sparkles' },
    ],
  };

  return (
    <>
      <LandingPage {...content} />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Đầy Đủ Hệ Mực Gốc Nước (Aqueous) & Gốc Dung Môi (Solvent)
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Mực in TIJ của VNPIS đáp ứng trọn vẹn cả vật liệu thấm hút (thùng carton, hộp giấy kraft, giấy duplex) lẫn vật liệu không thấm hút (màng nilon, nhựa PP/PE/PET, màng nhôm, vỉ thuốc, kim loại).
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            Nhận Tư Vấn & Gửi Mẫu Hộp Mực TIJ Test Thử
          </a>
        </div>
      </section>
    </>
  );
}
