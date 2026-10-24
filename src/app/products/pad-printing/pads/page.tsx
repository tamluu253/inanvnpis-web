export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Quả Tăm Bông In Tampon (Silicone Pads) Nguyên Liệu Đức Bền Bỉ',
  description:
    'Chế tạo và cung cấp quả tăm bông Silicone Pad in Tampon đa dạng hình dáng (nhọn, tròn, dài, rỗng) và độ cứng Shore A. Chống tĩnh điện, truyền mực sắc nét 100%, tuổi thọ trên 50.000 lần dập.',
  keywords: [
    'quả tăm bông in tampon',
    'silicone pad in tampon',
    'cục cao su in pad',
    'đầu in tampon silicone',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-printing/pads',
  },
};

export default function PadPrintingPadsPage() {
  return (
    <LandingPage
      title="Quả Tăm Bông In Tampon (Silicone Pads) Độ Đàn Hồi Chuẩn Xác"
      subtitle="Gia công hơn 500 biên dạng đầu in Silicone Pad từ nguyên liệu Silicone Đức cao cấp với dải độ cứng từ 5 đến 45 Shore A. Truyền mực dứt khoát, không bọt khí, chuyên trị các bề mặt cong, gân nổi và hốc sâu."
      category="Vật Tư In Tampon (Pad Printing)"
    />
  );
}
