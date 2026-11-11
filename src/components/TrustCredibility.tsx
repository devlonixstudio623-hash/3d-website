import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, Laptop, Smartphone } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface TrustCredibilityProps {
  lang: Language;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
}

export const TrustCredibility: React.FC<TrustCredibilityProps> = ({
  lang,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const t = getDictionary(lang);

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.credibility.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.credibility.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.credibility.subheadline}
          </p>
        </div>

        {/* 3 Integrity Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.credibility.pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#0B1422] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#24B47E]/20 text-[#24B47E] flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h3 className="font-bold text-lg text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 text-xs text-[#24B47E] font-medium">
                Verified Devlonix Standard
              </div>
            </div>
          ))}
        </div>

        {/* Experience The Product Yourself Feature Card */}
        <div className="mt-12 bg-gradient-to-r from-[#101C2C] via-[#0B1422] to-[#101C2C] rounded-2xl border border-white/15 p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-semibold text-[#356DFF] uppercase tracking-wider block">
              {lang === 'hi' ? 'लाइव परीक्षण' : 'Interactive Validation'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.credibility.experienceTitle}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              {t.credibility.experienceDesc}
            </p>
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Laptop className="w-4 h-4 text-[#356DFF]" /> No Installation</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-[#24B47E]" /> Mobile Optimized</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenLiveDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-lg shadow-[#356DFF]/40 transition-all focus:outline-none"
            >
              <span>{t.credibility.liveDemoBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all focus:outline-none"
            >
              <span>{lang === 'hi' ? 'प्रोजेक्ट डेमो मांगें' : 'Discuss Your Project'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
