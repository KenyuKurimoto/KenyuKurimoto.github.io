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
  /** One-line editorial summary shown next to the project number. */
  summary?: string;
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
  /** Optional 3:2 landscape photograph from that chapter. Falls back gracefully. */
  photo?: string;
  photoCaption?: string;
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

/** The opening of the site: a name and what its owner does, not a slogan. */
export interface Hero {
  eyebrow: string;
  /** Set in the display face at hero scale. */
  name: string;
  /** The same name in the other script, set small beneath it. */
  nameLatin: string;
  role: string;
  lede: string;
  image: string;
  imageCaption: string;
}

/** A number-led fact in the band beneath the hero. */
export interface Metric {
  value: string;
  label: string;
}

/** The two forward-looking themes shown after the About section. */
export interface FocusArea {
  index: string;
  title: string;
  titleEn: string;
  body: string;
}

export interface ProfileData {
  lastUpdated: string;
  name: string;
  nameEn: string;
  title: string;
  avatar?: string;
  hero: Hero;
  metrics: Metric[];
  about: string[];
  focus: FocusArea[];
  contact: Contact;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}
