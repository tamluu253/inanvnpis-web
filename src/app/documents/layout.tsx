import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Tài Liệu Kỹ Thuật, Chứng Nhận RoHS, Halogen-Free & MSDS Mực In',
  description:
    'Tải xuống báo cáo kiểm nghiệm RoHS, chứng nhận Halogen-Free, REACH và bảng dữ liệu an toàn vật liệu (MSDS) cho các dòng mực in công nghiệp và dung môi tại xưởng in ấn gia công VNPIS.',
  keywords: [
    'chứng nhận rohs mực in',
    'báo cáo halogen free mực in',
    'msds mực in công nghiệp',
    'tài liệu kỹ thuật in ấn VNPIS',
  ],
  alternates: {
    canonical: '/documents',
  },
  openGraph: {
    title: 'Tài Liệu Kỹ Thuật, Chứng Nhận RoHS, Halogen-Free & MSDS Mực In | VNPIS',
    description:
      'Trung tâm tài liệu kỹ thuật, chứng nhận quốc tế RoHS, Halogen-Free và MSDS cho các dòng mực in Tampon, in Lụa, TIJ/CIJ tại VNPIS.',
    url: 'https://www.inanvnpis.com/documents',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
