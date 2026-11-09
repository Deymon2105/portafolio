import type {
  NavItem,
  ExperienceItem,
  ProjectItem,
  TechCategory,
  EducationItem,
  CertificationItem,
  ContactLink,
} from '../types/portfolio'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mi', href: '#sobre-mi' },
  { label: 'Certificaciones', href: '#certificaciones' },
  { label: 'Contacto', href: '#contacto' },
]

export const HERO_DATA = {
  greeting: 'Hola, soy Deymon',
  role: 'Estudiante de Ingeniería en Informática',
  statement:
    'Experiencia real en desarrollo de aplicaciones web. Construyendo sistemas escalables, mantenibles y aplicando criterios de ingeniería.',
  primaryAction: { label: 'Ver Proyectos', href: '#proyectos' },
  secondaryAction: { label: 'Contactar', href: '#contacto' },
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    badge: 'DISEÑO & ARQUITECTURA',
    description:
      'Desarrollo y mantenimiento de proyectos full stack. Evolución de las plataformas con foco en escalabilidad y mantenibilidad.',
  },
]

export interface ProjectTech {
  name: string
  variant: 'slate' | 'blue' | 'sky' | 'amber' | 'emerald' | 'red'
}

export interface DetailedProjectItem extends Omit<ProjectItem, 'technologies'> {
  technologies: ProjectTech[]
}

export const PROJECTS: DetailedProjectItem[] = [
  {
    id: 'skilllink',
    title: 'SkillLink',
    subtitle: 'Plataforma de Oportunidades Laborales',
    status: 'En Desarrollo',
    highlights: [
      'Desarrollo una plataforma web orientada a dar visibilidad directa a trabajadores independientes y emprendedores frente a la falta de canales comerciales accesibles.',
      'Integro autenticación centralizada, control de accesos por roles y protección de sesiones utilizando Azure (IDaaS).',
      'Configuro el despliegue de la arquitectura en AWS con contenedores para asegurar alta disponibilidad y consistencia entre entornos.',
    ],
    technologies: [
      { name: 'Angular', variant: 'red' },
      { name: 'Java / Spring Boot', variant: 'emerald' },
      { name: 'AWS', variant: 'amber' },
      { name: 'Azure IDaaS', variant: 'sky' },
    ],
    demoUrl: 'https://bds00rs4cd.execute-api.us-east-1.amazonaws.com/#/',
    previewType: 'demo',
  },
  {
    id: 'control-acceso',
    title: 'Sistema de Control de Acceso y Visitas para Edificios',
    subtitle: '',
    highlights: [
      'Desarrollé un sistema para digitalizar el registro y trazabilidad de visitas y residentes en conserjería en tiempo real, mitigando errores de bitácoras manuales por parte de la conserjería.',
      'Construí una API REST desacoplada en Java (Spring Boot) con interfaz responsiva en React, asegurando persistencia relacional con PostgreSQL.',
      'Configuré el entorno de desarrollo y ejecución mediante contenedores Docker, estandarizando servicios y facilitando el despliegue local rápido.',
    ],
    technologies: [
      { name: 'React', variant: 'sky' },
      { name: 'Java / Spring Boot', variant: 'emerald' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'Docker', variant: 'sky' },
    ],
    previewType: 'operational',
  },
  {
    id: 'smartbook',
    title: 'SmartBook',
    subtitle: 'Sistema de Gestión Integral Estudiantil',
    highlights: [
      "Diseñé la digitalización de registros académicos para mitigar pérdidas de información y fallas operativas de libros físicos (Colegio Bernardo O'Higgins).",
      'Construí una arquitectura de microservicios desacoplados en Java (Spring Boot), frontend reactivo en Angular y base de datos en PostgreSQL.',
      'Automaticé asistencias y calificaciones bajo la normativa de Libro de Clases Digital, contenedorizando los servicios con Docker y desplegando en VPS para mantener la accesibilidad.',
    ],
    technologies: [
      { name: 'Angular', variant: 'red' },
      { name: 'Java / Spring Boot', variant: 'emerald' },
      { name: 'PostgreSQL', variant: 'blue' },
      { name: 'Docker', variant: 'sky' },
    ],
    demoUrl: 'https://bds00rs4cd.execute-api.us-east-1.amazonaws.com/#/',
    previewType: 'operational',
  },
]

export const ABOUT_DATA = {
  name: 'Deymon González',
  quote: '“Menos complejidad innecesaria, más claridad, escalabilidad y buen diseño”',
  bio: 'Mi enfoque como ingeniero está centrado en construir soluciones mantenibles y escalables en el tiempo. Me gusta tomar decisiones técnicas claras, tecnologías adecuadas a cada caso y trabajar correctamente en equipo.',
}

export const EDUCATION_DATA: EducationItem = {
  institution: 'Duoc UC - San Joaquín',
  degree: 'Ingeniería en Informática',
  period: '2024 - Actualidad',
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'JavaScript / TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot'],
  },
  {
    title: 'Base de Datos',
    skills: ['PostgreSQL', 'OracleSQL'],
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Docker', 'GitHub Actions'],
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Desarrollador Fullstack',
    issuer: 'Duoc UC',
    status: 'Acreditada',
    iconName: 'code',
    tagColor: 'sky',
    credentialUrl: 'https://certificadovalida.duoc.cl/ValidacionQr/validaCertificado',
  },
  {
    id: 'cert-2',
    title: 'Microservices and CI/CD Pipeline Builder',
    issuer: 'AWS Academy',
    status: 'Acreditada',
    iconName: 'terminal',
    tagColor: 'amber',
    credentialUrl: 'https://www.credly.com/badges/8cd85eab-13ba-4538-ab44-1a6d2321c708/linked_in_profile',
  },
  {
    id: 'cert-3',
    title: 'DevOps Essentials Professional Certificate (DEPC)',
    issuer: 'Certiprof',
    status: 'Acreditada',
    iconName: 'check-circle',
    tagColor: 'blue',
    credentialUrl: 'https://www.credly.com/badges/036ca2c4-7124-44a4-bef8-cf7ea16b4be4/public_url',
  },
  {
    id: 'cert-4',
    title: 'Ethical Hacking Professional Certificate (EHCP)',
    issuer: 'Certiprof',
    status: 'Acreditada',
    iconName: 'shield',
    tagColor: 'emerald',
    credentialUrl: 'https://www.credly.com/badges/61e623a5-20f9-446b-bf95-f1e2b8ede598/public_url',
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Correo',
    href: 'mailto:g.deyym2196@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/deymon-gonz%C3%A1lez-274633398',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Deymon2105',
    icon: 'github',
  },
]
