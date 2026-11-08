"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowUpRight, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0e1624] border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl hover:-translate-y-1"
    >
      <div>
        {/* Project Thumbnail */}
        <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800/60">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
          {/* Dark mode subtle blend only; removed white fade from Light and Apple modes */}
          <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-[#0e1624] via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Link
              href={`/projects/${project.slug}`}
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-300 transition-colors line-clamp-1"
            >
              {project.name}
            </Link>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer with Links */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-auto text-xs text-slate-500 dark:text-slate-400">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-medium transition-colors"
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
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
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
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
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
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 transition-colors"
              aria-label={`${project.name} research paper`}
            >
              <BookOpen size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
