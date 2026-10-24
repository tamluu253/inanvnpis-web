export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Điều Khoản Sử Dụng Dịch Vụ Gia Công In Ấn',
  description: 'Điều khoản sử dụng dịch vụ in ấn gia công và chính sách cung cấp thiết bị, vật tư in công nghiệp tại Công ty TNHH VNPIS.',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Điều Khoản Sử Dụng Dịch Vụ</h1>
          <p className="text-slate-500 text-sm mb-8">Cập nhật lần cuối: Ngày 10 tháng 08 năm 2026</p>

          <div className="prose prose-slate max-w-none space-y-6 leading-relaxed">
            <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">1. Quy Định Dịch Vụ In Ấn Gia Công, Thiết Bị &amp; Vật Tư B2B</h2>
            <p>
              VNPIS chuyên cung cấp dịch vụ in ấn gia công trọn gói (gia công in Tampon, in Lụa, in bao bì hộp giấy, túi giấy, tem nhãn decal, gia công sau in), máy in Tampon, máy in Lụa, máy in KTS Single Pass tốc độ cao và trọn bộ vật tư in ấn (mực in TIJ/CIJ, dung môi Thinner/Flush, đầu in silicon, bản thép, khung lụa).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">2. Quy Trình Khảo Sát &amp; Thử Nghiệm Phôi In</h2>
            <p>
              Đối với dịch vụ gia công in ấn và thử nghiệm vật tư, khách hàng vui lòng cung cấp phôi in mẫu để kỹ sư VNPIS test độ bám dính (ISO 2409 / băng keo 3M) và chọn mã mực tối ưu trước khi tiến hành hợp đồng sản xuất hàng loạt.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">3. Chính Sách Bảo Hành &amp; Cứu Hộ Đầu In</h2>
            <p>
              Dịch vụ cứu hộ đầu in kỹ thuật số tại VNPIS Lab áp dụng chính sách <strong>No Cure - No Pay (Không thành công, Không tính phí)</strong>. Tất cả các thiết bị máy in do VNPIS cung cấp được bảo hành chính hãng theo quy chuẩn nhà sản xuất.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-6 mb-3">4. Địa Chỉ Chi Nhánh Hoạt Động Cụ Thể</h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-4 space-y-2">
              <p className="font-bold text-slate-900">Công ty TNHH VNPIS (MST: 0318266611)</p>
              <p>🏭 <strong>Xưởng Gia Công &amp; VP Kinh Doanh:</strong> 18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng, TP. Hồ Chí Minh</p>
              <p>🏢 <strong>Trụ sở chính:</strong> Tầng 1, 202 Lê Lai, Phường Bến Thành, TP. Hồ Chí Minh</p>
              <p>🔬 <strong>Lab Center 1:</strong> 62 Trần Thị Nơi, Phường Chánh Hưng (P.4, Q.8), TP. Hồ Chí Minh</p>
              <p className="pt-2 font-semibold text-blue-600">Hotline/Zalo hỗ trợ B2B: <a href="tel:0901836344" className="hover:underline">0901 836 344</a> (Mr. Tâm) - <a href="tel:0901826344" className="hover:underline">0901 826 344</a> (Mr. Giang) | Email: <a href="mailto:info@inanvnpis.com" className="hover:underline">info@inanvnpis.com</a></p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
            <Link href="/" className="text-blue-600 font-bold hover:underline">
              &larr; Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
