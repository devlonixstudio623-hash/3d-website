import React, { useState } from 'react';
import { Play, ArrowRight, Sparkles, Layers, Smartphone, Eye, Compass, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface HeroProps {
  lang: Language;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenLiveDemo,
  onOpenEnquiry,
  onWatchVideo
}) => {
  const t = getDictionary(lang);
  const [activePlot, setActivePlot] = useState<number | null>(42);

  const heroPlots = [
    { id: 42, label: 'Plot #42', size: '30 × 50 ft', area: '1,500 sq ft', status: 'Available', facing: 'North-East', top: '48%', left: '52%' },
    { id: 108, label: 'Plot #108', size: '40 × 60 ft', area: '2,400 sq ft', status: 'Park Facing', facing: 'East', top: '35%', left: '32%' },
    { id: 230, label: 'Plot #230', size: '35 × 55 ft', area: '1,925 sq ft', status: 'Corner Plot', facing: 'North', top: '62%', left: '68%' }
  ];

  return (
    <section id="overview" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#101C2C] via-[#0B1422] to-[#101C2C] text-white">
      {/* Subtle architectural grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #356DFF 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Prominent Top Video Announcement Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={onWatchVideo}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#356DFF]/15 hover:bg-[#356DFF]/25 border border-[#356DFF]/35 text-xs font-semibold text-white transition-all shadow-sm shadow-[#356DFF]/20 focus:outline-none"
            >
              <span className="w-5 h-5 rounded-full bg-[#356DFF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </span>
              <span className="text-[#356DFF] font-bold">
                {lang === 'hi' ? 'नया वीडियो डेमो:' : 'Featured Video:'}
              </span>
              <span className="text-slate-200">
                {lang === 'hi' ? '3D प्लॉट एक्सप्लोरर वॉकथ्रू देखें (हिंदी)' : 'Watch 3-Min Video Walkthrough (Hindi Narration)'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            {t.hero.headline}
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.hero.subheadline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenLiveDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#356DFF] hover:bg-[#255ce6] rounded-xl shadow-lg shadow-[#356DFF]/30 hover:shadow-[#356DFF]/50 transition-all focus:outline-none"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Prominent Watch Video Button */}
            <button
              onClick={onWatchVideo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl shadow-sm transition-all focus:outline-none group"
            >
              <div className="w-6 h-6 rounded-full bg-[#356DFF] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>{lang === 'hi' ? 'वीडियो डेमो देखें (3:18)' : 'Watch Video Demo (3:18)'}</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl transition-all focus:outline-none"
            >
              <span>{t.hero.discussCta}</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            {t.hero.trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#24B47E] shrink-0" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual: Large Impressive 3D Masterplan Showcase */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0B1422] group">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#101C2C] border-b border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 font-mono text-slate-300 hidden sm:inline text-[11px]">
                  https://plot-explorer-demo.netlify.app/
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Direct Video Trigger in Chrome Bar */}
                <button
                  onClick={onWatchVideo}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-md transition-colors"
                >
                  <Play className="w-3 h-3 text-[#356DFF] fill-[#356DFF]" />
                  <span>{lang === 'hi' ? 'वीडियो वॉकथ्रू' : 'Watch Video'}</span>
                </button>

                <button
                  onClick={onOpenLiveDemo}
                  className="px-2.5 py-1 text-[11px] font-semibold text-white bg-[#356DFF] hover:bg-[#2857dd] rounded-md transition-colors"
                >
                  {t.hero.primaryCta}
                </button>
              </div>
            </div>

            {/* Masterplan Image & Hotspot Canvas */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src="/assets/aistudio/video_poster.jpg"
                alt="3D Masterplan layout rendering of modern plotted township"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Gradient Scrim for readable overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1422]/90 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Hotspot Pins */}
              {heroPlots.map((plot) => (
                <button
                  key={plot.id}
                  onClick={() => setActivePlot(plot.id)}
                  style={{ top: plot.top, left: plot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-20 focus:outline-none ${
                    activePlot === plot.id ? 'scale-110 z-30' : 'hover:scale-105 opacity-90'
                  }`}
                  aria-label={`Select ${plot.label}`}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full animate-ping opacity-40 ${
                      activePlot === plot.id ? 'bg-[#356DFF]' : 'bg-[#24B47E]'
                    }`} />
                    <span className={`relative flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-lg border ${
                      activePlot === plot.id
                        ? 'bg-[#356DFF] text-white border-white/40'
                        : 'bg-[#101C2C]/90 text-white border-white/20'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {plot.label}
                    </span>
                  </div>
                </button>
              ))}

              {/* Selected Plot Live Card Overlay (Bottom Left) */}
              {activePlot && (
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-xs sm:max-w-sm p-4 rounded-xl bg-[#101C2C]/95 backdrop-blur-md border border-white/20 shadow-xl text-left animate-fadeIn">
                  {(() => {
                    const selected = heroPlots.find((p) => p.id === activePlot)!;
                    return (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-base text-white">{selected.label}</span>
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#24B47E]/20 text-[#24B47E] border border-[#24B47E]/30 rounded">
                            {selected.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-white/10">
                          <div>
                            <span className="text-slate-400 block text-[10px]">Dimensions</span>
                            <span className="text-white font-medium">{selected.size}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Total Area</span>
                            <span className="text-white font-medium">{selected.area}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Orientation</span>
                            <span className="text-white font-medium">{selected.facing}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Action</span>
                            <button
                              onClick={onOpenLiveDemo}
                              className="text-[#356DFF] hover:underline font-semibold"
                            >
                              Inspect in 3D →
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Bottom Right Floating Launch & Video Pills */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
                <button
                  onClick={onWatchVideo}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-black/70 hover:bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg transition-colors focus:outline-none"
                >
                  <Play className="w-3.5 h-3.5 text-[#356DFF] fill-[#356DFF]" />
                  <span>{lang === 'hi' ? 'वीडियो देखें' : 'Watch Video'}</span>
                </button>

                <button
                  onClick={onOpenLiveDemo}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#356DFF] hover:bg-[#2857dd] rounded-lg shadow-lg shadow-black/40 transition-colors focus:outline-none"
                >
                  <Eye className="w-4 h-4" />
                  <span>{t.hero.primaryCta}</span>
                </button>
              </div>
            </div>

            {/* Bottom Helper Bar */}
            <div className="px-4 py-3 bg-[#101C2C] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#356DFF]" />
                <span>{t.hero.interactiveNotice}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1"><Smartphone className="w-3.5 h-3.5" /> Mobile Ready</span>
                <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> Multi-sector</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
