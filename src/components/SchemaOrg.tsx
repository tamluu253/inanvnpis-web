import React from 'react';

export default function SchemaOrg() {
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "PrintShop"],
        "@id": "https://www.inanvnpis.com/#organization",
        "name": "Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS Solutions",
        "alternateName": ["Xưởng In Ấn Gia Công VNPIS", "In Ấn VNPIS", "Xưởng In VNPIS Solutions"],
        "taxID": "0318266611",
        "email": "info@inanvnpis.com",
        "image": "https://www.inanvnpis.com/images/inanvnpis-logo.png",
        "logo": "https://www.inanvnpis.com/images/inanvnpis-logo.png",
        "url": "https://www.inanvnpis.com",
        "telephone": ["+84-901-836-344", "+84-901-826-344"],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+84-901-836-344",
            "contactType": "customer service",
            "areaServed": "VN",
            "availableLanguage": ["Vietnamese", "English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+84-901-826-344",
            "contactType": "sales",
            "areaServed": "VN",
            "availableLanguage": ["Vietnamese"]
          }
        ],
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
          "latitude": 10.719361,
          "longitude": 106.680972
        },
        "hasMap": "https://share.google/N6YpipmVmhVDnLSBA",
        "description": "Công ty TNHH VNPIS - Xưởng in ấn gia công VNPIS Solutions chuyên dịch vụ in ấn gia công trọn gói: gia công in tampon ly tô chén nhựa & linh kiện, gia công in lụa phẳng & tròn, in bao bì hộp giấy, in túi giấy, in tem nhãn decal, gia công sau in ép kim phủ UV, và in QR Code dữ liệu biến đổi tại TP. Hồ Chí Minh.",
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
        "@type": "WebSite",
        "@id": "https://www.inanvnpis.com/#website",
        "url": "https://www.inanvnpis.com",
        "name": "Xưởng In Ấn Gia Công VNPIS",
        "publisher": { "@id": "https://www.inanvnpis.com/#organization" },
        "inLanguage": "vi-VN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.inanvnpis.com/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-in-an-gia-cong",
        "name": "Dịch Vụ In Ấn Gia Công Trọn Gói Theo Yêu Cầu",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "In Ấn Gia Công",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "url": "https://www.inanvnpis.com/dich-vu-in-gia-cong",
        "description": "Xưởng in ấn gia công trọn gói theo yêu cầu cho doanh nghiệp B2B & nhà máy: gia công in tampon, in lụa, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in tại TP. Hồ Chí Minh."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-tampon",
        "name": "Gia Công In Tampon - Pad Printing",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "Gia Công In Tampon",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "url": "https://www.inanvnpis.com/in-tampon",
        "description": "Dịch vụ gia công in Tampon (Pad Printing) sắc nét trên các bề mặt cong, lõm, ly nhựa, tô chén dĩa, nắp chai, linh kiện điện tử và thiết bị y tế tại TP. Hồ Chí Minh."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-in-lua",
        "name": "Gia Công In Lụa Phẳng & Tròn - Screen Printing",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "Gia Công In Lụa",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "url": "https://www.inanvnpis.com/in-lua",
        "description": "Gia công in lụa phẳng và tròn trên bao bì túi giấy, hộp giấy, túi nilon, màng nhựa phẳng, chai lọ mỹ phẩm, thùng sơn công nghiệp số lượng lớn tại TP. Hồ Chí Minh."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-in-kts",
        "name": "Gia Công In Kỹ Thuật Số & QR Code Biến Đổi VDP",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "Gia Công In Kỹ Thuật Số & QR Code",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "url": "https://www.inanvnpis.com/in-ky-thuat-so",
        "description": "Gia công in kỹ thuật số UV Single Pass, TIJ/CIJ và in mã QR Code dữ liệu biến đổi (VDP), số nhảy serial chống giả tốc độ cao tại TP. Hồ Chí Minh."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-bao-bi-sau-in",
        "name": "In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal & Gia Công Sau In Ép Kim, Phủ UV",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "In Bao Bì & Gia Công Sau In",
        "areaServed": "TP. Hồ Chí Minh & Toàn Quốc",
        "url": "https://www.inanvnpis.com/dich-vu-in-gia-cong",
        "description": "Dịch vụ in bao bì hộp giấy, in túi giấy thương hiệu, in tem nhãn decal cuộn/tờ và gia công sau in chuyên nghiệp: ép kim nhũ vàng/bạc, phủ UV định hình, cán màng, bế nổi tại TP. Hồ Chí Minh."
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
