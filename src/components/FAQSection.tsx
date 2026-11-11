import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = getDictionary(lang);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.faq.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] max-w-2xl mx-auto leading-relaxed text-balance">
            {t.faq.subheadline}
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#356DFF] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#356DFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
