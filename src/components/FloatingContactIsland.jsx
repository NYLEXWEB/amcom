import React, { useState, useEffect } from 'react';
import { brandInfo } from '../data/siteData';
import { Phone, ArrowRight } from 'lucide-react';

export default function FloatingContactIsland() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    // Reveal smoothly after brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;
  const instagramUrl = brandInfo.social.instagram.url;
  const callUrl = `tel:${brandInfo.primaryPhoneRaw || '9447415588'}`;

  const items = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      subtitle: 'Chat directly with lead',
      badge: 'Live',
      badgeColor: 'bg-[#25D366]/20 text-[#25D366] border-[#25D366]/40',
      href: whatsappUrl,
      external: true,
      ariaLabel: 'Chat directly on WhatsApp with AMCOM Interiors',
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:scale-110">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
            <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.85.5 3.65 1.46 5.23L2 22l4.89-1.42a10.02 10.02 0 0 0 5.15 1.42c5.54 0 10.04-4.5 10.04-10.04C22.08 6.5 17.58 2 12.04 2zm5.88 14.28c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.14.07-3.32-.82-2.79-1.15-4.57-3.99-4.71-4.18-.14-.19-1.13-1.49-1.13-2.86 0-1.37.72-2.04.98-2.33.24-.26.55-.34.74-.34.19 0 .38 0 .55.02.19.02.43-.07.67.5.24.6.84 2.04.91 2.19.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.31.36-.43.5-.14.14-.29.31-.12.6.17.29.74 1.23 1.61 2 1.1 1 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.72-.17 1.4z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      subtitle: brandInfo.social.instagram.handle,
      badge: 'Portfolio',
      badgeColor: 'bg-[#E1306C]/20 text-[#ff6097] border-[#E1306C]/40',
      href: instagramUrl,
      external: true,
      ariaLabel: 'Follow AMCOM Interiors on Instagram',
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] p-[1.5px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] shadow-[0_4px_16px_rgba(225,48,108,0.35)] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
          <div className="w-full h-full rounded-[12px] bg-transparent flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="white" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 'call',
      name: 'Call Studio',
      subtitle: brandInfo.primaryPhone,
      badge: 'Direct',
      badgeColor: 'bg-[#34C759]/20 text-[#34C759] border-[#34C759]/40',
      href: callUrl,
      external: false,
      ariaLabel: `Call AMCOM Interiors at ${brandInfo.primaryPhone}`,
      icon: (
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#174C55] hover:bg-[#123e46] flex items-center justify-center text-white shadow-[0_4px_16px_rgba(23,76,85,0.45)] border border-white/20 transition-transform duration-300 group-hover:scale-110">
          <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
        </div>
      ),
    },
  ];

  return (
    <aside
      aria-label="Quick Connect Floating Island"
      className={`fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
      }`}
    >
      {/* Dynamic Island Outer Container */}
      <div className="relative flex flex-col items-center bg-[#090D0E]/90 hover:bg-[#090D0E]/95 backdrop-blur-2xl border border-white/[0.12] rounded-full p-1.5 sm:p-2 transition-all duration-300">
        



        {/* 3 Icons Vertical Stack */}
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center group"
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {/* Tooltip Card (Flies out to the left) */}
              <div
                className={`absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 hidden md:flex items-center transition-all duration-200 pointer-events-none z-50 ${
                  activeTooltip === item.id
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2'
                }`}
              >
                <div className="bg-[#090D0E]/95 backdrop-blur-xl border border-white/15 text-white px-3.5 py-2 rounded-xl flex items-center gap-3 whitespace-nowrap">
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold tracking-wide text-white">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A2B1B4] font-medium block">
                      {item.subtitle}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/50" />
                </div>
                {/* Arrow pointer */}
                <div className="w-2 h-2 bg-[#090D0E]/95 border-r border-t border-white/15 rotate-45 -ml-1" />
              </div>

              {/* Action Button */}
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.ariaLabel}
                className="relative rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55] active:scale-95 transition-transform"
              >
                {item.icon}
              </a>
            </div>
          ))}
        </div>
       
      </div>
    </aside>
  );
}
