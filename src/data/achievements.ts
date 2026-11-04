export interface Achievement {
  title: string;
  issuer: string;
  description: string;
  image?: string;
  date?: string;
}

export const achievements: Achievement[] = [
  {
    title: "DIU Science Olympiad – Fall 2024",
    issuer: "Daffodil International University",
    date: "November 28, 2024",
    description: "Participated in the DIU Science Olympiad during Fall 2024 semester.",
    image: "/images/achievements/science-olympiad.webp",
  },
  {
    title: "DIU Code Trap Programming Contest – Spring 2025",
    issuer: "DIU Software Engineering Club",
    date: "May 16, 2025",
    description: "Participated in the Code Trap Programming Contest organized by the DIU Software Engineering Club.",
    image: "/images/achievements/codetrap-spring25.png",
  },
  {
    title: "DIU Code Trap Programming Contest – Summer 2025",
    issuer: "DIU Software Engineering Club",
    date: "September 26, 2025",
    description:
      "Participated in the Code Trap Programming Contest for the second consecutive time.",
    image: "/images/achievements/codetrap-summer25.webp",
  },
  {
    title: "Object-Oriented Programming in Java",
    issuer: "Simplilearn SkillUp",
    date: "March 16, 2026",
    description:
      "Earned a certification after successfully completing the Object-Oriented Programming in Java course.",
    image: "/images/achievements/oop-certificate.webp",
  },
];

export interface Experience {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    title: "Competitive Programming",
    organization: "Codeforces, Leetcode, Beecrowd",
    period: "2024 – Present",
    details: [
      "Regularly solves algorithmic problems on competitive programming platforms",
      "Practices data structures and algorithms",
      "Continuously improves coding efficiency and problem-solving skills",
    ],
  },
  {
    title: "Programming Contest Participation",
    organization: "Software Engineering Club & Computer and Programming Club, DIU",
    period: "2024 – Present",
    details: [
      "Take Off Programming Contest (CPC, DIU)",
      "Code Trap Programming Contest (SEC, DIU)",
      "Unlock the Algorithm Programming Contest (CPC, DIU)",
      "Breakout Algorithm Programming Contest (SEC, DIU)",
    ],
  },
  {
    title: "Academic & Personal Projects",
    organization: "Daffodil International University, Dhaka",
    period: "2024 – Present",
    details: [
      "Built multiple projects using C, C++, Java, HTML, CSS, JavaScript, MySQL",
      "Applied object-oriented programming and database concepts in projects",
      "Maintained repositories with Git and GitHub",
      "Created 4+ design presentations and proposals monthly",
    ],
  },
];

