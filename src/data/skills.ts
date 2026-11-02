export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Canva", "Vercel"],
  },
];

