import React, { useState, useMemo } from 'react';
import { Search, Eye, BookOpen, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { CATEGORIES, PORTFOLIO_PAGES, PortfolioPage } from '../data/portfolioData';

interface CategoryFilterGridProps {
  onOpenPage: (pageNumber: number) => void;
  onOpenFlipbookAt: (pageNumber: number) => void;
}

export const CategoryFilterGrid: React.FC<CategoryFilterGridProps> = ({
  onOpenPage,
  onOpenFlipbookAt,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPages = useMemo(() => {
    return PORTFOLIO_PAGES.filter((page) => {
      const matchesCategory =
        selectedCategory === 'all' || page.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        page.title.toLowerCase().includes(q) ||
        page.subtitle.toLowerCase().includes(q) ||
        page.description.toLowerCase().includes(q) ||
        page.categoryLabel.toLowerCase().includes(q) ||
        page.tools.some((t) => t.toLowerCase().includes(q)) ||
        page.highlights.some((h) => h.toLowerCase().includes(q)) ||
        String(page.pageNumber) === q;

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="gallery" className="py-12 md:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-lime-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Experiences & Projects</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Exploring the Portfolio
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Click on any page to view it in high resolution, explore detailed project information, and discover the software used.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects, tools, or page numbers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-md shadow-lime-400/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80'
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>Showing <strong>{filteredPages.length}</strong> of 18 pages</span>
          {searchQuery && (
            <span>Search term: "<span className="text-lime-400">{searchQuery}</span>"</span>
          )}
        </div>

        {/* Grid of Pages */}
        {filteredPages.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map((page) => (
              <article
                key={page.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/40"
              >
                {/* Image Container */}
                <div 
                  onClick={() => onOpenPage(page.pageNumber)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={page.thumbnail}
                    alt={`Page ${page.pageNumber}: ${page.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badges in Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="flex h-6 px-2 items-center justify-center rounded-md bg-lime-400 font-mono text-[11px] font-black text-slate-950 shadow-sm">
                      Page {String(page.pageNumber).padStart(2, '0')}
                    </span>
                    <span className="rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                      {page.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-[2px]">
                    <span className="flex items-center gap-1.5 rounded-xl bg-lime-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg scale-95 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4 stroke-[2.5]" />
                      <span>Open This Page</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => onOpenPage(page.pageNumber)}
                      className="font-display text-base font-bold text-white group-hover:text-lime-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {page.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  {/* Software & Tools list */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {page.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {page.tools.length > 3 && (
                      <span className="rounded-md bg-slate-800/50 px-1.5 py-0.5 text-[10px] text-slate-400">
                        +{page.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Action Buttons (Clickable to open requested page!) */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenPage(page.pageNumber)}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-lime-400 hover:text-slate-950 px-3 py-2 text-xs font-bold text-slate-200 transition active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open Page</span>
                    </button>

                    <button
                      onClick={() => onOpenFlipbookAt(page.pageNumber)}
                      className="p-2 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-blue-400 hover:border-slate-700 transition"
                      title="Open in slide presentation mode"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center">
            <Filter className="mx-auto w-8 h-8 text-slate-500 mb-3" />
            <h3 className="text-base font-bold text-white">Page Not Found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try using different search keywords or select the "All Pages" category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
