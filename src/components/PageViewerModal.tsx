import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, 
  Download, Share2, Info, Check, ExternalLink, Sparkles 
} from 'lucide-react';
import { PortfolioPage, PORTFOLIO_PAGES } from '../data/portfolioData';

interface PageViewerModalProps {
  pageNumber: number | null;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
}

export const PageViewerModal: React.FC<PageViewerModalProps> = ({
  pageNumber,
  onClose,
  onSelectPage,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showInfoSidebar, setShowInfoSidebar] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const currentPage = PORTFOLIO_PAGES.find((p) => p.pageNumber === pageNumber) || null;
  const imageExtension = currentPage?.image.split('.').pop() ?? 'jpg';

  // Reset zoom whenever page changes
  useEffect(() => {
    setZoomLevel(1);
  }, [pageNumber]);

  // Keyboard navigation
  useEffect(() => {
    if (!pageNumber) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pageNumber]);

  if (!currentPage || !pageNumber) return null;

  const handlePrev = () => {
    const prevNumber = pageNumber > 1 ? pageNumber - 1 : PORTFOLIO_PAGES.length;
    onSelectPage(prevNumber);
  };

  const handleNext = () => {
    const nextNumber = pageNumber < PORTFOLIO_PAGES.length ? pageNumber + 1 : 1;
    onSelectPage(nextNumber);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleShare = () => {
    const url = window.location.origin + window.location.pathname + `#page-${pageNumber}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-lg select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`View Page ${pageNumber} - ${currentPage.title}`}
    >
      {/* Top Header Bar */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 sm:px-6">
        {/* Left info: Page numbering and title */}
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="flex h-7 px-2.5 items-center justify-center rounded-lg bg-lime-400 font-mono text-xs font-bold text-slate-950">
            Page {String(currentPage.pageNumber).padStart(2, '0')} / {PORTFOLIO_PAGES.length}
          </span>
          <div className="truncate">
            <h2 className="text-xs sm:text-sm font-bold text-white truncate">
              {currentPage.title}
            </h2>
            <p className="hidden sm:block text-[11px] text-slate-400 truncate">
              {currentPage.subtitle}
            </p>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Zoom controls (hidden on small mobile) */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30 rounded transition"
              title="Zoom out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono text-slate-300 w-12 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30 rounded transition"
              title="Zoom in (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 text-slate-400 hover:text-white rounded transition"
              title="Reset zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toggle Info Sidebar Button */}
          <button
            onClick={() => setShowInfoSidebar(!showInfoSidebar)}
            className={`p-2 rounded-lg border transition ${
              showInfoSidebar
                ? 'border-lime-400/40 bg-lime-400/10 text-lime-400'
                : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white'
            }`}
            title="Show / hide page details"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Share / Copy link */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition"
            title="Copy link to this page"
          >
            {copiedLink ? <Check className="w-4 h-4 text-lime-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Download Current Page Image */}
          <a
            href={currentPage.image}
            download={`Kasih_Dua_Monika_Page_${String(currentPage.pageNumber).padStart(2, '0')}.${imageExtension}`}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white transition"
            title="Download this page image (full resolution)"
          >
            <Download className="w-4 h-4" />
          </a>

          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white transition"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area (Image Viewer + Collapsible Details Drawer) */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous page"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 border border-slate-300 text-slate-700 shadow-xl backdrop-blur-md hover:bg-lime-400 hover:text-slate-950 transition active:scale-95"
          title="Previous page (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          aria-label="Next page"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 border border-slate-300 text-slate-700 shadow-xl backdrop-blur-md hover:bg-lime-400 hover:text-slate-950 transition active:scale-95"
          title="Next page (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Page Image Container */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6 bg-white/70 backdrop-blur-xl">
          <div
            className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-w-full max-h-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentPage.image}
              alt={`Page ${currentPage.pageNumber}: ${currentPage.title}`}
              className="max-h-[82vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-slate-800/80"
              loading="eager"
            />
          </div>
        </div>

        {/* Side Details Panel */}
        {showInfoSidebar && (
          <aside className="w-full sm:w-80 md:w-96 shrink-0 border-l border-slate-800 bg-slate-950/95 overflow-y-auto p-5 text-slate-200 flex flex-col justify-between shadow-2xl">
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-lime-400 mb-1">
                  <span>{currentPage.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Page {currentPage.pageNumber}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {currentPage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {currentPage.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Page Overview
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  {currentPage.description}
                </p>
              </div>

              {/* Quote / Excerpt if any */}
              {currentPage.quote && (
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <p className="text-xs italic text-lime-300 leading-relaxed">
                    "{currentPage.quote}"
                  </p>
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentPage.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Software */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Software & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentPage.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] font-medium text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Panel */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-2">
              <a
                href="https://wa.me/6287750371700?text=Hello%20Monika,%20I%20am%20interested%20in%20your%20work%20on%20this%20page!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-lime-300 transition"
              >
                <span>Ask about this project on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="text-[11px] text-center text-slate-400">
                Use the keyboard arrow keys ← / → to navigate
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Bottom Thumbnail Strip (Quick Jump to Any Page) */}
      <div className="h-20 shrink-0 border-t border-slate-800 bg-slate-950/90 px-3 py-2 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 px-2 hidden sm:inline">
          Jump to:
        </span>
        {PORTFOLIO_PAGES.map((page) => {
          const isSelected = page.pageNumber === currentPage.pageNumber;
          return (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.pageNumber)}
              className={`relative group shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-lime-400 scale-105 shadow-md shadow-lime-400/30'
                  : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
              }`}
              title={`Open Page ${page.pageNumber}: ${page.title}`}
            >
              <img
                src={page.thumbnail}
                alt={`Thumbnail for Page ${page.pageNumber}`}
                className="h-14 w-24 object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 py-0.5 text-center font-mono text-[9px] font-bold text-white">
                {String(page.pageNumber).padStart(2, '0')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
