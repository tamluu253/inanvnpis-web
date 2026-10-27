import React from 'react';

export default function SchemaOrg() {
  const indochinaAreas = [
    { "@type": "Country", "name": "Vietnam" },
    { "@type": "Country", "name": "Cambodia" },
    { "@type": "Country", "name": "Laos" },
    { "@type": "AdministrativeArea", "name": "TP. Hồ Chí Minh" },
    { "@type": "AdministrativeArea", "name": "Bình Dương" },
    { "@type": "AdministrativeArea", "name": "Đồng Nai" },
    { "@type": "AdministrativeArea", "name": "Long An" },
    { "@type": "AdministrativeArea", "name": "Bắc Ninh" },
    { "@type": "AdministrativeArea", "name": "Hà Nội" },
    { "@type": "AdministrativeArea", "name": "Phnom Penh" },
    { "@type": "AdministrativeArea", "name": "Bavet" },
    { "@type": "AdministrativeArea", "name": "Sihanoukville" },
    { "@type": "AdministrativeArea", "name": "Vientiane" },
    { "@type": "AdministrativeArea", "name": "Savannakhet" }
  ];

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "PrintShop", "Manufacturer"],
        "@id": "https://www.inanvnpis.com/#organization",
        "name": "Công ty TNHH VNPIS - Xưởng In Ấn Gia Công VNPIS Solutions",
        "alternateName": [
          "Xưởng In Ấn Gia Công VNPIS",
          "In Ấn VNPIS",
          "Xưởng In VNPIS Solutions",
          "VNPIS Industrial Printing Indochina"
        ],
        "taxID": "0318266611",
        "email": "info@inanvnpis.com",
        "image": "https://www.inanvnpis.com/images/inanvnpis-logo.png",
        "logo": "https://www.inanvnpis.com/images/inanvnpis-logo.png",
        "url": "https://www.inanvnpis.com",
        "telephone": ["+84-901-836-344", "+84-901-826-344"],
        "areaServed": indochinaAreas,
        "knowsAbout": [
          "in tampon gia công",
          "gia công in tampon",
          "in logo lên sản phẩm nhựa",
          "in chữ lên linh kiện điện tử",
          "in nắp chai nhựa",
          "in lụa gia công",
          "gia công in lụa",
          "in lụa chai lọ mỹ phẩm",
          "in lụa tròn 360 độ",
          "in lụa trên nhựa kim loại thủy tinh",
          "in kỹ thuật số dữ liệu biến đổi",
          "in mã QR biến đổi",
          "in tem QR code chống giả",
          "in số nhảy serial number",
          "in thẻ cào biến đổi",
          "in mã vạch biến đổi",
          "in tem truy xuất nguồn gốc",
          "Pad Printing Service Vietnam Cambodia Laos",
          "Industrial Screen Printing Vietnam",
          "Variable Data Printing VDP Supplier Indochina",
          "越南移印加工",
          "越南丝印加工",
          "越南可变数据印刷"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+84-901-836-344",
            "contactType": "customer service",
            "areaServed": ["VN", "KH", "LA"],
            "availableLanguage": ["vi", "en", "zh", "km", "lo"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+84-901-826-344",
            "contactType": "sales",
            "areaServed": ["VN", "KH", "LA"],
            "availableLanguage": ["vi", "en", "zh", "km", "lo"]
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
        "description": "Công ty TNHH VNPIS - Xưởng in ấn gia công VNPIS Solutions chuyên dịch vụ in ấn gia công trọn gói cho nhà máy FDI tại Việt Nam, Lào & Campuchia: gia công in tampon ly tô chén nhựa & linh kiện điện tử, gia công in lụa phẳng & tròn 360 độ, in bao bì hộp giấy, in túi giấy, in tem nhãn decal, gia công sau in ép kim phủ UV, và in mã QR biến đổi VDP / số nhảy serial chống giả.",
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
        "name": "Dịch Vụ In Ấn Gia Công Trọn Gói Theo Yêu Cầu (Việt Nam, Lào, Campuchia)",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "In Ấn Gia Công Công Nghiệp",
        "areaServed": indochinaAreas,
        "url": "https://www.inanvnpis.com/dich-vu-in-gia-cong",
        "description": "Xưởng in ấn gia công trọn gói theo yêu cầu cho doanh nghiệp B2B & nhà máy FDI tại Việt Nam, Campuchia, Lào: gia công in tampon, in lụa, in kỹ thuật số dữ liệu biến đổi VDP, in bao bì hộp giấy, túi giấy, tem nhãn decal và gia công sau in."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-tampon",
        "name": "Gia Công In Tampon - Pad Printing Service",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "Gia Công In Tampon (Pad Printing)",
        "areaServed": indochinaAreas,
        "url": "https://www.inanvnpis.com/in-tampon",
        "description": "Dịch vụ in tampon gia công (Pad Printing) sắc nét ±0.05mm trên các bề mặt cong, lõm, in logo lên sản phẩm nhựa, in chữ lên linh kiện điện tử, in nắp chai nhựa, in ống tiêm y tế, nút bấm silicone tại TP.HCM, Bình Dương, Việt Nam, Lào & Campuchia."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-in-lua",
        "name": "Gia Công In Lụa Phẳng & Tròn 360 Độ - Screen Printing Service",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "Gia Công In Lụa (Screen Printing)",
        "areaServed": indochinaAreas,
        "url": "https://www.inanvnpis.com/in-lua",
        "description": "Dịch vụ in lụa gia công phẳng và in lụa tròn 360 độ trên chai lọ mỹ phẩm, chai thủy tinh, nhựa kim loại inox, bao bì hộp giấy, túi giấy công suất lớn tại Việt Nam, Lào & Campuchia."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-in-kts",
        "name": "Gia Công In Kỹ Thuật Số & Mã QR Biến Đổi VDP",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "In Kỹ Thuật Số Dữ Liệu Biến Đổi (VDP)",
        "areaServed": indochinaAreas,
        "url": "https://www.inanvnpis.com/in-ky-thuat-so",
        "description": "Gia công in kỹ thuật số UV Single Pass, TIJ/CIJ và in mã QR biến đổi (VDP), in tem QR code chống giả, in số nhảy serial number, in thẻ cào biến đổi, in mã vạch biến đổi, in tem truy xuất nguồn gốc tốc độ cao tích hợp Camera Vision QC."
      },
      {
        "@type": "Service",
        "@id": "https://www.inanvnpis.com/#service-bao-bi-sau-in",
        "name": "In Bao Bì Hộp Giấy, Túi Giấy, Tem Nhãn Decal & Gia Công Sau In Ép Kim, Phủ UV",
        "provider": { "@id": "https://www.inanvnpis.com/#organization" },
        "serviceType": "In Bao Bì & Gia Công Sau In",
        "areaServed": indochinaAreas,
        "url": "https://www.inanvnpis.com/dich-vu-in-gia-cong",
        "description": "Dịch vụ in bao bì hộp giấy, in túi giấy thương hiệu, in tem nhãn decal cuộn/tờ và gia công sau in chuyên nghiệp: ép kim nhũ vàng/bạc, phủ UV định hình, cán màng, bế nổi tại Việt Nam, Lào & Campuchia."
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
