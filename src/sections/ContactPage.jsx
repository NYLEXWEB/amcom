import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactIsland from '../components/FloatingContactIsland';
import { brandInfo } from '../data/siteData';
import {
  ArrowLeft,
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
  Compass,
  ArrowRight,
  HelpCircle,
  Mail,
  ChevronDown,
} from 'lucide-react';
import {
  OriginalInstagramIcon,
  OriginalWhatsAppIcon,
  OriginalGoogleIcon,
  OriginalFacebookIcon,
} from '../components/Icons';

export default function ContactPage({ onBackToHome }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Residential Interiors',
    location: '',
    approxArea: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const projectOptions = [
    { id: 'Residential Interiors', label: 'Residential Interiors', icon: '🏡' },
    { id: 'Modular Kitchens', label: 'Modular Kitchens', icon: '🍳' },
    { id: 'Turnkey Renovation', label: 'Full Home Turnkey', icon: '✨' },
    { id: 'Living Spaces', label: 'Living & Dining Spaces', icon: '🛋️' },
    { id: 'Commercial & Office', label: 'Commercial & Office', icon: '🏢' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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
_Submitted via AMCOM Interiors Official Contact Page_`;

    const url = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const directWhatsAppUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  const faqs = [
    {
      q: 'Is the first design consultation free of cost?',
      a: 'Yes, 100% complimentary. You can visit our Kozhikode studio or speak directly with our lead interior architects to discuss your floor plan, layout requirements, and cost estimates without any obligation.',
    },
    {
      q: 'Which districts in Kerala does AMCOM cover?',
      a: 'We undertake turnkey projects across Kozhikode, Kannur, Wayanad, Malappuram, and select projects across northern and central Kerala.',
    },
    {
      q: 'What is the typical completion timeframe?',
      a: 'For modular kitchens and residential interiors, we provide a guaranteed 45-day on-site handover from final approved architectural drawings.',
    },
    {
      q: 'Do you offer site visits before finalizing the design?',
      a: 'Yes. Once we understand your initial scope, our engineering team visits your site to take 3D laser measurements and assess civil, electrical, and plumbing points.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-white flex flex-col">
      {/* 1. Header with Light Theme for Subpage */}
      <Header variant="light" currentHash="#/contact" />

      {/* 2. Page Sub-Bar with Quick Breadcrumb and Back to Home Button */}
      <div className="bg-white/80 border-b border-[#E9EEEC] sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#174C55] hover:text-[#123b42] uppercase tracking-wider py-1 px-3 rounded-full hover:bg-[#F1F6F6] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#687477]">
            <span>AMCOM</span>
            <span>/</span>
            <span className="text-[#174C55] font-bold">CONTACT &amp; CONSULTATION</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* HERO TITLE SECTION */}
        <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-[#DCE3E2] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174C55]/10 border border-[#174C55]/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#174C55]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold">
                OFFICIAL STUDIO DESK • CALICUT, KERALA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-tight leading-tight mb-4">
              Let&apos;s Discuss Your <br />
              <span className="font-normal text-[#174C55]">Architectural Vision</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#556366] max-w-2xl font-light leading-relaxed">
              Reach out directly to AMCOM Interiors. Whether you have floor plans ready or wish to explore modular concepts, our team is at your service.
            </p>
          </div>
        </section>

        {/* MAIN CONTACT SPLIT GRID */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* LEFT COLUMN: STUDIO DETAILS, PHONES, ADDRESS */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Communication Hub */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCE3E2] shadow-xs space-y-5">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block">
                  DIRECT ACCESS CHANNELS
                </span>

                {/* WhatsApp Button */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/15 border border-[#25D366]/30 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <OriginalWhatsAppIcon className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#123b42] font-bold block">
                        WhatsApp Consultation
                      </span>
                      <span className="text-xs text-[#556366]">Instant response within minutes</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#25D366] transition-transform group-hover:translate-x-1" />
                </a>

                {/* Primary Phone */}
                <a
                  href={`tel:${brandInfo.primaryPhoneRaw}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F9F7] hover:bg-[#F1F6F6] border border-[#E9EEEC] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#174C55] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#174C55] font-bold block">
                        Lead Architect Desk
                      </span>
                      <span className="text-xs text-[#172022] font-semibold">{brandInfo.primaryPhone}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#174C55] transition-transform group-hover:translate-x-1" />
                </a>

                {/* Secondary Phone */}
                <a
                  href={`tel:${brandInfo.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F9F7] hover:bg-[#F1F6F6] border border-[#E9EEEC] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#687477] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#687477] font-bold block">
                        Studio Line / Office
                      </span>
                      <span className="text-xs text-[#172022] font-semibold">{brandInfo.secondaryPhone}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#687477] transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Physical Studio Address Card */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCE3E2] shadow-xs space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block">
                  CALICUT STUDIO LOCATION
                </span>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#174C55] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#172022] mb-1">
                      AMCOM Interiors Headquarters
                    </h3>
                    <p className="text-xs text-[#556366] leading-relaxed">
                      {brandInfo.address.building}, {brandInfo.address.street},<br />
                      {brandInfo.address.area}, {brandInfo.address.city}, Kerala {brandInfo.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#E9EEEC]">
                  <Clock className="w-4 h-4 text-[#174C55] shrink-0" />
                  <div className="text-xs text-[#556366]">
                    <span className="font-semibold text-[#172022]">Mon – Sat:</span> 9:00 AM – 7:30 PM <br />
                    <span className="font-semibold text-[#172022]">Sunday:</span> By Prior Appointment
                  </div>
                </div>

                <a
                  href={brandInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#174C55] hover:text-[#123b42] font-bold pt-2 transition-colors"
                >
                  <span>Open Route on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Verified Quality Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-2xl border border-[#DCE3E2] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#174C55] shrink-0" />
                  <span className="text-xs font-mono text-[#172022]">5-Year Warranty</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#DCE3E2] flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#174C55] shrink-0" />
                  <span className="text-xs font-mono text-[#172022]">45-Day Handover</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: CONSULTATION FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#DCE3E2] shadow-sm relative overflow-hidden">
                
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block mb-2">
                    BOOK A CONSULTATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-[#172022]">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-xs sm:text-sm text-[#556366] mt-1">
                    Fill in your details below. You will be connected directly with our architectural team on WhatsApp.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#E6F4EA] border border-[#25D366]/40 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                    <div className="text-xs text-[#0F5132]">
                      <span className="font-bold block">Enquiry Sent!</span>
                      Thank you. We have forwarded your project details to our architectural desk.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Nambiar"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-2">
                      Select Project Type *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {projectOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: opt.id })}
                          className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer flex items-center gap-2 ${
                            formData.projectType === opt.id
                              ? 'bg-[#174C55] text-white border-[#174C55] shadow-xs font-semibold'
                              : 'bg-[#F8F9F7] text-[#556366] border-[#DCE3E2] hover:bg-[#F1F6F6]'
                          }`}
                        >
                          <span>{opt.icon}</span>
                          <span className="truncate">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-1.5">
                        Site Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kozhikode / Kannur"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-1.5">
                        Approx. Area or BHK
                      </label>
                      <input
                        type="text"
                        value={formData.approxArea}
                        onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                        placeholder="e.g. 3 BHK / 2200 sq.ft"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#172022] mb-1.5">
                      Project Vision / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any special preferences (e.g. modern minimalist, wooden accents, wet kitchen, false ceiling)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <OriginalWhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Send Consultation Request via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-[#687477] text-center font-mono">
                    Direct reply from our Calicut studio within normal working hours.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE GOOGLE MAPS CARD */}
        <section className="py-12 bg-white border-y border-[#DCE3E2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block mb-1">
                  FIND US ON THE MAP
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#172022]">
                  AMCOM Kozhikode Studio
                </h3>
              </div>
              <a
                href={brandInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto shadow-sm"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="aspect-[16/7] sm:aspect-[21/8] rounded-3xl overflow-hidden border border-[#DCE3E2] shadow-sm relative bg-[#E9EEEC]">
              <iframe
                title="AMCOM Interiors Location"
                src="https://maps.google.com/maps?q=AMCOM+Interiors+Puthiyara+Rd+Kozhikode+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block mb-2">
              HELP &amp; CLARIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#172022]">
              Consultation FAQ
            </h2>
          </div>

          <div className="border-t border-[#DCE3E2] divide-y divide-[#DCE3E2]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                      <span className="text-xs font-mono font-semibold text-[#174C55]/60 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base md:text-lg font-medium text-[#172022] group-hover:text-[#174C55] transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#174C55] text-white rotate-180 shadow-xs'
                          : 'bg-[#EAEFEF] text-[#687477] group-hover:bg-[#174C55]/10 group-hover:text-[#174C55]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1 pl-7 sm:pl-8 text-xs sm:text-sm md:text-base text-[#556366] font-light leading-relaxed border-l-2 border-[#174C55]/30 ml-1.5 sm:ml-2 mt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Floating Island */}
      <FloatingContactIsland />
    </div>
  );
}
