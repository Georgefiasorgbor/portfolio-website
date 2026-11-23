import {
  Network,
  ShieldCheck,
  Code2,
  Server,
  Cpu,
  Wrench,
  LucideIcon
} from 'lucide-react';
import { portfolioContent } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Network,
  ShieldCheck,
  Code2,
  Server,
  Cpu,
  Wrench,
};

export default function Skills() {
  const { skillCategories } = portfolioContent;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="text-cyan-400">04.</span>
            <span>Capabilities Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills & Domains
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Categorized technical stack spanning carrier routing, offensive/defensive cybersecurity, software development, and AI engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => {
            const Icon = iconMap[group.iconName] || Network;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                        {group.category}
                      </h3>
                      <div className="text-[11px] font-mono text-slate-500">
                        {group.skills.length} verified competencies
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/60 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all duration-150 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>DOMAIN_0{idx + 1}</span>
                  <span className="text-emerald-400/80">● ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
