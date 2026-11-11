import React, { useState } from 'react';
import { AlertCircle, XCircle, CheckCircle, ArrowRight, FileText, Box } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface ProblemSectionProps {
  lang: Language;
  onOpenLiveDemo: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ lang, onOpenLiveDemo }) => {
  const t = getDictionary(lang);
  const [activeTab, setActiveTab] = useState<'traditional' | 'interactive'>('traditional');

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
            <AlertCircle className="w-3.5 h-3.5 text-red-600" />
            <span>{t.problem.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.problem.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] leading-relaxed text-balance">
            {t.problem.subheadline}
          </p>
        </div>

        {/* Visual Before & After Storytelling Comparison */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Way */}
          <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{t.problem.traditionalTitle}</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700">
                  {lang === 'hi' ? 'पुरानी विधि' : 'Static Approach'}
                </span>
              </div>

              {/* Blueprint Image Preview */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src="/src/assets/images/traditional_blueprint_layout_1794344701235.jpg"
                  alt="Traditional 2D paper blueprint plot map"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-950/10 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-xs text-slate-700 border border-slate-200">
                  ⚠️ {lang === 'hi' ? 'जटिल रेखाएं, अस्पष्ट प्लॉट नंबर और पढ़ने में परेशानी' : 'Cluttered lot numbers, tiny measurements & poor orientation'}
                </div>
              </div>

              {/* Pain Point Bullets */}
              <ul className="space-y-3 pt-2 text-sm">
                {t.problem.painPoints.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-900">{item.title}:</span>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-red-600 font-medium">
              ❌ {lang === 'hi' ? 'ग्राहक फोन पर सवाल पूछते-पूछते थक जाते हैं' : 'Creates friction and doubt in high-value purchase decisions'}
            </div>
          </div>

          {/* Interactive 3D Way */}
          <div className="bg-[#101C2C] text-white rounded-2xl border border-[#356DFF]/40 shadow-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div 
              className="absolute -right-20 -top-20 w-60 h-60 bg-[#356DFF]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#356DFF] flex items-center justify-center text-white">
                    <Box className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{t.problem.interactiveTitle}</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#24B47E]/20 text-[#24B47E] border border-[#24B47E]/30">
                  {lang === 'hi' ? 'आधुनिक अनुभव' : 'Modern Solution'}
                </span>
              </div>

              {/* 3D Highlight Preview Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-slate-900">
                <img
                  src="/src/assets/images/interactive_plot_preview_1794344701649.jpg"
                  alt="Clean 3D interactive plot layout preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#101C2C]/90 backdrop-blur-sm p-2 rounded-lg text-xs text-slate-200 border border-white/10 flex items-center justify-between">
                  <span className="font-medium">✨ {lang === 'hi' ? 'प्लॉट 42 तुरंत हाईलाइट, वास्तु और साइज स्पष्ट' : 'Plot #42 highlighted with clear boundaries & dimensions'}</span>
                  <button
                    onClick={onOpenLiveDemo}
                    className="text-[#356DFF] hover:underline font-bold text-[11px] shrink-0 ml-2"
                  >
                    {lang === 'hi' ? 'देखें →' : 'Try Live →'}
                  </button>
                </div>
              </div>

              {/* Pain points addressed */}
              <ul className="space-y-3 pt-2 text-sm">
                <li className="flex items-start gap-2.5 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#24B47E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{lang === 'hi' ? '3D में सम्पूर्ण दृश्य' : 'Full 3D Context'}:</span>{' '}
                    <span className="text-slate-300">
                      {lang === 'hi'
                        ? 'सड़क की चौड़ाई, पार्क और धूप-हवा को खरीदार खुद अपनी आंखों से देख सकते हैं।'
                        : 'Buyers visually understand roads, green spaces, and entrance distances.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#24B47E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{lang === 'hi' ? 'सटीक जानकारी एक क्लिक में' : 'Instant Single-Click Details'}:</span>{' '}
                    <span className="text-slate-300">
                      {lang === 'hi'
                        ? 'प्लॉट पर टैप करते ही साइज (30x50), कुल एरिया और फेसिंग स्क्रीन पर आ जाती है।'
                        : 'Tapping a plot reveals dimensions, facing, and status immediately.'}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-[#24B47E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{lang === 'hi' ? 'सेल्स टीम का समय बचता है' : 'Sales Time Saved'}:</span>{' '}
                    <span className="text-slate-300">
                      {lang === 'hi'
                        ? 'बुनियादी सवालों के बजाय गंभीर खरीदारों से सीधे बुकिंग और विजिट पर बात होती है।'
                        : 'Conversations focus on booking and visits rather than basic plot orientation.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#24B47E]">
              <span>✓ {lang === 'hi' ? 'सटीक और पारदर्शी अनुभव' : 'Transparent, engaging, and memorable buyer journey'}</span>
              <button
                onClick={onOpenLiveDemo}
                className="text-white hover:text-[#356DFF] font-semibold flex items-center gap-1 focus:outline-none"
              >
                <span>{lang === 'hi' ? 'लाइव डेमो चलाएं' : 'Explore Demo'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Closing Highlight Statement */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
          <p className="text-lg sm:text-xl font-bold text-[#172033] leading-relaxed text-balance">
            "{t.problem.closingStatement}"
          </p>
        </div>
      </div>
    </section>
  );
};
