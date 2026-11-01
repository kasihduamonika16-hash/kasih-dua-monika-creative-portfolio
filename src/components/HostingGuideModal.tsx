import React, { useState } from 'react';
import { 
  X, Download, Globe, HardDrive, Wifi, Laptop, 
  Terminal, ExternalLink, Check, Copy, Sparkles, FolderArchive 
} from 'lucide-react';

interface HostingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingGuideModal: React.FC<HostingGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'own' | 'hosting' | 'offline'>('own');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/65 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Ownership, Editing, and Hosting Guide"
    >
      <div className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl text-slate-200 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900/90 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-400 font-bold text-slate-950 text-xs">
              <FolderArchive className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                Download, Edit & Hosting Guide
              </h2>
              <p className="text-[11px] text-slate-400">
                100% Yours · Ready for Online & Offline Use
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-red-500 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-800 bg-slate-900/50 px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('own')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition ${
              activeTab === 'own'
                ? 'border-lime-400 text-lime-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>1. Download & Edit</span>
          </button>
          <button
            onClick={() => setActiveTab('hosting')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition ${
              activeTab === 'hosting'
                ? 'border-lime-400 text-lime-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>2. Free Hosting</span>
          </button>
          <button
            onClick={() => setActiveTab('offline')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 transition ${
              activeTab === 'offline'
                ? 'border-lime-400 text-lime-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Wifi className="w-3.5 h-3.5" />
            <span>3. Online & Offline Access</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-300 leading-relaxed">
          {activeTab === 'own' && (
            <div className="space-y-6">
              {/* Highlight Download Box */}
              <div className="rounded-2xl border border-lime-400/40 bg-gradient-to-r from-lime-950/30 via-slate-900 to-blue-950/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-lime-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complete Project Package (ZIP)</span>
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Download the Complete Project Source Code
                  </h3>
                  <p className="text-xs text-slate-300">
                    Includes all React, TypeScript, and Tailwind CSS files, 18 high-resolution images, PWA icons, and the README.md guide.
                  </p>
                </div>

                <a
                  href="/assets/kasih_dua_monika_portfolio_source.zip"
                  download="Kasih_Dua_Monika_Portfolio_Source.zip"
                  className="flex items-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-xs font-extrabold text-slate-950 shadow-md shadow-lime-400/20 hover:bg-lime-300 active:scale-95 transition whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download ZIP File (22 MB)</span>
                </a>
              </div>

              {/* Step by step guide */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  How to Run and Edit the Project on Your Computer:
                </h4>

                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <div className="font-bold text-white text-xs">
                      1. Extract the ZIP file and open the folder in Visual Studio Code (VS Code)
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Make sure you have installed <strong>Node.js</strong> from <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="text-blue-400 underline">nodejs.org</a> (free).
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <div className="font-bold text-white text-xs">
                      2. Open the VS Code terminal and install the dependencies:
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/60 px-3 py-2 font-mono text-[11px] text-lime-400">
                      <code>npm install</code>
                      <button
                        onClick={() => handleCopy('npm install', 'c1')}
                        className="text-slate-400 hover:text-white"
                        title="Copy command"
                      >
                        {copiedCmd === 'c1' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <div className="font-bold text-white text-xs">
                      3. Start the local server to preview the website:
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-black/60 px-3 py-2 font-mono text-[11px] text-lime-400">
                      <code>npm run dev</code>
                      <button
                        onClick={() => handleCopy('npm run dev', 'c2')}
                        className="text-slate-400 hover:text-white"
                        title="Copy command"
                      >
                        {copiedCmd === 'c2' ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Open <code>http://localhost:3000</code> in your browser. The page updates automatically whenever you change the code.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <div className="font-bold text-white text-xs">
                      4. Where can you edit the text and portfolio pages?
                    </div>
                    <ul className="space-y-1.5 text-slate-300 text-[11px] list-disc list-inside">
                      <li><strong>Text and data for all 18 pages</strong>: Open <code className="text-lime-300">src/data/portfolioData.ts</code> to edit titles, descriptions, software, contact details, and quotes.</li>
                      <li><strong>Page images</strong>: Stored in <code className="text-lime-300">public/pages/page_01.jpg</code> through <code className="text-lime-300">page_18.jpg</code>.</li>
                      <li><strong>Monika's photo</strong>: Stored in <code className="text-lime-300">public/assets/monika_photo.png</code>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hosting' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  How Can You Host This Website for Others to Visit?
                </h3>
                <p className="mt-1 text-slate-400 text-xs">
                  This lightweight website is a Vite + React single-page application (SPA). You can host it <strong>completely free</strong>!
                </p>
              </div>

              {/* Provider 1: Vercel */}
              <div className="rounded-2xl border border-blue-600/40 bg-slate-900/80 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold text-white text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black font-black text-xs">▲</span>
                    <span>1. Vercel (Recommended & Fast)</span>
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-400">
                    Free + HTTPS
                  </span>
                </div>
                <p className="text-slate-300 text-xs">
                  Vercel offers fast hosting with a free domain such as <code>monika-portfolio.vercel.app</code>, or you can use your own custom domain (for example, <code>monika.my.id</code>).
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Upload this project folder to your <strong>GitHub</strong> account.</li>
                  <li>Visit <strong>vercel.com</strong> and sign in with your GitHub account.</li>
                  <li>Click <strong>"Add New Project"</strong>, select your repository, then click <strong>"Deploy"</strong>.</li>
                  <li>Done! Your website should be available worldwide in about a minute.</li>
                </ol>
              </div>

              {/* Provider 2: Netlify */}
              <div className="rounded-2xl border border-teal-600/30 bg-slate-900/80 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold text-white text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400 text-slate-950 font-black text-xs">N</span>
                    <span>2. Netlify (Drag & Drop, No Coding Required)</span>
                  </span>
                  <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-[10px] font-bold text-teal-400">
                    Drag & Drop
                  </span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Run <code>npm run build</code> on your computer. This creates a folder named <strong>dist</strong>.</li>
                  <li>Visit <strong>netlify.com</strong> and sign in.</li>
                  <li>Drag and drop the <strong>dist</strong> folder onto the Netlify page.</li>
                  <li>Your website will be online shortly.</li>
                </ol>
              </div>

              {/* Provider 3: Firebase Hosting / GitHub Pages */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-2">
                <div className="font-bold text-white text-xs">
                  3. Other Options: GitHub Pages & Cloudflare Pages
                </div>
                <p className="text-slate-400 text-[11px]">
                  Both offer free hosting with unlimited bandwidth and automatic SSL protection.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'offline' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-white">
                  Does the Website Work Online and Offline?
                </h3>
                <p className="mt-1 text-slate-400 text-xs">
                  <strong>Yes!</strong> This portfolio is built as a modern <strong>Progressive Web App (PWA)</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-blue-800/50 bg-slate-900/80 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    <span>Online Mode</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Visitors and clients can open your website URL in a browser on a phone, tablet, or computer. A <em>Service Worker</em> automatically caches all 18 high-resolution images and portfolio data in the background.
                  </p>
                </div>

                <div className="rounded-2xl border border-lime-800/50 bg-slate-900/80 p-5 space-y-2">
                  <div className="flex items-center gap-2 text-lime-400 font-bold text-xs uppercase tracking-wider">
                    <Wifi className="w-4 h-4" />
                    <span>Offline Mode</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Even without an internet connection, with no signal, or in airplane mode, the website <strong>still opens instantly</strong>. Visitors can browse pages, zoom in on images, and read project descriptions.
                  </p>
                </div>
              </div>

              {/* PWA Installation Instructions */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-lime-400" />
                  How to Add the Website to Your Home Screen:
                </h4>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <p>
                    • <strong>Android / Google Chrome</strong>: Click the <strong>"Install App"</strong> button in the top-right navigation bar, or open the browser's three-dot menu and select <em>"Add to Home Screen"</em> or <em>"Install app"</em>.
                  </p>
                  <p>
                    • <strong>iPhone / iPad (Safari)</strong>: Tap <em>Share</em> (the square icon with an upward arrow) in Safari, scroll down, then select <strong>"Add to Home Screen"</strong>.
                  </p>
                  <p>
                    • <strong>Laptop / Computer (Chrome / Edge)</strong>: Click the install icon in the browser's address bar, next to the URL. The website will open in its own app-like window.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-6 py-4">
          <span className="text-[11px] text-slate-400">
            Made for Kasih Dua Monika
          </span>
          <div className="flex items-center gap-2">
            <a
              href="/assets/kasih_dua_monika_portfolio_source.zip"
              download="Kasih_Dua_Monika_Portfolio_Source.zip"
              className="flex items-center gap-1.5 rounded-xl bg-lime-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-lime-300 transition"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download ZIP Source Code</span>
            </a>
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
