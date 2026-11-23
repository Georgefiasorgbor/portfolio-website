import { Shield, Network, Brain, Award, CheckCircle2 } from 'lucide-react';
import { portfolioContent } from '@/data/content';

export default function About() {
  const { summary, stats } = portfolioContent;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="text-cyan-400">01.</span>
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3" />
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Summary Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative p-6 sm:p-8 rounded-2xl glass-panel shadow-xl">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
                system.profile.summary
              </div>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {summary}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Production ISP Routing (BGP/OSPF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Adaptive Threat Defense & IDS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Python & Bash Operational Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Advancing African Tech Adoption</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Terminal Card Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-slate-500 text-[11px]">elroy@core-gateway:~</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div>
                  <span className="text-cyan-400">$</span> uname -a
                  <div className="text-slate-400 pl-3">Linux 6.8.0-generic x86_64 MikroTik-BGP-Peer</div>
                </div>
                <div>
                  <span className="text-cyan-400">$</span> cat /etc/current-focus
                  <div className="text-emerald-400 pl-3">
                    [+] ISP Backbone Stability & SLA Delivery<br/>
                    [+] Continual Learning AI for Network Intrusion<br/>
                    [+] Digital Forensics & Attack Signature Evolution
                  </div>
                </div>
                <div>
                  <span className="text-cyan-400">$</span> echo $OBJECTIVE
                  <div className="text-indigo-300 pl-3">
                    &quot;Building self-defending, scalable digital infrastructure across Ghana & Africa.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl glass-panel hover:border-cyan-500/50 transition-all duration-200 text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
