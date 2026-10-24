export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu In Phun Công Nghiệp Ricoh Gen5 (MH5420 / MH5440) Chính Hãng',
  description:
    'Phân phối đầu in phun công nghiệp Ricoh Gen5 (MH5420/MH5440) vỏ thép không gỉ siêu bền, 1280 lỗ phun, giọt mực 7pl cho máy in UV phẳng Flatbed và hệ thống UV Single Pass.',
  keywords: [
    'đầu in ricoh gen5',
    'ricoh mh5420 printhead',
    'đầu phun máy in uv ricoh gen5',
    'thay đầu in ricoh chính hãng',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/printheads/ricoh-gen5',
  },
};

export default function RicohGen5Page() {
  return (
    <LandingPage
      title="Đầu In Phun Công Nghiệp Ricoh Gen5 (MH5420 / MH5440)"
      subtitle="Chuẩn mực vàng của ngành in UV công nghiệp với cấu trúc toàn bộ bằng thép không gỉ chống ăn mòn, 1.280 lỗ phun (4x320), kích thước giọt mực 7pl - 35pl và tuổi thọ hàng tỷ lần phun."
      category="Đầu Phun Công Nghiệp Ricoh"
    />
  );
}
