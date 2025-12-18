import digitalDateCardServiceImg from "@/assets/imgs/home/digitalDateCardService.png";
import ssumpickImg from "@/assets/imgs/home/ssumpick.png";
import trinityImg from "@/assets/imgs/home/trinity.png";
import eteverseImg from "@/assets/imgs/home/eteverse.png";
import cloodyImg from "@/assets/imgs/home/cloody.png";
import velogitImg from "@/assets/imgs/home/velogit.png";
import ddareungiMapImg from "@/assets/imgs/home/ddareungiMap.png";
import IconCopilot from "@/shared/components/Icons/IconCopilot";
import IconCSS from "@/shared/components/Icons/IconCSS";
import IconFigma from "@/shared/components/Icons/IconFigma";
import IconGitHub from "@/shared/components/Icons/IconGithub";
import IconHTML from "@/shared/components/Icons/IconHTML";
import IconNextJs from "@/shared/components/Icons/IconNextJs";
import IconNotion from "@/shared/components/Icons/IconNotion";
import IconPnpm from "@/shared/components/Icons/IconPnpm";
import IconReact from "@/shared/components/Icons/IconReact";
import IconReactNative from "@/shared/components/Icons/IconReactNative";
import IconTailwind from "@/shared/components/Icons/IconTailwind";
import IconTypeScript from "@/shared/components/Icons/IconTypeScript";
import IconVite from "@/shared/components/Icons/IconVite";
import IconChatGPT from "@/shared/components/Icons/IconChatGPT";

// Icon imports

export const schools = [
  {
    name: "Seoul National University of Science and Technology",
    major: "Computer Engineering",
    period: "Mar 2021 - Present",
    description: "GPA: 3.9 / 4.5, Minor in Visual Design",
  },
];

export const careers = [
  {
    company: "SaaS Startup",
    position: "Frontend Developer",
    period: "Dec 2024 - Mar 2025",
    description:
      "Developed B2B task management SaaS and a golf course monitoring system",
  },
];

export const certificates = [
  {
    name: "Word Processor Level 1",
    issuer: "Korea Chamber of Commerce and Industry",
    date: "Nov 2022",
  },
];

export const awards = [
  {
    name: "Gold Prize, Term Project Competition",
    organization: "Seoul National University of Science and Technology",
    date: "Dec 2024",
  },
];

export const projects = [
  {
    id: "digital-card-date",
    name: "Digital Card Date Service",
    role: "Planning · Design · Frontend",
    period: "Jan 2024 - Mar 2024",
    summary:
      "A card-based dating web service inspired by real business cards, designed to lower entry barriers with minimal profile exposure.",
    highlights: [
      "First team project covering planning, design, and frontend",
      "Business-card-style responsive UI",
      "Full-stack implementation with Vanilla JS and Flask",
      "University email verification for safer onboarding",
    ],
    images: [digitalDateCardServiceImg],
  },
  {
    id: "ssumpick",
    name: "SSUMPICK",
    role: "Frontend · Planning · Design · Operations",
    period: "Jan 2025 - Jun 2025",
    summary:
      "A refined dating platform rebuilt with React, focusing on scalable UI/UX and personalized matching.",
    highlights: [
      "Animal-based profile system without face photos",
      "Improved security and admin dashboard",
      "Real-time user feedback collection and UX iteration",
      "Scalable component-based architecture",
    ],
    images: [ssumpickImg],
  },
  {
    id: "trinity",
    name: "TRINITY",
    role: "Frontend",
    period: "Dec 2024 - Feb 2025",
    summary:
      "A real-time golf course operation dashboard visualizing cart locations and round progress.",
    highlights: [
      "GPS-to-image pixel mapping logic",
      "Track-mode visualization for cart progress",
      "Responsive map with accurate zoom and positioning",
    ],
    images: [trinityImg],
  },
  {
    id: "etevers",
    name: "ETEVERS",
    role: "Frontend",
    period: "Jan 2025 - Feb 2025",
    summary:
      "An admin dashboard for an automated HR quotation system with role-based workflows.",
    highlights: [
      "Role-based UI architecture",
      "Virtualized tables using TanStack Table",
      "Centralized state management with Zustand",
    ],
    images: [eteverseImg],
  },
  {
    id: "cloody",
    name: "CLOODY",
    role: "UI Publisher",
    period: "Mar 2025",
    summary:
      "A B2B cloud infrastructure management dashboard built under a tight schedule.",
    highlights: [
      "Data visualization using charts and cards",
      "Responsive layouts for desktop and tablet",
      "Rapid development with a design system",
    ],
    images: [cloodyImg],
  },
  {
    id: "velogit",
    name: "VELOGIT",
    role: "Frontend · Planning · Design",
    period: "Jul 2025 - Aug 2025",
    summary:
      "A developer-focused static blog platform with a custom markdown editor and growth system.",
    highlights: [
      "Custom markdown editor with shortcuts and toolbar",
      "Categories, tags, TOC, comments, and theming",
      "Automated deployment via GitHub Pages and Actions",
    ],
    images: [velogitImg],
  },
  {
    id: "ddareungi-map",
    name: "DDAREUNGI MAP",
    role: "Frontend · Planning · PM · Team Lead",
    period: "Jul 2025 - Present",
    summary:
      "A bike-centric navigation app for Seoul public bike users, combining routing and environmental metrics.",
    highlights: [
      "Cross-platform app with React Native",
      "OSRM-based route recommendation",
      "Real-time navigation with voice guidance",
      "OAuth 2.0 PKCE authentication",
    ],
    images: [ddareungiMapImg],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: <IconReact /> },
      { name: "TypeScript", level: 85, icon: <IconTypeScript /> },
      { name: "Next.js", level: 80, icon: <IconNextJs /> },
      { name: "React Native", level: 75, icon: <IconReactNative /> },
      { name: "HTML", level: 95, icon: <IconHTML /> },
      { name: "CSS", level: 90, icon: <IconCSS /> },
      { name: "Tailwind CSS", level: 90, icon: <IconTailwind /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: 80, icon: <IconFigma /> },
      { name: "Notion", level: 85, icon: <IconNotion /> },
      { name: "GitHub", level: 85, icon: <IconGitHub /> },
      { name: "Vite", level: 85, icon: <IconVite /> },
      { name: "pnpm", level: 80, icon: <IconPnpm /> },
      { name: "Copilot", level: 90, icon: <IconCopilot /> },
      { name: "ChatGPT", level: 95, icon: <IconChatGPT /> },
    ],
  },
];
