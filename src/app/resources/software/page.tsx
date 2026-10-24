export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Phần Mềm Điều Khiển Máy In Công Nghiệp, RIP Màu & Quản Lý Mã VDP',
  description:
    'Giải pháp phần mềm điều khiển hệ thống in UV Single Pass, phần mềm tạo mã QR Code biến đổi chuẩn GS1, phần mềm RIP quản trị màu sắc ICC Profile và tích hợp ERP/MES.',
  keywords: [
    'phần mềm in dữ liệu biến đổi vdp',
    'phần mềm rip máy in uv',
    'phần mềm tạo mã qr code gs1',
    'tích hợp máy in erp mes',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/resources/software',
  },
};

export default function ResourcesSoftwarePage() {
  return (
    <LandingPage
      title="Phần Mềm Điều Khiển In Dữ Liệu Biến Đổi (VDP) & Quản Trị Màu RIP"
      subtitle="Cung cấp giải pháp phần mềm điều khiển dàn đầu phun công nghiệp, tạo mã QR/DataMatrix động hàng triệu bản ghi không trùng lặp, đồng bộ Camera Vision kiểm tra lỗi và kết nối trực tiếp hệ thống ERP/MES của nhà máy."
      category="Phần Mềm & Tự Động Hóa"
    />
  );
}
