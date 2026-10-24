// Official B2B Hotline: Mr. Tâm - 0901 836 344 | Email: info@inanvnpis.com (vnpis-web clean production build)
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/lead-gen/FloatingContact';
import GoogleTranslate from '@/components/GoogleTranslate';
import SchemaOrg from '@/components/SchemaOrg';
import { Outfit } from 'next/font/google';
import Script from 'next/script';

const fontMain = Outfit({ subsets: ['latin'], variable: '--font-sans' });

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inanvnpis.com'),
  title: {
    default: 'Xưởng In Ấn Gia Công VNPIS TP.HCM — In Tampon, In Lụa, Bao Bì & Sau In',
    template: '%s | Xưởng In Ấn Gia Công VNPIS',
  },
  description: 'Xưởng in ấn gia công VNPIS TP.HCM chuyên gia công in ấn trọn gói: gia công in tampon (tô chén ly nhựa, linh kiện), gia công in lụa, in bao bì hộp giấy, in túi giấy, in tem nhãn decal, gia công sau in & phân phối vật tư in công nghiệp. Hotline/Zalo Báo Giá 24/7: 0901 836 344 (Mr. Tâm) - 0901 826 344 (Mr. Giang).',
  keywords: [
    'in ấn gia công',
    'xưởng in ấn gia công',
    'gia công in ấn',
    'in ấn VNPIS',
    'gia công in tampon',
    'gia công in lụa',
    'in bao bì hộp giấy',
    'in túi giấy',
    'in tem nhãn decal',
    'gia công sau in',
    'xưởng gia công in tampon tphcm',
    'in kỹ thuật số qr code',
    'vật tư ngành in gia công',
  ],
  openGraph: {
    title: 'Xưởng In Ấn Gia Công VNPIS TP.HCM — In Tampon, In Lụa, Bao Bì & Sau In',
    description: 'Chuyên gia công in ấn trọn gói: In Tampon, In Lụa, In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal, Gia Công Sau In & In KTS QR Code tại TP.HCM. Hotline/Zalo Báo Giá: 0901 836 344.',
    url: 'https://www.inanvnpis.com',
    siteName: 'Xưởng In Ấn Gia Công VNPIS',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: '/images/pad-printing-cups.jpg',
        width: 1200,
        height: 630,
        alt: 'Xưởng In Ấn Gia Công VNPIS TP.HCM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xưởng In Ấn Gia Công VNPIS TP.HCM — In Tampon, In Lụa, Bao Bì & Sau In',
    description: 'Chuyên gia công in ấn trọn gói: In Tampon, In Lụa, In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal, Gia Công Sau In & In KTS QR Code tại TP.HCM. Hotline: 0901 836 344.',
    images: ['/images/pad-printing-cups.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: ['googlefd3afa8a73f86c45', 'xQz99KRkCepH0j7LgeoQ2hHqRA4YqEMOw4rP1nHBHH0'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Google Analytics GA4 cho vnpis.com (G-HGXR16B0NE & G-PGSS2ZC0NZ) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HGXR16B0NE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HGXR16B0NE');
            gtag('config', 'G-PGSS2ZC0NZ');
            gtag('config', 'G-Y2MV182611');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920561344403244');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${fontMain.variable} font-sans flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        <SchemaOrg />
        <GoogleTranslate />
        <Header />
        <main className="flex-grow pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
