export const dynamicParams = true;
import React from 'react';
import type { Metadata } from 'next';
import faqsData from '@/data/faqs.json';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Câu Hỏi Thường Gặp (FAQ) Về Dịch Vụ In Ấn Gia Công & Máy In Công Nghiệp',
  description:
    'Giải đáp chi tiết các câu hỏi thường gặp về dịch vụ in ấn gia công tại xưởng VNPIS: gia công in tampon, in lụa, in QR Code biến đổi, in bao bì hộp giấy, túi giấy, tem nhãn decal, gia công sau in và máy in công nghiệp.',
  keywords: [
    'câu hỏi thường gặp in ấn gia công',
    'faq xưởng in ấn gia công VNPIS',
    'hỏi đáp in tampon in lụa',
    'in bao bì hộp giấy túi giấy tem nhãn decal',
    'gia công sau in',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Câu Hỏi Thường Gặp (FAQ) Về Dịch Vụ In Ấn Gia Công & Máy In | VNPIS',
    description:
      'Thư viện giải đáp chuyên sâu về dịch vụ in ấn gia công, gia công sau in, in Tampon, in Lụa, UV Single Pass, TIJ/CIJ và vật tư mực in công nghiệp.',
    url: 'https://www.inanvnpis.com/faq',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqsData.map((faq) => faq.category)));

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white text-center">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Câu Hỏi Thường Gặp Về Dịch Vụ In Ấn Gia Công &amp; Kỹ Thuật (FAQ)
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Giải đáp chuyên sâu mọi thắc mắc về dịch vụ <strong>in ấn gia công</strong>, <strong>in bao bì hộp giấy, túi giấy, tem nhãn decal</strong>, <strong>gia công sau in</strong>, vật tư mực in và vận hành máy in công nghiệp tại VNPIS.
          </p>
        </div>
      </section>

      {/* 2. FAQ CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-100 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span>
                {category}
              </h2>
              <div className="space-y-4">
                {faqsData
                  .filter((faq) => faq.category === category)
                  .map((faq, faqIdx) => (
                    <details
                      key={faqIdx}
                      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
                        <h3 className="font-bold text-slate-900 text-lg pr-8">{faq.question}</h3>
                        <span className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 group-open:bg-blue-600 group-open:text-white transition-colors">
                          <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </div>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl font-bold mb-6">Bạn Không Tìm Thấy Câu Trả Lời?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Hãy liên hệ trực tiếp với đội ngũ kỹ sư của xưởng in ấn gia công VNPIS. Chúng tôi luôn sẵn sàng hỗ trợ kỹ thuật và báo giá 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0901836344"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-slate-50 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Tâm (In Tampon / KTS): 0901 836 344
            </a>
            <a
              href="tel:0901826344"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-900 text-white font-bold rounded-xl shadow-xl hover:bg-blue-950 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" /> Mr. Giang (In Lụa / Bao Bì): 0901 826 344
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
