import { FileDown, ArrowDown, Mail, Shield, Network, Terminal, Sparkles } from 'lucide-react';
import { portfolioContent } from '@/data/content';

export default function Hero() {
  const { personal } = portfolioContent;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Availability / System Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-mono mb-8 backdrop-blur-sm shadow-sm animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400">STATUS:</span>
          <span className="text-emerald-400 font-semibold">ISP OPERATIONS & SECURITY ACTIVE</span>
        </div>

        {/* Name with subtle emphasis */}
        <div className="mb-4">
          <p className="text-sm sm:text-base font-mono text-cyan-400 uppercase tracking-widest mb-2">
            Hello, my name is
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {personal.fullName}
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-mono text-cyan-300/90 font-medium">
            (I go by <span className="text-white underline decoration-cyan-400 decoration-2 underline-offset-4">{personal.preferredName}</span>)
          </p>
        </div>

        {/* Headline */}
        <div className="inline-block my-4 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-base sm:text-xl font-medium tracking-wide shadow-inner">
          <span className="text-cyan-400">Network Engineer</span>
          <span className="mx-2 text-slate-600">|</span>
          <span className="text-emerald-400">Cybersecurity Specialist</span>
          <span className="mx-2 text-slate-600">|</span>
          <span className="text-indigo-400">Software Developer</span>
        </div>

        {/* Short Tagline */}
        <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
          {personal.tagline}
        </p>

        {/* Quick location tag */}
        <p className="mt-2 text-xs sm:text-sm font-mono text-slate-500 flex items-center justify-center gap-1.5">
          <span>📍</span>
          <span>Based in {personal.location}</span>
          <span>•</span>
          <span className="text-slate-400">Assistant Network Manager @ Kingsville IS</span>
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4" />
            <span>View Projects</span>
          </a>

          {/* Download CV */}
          <a
            href={personal.cvPath}
            download="Fiasorgbor_George_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download CV</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Quick Tech Highlights Badge Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
              <Network className="w-3.5 h-3.5" />
              <span>ROUTING & SWITCHING</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">MikroTik RouterOS & BGP/OSPF</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>SECURITY & DEFENSE</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Firewall ACLs & Forensics</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI RESEARCH</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Continual Learning NIDS</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEV & AUTOMATION</span>
            </div>
            <div className="text-xs text-slate-300 font-medium">Python, Bash & Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
}
