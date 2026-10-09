import React from 'react';
import { brandInfo } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

const socialChannels = [
  {
    name: "Google Business",
    handle: "4.9 ★ (120+ Reviews)",
    category: "Verified Profile",
    url: brandInfo.googleMapsUrl,
    action: "View Profile",
    badgeColor: "border-[#4285F4]/30 text-[#1a73e8]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+91 9447415588",
    category: "Direct Studio Chat",
    url: `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`,
    action: "Chat Directly",
    badgeColor: "border-[#25D366]/40 text-[#25D366]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#25D366" />
        <path
          fill="white"
          d="M12.04 4C7.6 4 4 7.6 4 12.04c0 1.54.44 2.98 1.2 4.22L4 20l3.86-1.18c1.2.7 2.58 1.1 4.18 1.1 4.44 0 8.04-3.6 8.04-8.04C20.08 7.6 16.48 4 12.04 4zm4.7 11.36c-.2.56-1.16 1.08-1.6 1.12-.42.04-.94.06-2.76-.68-2.32-.96-3.8-3.32-3.92-3.48-.12-.16-.94-1.24-.94-2.38 0-1.14.6-1.7.82-1.94.2-.22.46-.28.62-.28.16 0 .32 0 .46.02.16.02.36-.06.56.42.2.5.7 1.7.76 1.82.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.42-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.6-.14 1.16z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@amcom_interiors",
    category: "Design Portfolio",
    url: brandInfo.social.instagram.url,
    action: "Follow Us",
    badgeColor: "border-[#E1306C]/40 text-[#E1306C]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <defs>
          <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
        <path
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5V7A3.5 3.5 0 0 0 17 3.5z"
        />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none" />
        <circle cx="16.5" cy="7.5" r="0.9" fill="white" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Amcom Interiors",
    category: "Official Community",
    url: brandInfo.social.facebook.url,
    action: "Connect",
    badgeColor: "border-[#1877F2]/40 text-[#1877F2]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="12" fill="#1877F2" />
        <path
          fill="white"
          d="M15.5 12.5H13v7h-3v-7H8v-2.5h2V8.3c0-2 1.2-3.3 3.2-3.3 1 0 1.8.1 1.8.1v2.2h-1.1c-1 0-1.4.6-1.4 1.3v1.4h2.7l-.4 2.5z"
        />
      </svg>
    ),
  },
];

export default function SocialMedia() {
  return (
    <section id="social" className="py-16 md:py-18 bg-[#F8F9F7] border-b border-[#DCE3E2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              OFFICIAL CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              CONNECT WITH US
            </h2>
          </div>

        </div>

        {/* 4 Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-7 bg-white border border-[#DCE3E2] shadow-sm hover:shadow-xl hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between group rounded-none"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* Platform Name & Handle */}
                <h3 className="text-xl font-light text-[#172022] tracking-tight group-hover:text-[#174C55] transition-colors mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-[#687477] font-mono font-medium truncate mb-6">
                  {item.handle}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-[#DCE3E2]/60 flex items-center justify-between text-xs font-medium text-[#172022] group-hover:text-[#174C55] transition-colors">
                <span className="tracking-wide uppercase font-mono text-[11px]">{item.action}</span>
                <div className="w-7 h-7 rounded-full bg-[#F1F4F2] flex items-center justify-center transition-all duration-300 group-hover:bg-[#174C55] group-hover:text-white">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
