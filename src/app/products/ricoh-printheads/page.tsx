export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu In Phun Công Nghiệp Ricoh Gen5 & Gen6 Chính Hãng Nhật Bản',
  description:
    'Nhà phân phối và lắp đặt đầu in phun công nghiệp Ricoh Gen5 (MH5420) và Ricoh Gen6 (MH5320) chính hãng cho máy in UV phẳng, máy in UV cuộn và dây chuyền in UV Single Pass B2B.',
  keywords: [
    'đầu in ricoh',
    'đầu phun ricoh gen5 gen6',
    'đầu in uv công nghiệp',
    'bảo trì đầu in ricoh',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/ricoh-printheads',
  },
};

export default function RicohPrintheadsPage() {
  return (
    <LandingPage
      title="Đầu In Phun Công Nghiệp Ricoh Nhật Bản (Gen5 & Gen6)"
      subtitle="Cung cấp đầu phun Piezo vỏ thép bền bỉ hàng đầu thế giới từ Ricoh, kèm dịch vụ lắp đặt, căn chỉnh hội tụ màu, phục hồi đầu phun nghẹt và cung ứng mực in UV chuẩn hãng."
      category="Đầu Phun Công Nghiệp (Printheads)"
    />
  );
}
