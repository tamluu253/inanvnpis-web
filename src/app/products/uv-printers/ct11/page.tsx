export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hệ Thống Máy In Phun UV Công Nghiệp CT11 In Dữ Liệu Biến Đổi',
  description:
    'Hệ thống máy in phun UV Piezo công nghiệp CT11 tích hợp băng tải tốc độ cao. In mã vạch 1D/2D, QR Code biến đổi, số nhảy serial và logo sắc nét trên nhựa, kim loại, hộp giấy, tem nhãn.',
  keywords: [
    'máy in uv ct11',
    'hệ thống in uv dữ liệu biến đổi',
    'máy in qr code uv công nghiệp',
    'máy in uv single pass ct11',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/uv-printers/ct11',
  },
};

export default function UVPrinterCT11Page() {
  return (
    <LandingPage
      title="Hệ Thống Máy In Phun UV Công Nghiệp CT11 (Single Pass VDP)"
      subtitle="Giải pháp in kỹ thuật số UV Single Pass nhỏ gọn, dễ dàng tích hợp lên mọi băng tải tách tờ hoặc cuộn để in mã QR biến đổi, Barcode GS1 và thông tin chống giả khô tức thì bằng đèn LED UV."
      category="Máy In UV Công Nghiệp"
    />
  );
}
