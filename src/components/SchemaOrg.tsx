import React from 'react';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Công ty TNHH VNPIS - Giải Pháp In Ấn Công Nghiệp",
    "image": "https://vnpis.com/images/vnpis-logo.png",
    "@id": "https://vnpis.com",
    "url": "https://vnpis.com",
    "telephone": "0987453866",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "description": "Công ty TNHH VNPIS cung cấp giải pháp in ấn công nghiệp B2B, in dữ liệu biến đổi VDP, máy in tampon, máy in lụa và mực in công nghiệp.",
    "priceRange": "$$",
    "sameAs": [
      "https://zalo.me/0987453866"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
