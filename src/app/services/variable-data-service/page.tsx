export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ Gia Công In Dữ Liệu Biến Đổi (VDP) Số Lượng Lớn',
  description:
    'Xưởng VNPIS nhận gia công in dữ liệu biến đổi (VDP), in mã vạch nhảy số, mã QR động, mã cào bảo mật trên bao bì dược phẩm, mỹ phẩm, thực phẩm và tem nhãn cuộn.',
  keywords: [
    'dịch vụ in dữ liệu biến đổi',
    'gia công in vdp',
    'in mã vạch nhảy số',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/variable-data-service',
  },
};

export default function VariableDataServicePage() {
  return (
    <LandingPage
      title="Dịch Vụ Gia Công In Dữ Liệu Biến Đổi (VDP) Theo Lô Hàng"
      subtitle="Xử lý đơn hàng gia công in dữ liệu biến đổi công suất hàng trăm ngàn sản phẩm/ngày với hệ thống băng tải tách tờ tự động, đầu phun 600 DPI và Camera đối soát loại bỏ 100% bản in lỗi."
      category="Xưởng Gia Công Dữ Liệu Biến Đổi"
    />
  );
}
