import React from 'react';
import { brandInfo, navLinks, services } from '../data/siteData';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  Mail,
  ChevronRight
} from 'lucide-react';
import { 
  OriginalInstagramIcon, 
  OriginalWhatsAppIcon, 
  OriginalGoogleIcon, 
  OriginalFacebookIcon 
} from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@amcom_interiors",
      url: brandInfo.social.instagram.url,
      icon: <OriginalInstagramIcon className="w-5 h-5" />,
      hoverBorder: "hover:border-[#E1306C]/60 hover:bg-[#E1306C]/10",
      label: "Follow Instagram",
    },
    {
      name: "WhatsApp",
      handle: brandInfo.primaryPhone,
      url: whatsappLink,
      icon: <OriginalWhatsAppIcon className="w-5 h-5" />,
      hoverBorder: "hover:border-[#25D366]/60 hover:bg-[#25D366]/10",
      label: "Direct WhatsApp",
    },
    {
      name: "Google Business",
      handle: "4.9 ★ Rating",
      url: brandInfo.googleMapsUrl,
      icon: <OriginalGoogleIcon className="w-5 h-5" />,
      hoverBorder: "hover:border-[#4285F4]/60 hover:bg-[#4285F4]/10",
      label: "Google Profile",
    },
    {
      name: "Facebook",
      handle: "Amcom Interiors",
      url: brandInfo.social.facebook.url,
      icon: <OriginalFacebookIcon className="w-5 h-5" />,
      hoverBorder: "hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10",
      label: "Facebook Page",
    },
  ];

  return (
    <footer className="bg-[#0C1315] text-[#F8F9F7] border-t border-[#1E2B2E] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#174C55]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#6E9297]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">


        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Official Logo, Brand & Social Hub (5 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Official Brand Logo */}
              <div className="inline-block bg-white p-2.5 rounded-lg border border-white/20 shadow-md mb-5 group transition-transform duration-300 hover:scale-105">
                <img
                  src="/logo-bg.png"
                  alt="AMCOM Interiors Official Logo"
                  className="h-10 sm:h-12 w-auto object-contain block"
                />
              </div>

              <p className="text-xs font-mono tracking-wider text-[#6E9297] uppercase mb-4">
                CRAFTING TIMELESS INTERIORS SINCE 1999
              </p>

              <p className="text-xs text-white/70 leading-relaxed font-light max-w-sm mb-6">
                Over 25 years of architectural excellence, tailored modular kitchens, and turnkey interior construction across Kozhikode, Kannur, and Kerala.
              </p>

              {/* Verified Credentials Pill */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <ShieldCheck className="w-4 h-4 text-[#6E9297]" />
                <span>100+ Finished Homes • 25+ Years Legacy</span>
              </div>
            </div>

          </div>

          {/* Col 2: Architectural Services (2.5 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-5 font-semibold">
              EXPERTISE
            </span>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc.number}>
                  <a
                    href="/services"
                    className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group font-light"
                  >
                    <ChevronRight className="w-3 h-3 text-[#6E9297] transition-transform group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" />
                    <span>{svc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Links (2.5 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-5 font-semibold">
              EXPLORE STUDIO
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group font-light"
                  >
                    <ChevronRight className="w-3 h-3 text-[#6E9297] transition-transform group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reviews"
                  className="text-xs text-white/70 hover:text-white transition-colors flex items-center gap-1.5 group font-light"
                >
                  <ChevronRight className="w-3 h-3 text-[#6E9297] transition-transform group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" />
                  <span>Google Reviews (4.9 ★)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Headquarters & Direct Desk (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-5 font-semibold">
                STUDIO HEADQUARTERS
              </span>

              <div className="space-y-4 text-xs">
                {/* Physical Address */}
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-4 h-4 text-[#6E9297] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block mb-0.5">Kozhikode Studio</span>
                    <p className="text-white/60 leading-relaxed font-light">
                      {brandInfo.address.building}, {brandInfo.address.street},<br />
                      {brandInfo.address.area}, {brandInfo.address.city}, Kerala {brandInfo.address.pincode}
                    </p>
                    <a
                      href={brandInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6E9297] hover:text-white mt-1.5 transition-colors uppercase tracking-wider"
                    >
                      <span>Open Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Studio Hours */}
             

                {/* Phone Lines */}
                <div className="flex items-start gap-3 text-white/80 pt-2 border-t border-white/5">
                  <Phone className="w-4 h-4 text-[#6E9297] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-medium text-white block">Direct Phones</span>
                    <a
                      href={`tel:${brandInfo.primaryPhoneRaw}`}
                      className="text-white/70 hover:text-white block transition-colors font-mono"
                    >
                      {brandInfo.primaryPhone} (Lead Desk)
                    </a>
                    <span className="text-white/50 block font-mono text-xs pt-0.5">
                      {brandInfo.secondaryPhone} (Studio Line)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white group transition-colors cursor-pointer"
              >
                <span>Back to Top of Page</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <ArrowUp className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Geo Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-mono gap-4">
          <p>© 2026 AMCOM Interiors. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] tracking-wider text-white/40">CALICUT • KANNUR • WAYANAD • KERALA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

