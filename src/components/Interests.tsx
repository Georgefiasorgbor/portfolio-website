import { Globe2, ShieldAlert, Zap, TrendingUp, LucideIcon } from 'lucide-react';
import { portfolioContent } from '@/data/content';

const interestIcons: Record<string, LucideIcon> = {
  Globe2,
  ShieldAlert,
  Zap,
  TrendingUp,
};

export default function Interests() {
  const { interests } = portfolioContent;

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="text-cyan-400">06.</span>
            <span>Vision & Passions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Interests
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Areas of sustained inquiry and long-term commitment shaping my engineering philosophy.
          </p>
        </div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {interests.map((item, idx) => {
            const Icon = interestIcons[item.iconName] || Globe2;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 sm:p-7 hover:border-cyan-500/50 transition-all duration-200 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
