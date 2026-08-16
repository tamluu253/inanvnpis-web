import React from 'react';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hộ Kinh Doanh VNPIS Solutions - Xưởng Gia Công In Ấn",
    "image": "https://inanvnpis.com/images/inanvnpis-logo.png",
    "@id": "https://inanvnpis.com",
    "url": "https://inanvnpis.com",
    "telephone": "0901836344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "description": "Xưởng gia công in ấn VNPIS Solutions chuyên nhận in gia công Tampon ly tô chén nhựa, in lụa màng nhựa/vải/túi giấy, và in QR Code dữ liệu biến đổi tại TP.HCM.",
    "priceRange": "$$",
    "sameAs": [
      "https://zalo.me/0901836344",
      "https://zalo.me/0901826344"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
