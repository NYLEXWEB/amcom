import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import BrandCredentials from './sections/BrandCredentials';
import About from './sections/About';
import Services from './sections/Services';
import ServicesPage from './sections/ServicesPage';
import VideosPage from './sections/VideosPage';
import GalleryPage from './sections/GalleryPage';
import PackagesPage from './sections/PackagesPage';
import PackagesSection from './sections/PackagesSection';
import ProductDetailPage from './sections/ProductDetailPage';
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
  const parseHash = () => {
    if (typeof window === 'undefined') return { view: 'home', productCat: 'kitchen' };
    const hash = window.location.hash;

    if (hash === '#/packages') {
      return { view: 'packages', productCat: 'kitchen' };
    }
    if (hash === '#/services') {
      return { view: 'services', productCat: 'kitchen' };
    }
    if (hash === '#/videos') {
      return { view: 'videos', productCat: 'kitchen' };
    }
    if (hash === '#/gallery') {
      return { view: 'gallery', productCat: 'kitchen' };
    }
    if (hash.startsWith('#/products/')) {
      const cat = hash.replace('#/products/', '').split('?')[0];
      return { view: 'product-detail', productCat: cat || 'kitchen' };
    }
    if (hash === '#/products') {
      return { view: 'product-detail', productCat: 'kitchen' };
    }
    return { view: 'home', productCat: 'kitchen' };
  };

  const [routeState, setRouteState] = useState(parseHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateToServices = () => {
    window.location.hash = '/services';
    setRouteState({ view: 'services', productCat: 'kitchen' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToVideos = () => {
    window.location.hash = '/videos';
    setRouteState({ view: 'videos', productCat: 'kitchen' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToGallery = () => {
    window.location.hash = '/gallery';
    setRouteState({ view: 'gallery', productCat: 'kitchen' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPackages = () => {
    window.location.hash = '/packages';
    setRouteState({ view: 'packages', productCat: 'kitchen' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToProduct = (category) => {
    window.location.hash = `/products/${category}`;
    setRouteState({ view: 'product-detail', productCat: category });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setRouteState({ view: 'home', productCat: 'kitchen' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated Product Category Page (Kitchen, Bedroom, Dining Room, Living Room, Decorative Units, Kids Room)
  if (routeState.view === 'product-detail') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <ProductDetailPage
          initialCategory={routeState.productCat}
          onBackToHome={handleBackToHome}
          onSelectCategory={handleNavigateToProduct}
        />
        <FloatingContactIsland />
      </div>
    );
  }

  // Dedicated Packages Page
  if (routeState.view === 'packages') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <PackagesPage
          onBackToHome={handleBackToHome}
          onNavigateToProduct={handleNavigateToProduct}
        />
        <FloatingContactIsland />
      </div>
    );
  }

  // Dedicated Services Page
  if (routeState.view === 'services') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <ServicesPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // Dedicated Videos Page
  if (routeState.view === 'videos') {
    return (
      <div className="min-h-screen bg-[#0E1315] text-[#F8F9F7] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <VideosPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // Dedicated Gallery Page
  if (routeState.view === 'gallery') {
    return (
      <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
        <GalleryPage onBackToHome={handleBackToHome} />
        <FloatingContactIsland />
      </div>
    );
  }

  // Main Home Page View
  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7] flex flex-col">
      {/* 1. Header with Products Dropdown & Packages Link */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Full-screen Hero */}
        <Hero />

        {/* 3. Architectural Credentials & Trust Strip (Below Hero) */}
        <BrandCredentials />

        {/* 4. About AMCOM */}
        <About />

        {/* 5. Services: Asymmetrical Grid linking to separate Services Page */}
        <Services onNavigateToServices={handleNavigateToServices} />

        {/* 6. Packages Section (Requested in Audio 1: transparent pricing & packages) */}
        <PackagesSection onNavigateToPackages={handleNavigateToPackages} />

        {/* 7. Selected Projects */}
        <Projects />

        {/* 8. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 9. Design Process */}
        <Process />

        {/* 10. Curated Gallery */}
        <Gallery onNavigateToGallery={handleNavigateToGallery} />

        {/* 11. Real On-Site Video Showcase */}
        <VideoSection onNavigateToVideos={handleNavigateToVideos} />

        {/* 12. Google Reviews */}
        <GoogleReviews />

        {/* 13. Official Social Media Channels */}
        <SocialMedia />

        {/* 14. Begin Your Project CTA */}
        <CTA />

        {/* 15. Contact */}
        <Contact />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating Dynamic Island Quick Connect */}
      <FloatingContactIsland />
    </div>
  );
}
