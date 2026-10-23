import React, { useState, useRef, useEffect } from 'react';
import { brandInfo, navLinks, productNavItems } from '../data/siteData';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

export default function Header({ variant = 'transparent', currentHash }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);
  const getCurrentRoute = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const hash = window.location.hash || '';
    return { path, hash };
  };

  const [routeInfo, setRouteInfo] = useState(getCurrentRoute);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleLocationChange = () => {
      setRouteInfo(getCurrentRoute());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const isLinkActive = (href) => {
    const cleanHref = href.replace(/^#\/?/, '/');
    const { path, hash } = routeInfo;
    
    if (cleanHref === '/' || cleanHref === '') {
      return (path === '/' && (!hash || hash === '#/' || hash === '#' || hash === '#hero'));
    }
    return path === cleanHref || hash === `#${cleanHref}` || hash === `/#${cleanHref}` || (currentHash && currentHash.includes(cleanHref));
  };

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

  const navigateClean = (targetHref) => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
    const cleanPath = targetHref.replace(/^#\/?/, '/');
    try {
      window.history.pushState(null, '', cleanPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } catch {
      window.location.hash = cleanPath;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductItemClick = (href) => {
    navigateClean(href);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const cleanPath = href.replace(/^#\/?/, '/');
    if (cleanPath === '/' && routeInfo.path === '/' && (!routeInfo.hash || routeInfo.hash === '#/')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigateClean(cleanPath);
  };

  const isLight = variant === 'light';

  return (
    <>
      <header
        className={
          isLight
            ? 'sticky top-0 z-50 w-full select-none bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] shadow-xs'
            : 'absolute top-0 left-0 right-0 z-50 w-full select-none'
        }
      >
        {/* Transparent mode overlays (Foggy Theme) */}
        {!isLight && (
          <>
            {/* 1. White Foggy Theme Gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 16%, rgba(255, 255, 255, 0.65) 32%, rgba(255, 255, 255, 0.28) 48%, rgba(255, 255, 255, 0.08) 64%, transparent 80%)',
              }}
            />

            {/* 2. Frosted Glass Fog Mist */}
            <div
              className="absolute inset-0 pointer-events-none backdrop-blur-md"
              style={{
                maskImage:
                  'linear-gradient(90deg, black 0%, black 22%, rgba(0, 0, 0, 0.55) 42%, rgba(0, 0, 0, 0.12) 65%, transparent 82%)',
                WebkitMaskImage:
                  'linear-gradient(90deg, black 0%, black 22%, rgba(0, 0, 0, 0.55) 42%, rgba(0, 0, 0, 0.12) 65%, transparent 82%)',
              }}
            />

            {/* 3. Right-side subtle contrast overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/45 via-black/15 to-transparent"
              style={{
                maskImage:
                  'linear-gradient(90deg, transparent 40%, rgba(0, 0, 0, 0.6) 75%, black 100%)',
                WebkitMaskImage:
                  'linear-gradient(90deg, transparent 40%, rgba(0, 0, 0, 0.6) 75%, black 100%)',
              }}
            />
          </>
        )}

        <div className={`relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 flex items-center justify-between ${isLight ? 'py-3.5 sm:py-4' : 'py-4 sm:py-5'}`}>
          
          {/* LEFT: AMCOM OFFICIAL BRAND LOGO */}
          <a
            href="#/"
            onClick={(e) => handleNavClick(e, '#/')}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="AMCOM Interiors Home"
          >
            <div className={`transition-all duration-300 group-hover:scale-105 flex items-center ${isLight ? 'p-1' : 'px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xs'}`}>
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className={`w-auto object-contain transition-all duration-300 ${isLight ? 'h-9 sm:h-11 md:h-12' : 'h-11 sm:h-14 md:h-16 drop-shadow-xs'}`}
              />
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION LINKS WITH PRODUCTS DROPDOWN */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);

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
                      className={`inline-flex items-center gap-1.5 text-[12px] xl:text-[13px] tracking-[0.14em] uppercase font-semibold py-1 transition-all duration-200 cursor-pointer ${
                        isLight
                          ? active || productsDropdownOpen
                            ? 'text-[#174C55] border-b-2 border-[#174C55] font-bold'
                            : 'text-[#172022]/80 hover:text-[#174C55] border-b-2 border-transparent hover:border-[#174C55]/40'
                          : productsDropdownOpen || active
                            ? 'text-white border-b-2 border-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
                            : 'text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/60 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
                      }`}
                      aria-expanded={productsDropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180' : ''
                        } ${isLight ? 'text-[#174C55]' : 'text-white/80'}`}
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

              // Regular clean links
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[12px] xl:text-[13px] tracking-[0.14em] uppercase font-semibold py-1 transition-all duration-200 relative ${
                    isLight
                      ? active
                        ? 'text-[#174C55] font-bold border-b-2 border-[#174C55]'
                        : 'text-[#172022]/80 hover:text-[#174C55] border-b-2 border-transparent hover:border-[#174C55]/40'
                      : active
                        ? 'text-white border-b-2 border-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
                        : 'text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/60 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: WHATSAPP & CALL NOW PILL BUTTONS (Desktop) + 3-LINE MENU TRIGGER (Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp Pill Button (Visible on Desktop only) */}
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.07c-.24.67-1.39 1.3-1.92 1.35-.51.05-1.13.08-3.32-.82-2.79-1.15-4.58-3.99-4.72-4.18-.14-.19-1.13-1.49-1.13-2.87 0-1.37.72-2.04.99-2.32.24-.27.55-.33.74-.33.19 0 .38 0 .55.03.19.03.44-.08.68.5.24.6.85 2.04.91 2.19.08.14.12.31.03.5-.1.19-.14.31-.28.47-.14.17-.31.36-.44.5-.14.14-.28.31-.12.6.17.28.74 1.22 1.61 1.99 1.1 1 2.04 1.3 2.33 1.44.28.14.46.12.63-.08.17-.19.72-.85.91-1.13.19-.28.39-.24.65-.14.27.09 1.68.8 1.98.94.28.14.47.22.55.33.08.12.08.72-.16 1.4z" />
              </svg>
              <span>WHATSAPP</span>
            </a>

            {/* Call Now Pill Button (Visible on Desktop only) */}
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="hidden lg:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#174C55] hover:bg-[#123d44] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
              aria-label={`Call AMCOM at ${brandInfo.primaryPhone}`}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[2.2] shrink-0" />
              <span>CALL NOW</span>
            </a>

            {/* Three Lines / Hamburger Menu Button (Visible on Mobile & Tablet) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-zinc-100 text-[#172022] border border-[#DCE3E2] shadow-sm'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/30 shadow-md backdrop-blur-xs'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              <Menu className={`w-5 h-5 ${isLight ? 'text-[#172022]' : 'text-white'}`} />
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
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#0E1315] text-white z-50 shadow-2xl border-l border-white/15 flex flex-col justify-between transition-all duration-300 ease-out overflow-y-auto ${
          mobileMenuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto visible'
            : 'translate-x-full opacity-0 pointer-events-none invisible'
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
              const active = isLinkActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="border-b border-white/10 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                      className={`w-full flex items-center justify-between py-2.5 text-sm sm:text-base tracking-[0.08em] uppercase font-semibold cursor-pointer ${
                        active ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                      }`}
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between py-2.5 text-sm sm:text-base tracking-[0.08em] uppercase font-semibold border-b border-white/10 hover:border-white transition-colors group ${
                    active ? 'text-white border-white' : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span className={active ? 'text-[#25D366]' : ''}>{link.label}</span>
                  <span className="text-xs font-mono text-[#6E9297] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer: WhatsApp & Call Now buttons */}
        <div className="p-6 sm:p-8 bg-black/60 border-t border-white/15 space-y-3">
          <p className="text-[11px] text-white/50 uppercase tracking-widest font-mono">
            Direct Studio Contact
          </p>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#20ba5a] transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 text-white fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.07c-.24.67-1.39 1.3-1.92 1.35-.51.05-1.13.08-3.32-.82-2.79-1.15-4.58-3.99-4.72-4.18-.14-.19-1.13-1.49-1.13-2.87 0-1.37.72-2.04.99-2.32.24-.27.55-.33.74-.33.19 0 .38 0 .55.03.19.03.44-.08.68.5.24.6.85 2.04.91 2.19.08.14.12.31.03.5-.1.19-.14.31-.28.47-.14.17-.31.36-.44.5-.14.14-.28.31-.12.6.17.28.74 1.22 1.61 1.99 1.1 1 2.04 1.3 2.33 1.44.28.14.46.12.63-.08.17-.19.72-.85.91-1.13.19-.28.39-.24.65-.14.27.09 1.68.8 1.98.94.28.14.47.22.55.33.08.12.08.72-.16 1.4z" />
              </svg>
              <span>WHATSAPP</span>
            </a>

            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 bg-[#174C55] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#123d44] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-white stroke-[2.2] shrink-0" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
