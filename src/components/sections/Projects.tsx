import React from 'react'
import { Code, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Badge } from '../ui/Badge'
import { PROJECTS } from '../../data/portfolioData'

export const Projects: React.FC = () => {
  return (
    <section
      className="space-y-10 scroll-mt-24 sm:scroll-mt-28"
      id="proyectos"
      data-purpose="featured-projects"
    >
      <SectionHeader
        icon={<Code className="w-6 h-6 text-white" strokeWidth={2} />}
        title="Proyectos Destacados"
      />

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            data-purpose="project-card"
            className="bg-obsidian-850/90 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700/80 transition-all duration-300 shadow-xl group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Side: Mockup / Viewport Window */}
              <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-obsidian-800 to-slate-950 p-6 flex flex-col justify-between items-center text-center border-b md:border-b-0 md:border-r border-slate-800/80">
                <div className="w-full flex justify-between items-center text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-500">ENGINEERED UI</span>
                </div>

                {/* 16:9 Inner Screen Preview */}
                <div className="my-4 rounded-lg overflow-hidden border border-slate-800/90 w-full aspect-video bg-black flex items-center justify-center shadow-xl relative group-hover:border-slate-700/80 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/60 via-obsidian-950 to-black flex flex-col items-center justify-center p-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-accent-blue group-hover:border-accent-blue/40 transition-all shadow-inner">
                      <Code className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="mt-2.5 text-xs font-mono text-slate-300 font-semibold tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                      Architecture & Deployment
                    </span>
                  </div>
                </div>

                {/* Bottom link / indicator */}
                <div className="w-full flex justify-end">
                  {project.previewType === 'demo' && project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer group/link"
                    >
                      <span>Visitar demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ) : project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <span>Panel Operativo</span>
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      <span>Panel Operativo</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Right Side: Details & Highlights */}
              <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}{' '}
                    {project.subtitle && (
                      <>
                        <span className="text-slate-400 font-normal">—</span>{' '}
                        <span className="text-slate-200">{project.subtitle}</span>
                      </>
                    )}
                    {project.status && (
                      <span className="text-slate-400 text-sm font-normal">
                        {' '}({project.status})
                      </span>
                    )}
                  </h3>

                  {/* Highlights verbatim */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-outside pl-4 font-normal">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {project.technologies.map((tech) => (
                    <Badge key={tech.name} variant={tech.variant}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
