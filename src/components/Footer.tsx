import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';


interface FooterProps {
  onOpenHostingGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHostingGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white/75 py-10 text-slate-600 text-xs backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-400 font-display font-black text-slate-950 text-xs">
            M
          </div>
          <div>
            <div className="font-semibold text-slate-900">Kasih Dua Monika</div>
            <div className="text-[11px] text-slate-600">
              Information Systems and Technology · Muhammadiyah University of Pringsewu
            </div>
          </div>
        </div>

        {/* Center: Offline & PWA notice + Source code */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            <span>Portfolio</span>
          </span>
          
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Kasih Dua Monika
          </span>
          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white/70 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
