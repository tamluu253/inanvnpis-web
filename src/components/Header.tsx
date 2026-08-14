'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, PhoneCall, ExternalLink } from 'lucide-react';

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
      name: 'In Tampon Gia Công',
      href: '/in-tampon',
      dropdown: [
        { name: 'In Tô, Ly, Cốc Nhựa', href: '/in-tampon' },
        { name: 'In Linh Kiện & Đồ Gia Dụng', href: '/in-tampon' },
        { name: 'In Quà Tặng Doanh Nghiệp', href: '/in-tampon' },
      ],
    },
    {
      name: 'In Lụa Gia Công',
      href: '/in-lua',
      dropdown: [
        { name: 'In Lụa Túi Giấy & Túi Nilon', href: '/in-lua' },
        { name: 'In Lụa Vải & Áo Đồng Phục', href: '/in-lua' },
        { name: 'In Lụa Màng Nhựa Phẳng', href: '/in-lua' },
      ],
    },
    {
      name: 'In KTS & QR Code VDP',
      href: '/in-ky-thuat-so',
      dropdown: [
        { name: 'In Mã QR Code Biến Đổi', href: '/in-ky-thuat-so' },
        { name: 'In Barcode / Serial Nhảy', href: '/in-ky-thuat-so' },
        { name: 'Gia Công In VDP Tận Nhà Máy', href: '/in-ky-thuat-so' },
      ],
    },
    {
      name: 'Năng Lực Xưởng In',
      href: '/#capacity',
    },
    {
      name: 'Báo Giá Tận Xưởng',
      href: '/#quote',
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
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all font-sans text-slate-800">
      <div className="container mx-auto px-4 h-20 lg:h-22 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <img 
            src="/images/inanvnpis-logo.png" 
            alt="In Ấn VNPIS Logo" 
            className="h-10 lg:h-12 w-auto object-contain transition-all" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/images/inanvnpis-logo.png')) {
                target.src = '/images/inanvnpis-logo.png';
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative group h-20 flex items-center"
              onMouseEnter={() => item.dropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="ml-1 w-4 h-4 text-slate-400" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-16 left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl py-3 transition-all duration-200 origin-top ${
                    activeMenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      rel={subItem.external ? "noopener noreferrer" : undefined}
                      className="block px-5 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-semibold transition-colors"
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
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500 font-medium">Hotline Xưởng In</span>
            <a href="tel:0987453866" className="text-blue-600 font-extrabold text-lg hover:text-blue-700 transition-colors">
              0987 453 866
            </a>
          </div>
          <Link
            href="/#quote"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg shadow-blue-600/20"
          >
            Bảng Tính Báo Giá
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col space-y-2">
                <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-900 text-lg py-2 border-b border-slate-100">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    {item.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined} 
                        className="text-slate-600 text-sm font-semibold flex items-center"
                      >
                        {subItem.name}
                        {subItem.external && <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col space-y-4">
              <a href="tel:0987453866" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-slate-100 text-slate-800 rounded-xl font-bold border border-slate-200">
                <PhoneCall className="w-5 h-5 mr-2 text-blue-600" /> Hotline: 0987 453 866
              </a>
              <Link href="/#quote" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-md">
                Yêu Cầu Báo Giá
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
