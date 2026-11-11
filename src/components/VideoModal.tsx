import React, { useRef, useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { getDictionary } from '../translations';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenLiveDemo?: () => void;
  onOpenEnquiry?: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  lang,
  onOpenLiveDemo,
  onOpenEnquiry
}) => {
  const t = getDictionary(lang);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(198); // 3:18
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const chapters = [
    { time: 0, label: lang === 'hi' ? 'शुरुआत (लेआउट)' : '0:00 Overview' },
    { time: 25, label: lang === 'hi' ? '3D ऑर्बिट' : '0:25 3D Orbit' },
    { time: 56, label: lang === 'hi' ? 'प्लॉट #42 चयन' : '0:56 Plot #42' },
    { time: 76, label: lang === 'hi' ? 'मकान वॉकथ्रू' : '1:16 Floor Plan' },
    { time: 110, label: lang === 'hi' ? 'धूप की दिशा' : '1:50 Sun Path' },
    { time: 135, label: lang === 'hi' ? 'मोबाइल व्यू' : '2:15 Mobile View' }
  ];

  const playVideo = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      try {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn('Modal playback prevented', err);
      }
    }
  };

  // Safe playback trigger when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setVideoError(false);

      const playTimeout = setTimeout(() => {
        if (videoRef.current) {
          playVideo();
        }
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(playTimeout);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isOpen, onClose]);

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
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

  const seekToChapter = (time: number) => {
    safeSeek(time);
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
    const remaining = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remaining.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0B1422] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#101C2C] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#24B47E] animate-pulse" />
            <h2 id="video-modal-title" className="font-bold text-sm sm:text-base text-white">
              {lang === 'hi' ? '3D प्लॉट एक्सप्लोरर - आधिकारिक वीडियो डेमो' : '3D Plot Explorer - Official Video Walkthrough'}
            </h2>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-[#356DFF]/20 text-[#356DFF] rounded border border-[#356DFF]/30">
              {lang === 'hi' ? 'हिंदी ऑडियो' : 'Hindi Narration'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas */}
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
            {/* Primary faststart optimized source */}
            <source src="/assets/aistudio/video_walkthrough.mp4" type="video/mp4" />
            {/* Fallback asset */}
            <source src="/assets/aistudio/Video_Project_5_23c309a2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Error Fallback */}
          {videoError && (
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
              <AlertCircle className="w-12 h-12 text-yellow-400 mb-3" />
              <p className="font-bold text-lg text-white">
                {lang === 'hi' ? 'वीडियो लोड करने में समस्या' : 'Video Loading Interrupted'}
              </p>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                {lang === 'hi'
                  ? 'कृपया वीडियो दोबारा चलाएं या सीधे इंटरैक्टिव 3D डेमो आजमाएं।'
                  : 'Please retry the walkthrough or launch the interactive 3D demo directly.'}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={handleRetryLoad}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'दोबारा लोड करें' : 'Retry Video'}</span>
                </button>
                {onOpenLiveDemo && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenLiveDemo();
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#356DFF] hover:bg-[#2857dd] text-white text-xs font-semibold transition-colors"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Big Center Play Button if paused */}
          {!isPlaying && !videoError && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer p-4 text-center"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#356DFF] hover:bg-[#255ce6] text-white flex items-center justify-center shadow-2xl shadow-[#356DFF]/60 hover:scale-105 transition-all">
                <Play className="w-8 h-8 ml-1 fill-white" />
              </div>
              <p className="mt-3 font-bold text-base sm:text-lg text-white">
                {lang === 'hi' ? 'वीडियो वॉकथ्रू चलाएं' : 'Play Walkthrough with Audio'}
              </p>
              <p className="text-xs text-slate-300 mt-1">
                {lang === 'hi' ? 'आधिकारिक हिंदी विवरण के साथ' : 'With real Hindi voiceover commentary'}
              </p>
            </div>
          )}

          {/* Muted Warning Pill */}
          {isPlaying && isMuted && !videoError && (
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-xs text-white backdrop-blur-sm transition-all"
            >
              <VolumeX className="w-4 h-4 text-yellow-400" />
              <span>{lang === 'hi' ? 'आवाज चालू करें (Unmute)' : 'Click to Unmute Audio'}</span>
            </button>
          )}
        </div>

        {/* Custom Video Controls Bar */}
        <div className="p-3 sm:p-4 bg-[#101C2C] border-t border-white/10 flex flex-col gap-2">
          {/* Seek Slider */}
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
              aria-label="Seek video position"
            />
            <span className="font-mono text-xs text-slate-400 shrink-0">
              {formatTime(duration)}
            </span>
          </div>

          {/* Primary Controls & Chapter Shortcuts */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-slate-300">
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
                aria-label="Restart video"
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

              <span className="hidden sm:inline text-[11px] text-[#24B47E] font-medium">
                ● 1080p HD
              </span>
            </div>

            {/* Quick Chapter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => seekToChapter(ch.time)}
                  className={`px-2 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                    activeChapter === idx
                      ? 'bg-[#356DFF] text-white'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-1.5 hover:text-white transition-colors focus:outline-none"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-4 sm:px-6 py-3 bg-[#0B1422] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            {lang === 'hi'
              ? 'क्या आप इसे खुद आजमाना चाहते हैं? लाइव डेमो में जाकर किसी भी प्लॉट पर क्लिक करें।'
              : 'Want to try it yourself? Open the live demo and explore any plot in real time.'}
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onOpenLiveDemo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLiveDemo();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#356DFF] hover:bg-[#2857dd] text-white font-semibold transition-colors focus:outline-none"
              >
                <span>{t.hero.primaryCta}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
            {onOpenEnquiry && (
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors focus:outline-none"
              >
                <span>{t.nav.getFreeDemo}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
