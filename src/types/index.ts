export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface SnapshotStat {
  label: string;
  icon: string;
  value: string;
  level?: number; // 0-100, optional progress bar
  isBadge?: boolean;
}

export interface AboutHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  org: string;
  description: string;
  tags: string[];
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  outcomes: string[];
  meta: string;
  metaIcon: string;
  linkLabel: string;
  linkHref: string;
}

export interface Certification {
  icon: string;
  colorClass: 'blue' | 'purple' | 'green' | 'amber' | 'slate';
  title: string;
  issuer: string;
  status: 'Completed' | 'In progress';
}

export interface EducationEntry {
  year: string;
  degree: string;
  institution: string;
  description: string;
  highlights: string[];
  icon: string;
  iconBg: string;
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    tagline: string;
    availabilityText: string;
    location: string;
    remote: string;
    languages: string;
  };
  navLinks: NavLink[];
  hero: {
    badgeText: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    location: string;
    remote: string;
    languages: string;
    snapshotTitle: string;
    snapshotUpdated: string;
    snapshotStats: SnapshotStat[];
  };
  about: {
    paragraphs: string[];
    highlights: AboutHighlight[];
  };
  skills: {
    subtitle: string;
    categories: SkillCategory[];
  };
  experience: {
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    subtitle: string;
    items: Project[];
  };
  certifications: {
    subtitle: string;
    items: Certification[];
  };
  education: {
    entries: EducationEntry[];
  };
  contact: {
    headingLine1: string;
    headingLine2: string;
    intro: string;
    methods: ContactMethod[];
    socials: SocialLink[];
    availabilityTitle: string;
    availabilityText: string;
    quotes: { icon: string; text: string; author: string }[];
  };
  footer: {
    copyright: string;
    location: string;
  };
}
