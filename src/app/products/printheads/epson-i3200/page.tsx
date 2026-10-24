export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Đầu In Phun Công Nghiệp Epson I3200 (U1 / A1 / E1) Chính Hãng',
  description:
    'Cung cấp đầu in phun Epson I3200-U1 (UV), I3200-A1 (Nước) và I3200-E1 (Eco-Solvent) chính hãng Nhật Bản. Công nghệ 3200 lỗ phun MEMS siêu nét, tốc độ cao, giá sỉ cho xưởng in.',
  keywords: [
    'đầu in epson i3200',
    'epson i3200-u1 uv',
    'đầu phun epson i3200 chính hãng',
    'thay đầu in máy in uv',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/printheads/epson-i3200',
  },
};

export default function EpsonI3200Page() {
  return (
    <LandingPage
      title="Đầu In Phun Công Nghiệp Epson I3200 (I3200-U1 / A1 / E1)"
      subtitle="Sở hữu 3.200 lỗ phun mật độ cao với công nghệ Variable Sized Droplet (VSDT) giọt mực biến thiên từ 2.5pl, mang lại chất lượng bản in sắc nét tuyệt đối cho máy in UV phẳng, UV cuộn và DTF công nghiệp."
      category="Đầu Phun Công Nghiệp Epson"
    />
  );
}
