import React, { useState } from 'react';
import { brandInfo } from '../data/siteData';
import { Phone, MapPin, MessageSquare, ExternalLink, Send } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Residential Interiors',
    location: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build direct WhatsApp message with form details
    const text = `Hello AMCOM Interiors,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nProject: ${formData.projectType}\nLocation: ${formData.location || 'Kerala'}\nMessage: ${formData.message || 'I would like to discuss an interior project.'}`;
    const url = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const whatsappDirect = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F1F4F2] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              08 / GET IN TOUCH
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              CONTACT STUDIO
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#687477] font-normal leading-relaxed">
            We welcome consultations for bespoke homes, modular kitchens, renovations, and commercial interiors.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            {/* Brand Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-[-0.03em] mb-2">
                AMCOM INTERIORS
              </h3>
              <p className="text-xs font-mono tracking-wider text-[#687477] uppercase">
                CRAFTING TIMELESS INTERIORS SINCE 1999
              </p>
            </div>

            {/* Address */}
            <div className="p-6 bg-[#F8F9F7] border border-[#DCE3E2]">
              <div className="flex items-start gap-3.5 mb-3">
                <MapPin className="w-5 h-5 text-[#174C55] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#6E9297] mb-1">
                    STUDIO LOCATION
                  </h4>
                  <p className="text-sm text-[#172022] font-medium leading-relaxed">
                    {brandInfo.address.building}<br />
                    {brandInfo.address.street}<br />
                    {brandInfo.address.area}<br />
                    {brandInfo.address.city}, {brandInfo.address.state} {brandInfo.address.pincode}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE3E2] mt-4">
                <a
                  href={brandInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#174C55] hover:text-[#123b42] uppercase font-semibold group"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Telephone Numbers */}
            <div className="p-6 bg-[#F8F9F7] border border-[#DCE3E2]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#6E9297] mb-3">
                DIRECT PHONES
              </h4>
              <div className="space-y-2">
                <a
                  href={`tel:${brandInfo.primaryPhoneRaw}`}
                  className="flex items-center justify-between text-base font-light text-[#172022] hover:text-[#174C55] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#174C55]" />
                    <span>{brandInfo.primaryPhone}</span>
                  </span>
                  <span className="text-xs font-mono text-[#687477] uppercase">Call</span>
                </a>
                <a
                  href={`tel:${brandInfo.secondaryPhoneRaw}`}
                  className="flex items-center justify-between text-base font-light text-[#172022] hover:text-[#174C55] transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#174C55]" />
                    <span>{brandInfo.secondaryPhone}</span>
                  </span>
                  <span className="text-xs font-mono text-[#687477] uppercase">Call</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#DCE3E2] mt-4">
                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#174C55] text-[#F8F9F7] text-xs font-mono uppercase tracking-wider hover:bg-[#123b42] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 bg-[#F8F9F7] border border-[#DCE3E2]">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#6E9297] mb-3">
                OFFICIAL CHANNELS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={brandInfo.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 border border-[#DCE3E2] hover:border-[#174C55] hover:text-[#174C55] text-xs text-[#172022] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#174C55]" />
                  <span>{brandInfo.social.instagram.handle}</span>
                </a>
                <a
                  href={brandInfo.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 border border-[#DCE3E2] hover:border-[#174C55] hover:text-[#174C55] text-xs text-[#172022] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[#174C55]" />
                  <span>{brandInfo.social.facebook.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architectural Consultation Form */}
          <div className="lg:col-span-7 bg-[#F8F9F7] border border-[#DCE3E2] p-8 sm:p-12">
            <h3 className="text-2xl font-light text-[#172022] tracking-[-0.02em] mb-2">
              Send a Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#687477] mb-8">
              Fill in your details to begin an architectural dialogue or receive a WhatsApp consultation.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#F1F4F2] border border-[#174C55] text-center">
                <h4 className="text-lg font-medium text-[#174C55] mb-2">Thank You</h4>
                <p className="text-sm text-[#687477] mb-4">
                  Your enquiry is connected directly with our studio lead on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono uppercase text-[#174C55] underline"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Menon"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9447415588"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] rounded-none transition-colors"
                    >
                      <option value="Residential Interiors">Residential Interiors</option>
                      <option value="Modular Kitchens">Modular Kitchens</option>
                      <option value="Bedroom Interiors">Bedroom Interiors</option>
                      <option value="Living Spaces">Living Spaces</option>
                      <option value="Office Interiors">Office Interiors</option>
                      <option value="Complete Interior Execution">Complete Interior Execution</option>
                      <option value="Full Home Renovation">Full Home Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Calicut / Kannur / Wayanad"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#687477] mb-2">
                    Space Details / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your space dimensions, current state, or design aspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F9F7] border border-[#DCE3E2] text-sm text-[#172022] focus:outline-none focus:border-[#174C55] rounded-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#174C55] hover:bg-[#123b42] text-[#F8F9F7] text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
