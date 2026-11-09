import React from 'react'
import { BackgroundGrid } from './components/layout/BackgroundGrid'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-obsidian-900 text-slate-300 font-sans antialiased selection:bg-accent-blue/20 selection:text-accent-blue">
      {/* Background blueprint grid & radial glow */}
      <BackgroundGrid />

      {/* Header and sticky navigation */}
      <Navbar />

      {/* Central 12-column layout container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-28 space-y-28 sm:space-y-36">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
