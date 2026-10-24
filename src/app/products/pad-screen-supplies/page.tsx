export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Vật Tư Tiêu Hao In Tampon & In Lụa Công Nghiệp Chính Hãng',
  description:
    'Cung ứng trọn bộ vật tư in Tampon và in Lụa: mực in UV/Solvent, dung môi, chất đóng rắn, quả tăm bông Silicone, bản thép Cliché, khung lưới lụa, keo chụp bản và dao gạt mực.',
  keywords: [
    'vật tư in tampon in lụa',
    'dao gạt mực in lụa',
    'khung lưới in lụa',
    'mực in lụa công nghiệp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-screen-supplies',
  },
};

export default function PadScreenSuppliesPage() {
  return (
    <LandingPage
      title="Tổng Kho Vật Tư Tiêu Hao In Tampon & In Lụa Công Nghiệp"
      subtitle="Đáp ứng nhanh chóng mọi vật tư tiêu hao cho xưởng in: mực in, dung môi, primer, quả tăm bông Silicone, bản thép, lưới lụa Polyester/Inox, keo cảm quang và dao gạt Polyurethane."
      category="Vật Tư Tiêu Hao Ngành In"
    />
  );
}
