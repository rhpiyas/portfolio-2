"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Database, Wrench, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Terminal,
    "Frontend Development": Layout,
    Database: Database,
    "Tools & Platforms": Wrench,
  };

  return (
    <section id="skills" className="py-24 bg-[#080d16] relative">
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
                className="p-6 sm:p-8 rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">
                        {cat.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Clean, Scannable Tags without artificial progress bars */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800 text-sm font-medium hover:border-blue-500/40 hover:text-cyan-300 transition-all duration-200 cursor-default select-none shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-500">
                  <span>Applied in projects & problem solving</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

