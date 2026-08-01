export interface Bot {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  website?: string;
  featured?: boolean;
}

export interface Project {
  name: string;
  description: string;
  href: string;
}

export interface ProjectCategory {
  title: string;
  items: Project[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface StatusService {
  name: string;
  status: "operational" | "degraded" | "downtime" | "maintenance";
  uptime: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  discord?: string;
  github?: string;
}

export interface TabContent {
  id: string;
  label: string;
  content: string[];
}
