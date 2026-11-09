import React from 'react'
import { NAV_ITEMS } from '../../data/portfolioData'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-obsidian-900/85 border-b border-slate-800/60 transition-all">
      <div className="max-w-4xl mx-auto px-6 h-18 sm:h-20 flex items-center justify-between">
        {/* Monogram Logo verbatim */}
        <a
          href="#"
          aria-label="Inicio"
          className="group flex items-center space-x-1 text-white font-bold tracking-tight text-lg"
        >
          <span className="text-accent-blue font-mono font-semibold text-xl group-hover:translate-x-0.5 transition-transform duration-200">
            &lt;
          </span>
          <span className="tracking-wider">DG</span>
          <span className="text-accent-blue font-mono font-semibold text-xl group-hover:-translate-x-0.5 transition-transform duration-200">
            /&gt;
          </span>
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav className="flex items-center space-x-4 sm:space-x-8 md:space-x-10 text-xs sm:text-sm font-medium overflow-x-auto py-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors duration-150 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
