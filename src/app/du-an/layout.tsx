import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Thư Viện Dự Án In Ấn Gia Công, Bao Bì Hộp Giấy & Gia Công Sau In Thực Tế',
  description:
    'Tổng hợp các dự án thực tế tại xưởng in ấn gia công VNPIS: gia công in tampon, in lụa tròn/phẳng, in QR Code biến đổi, in bao bì hộp giấy, in túi giấy, in tem nhãn decal và gia công sau in cho doanh nghiệp B2B.',
  keywords: [
    'dự án in ấn gia công',
    'hình ảnh xưởng in ấn gia công VNPIS',
    'in bao bì hộp giấy',
    'in túi giấy',
    'in tem nhãn decal',
    'gia công sau in',
    'gia công in tampon in lụa',
  ],
  alternates: {
    canonical: '/du-an',
  },
  openGraph: {
    title: 'Thư Viện Dự Án In Ấn Gia Công, Bao Bì Hộp Giấy & Gia Công Sau In | VNPIS',
    description:
      'Khám phá các dự án gia công in tampon, in lụa, in QR Code biến đổi, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in thực tế tại xưởng VNPIS.',
    url: 'https://www.inanvnpis.com/du-an',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    images: [
      {
        url: '/images/pad-printing-cups.jpg',
        width: 1200,
        height: 630,
        alt: 'Dự án in ấn gia công thực tế tại xưởng VNPIS',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function DuAnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
