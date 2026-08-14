import React from 'react';
import Link from 'next/link';
import { Settings, PhoneCall, ArrowLeft, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import sjScreenPrinters from '@/data/sj-screen-printers.json';

export const metadata = {
  title: 'Catalog Máy In Lụa Sanjin SJ (Full Video Xưởng & Specs) | VNPIS',
  description: 'Catalog 14 model máy in lụa Sanjin SJ chính hãng. Tích hợp video quay thực tế xưởng vận hành in 360 độ chai lọ, nắp hộp, cốc giấy, thước phẳng.',
};

export default function SJScreenPrintersCatalog() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/products/screen-printers" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Trở lại danh mục Máy In Lụa
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Settings className="w-5 h-5" />
              <span>Catalog Sanjin (SJ) Screen Printer (14 Models + Video Xưởng)</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Danh Mục Máy In Lụa Sanjin (SJ)</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tổng hợp 14 model máy in lụa Sanjin (SJ) chính hãng đi kèm **video quay thực tế xưởng vận hành** in chai lọ 360 độ, cốc giấy, thỏi son, nắp chai và thước thủy.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center md:text-right flex-shrink-0">
            <p className="text-sm text-slate-500 font-medium mb-2">Nhận Báo Giá & Tư Vấn Cấu Hình</p>
            <a href="tel:0987453866" className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg shadow-lg shadow-emerald-500/30">
              <PhoneCall className="w-5 h-5 mr-2" />
              0987 453 866
            </a>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(sjScreenPrinters as any[]).map((machine) => (
            <div key={machine.model} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col overflow-hidden group p-6">
              
              {/* Media Section: Video if available, else Image */}
              <div className="aspect-[4/3] bg-slate-900 relative rounded-2xl overflow-hidden mb-6 border border-slate-200">
                {machine.video ? (
                  <div className="w-full h-full relative group/video">
                    <video 
                      src={machine.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-3 pointer-events-none">
                      <span className="text-white text-xs font-semibold flex items-center bg-emerald-600/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        <PlayCircle className="w-3.5 h-3.5 mr-1" />
                        {machine.videoTitle || "Video Thực Tế Xưởng"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <Image 
                    src={machine.image}
                    alt={machine.name || machine.model}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 bg-slate-100"
                  />
                )}
                <div className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm z-10">
                  Model {machine.model}
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{machine.name || machine.model}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed min-h-[40px]">{machine.desc}</p>
                
                {/* Full Specs Box */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2 text-sm mt-auto mb-6">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Thông số kỹ thuật chi tiết</h4>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Kích thước khung bản:</span>
                    <span className="font-semibold text-slate-800">{machine.plateSize}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Khổ in tối đa:</span>
                    <span className="font-semibold text-slate-800">{machine.printArea}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Tốc độ in:</span>
                    <span className="font-semibold text-slate-800">{machine.speed}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Áp suất khí nén:</span>
                    <span className="font-semibold text-slate-800">{machine.airPressure}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Trọng lượng máy:</span>
                    <span className="font-semibold text-slate-800">{machine.weight}</span>
                  </div>
                  <div className="flex justify-between py-1 pt-2">
                    <span className="text-slate-500">Nguồn điện:</span>
                    <span className="font-semibold text-slate-800">{machine.power}</span>
                  </div>
                </div>

                <a href="tel:0987453866" className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md shadow-emerald-500/20">
                  Tư Vấn & Báo Giá: 0987 453 866
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
