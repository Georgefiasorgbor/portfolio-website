import { Terminal, ArrowUp, Heart, Shield } from 'lucide-react';
import { portfolioContent } from '@/data/content';

export default function Footer() {
  const { personal } = portfolioContent;

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wider">
            <Terminal className="w-4 h-4" />
            <span>{personal.fullName}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-slate-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Center / Security badge */}
        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <Shield className="w-3.5 h-3.5 text-emerald-400/80" />
          <span>Zero-Telemetry & Privacy Preserved</span>
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
