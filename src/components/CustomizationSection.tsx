import React from 'react';
import { Palette, Globe, Layers, PhoneCall, Image, Hash, Sliders, Database } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface CustomizationSectionProps {
  lang: Language;
  onOpenEnquiry: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({ lang, onOpenEnquiry }) => {
  const t = getDictionary(lang);

  const customIcons = [
    <Palette className="w-5 h-5 text-[#356DFF]" />,
    <Layers className="w-5 h-5 text-indigo-500" />,
    <Hash className="w-5 h-5 text-emerald-500" />,
    <Sliders className="w-5 h-5 text-amber-500" />,
    <Image className="w-5 h-5 text-rose-500" />,
    <PhoneCall className="w-5 h-5 text-teal-500" />,
    <Globe className="w-5 h-5 text-blue-500" />,
    <Database className="w-5 h-5 text-purple-500" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
            <span>{t.customization.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.customization.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] max-w-2xl mx-auto leading-relaxed text-balance">
            {t.customization.subheadline}
          </p>
        </div>

        {/* 8 Customization Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.customization.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-[#356DFF]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {customIcons[idx] || <Sliders className="w-5 h-5 text-[#356DFF]" />}
                </div>

                <h3 className="font-bold text-base text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                <span>Tailored for your development</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note & CTA */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-500 mb-3">
            ℹ️ {t.customization.note}
          </p>
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#356DFF] hover:bg-[#2857dd] text-white font-semibold text-xs transition-colors"
          >
            <span>{lang === 'hi' ? 'कस्टम प्रपोजल प्राप्त करें' : 'Request a Custom Consultation'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
