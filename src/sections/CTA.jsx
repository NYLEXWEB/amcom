import React from 'react';
import { brandInfo } from '../data/siteData';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <section className="py-8 md:py-16 bg-black text-[#F8F9F7] border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#174C55]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Elevated Architectural Typography */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/15 mb-6">
             
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/90">
                BEGIN YOUR PROJECT
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-[-0.035em] leading-[1.08] mb-6">
              LET’S CREATE <br />
              A SPACE WORTH <br />
              <span className="font-normal text-[#6E9297]">COMING HOME TO.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-xl mb-6">
              Have a space in mind? Let's talk about your interior requirements. We consult with homeowners, architects, and builders throughout Kozhikode, Kannur, and Kerala.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-white/40 tracking-wider">
              <span>RESIDENTIAL</span>
              <span>•</span>
              <span>MODULAR KITCHENS</span>
              <span>•</span>
              <span>TURNKEY EXECUTION</span>
            </div>
          </div>

          {/* Right Side: Redesigned Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-5 justify-center">
            
            {/* 1. START A CONVERSATION BUTTON: ALL-WHITE BUTTON, BLACK TEXT, BLACK CIRCLE WITH WHITE ARROW */}
            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-4 pl-7 pr-2.5 py-2.5 sm:py-3 bg-white hover:bg-zinc-100 text-black rounded-full transition-all duration-300 group shadow-xl border border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="text-sm font-semibold tracking-wide text-black pl-1">
                Start a Conversation
              </span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-md">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>

            {/* 2. WHATSAPP US DIRECTLY: FULL WHATSAPP GREEN THEME + ORIGINAL WHATSAPP ICON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-all duration-300 group font-medium text-sm tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              {/* Original WhatsApp Icon */}
              <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.04 2C6.5 2 2 6.5 2 12.04c0 1.93.55 3.73 1.5 5.28L2 22l4.83-1.47c1.48.86 3.2 1.35 5.21 1.35 5.54 0 10.04-4.5 10.04-10.04C22.08 6.5 17.58 2 12.04 2zm5.88 14.2c-.25.7-1.45 1.35-2 1.4-.53.05-1.18.08-3.45-.85-2.9-1.2-4.75-4.15-4.9-4.35-.15-.2-1.18-1.55-1.18-2.98 0-1.43.75-2.13 1.03-2.43.25-.28.58-.35.78-.35.2 0 .4 0 .58.03.2.03.45-.08.7.53.25.63.88 2.13.95 2.28.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.33.38-.45.53-.15.15-.3.33-.13.63.18.3.78 1.28 1.68 2.08 1.15 1.03 2.13 1.35 2.43 1.5.3.15.48.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.23.58.35.08.13.08.75-.18 1.45z" />
              </svg>
              <span>WhatsApp Us Directly</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
