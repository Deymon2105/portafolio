import React from 'react'
import { Briefcase } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { EXPERIENCES } from '../../data/portfolioData'

export const Experience: React.FC = () => {
  return (
    <section
      className="space-y-8 scroll-mt-24 sm:scroll-mt-28"
      id="experiencia"
      data-purpose="experience-timeline"
    >
      <SectionHeader
        icon={<Briefcase className="w-6 h-6 text-white" strokeWidth={2} />}
        title="Experiencia"
      />

      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-4"
          >
            {/* Luminous Timeline Bullet indicator */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-blue ring-4 ring-obsidian-900" />

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>•</span>
                <span>{exp.role}</span>
              </h3>
              <span className="inline-block mt-1 text-xs uppercase tracking-widest font-mono text-accent-blue/90 bg-accent-blue/10 px-2 py-0.5 rounded border border-accent-blue/20">
                {exp.badge}
              </span>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
