export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Máy In Tampon & Máy In Lụa Công Nghiệp Tự Động Hóa',
  description:
    'Tổng hợp các dòng máy in Tampon (Pad Printer) và máy in Lụa phẳng/tròn (Screen Printer) bán tự động và tự động hoàn toàn kết hợp băng tải sấy UV/IR cho nhà máy B2B.',
  keywords: [
    'máy in tampon và máy in lụa',
    'máy in lụa tròn tự động',
    'máy in lụa phẳng công nghiệp',
    'máy in pad công nghiệp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-screen-machines',
  },
};

export default function PadScreenMachinesPage() {
  return (
    <LandingPage
      title="Hệ Thống Máy In Tampon & Máy In Lụa Công Nghiệp"
      subtitle="Cung cấp giải pháp thiết bị in Tampon và in Lụa phẳng/tròn từ bán tự động đến dây chuyền tự động hóa tích hợp định vị CCD, mâm xoay Servo và lò sấy UV/IR đồng bộ."
      category="Thiết Bị Máy In Công Nghiệp"
    />
  );
}
