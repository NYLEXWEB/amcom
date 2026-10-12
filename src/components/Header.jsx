import React, { useState, useRef } from 'react';
import { brandInfo, navLinks, productNavItems } from '../data/siteData';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  const handleProductItemClick = (href) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.location.hash = href.replace('#', '');
  };

  return (
    <>
      {/* 
        SEAMLESSLY MERGED NAVBAR
        Directly overlays the hero background with no enclosing pill box or separate border.
      */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full select-none bg-gradient-to-b from-black/80 via-black/35 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-5 sm:py-6 flex items-center justify-between">
          
          {/* LEFT: AMCOM OFFICIAL BRAND LOGO */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="AMCOM Interiors Home"
          >
            <div className="bg-white/95 hover:bg-white px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xs shadow-md transition-all duration-300 group-hover:scale-105 border border-white/40 flex items-center">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION LINKS WITH PRODUCTS DROPDOWN */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMouseEnterProducts}
                    onMouseLeave={handleMouseLeaveProducts}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className={`inline-flex items-center gap-1.5 text-[12px] xl:text-[13px] tracking-[0.14em] uppercase font-semibold py-1 transition-all duration-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] cursor-pointer ${
                        productsDropdownOpen
                          ? 'text-white border-b-2 border-white'
                          : 'text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/60'
                      }`}
                      aria-expanded={productsDropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-white' : 'text-white/70'
                        }`}
                      />
                    </button>

                    {/* FLOATING LUXURY WHITE DROPDOWN MENU */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3.5 w-84 sm:w-96 transition-all duration-300 ease-out z-50 ${
                        productsDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white/98 backdrop-blur-2xl rounded-2xl border border-[#DCE3E2] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18),0_0_1px_rgba(0,0,0,0.08)] overflow-hidden ring-1 ring-black/5">
                        
                        {/* Header Bar */}
                        <div className="px-4 py-3 bg-[#F8F9F7] border-b border-[#E9EEEC] flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#174C55] font-bold">
                            INTERIOR PRODUCTS &amp; ROOMS
                          </span>
                          <span className="text-[10px] font-mono text-[#687477] bg-white px-2 py-0.5 rounded-full border border-[#DCE3E2] font-medium">
                            6 CATEGORIES
                          </span>
                        </div>

                        {/* Items List with Animated Hover Effects */}
                        <div className="p-2 space-y-1">
                          {productNavItems.map((prod) => (
                            <a
                              key={prod.id}
                              href={prod.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleProductItemClick(prod.href);
                              }}
                              className="group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#F1F6F6] transition-all duration-200 text-left cursor-pointer overflow-hidden"
                            >
                              {/* Animated Left Accent Indicator */}
                              <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#174C55] rounded-r-full opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />

                              <div className="pl-1 transition-transform duration-200 group-hover:translate-x-1.5">
                                <span className="text-xs font-bold uppercase tracking-wider text-[#172022] group-hover:text-[#174C55] transition-colors block">
                                  {prod.label}
                                </span>
                                <span className="text-[11px] text-[#687477] group-hover:text-[#172022] font-normal transition-colors block">
                                  {prod.desc}
                                </span>
                              </div>

                              {/* Interactive Arrow Button */}
                              <div className="w-7 h-7 rounded-full bg-[#F8F9F7] group-hover:bg-[#174C55] flex items-center justify-center transition-all duration-200 shadow-xs shrink-0 group-hover:scale-105">
                                <ArrowRight className="w-3.5 h-3.5 text-[#687477] group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5" />
                              </div>
                            </a>
                          ))}
                        </div>

                        {/* Footer Explore Link */}
                        <div className="px-4 py-2.5 bg-[#F8F9F7] border-t border-[#E9EEEC]">
                          <a
                            href="#/products/kitchen"
                            onClick={(e) => {
                              e.preventDefault();
                              handleProductItemClick('#/products/kitchen');
                            }}
                            className="text-[11px] font-mono uppercase tracking-wider text-[#174C55] hover:text-[#123b42] font-semibold flex items-center justify-center gap-1.5 py-1 transition-colors group cursor-pointer"
                          >
                            <span>Explore All Custom Products</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }

              // Regular clean links without separate pill background or pricing highlights
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12px] xl:text-[13px] tracking-[0.14em] uppercase font-semibold text-white/90 hover:text-white py-1 transition-all duration-200 relative border-b-2 border-transparent hover:border-white/60 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: CIRCULAR PHONE BUTTON & MOBILE MENU TRIGGER (No CALL NOW text, No message icon) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Direct Call Circular Button (Icon only) */}
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md backdrop-blur-xs group"
              aria-label={`Call AMCOM at ${brandInfo.primaryPhone}`}
              title={`Call AMCOM: ${brandInfo.primaryPhone}`}
            >
              <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white group-hover:scale-110 transition-transform" />
            </a>

            {/* Hamburger Menu Button (for Mobile/Tablet) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>
      </header>

      {/* FULL-SCREEN / SLIDE-OUT MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#0E1315] text-white z-50 shadow-2xl border-l border-white/15 flex flex-col justify-between transition-transform duration-300 ease-out overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 sm:p-8">
          {/* Drawer Header with Logo and Close */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <div className="bg-white/95 px-3 py-1.5 rounded-xs border border-white/30">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-7 w-auto object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links in Drawer with Expandable Products Accordion */}
          <nav className="mt-6 flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/10 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                      className="w-full flex items-center justify-between py-2.5 text-sm sm:text-base tracking-[0.08em] uppercase font-semibold text-white/90 hover:text-white cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span>{link.label}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white">
                          6 ROOMS
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6E9297] transition-transform ${
                          mobileProductsExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expandable 6 Product Category Submenu */}
                    {mobileProductsExpanded && (
                      <div className="pl-3 pr-1 py-2 space-y-1 bg-white/5 rounded-lg my-1 border border-white/10">
                        {productNavItems.map((prod) => (
                          <a
                            key={prod.id}
                            href={prod.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-2 px-2.5 rounded text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            <span>{prod.label}</span>
                            <ArrowRight className="w-3 h-3 text-[#6E9297]" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 text-sm sm:text-base tracking-[0.08em] uppercase font-semibold text-white/85 hover:text-white border-b border-white/10 hover:border-white transition-colors group"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#6E9297] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer: Direct Call button */}
        <div className="p-6 sm:p-8 bg-black/60 border-t border-white/15 space-y-3">
          <p className="text-[11px] text-white/50 uppercase tracking-widest font-mono">
            Direct Studio Contact
          </p>

          <a
            href={`tel:${brandInfo.primaryPhoneRaw}`}
            className="w-full flex items-center justify-center gap-2.5 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#172022]" />
            <span>Call {brandInfo.primaryPhone}</span>
          </a>
        </div>
      </div>
    </>
  );
}
