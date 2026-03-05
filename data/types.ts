export interface MediaItem {
  url: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  period: string;
  role: string;
  description: string;
  tech: string[];
  images?: MediaItem[];
  videos?: MediaItem[];
  youtube?: string;
  links?: ProjectLink[];
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  overview: string;
  projects?: Project[];
}

export interface SkillCategory {
  category: string;
  tags: string[];
}

export interface Education {
  school: string;
  period: string;
  degree?: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface Contact {
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  blog?: string;
}

export interface ProfileData {
  lastUpdated: string;
  name: string;
  nameEn: string;
  title: string;
  avatar?: string;
  summary: string[];
  contact: Contact;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
