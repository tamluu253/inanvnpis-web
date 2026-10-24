import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vật Tư In Tampon & In Lụa Công Nghiệp: Mực In, Đầu In Silicone, Bản Thép',
  description:
    'Siêu thị vật tư in tampon (pad printing) và in lụa (screen printing) chính hãng: Mực in Marabu, RUCO, Seiko, Coates, đầu in silicone chống tĩnh điện, khuôn bản thép CNC, cốc mực gốm Zirconia, dao gạt và dung môi phụ gia.',
  keywords: [
    'vật tư in tampon',
    'vật tư in pad',
    'vật tư in lụa công nghiệp',
    'mực in tampon Marabu',
    'mực in RUCO',
    'đầu in silicone pad printing',
    'khuôn bản thép in tampon',
    'cốc mực kín vòng gốm',
    'dung môi pha mực in tampon',
  ],
  alternates: {
    canonical: '/products/consumables',
  },
  openGraph: {
    title: 'Vật Tư In Tampon & In Lụa Công Nghiệp: Mực In, Đầu In Silicone, Bản Thép | VNPIS',
    description:
      'Cung cấp trọn bộ vật tư tiêu hao ngành in Tampon và In Lụa: Mực in đạt chuẩn RoHS/REACH, đầu in silicone 30-70 Shore A, khuôn bản thép và phụ kiện cốc mực.',
    url: 'https://www.inanvnpis.com/products/consumables',
    type: 'website',
  },
};

export default function ConsumablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
