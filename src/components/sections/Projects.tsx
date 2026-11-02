"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { projects, projectCategories } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#0a0f1a] relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore selected academic, web development, and personal projects I've designed and built."
        />

        {/* Filter Navigation */}
        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-500 text-sm">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}

