import React from 'react';
import { Home, Landmark, Building2, Factory, Trees, Castle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface WhoIsItForProps {
  lang: Language;
  onOpenEnquiry: () => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({ lang, onOpenEnquiry }) => {
  const t = getDictionary(lang);

  const icons: Record<string, React.ReactNode> = {
    residential: <Home className="w-5 h-5 text-[#356DFF]" />,
    township: <Landmark className="w-5 h-5 text-indigo-500" />,
    commercial: <Building2 className="w-5 h-5 text-amber-500" />,
    industrial: <Factory className="w-5 h-5 text-slate-700" />,
    farmhouse: <Trees className="w-5 h-5 text-[#24B47E]" />,
    villa: <Castle className="w-5 h-5 text-purple-600" />
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
            <span>{t.whoIsItFor.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.whoIsItFor.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] max-w-2xl mx-auto leading-relaxed text-balance">
            {t.whoIsItFor.subheadline}
          </p>
        </div>

        {/* 6 Target Audience Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whoIsItFor.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#356DFF]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {icons[card.id] || <Home className="w-5 h-5 text-[#356DFF]" />}
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#356DFF] transition-colors">
                    {card.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                    {card.subtitle}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-[#24B47E] font-medium">
                <span className="font-semibold text-slate-700 block mb-0.5">
                  {lang === 'hi' ? 'विशेष रूप से उपयुक्त:' : 'Ideal for:'}
                </span>
                {card.idealFor}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-3">
            {lang === 'hi'
              ? 'वाराणसी, पूर्वांचल, उत्तर प्रदेश और अखिल भारतीय स्तर पर डेवलपर्स के लिए उपलब्ध।'
              : 'Serving plotted colonizers in Varanasi, Uttar Pradesh, and across India.'}
          </p>
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
          >
            <span>{lang === 'hi' ? 'अपने प्रोजेक्ट के लिए चर्चा करें' : 'Discuss Your Project Category'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
