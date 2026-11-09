import React from 'react'
import { User } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import {
  ABOUT_DATA,
  EDUCATION_DATA,
  TECH_CATEGORIES,
} from '../../data/portfolioData'

export const About: React.FC = () => {
  return (
    <section
      className="space-y-12 scroll-mt-24 sm:scroll-mt-28"
      id="sobre-mi"
      data-purpose="about-philosophy-section"
    >
      <SectionHeader
        icon={<User className="w-6 h-6 text-white" strokeWidth={2} />}
        title="Sobre mí | Mi filosofía"
      />

      {/* Profile Bio with Avatar Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Bio Information */}
        <div className="md:col-span-8 space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {ABOUT_DATA.name}
          </h3>
          <p className="text-base sm:text-lg text-accent-blue italic font-medium leading-snug">
            {ABOUT_DATA.quote}
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {ABOUT_DATA.bio}
          </p>
        </div>

        {/* Profile Avatar Container */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-[2px] bg-gradient-to-tr from-slate-700 via-accent-blue/30 to-slate-800 shadow-2xl">
            <div className="w-full h-full rounded-full bg-slate-600/80 flex items-center justify-center overflow-hidden border border-slate-700/50">
              <svg
                className="w-24 h-24 text-slate-400/70"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Subsection: Educación */}
      <div className="pt-6 border-t border-slate-800/80 space-y-3">
        <h4 className="text-xl font-bold text-white tracking-tight">Educación</h4>
        <div className="bg-obsidian-850/60 border border-slate-800 p-5 rounded-lg max-w-xl">
          <p className="text-base font-semibold text-white">
            {EDUCATION_DATA.institution}
          </p>
          <p className="text-slate-400 text-sm">{EDUCATION_DATA.degree}</p>
          <p className="text-accent-blue text-xs font-mono mt-1">
            {EDUCATION_DATA.period}
          </p>
        </div>
      </div>

      {/* Subsection: Tecnologías Utilizadas */}
      <div className="space-y-6 pt-4">
        <h4 className="text-xl font-bold text-white tracking-tight">
          Tecnologías Utilizadas
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-obsidian-850/60 border border-slate-800/80 rounded-lg p-4 space-y-2 hover:border-slate-700/80 transition-colors"
            >
              <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-200">
                {category.title}
              </h5>
              <ul className="text-sm space-y-1 font-mono text-accent-blue">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
