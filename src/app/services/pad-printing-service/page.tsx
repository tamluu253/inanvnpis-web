export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Dịch Vụ Gia Công In Tampon (Pad Printing) Số Lượng Lớn Tại TP.HCM',
  description:
    'Xưởng nhận gia công in Tampon (in Pad) từ 1 đến 6 màu trên linh kiện nhựa, điện tử, thiết bị y tế, nắp chai, đồ chơi, quà tặng. Bao test băng keo 3M, cồn 90 độ, giá gốc tận xưởng.',
  keywords: [
    'dịch vụ in tampon',
    'gia công in pad',
    'xưởng in tampon tphcm',
    'in logo lên nhựa kim loại',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/pad-printing-service',
  },
};

export default function PadPrintingServicePage() {
  return (
    <LandingPage
      title="Dịch Vụ Gia Công In Tampon (Pad Printing) Theo Yêu Cầu"
      subtitle="Trực tiếp gia công trên dàn máy in Tampon tự động 1 - 6 màu tại xưởng VNPIS. Chuyên trị các bề mặt cong, lồi lõm, rãnh sâu trên linh kiện nhựa PP/PE/ABS, kim loại, y tế với cam kết bao test 3M và kháng cồn 90°."
      category="Xưởng Gia Công In Tampon"
    />
  );
}
