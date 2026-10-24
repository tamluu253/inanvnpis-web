export const dynamicParams = true;
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Tư Vấn Giải Pháp Kỹ Thuật & Chuyển Giao Công Nghệ In Công Nghiệp',
  description:
    'Dịch vụ tư vấn thiết kế dây chuyền in Tampon, in Lụa, in UV, in mã hóa Date Code tự động. Xây dựng quy trình vận hành chuẩn SOP và đào tạo kỹ thuật viên tại nhà máy.',
  keywords: [
    'tư vấn kỹ thuật in công nghiệp',
    'chuyển giao công nghệ in tampon in lụa',
    'tư vấn mở xưởng in công nghiệp',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/services/consulting',
  },
};

export default function ConsultingServicePage() {
  return (
    <LandingPage
      title="Tư Vấn Kỹ Thuật & Chuyển Giao Công Nghệ In Công Nghiệp Trọn Gói"
      subtitle="Đội ngũ kỹ sư trên 10 năm kinh nghiệm của VNPIS trực tiếp khảo sát hiện trường, thử nghiệm hóa chất bám dính tại phòng Lab, thiết kế đồ gá Jig tự động hóa và đào tạo quy trình SOP cho nhân sự nhà máy."
      category="Tư Vấn & Chuyển Giao Công Nghệ"
    />
  );
}
