import React from 'react';
import { brandInfo } from '../data/siteData';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CTA() {
  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <section className="py-24 md:py-36 bg-[#F8F9F7] border-b border-[#DCE3E2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-4">
              BEGIN YOUR PROJECT
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#172022] tracking-[-0.035em] leading-[1.08] mb-6">
              LET’S CREATE <br />
              A SPACE WORTH <br />
              <span className="text-[#174C55] font-normal">COMING HOME TO.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#687477] font-normal leading-relaxed max-w-xl">
              Have a space in mind? Let's talk about your interior requirements. We consult with homeowners and developers throughout Kozhikode, Kannur, and Kerala.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#172022] text-[#F8F9F7] text-sm font-medium tracking-wide hover:bg-[#174C55] transition-colors duration-300 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white border border-[#DCE3E2] text-[#172022] hover:border-[#174C55] hover:text-[#174C55] text-sm font-medium tracking-wide transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 text-[#174C55]" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
