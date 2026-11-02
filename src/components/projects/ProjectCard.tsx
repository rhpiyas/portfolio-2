"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabels: Record<string, string> = {
    academic: "Academic Project",
    web: "Web Development",
    personal: "Personal Project",
    ai: "Artificial Intelligence",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col justify-between rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
    >
      <div>
        {/* Project Thumbnail with overlay */}
        <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-transparent to-transparent opacity-80" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md bg-[#0a0f1a]/85 backdrop-blur-md border border-slate-700/60 text-cyan-300 text-xs font-medium">
              {categoryLabels[project.category] || project.category}
            </span>
          </div>

          {/* Quick Link to Details */}
          <Link
            href={`/projects/${project.slug}`}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100"
            aria-label={`View ${project.name} details`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Link
              href={`/projects/${project.slug}`}
              className="text-xl font-bold text-white hover:text-cyan-300 transition-colors line-clamp-1"
            >
              {project.name}
            </Link>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-md bg-slate-900/50 text-slate-400 text-xs">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer with Links */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-auto text-xs text-slate-400">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          <span>View Details</span>
          <ArrowUpRight size={14} />
        </Link>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label={`${project.name} GitHub repository`}
            >
              <GithubIcon size={16} />
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label={`${project.name} live demo`}
            >
              <Globe size={16} />
            </a>
          )}

          {project.researchPaper && (
            <a
              href={project.researchPaper}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-blue-300 transition-colors"
              aria-label={`${project.name} research paper`}
            >
              <BookOpen size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
