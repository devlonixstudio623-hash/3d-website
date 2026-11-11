import React, { useState } from 'react';
import { X, ExternalLink, RefreshCw, Maximize2, Minimize2, Compass } from 'lucide-react';
import { Language } from '../types';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ isOpen, onClose, lang }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const demoUrl = 'https://plot-explorer-demo.netlify.app/';

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="3D Plot Explorer Live Demo"
    >
      <div
        className={`bg-[#0B1422] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 ${
          isFullscreen
            ? 'w-full h-full rounded-none border-0'
            : 'w-full max-w-6xl h-[88vh] max-h-[880px]'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#101C2C] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#24B47E]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  3D Plot Explorer – Live Interactive Demo
                </span>
                <span className="text-[11px] text-[#24B47E] font-medium hidden sm:inline">
                  plot-explorer-demo.netlify.app
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden md:block">
                {lang === 'hi'
                  ? '3D में घुमाने के लिए ड्रैग करें, ज़ूम करने के लिए स्क्रॉल करें, प्लॉट का विवरण देखने के लिए क्लिक करें।'
                  : 'Drag to rotate 3D orbit, scroll to zoom, click any plot to inspect live parameters.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              title="Reload preview"
              aria-label="Reload preview"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#356DFF] hover:bg-[#2857dd] rounded-lg transition-colors focus:outline-none"
            >
              <span>{lang === 'hi' ? 'नए टैब में खोलें' : 'Open in New Tab'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:block focus:outline-none"
              title={isFullscreen ? 'Exit full screen' : 'Full screen'}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Demo Frame */}
        <div className="relative flex-1 bg-slate-950 w-full h-full overflow-hidden">
          <iframe
            key={iframeKey}
            src={demoUrl}
            title="3D Plot Explorer Live Experience"
            className="w-full h-full border-0"
            allow="fullscreen; accelerometer; gyroscope"
            loading="eager"
          />

          {/* Quick Helper Floating Badge */}
          <div className="absolute bottom-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B1422]/90 backdrop-blur-md border border-white/10 text-xs text-slate-300">
            <Compass className="w-4 h-4 text-[#356DFF]" />
            <span>
              {lang === 'hi'
                ? 'माउस या टच से रोटेट और ज़ूम करें'
                : 'Interactive 3D Masterplan: Orbit, pan, and select plots'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
