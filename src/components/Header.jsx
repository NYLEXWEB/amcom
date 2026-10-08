import React, { useState, useEffect } from 'react';
import { brandInfo, navLinks } from '../data/siteData';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] py-4 shadow-[0_2px_12px_rgba(23,76,85,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55]"
            aria-label="AMCOM Interiors Home"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-none transition-all duration-300 group-hover:scale-110 ${
                  isScrolled ? 'bg-[#174C55]' : 'bg-[#6E9297]'
                }`}
              />
              <span
                className={`text-xl md:text-2xl font-semibold tracking-[-0.04em] transition-colors duration-300 ${
                  isScrolled ? 'text-[#172022]' : 'text-[#F8F9F7]'
                }`}
              >
                AMCOM
              </span>
            </div>
            <span
              className={`text-[10px] tracking-[0.25em] font-medium -mt-0.5 pl-4 transition-colors duration-300 ${
                isScrolled ? 'text-[#687477]' : 'text-[#F8F9F7]/80'
              }`}
            >
              INTERIORS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-[#172022]/80 hover:text-[#174C55] after:bg-[#174C55]'
                    : 'text-[#F8F9F7]/90 hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Clean CTA button, NO PHONE NUMBER */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[13px] tracking-wide font-medium rounded-none transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55] ${
                isScrolled
                  ? 'bg-[#174C55] text-[#F8F9F7] hover:bg-[#123b42]'
                  : 'bg-[#174C55] text-[#F8F9F7] border border-white/20 hover:bg-[#123b42] shadow-sm'
              }`}
            >
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#174C55] text-[#F8F9F7] text-xs font-medium tracking-wide flex items-center gap-1.5 border border-white/10"
              aria-label="WhatsApp enquiry"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55] ${
                isScrolled ? 'text-[#172022] hover:text-[#174C55]' : 'text-white hover:text-white/80'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#172022]/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#F8F9F7] z-50 lg:hidden shadow-2xl border-l border-[#DCE3E2] flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between pb-6 border-b border-[#DCE3E2]">
            <div>
              <span className="text-xl font-semibold tracking-[-0.03em] text-[#172022]">AMCOM</span>
              <span className="block text-[10px] tracking-[0.25em] text-[#687477]">INTERIORS</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#172022] hover:text-[#174C55]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-5" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-base tracking-[0.05em] uppercase font-medium text-[#172022] hover:text-[#174C55] border-b border-[#DCE3E2]/50 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#687477] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="p-6 sm:p-8 bg-[#F1F4F2] border-t border-[#DCE3E2]">
          <p className="text-xs text-[#687477] uppercase tracking-wider mb-2">Direct Contact</p>
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
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#174C55] text-[#F8F9F7] text-sm font-medium tracking-wide"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
