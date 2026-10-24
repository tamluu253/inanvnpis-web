export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu Đọc Mã Vạch & Hệ Thống Camera Kiểm Tra QR Code Công Nghiệp',
  description:
    'Cung cấp đầu đọc mã vạch 1D/2D cố định và hệ thống Camera Vision kiểm tra chất lượng in Date Code, QR Code biến đổi tốc độ cao trên dây chuyền đóng gói nhà máy.',
  keywords: [
    'đầu đọc mã vạch công nghiệp',
    'camera kiểm tra qr code',
    'máy quét barcode băng tải',
    'kiểm tra dữ liệu biến đổi vdp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/barcode-readers',
  },
};

export default function BarcodeReadersPage() {
  return (
    <LandingPage
      title="Đầu Đọc Mã Vạch & Camera Kiểm Tra Mã QR Công Nghiệp"
      subtitle="Giải pháp đọc kiểm tra mã vạch 1D/2D, DataMatrix và QR Code tự động trên băng tải tốc độ cao. Phát hiện tức thì mã lỗi, trùng lặp hoặc mờ nhòe và kích hoạt cơ cấu đá loại sản phẩm lỗi."
      category="Thiết Bị Kiểm Soát Chất Lượng In"
    />
  );
}
