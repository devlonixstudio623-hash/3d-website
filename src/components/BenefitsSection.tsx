import React from 'react';
import { Sparkles, Compass, HelpCircle, Users, Briefcase, Share2, Award } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface BenefitsSectionProps {
  lang: Language;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ lang }) => {
  const t = getDictionary(lang);

  const iconMap: Record<string, React.ReactNode> = {
    'benefit-1': <Sparkles className="w-5 h-5 text-[#356DFF]" />,
    'benefit-2': <Compass className="w-5 h-5 text-indigo-500" />,
    'benefit-3': <Users className="w-5 h-5 text-emerald-500" />,
    'benefit-4': <Briefcase className="w-5 h-5 text-blue-500" />,
    'benefit-5': <Share2 className="w-5 h-5 text-[#24B47E]" />,
    'benefit-6': <Award className="w-5 h-5 text-amber-500" />
  };

  return (
    <section id="benefits" className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
            <span>{t.benefits.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.benefits.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] max-w-2xl mx-auto leading-relaxed text-balance">
            {t.benefits.subheadline}
          </p>
        </div>

        {/* 6 Benefit Cards Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((b) => (
            <div
              key={b.id}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#356DFF]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {iconMap[b.id] || <Sparkles className="w-5 h-5 text-[#356DFF]" />}
                  </div>
                  <span className="text-[11px] font-semibold text-[#356DFF] bg-blue-50 px-2 py-0.5 rounded">
                    {b.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-1">
                  {b.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-400">
                <span>Devlonix Real Estate Tech</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
