export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In & Dung Môi Makeup Tương Thích Máy In Phun Hitachi UX/RX2',
  description:
    'Cung cấp mực in phun CIJ và dung môi Makeup tương thích 100% với máy in date Hitachi RX2, UX-D160W, UX2. Độ bám dính siêu việt, kháng cồn, chịu nhiệt, tiết kiệm 40% chi phí.',
  keywords: [
    'mực in hitachi',
    'dung môi makeup máy in hitachi',
    'mực in tương thích hitachi rx2 ux',
    'mực in phun cij hitachi',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/cij-inks/hitachi',
  },
};

export default function HitachiCIJInksPage() {
  return (
    <LandingPage
      title="Mực In & Dung Môi Tương Thích Máy In Phun Hitachi"
      subtitle="Hệ mực in CIJ và dung môi Makeup độ tinh khiết cao tương thích hoàn hảo với máy in date Hitachi PXR, RX, RX2 và UX Series. Giữ đầu phun sạch, tia mực sắc nét và tiết kiệm đến 40% chi phí vận hành."
      category="Mực In CIJ Theo Hãng Máy"
    />
  );
}
