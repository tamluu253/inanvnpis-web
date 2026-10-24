export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In Tampon (Pad Printing Inks) Bám Dính Cao Đạt Chuẩn RoHS',
  description:
    'Cung cấp mực in Tampon 1 thành phần và 2 thành phần, dung môi pha mực, chất đóng rắn Hardener và Primer xử lý bề mặt nhựa PP, PE, ABS, Silicone, kim loại, thủy tinh.',
  keywords: [
    'mực in tampon',
    'mực in pad printing',
    'dung môi pha mực tampon',
    'chất đóng rắn hardener',
    'mực in nhựa pp pe abs',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-printing/inks',
  },
};

export default function PadPrintingInksPage() {
  return (
    <LandingPage
      title="Mực In Tampon, Dung Môi & Hóa Chất Phụ Trợ Chính Hãng"
      subtitle="Đầy đủ hệ mực in Tampon 1 thành phần, 2 thành phần, chất đóng rắn (Hardener) và dung dịch xử lý bề mặt (Primer) đạt chứng nhận EU RoHS & REACH. Cam kết vượt qua bài test băng keo 3M và cồn 90 độ."
      category="Vật Tư In Tampon (Pad Printing)"
    />
  );
}
