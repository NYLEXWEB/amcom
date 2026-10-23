import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import BrandCredentials from './sections/BrandCredentials';
import About from './sections/About';
import AboutPage from './sections/AboutPage';
import Services from './sections/Services';
import ServicesPage from './sections/ServicesPage';
import VideosPage from './sections/VideosPage';
import GalleryPage from './sections/GalleryPage';
import PackagesPage from './sections/PackagesPage';
import ProductDetailPage from './sections/ProductDetailPage';
import BeforeAfterSlider from './sections/BeforeAfterSlider';
import Process from './sections/Process';
import Gallery from './sections/Gallery';
import GoogleReviews from './sections/GoogleReviews';
import SocialMedia from './sections/SocialMedia';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import ContactPage from './sections/ContactPage';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import FloatingContactIsland from './components/FloatingContactIsland';
import VideoSection from './sections/VideoSection';

export default function App() {
  const parseRoute = () => {
    if (typeof window === 'undefined') return { view: 'home', productCat: 'kitchen' };

    // 1. Prioritize clean SEO pathnames
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    if (path === '/about') return { view: 'about', productCat: 'kitchen' };
    if (path === '/contact') return { view: 'contact', productCat: 'kitchen' };
    if (path === '/packages') return { view: 'packages', productCat: 'kitchen' };
    if (path === '/services') return { view: 'services', productCat: 'kitchen' };
    if (path === '/videos') return { view: 'videos', productCat: 'kitchen' };
    if (path === '/gallery') return { view: 'gallery', productCat: 'kitchen' };
    if (path.startsWith('/products/')) {
      const cat = path.replace('/products/', '').split('?')[0];
      return { view: 'product-detail', productCat: cat || 'kitchen' };
    }
    if (path === '/products') return { view: 'product-detail', productCat: 'kitchen' };

    // 2. Full backwards compatibility with hash fragments
    const hash = window.location.hash;
    if (hash === '#/about' || hash === '#about') return { view: 'about', productCat: 'kitchen' };
    if (hash === '#/contact' || hash === '#contact') return { view: 'contact', productCat: 'kitchen' };
    if (hash === '#/packages' || hash === '#packages') return { view: 'packages', productCat: 'kitchen' };
    if (hash === '#/services' || hash === '#services') return { view: 'services', productCat: 'kitchen' };
    if (hash === '#/videos' || hash === '#videos') return { view: 'videos', productCat: 'kitchen' };
    if (hash === '#/gallery' || hash === '#gallery') return { view: 'gallery', productCat: 'kitchen' };
    if (hash.startsWith('#/products/')) {
      const cat = hash.replace('#/products/', '').split('?')[0];
      return { view: 'product-detail', productCat: cat || 'kitchen' };
    }
    if (hash === '#/products' || hash === '#products') {
      return { view: 'product-detail', productCat: 'kitchen' };
    }

    return { view: 'home', productCat: 'kitchen' };
  };

  const [routeState, setRouteState] = useState(parseRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRouteState(parseRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Dynamic On-Page SEO Titles, Meta Descriptions, Keywords & Canonical URLs per route
  useEffect(() => {
    const seoMap = {
      home: {
        title: "AMCOM Interiors | Best Interior Designers & Turnkey Execution in Kozhikode (Calicut)",
        description: "AMCOM Interiors is an architectural interior design and turnkey construction studio in Kozhikode (Calicut), Kerala. Specializing in modular kitchens, bedroom suites, living spaces, and full-home execution since 1999.",
        keywords: "best interior designers in calicut, interior designers near me, best interior designers in kozhikode, interior designers in kerala, top interior designers calicut, modular kitchen near me, modular kitchen calicut, turnkey interior execution kerala, home interior designers near me, affordable interior designers calicut, luxury home interiors kozhikode, 2bhk interior cost calicut, interior designers in puthiyara",
        canonical: "https://amcominteriors.com/"
      },
      services: {
        title: "Turnkey Interior Design Services in Kerala | AMCOM Interiors Calicut",
        description: "Explore AMCOM Interiors' turnkey architectural services across Kerala: modular kitchens, living rooms, bedrooms, and commercial interior execution.",
        keywords: "turnkey interior design kerala, turnkey interior contractors calicut, best turnkey interior designers kozhikode, residential interior execution calicut, architectural joinery kerala, commercial interior designers calicut, complete home renovation near me",
        canonical: "https://amcominteriors.com/services"
      },
      packages: {
        title: "Interior Design Packages & Pricing | AMCOM Interiors Kozhikode",
        description: "Transparent, itemized interior design packages for 1BHK, 2BHK, 3BHK and luxury villas in Kozhikode and Kerala with 40-45 day handover.",
        keywords: "interior design packages calicut, 2bhk interior design cost in calicut, 3bhk interior packages kerala, affordable home interiors near me, low cost interior designers in kozhikode, budget interior packages kerala, turnkey interior cost calicut",
        canonical: "https://amcominteriors.com/packages"
      },
      about: {
        title: "About AMCOM Interiors | 25+ Years of Architectural Craft in Kerala",
        description: "Learn about AMCOM Interiors, founded in 1999 in Kozhikode. Over 25 years of experience delivering timeless residential and commercial spaces.",
        keywords: "amcom interiors calicut, about amcom interiors, top interior designers kozhikode, interior design company established 1999, reliable interior designers calicut, best interior architects kerala",
        canonical: "https://amcominteriors.com/about"
      },
      gallery: {
        title: "Architectural Interior Project Gallery | AMCOM Interiors Kerala",
        description: "Browse 40+ completed residential, kitchen, and living room interior photographs executed across Kozhikode, Kannur, and Kerala.",
        keywords: "interior design portfolio kerala, completed interior projects calicut, modular kitchen photos kozhikode, living room interior photos calicut, luxury villa interiors kerala, best interior design photos",
        canonical: "https://amcominteriors.com/gallery"
      },
      videos: {
        title: "On-Site Real Interior Walkthrough Videos | AMCOM Interiors Calicut",
        description: "Watch authentic on-site interior walkthroughs showcasing our factory-finished joinery, modular kitchens, and craftsmanship in Kerala.",
        keywords: "interior walkthrough videos calicut, real site interior video kerala, modular kitchen video tour calicut, before and after interior renovation kerala, amcom interior project videos",
        canonical: "https://amcominteriors.com/videos"
      },
      contact: {
        title: "Contact AMCOM Interiors | Calicut Studio & Free Design Consultation",
        description: "Get in touch with AMCOM Interiors in Puthiyara, Kozhikode. Call +91 70128 39079 or chat on WhatsApp for free 3D design quotes.",
        keywords: "contact interior designers calicut, interior design studio puthiyara kozhikode, free 3D interior design consultation calicut, interior designer phone number near me, amcom interiors contact, interior designers in arayidathupalam",
        canonical: "https://amcominteriors.com/contact"
      },
      'product-detail': {
        title: `Custom ${routeState.productCat ? routeState.productCat.charAt(0).toUpperCase() + routeState.productCat.slice(1).replace('-', ' ') : 'Modular'} Interiors | AMCOM Interiors Kozhikode`,
        description: `Bespoke ${routeState.productCat || 'interior'} design and manufacturing in Kozhikode, Kerala. 710-grade Marine BWP materials with 5-year warranty.`,
        keywords: `${routeState.productCat ? routeState.productCat.replace('-', ' ') : 'modular interior'} near me, best ${routeState.productCat ? routeState.productCat.replace('-', ' ') : 'modular'} in calicut, custom ${routeState.productCat ? routeState.productCat.replace('-', ' ') : 'modular'} kozhikode, 710 bwp marine plywood, factory finished ${routeState.productCat || 'woodwork'} kerala`,
        canonical: `https://amcominteriors.com/products/${routeState.productCat || 'kitchen'}`
      }
    };

    const currentSeo = seoMap[routeState.view] || seoMap.home;
    document.title = currentSeo.title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.description);
    }
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', currentSeo.keywords);

    // Dynamic Canonical & OpenGraph URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentSeo.canonical);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentSeo.canonical);
    }
  }, [routeState]);

  const navigateTo = (path, view, productCat = 'kitchen') => {
    try {
      window.history.pushState(null, '', path);
    } catch {
      window.location.hash = path;
    }
    setRouteState({ view, productCat });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToServices = () => navigateTo('/services', 'services');
  const handleNavigateToVideos = () => navigateTo('/videos', 'videos');
  const handleNavigateToGallery = () => navigateTo('/gallery', 'gallery');
  const handleNavigateToPackages = () => navigateTo('/packages', 'packages');
  const handleNavigateToProduct = (category) => navigateTo(`/products/${category}`, 'product-detail', category);
  const handleBackToHome = () => navigateTo('/', 'home');

  // Dedicated About Page
  if (routeState.view === 'about') {
    return <AboutPage onBackToHome={handleBackToHome} />;
  }

  // Dedicated Contact Page
  if (routeState.view === 'contact') {
    return <ContactPage onBackToHome={handleBackToHome} />;
  }

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
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7] flex flex-col w-full max-w-full overflow-x-hidden">
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

        {/* 5. Services (WHAT WE DO) */}
        <Services onNavigateToServices={handleNavigateToServices} />

        {/* 6. Questions & Answers (FAQ - Clean Architectural Lines) */}
        <FAQ />

        {/* 7. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 8. Design Process */}
        <Process />

        {/* 9. Curated Gallery */}
        <Gallery onNavigateToGallery={handleNavigateToGallery} />

        {/* 10. Real On-Site Video Showcase */}
        <VideoSection onNavigateToVideos={handleNavigateToVideos} />

        {/* 11. Google Reviews */}
        <GoogleReviews />

        {/* 12. Official Social Media Channels */}
        <SocialMedia />

        {/* 13. Begin Your Project CTA */}
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
