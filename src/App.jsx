import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import BrandCredentials from './sections/BrandCredentials';
import About from './sections/About';
import Services from './sections/Services';
import ServicesPage from './sections/ServicesPage';
import VideosPage from './sections/VideosPage';
import GalleryPage from './sections/GalleryPage';
import Projects from './sections/Projects';
import BeforeAfterSlider from './sections/BeforeAfterSlider';
import Process from './sections/Process';
import Gallery from './sections/Gallery';
import GoogleReviews from './sections/GoogleReviews';
import SocialMedia from './sections/SocialMedia';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingContactIsland from './components/FloatingContactIsland';
import VideoSection from './sections/VideoSection';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#/services') return 'services';
      if (window.location.hash === '#/videos') return 'videos';
      if (window.location.hash === '#/gallery') return 'gallery';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/services') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#/videos') {
        setCurrentView('videos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#/gallery') {
        setCurrentView('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateToServices = () => {
    window.location.hash = '/services';
    setCurrentView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToVideos = () => {
    window.location.hash = '/videos';
    setCurrentView('videos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToGallery = () => {
    window.location.hash = '/gallery';
    setCurrentView('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user navigated to the dedicated separate Services page:
  if (currentView === 'services') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <ServicesPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // If user navigated to the dedicated separate Videos page:
  if (currentView === 'videos') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <VideosPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // If user navigated to the dedicated separate Gallery page:
  if (currentView === 'gallery') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <GalleryPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // Home Page View
  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7] flex flex-col">
      {/* 1. Merged Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Full-screen Hero */}
        <Hero />

        {/* 3. Architectural Credentials & Trust Strip (Below Hero) */}
        <BrandCredentials />

        {/* 4. About AMCOM */}
        <About />

        {/* 5. Services: Asymmetrical 4-Card Grid linking to separate Services Page */}
        <Services onNavigateToServices={handleNavigateToServices} />

        {/* 6. Selected Projects */}
        <Projects />

        {/* 7. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 8. Design Process */}
        <Process />

        {/* 9. Curated Gallery */}
        <Gallery onNavigateToGallery={handleNavigateToGallery} />

        {/* Real On-Site Video Showcase */}
        <VideoSection onNavigateToVideos={handleNavigateToVideos} />

        {/* 10. Google Reviews */}
        <GoogleReviews />

        {/* 11. Official Social Media Channels */}
        <SocialMedia />

        {/* 12. Begin Your Project CTA */}
        <CTA />

        {/* 13. Contact */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Dynamic Island Quick Connect */}
      <FloatingContactIsland />
    </div>
  );
}
