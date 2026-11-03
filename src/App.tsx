import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilterGrid } from './components/CategoryFilterGrid';
import { AboutSection } from './components/AboutSection';
import { VisionSection } from './components/VisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageViewerModal } from './components/PageViewerModal';
import { FlipbookReader } from './components/FlipbookReader';
import { HostingGuideModal } from './components/HostingGuideModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PORTFOLIO_PAGES } from './data/portfolioData';

export default function App() {
  const [activePageModal, setActivePageModal] = useState<number | null>(null);
  const [flipbookOpen, setFlipbookOpen] = useState<boolean>(false);
  const [flipbookStartPage, setFlipbookStartPage] = useState<number>(1);
  const [hostingGuideOpen, setHostingGuideOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('gallery');

  // Handle URL hash changes (e.g. #page-3)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/#page-(\d+)/);
      if (match && match[1]) {
        const pageNum = parseInt(match[1], 10);
        if (PORTFOLIO_PAGES.some((page) => page.pageNumber === pageNum)) {
          setActivePageModal(pageNum);
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenPage = (pageNumber: number) => {
    setActivePageModal(pageNumber);
    window.history.replaceState(null, '', `#page-${pageNumber}`);
  };

  const handleCloseModal = () => {
    setActivePageModal(null);
    window.history.replaceState(null, '', window.location.pathname);
  };

  const handleOpenFlipbook = (startPage = 1) => {
    setFlipbookStartPage(startPage);
    setFlipbookOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-light-theme min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-lime-400 selection:text-slate-950">
      {/* Top Navbar adhering to the top bar contract */}
      <Navbar
        onOpenFlipbook={() => handleOpenFlipbook(1)}
        onOpenHostingGuide={() => setHostingGuideOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => handleNavigate('gallery')}
          onOpenFlipbook={() => handleOpenFlipbook(1)}
          onOpenPage={handleOpenPage}
          onOpenHostingGuide={() => setHostingGuideOpen(true)}
        />

        {/* Interactive portfolio filter and grid */}
        <CategoryFilterGrid
          onOpenPage={handleOpenPage}
          onOpenFlipbookAt={(pageNum) => handleOpenFlipbook(pageNum)}
        />

        {/* About & Skillset Section */}
        <AboutSection onOpenPage={handleOpenPage} />

        {/* Vision & Mission Section */}
        <VisionSection onOpenPage={handleOpenPage} />

        {/* Contact & Closing Section */}
        <ContactSection onOpenPage={handleOpenPage} />
      </main>

      {/* Footer */}
      <Footer onOpenHostingGuide={() => setHostingGuideOpen(true)} />

      {/* Connectivity Banner (Offline Mode notification) */}
      <OfflineIndicator />

      {/* Interactive Page Lightbox Modal (Click on any page to view full size) */}
      <PageViewerModal
        pageNumber={activePageModal}
        onClose={handleCloseModal}
        onSelectPage={handleOpenPage}
      />

      {/* Fullscreen Flipbook / Presentation Mode */}
      <FlipbookReader
        initialPage={flipbookStartPage}
        isOpen={flipbookOpen}
        onClose={() => setFlipbookOpen(false)}
        onOpenPageDetails={(pageNum) => {
          setFlipbookOpen(false);
          handleOpenPage(pageNum);
        }}
      />

      {/* Hosting & Source Code Ownership Modal */}
      <HostingGuideModal
        isOpen={hostingGuideOpen}
        onClose={() => setHostingGuideOpen(false)}
      />
    </div>
  );
}
