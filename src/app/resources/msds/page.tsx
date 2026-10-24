export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Hồ Sơ An Toàn Hóa Chất MSDS, TDS & Chứng Nhận RoHS/REACH Mực In',
  description:
    'Tra cứu và yêu cầu cấp bảng dữ liệu an toàn hóa chất MSDS, thông số kỹ thuật TDS, COA và kết quả kiểm nghiệm SGS RoHS 10 / REACH SVHC cho mực in và dung môi VNPIS.',
  keywords: [
    'msds mực in công nghiệp',
    'tds thông số kỹ thuật mực in',
    'chứng nhận rohs reach sgs mực in',
    'an toàn hóa chất ngành in',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/resources/msds',
  },
};

export default function ResourcesMSDSPage() {
  return (
    <LandingPage
      title="Hồ Sơ An Toàn Hóa Chất MSDS, TDS & Chứng Nhận EU RoHS / REACH"
      subtitle="Đáp ứng 100% yêu cầu kiểm toán EHS và tiêu chuẩn xuất khẩu sang thị trường Âu - Mỹ - Nhật. VNPIS cung cấp đầy đủ bộ hồ sơ MSDS 16 mục, TDS, COA và báo cáo test SGS mới nhất theo từng lô mực in và dung môi."
      category="Chứng Nhận An Toàn & Chất Lượng"
    />
  );
}
