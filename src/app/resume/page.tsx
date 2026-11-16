import type { Metadata } from "next";
import ResumeView from "@/components/resume/ResumeView";
import { getResumeData } from "@/data/resume";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume | ${profile.name} - Software Engineer`,
  description: `Official professional ATS-friendly resume of ${profile.name}. Software Engineering student at ${profile.university}. Specializing in web development, competitive programming, and Artificial Intelligence.`,
  openGraph: {
    type: "website",
    title: `Resume | ${profile.name}`,
    description: `Official professional ATS-friendly resume of ${profile.name}. View qualifications, education, featured projects, technical skills, and achievements.`,
    url: "https://rhpiyas.work/resume",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `Resume - ${profile.name}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${profile.name}`,
    description: `Official professional ATS-friendly resume of ${profile.name}. View qualifications, education, featured projects, technical skills, and achievements.`,
    images: ["/images/og-image.png"],
  },
};

export default function ResumePage() {
  const resumeData = getResumeData();

  return <ResumeView data={resumeData} />;
}
