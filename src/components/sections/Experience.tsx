"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, Calendar, CheckCircle2, Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Experience() {
  const icons = [Terminal, Trophy, Code2];

  return (
    <section id="experience" className="py-24 bg-[#0a0f1a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experience & Problem Solving"
          subtitle="My technical track record in competitive programming, university contest participation, and hands-on software development."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-8 max-w-4xl"
        >
          {experiences.map((exp, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#0a0f1a] border-2 border-blue-500/80 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={14} />
                </div>

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-full w-fit">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm font-medium mb-4">
                    {exp.organization}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.details.map((detail, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-blue-400 shrink-0 mt-0.5"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

