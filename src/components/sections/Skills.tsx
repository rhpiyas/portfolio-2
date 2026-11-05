"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Database, Wrench, Code2, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Terminal,
    "Web & Full-Stack Development": Globe,
    "Frontend Development": Layout,
    Database: Database,
    "Tools & Platforms": Wrench,
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-transparent dark:bg-transparent relative border-b border-slate-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A structured overview of the programming languages, frameworks, databases, and development tools I actively utilize."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Code2;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0e1624] border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>

                {/* Clean, Scannable Tags without artificial progress bars */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-800 text-sm font-medium dark:hover:border-blue-500/40 dark:hover:text-cyan-300 transition-all duration-200 cursor-default select-none shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

