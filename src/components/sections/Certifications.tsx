import React from 'react'
import { Award, Code, CheckSquare, ShieldCheck, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { CERTIFICATIONS } from '../../data/portfolioData'

const getCertificationIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code className="w-5 h-5 stroke-2" />
    case 'terminal':
    case 'check-circle':
      return <CheckSquare className="w-5 h-5 stroke-2" />
    case 'shield':
      return <ShieldCheck className="w-5 h-5 stroke-2" />
    default:
      return <Award className="w-5 h-5 stroke-2" />
  }
}

const colorStyles: Record<
  string,
  { box: string; badge: string }
> = {
  sky: {
    box: 'bg-sky-950/40 border-sky-800/40 text-sky-300',
    badge: 'bg-sky-950/40 text-sky-300 border-sky-800/40',
  },
  amber: {
    box: 'bg-amber-950/40 border-amber-800/40 text-amber-300',
    badge: 'bg-amber-950/40 text-amber-300 border-amber-800/40',
  },
  blue: {
    box: 'bg-blue-950/40 border-blue-800/40 text-blue-300',
    badge: 'bg-blue-950/40 text-blue-300 border-blue-800/40',
  },
  emerald: {
    box: 'bg-emerald-950/40 border-emerald-800/40 text-emerald-300',
    badge: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
  },
}

export const Certifications: React.FC = () => {
  return (
    <section
      className="space-y-8 pt-4 border-t border-slate-800/80 scroll-mt-24 sm:scroll-mt-28"
      id="certificaciones"
      data-purpose="certifications-section"
    >
      <SectionHeader
        icon={<Award className="w-6 h-6 text-white" strokeWidth={2} />}
        title="Certificaciones"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {CERTIFICATIONS.map((cert) => {
          const style = colorStyles[cert.tagColor || 'sky']
          return (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verificar credencial: ${cert.title}`}
              className="bg-obsidian-850/80 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-slate-700/80 hover:-translate-y-1 transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <div className="space-y-3.5">
                {/* Header: Icon Box & External Link Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center ${style.box}`}
                  >
                    {getCertificationIcon(cert.iconName)}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-accent-blue opacity-50 group-hover:opacity-100 transition-all duration-200" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug group-hover:text-accent-blue transition-colors min-h-[2.75rem] sm:min-h-[3.25rem]">
                  {cert.title}
                </h3>
              </div>

              {/* Card Footer: Issuer Badge & Status */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded border whitespace-nowrap shrink-0 ${style.badge}`}
                >
                  {cert.issuer}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono whitespace-nowrap shrink-0 group-hover:text-slate-300 transition-colors">
                  {cert.status}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
