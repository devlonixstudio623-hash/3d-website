import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowUpRight, Play } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
  onWatchVideo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenLiveDemo,
  onOpenEnquiry,
  onWatchVideo
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getDictionary(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.overview, href: '#overview' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.benefits, href: '#benefits' },
    { label: t.nav.faq, href: '#faq' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#101C2C]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10 py-3'
          : 'bg-[#101C2C] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white group shrink-0 focus:outline-none"
            aria-label="Devlonix 3D Plot Explorer Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#356DFF] flex items-center justify-center font-bold text-white shadow-sm shadow-[#356DFF]/50 group-hover:bg-[#2c5be0] transition-colors">
              <span className="text-base font-display">D</span>
            </div>
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Devlonix
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                / 3D Plot Explorer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-300"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap py-1 focus:outline-none focus:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions Zone */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Top Watch Video Button */}
            <button
              onClick={onWatchVideo}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all focus:outline-none"
              title={currentLang === 'hi' ? 'वीडियो वॉकथ्रू देखें' : 'Watch Video Walkthrough'}
            >
              <Play className="w-3.5 h-3.5 text-[#356DFF] fill-[#356DFF]" />
              <span className="whitespace-nowrap">
                {currentLang === 'hi' ? 'वीडियो देखें' : 'Watch Video'}
              </span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors focus:outline-none"
              title={currentLang === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">{currentLang === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            {/* Explore Live Demo Secondary Button */}
            <button
              onClick={onOpenLiveDemo}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors whitespace-nowrap focus:outline-none"
            >
              <span>{t.nav.exploreLiveDemo}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#356DFF] hover:bg-[#2857dd] rounded-lg shadow-sm shadow-[#356DFF]/40 transition-colors whitespace-nowrap focus:outline-none"
            >
              {t.nav.getFreeDemo}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onWatchVideo();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-white/15 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
              >
                <Play className="w-4 h-4 text-[#356DFF] fill-[#356DFF]" />
                <span>{currentLang === 'hi' ? 'डेमो वीडियो देखें (हिंदी)' : 'Watch Demo Video (Hindi)'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLiveDemo();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors"
              >
                <span>{t.nav.exploreLiveDemo}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
