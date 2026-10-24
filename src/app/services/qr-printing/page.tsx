export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Giải Pháp & Dịch Vụ In Mã QR Code Truy Xuất Nguồn Gốc Công Nghiệp',
  description:
    'Giải pháp in mã QR Code động, DataMatrix chuẩn GS1 và tem chống hàng giả trực tiếp lên bao bì hộp giấy, nhãn cuộn, nắp chai, vỉ thuốc với tốc độ cao và camera kiểm tra 100%.',
  keywords: [
    'in mã qr code công nghiệp',
    'in qr code truy xuất nguồn gốc',
    'in mã vạch biến đổi gs1',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/qr-printing',
  },
};

export default function QRPrintingPage() {
  return (
    <LandingPage
      title="Giải Pháp In Mã QR Code Động & Truy Xuất Nguồn Gốc Chuẩn GS1"
      subtitle="Định danh độc nhất cho từng sản phẩm với công nghệ in phun UV Single Pass và TIJ 600 DPI kết hợp hệ thống Camera Vision kiểm tra tự động, đảm bảo tỷ lệ quét mã Grade A đạt 100%."
      category="In Mã Hóa & Truy Xuất Nguồn Gốc"
    />
  );
}
