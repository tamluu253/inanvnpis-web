export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Máy Khắc Laser Công Nghiệp Fiber, CO2 & UV Laser Tốc Độ Cao',
  description:
    'Giải pháp máy khắc Laser Fiber, CO2 và UV Laser tích hợp băng tải tự động. Khắc vĩnh viễn Date Code, số lô, mã QR Code chống giả trên nhựa, kim loại, thủy tinh, bao bì không tốn mực.',
  keywords: [
    'máy khắc laser công nghiệp',
    'máy in date laser',
    'laser fiber co2 uv',
    'khắc mã qr laser',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/laser-printers',
  },
};

export default function LaserPrintersPage() {
  return (
    <LandingPage
      title="Máy Khắc Laser Công Nghiệp (Fiber, CO2 & UV Laser)"
      subtitle="Giải pháp khắc mã hóa Date Code, Số Lô, Barcode và Logo vĩnh viễn trên dây chuyền tốc độ cao mà không tiêu tốn một giọt mực hay dung môi nào. Chống làm giả tuyệt đối trên kim loại, nhựa HDPE/PP, thủy tinh và hộp giấy."
      category="Thiết Bị Khắc Mã Hóa Laser"
    />
  );
}
