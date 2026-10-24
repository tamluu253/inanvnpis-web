import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đầu Phun Công Nghiệp Chính Hãng: Ricoh Gen5/Gen6, Epson i3200, Kyocera, Konica',
  description:
    'Phân phối đầu phun máy in công nghiệp chính hãng Nhật Bản: Ricoh Gen5, Ricoh Gen6, Epson i3200, Kyocera KJ4A, Konica Minolta KM1024i, Toshiba CE4M và Seiko Alpha.',
  keywords: [
    'đầu phun công nghiệp',
    'đầu phun Ricoh Gen5',
    'đầu phun Ricoh Gen6',
    'đầu phun Epson i3200',
    'đầu phun Kyocera KJ4A',
    'đầu phun Konica 1024i',
    'đầu in UV công nghiệp',
  ],
  alternates: {
    canonical: '/products/printheads',
  },
  openGraph: {
    title: 'Đầu Phun Công Nghiệp Chính Hãng: Ricoh, Epson, Kyocera, Konica | VNPIS',
    description:
      'Danh mục đầu phun công nghiệp Piezo DOD hiệu suất cao cho hệ thống máy in UV Single Pass và máy in kỹ thuật số công nghiệp.',
    url: 'https://www.inanvnpis.com/products/printheads',
    type: 'website',
  },
};

export default function PrintheadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
