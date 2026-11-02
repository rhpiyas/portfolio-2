"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#080d16] relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Education"
          subtitle="My formal academic background and qualifications in science and engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-6"
        >
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <span className="text-cyan-400 font-medium text-base">
                      in {item.field}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-3">
                    <Building2 size={15} className="text-slate-400" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Status & GPA Meta Box */}
              <div className="flex md:flex-col items-center md:items-end justify-between gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-slate-800/80 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar size={13} className="text-blue-400" />
                  <span>{item.years}</span>
                </div>

                {item.gpa && (
                  <div className="flex items-center gap-1 text-xs text-slate-300 bg-blue-950/40 border border-blue-800/40 px-3 py-1.5 rounded-lg">
                    <Award size={13} className="text-cyan-400" />
                    <span>
                      {item.status === "ongoing" ? "CGPA:" : "GPA:"}{" "}
                      <strong className="text-white font-semibold">
                        {item.gpa}
                      </strong>
                      /{item.gpaScale}
                    </span>
                  </div>
                )}

                {item.status === "ongoing" && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-800/30 px-2.5 py-1 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ongoing
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

