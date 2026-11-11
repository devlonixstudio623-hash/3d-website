import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface FinalCtaSectionProps {
  lang: Language;
  onOpenEnquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ lang, onOpenEnquiry }) => {
  const t = getDictionary(lang);

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Aerial Plot Visual Blend */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/src/assets/images/plot_masterplan_3d_hero_1794344699976.jpg"
          alt="3D plotted masterplan background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-[#101C2C]/90 to-[#101C2C]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-[#356DFF]" />
          <span>Devlonix 3D Plot Explorer</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
          {t.finalCta.headline}
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          {t.finalCta.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-base shadow-xl shadow-[#356DFF]/40 transition-all focus:outline-none"
          >
            <span>{t.finalCta.primaryCta}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/919839000000?text=Hello%20Devlonix,%20I%20am%20a%20real%20estate%20developer%20interested%20in%203D%20Plot%20Explorer%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#24B47E] hover:bg-[#1fa16f] text-white font-bold text-base shadow-lg shadow-[#24B47E]/30 transition-all focus:outline-none"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.finalCta.secondaryCta}</span>
          </a>
        </div>

        {/* Direct Contact info */}
        <div className="pt-6 border-t border-white/10 text-xs text-slate-400">
          <p>{t.finalCta.contactDirect}</p>
        </div>
      </div>
    </section>
  );
};
