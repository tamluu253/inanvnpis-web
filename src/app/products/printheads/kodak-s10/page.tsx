export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hệ Thống Đầu In Phun Tốc Độ Cao Kodak Prosper S10 Imprinting',
  description:
    'Giải pháp đầu in phun liên tục Kodak Prosper S10 công nghệ Stream Inkjet cho dây chuyền in dữ liệu biến đổi (VDP), mã vạch, QR Code thương mại tốc độ lên tới 300m/phút.',
  keywords: [
    'đầu in kodak s10',
    'kodak prosper s10',
    'in dữ liệu biến đổi tốc độ cao',
    'đầu phun công nghiệp kodak',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/printheads/kodak-s10',
  },
};

export default function KodakS10Page() {
  return (
    <LandingPage
      title="Hệ Thống Đầu In Phun Tốc Độ Cao Kodak Prosper S10"
      subtitle="Giải pháp in kỹ thuật số tích hợp (Hybrid Imprinting) khổ rộng 105.6mm với độ phân giải 600 DPI và tốc độ lên tới 300m/phút, chuyên dụng cho in bao bì, xổ số, tem nhãn bảo mật và dữ liệu biến đổi."
      category="Hệ Thống Đầu In Tốc Độ Cao"
    />
  );
}
