import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  Globe,
  BookOpen,
  Calendar,
  UserCheck,
  GraduationCap,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Rakib Hasan Piyas`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} - Case Study`,
      description: project.shortDescription,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const categoryNames: Record<string, string> = {
    academic: "Academic Project",
    web: "Web Development",
    personal: "Personal Project",
    ai: "Artificial Intelligence",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0f1a] text-slate-200 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="border-b border-slate-800/80 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              {categoryNames[project.category] || project.category}
            </span>
            {project.status && (
              <span className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-cyan-300 text-xs font-medium">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {project.name}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/25"
              >
                <Globe size={16} />
                <span>Visit Live Application</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-medium text-sm transition-colors"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}

            {project.researchPaper && (
              <a
                href={project.researchPaper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-cyan-300 font-medium text-sm transition-colors"
              >
                <BookOpen size={16} />
                <span>Research Publication</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-[#0e1624] border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <UserCheck size={14} className="text-blue-400" />
              <span>Role / Contribution</span>
            </div>
            <div className="text-sm font-semibold text-white">
              {project.role}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1624] border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Calendar size={14} className="text-cyan-400" />
              <span>Timeline / Release</span>
            </div>
            <div className="text-sm font-semibold text-white">
              {project.date}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1624] border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <GraduationCap size={14} className="text-blue-400" />
              <span>Course / Context</span>
            </div>
            <div className="text-sm font-semibold text-white">
              {project.course || "Independent Initiative"}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1624] border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <Layers size={14} className="text-cyan-400" />
              <span>Category</span>
            </div>
            <div className="text-sm font-semibold text-white">
              {categoryNames[project.category] || project.category}
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-4">
            Project Visuals & Screenshots
          </h2>
          <div
            className={`grid gap-6 ${
              project.images.length > 1
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {project.images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl aspect-[16/10]"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.name} preview ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* In-depth Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0e1624] border border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-4">
                Overview & Architecture
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm whitespace-pre-line">
                {project.description}
              </div>
            </div>

            {/* Key Features */}
            <div className="p-8 rounded-2xl bg-[#0e1624] border border-slate-800/80">
              <h2 className="text-xl font-bold text-white mb-5">
                Key Features & Capabilities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-cyan-400 shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: Technologies */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0e1624] border border-slate-800/80">
              <h3 className="text-base font-bold text-white mb-4">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#111e33] to-[#0c1422] border border-blue-500/20 text-center">
              <h4 className="text-base font-bold text-white mb-2">
                Have questions about this project?
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Interested in discussion, review, or collaboration? Let&apos;s talk.
              </p>
              <Link
                href="/#contact"
                className="inline-block w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                Reach Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);
}
