import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface ComparisonSectionProps {
  lang: Language;
  onOpenLiveDemo: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ lang, onOpenLiveDemo }) => {
  const t = getDictionary(lang);

  return (
    <section className="py-20 lg:py-28 bg-[#0B1422] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
            <span>{t.comparison.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.comparison.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.comparison.subheadline}
          </p>
        </div>

        {/* Visual Comparison Card Table */}
        <div className="mt-14 max-w-4xl mx-auto space-y-4">
          {t.comparison.rows.map((row, idx) => (
            <div
              key={idx}
              className="bg-[#101C2C] rounded-2xl border border-white/10 p-5 sm:p-6 shadow-md grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Aspect Title */}
              <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 pb-3 md:pb-0 md:pr-4">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  0{idx + 1}
                </span>
                <span className="font-bold text-base text-white">
                  {row.aspect}
                </span>
              </div>

              {/* Traditional (Left) */}
              <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-red-400 uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? 'पारंपरिक' : 'Traditional'}
                  </span>
                  <span>{row.traditional}</span>
                </div>
              </div>

              {/* 3D Plot Explorer (Right) */}
              <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-white bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="w-5 h-5 rounded-full bg-[#24B47E]/20 text-[#24B47E] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#24B47E] uppercase tracking-wider block mb-0.5">
                    {lang === 'hi' ? '3D प्लॉट एक्सप्लोरर' : '3D Plot Explorer'}
                  </span>
                  <span className="font-medium text-slate-100">{row.interactive}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenLiveDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-lg shadow-[#356DFF]/30 transition-all focus:outline-none"
          >
            <span>{lang === 'hi' ? 'लाइव फर्क महसूस करें' : 'Experience the Difference in 3D'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
