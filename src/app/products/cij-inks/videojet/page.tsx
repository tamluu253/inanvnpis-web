export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In & Dung Môi Makeup Tương Thích Máy In Phun Videojet',
  description:
    'Cung cấp bình mực và dung môi Makeup tương thích 100% với máy in date Videojet 1220, 1520, 1580, 1280, 1710. Chip thông minh nhận diện chuẩn xác, bám dính cao, tiết kiệm 40% chi phí.',
  keywords: [
    'mực in videojet',
    'dung môi makeup máy in videojet',
    'mực in tương thích videojet 1220 1580',
    'mực in phun cij videojet',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/cij-inks/videojet',
  },
};

export default function VideojetCIJInksPage() {
  return (
    <LandingPage
      title="Mực In & Dung Môi Tương Thích Máy In Phun Videojet"
      subtitle="Cung ứng hộp mực Cartridge SmartCell và dung môi Makeup tương thích 100% cho các dòng máy Videojet 1210, 1220, 1280, 1510, 1520, 1580, 1710. Không cần xúc rửa hệ thống khi chuyển đổi, bảo vệ lõi Core tối đa."
      category="Mực In CIJ Theo Hãng Máy"
    />
  );
}
