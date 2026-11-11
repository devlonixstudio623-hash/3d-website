import React, { useState, useEffect } from 'react';
import { Eye, Send } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface MobileStickyCtaProps {
  lang: Language;
  onOpenLiveDemo: () => void;
  onOpenEnquiry: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({
  lang,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = getDictionary(lang);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling 350px past initial hero
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101C2C]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 shadow-2xl animate-fadeIn"
      style={{ maxHeight: '64px' }}
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenLiveDemo}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-lg border border-white/15 transition-colors focus:outline-none"
        >
          <Eye className="w-3.5 h-3.5 text-[#356DFF]" />
          <span>{lang === 'hi' ? 'लाइव 3D डेमो' : 'Live 3D Demo'}</span>
        </button>

        <button
          onClick={onOpenEnquiry}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-xs rounded-lg shadow-sm shadow-[#356DFF]/50 transition-colors focus:outline-none"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'फ्री डेमो मांगें' : 'Get Free Demo'}</span>
        </button>
      </div>
    </div>
  );
};
