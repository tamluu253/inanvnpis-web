export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Bản Khắc Thép Cliché & Bản Polymer In Tampon Độ Chính Xác Cao',
  description:
    'Cung cấp phôi và dịch vụ ăn mòn hóa học / khắc Laser bản in Tampon: bản thép dày 10mm, bản thép mỏng 0.5mm, bản Polymer và vòng gốm cốc mực (Ceramic Ring) chính hãng.',
  keywords: [
    'bản khắc thép in tampon',
    'bản in cliché tampon',
    'bản polymer in pad',
    'vòng gốm cốc mực in tampon',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-printing/plates',
  },
};

export default function PadPrintingPlatesPage() {
  return (
    <LandingPage
      title="Bản Khắc Thép Cliché, Bản Polymer & Vòng Gốm In Tampon"
      subtitle="Cung cấp phôi bản thép hợp kim tôi cứng (HRC 62-64) và dịch vụ chế bản độ sâu khắc chuẩn xác từng micron (18 - 30 µm). Kết hợp vòng gốm Zirconia siêu bền giúp gạt mực sạch tuyệt đối, không lem bóng ma."
      category="Vật Tư In Tampon (Pad Printing)"
    />
  );
}
