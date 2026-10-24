export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Máy In Tampon (Pad Printing Machines) Tự Động & Bán Tự Động',
  description:
    'Cung cấp máy in Tampon cốc mực kín (Sealed Cup) và khay mực hở từ 1 đến 6 màu, tích hợp bàn trượt Shuttle, mâm xoay Rotary Indexer và hệ thống tự động cấp phôi cho nhà máy.',
  keywords: [
    'máy in tampon',
    'máy in pad công nghiệp',
    'máy in tampon cốc mực kín',
    'máy in tampon nhiều màu tự động',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-printing/machines',
  },
};

export default function PadPrintingMachinesPage() {
  return (
    <LandingPage
      title="Máy In Tampon Công Nghiệp (1 - 6 Màu Tự Động & Bán Tự Động)"
      subtitle="Thiết kế cơ khí chính xác, vận hành bền bỉ 24/7 với cốc mực kín vòng gốm tiết kiệm 50% dung môi. Đáp ứng từ nhu cầu in logo 1 màu đơn giản đến dây chuyền tự động hoàn toàn tích hợp sấy và cấp phôi."
      category="Thiết Bị In Tampon (Pad Printing)"
    />
  );
}
