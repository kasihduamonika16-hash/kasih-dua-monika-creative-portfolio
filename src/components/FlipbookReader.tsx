import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, Maximize, 
  Minimize, Grid, Download, BookOpen, Layers 
} from 'lucide-react';
import { PortfolioPage, PORTFOLIO_PAGES } from '../data/portfolioData';

interface FlipbookReaderProps {
  initialPage?: number;
  isOpen: boolean;
  onClose: () => void;
  onOpenPageDetails: (pageNumber: number) => void;
}

export const FlipbookReader: React.FC<FlipbookReaderProps> = ({
  initialPage = 1,
  isOpen,
  onClose,
  onOpenPageDetails,
}) => {
  const [currentPageNum, setCurrentPageNum] = useState<number>(initialPage);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);

  useEffect(() => {
    if (initialPage) {
      setCurrentPageNum(initialPage);
    }
  }, [initialPage, isOpen]);

  // Autoplay presentation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setCurrentPageNum((prev) => (prev < PORTFOLIO_PAGES.length ? prev + 1 : 1));
      }, 4500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen && document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen, currentPageNum]);

  if (!isOpen) return null;

  const currentPage = PORTFOLIO_PAGES.find((p) => p.pageNumber === currentPageNum) || PORTFOLIO_PAGES[0];

  const handlePrev = () => {
    setCurrentPageNum((prev) => (prev > 1 ? prev - 1 : PORTFOLIO_PAGES.length));
  };

  const handleNext = () => {
    setCurrentPageNum((prev) => (prev < PORTFOLIO_PAGES.length ? prev + 1 : 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-slate-950 select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio presentation mode"
    >
      {/* Top Controls Bar */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 px-2.5 items-center justify-center rounded-lg bg-lime-400 font-mono text-xs font-black text-slate-950">
              {String(currentPageNum).padStart(2, '0')} / {PORTFOLIO_PAGES.length}
            </span>
            <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {currentPage.title}
            </span>
          </div>
        </div>

        {/* Center / Right Control buttons */}
        <div className="flex items-center gap-2">
          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              isPlaying
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'border border-slate-700 bg-slate-800 text-slate-200 hover:text-white'
            }`}
            title={isPlaying ? 'Pause autoplay' : 'Start autoplay (4.5s per page)'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isPlaying ? 'Jeda' : 'Auto Play'}</span>
          </button>

          {/* Toggle Thumbnails drawer */}
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition ${
              showThumbnails
                ? 'border-lime-400 bg-lime-400/10 text-lime-400'
                : 'border-slate-700 bg-slate-800 text-slate-200 hover:text-white'
            }`}
            title="Show all page thumbnails"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Index</span>
          </button>

          {/* Open Detailed Info */}
          <button
            onClick={() => onOpenPageDetails(currentPageNum)}
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white transition"
            title="Open full page details"
          >
            <BookOpen className="w-3.5 h-3.5 text-lime-400" />
            <span>Detail</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition"
            title={isFullscreen ? 'Exit full screen' : 'Enter full screen'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Close Presenter */}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white transition"
            title="Close presentation (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="relative flex flex-1 items-center justify-center bg-white/70 backdrop-blur-xl overflow-hidden p-2 sm:p-6">
        {/* Left Nav Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous page"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 border border-slate-300 text-slate-700 shadow-xl backdrop-blur-md hover:bg-lime-400 hover:text-slate-950 transition active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Nav Button */}
        <button
          onClick={handleNext}
          aria-label="Next page"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 border border-slate-300 text-slate-700 shadow-xl backdrop-blur-md hover:bg-lime-400 hover:text-slate-950 transition active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Visual Presentation */}
        <div className="relative max-h-full max-w-full flex items-center justify-center">
          <img
            key={currentPageNum}
            src={currentPage.image}
            alt={`Slide for Page ${currentPageNum}: ${currentPage.title}`}
            className="max-h-[82vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-slate-800 transition-all duration-300"
          />
        </div>

        {/* Floating Quick Action Overlay at Bottom Right */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-300 p-1.5 rounded-xl text-xs text-slate-700">
          <button
            onClick={() => onOpenPageDetails(currentPageNum)}
            className="flex items-center gap-1.5 rounded-lg bg-lime-400 px-3 py-1.5 font-bold text-slate-950 hover:bg-lime-300 transition"
          >
            <span>Open Details & Overview</span>
          </button>
        </div>
      </div>

      {/* Bottom Slider & Page Selector */}
      <div className="h-14 shrink-0 border-t border-slate-800 bg-slate-900/90 px-4 sm:px-6 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="text-xs font-semibold text-slate-300 hover:text-lime-400 transition flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Progress Slider */}
        <div className="flex-1 max-w-xl flex items-center gap-3">
          <input
            type="range"
            min="1"
            max={PORTFOLIO_PAGES.length}
            value={currentPageNum}
            onChange={(e) => setCurrentPageNum(Number(e.target.value))}
            className="w-full accent-lime-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <span className="font-mono text-xs font-bold text-lime-400 shrink-0 w-12 text-right">
            {currentPageNum} / {PORTFOLIO_PAGES.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          className="text-xs font-semibold text-slate-300 hover:text-lime-400 transition flex items-center gap-1"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Collapsible Slide Thumbnail Drawer */}
      {showThumbnails && (
        <div className="border-t border-slate-800 bg-slate-950 p-4 max-h-48 overflow-y-auto">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
            {PORTFOLIO_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPageNum(page.pageNumber);
                  setShowThumbnails(false);
                }}
                className={`relative group rounded-lg overflow-hidden border transition ${
                  page.pageNumber === currentPageNum
                    ? 'border-lime-400 ring-2 ring-lime-400/50'
                    : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                }`}
              >
                <img
                  src={page.thumbnail}
                  alt={page.title}
                  className="aspect-[16/9] w-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 py-0.5 text-center text-[10px] font-mono text-white">
                  Page {page.pageNumber}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
