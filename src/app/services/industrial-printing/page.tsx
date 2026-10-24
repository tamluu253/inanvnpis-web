export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ In Ấn Gia Công Công Nghiệp Theo Yêu Cầu Sản Lượng Lớn',
  description:
    'Xưởng in ấn gia công công nghiệp VNPIS nhận in Tampon, in Lụa, in UV, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in đạt tiêu chuẩn RoHS/ISO.',
  keywords: [
    'dịch vụ in công nghiệp',
    'in ấn gia công theo yêu cầu',
    'xưởng in ấn gia công VNPIS',
    'gia công in nhựa kim loại thủy tinh',
    'in bao bì tem nhãn B2B',
  ],
  alternates: {
    canonical: '/services/industrial-printing',
  },
};

export default function IndustrialPrintingServicePage() {
  return (
    <LandingPage
      title="Dịch Vụ In Ấn Gia Công Công Nghiệp Đa Chất Liệu (B2B)"
      subtitle="Giải pháp gia công in ấn trọn gói trên nhựa PP/PE/ABS, kim loại, thủy tinh, bao bì hộp giấy, túi giấy và tem nhãn decal. Đảm bảo độ bám dính chuẩn quốc tế, tỷ lệ lỗi dưới 1% và giao hàng đúng tiến độ."
      category="Xưởng Gia Công In Công Nghiệp"
    />
  );
}
