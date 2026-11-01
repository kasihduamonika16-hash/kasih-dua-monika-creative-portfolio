import React from 'react';
import { ArrowDown, BookOpen, Download, Sparkles, Smartphone, CheckCircle2, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenFlipbook: () => void;
  onOpenPage: (pageNumber: number) => void;
  onOpenHostingGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenFlipbook,
  onOpenPage,
  onOpenHostingGuide,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 md:py-16">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Hero Card Container with Monika's iconic visual style */}
        <div className="relative rounded-3xl border border-blue-900/60 bg-gradient-to-br from-blue-950 via-[#0e1438] to-slate-950 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          {/* Decorative angled background ribbon */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-400/10 blur-2xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8 sm:space-y-10">
            <div className="mx-auto max-w-4xl space-y-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-300">
                <span className="text-lime-400">Kasih Dua Monika</span>
              </div>

              <h1 className="hero-headline font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] text-balance">
                Make with purpose, <br />
                <span className="hero-headline-gradient text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-emerald-400">
                  make some creations.
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-xs sm:text-sm text-slate-300 leading-relaxed text-center">
                A glimpse into my creative journey, professional experiences, and projects, ranging from 3D cosmetic product modeling and Augmented Reality (AR) mobile application development to university graphic design, research-based e-book modules for the Student Creativity Program (PKM), photography collections, and short film productions. Explore my work! 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:gap-10">
              <div className="relative mx-auto w-full max-w-2xl px-3 pt-4">
                <button
                  type="button"
                  onClick={() => onOpenPage(5)}
                  aria-label="Open page 5, Mobile AR"
                  className="absolute -top-1 right-3 z-0 block w-11/12 rounded-2xl border border-blue-600/30 bg-blue-900/40 p-2 shadow-xl rotate-3 hover:rotate-6 transition-transform"
                >
                  <img
                    src="/pages/thumb_05.jpg"
                    alt=""
                    className="w-full aspect-[16/9] object-cover rounded-xl opacity-70"
                    loading="lazy"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenPage(1)}
                  aria-label="Open the portfolio cover page"
                  className="relative z-10 group block w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-lime-400/50 bg-slate-900 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lime-400/20"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                    <img
                      src="/pages/page_01.jpg"
                      alt="Kasih Dua Monika portfolio cover"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                      <span className="flex items-center gap-1.5 text-lime-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Page 01 / 18</span>
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex justify-center md:justify-end">
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-lime-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-lime-400/25 hover:bg-lime-300 active:scale-95 transition-all"
                >
                  <span>View All 18 Pages</span>
                  <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Experience</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Projects</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Branding and Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
