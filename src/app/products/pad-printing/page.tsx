export const dynamicParams = true;
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cog, Droplet, Layers, ShieldCheck } from 'lucide-react';
import LandingPage from '@/components/templates/LandingPage';

export const metadata = {
  title: 'Thiết Bị & Vật Tư In Tampon (Pad Printing) Toàn Diện',
  description:
    'Danh mục máy in Tampon tự động, mực in Tampon 1-2 thành phần, quả tăm bông Silicone Pad và bản khắc thép Cliché chính hãng từ xưởng in ấn gia công VNPIS.',
  keywords: [
    'in tampon',
    'pad printing',
    'máy in tampon',
    'mực in tampon',
    'silicone pad',
    'bản khắc thép cliché',
    'in ấn gia công',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/products/pad-printing',
  },
};

export default function PadPrintingProductsPage() {
  return (
    <>
      <LandingPage
        title="Hệ Sinh Thái Máy Móc & Vật Tư In Tampon (Pad Printing)"
        subtitle="Cung ứng trọn gói từ máy in Tampon tự động/bán tự động, mực in Tampon bám dính cao, quả tăm bông Silicone Pad đến dịch vụ khắc bản thép Cliché và in gia công Tampon theo yêu cầu."
        category="Thiết Bị & Vật Tư In Tampon"
        image="/images/pad-printing-cups.jpg"
      />

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Danh Mục Sản Phẩm & Giải Pháp In Tampon Chủ Lực
            </h2>
            <p className="text-slate-600">
              Lựa chọn danh mục thiết bị, vật tư tiêu hao hoặc dịch vụ in gia công Tampon phù hợp với dây chuyền sản xuất của nhà máy bạn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="/products/pad-printing/machines"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <Cog className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600">
                Máy In Tampon
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Máy in Tampon cốc mực kín 1-6 màu, bàn trượt shuttle, mâm xoay tự động và tích hợp robot.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-orange-600">
                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/products/pad-printing/inks"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <Droplet className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600">
                Mực In Tampon
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Mực in 1 thành phần, 2 thành phần, dung môi và primer bám dính trên nhựa PP/PE, ABS, kim loại, thủy tinh.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-orange-600">
                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/products/pad-printing/pads"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <Layers className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600">
                Quả Tăm Bông Silicone
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Đầu in Silicone Pad nguyên liệu Đức đa dạng hình dáng và độ cứng Shore A, truyền mực 100%.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-orange-600">
                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/products/pad-printing/plates"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <ShieldCheck className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600">
                Bản In Thép & Polymer
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Bản khắc thép dày 10mm, thép mỏng 0.5mm và bản Polymer độ chính xác micron kèm vòng gốm cốc mực.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-orange-600">
                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/pad-printers"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
            >
              Danh Mục Máy In Tampon Chi Tiết
            </Link>
            <Link
              href="/products/consumables"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
            >
              Tổng Kho Vật Tư Tiêu Hao
            </Link>
            <Link
              href="/in-tampon"
              className="px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors"
            >
              Dịch Vụ Gia Công In Tampon
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
