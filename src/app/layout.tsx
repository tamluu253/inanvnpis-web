// Official B2B Hotline: Mr. Tâm - 0901 836 344 | Email: info@vnpis.com (vnpis-web clean production build)
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
  metadataBase: new URL('https://inanvnpis.com'),
  title: {
    default: 'Xưởng Gia Công In Tampon, In Lụa & Vật Tư Ngành In VNPIS TP.HCM',
    template: '%s | Xưởng In VNPIS Solutions',
  },
  description: 'VNPIS Solutions chuyên gia công in tampon (tô chén ly nhựa, linh kiện), in lụa màng nhựa/túi giấy/vải, in KTS QR code dữ liệu biến đổi & phân phối mực in gia công tại TP.HCM. Hotline/Zalo Báo Giá 24/7: 0901 836 344 (Mr. Tâm) - 0901 826 344 (Mr. Giang).',
  keywords: [
    'xưởng gia công in tampon tphcm',
    'gia công in lụa',
    'in tampon ly nhựa tô chén',
    'in kỹ thuật số qr code',
    'mực in tampon afford kt1',
    'máy in tampon 1 màu',
    'vật tư ngành in gia công',
    'xưởng in vnpis solutions'
  ],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Xưởng Gia Công In Tampon, In Lụa & Vật Tư Ngành In VNPIS TP.HCM',
    description: 'Chuyên nhận in gia công Tampon, In Lụa, In KTS dữ liệu biến đổi trên mọi chất liệu tại TP.HCM. Hotline/Zalo Báo Giá: 0901 836 344.',
    url: 'https://inanvnpis.com',
    siteName: 'In Ấn VNPIS Solutions',
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: ['googlefd3afa8a73f86c45', 'xQz99KRkCepH0j7LgeoQ2hHqRA4YqEMOw4rP1nHBHH0'],
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
