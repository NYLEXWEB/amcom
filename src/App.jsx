import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import BrandIntro from './sections/BrandIntro';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import BeforeAfterSlider from './sections/BeforeAfterSlider';
import Process from './sections/Process';
import WhyAmcom from './sections/WhyAmcom';
import Philosophy from './sections/Philosophy';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7] flex flex-col">
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Full-screen Hero */}
        <Hero />

        {/* 3. Brand Introduction */}
        <BrandIntro />

        {/* 4. About AMCOM */}
        <About />

        {/* 5. Services */}
        <Services />

        {/* 6. Selected Projects */}
        <Projects />

        {/* 7. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 8. Design Process */}
        <Process />

        {/* 9. Why AMCOM */}
        <WhyAmcom />

        {/* 10. Material / Design Philosophy */}
        <Philosophy />

        {/* 11. CTA */}
        <CTA />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
