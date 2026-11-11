import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProductReveal } from './components/ProductReveal';
import { VideoDemoSection } from './components/VideoDemoSection';
import { InteractiveExperience } from './components/InteractiveExperience';
import { MobileExperience } from './components/MobileExperience';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhoIsItFor } from './components/WhoIsItFor';
import { ComparisonSection } from './components/ComparisonSection';
import { CustomizationSection } from './components/CustomizationSection';
import { TrustCredibility } from './components/TrustCredibility';
import { FAQSection } from './components/FAQSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { LiveDemoModal } from './components/LiveDemoModal';
import { EnquiryModal } from './components/EnquiryModal';
import { VideoModal } from './components/VideoModal';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    // Check path or localStorage
    if (typeof window !== 'undefined') {
      if (window.location.pathname.startsWith('/hi') || window.location.hash.includes('lang=hi')) {
        return 'hi';
      }
      const saved = localStorage.getItem('devlonix_lang');
      if (saved === 'hi' || saved === 'en') return saved;
    }
    return 'en';
  });

  const [isLiveDemoOpen, setIsLiveDemoOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('devlonix_lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleScrollToVideo = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033] flex flex-col font-body selection:bg-[#356DFF] selection:text-white">
      {/* SECTION 1: Premium Navigation with Watch Video option */}
      <Navbar
        currentLang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        onWatchVideo={() => setIsVideoModalOpen(true)}
      />

      <main className="flex-1">
        {/* SECTION 2: Hero with prominent Watch Video option at the top */}
        <Hero
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
          onWatchVideo={() => setIsVideoModalOpen(true)}
        />

        {/* SECTION 3: The Problem (Before & After) */}
        <ProblemSection
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        />

        {/* SECTION 4: Product Reveal */}
        <ProductReveal
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        />

        {/* SECTION 5: Live Product Demo Video (Embedded in its place) */}
        <VideoDemoSection
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        />

        {/* SECTION 6: Interactive Product Experience */}
        <InteractiveExperience
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 7: Mobile Experience */}
        <MobileExperience
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 8: Business Benefits */}
        <BenefitsSection lang={lang} />

        {/* SECTION 9: How It Works */}
        <HowItWorks
          lang={lang}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 10: Who Is It For? */}
        <WhoIsItFor
          lang={lang}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 11: Traditional vs Interactive Experience */}
        <ComparisonSection
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        />

        {/* SECTION 12: Customization */}
        <CustomizationSection
          lang={lang}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 13: Trust & Product Credibility */}
        <TrustCredibility
          lang={lang}
          onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 14: FAQ */}
        <FAQSection lang={lang} />

        {/* SECTION 15: Final Conversion Section */}
        <FinalCtaSection
          lang={lang}
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        />

        {/* SECTION 16: Inline Dedicated Enquiry Section */}
        <section id="enquiry-section" className="py-20 lg:py-28 bg-[#F5F7FA] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EnquiryForm lang={lang} isModal={false} />
          </div>
        </section>
      </main>

      {/* SECTION 17: Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
      />

      {/* Authentic Walkthrough Video Modal (Triggered from Top Bar / Hero) */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        lang={lang}
        onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
      />

      {/* Live 3D Interactive Demo Modal */}
      <LiveDemoModal
        isOpen={isLiveDemoOpen}
        onClose={() => setIsLiveDemoOpen(false)}
        lang={lang}
      />

      {/* Quick Enquiry Popup Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        lang={lang}
      />

      {/* Mobile Sticky CTA Bar (<15% viewport height) */}
      <MobileStickyCta
        lang={lang}
        onOpenLiveDemo={() => setIsLiveDemoOpen(true)}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
      />
    </div>
  );
}
