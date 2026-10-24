export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hệ Thống Đầu In Phun Kỹ Thuật Số Kodak Prosper S5 Imprinting',
  description:
    'Hệ thống đầu in phun Kodak Prosper S5 tốc độ 152m/phút, độ phân giải 600x600 DPI chuyên dụng tích hợp lên máy in Offset, Flexo để in mã QR biến đổi và số nhảy bảo mật.',
  keywords: [
    'đầu in kodak s5',
    'kodak prosper s5',
    'in dữ liệu biến đổi offset flexo',
    'hệ thống in phun kodak',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/printheads/kodak-s5',
  },
};

export default function KodakS5Page() {
  return (
    <LandingPage
      title="Hệ Thống Đầu In Phun Kỹ Thuật Số Kodak Prosper S5"
      subtitle="Nâng cấp dây chuyền in Offset/Flexo truyền thống thành hệ thống in dữ liệu biến đổi (VDP) tốc độ 152m/phút với độ nét chuẩn laser 600 DPI trên cả giấy thấm hút và màng cán."
      category="Hệ Thống Đầu In Tốc Độ Cao"
    />
  );
}
