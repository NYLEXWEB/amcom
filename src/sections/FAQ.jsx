import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { brandInfo } from '../data/siteData';

const faqItems = [
  {
    id: 1,
    question: "What interior design & execution services does AMCOM provide?",
    answer: "AMCOM Interiors delivers end-to-end turnkey solutions from architectural space planning and 3D visualization to complete on-site realization. Our specialties include precision modular kitchens, luxury master bedroom suites & wardrobes, living room entertainment consoles, designer dining sets, false ceilings with ambient lighting, and full residential renovations across Calicut, Kannur, and Kerala."
  },
  {
    id: 2,
    question: "What is the typical timeline from design finalization to handover?",
    answer: "A standard turnkey home interior project typically takes 40 to 45 working days following 3D design approval. Because all our joinery, modular cabinetry, and paneling are precision-crafted in specialized factory facilities, on-site assembly is swift, dust-controlled, and strictly adheres to agreed schedules."
  },
  {
    id: 3,
    question: "Which materials and hardware are used for Kerala's tropical climate?",
    answer: "We exclusively utilize certified 710-grade BWP (Boiling Water Proof) Marine Plywood and high-density HDHMR boards engineered to resist moisture, high humidity, and termites. All drawers and cabinetry incorporate soft-close European hardware from Blum, Hettich, and Hafele for effortless daily durability."
  },
  {
    id: 4,
    question: "What is the average interior design cost for a 2BHK or 3BHK flat in Calicut?",
    answer: "A complete 2BHK turnkey woodwork package typically ranges between ₹4.95 Lakhs and ₹7 Lakhs, while a 3BHK package ranges from ₹7.65 Lakhs to ₹11 Lakhs+, depending on chosen finishes (anti-scratch acrylic, PU lacquer, or natural veneer) and false ceiling inclusions. We provide completely transparent, itemized estimates before work begins."
  },
  {
    id: 5,
    question: "Which locations in Calicut and Kerala do you serve?",
    answer: "Our design studio is located at Puthiyara Road, Arayidathupalam, Kozhikode. We regularly execute residential projects across Kozhikode (Puthiyara, Mavoor Road, Palazhi, Thondayad, Nadakkavu), Kannur, Wayanad, Malappuram, and major destinations across Kerala."
  },
  {
    id: 6,
    question: "How do AMCOM's factory-finished modular interiors compare to traditional carpenter work?",
    answer: "Traditional on-site carpentry causes weeks of dust, uneven manual hand-gluing, and inconsistent edge-banding. AMCOM's modular interiors are engineered in automated factory facilities with zero-bubble hot-melt PUR edge banding, CNC precision cutouts, and calibrated German hardware alignments, resulting in superior aesthetics, durability, and a clean, 5-day on-site assembly."
  },
  {
    id: 7,
    question: "How do I get a preliminary design consultation and cost estimate?",
    answer: "Getting started is straightforward. You can send your floor plan or site photos to our WhatsApp desk (+91 70128 39079) or visit our studio in Calicut. Our architectural design team will schedule an initial consultation, understand your lifestyle requirements, and provide a clear, itemized proposal with zero hidden costs."
  },
  {
    id: 8,
    question: "Do you provide warranties and after-sales maintenance?",
    answer: "Yes. AMCOM provides up to a 5-year warranty on modular woodwork against termite and manufacturing defects, alongside lifetime manufacturer support on European hardware fittings. Our in-house Calicut team provides prompt, dependable after-sales assistance whenever required."
  },
  {
    id: 9,
    question: "Can I customize the kitchen and wardrobe configurations to my exact room dimensions?",
    answer: "Yes, 100%. While we offer standard pricing baselines, every cabinet, loft height, wardrobe partition, and pull-out unit is custom dimensioned to the millimeter to perfectly suit your room's structural layout, electrical outlets, and plumbing points."
  },
  {
    id: 10,
    question: "Can we visit an ongoing site or your studio to inspect material quality in person?",
    answer: "Yes, absolutely! We encourage clients to visit our studio in Arayidathupalam, Kozhikode to touch and test material samples, shutter finishes, and drawer mechanisms. We can also arrange a walkthrough of completed or near-completion sites in Calicut upon request."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappInquiryUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent("Hello AMCOM Interiors, I have a question regarding my interior project.")}`;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8F9F7] text-[#172022] border-b border-[#DCE3E2] select-none">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174C55]/10 border border-[#174C55]/20 text-[#174C55] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-tight leading-tight">
            Clear Answers to <br className="hidden sm:inline" />
            <span className="font-semibold text-[#174C55]">Common Inquiries</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#687477] max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about our architectural design process, materials, execution timelines, and warranties.
          </p>
        </div>

        {/* Accordion List (Clean No-Card Architectural Lines) */}
        <div className="border-t border-[#DCE3E2] divide-y divide-[#DCE3E2]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="py-5 sm:py-6 transition-colors"
              >
                {/* Question Trigger Row */}
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <span className="text-xs font-mono font-semibold text-[#174C55]/60 shrink-0">
                      0{item.id}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-[#172022] group-hover:text-[#174C55] transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>

                  {/* Minimalistic Arrow / Chevron */}
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

                {/* Collapsible Answer Container */}
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-1 pl-7 sm:pl-8 text-xs sm:text-sm md:text-base text-[#556366] font-light leading-relaxed border-l-2 border-[#174C55]/30 ml-1.5 sm:ml-2 mt-2">
                      <p>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom Help Desk Note */}
        <div className="mt-10 sm:mt-12 text-center pt-8 border-t border-[#E5ECE9]">
          <p className="text-xs sm:text-sm text-[#687477]">
            Have a project-specific requirement?{' '}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#174C55] hover:text-[#123e46] underline underline-offset-4 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask our design studio directly on WhatsApp</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
