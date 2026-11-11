import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, Compass, ShieldCheck, MapPin, Maximize2 } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface ProductRevealProps {
  lang: Language;
  onOpenLiveDemo: () => void;
}

export const ProductReveal: React.FC<ProductRevealProps> = ({ lang, onOpenLiveDemo }) => {
  const t = getDictionary(lang);
  const [selectedSector, setSelectedSector] = useState<'A' | 'B' | 'C'>('A');

  const sectorData = {
    A: { name: 'Sector A – Lakeview Enclave', plots: 48, avgSize: '1,500 – 2,400 sq ft', highlight: 'Park-facing & Lakefront' },
    B: { name: 'Sector B – Central Boulevard', plots: 64, avgSize: '1,200 – 1,800 sq ft', highlight: 'Near Main 60ft Boulevard' },
    C: { name: 'Sector C – Executive Villas', plots: 32, avgSize: '2,400 – 3,600 sq ft', highlight: 'Gated Luxury Corner Parcels' }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#101C2C] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.productReveal.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.productReveal.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {t.productReveal.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {t.productReveal.featuresPill.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Masterplan Showcase Frame */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-[#0B1422] shadow-2xl">
          {/* Sector Selector Controls */}
          <div className="px-4 sm:px-6 py-3 bg-[#101C2C] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'hi' ? 'सेक्टर चुनें:' : 'Select Sector:'}
              </span>
              <div className="flex items-center gap-1.5">
                {(['A', 'B', 'C'] as const).map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedSector(sec)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors focus:outline-none ${
                      selectedSector === sec
                        ? 'bg-[#356DFF] text-white shadow-sm'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    Sector {sec}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-slate-400 hidden sm:flex items-center gap-3">
              <span className="text-[#24B47E] font-medium">● {sectorData[selectedSector].name}</span>
              <span>·</span>
              <span>{sectorData[selectedSector].plots} {lang === 'hi' ? 'प्लॉट्स' : 'Plots'}</span>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 group">
            <img
              src="/src/assets/images/interactive_plot_preview_1794344701649.jpg"
              alt="Interactive 3D plot visual demonstration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Live Data Overlay */}
            <div className="absolute top-4 left-4 z-20 bg-[#101C2C]/90 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl max-w-xs shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-white text-sm">{sectorData[selectedSector].name}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{sectorData[selectedSector].highlight}</p>
              <div className="mt-2 text-[11px] text-[#24B47E] font-mono">
                Avg: {sectorData[selectedSector].avgSize}
              </div>
            </div>

            {/* Launch CTA Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <button
                onClick={onOpenLiveDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold shadow-xl transition-transform transform scale-95 group-hover:scale-100"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{t.productReveal.cta}</span>
              </button>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-[#101C2C] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#356DFF] shrink-0" />
              <span>
                {lang === 'hi'
                  ? 'रियल-टाइम 3D रोटेशन और व्यक्तिगत प्लॉट की विस्तृत जानकारी।'
                  : 'Real-time 3D rotation, plot coordinates, and instant sales connection.'}
              </span>
            </div>

            <button
              onClick={onOpenLiveDemo}
              className="inline-flex items-center gap-1.5 text-[#356DFF] hover:text-white font-semibold transition-colors"
            >
              <span>{t.productReveal.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
