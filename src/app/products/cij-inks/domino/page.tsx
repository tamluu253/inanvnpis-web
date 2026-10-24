export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In & Dung Môi Makeup Tương Thích Máy In Phun Domino Ax/A-Series',
  description:
    'Cung cấp mực in phun CIJ và dung môi pha loãng (Makeup) tương thích 100% với máy in date Domino A-Series, Ax150i, Ax350i, Ax550i. Bám dính cao, bảo vệ đầu in, tiết kiệm 40% chi phí.',
  keywords: [
    'mực in domino',
    'dung môi máy in domino',
    'mực in tương thích domino ax150i ax350i',
    'mực in phun cij domino',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/cij-inks/domino',
  },
};

export default function DominoCIJInksPage() {
  return (
    <LandingPage
      title="Mực In & Dung Môi Tương Thích Máy In Phun Domino"
      subtitle="Giải pháp mực in CIJ và dung môi Makeup chất lượng cao tương thích hoàn toàn với các dòng máy Domino A120, A220, A320i, Ax150i, Ax350i. Cam kết không nghẹt béc, độ bám dính vượt trội và giảm 35-40% chi phí vận hành."
      category="Mực In CIJ Theo Hãng Máy"
    />
  );
}
