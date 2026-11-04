export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web & Full-Stack Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
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

