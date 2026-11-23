import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';
import { portfolioContent } from '@/data/content';

export default function Experience() {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
            <span className="text-cyan-400">02.</span>
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3" />
          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Track record across ISP network management, public utility infrastructure, customer support, and academic systems.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950 group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-300 transition-all">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl group-hover:border-cyan-500/40 transition-all duration-200 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-400 font-medium mt-0.5">
                      <span className="flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-slate-400" />
                        {item.company}
                      </span>
                      {item.companyDetail && (
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {item.companyDetail}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300 self-start sm:self-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="mt-4 space-y-2.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags if present */}
                {item.skills && (
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
