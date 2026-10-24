export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu In Phun Công Nghiệp Epson I3200, S3200, I1600 Chính Hãng',
  description:
    'Phân phối đầu in phun công nghiệp Epson PrecisionCore I3200-U1/A1/E1, S3200, I1600 chính hãng cho máy in UV phẳng, UV cuộn, UV Single Pass và máy in kỹ thuật số công nghiệp.',
  keywords: [
    'đầu in epson',
    'đầu phun epson i3200',
    'epson s3200 printhead',
    'đầu in máy in uv',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/epson-printheads',
  },
};

export default function EpsonPrintheadsPage() {
  return (
    <LandingPage
      title="Đầu In Phun Công Nghiệp Epson Chính Hãng (I3200 / S3200 / I1600)"
      subtitle="Cung cấp các dòng đầu phun công nghệ MEMS PrecisionCore từ Epson Nhật Bản chuyên dụng cho hệ mực UV, Eco-Solvent và mực nước. Hỗ trợ lắp đặt, cân chỉnh điện áp và tạo ICC Profile tận nơi."
      category="Đầu Phun Công Nghiệp (Printheads)"
    />
  );
}
