import React, { useState, useEffect } from 'react';
import { brandInfo } from '../data/siteData';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Auto show tooltip once after 3 seconds, then auto-dismiss
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const dismissTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(dismissTimer);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm border border-[#DCE3E2] shadow-lg text-xs text-[#172022] font-medium animate-fade-in">
          <span>Chat with AMCOM lead</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#687477] hover:text-[#172022]"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#174C55] text-[#F8F9F7] flex items-center justify-center shadow-lg hover:bg-[#123b42] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55]"
        aria-label="Chat directly on WhatsApp with AMCOM Interiors"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
