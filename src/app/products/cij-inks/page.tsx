export const dynamicParams = true;
import React from 'react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Mực In Phun CIJ Tương Thích Bám Dính Cao, Chịu Nhiệt, Kháng Cồn',
  description:
    'Giải pháp mực in phun liên tục CIJ và dung môi Makeup VNPIS tương thích 100% máy Hitachi, Videojet, Domino, Leibinger. Chuyên trị cáp điện, đông lạnh, luộc hấp 100°C.',
  keywords: [
    'mực in cij',
    'mực in phun date code',
    'mực in tương thích hitachi videojet domino',
    'mực in kháng cồn',
    'mực in cáp điện',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/cij-inks',
  },
};

export default function CIJInksPage() {
  const content = {
    title: 'Giải Pháp Mực In Phun CIJ Tương Thích Hoàn Hảo',
    subtitle:
      'Tiết kiệm đến 40% chi phí vận hành với chất lượng vượt trội. Tương thích 100% với các dòng máy in date công nghiệp Hitachi, Videojet, Leibinger, Domino, Linx.',
    category: 'Mực In & Dung Môi Công Nghiệp',
    painPoints: [
      'Mực in date bị bong tróc, bay màu khi tiếp xúc với cồn y tế 90 độ hoặc dung môi hóa chất?',
      'Mã ngày sản xuất / QR bị mờ nhòe khi luộc hấp thanh trùng ở 100°C - 121°C trong 90 phút?',
      'Mực in trên màng PE/HDPE thực phẩm đông lạnh (-18°C) bị rớt chữ do ngưng tụ hơi nước?',
      'Mực trắng/vàng in trên dây cáp điện PVC/PE đen bị nứt gãy, không bám dính hoặc nghẹt béc?',
    ],
    solutions: [
      {
        title: 'Độ Bám Dính Siêu Việt Trên Vật Liệu Khó',
        description:
          'Bám dính vĩnh viễn trên dây cáp điện PVC/PE, ống nhựa HDPE, chai thủy tinh ướt lạnh và kim loại có dầu.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Chịu Nhiệt Độ Cực Đoan (Đông Lạnh & Luộc Hấp)',
        description:
          'Dòng mực chuyên dụng chịu luộc hấp thanh trùng Retort 100°C - 121°C và mực cấp đông sâu -18°C.',
        icon: 'Thermometer',
      },
      {
        title: 'Kháng Cồn 90 Độ & Hóa Chất Mạnh',
        description:
          'Không bay màu khi chà xát mạnh với cồn công nghiệp 90 độ, dung môi tẩy rửa, kiềm hoặc acid nhẹ.',
        icon: 'TestTube',
      },
      {
        title: 'Tương Thích Tuyệt Đối - Bảo Vệ Đầu In',
        description:
          'Độ tinh khiết lọc 0.2 micron giúp máy chạy mượt mà 24/7, không nghẹt béc trên máy Hitachi, Videojet, Domino.',
        icon: 'CheckCircle2',
      },
    ],
    industries: [
      { name: 'Sản xuất dây cáp điện & ống nhựa', icon: 'Cable' },
      { name: 'Thực phẩm đông lạnh & đồ hộp', icon: 'Snowflake' },
      { name: 'Dược phẩm & Y tế (Kháng cồn)', icon: 'Pill' },
      { name: 'Đồ uống (Chai PET/Thủy tinh ướt)', icon: 'Coffee' },
    ],
  };

  return (
    <>
      <LandingPage {...content} />

      {/* Video Proofs Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bằng Chứng Thực Tế Tại Phòng Lab & Nhà Máy (Video Test)
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Trăm nghe không bằng một thấy. Dưới đây là các video kiểm nghiệm thực tế khắc nghiệt nhất mà dòng mực in phun CIJ của VNPIS đã vượt qua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1: Boiling Test */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/cij-boiling-test.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Test Mực Chịu Luộc Hấp Nhiệt Độ Cao
                </h3>
                <p className="text-slate-600 text-sm">
                  Kiểm nghiệm mực CIJ chịu nước sôi và hấp thanh trùng trên bao bì thực phẩm không bong tróc, không lem.
                </p>
              </div>
            </div>

            {/* Video 2: Glass Test */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/cij-glass-test.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Test Độ Bám Dính Trên Thủy Tinh
                </h3>
                <p className="text-slate-600 text-sm">
                  Độ bám dính siêu việt và chống cào xước trên bề mặt chai lọ thủy tinh ngành dược phẩm và đồ uống.
                </p>
              </div>
            </div>

            {/* Video 3: Hitachi Test */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/cij-hitachi-test.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Test Vận Hành Thực Tế Máy In Hitachi
                </h3>
                <p className="text-slate-600 text-sm">
                  Mực và dung môi VNPIS tương thích hoàn hảo, tia mực ổn định và sắc nét trên máy in phun Hitachi.
                </p>
              </div>
            </div>

            {/* Video 4: Wet Cold Glass Bottle */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/blog/muc-in-chai-thuy-tinh-uot-lanh-bia-nuoc-ngot.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  In Trên Chai Thủy Tinh Ướt Lạnh (Bia/Nước Ngọt)
                </h3>
                <p className="text-slate-600 text-sm">
                  Mực xuyên qua lớp màng nước ngưng tụ, bám chặt tức thì trên vỏ chai bia và nước giải khát lạnh.
                </p>
              </div>
            </div>

            {/* Video 5: Yellow/White Ink on PVC */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/blog/muc-in-nhua-pvc-vang-trang.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Test Mực Trắng & Vàng Pigment Trên Nhựa PVC
                </h3>
                <p className="text-slate-600 text-sm">
                  Độ tương phản cực cao, không lắng cặn, bám dính vĩnh viễn trên bề mặt dây cáp điện và nhựa PVC tối màu.
                </p>
              </div>
            </div>

            {/* Video 6: PE Pipe Printing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow">
              <video
                src="/media/blog/muc-in-ong-pe-ong-nhua.mp4"
                controls
                muted
                preload="metadata"
                className="w-full h-48 object-cover bg-slate-900"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Test Mực In Chuyên Dụng Trên Ống Nhựa PE/HDPE
                </h3>
                <p className="text-slate-600 text-sm">
                  Khắc phục hoàn toàn hiện tượng trôi mực trên nhựa PE/PP không phân cực, chịu ma sát khi vận chuyển.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Yêu Cầu Gửi Mẫu Mực Test Miễn Phí Tại Nhà Máy
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
