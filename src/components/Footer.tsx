import React from 'react';
import { MessageSquare, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface FooterProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onLanguageChange,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const t = getDictionary(lang);

  return (
    <footer className="bg-[#0B1422] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#356DFF] flex items-center justify-center font-bold text-white shadow-sm shadow-[#356DFF]/50">
                <span className="text-base font-display">D</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Devlonix
              </span>
            </div>

            <p className="font-semibold text-sm text-[#356DFF]">
              {t.footer.productName}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#24B47E] shrink-0" />
              <span>{t.footer.location} · {t.footer.expansionText}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  {t.nav.overview}
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  {t.nav.benefits}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenLiveDemo}
                  className="hover:text-[#356DFF] transition-colors flex items-center gap-1 text-left"
                >
                  <span>{t.nav.exploreLiveDemo}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Actions */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#356DFF] shrink-0" />
                <a href="mailto:devlonixstudio623@gmail.com" className="hover:text-white transition-colors">
                  devlonixstudio623@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#24B47E] shrink-0" />
                <a
                  href="https://wa.me/919839000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 98390 00000 (WhatsApp)
                </a>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919839000000?text=Hello%20Devlonix,%20I%20am%20interested%20in%203D%20Plot%20Explorer."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#24B47E] hover:bg-[#1fa16f] text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.footer.whatsappCta}</span>
              </a>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'en' ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'hi' ? 'bg-white/15 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>{t.footer.copyright}</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-slate-400 font-medium">"{t.footer.tagline}"</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-[11px] font-mono">{t.footer.demoNotice}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
