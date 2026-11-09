export interface NavItem {
  label: string
  href: string
}

export interface ExperienceItem {
  id: string
  role: string
  badge: string
  description: string
  period?: string
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  status?: string
  highlights: string[]
  technologies: string[]
  demoUrl?: string
  previewType?: 'demo' | 'operational'
}

export interface TechCategory {
  title: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  status: string
  iconName: 'code' | 'check-circle' | 'shield' | 'terminal'
  tagColor?: 'sky' | 'amber' | 'blue' | 'emerald'
  credentialUrl?: string
}

export interface ContactLink {
  label: string
  href: string
  icon: 'mail' | 'linkedin' | 'github'
}
