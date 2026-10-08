import React, { useState, useEffect } from 'react';
import { brandInfo, navLinks } from '../data/siteData';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <>
      {/* FLOATING NAVBAR CONTAINER */}
      <div className="fixed top-3 md:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <header
          className={`pointer-events-auto max-w-6xl w-full rounded-full transition-all duration-300 px-5 sm:px-7 py-3 md:py-3.5 flex items-center justify-between border shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
            isScrolled
              ? 'bg-[#F8F9F7]/90 backdrop-blur-md border-[#DCE3E2]/80 shadow-[0_10px_35px_rgba(23,76,85,0.08)]'
              : 'bg-white/80 backdrop-blur-md border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55]"
            aria-label="AMCOM Interiors Home"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#174C55] rounded-none group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg md:text-xl font-bold tracking-[-0.04em] text-[#172022]">
                AMCOM
              </span>
            </div>
            <span className="text-[9px] tracking-[0.25em] text-[#687477] font-semibold -mt-0.5 pl-4">
              INTERIORS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] tracking-[0.08em] uppercase font-semibold text-[#172022]/85 hover:text-[#174C55] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#174C55] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: Enquire on WhatsApp Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#174C55] text-[#F8F9F7] text-xs tracking-wide font-medium rounded-full hover:bg-[#123b42] hover:shadow-md transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55]"
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#174C55] text-[#F8F9F7] text-[11px] font-medium tracking-wide rounded-full flex items-center gap-1.5 shadow-sm"
              aria-label="WhatsApp enquiry"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#172022] hover:text-[#174C55] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#172022]/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[360px] bg-[#F8F9F7] z-50 lg:hidden shadow-2xl border-l border-[#DCE3E2] flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between pb-5 border-b border-[#DCE3E2]">
            <div>
              <span className="text-xl font-bold tracking-[-0.03em] text-[#172022]">AMCOM</span>
              <span className="block text-[10px] tracking-[0.25em] text-[#687477] font-semibold">INTERIORS</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#172022] hover:text-[#174C55]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm tracking-[0.05em] uppercase font-semibold text-[#172022] hover:text-[#174C55] border-b border-[#DCE3E2]/50 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#687477] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="p-6 bg-[#F1F4F2] border-t border-[#DCE3E2]">
          <p className="text-[11px] text-[#687477] uppercase tracking-wider mb-2 font-mono">Direct Contact</p>
          <a
            href={`tel:${brandInfo.primaryPhoneRaw}`}
            className="block text-sm font-semibold text-[#172022] hover:text-[#174C55] mb-1"
          >
            {brandInfo.primaryPhone}
          </a>
          <a
            href={`tel:${brandInfo.secondaryPhoneRaw}`}
            className="block text-sm font-semibold text-[#172022] hover:text-[#174C55] mb-4"
          >
            {brandInfo.secondaryPhone}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#174C55] text-[#F8F9F7] text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
