export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ Gia Công In Mã QR Code Biến Đổi & Tem Chống Giả B2B',
  description:
    'Nhận gia công in mã QR Code biến đổi, số serial nhảy, mã cào trúng thưởng trên bao bì hộp giấy, túi màng ghép, thẻ nhựa và tem nhãn decal cuộn số lượng lớn tại xưởng VNPIS.',
  keywords: [
    'gia công in mã qr code',
    'dịch vụ in qr biến đổi',
    'in tem chống giả qr code',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/qr-printing-service',
  },
};

export default function QRPrintingServicePage() {
  return (
    <LandingPage
      title="Dịch Vụ Gia Công In Mã QR Code Biến Đổi & Tem Nhãn Bảo Mật"
      subtitle="Nhận in gia công hàng triệu mã QR Code định danh, mã dự thưởng và Barcode GS1 không trùng lặp trên phôi hộp giấy, nhãn decal, thẻ cào và nắp chai với quy trình bảo mật dữ liệu tuyệt đối."
      category="Xưởng Gia Công Mã QR & VDP"
    />
  );
}
