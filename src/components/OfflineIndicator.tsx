import React from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div 
        role="status" 
        aria-live="polite"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-500/95 backdrop-blur-md px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-2xl border border-amber-300/30 animate-bounce"
      >
        <WifiOff className="w-4 h-4 text-slate-950 stroke-[2.5]" />
        <span>Offline Mode Active — All 18 portfolio pages are available without an internet connection!</span>
      </div>
    );
  }

  return null;
};
