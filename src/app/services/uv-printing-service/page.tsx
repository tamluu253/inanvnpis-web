export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ Gia Công In UV Phẳng, UV Cuộn & UV Single Pass Công Nghiệp',
  description:
    'Xưởng gia công in kỹ thuật số UV phẳng (Flatbed), UV trụ tròn và UV Single Pass tốc độ cao trên nhựa, mica, kim loại, kính, hộp giấy cao cấp và phủ UV định hình.',
  keywords: [
    'dịch vụ in uv',
    'gia công in uv phẳng',
    'in uv công nghiệp tphcm',
    'phủ uv định hình bao bì',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/uv-printing-service',
  },
};

export default function UVPrintingServicePage() {
  return (
    <LandingPage
      title="Dịch Vụ Gia Công In UV Phẳng, UV Trụ Tròn & UV Single Pass"
      subtitle="Ứng dụng dàn đầu phun Ricoh Gen5/Gen6 và mực UV LED cao cấp giúp in trực tiếp hình ảnh đa sắc, phủ bóng Varnish 3D và dữ liệu biến đổi lên mọi bề mặt phẳng hoặc trụ tròn với độ bền màu vượt trội."
      category="Xưởng Gia Công In Kỹ Thuật Số UV"
    />
  );
}
