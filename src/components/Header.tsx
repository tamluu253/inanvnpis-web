'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, PhoneCall, Globe, ExternalLink, Check, Printer, ShieldCheck } from 'lucide-react';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
    external?: boolean;
  }[];
};

const languages = [
  { code: 'vi', name: 'Tiếng Việt', label: 'VI', flag: '🇻🇳' },
  { code: 'en', name: 'English', label: 'EN', flag: '🇬🇧' },
  { code: 'zh-CN', name: '中文 (Chinese)', label: 'ZH', flag: '🇨🇳' },
  { code: 'ja', name: '日本語 (Japanese)', label: 'JA', flag: '🇯🇵' },
  { code: 'ko', name: '한국어 (Korean)', label: 'KO', flag: '🇰🇷' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<string>('vi');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/googtrans=\/vi\/([^;]+)/);
      if (match && match[1]) {
        setCurrentLang(match[1]);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    document.cookie = `googtrans=/vi/${langCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/vi/${langCode}; path=/;`;
    setCurrentLang(langCode);
    setIsMobileLangOpen(false);
    window.location.reload();
  };

  const selectedLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const navigation: NavigationItem[] = [
    {
      name: 'In Tampon',
      href: '/in-tampon',
      dropdown: [
        { name: 'In Tampon Ly Nhựa, Tô Chén, Nắp Chai', href: '/in-tampon' },
        { name: 'In Tampon Linh Kiện Điện Tử & Nhựa ABS/PP', href: '/in-tampon' },
        { name: 'Mực In Tampon Afford KT1 / Marabu', href: '/products/pad-printing/inks' },
        { name: 'Bản Thép In Tampon & Cliche Thép', href: '/products/pad-printing/plates' },
      ],
    },
    {
      name: 'In Lụa',
      href: '/in-lua',
      dropdown: [
        { name: 'In Lụa Màng Nhựa, Túi Giấy & Bao Bì', href: '/in-lua' },
        { name: 'In Lụa Chai Lọ Tròn & Thùng Sơn', href: '/in-lua' },
        { name: 'Khung In Lụa & Dung Môi Pha Mực', href: '/products/screen-printers' },
      ],
    },
    {
      name: 'In KTS & QR Code',
      href: '/in-ky-thuat-so',
      dropdown: [
        { name: 'In QR Code Dữ Liệu Biến Đổi & Số Nhảy', href: '/in-ky-thuat-so' },
        { name: 'Single Pass UV & TIJ Khô Nhanh', href: '/in-ky-thuat-so' },
        { name: 'Camera Inspection Kiểm Tra Mã QR', href: '/in-ky-thuat-so' },
      ],
    },
    {
      name: 'Vật Tư Ngành In',
      href: '/products',
      dropdown: [
        { name: 'Mực In Tampon & In Lụa UV', href: '/products/pad-printing/inks' },
        { name: 'Bản Thép & Cục In Silicone', href: '/products/pad-printing/pads' },
        { name: 'Mực In CIJ / TIJ Công Nghiệp', href: '/products/cij-ink' },
      ],
    },
    {
      name: 'Kiến Thức In Ấn',
      href: '/blog',
    },
    {
      name: 'Năng Lực Xưởng',
      href: '/about',
    },
    {
      name: 'Liên Hệ',
      href: '/contact',
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm font-sans transition-all">
      <div className="container mx-auto px-4 h-20 lg:h-22 flex items-center justify-between">
        {/* Logo INANVNPIS */}
        <Link href="/" className="flex-shrink-0">
          <img src="/images/inanvnpis-logo.png" alt="In Ấn VNPIS Logo" className="h-12 lg:h-14 w-auto transition-all" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative group h-20 flex items-center"
              onMouseEnter={() => item.dropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-bold text-slate-800 hover:text-cyan-600 transition-colors flex items-center"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="ml-1 w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-20 left-0 w-72 bg-white border border-slate-100 shadow-2xl rounded-b-2xl py-3 transition-all duration-200 origin-top ${
                    activeMenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-5 py-2.5 text-xs text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 font-bold transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions with Dual Dedicated Hotlines */}
        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex flex-col items-end border-r border-slate-200 pr-4">
            <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Hotline Tư Vấn Xưởng</span>
            <div className="flex items-center space-x-3 mt-0.5">
              <a href="tel:0901836344" title="Hotline In Tampon & KTS" className="text-xs text-blue-600 font-bold hover:underline">
                Mr. Tâm: <span className="font-extrabold text-sm">0901 836 344</span>
              </a>
              <span className="text-slate-300">|</span>
              <a href="tel:0901826344" title="Hotline In Lụa Gia Công" className="text-xs text-emerald-600 font-bold hover:underline">
                Mr. Giang: <span className="font-extrabold text-sm">0901 826 344</span>
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/20 hover:scale-105"
          >
            Bảng Tính Báo Giá
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => {
              setIsMobileLangOpen(!isMobileLangOpen);
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
            }}
            className="flex items-center text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-full border border-slate-300"
          >
            <Globe className="w-4 h-4 mr-1 text-cyan-600" />
            <span>{selectedLangObj.label}</span>
          </button>

          <button
            className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileLangOpen) setIsMobileLangOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col space-y-2">
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-900 text-base py-2 border-b border-slate-100">
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a href="tel:0901836344" className="flex items-center justify-center py-2.5 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm">
                <PhoneCall className="w-4 h-4 mr-2" /> In Tampon/KTS: 0901 836 344 (Mr. Tâm)
              </a>
              <a href="tel:0901826344" className="flex items-center justify-center py-2.5 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-sm">
                <PhoneCall className="w-4 h-4 mr-2" /> In Lụa Gia Công: 0901 826 344 (Mr. Giang)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
