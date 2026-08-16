'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, PhoneCall, ExternalLink, BookOpen, Calculator, Award } from 'lucide-react';

type NavigationItem = {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
    external?: boolean;
  }[];
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navigation: NavigationItem[] = [
    {
      name: 'In Tampon',
      href: '/in-tampon',
      dropdown: [
        { name: 'Gia Công In Ly, Tô, Chén Dĩa', href: '/in-tampon' },
        { name: 'In Linh Kiện & Đồ Gia Dụng', href: '/in-tampon' },
        { name: 'In Quà Tặng Doanh Nghiệp', href: '/in-tampon' },
      ],
    },
    {
      name: 'In Lụa',
      href: '/in-lua',
      dropdown: [
        { name: 'In Lụa Túi Giấy & Túi Nilon', href: '/in-lua' },
        { name: 'In Lụa Vải & Áo Đồng Phục', href: '/in-lua' },
        { name: 'In Lụa Màng Nhựa Phẳng', href: '/in-lua' },
      ],
    },
    {
      name: 'In KTS & QR Code',
      href: '/in-ky-thuat-so',
      dropdown: [
        { name: 'In Mã QR Code Biến Đổi (VDP)', href: '/in-ky-thuat-so' },
        { name: 'In Barcode / Serial Nhảy', href: '/in-ky-thuat-so' },
        { name: 'In Dữ Liệu Biến Đổi Tận Nhà Máy', href: '/in-ky-thuat-so' },
      ],
    },
    {
      name: 'Kiến Thức In Ấn',
      href: '/blog',
      dropdown: [
        { name: 'Thư Viện Bài Viết SEO', href: '/blog' },
        { name: 'Kinh Nghiệm In Tampon', href: '/blog' },
        { name: 'Kinh Nghiệm In Lụa', href: '/blog' },
        { name: 'Giải Pháp In KTS & VDP', href: '/blog' },
      ],
    },
    {
      name: 'Năng Lực Xưởng',
      href: '/#capacity',
    },
    {
      name: 'Giới Thiệu',
      href: '/about',
    },
    {
      name: 'Liên Hệ',
      href: '/contact',
    },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all font-sans text-slate-800">
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center mr-4">
          <img 
            src="/images/inanvnpis-logo.png" 
            alt="In Ấn VNPIS Logo" 
            className="h-10 lg:h-11 w-auto object-contain transition-all" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/images/inanvnpis-logo.png')) {
                target.src = '/images/inanvnpis-logo.png';
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative group h-20 flex items-center"
              onMouseEnter={() => item.dropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center whitespace-nowrap"
              >
                {item.name === 'Kiến Thức In Ấn' && (
                  <BookOpen className="w-4 h-4 mr-1.5 text-blue-600 flex-shrink-0" />
                )}
                <span>{item.name}</span>
                {item.dropdown && <ChevronDown className="ml-1 w-3.5 h-3.5 text-slate-400 flex-shrink-0" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-16 left-0 w-60 bg-white border border-slate-200/90 shadow-xl rounded-2xl py-2 transition-all duration-200 origin-top ${
                    activeMenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      rel={subItem.external ? "noopener noreferrer" : undefined}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50/60 hover:text-blue-600 font-semibold transition-colors rounded-xl mx-1"
                    >
                      <span className="flex items-center">
                        {subItem.name}
                        {subItem.external && <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <div className="flex flex-col items-end">
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Hotline Tư Vấn Xưởng</span>
            <div className="flex items-center space-x-2.5 text-xs lg:text-sm font-black">
              <a href="tel:0901836344" className="text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
                Mr. Tâm: 0901 836 344
              </a>
              <span className="text-slate-300">|</span>
              <a href="tel:0901826344" className="text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap">
                Mr. Giang: 0901 826 344
              </a>
            </div>
          </div>
          <Link
            href="/#quote"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg shadow-blue-600/20 text-xs lg:text-sm whitespace-nowrap flex items-center"
          >
            <Calculator className="w-4 h-4 mr-1.5" /> Bảng Tính Báo Giá
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-slate-700 rounded-lg hover:bg-slate-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-6 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col space-y-2">
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-900 text-base py-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="flex items-center">
                    {item.name === 'Kiến Thức In Ấn' && <BookOpen className="w-4 h-4 mr-2 text-blue-600" />}
                    {item.name}
                  </span>
                  {item.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col space-y-2 pt-1">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined} 
                        className="text-slate-600 text-sm font-semibold py-1 flex items-center hover:text-blue-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-4 border-t border-slate-200 flex flex-col space-y-2.5">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider text-center mb-1">Hotline Kỹ Thuật & Báo Giá</div>
              <a href="tel:0901836344" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-2.5 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-200 text-sm">
                <PhoneCall className="w-4 h-4 mr-2 text-blue-600" /> Mr. Tâm: 0901 836 344
              </a>
              <a href="tel:0901826344" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-2.5 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-200 text-sm">
                <PhoneCall className="w-4 h-4 mr-2 text-blue-600" /> Mr. Giang: 0901 826 344
              </a>
              <Link href="/#quote" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-md text-sm mt-2">
                Bảng Tính Báo Giá Tận Xưởng
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
