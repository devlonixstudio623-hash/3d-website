import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, ExternalLink, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface VideoDemoSectionProps {
  lang: Language;
  onOpenLiveDemo: () => void;
}

export const VideoDemoSection: React.FC<VideoDemoSectionProps> = ({ lang, onOpenLiveDemo }) => {
  const t = getDictionary(lang);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(198); // 3:18
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const chapters = [
    {
      time: 0,
      title: lang === 'hi' ? '100 प्लॉट का मास्टरप्लान' : '100-Plot Masterplan Overview',
      desc: lang === 'hi' ? 'पारंपरिक 2D बनाम इंटरैक्टिव 3D लेआउट का अंतर' : 'Traditional static vs modern 3D layout scale'
    },
    {
      time: 25,
      title: lang === 'hi' ? '3D ऑर्बिट और रोटेशन' : '3D Masterplan Orbit Navigation',
      desc: lang === 'hi' ? '360° घुमाकर पूरे प्रोजेक्ट की सड़कें और पार्क देखें' : '360° project view with roads, green spaces & entries'
    },
    {
      time: 56,
      title: lang === 'hi' ? 'प्लॉट #42 का चयन' : 'Selecting Individual Plot #42',
      desc: lang === 'hi' ? '35×50 फीट डायमेंशन, 1750 वर्ग फीट और दिशा' : '35×50 ft dimensions, 1,750 sq ft area & orientation'
    },
    {
      time: 76,
      title: lang === 'hi' ? 'प्लॉट के अंदर मकान का मॉडल' : '3D House Model Inside Plot',
      desc: lang === 'hi' ? 'खरीदार को जमीन पर बनने वाले घर का स्पष्ट अहसास' : 'Ground-level perspective and floor layout realization'
    },
    {
      time: 110,
      title: lang === 'hi' ? 'धूप और सूर्य की दिशा (Sun Path)' : 'Sun Path & Light Simulation',
      desc: lang === 'hi' ? 'दिन के अलग-अलग समय पर धूप और वास्तु की स्थिति' : 'Accurate solar orientation and natural daylight angles'
    },
    {
      time: 135,
      title: lang === 'hi' ? 'प्लॉट फिल्टर और मोबाइल व्यू' : 'Plot Filters & Mobile Touchscreen',
      desc: lang === 'hi' ? 'मोबाइल ब्राउज़र पर बिना किसी ऐप के तुरंत लोड' : 'Instant mobile web access without downloading any app'
    }
  ];

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);
    const matchedIdx = chapters.findIndex((c, i) => {
      const nextTime = chapters[i + 1]?.time || duration + 1;
      return curr >= c.time && curr < nextTime;
    });
    if (matchedIdx !== -1) setActiveChapter(matchedIdx);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
      setVideoError(false);
    }
  };

  const playVideo = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      // Browser autoplay policy fallback: try muted
      try {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn('Playback not allowed without interaction', err);
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
      playVideo();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const safeSeek = (time: number) => {
    if (!videoRef.current) return;
    setCurrentTime(time);
    if (videoRef.current.readyState >= 1) {
      videoRef.current.currentTime = time;
    } else {
      const onReady = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
        videoRef.current?.removeEventListener('loadedmetadata', onReady);
      };
      videoRef.current.addEventListener('loadedmetadata', onReady);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    safeSeek(time);
  };

  const jumpToChapter = (idx: number) => {
    safeSeek(chapters[idx].time);
    setActiveChapter(idx);
    if (!isPlaying) {
      playVideo();
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleRetryLoad = () => {
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.load();
      playVideo();
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0B1422] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#356DFF]/15 border border-[#356DFF]/30 text-xs font-semibold text-[#356DFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.videoDemo.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {t.videoDemo.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
            {lang === 'hi'
              ? 'आधिकारिक 3D वॉकथ्रू वीडियो देखें जिसमें 100 प्लॉट्स का मास्टरप्लान, प्लॉट चयन, 3D मकान का मॉडल और सन पाथ सिमुलेशन हिंदी कमेंट्री के साथ समझाया गया है।'
              : 'Watch the official walkthrough video demonstrating the 100-plot masterplan, plot selection, 3D house model, and sun path simulation with Hindi commentary.'}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
            {/* HTML5 Video Element with supported sources */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                poster="/assets/aistudio/video_poster.jpg"
                preload="metadata"
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onError={handleVideoError}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              >
                {/* Primary web-optimized faststart video (26 MB) */}
                <source src="/assets/aistudio/video_walkthrough.mp4" type="video/mp4" />
                {/* Fallback to original high-res asset */}
                <source src="/assets/aistudio/Video_Project_5_23c309a2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Graceful Error Fallback if browser media source fails */}
              {videoError && (
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
                  <AlertCircle className="w-12 h-12 text-yellow-400 mb-3" />
                  <p className="font-bold text-lg text-white">
                    {lang === 'hi' ? 'वीडियो लोड करने में समस्या' : 'Video Loading Interrupted'}
                  </p>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    {lang === 'hi'
                      ? 'कृपया वीडियो दोबारा रीलोड करें या सीधे लाइव 3D डेमो आजमाएं।'
                      : 'Please reload the walkthrough or launch the interactive 3D demo directly.'}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={handleRetryLoad}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{lang === 'hi' ? 'दोबारा लोड करें' : 'Retry Video'}</span>
                    </button>
                    <button
                      onClick={onOpenLiveDemo}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#356DFF] hover:bg-[#2857dd] text-white text-xs font-semibold transition-colors"
                    >
                      <span>{t.videoDemo.tryLiveCta}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Dynamic HUD Overlay while playing */}
              {isPlaying && !videoError && (
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-md bg-[#101C2C]/80 backdrop-blur-sm text-xs font-bold text-white tracking-wide border border-white/10 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>{chapters[activeChapter].title}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-200 bg-black/70 px-2.5 py-1 rounded border border-white/10">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              )}

              {/* Play Button Overlay (when paused) */}
              {!isPlaying && !videoError && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center cursor-pointer"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-20 h-20 rounded-full bg-[#356DFF] hover:bg-[#255ce6] text-white flex items-center justify-center shadow-2xl shadow-[#356DFF]/60 hover:scale-110 transition-all focus:outline-none"
                    aria-label="Play video demo"
                  >
                    <Play className="w-8 h-8 ml-1 fill-white" />
                  </button>
                  <p className="mt-4 font-bold text-lg sm:text-xl text-white">
                    {lang === 'hi' ? '3D प्लॉट एक्सप्लोरर वॉकथ्रू चलाएं' : 'Play 3D Plot Explorer Walkthrough'}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                    {lang === 'hi'
                      ? '3 मिनट 18 सेकंड · संपूर्ण हिंदी वॉकथ्रू · 1080p HD'
                      : '3 min 18 sec · Full Hindi Audio Narration · 1080p Full HD'}
                  </p>
                </div>
              )}

              {/* Unmute Prompt if Playing Muted */}
              {isPlaying && isMuted && !videoError && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/90 border border-white/20 text-xs text-white backdrop-blur-sm transition-all focus:outline-none"
                >
                  <VolumeX className="w-4 h-4 text-yellow-400" />
                  <span>{lang === 'hi' ? 'आवाज चालू करें (Unmute)' : 'Unmute Hindi Audio'}</span>
                </button>
              )}
            </div>

            {/* Custom Video Controls Bar */}
            <div className="p-3 sm:p-4 bg-[#101C2C] border-t border-white/10 flex flex-col gap-2">
              {/* Scrub Slider */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400 shrink-0">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min={0}
                  max={duration || 198}
                  step={0.5}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#356DFF]"
                  aria-label="Seek video"
                />
                <span className="font-mono text-xs text-slate-400 shrink-0">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Controls and Chapter Jumpers */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 hover:text-white transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => {
                      safeSeek(0);
                      playVideo();
                    }}
                    className="p-1.5 hover:text-white transition-colors focus:outline-none"
                    aria-label="Restart walkthrough"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 hover:text-white transition-colors focus:outline-none"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-yellow-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Chapter Selection Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
                  {chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => jumpToChapter(idx)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                        activeChapter === idx
                          ? 'bg-[#356DFF] text-white shadow-sm shadow-[#356DFF]/50'
                          : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                      }`}
                      title={ch.desc}
                    >
                      {ch.title.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 hover:text-white transition-colors focus:outline-none"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Direct Demo Trigger */}
                  <button
                    onClick={onOpenLiveDemo}
                    className="hidden sm:flex items-center gap-1.5 text-[#356DFF] hover:text-white font-semibold focus:outline-none ml-2"
                  >
                    <span>{t.videoDemo.tryLiveCta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Under Video Callout Card */}
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#24B47E]" />
                <span className="text-xs uppercase font-bold tracking-wider text-[#24B47E]">
                  {lang === 'hi' ? 'वास्तविक प्रोजेक्ट पर आधारित' : 'Based on Real Plotted Development'}
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-white">
                {lang === 'hi'
                  ? 'देखिए कि कैसे एक खरीदार पूरे प्रोजेक्ट को देख सकता है, अपनी पसंद का प्लॉट चुन सकता है और कुछ ही सेकंड्स में उसकी पूरी जानकारी पा सकता है।'
                  : 'See how a buyer can explore an entire project, select a plot and discover its details in just a few interactions.'}
              </p>
              <p className="text-xs text-slate-400">
                Live reference: <span className="text-[#356DFF]">https://plot-explorer-demo.netlify.app/</span>
              </p>
            </div>

            <button
              onClick={onOpenLiveDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#356DFF] hover:bg-[#2857dd] text-white font-bold text-sm shadow-lg shadow-[#356DFF]/30 transition-all shrink-0 focus:outline-none"
            >
              <span>{t.videoDemo.tryLiveCta}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
