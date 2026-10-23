import React from 'react';
import { brandInfo } from '../data/siteData';
import { ArrowUpRight, Star, Sparkles, MessageCircle, Navigation, Users, CheckCircle2 } from 'lucide-react';
import { 
  OriginalInstagramIcon, 
  OriginalWhatsAppIcon, 
  OriginalGoogleIcon, 
  OriginalFacebookIcon 
} from '../components/Icons';

export default function SocialMedia() {
  const socialCards = [
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@amcom_interiors",
      badge: "PORTFOLIO & STORIES",
      statusText: "Daily Site Updates",
      statusDotColor: "bg-[#E1306C]",
      accentGradient: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(225,48,108,0.25)]",
      borderColor: "hover:border-[#E1306C]/40",
      topBannerBg: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      icon: <OriginalInstagramIcon className="w-9 h-9 shrink-0 drop-shadow-sm" />,
      tagline: "Visual Portfolios & Reels",
      description: "Explore curated residential walkthroughs, teak & marble material palettes, and behind-the-scenes craft reels from Kerala.",
      actionLabel: "Follow on Instagram",
      actionBg: "group-hover:bg-[#E1306C] group-hover:text-white",
      url: brandInfo.social.instagram.url,
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      handle: brandInfo.primaryPhone,
      badge: "DIRECT STUDIO DESK",
      statusText: "Online • Instant Reply",
      statusDotColor: "bg-[#25D366]",
      accentGradient: "from-[#25D366] to-[#128C7E]",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(37,211,102,0.25)]",
      borderColor: "hover:border-[#25D366]/40",
      topBannerBg: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
      icon: <OriginalWhatsAppIcon className="w-9 h-9 shrink-0 drop-shadow-sm" />,
      tagline: "Instant Project Consultation",
      description: "Share your floor plan or site photos with our lead designers for immediate feasibility assessment and project estimates.",
      actionLabel: "Chat on WhatsApp",
      actionBg: "group-hover:bg-[#25D366] group-hover:text-white",
      url: `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`,
      
    },
    {
      id: "google",
      platform: "Google Business",
      handle: "Puthiyara Rd, Calicut",
      badge: "VERIFIED STUDIO",
      statusText: "4.9 ★ (120+ Reviews)",
      statusDotColor: "bg-[#4285F4]",
      accentGradient: "from-[#4285F4] via-[#34A853] to-[#FBBC05]",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(66,133,244,0.25)]",
      borderColor: "hover:border-[#4285F4]/40",
      topBannerBg: "bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]",
      icon: <OriginalGoogleIcon className="w-9 h-9 shrink-0 drop-shadow-sm" />,
      tagline: "Verified Reviews & Location",
      description: "Read genuine client experiences across Kozhikode & Kannur. Get precise GPS navigation directly to our design studio.",
      actionLabel: "View Reviews & Directions",
      actionBg: "group-hover:bg-[#174C55] group-hover:text-white",
      url: brandInfo.googleMapsUrl,
    
    },
    {
      id: "facebook",
      platform: "Facebook",
      handle: "Amcom Interiors",
      badge: "OFFICIAL COMMUNITY",
      statusText: "Kerala Design Network",
      statusDotColor: "bg-[#1877F2]",
      accentGradient: "from-[#1877F2] to-[#0D6EFD]",
      glowColor: "group-hover:shadow-[0_20px_45px_-12px_rgba(24,119,242,0.25)]",
      borderColor: "hover:border-[#1877F2]/40",
      topBannerBg: "bg-gradient-to-r from-[#1877F2] to-[#0A58CA]",
      icon: <OriginalFacebookIcon className="w-9 h-9 shrink-0 drop-shadow-sm" />,
      tagline: "Project Albums & Handover",
      description: "Comprehensive photographic documentation of full turnkey transformations, living room remodels, and modular kitchen installations.",
      actionLabel: "Explore Facebook Page",
      actionBg: "group-hover:bg-[#1877F2] group-hover:text-white",
      url: brandInfo.social.facebook.url,

    },
  ];

  return (
    <section id="social" className="py-20 md:py-24 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden">
      {/* Subtle architectural background grid accents */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#172022 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#DCE3E2] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#174C55]/5 border border-[#174C55]/15 rounded-full mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C55]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#174C55] font-semibold">
                OFFICIAL PLATFORMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.035em] leading-tight">
              CONNECT WITH US
            </h2>
          </div>

        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {socialCards.map((card) => (
            <a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white border border-[#DCE3E2] rounded-xl p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${card.glowColor} ${card.borderColor}`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl ${card.topBannerBg} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div>
                {/* Top Row: Icon + Badge Pill */}
                <div className="flex items-center justify-between gap-3 mb-6 pt-1">
                  <div className="p-2.5 rounded-2xl bg-[#F8F9F7] border border-[#E9EEEC] transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    {card.icon}
                  </div>
                  {card.statsPill}
                </div>

                {/* Subtitle Badge & Platform Name */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-1">
                    {card.badge}
                  </span>
                  <h3 className="text-xl font-medium text-[#172022] tracking-tight group-hover:text-[#174C55] transition-colors">
                    {card.handle}
                  </h3>
                  <p className="text-xs font-medium text-[#174C55] mt-0.5">
                    {card.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive CTA Action */}
              <div className="pt-4 border-t border-[#EEF2F1] flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase font-mono text-[#172022] group-hover:text-[#174C55] transition-colors">
                  {card.actionLabel}
                </span>
                <div className={`w-8 h-8 rounded-full bg-[#F1F4F2] text-[#172022] flex items-center justify-center transition-all duration-300 shadow-sm ${card.actionBg} group-hover:translate-x-0.5`}>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

