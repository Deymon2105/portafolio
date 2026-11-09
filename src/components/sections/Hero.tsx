import React from 'react'
import { HERO_DATA } from '../../data/portfolioData'

export const Hero: React.FC = () => {
  return (
    <section
      className="space-y-6 pt-4 sm:pt-8 scroll-mt-24 sm:scroll-mt-28"
      id="hero"
      data-purpose="hero-section"
    >
      {/* Primary Greeting Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
        {HERO_DATA.greeting}
      </h1>

      {/* Professional Subtitle */}
      <p className="text-xl sm:text-2xl font-semibold text-accent-blue tracking-wide">
        {HERO_DATA.role}
      </p>

      {/* Engineering Statement */}
      <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
        {HERO_DATA.statement}
      </p>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-4">
        <a
          href={HERO_DATA.primaryAction.href}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent-blue text-obsidian-950 hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent-blue/10 cursor-pointer active:scale-95"
        >
          {HERO_DATA.primaryAction.label}
        </a>
        <a
          href={HERO_DATA.secondaryAction.href}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-500 bg-obsidian-850/60 hover:bg-obsidian-800 text-slate-200 transition-all duration-200 cursor-pointer active:scale-95"
        >
          {HERO_DATA.secondaryAction.label}
        </a>
      </div>
    </section>
  )
}
