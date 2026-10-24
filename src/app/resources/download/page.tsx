export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Tải Catalogue Thiết Bị, Hồ Sơ Năng Lực & Tài Liệu Hướng Dẫn In Ấn',
  description:
    'Tải miễn phí Catalogue máy in Tampon, máy in Lụa, bảng thông số mực in công nghiệp, hướng dẫn vận hành SOP và Hồ Sơ Năng Lực Xưởng In Ấn Gia Công VNPIS.',
  keywords: [
    'tải catalogue máy in công nghiệp',
    'hồ sơ năng lực xưởng in VNPIS',
    'tài liệu hướng dẫn in tampon in lụa',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/resources/download',
  },
};

export default function ResourcesDownloadPage() {
  return (
    <LandingPage
      title="Tải Catalogue Thiết Bị, Bảng Chọn Mực & Hồ Sơ Năng Lực VNPIS"
      subtitle="Cung cấp đầy đủ tài liệu thông số kỹ thuật máy móc, bảng đối chiếu độ bám dính mực in theo từng loại nhựa/kim loại và quy trình vận hành chuẩn SOP cho kỹ thuật viên nhà máy."
      category="Tài Liệu Tải Về (Downloads)"
    />
  );
}
