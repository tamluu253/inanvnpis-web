export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Giải Pháp In Dữ Liệu Biến Đổi (Variable Data Printing - VDP)',
  description:
    'Cung cấp giải pháp và dịch vụ in dữ liệu biến đổi (VDP) tốc độ cao: in số nhảy Serial, Barcode 1D/2D, QR Code động, cá nhân hóa bao bì hộp giấy, tem nhãn và thẻ nhựa.',
  keywords: [
    'in dữ liệu biến đổi',
    'variable data printing vdp',
    'in số nhảy serial barcode',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/variable-data-printing',
  },
};

export default function ServiceVariableDataPrintingPage() {
  return (
    <LandingPage
      title="Giải Pháp & Dịch Vụ In Dữ Liệu Biến Đổi (Variable Data Printing)"
      subtitle="Biến mỗi đơn vị bao bì, tem nhãn, nắp chai hoặc thẻ nhựa thành một định danh số duy nhất phục vụ quản lý kho vận WMS, chống bán lấn vùng và kích hoạt bảo hành điện tử."
      category="Công Nghệ In Dữ Liệu Biến Đổi"
    />
  );
}
