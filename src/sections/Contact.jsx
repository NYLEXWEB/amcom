import React, { useState } from 'react';
import { brandInfo } from '../data/siteData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { OriginalWhatsAppIcon } from '../components/Icons';

export default function Contact() {
  const projectOptions = [
    { id: 'Residential Interiors', label: 'Residential Interiors', icon: '🏡' },
    { id: 'Modular Kitchens', label: 'Modular Kitchens', icon: '🍳' },
    { id: 'Turnkey Renovation', label: 'Full Home Renovation', icon: '✨' },
    { id: 'Living Spaces', label: 'Living & Dining', icon: '🛋️' },
    { id: 'Commercial & Office', label: 'Executive Office', icon: '🏢' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Residential Interiors',
    location: '',
    approxArea: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build structured, beautifully formatted WhatsApp message
    const formattedText = 
`*NEW PROJECT CONSULTATION ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
• *Client Name:* ${formData.name || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Project Type:* ${formData.projectType}
• *Location:* ${formData.location || 'Kerala'}
• *Approx Area / Scope:* ${formData.approxArea || 'To be discussed'}
• *Vision / Notes:*
${formData.message || 'I would like to schedule an interior design consultation.'}
━━━━━━━━━━━━━━━━━━━━
_Submitted via AMCOM Interiors Official Portal_`;

    const url = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F1F4F2] border-b border-[#DCE3E2] relative overflow-hidden">
      {/* Subtle architectural background grid accents */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#172022 1px, transparent 1px), linear-gradient(90deg, #172022 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#174C55]/10 border border-[#174C55]/20 rounded-full mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#174C55] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#174C55] font-semibold">
                STUDIO CONSULTATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.035em] leading-tight">
              BEGIN AN ARCHITECTURAL DIALOGUE
            </h2>
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Studio Hub (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* 1. Studio Identity & Heritage Card */}
            <div className="bg-[#172022] text-[#F8F9F7] p-8 rounded-xl shadow-lg border border-[#2D393C] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#174C55]/30 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E9297] font-semibold">
                  HEADQUARTERS
                </span>
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                  ESTD 1999
                </span>
              </div>

              <h3 className="text-2xl font-light tracking-[-0.02em] text-white mb-2">
                AMCOM INTERIORS
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-6">
                Turnkey architectural interior design, custom joinery, and structural transformations crafted with enduring discipline.
              </p>

              {/* Working Hours Strip */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/80">
                <Clock className="w-4 h-4 text-[#6E9297] shrink-0" />
                <div>
                  <span className="font-mono text-[11px] block text-white/60">STUDIO HOURS</span>
                  <span className="font-medium text-[12px] text-white">Mon – Sat: 9:00 AM – 7:30 PM (Sun by appt)</span>
                </div>
              </div>
            </div>

            {/* 2. Studio Location Card */}
            <div className="bg-white p-7 rounded-xl border border-[#DCE3E2] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#F1F4F2] border border-[#DCE3E2] flex items-center justify-center text-[#174C55] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-1">
                    PHYSICAL STUDIO
                  </span>
                  <h4 className="text-sm font-semibold text-[#172022] mb-1">
                    Kozhikode Experience Center
                  </h4>
                  <p className="text-xs text-[#687477] leading-relaxed">
                    {brandInfo.address.building}, {brandInfo.address.street},<br />
                    {brandInfo.address.area}, {brandInfo.address.city}, {brandInfo.address.state} {brandInfo.address.pincode}
                  </p>
                </div>
              </div>

              <a
                href={brandInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#F8F9F7] hover:bg-[#174C55] text-[#174C55] hover:text-white border border-[#DCE3E2] text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 group"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* 3. Direct Phone Hotlines */}
            <div className="bg-white p-7 rounded-xl border border-[#DCE3E2] shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-4">
                DIRECT STUDIO HOTLINES
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${brandInfo.primaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9F7] hover:bg-[#F1F4F2] border border-[#E4ECEB] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#174C55]/10 flex items-center justify-center text-[#174C55]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#687477] block">Primary Line</span>
                      <span className="text-sm font-medium text-[#172022] tracking-wide">{brandInfo.primaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#174C55] font-semibold group-hover:underline">
                    Call Direct
                  </span>
                </a>

                <a
                  href={`tel:${brandInfo.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9F7] hover:bg-[#F1F4F2] border border-[#E4ECEB] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#174C55]/10 flex items-center justify-center text-[#174C55]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#687477] block">Studio Desk</span>
                      <span className="text-sm font-medium text-[#172022] tracking-wide">{brandInfo.secondaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#174C55] font-semibold group-hover:underline">
                    Call Direct
                  </span>
                </a>
              </div>
            </div>

            {/* 4. Instant WhatsApp Priority Strip */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <OriginalWhatsAppIcon className="w-8 h-8 shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Instant Studio WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <p className="text-[12px] text-white/90 font-light">Share your floor plans for immediate review</p>
                </div>
              </div>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

          </div>

          {/* Right Column: Luxury Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DCE3E2] rounded-xl p-8 sm:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#EEF2F1]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6E9297] font-semibold block mb-1">
                    PROJECT INQUIRY FORM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-[-0.03em]">
                    Tell Us About Your Vision
                  </h3>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-12 px-6 bg-[#F8F9F7] border border-[#174C55]/30 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#174C55]/10 flex items-center justify-center text-[#174C55] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-light text-[#172022] mb-2">Inquiry Forwarded</h4>
                  <p className="text-sm text-[#687477] max-w-md mx-auto mb-6">
                    Your project details have been prepared for direct review by our lead architectural designer on WhatsApp.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#20ba59] transition-colors"
                    >
                      <OriginalWhatsAppIcon className="w-4 h-4" />
                      <span>Open WhatsApp Chat Directly</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-mono uppercase tracking-wider text-[#174C55] underline hover:text-[#123b42]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Project Type Interactive Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2.5 font-semibold">
                      Select Project Type *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {projectOptions.map((opt) => {
                        const isSelected = formData.projectType === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: opt.id })}
                            className={`p-3 rounded-lg border text-left transition-all text-xs flex items-center gap-2.5 ${
                              isSelected
                                ? 'bg-[#174C55] text-white border-[#174C55] shadow-sm font-medium'
                                : 'bg-[#F8F9F7] text-[#172022] border-[#DCE3E2] hover:border-[#174C55]/50'
                            }`}
                          >
                            <span className="text-base">{opt.icon}</span>
                            <span className="truncate">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-1.5 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Menon"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174C55] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-1.5 font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9447415588"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174C55] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Location & Approx Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-1.5 font-semibold">
                        Project Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kozhikode / Kannur / Wayanad"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174C55] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-1.5 font-semibold">
                        Estimated Area / Stage
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2,800 Sq. Ft Villa / Under Construction"
                        value={formData.approxArea}
                        onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174C55] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 4: Notes / Vision */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-1.5 font-semibold">
                      Design Aspirations / Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details regarding your room count, timeline, preferred materials, or specific aesthetic tastes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#174C55] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-[#174C55] hover:bg-[#123b42] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <OriginalWhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Send Project Inquiry via WhatsApp Direct</span>
                  </button>

                  {/* Trust Signals Footer */}
                  <div className="pt-4 border-t border-[#EEF2F1] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#687477] gap-3">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>Direct Principal Architect Review</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>25+ Years Kerala Legacy</span>
                    </div>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

