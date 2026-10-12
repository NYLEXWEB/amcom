import React, { useState } from 'react';
import { brandInfo, navLinks } from '../data/siteData';
import { Menu, X, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <>
      {/* 
        PREMIUM FLOATING FROSTED GLASS NAVBAR
        Floats seamlessly over the hero section without any dark black overlay.
        Allows the vibrant architectural imagery to shine through completely.
      */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full select-none pt-3.5 sm:pt-5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/35 hover:bg-black/50 backdrop-blur-xl border border-white/20 hover:border-white/35 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center justify-between transition-all duration-500">
            
            {/* LEFT: AMCOM OFFICIAL BRAND LOGO */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="AMCOM Interiors Home"
            >
              <div className="bg-white/95 hover:bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm transition-all duration-300 group-hover:scale-105 border border-white/40 flex items-center">
                <img
                  src="/logo-bg.png"
                  alt="AMCOM Interiors"
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain"
                />
              </div>
            </a>

            {/* CENTER: DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-[11px] xl:text-[12px] tracking-[0.14em] uppercase font-semibold text-white/90 hover:text-white hover:bg-white/15 transition-all duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT: DIRECT CALL BUTTON, WHATSAPP & MOBILE MENU TRIGGER */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* WhatsApp Quick Chat Icon */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 transition-all duration-300 shadow-sm"
                aria-label="Chat with AMCOM on WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              {/* CALL NOW Pill Button */}
              <a
                href={`tel:${brandInfo.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs sm:text-[12px] font-semibold tracking-wider uppercase rounded-full border border-white/30 shadow-[0_4px_16px_rgba(23,76,85,0.4)] hover:shadow-[0_6px_20px_rgba(23,76,85,0.6)] transition-all duration-300 group"
                aria-label={`Call AMCOM at ${brandInfo.primaryPhone}`}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <span className="hidden sm:inline">CALL NOW</span>
                <span className="sm:hidden font-mono text-[11px]">CALL</span>
              </a>

              {/* HAMBURGER MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation drawer"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL-SCREEN / SLIDE-OUT MOBILE & EXPANDED MENU DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#0E1315] text-white z-50 shadow-2xl border-l border-white/15 flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8">
          {/* Drawer Header with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <div className="bg-white/95 px-2.5 py-1 rounded-full border border-white/30">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-7 w-auto object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links in Drawer */}
          <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm sm:text-base tracking-[0.08em] uppercase font-semibold text-white/85 hover:text-white border-b border-white/10 hover:border-[#174C55] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#6E9297] group-hover:text-white transition-colors">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer: Call and WhatsApp buttons */}
        <div className="p-6 sm:p-8 bg-black/60 border-t border-white/15 space-y-3">
          <p className="text-[11px] text-white/50 uppercase tracking-widest font-mono">
            Direct Studio Contact
          </p>

          <a
            href={`tel:${brandInfo.primaryPhoneRaw}`}
            className="w-full flex items-center justify-center gap-2.5 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#174C55]" />
            <span>Call {brandInfo.primaryPhone}</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
