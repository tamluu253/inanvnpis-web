export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hệ Thống Máy In Phun UV Công Nghiệp Khổ Rộng CT21 Tốc Độ Cao',
  description:
    'Hệ thống máy in phun UV công nghiệp CT21 ghép nhiều đầu in Piezo khổ rộng cho dây chuyền đóng gói bao bì, thùng carton, thẻ nhựa, nắp chai tốc độ lên tới 80m/phút.',
  keywords: [
    'máy in uv ct21',
    'máy in uv single pass khổ rộng',
    'in dữ liệu biến đổi tốc độ cao',
    'máy in phun uv công nghiệp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/uv-printers/ct21',
  },
};

export default function UVPrinterCT21Page() {
  return (
    <LandingPage
      title="Hệ Thống Máy In Phun UV Khổ Rộng Tốc Độ Cao CT21"
      subtitle="Cấu hình đa đầu phun công nghiệp ghép nối liền mạch, kết hợp hệ thống cấp mực áp suất âm tự động và sấy LED UV công suất lớn cho các nhà máy in bao bì và tem nhãn sản lượng lớn."
      category="Máy In UV Công Nghiệp"
    />
  );
}
