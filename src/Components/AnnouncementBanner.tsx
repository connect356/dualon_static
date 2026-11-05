import { ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onOpenRegister: () => void;
}

export default function AnnouncementBanner({ onOpenRegister }: AnnouncementBannerProps) {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-gradient-to-r from-[#14161E] via-[#1B1E29] to-[#14161E] border-b border-[#33CB98]/20 px-4 py-2.5 text-xs text-gray-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33CB98] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33CB98]"></span>
          </span>
          <span className="font-bold text-[#33CB98] uppercase tracking-wider text-[11px] px-2 py-0.5 rounded bg-[#33CB98]/10 border border-[#33CB98]/25">
            Special Pre-Launch Edition
          </span>
          <span className="hidden sm:inline text-gray-200">
            <strong>KYSSO 2026 Registrations Open</strong> for CBSE Classes 1 to 12 across Kerala!
          </span>
          <span className="sm:hidden text-gray-200">
            KYSSO 2026 Open for Classes 1–12
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-gray-400 text-[11px]">
            App launch at Grand State Mega Award Ceremony
          </span>
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1.5 font-bold text-[#33CB98] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
}
