"use client";

import { motion } from "framer-motion";
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-12"
        >
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-5 sm:p-6 rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-slate-400">
                    {item.years}
                  </span>
                  {item.status === "ongoing" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ongoing
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-500">
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-slate-300 font-medium mt-0.5">
                  {item.field}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  {item.institution}
                </p>
              </div>

              {item.gpa && (
                <div className="mt-5 pt-3.5 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    {item.status === "ongoing" ? "Current CGPA" : "Result"}
                  </span>
                  <span className="text-slate-200 font-semibold">
                    {item.gpa} / {item.gpaScale}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

