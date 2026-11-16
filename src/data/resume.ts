import { profile } from "./profile";
import { education } from "./education";
import { skillCategories } from "./skills";
import { projects, Project } from "./projects";
import { achievements } from "./achievements";

/**
 * Resume Configuration
 * Controls which portfolio information is pulled into the ATS-friendly resume.
 */
export interface ResumeConfig {
  includeSummary: boolean;
  includeEducation: boolean;
  includeSkills: boolean;
  includeProjects: boolean;
  includeExperience: boolean;
  includeCertifications: boolean;

  // Selected projects to feature in the resume (in order of priority)
  featuredProjectSlugs: string[];

  // Filter skills categories for the resume
  skillsCategories: string[];

  // Display order of sections
  sectionOrder: Array<
    "summary" | "education" | "skills" | "projects" | "experience" | "certifications"
  >;
}

export const resumeConfig: ResumeConfig = {
  includeSummary: true,
  includeEducation: true,
  includeSkills: true,
  includeProjects: true,
  includeExperience: true,
  includeCertifications: true,

  // Top 4 professional software engineering projects
  featuredProjectSlugs: [
    "agro-cosmic-weave",
    "face-entry-pro",
    "amar-pashe",
    "smart-parking-system",
  ],

  skillsCategories: [
    "Programming Languages",
    "Web & Full-Stack Development",
    "Database",
    "Tools & Platforms",
  ],

  sectionOrder: [
    "summary",
    "education",
    "skills",
    "projects",
    "experience",
    "certifications",
  ],
};

export interface ResumeData {
  config: ResumeConfig;
  header: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
    codeforces: string;
  };
  summary: string;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    years: string;
    gpa?: string;
    status: string;
  }>;
  skills: Array<{
    category: string;
    skillsList: string;
  }>;
  projects: Array<{
    slug: string;
    name: string;
    role: string;
    date: string;
    technologies: string;
    description: string;
    github?: string;
    liveDemo?: string;
    researchPaper?: string;
    demoVideo?: string;
  }>;
  experience: Array<{
    role: string;
    organization: string;
    period: string;
    bullets: string[];
  }>;
  certifications: Array<{
    title: string;
    issuer: string;
    date?: string;
  }>;
}

/**
 * Helper to dynamically assemble the verified ATS Resume Data from existing portfolio files
 */
export function getResumeData(): ResumeData {
  // 1. Header Information
  const header = {
    name: profile.name,
    title: "Software Engineering Student & Full-Stack Developer",
    email: profile.email,
    phone: profile.phone,
    location: profile.location,
    website: profile.website,
    github: profile.social.github,
    linkedin: profile.social.linkedin,
    codeforces: profile.social.codeforces,
  };

  // 2. Summary (Concise 1-2 sentences)
  const summary =
    "Software Engineering undergraduate at Daffodil International University (CGPA 3.98/4.00) passionate about building scalable web applications and AI-driven solutions, with a strong foundation in data structures, algorithms, and 500+ competitive programming problems solved.";

  // 3. Education (Concise)
  const educationList = education.map((edu) => ({
    institution: edu.institution,
    degree: edu.degree,
    field: edu.field,
    years: edu.years,
    gpa: edu.gpa ? `${edu.gpa} / ${edu.gpaScale}` : undefined,
    status: edu.status,
  }));

  // 4. Skills (organized by category)
  const skills = skillCategories
    .filter((cat) => resumeConfig.skillsCategories.includes(cat.title))
    .map((cat) => ({
      category: cat.title,
      skillsList: cat.skills.join(", "),
    }));

  // 5. Selected Projects (Name, main sentence description, tech stack, and links)
  const selectedProjects = resumeConfig.featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p))
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      role: p.role,
      date: p.date,
      technologies: p.technologies.slice(0, 6).join(", "),
      description: p.shortDescription,
      github: p.github,
      liveDemo: p.liveDemo,
      researchPaper: p.researchPaper,
      demoVideo: p.demoVideo,
    }));

  // 6. Experience & Leadership (Concise single-bullet summaries)
  const experienceList = [
    {
      role: "Competitive Problem Solver",
      organization: "Codeforces, LeetCode, Beecrowd",
      period: "2024 – Present",
      bullets: [
        `Solved ${profile.stats.cpProblemsSolved} algorithmic problems; active on Codeforces (rh_piyas) with ${profile.stats.githubContributions} GitHub contributions across ${profile.stats.projectsBuilt} projects.`,
      ],
    },
    {
      role: "Project Team Leader & Coordinator",
      organization: "Daffodil International University",
      period: "2024 – Present",
      bullets: [
        "Led a 5-member team (SPIDERX) for NASA Space Apps Challenge 2026 and coordinated academic capstone project development workflows.",
      ],
    },
  ];

  // 7. Certifications & Honors (Sorted newest first, concise title and issuer)
  const certificationsList = [...achievements].reverse().map((ach) => ({
    title: ach.title,
    issuer: ach.issuer,
    date: ach.date ? ach.date.split(",")[1]?.trim() || ach.date : undefined,
  }));

  return {
    config: resumeConfig,
    header,
    summary,
    education: educationList,
    skills,
    projects: selectedProjects,
    experience: experienceList,
    certifications: certificationsList,
  };
}
