import React from 'react'

export const BackgroundGrid: React.FC = () => {
  return (
    <>
      {/* Blueprint grid pattern overlay */}
      <div 
        className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" 
        aria-hidden="true" 
      />
      {/* Ambient luminous glow */}
      <div 
        className="fixed inset-0 glow-radial pointer-events-none z-0" 
        aria-hidden="true" 
      />
    </>
  )
}

