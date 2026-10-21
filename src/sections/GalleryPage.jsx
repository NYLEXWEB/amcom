import React, { useState, useEffect, useCallback } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { brandInfo } from '../data/siteData';
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Filter,
} from 'lucide-react';

export default function GalleryPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categorySlug === activeCategory;
  });

  // Handle keyboard events for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, lightboxIndex]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans selection:bg-[#174C55] selection:text-white flex flex-col">
      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Back button */}
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white hover:bg-zinc-100 text-[#172022] text-xs font-semibold tracking-wider uppercase rounded-full border border-[#DCE3E2] transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#174C55]" />
            <span>Back to Home</span>
          </button>

          {/* Logo Center */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={onBackToHome}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onBackToHome()}
          >
            <div className="bg-white p-1 rounded-xs border border-[#DCE3E2]">
              <img src="/logo-bg.png" alt="AMCOM Interiors" className="h-7 sm:h-8 w-auto object-contain" />
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-[11px] font-mono tracking-widest text-[#174C55] font-bold uppercase">
                AMCOM INTERIORS
              </span>
              <span className="text-[10px] font-mono text-[#687477] tracking-wider uppercase">
                ORIGINAL WORK GALLERY
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello AMCOM Interiors, I am browsing your gallery and would like to discuss a project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. INNER BANNER SECTION (Inspired by D'LIFE Gallery Theme) */}
      <section className="bg-[#111618] text-white py-16 sm:py-20 md:py-24 px-6 border-b border-white/10 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#174C55]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6E9297]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#6E9297] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
            <span>ACTUAL PROJECT PHOTOGRAPHS • EST. 1999</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4 uppercase">
            YOUR SPACE. <span className="text-[#6E9297] font-normal">OUR CRAFT.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Expertly crafted interiors photographed on actual completed sites across Kozhikode, Kannur, and Kerala.
            Every image demonstrates our commitment to material honesty, precision joinery, and timeless architectural proportion.
          </p>

          {/* Credentials Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-white/15 text-center font-mono">
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-xl sm:text-2xl font-light text-white block">40+</span>
              <span className="text-[10px] sm:text-[11px] text-[#A2B1B4] uppercase tracking-wider">Site Photographs</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-xl sm:text-2xl font-light text-white block">25+</span>
              <span className="text-[10px] sm:text-[11px] text-[#A2B1B4] uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-xl sm:text-2xl font-light text-white block">100+</span>
              <span className="text-[10px] sm:text-[11px] text-[#A2B1B4] uppercase tracking-wider">Spaces Crafted</span>
            </div>
            <div className="p-3 bg-white/5 border border-white/10">
              <span className="text-xl sm:text-2xl font-light text-white block">Calicut</span>
              <span className="text-[10px] sm:text-[11px] text-[#A2B1B4] uppercase tracking-wider">Kerala Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN GALLERY CONTENT & CATEGORY FILTERS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 flex-1 w-full">
 

        {/* 4. GALLERY PHOTO GRID (D'LIFE Inspired) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item, idx) => {
            const waItemLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
              `Hello AMCOM Interiors, I saw this design in your gallery: "${item.title}" (${item.category}, ${item.location}) and would like to know more.`
            )}`;

            return (
              <div
                key={item.id}
                className="group bg-white border border-[#DCE3E2] overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div
                  className="relative aspect-[16/11] overflow-hidden bg-zinc-950 cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />



                  {/* Top Right Zoom Icon Trigger */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="w-8 h-8 rounded-full bg-white/90 text-[#172022] flex items-center justify-center shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>

           
              </div>
            );
          })}
        </div>

        {/* 5. INQUIRY BANNER AT BOTTOM */}
        <section className="mt-16 sm:mt-20 p-8 sm:p-12 bg-white border border-[#DCE3E2] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E9297] block mb-2 font-bold">
              PLANNING A PROJECT?
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight mb-2">
              Transform Your Space With AMCOM
            </h2>
            <p className="text-xs sm:text-sm text-[#687477] max-w-xl font-light leading-relaxed">
              From individual modular kitchens and bespoke joinery to complete turnkey home renovations across Kerala. Get in touch with our design team for drawings, material curation, and estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello AMCOM Interiors, I would like to book an interior consultation for my space.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 {brandInfo.primaryPhoneRaw}</span>
            </a>
          </div>
        </section>
      </main>

      {/* 6. IMMERSIVE FULL-SCREEN LIGHTBOX MODAL (Apple & D'LIFE Fancybox Inspired) */}
      {lightboxIndex !== null && activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fade-in select-none text-white"
        >
          {/* Top Lightbox Bar */}
          <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 bg-black/40 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#6E9297]">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-medium text-white truncate max-w-xs sm:max-w-md">
                  {activeItem.title}
                </h4>
                <span className="text-[11px] text-white/60 font-mono">
                  {activeItem.category} • {activeItem.location}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Area with Navigation Buttons */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
                )
              }
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[72vh] object-contain rounded-sm shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Info & Action Bar */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 z-20">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-light leading-relaxed">
                {activeItem.description}
              </p>
              <p className="text-[11px] font-mono text-[#6E9297] mt-1">
                Specifications: {activeItem.specs}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                  `Hello AMCOM Interiors, I am viewing "${activeItem.title}" (${activeItem.category}) in your gallery and want to discuss this design.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
              <a
                href={`tel:${brandInfo.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 border-t border-[#DCE3E2] bg-white text-center text-xs text-[#687477]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 AMCOM INTERIORS. All rights reserved.</span>
          <span className="font-mono text-[11px]">Crafting Timeless Interiors Since 1999 • Kozhikode, Kerala</span>
        </div>
      </footer>
    </div>
  );
}
