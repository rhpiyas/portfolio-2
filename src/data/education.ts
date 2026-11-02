export interface Education {
  institution: string;
  degree: string;
  field: string;
  years: string;
  gpa?: string;
  gpaScale?: string;
  description: string;
  status: "completed" | "ongoing";
}

export const education: Education[] = [
  {
    institution: "Daffodil International University",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    years: "2024 – 2028",
    gpa: "3.98",
    gpaScale: "4.00",
    description:
      "Focused on software development, competitive programming, web technologies, and Artificial Intelligence.",
    status: "ongoing",
  },
  {
    institution: "BAF Shaheen College, PKP",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    years: "2020 – 2022",
    gpa: "4.83",
    gpaScale: "5.00",
    description:
      "Completed HSC in Science stream with a strong foundation in mathematics, analytical thinking, and problem-solving.",
    status: "completed",
  },
];

