import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`flex items-center gap-2 rounded-xl bg-lime-400 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-md shadow-lime-400/20 hover:bg-lime-300 transition-all active:scale-95 whitespace-nowrap shrink-0 ${
          compact ? 'px-2.5 py-1.5 text-[11px]' : ''
        }`}
        title="Install the app on your home screen for instant offline access"
      >
        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
        <span>Install App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-2 rounded-xl bg-lime-400/15 border border-lime-400/40 px-3.5 py-2 text-xs font-bold text-lime-400 hover:bg-lime-400/25 transition-all active:scale-95 whitespace-nowrap shrink-0 ${
            compact ? 'px-2.5 py-1.5 text-[11px]' : ''
          }`}
          title="Add to the iPhone or iPad Home Screen"
        >
          <Share2 className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Install iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/65 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <PlusSquare className="w-5 h-5 text-lime-400" />
                  Install on iPhone / iPad
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ol className="mt-4 space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950 text-[10px]">1</span>
                  <span>Tap the <strong>Share</strong> button (<Share2 className="inline w-3 h-3 text-lime-400" />) in Safari's toolbar at the bottom of the browser.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950 text-[10px]">2</span>
                  <span>Scroll down and select <strong>"Add to Home Screen"</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950 text-[10px]">3</span>
                  <span>Open Monika's portfolio from its home screen icon, even without an internet connection!</span>
                </li>
              </ol>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-slate-800 hover:bg-slate-700 py-2.5 text-xs font-semibold text-white transition"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback for general browsers: show an install tip
  return null;
};
