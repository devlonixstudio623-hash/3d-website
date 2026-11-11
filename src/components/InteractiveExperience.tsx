import React, { useState } from 'react';
import { Compass, MousePointerClick, FileSpreadsheet, MessageSquare, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Language, PlotSimulationData } from '../types';
import { getDictionary } from '../translations';

interface InteractiveExperienceProps {
  lang: Language;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
}

export const InteractiveExperience: React.FC<InteractiveExperienceProps> = ({
  lang,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const t = getDictionary(lang);

  const samplePlots: PlotSimulationData[] = [
    { id: 14, plotNumber: 'Plot 14', dimensions: '30 ft × 45 ft', areaSqFt: 1350, areaGaj: 150, facing: 'East Facing', status: 'available', x: 20, y: 30, width: 60, height: 40, roadAccess: '30 ft Internal Road' },
    { id: 42, plotNumber: 'Plot 42', dimensions: '30 ft × 50 ft', areaSqFt: 1500, areaGaj: 166.6, facing: 'North-East (Corner)', status: 'available', x: 90, y: 30, width: 65, height: 45, roadAccess: '40 ft Sector Road' },
    { id: 78, plotNumber: 'Plot 78', dimensions: '35 ft × 55 ft', areaSqFt: 1925, areaGaj: 213.8, facing: 'North Facing (Park)', status: 'reserved', x: 165, y: 30, width: 70, height: 45, roadAccess: '30 ft Internal Road' },
    { id: 108, plotNumber: 'Plot 108', dimensions: '40 ft × 60 ft', areaSqFt: 2400, areaGaj: 266.6, facing: 'Park Facing (Premium)', status: 'available', x: 20, y: 85, width: 80, height: 50, roadAccess: '50 ft Main Boulevard' },
    { id: 142, plotNumber: 'Plot 142', dimensions: '50 ft × 80 ft', areaSqFt: 4000, areaGaj: 444.4, facing: 'North-West Facing', status: 'available', x: 110, y: 85, width: 90, height: 55, roadAccess: '40 ft Sector Road' }
  ];

  const [selectedPlot, setSelectedPlot] = useState<PlotSimulationData>(samplePlots[1]); // Default Plot 42

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] text-[#172033] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/10 text-xs font-semibold text-[#356DFF]">
            <span>{t.interactiveFeatures.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight text-balance">
            {t.interactiveFeatures.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#687386] max-w-2xl mx-auto leading-relaxed text-balance">
            {t.interactiveFeatures.subheadline}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature A */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#356DFF]/50 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#356DFF] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{t.interactiveFeatures.groups.a.title}</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {t.interactiveFeatures.groups.a.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#24B47E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature B */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#356DFF]/50 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <MousePointerClick className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{t.interactiveFeatures.groups.b.title}</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {t.interactiveFeatures.groups.b.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#24B47E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature C */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#356DFF]/50 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{t.interactiveFeatures.groups.c.title}</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {t.interactiveFeatures.groups.c.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#24B47E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature D */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#356DFF]/50 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#24B47E] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">{t.interactiveFeatures.groups.d.title}</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {t.interactiveFeatures.groups.d.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#24B47E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Live Interactive Plot Selector Simulator */}
        <div className="mt-14 max-w-5xl mx-auto bg-[#101C2C] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#356DFF] uppercase tracking-wider block">
                {lang === 'hi' ? 'लाइव सिमुलेशन' : 'Interactive Simulation'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                {lang === 'hi' ? 'प्लॉट चुनकर देखें कि ग्राहक क्या देखते हैं' : 'Test Plot Selection in Real Time'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 mr-1">
                {lang === 'hi' ? 'प्लॉट चुनें:' : 'Click to pick:'}
              </span>
              {samplePlots.map((plot) => (
                <button
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all focus:outline-none ${
                    selectedPlot.id === plot.id
                      ? 'bg-[#356DFF] text-white shadow-md shadow-[#356DFF]/50 scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-slate-300'
                  }`}
                >
                  #{plot.id}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Inspection Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left: Masterplan mini blueprint visual representation */}
            <div className="lg:col-span-2 relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-white/15 p-4 flex items-center justify-center">
              <img
                src="/src/assets/images/interactive_plot_preview_1794344701649.jpg"
                alt="Interactive Masterplan Grid"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Dynamic Focus Pin */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
                <div className="p-3 bg-[#101C2C]/90 backdrop-blur-md rounded-xl border border-[#356DFF] shadow-2xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#24B47E] animate-ping" />
                  <div>
                    <span className="text-xs font-bold text-white block">{selectedPlot.plotNumber} Selected</span>
                    <span className="text-[11px] text-slate-300">{selectedPlot.dimensions} · {selectedPlot.facing}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Specification Drawer */}
            <div className="bg-[#0B1422] p-5 rounded-xl border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">{lang === 'hi' ? 'चुना गया प्लॉट' : 'Active Plot'}</span>
                  <span className="text-xl font-extrabold text-white">{selectedPlot.plotNumber}</span>
                </div>
                <span className={`px-2.5 py-1 text-xs font-bold rounded ${
                  selectedPlot.status === 'available'
                    ? 'bg-[#24B47E]/20 text-[#24B47E] border border-[#24B47E]/40'
                    : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                }`}>
                  {selectedPlot.status === 'available'
                    ? (lang === 'hi' ? 'उपलब्ध (Available)' : 'Available')
                    : (lang === 'hi' ? 'आरक्षित (Reserved)' : 'Reserved')}
                </span>
              </div>

              <div className="space-y-2.5 text-xs border-y border-white/10 py-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'hi' ? 'माप (Dimensions):' : 'Dimensions:'}</span>
                  <span className="font-medium text-white">{selectedPlot.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'hi' ? 'क्षेत्रफल (Area):' : 'Total Area:'}</span>
                  <span className="font-medium text-white">{selectedPlot.areaSqFt} Sq. Ft. ({selectedPlot.areaGaj} Gaj)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'hi' ? 'वास्तु / दिशा:' : 'Facing:'}</span>
                  <span className="font-medium text-white">{selectedPlot.facing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{lang === 'hi' ? 'सड़क पहुंच:' : 'Road Access:'}</span>
                  <span className="font-medium text-white">{selectedPlot.roadAccess}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/919839000000?text=${encodeURIComponent(
                    `Hello Devlonix, I am interested in exploring ${selectedPlot.plotNumber} (${selectedPlot.dimensions}, ${selectedPlot.areaSqFt} sq ft) for my project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#24B47E] hover:bg-[#1fa16f] text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर पूछताछ करें' : 'WhatsApp Enquiry for this Plot'}</span>
                </a>

                <button
                  onClick={onOpenLiveDemo}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  <span>{lang === 'hi' ? 'पूरा 3D डेमो खोलें' : 'Open Full 3D Demo'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
