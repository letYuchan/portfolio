export type Tab = "career" | "project" | "skill";

export interface School {
  name: string;
  major: string;
  period: string;
  description?: string;
}

export interface Career {
  company: string;
  position: string;
  period: string;
  description?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

export interface Award {
  name: string;
  organization: string;
  date: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  images?: string[];
}
