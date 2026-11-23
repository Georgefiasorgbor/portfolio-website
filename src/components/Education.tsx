import { GraduationCap, Calendar, BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioContent } from '@/data/content';

export default function Education() {
  const { education } = portfolioContent;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="text-cyan-400">03.</span>
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Research
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Rigorous foundations in computer science complemented by postgraduate research in adaptive cyber defense.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                item.research ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/30' : 'hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.degree}
                  </span>
                  {item.status && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mt-1">
                  {item.field}
                </h3>
                <p className="text-sm text-cyan-400/90 font-medium mt-1">
                  {item.institution}
                </p>

                {item.research && (
                  <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Postgraduate Research Focus</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed italic">
                      &ldquo;{item.research.replace(/^Research:\s*/i, '')}&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                        Continual Learning
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                        NIDS Adaptability
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                        Zero-Day Resilience
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {!item.research && (
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Comprehensive Computer Science Curricula, Algorithms & Systems Architecture</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
