import React from 'react'

export type BadgeVariant = 'slate' | 'blue' | 'sky' | 'amber' | 'emerald' | 'red'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  slate: 'bg-slate-800/80 text-slate-300 border-slate-700/50',
  blue: 'bg-blue-950/40 text-blue-300 border-blue-800/40',
  sky: 'bg-sky-950/40 text-sky-300 border-sky-800/40',
  amber: 'bg-amber-950/40 text-amber-300 border-amber-800/40',
  emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
  red: 'bg-red-950/40 text-red-300 border-red-800/40',
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  className = '',
}) => {
  return (
    <span
      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

