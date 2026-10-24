export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import { Apple, Pill, Shirt, Package, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Các Ngành Nghề Ứng Dụng In Ấn Gia Công & Giải Pháp In Công Nghiệp',
  description:
    'Khám phá các giải pháp in ấn gia công (in tampon, in lụa, in QR Code biến đổi, in bao bì hộp giấy, túi giấy, tem nhãn decal, gia công sau in) chuyên biệt cho ngành Thực phẩm, Dược phẩm, Mỹ phẩm, May mặc, Bao bì, Điện tử.',
  keywords: [
    'ngành nghề ứng dụng in ấn gia công',
    'in ấn gia công thực phẩm dược phẩm',
    'in bao bì hộp giấy mỹ phẩm',
    'in tampon linh kiện điện tử',
    'xưởng in ấn gia công VNPIS',
  ],
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Các Ngành Nghề Ứng Dụng In Ấn Gia Công & Giải Pháp In Công Nghiệp | VNPIS',
    description:
      'Giải pháp in ấn gia công, mã hóa dữ liệu biến đổi và gia công sau in chuyên biệt cho ngành Thực phẩm, Dược phẩm, Mỹ phẩm, May mặc, Bao bì, Điện tử.',
    url: 'https://www.inanvnpis.com/industries',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function IndustriesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang Chủ',
        item: 'https://www.inanvnpis.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ngành Nghề Ứng Dụng',
        item: 'https://www.inanvnpis.com/industries',
      },
    ],
  };

  const industries = [
    {
      id: 'food-beverage',
      name: 'Thực Phẩm & Đồ Uống (F&B)',
      icon: <Apple className="w-8 h-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description:
        'Đảm bảo an toàn vệ sinh thực phẩm với các dòng mực đạt chuẩn FDA/RoHS và dây chuyền in ấn gia công tốc độ cao.',
      features: [
        'Gia công in tampon, in lụa lên ly nhựa PP/PET, tô chén dĩa, nắp chai nước giải khát.',
        'In date, hạn sử dụng, mã QR dự thưởng bên trong lòng nắp chai và đáy lon.',
        'In bao bì hộp giấy, túi giấy Kraft thực phẩm và in tem nhãn decal chịu đông lạnh.',
      ],
    },
    {
      id: 'pharmaceuticals',
      name: 'Dược Phẩm & Mỹ Phẩm',
      icon: <Pill className="w-8 h-8" />,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      description:
        'Nâng tầm thẩm mỹ bao bì mỹ phẩm cao cấp và chống hàng giả tuyệt đối cho dược phẩm, thực phẩm chức năng.',
      features: [
        'Gia công in lụa tròn 360° và ép kim, ép nhũ nóng lên chai serum, hũ kem, vỏ son.',
        'In bao bì hộp giấy mỹ phẩm, phủ UV định hình (Spot UV) và dập nổi thương hiệu.',
        'In số lô, mã vạch GS1, tem nhãn decal QR Code chống giả kết hợp phủ nhũ cào.',
      ],
    },
    {
      id: 'garment',
      name: 'May Mặc & Giày Da',
      icon: <Shirt className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description:
        'Số hóa chuỗi cung ứng với công nghệ RFID, in tem nhãn vải và in tampon lên phụ kiện thời trang.',
      features: [
        'Ứng dụng công nghệ RFID để quản lý kho bãi, chống thất thoát chuỗi cung ứng.',
        'In tem nhãn vải satin/ruban, thẻ treo (Hangtag), túi giấy thời trang cao cấp.',
        'Gia công in tampon logo sắc nét lên đế giày, nút áo, khóa kéo và phụ kiện.',
      ],
    },
    {
      id: 'packaging',
      name: 'Bao Bì, Hộp Giấy & Nhựa',
      icon: <Package className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description:
        'Giải quyết bài toán bám dính 3M trên nhựa trơn bóng (PP, PE, HDPE) và gia công sau in bao bì chuyên nghiệp.',
      features: [
        'In dữ liệu biến đổi (VDP) số lượng lớn trên bao bì hộp giấy, thẻ cào, thùng carton.',
        'Xử lý bề mặt Corona/Plasma/Flame giúp mực in bám vĩnh viễn trên nhựa PP, PE, HDPE.',
        'Trọn gói in túi giấy, in tem nhãn decal cuộn và gia công sau in (ép kim, phủ UV).',
      ],
    },
    {
      id: 'electronics',
      name: 'Linh Kiện Điện Tử & Cơ Khí',
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-slate-700',
      bgColor: 'bg-slate-200',
      description:
        'Độ chính xác tuyệt đối ±0.05mm ở mức vi mô. Đáp ứng tiêu chuẩn khắt khe nhất của nhà máy FDI (RoHS, REACH, Halogen-Free).',
      features: [
        'Gia công in tampon thông số kỹ thuật, ký hiệu lên vỏ nhựa ABS/PC, nút bấm, CB, router.',
        'Gia công in lụa phẳng lên mặt máy CNC, vỏ tủ điện nhôm anodized và kính cường lực.',
        'In tem nhãn decal xi bạc, tem thông số kỹ thuật chịu nhiệt độ cao và hóa chất.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
              Giải Pháp In Ấn Gia Công Chuyên Biệt Cho{' '}
              <span className="text-blue-600">Mọi Ngành Công Nghiệp</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mỗi ngành sản xuất đều có những yêu cầu khắt khe riêng về chất liệu bề mặt, độ bám dính 3M, tốc độ dây chuyền và tiêu chuẩn an toàn RoHS/FDA. Tại <strong>xưởng in ấn gia công VNPIS</strong>, chúng tôi tùy biến giải pháp in ấn, bao bì và gia công sau in phù hợp với đặc thù riêng của nhà máy bạn.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES LISTING */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 group"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${industry.bgColor} ${industry.color}`}
                  >
                    {industry.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{industry.name}</h2>
                </div>
                <p className="text-slate-600 mb-6 font-medium">{industry.description}</p>
                <div className="space-y-4 mb-8 flex-grow">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-lg text-white flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold mb-4">Ngành Của Bạn Chưa Được Liệt Kê?</h2>
              <p className="text-blue-100 mb-8">
                Đừng lo lắng! Với hàng trăm mã mực chuyên dụng và đội ngũ kỹ sư giàu kinh nghiệm, xưởng in ấn gia công VNPIS sẵn sàng test mẫu miễn phí trên chính bề mặt vật liệu của bạn.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors mx-auto"
              >
                Yêu Cầu Test Mẫu &amp; Tư Vấn <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
