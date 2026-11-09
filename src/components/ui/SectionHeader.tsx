import React from 'react'

interface SectionHeaderProps {
  icon: React.ReactNode
  title: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-white flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
    </div>
  )
}

