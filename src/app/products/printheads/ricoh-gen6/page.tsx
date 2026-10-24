export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu In Phun Công Nghiệp Ricoh Gen6 (MH5320) Siêu Nét 5pl',
  description:
    'Cung cấp đầu in phun công nghiệp thế hệ mới Ricoh Gen6 (MH5320) tần số phun 50kHz, giọt mực siêu nhỏ 5pl cho hệ thống in UV Single Pass, in mã QR siêu mịn và in bao bì tốc độ cao.',
  keywords: [
    'đầu in ricoh gen6',
    'ricoh mh5320 printhead',
    'đầu phun uv ricoh gen6',
    'đầu in phun công nghiệp nhật bản',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/printheads/ricoh-gen6',
  },
};

export default function RicohGen6Page() {
  return (
    <LandingPage
      title="Đầu In Phun Công Nghiệp Thế Hệ Mới Ricoh Gen6 (MH5320)"
      subtitle="Bước đột phá về tốc độ và độ sắc nét với kích thước giọt mực tối thiểu chỉ 5pl và tần số đánh lửa lên tới 50kHz, chuyên trị in chữ vi mô, mã QR kích thước nhỏ và hình ảnh chuyển sắc mượt mà."
      category="Đầu Phun Công Nghiệp Ricoh"
    />
  );
}
