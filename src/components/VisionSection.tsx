import React from 'react';
import { Target, Compass, Sparkles, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';

interface VisionSectionProps {
  onOpenPage: (pageNumber: number) => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onOpenPage }) => {
  const visions = [
    {
      title: 'Innovative & Meaningful Work',
      desc: 'Creating innovative and aesthetic creative works that deliver meaningful and impactful visual expression.',
    },
    {
      title: 'Integrating Art & Technology',
      desc: 'Becoming a creator who seamlessly integrates art and technology to produce inspiring and functional designs, films, and 3D models.',
    },
    {
      title: 'High-Quality Multimedia',
      desc: 'Producing high-quality, professional multimedia works that offer exceptional visual experiences for diverse audiences.',
    },
  ];

  const missions = [
    {
      title: 'Continuous Digital Exploration',
      desc: 'Developing creative and original digital works through continuous exploration of graphic design, cinematography, and 3D modeling.',
    },
    {
      title: 'Quality Improvement & Industry Standards',
      desc: 'Improving the quality of each project by studying industry trends, mastering the latest tools, and applying modern design principles.',
    },
    {
      title: 'Client- and User-Focused Design',
      desc: 'Delivering impactful visual experiences by prioritizing creativity, attention to detail, and the needs of users and clients.',
    },
  ];

  return (
    <section id="vision" className="py-12 md:py-16 border-t border-slate-800/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-lime-400 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>How I Make Creations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Creative Vision & Mission
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              The guiding principles behind Kasih Dua Monika's creative process, design practice, and project development.
            </p>
          </div>

        </div>

        {/* 2-Column Vision vs Mission Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Column */}
          <div className="rounded-3xl border border-blue-900/40 bg-gradient-to-br from-blue-950/40 to-slate-950 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-wider">
                  V I S I O N
                </h3>
                <p className="text-xs text-blue-400">Design Goals & the Future</p>
              </div>
            </div>

            <div className="space-y-4">
              {visions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 space-y-1.5 hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-[11px] font-bold text-blue-400">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Column */}
          <div className="rounded-3xl border border-lime-900/30 bg-gradient-to-br from-lime-950/20 to-slate-950 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950 shadow-lg">
                <Lightbulb className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-wider">
                  M I S S I O N
                </h3>
                <p className="text-xs text-lime-400">Practical Steps & Execution</p>
              </div>
            </div>

            <div className="space-y-4">
              {missions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 space-y-1.5 hover:border-lime-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 text-[11px] font-bold text-lime-400">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
