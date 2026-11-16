import type { Metadata } from "next";
import ResumeView from "@/components/resume/ResumeView";
import { getResumeData } from "@/data/resume";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume | ${profile.name} - Software Engineer`,
  description: `Official professional ATS-friendly resume of ${profile.name}. Software Engineering student at ${profile.university}. Specializing in web development, competitive programming, and Artificial Intelligence.`,
  openGraph: {
    title: `Resume | ${profile.name}`,
    description: `Official professional ATS-friendly resume of ${profile.name}. View qualifications, education, featured projects, technical skills, and achievements.`,
    url: "https://rhpiyas.vercel.app/resume",
  },
};

export default function ResumePage() {
  const resumeData = getResumeData();

  return <ResumeView data={resumeData} />;
}
