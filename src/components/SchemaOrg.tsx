import React from 'react';

export default function SchemaOrg() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "PrintShop"],
        "@id": "https://inanvnpis.com/#organization",
        "name": "Hộ Kinh Doanh VNPIS Solutions - Xưởng Gia Công In Ấn",
        "alternateName": "Xưởng In VNPIS Solutions",
        "image": "https://inanvnpis.com/images/inanvnpis-logo.png",
        "url": "https://inanvnpis.com",
        "telephone": "+84901836344",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "18 Đường số 4, KDC Đại Phúc Green Villas, Xã Bình Hưng",
          "addressLocality": "TP. Hồ Chí Minh",
          "addressRegion": "TP. Hồ Chí Minh",
          "postalCode": "700000",
          "addressCountry": "VN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.7258,
          "longitude": 106.6667
        },
        "hasMap": "https://share.google/N6YpipmVmhVDnLSBA",
        "description": "Xưởng gia công in ấn VNPIS Solutions chuyên nhận in gia công Tampon ly tô chén nhựa, in lụa màng nhựa/vải/túi giấy, và in QR Code dữ liệu biến đổi tại Xã Bình Hưng, TP. Hồ Chí Minh.",
        "sameAs": [
          "https://zalo.me/0901836344",
          "https://zalo.me/0901826344"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://inanvnpis.com/#service-tampon",
        "name": "Gia Công In Tampon Chuyên Nghiệp",
        "provider": { "@id": "https://inanvnpis.com/#organization" },
        "serviceType": "In Tampon Gia Công",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "description": "Dịch vụ in gia công Tampon sắc nét trên các bề mặt cong, lõm, ly nhựa, tô chén dĩa, linh kiện điện tử tại TP. Hồ Chí Minh."
      },
      {
        "@type": "Service",
        "@id": "https://inanvnpis.com/#service-in-lua",
        "name": "Gia Công In Lụa Đa Chất Liệu",
        "provider": { "@id": "https://inanvnpis.com/#organization" },
        "serviceType": "In Lụa Gia Công",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "description": "Gia công in lụa túi giấy, túi nilon, màng nhựa phẳng, áo đồng phục số lượng lớn tại TP. Hồ Chí Minh."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
