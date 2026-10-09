import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import BeforeAfterSlider from './sections/BeforeAfterSlider';
import Process from './sections/Process';
import GoogleReviews from './sections/GoogleReviews';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Gallery from './sections/Gallery';
import SocialMedia from './sections/SocialMedia';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7] flex flex-col">
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Full-screen Hero */}
        <Hero />

        {/* 3. About AMCOM */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Selected Projects */}
        <Projects />

        {/* 6. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 7. Design Process */}
        <Process />

        <Gallery />

        {/* 8. Google Reviews */}
        <GoogleReviews />

        <SocialMedia />

        {/* 9. CTA */}
        <CTA />

        {/* 10. Contact */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
