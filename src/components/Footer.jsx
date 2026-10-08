import React from 'react';
import { brandInfo, navLinks } from '../data/siteData';
import { ArrowUp, MessageSquare, Phone } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <footer className="bg-[#F8F9F7] text-[#172022] border-t border-[#DCE3E2] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#DCE3E2]">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#174C55]" />
                <span className="text-2xl font-semibold tracking-[-0.04em] text-[#172022]">
                  AMCOM
                </span>
                <span className="text-xs tracking-[0.25em] text-[#687477] font-medium pl-1">
                  INTERIORS
                </span>
              </div>
              <p className="text-sm text-[#687477] font-normal max-w-sm mb-6">
                Crafting Timeless Interiors Since 1999.
              </p>
              <p className="text-xs text-[#687477] leading-relaxed max-w-sm">
                Architectural design, interior construction, and turnkey project delivery rooted in Kozhikode, Kerala.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE3E2]/60">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E9297] block mb-1">
                LOCATION
              </span>
              <span className="text-xs text-[#172022] font-medium">
                Puthiyara Rd, Arayidathupalam, Kozhikode, Kerala 673004
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E9297] block mb-5">
              EXPLORE
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6E9297] block mb-5">
                DIRECT CHANNELS
              </span>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#174C55]" />
                    <span>WhatsApp: +91 9447415588</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${brandInfo.primaryPhoneRaw}`}
                    className="flex items-center gap-2 text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#174C55]" />
                    <span>Tel: +91 9447415588</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${brandInfo.secondaryPhoneRaw}`}
                    className="flex items-center gap-2 text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#174C55]" />
                    <span>Tel: +91 7012839079</span>
                  </a>
                </li>
                <li>
                  <a
                    href={brandInfo.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#174C55]" />
                    <span>Instagram: {brandInfo.social.instagram.handle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={brandInfo.social.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#687477] hover:text-[#174C55] transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-[#174C55]" />
                    <span>Facebook: {brandInfo.social.facebook.handle}</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#172022] hover:text-[#174C55] group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#687477] font-mono gap-4">
          <p>© 2026 AMCOM Interiors. All rights reserved.</p>
          <p className="tracking-wider">KOZHIKODE • KANNUR • KERALA</p>
        </div>
      </div>
    </footer>
  );
}
