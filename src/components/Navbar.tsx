import React, { useState } from 'react';
import { Menu, X, FileDown, Sparkles, Phone, BookOpen, Layers } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface NavbarProps {
  onOpenFlipbook: () => void;
  onOpenHostingGuide: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFlipbook,
  onOpenHostingGuide,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isOnline = useOnlineStatus();

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-lime-400 font-display font-black text-slate-950 text-base shadow-sm group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900 group-hover:text-lime-700 transition-colors">
              Kasih Dua Monika
            </span>
            <span className="text-[10px] font-medium text-slate-600">
              Creative Portfolio · Lampung
            </span>
          </div>
        </button>

        {/* Zone 2: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700">
          <button
            onClick={() => handleNavClick('gallery')}
            aria-current={activeSection === 'gallery' ? 'page' : undefined}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-lime-700 ${
              activeSection === 'gallery' ? 'text-lime-700' : ''
            }`}
          >
            All Pages (18)
          </button>
          <button
            onClick={() => handleNavClick('about')}
            aria-current={activeSection === 'about' ? 'page' : undefined}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-lime-700 ${
              activeSection === 'about' ? 'text-lime-700' : ''
            }`}
          >
            Profile & Skills
          </button>
          <button
            onClick={() => handleNavClick('vision')}
            aria-current={activeSection === 'vision' ? 'page' : undefined}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-lime-700 ${
              activeSection === 'vision' ? 'text-lime-700' : ''
            }`}
          >
            Vision & Mission
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            aria-current={activeSection === 'contact' ? 'page' : undefined}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-lime-700 ${
              activeSection === 'contact' ? 'text-lime-700' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick Reader Mode Button */}

          {/* Download Source Code & Hosting Guide Modal */}

          {/* Download Original PDF */}
          <a
            href="/assets/Portofolio_Monika_Web.pdf"
            download="Portofolio_Kasih_Dua_Monika.pdf"
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:bg-white transition whitespace-nowrap"
            title="Download the official portfolio PDF (13 MB)"
          >
            <FileDown className="w-3.5 h-3.5 text-lime-400" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          {/* PWA Install Button */}
        

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white/70 text-slate-700 hover:text-slate-950"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('gallery')}
              aria-current={activeSection === 'gallery' ? 'page' : undefined}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-lime-700 transition"
            >
              <Layers className="w-4 h-4 text-lime-400" />
              <span>Browse 18 Portfolio Pages</span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-lime-700 transition"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Profile, Biography & Experience</span>
            </button>
            <button
              onClick={() => handleNavClick('vision')}
              aria-current={activeSection === 'vision' ? 'page' : undefined}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-lime-700 transition"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Vision, Mission & Philosophy</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-lime-700 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contact & Social Media</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenHostingGuide();
                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-lime-700/30 bg-lime-500/10 px-4 py-2.5 text-xs font-bold text-lime-800 hover:bg-lime-500/20 transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Download Source Code (ZIP) & Hosting Guide</span>
            </button>
            <button
              onClick={() => {
                onOpenFlipbook();
                setMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Interactive Flipbook (Swipe Through Pages)</span>
            </button>
            <a
              href="https://wa.me/6287750371700?text=Hello%20Monika,%20I%20am%20interested%20in%20your%20design%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-lime-300 transition"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
