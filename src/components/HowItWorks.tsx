import React from 'react';
import { UploadCloud, Layers, CheckCheck, Rocket, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface HowItWorksProps {
  lang: Language;
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang, onOpenEnquiry }) => {
  const t = getDictionary(lang);

  const stepIcons = [
    <UploadCloud className="w-6 h-6 text-[#356DFF]" />,
    <Layers className="w-6 h-6 text-indigo-500" />,
    <CheckCheck className="w-6 h-6 text-[#24B47E]" />,
    <Rocket className="w-6 h-6 text-amber-500" />
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#101C2C] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.howItWorks.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.howItWorks.subheadline}
          </p>
        </div>

        {/* 4 Connected Timeline Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.howItWorks.steps.map((st, idx) => (
            <div
              key={st.step}
              className="bg-[#0B1422] p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between relative group hover:border-[#356DFF]/50 transition-all"
            >
              <div className="space-y-4">
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-[#356DFF]">
                    {st.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10">
                <span className="text-[11px] font-medium text-[#24B47E] block">
                  ✓ {st.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-lg shadow-[#356DFF]/30 transition-all focus:outline-none"
          >
            <span>{lang === 'hi' ? 'अपना प्रोजेक्ट प्लान साझा करें' : 'Share Your Project Site Plan'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
