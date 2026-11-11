import React from 'react';
import { Smartphone, Zap, Move, CheckCircle2, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface MobileExperienceProps {
  lang: Language;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
}

export const MobileExperience: React.FC<MobileExperienceProps> = ({
  lang,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const t = getDictionary(lang);

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#356DFF]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Storytelling & Key Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t.mobileExperience.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              {t.mobileExperience.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
              {t.mobileExperience.subheadline}
            </p>

            {/* Prominent Quote Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 border-l-2 border-l-[#356DFF]">
              <p className="text-sm sm:text-base font-semibold text-white italic">
                "{t.mobileExperience.quote}"
              </p>
            </div>

            {/* Mobile Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.mobileExperience.highlights.map((h, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B1422] border border-white/10 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#24B47E] shrink-0" />
                    <span className="font-bold text-sm text-white">{h.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenLiveDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-lg shadow-[#356DFF]/30 transition-all focus:outline-none"
              >
                <span>{lang === 'hi' ? 'मोबाइल पर टेस्ट करें' : 'Test on Your Device'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all focus:outline-none"
              >
                <span>{lang === 'hi' ? 'प्रोजेक्ट डेमो मांगें' : 'Get a Project Demo'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Actual 3D Interface */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-[#356DFF]/20 rounded-[42px] filter blur-xl transform scale-95" />

              {/* Smartphone Body */}
              <div className="relative rounded-[36px] p-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-white/20 shadow-2xl overflow-hidden">
                <div className="relative rounded-[30px] overflow-hidden bg-slate-950 aspect-[9/16] shadow-inner">
                  {/* Actual Mobile 3D Layout Image */}
                  <img
                    src="/src/assets/images/mobile_plot_explorer_1794344702304.jpg"
                    alt="Smartphone screen showing interactive 3D plot explorer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />

                  {/* Interactive Floating Badge on Phone */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <span className="font-semibold">plot-explorer-demo.netlify.app</span>
                    <span className="text-[#24B47E] text-[11px] font-bold">● Live</span>
                  </div>
                </div>
              </div>

              {/* Comparison Card (Below phone) */}
              <div className="mt-6 p-4 rounded-xl bg-[#0B1422] border border-white/10 flex items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#356DFF]" />
                  <span>Desktop Sales Gallery</span>
                </div>
                <span className="text-slate-600">⇄</span>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#24B47E]" />
                  <span>Pocket WhatsApp Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
