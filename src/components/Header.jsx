import React, { useState } from 'react';
import { brandInfo, navLinks } from '../data/siteData';
import { Menu, X, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <>
      {/* 
        TOP-MERGED NAVBAR 
        Absolute positioned so it seamlessly merges with the hero background image 
        and does NOT stick or follow when scrolling down the page.
      */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full bg-gradient-to-b from-black/85 via-black/45 to-transparent select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
          
          {/* LEFT: AMCOM OFFICIAL LOGO */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="AMCOM Interiors Home"
          >
            {/* Logo Image from public/logo-bg.png */}
            <div className="bg-white/95 p-1.5 sm:p-2 rounded-sm shadow-sm transition-transform duration-300 group-hover:scale-105 border border-white/30">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-8 sm:h-10 md:h-11 w-auto object-contain"
              />
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] xl:text-[13px] tracking-[0.12em] uppercase font-semibold text-white/90 hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300 drop-shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: CALL NOW PILL BUTTON & MENU TRIGGER */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CALL NOW Button (Inspired by reference) */}
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-full border border-white/25 shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label={`Call AMCOM at ${brandInfo.primaryPhone}`}
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Phone className="w-3 h-3 text-white" />
              </div>
              <span className="hidden sm:inline">CALL NOW</span>
              <span className="sm:hidden">CALL</span>
            </a>

            {/* HAMBURGER MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
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
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#111618] text-white z-50 shadow-2xl border-l border-white/15 flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8">
          {/* Drawer Header with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <div className="bg-white/95 p-1.5 rounded-sm">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-8 w-auto object-contain"
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
        <div className="p-6 sm:p-8 bg-black/50 border-t border-white/15 space-y-3">
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
