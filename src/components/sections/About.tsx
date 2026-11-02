"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";

export default function About() {
  const stats = [
    {
      value: "500+",
      label: "CP Problems",
      sub: "Codeforces & LeetCode",
    },
    {
      value: "25+",
      label: "Projects Built",
      sub: "Web, Desktop & AI",
    },
    {
      value: "2000+",
      label: "GitHub Commits",
      sub: "Active Contributions",
    },
    {
      value: "3.98",
      label: "Current CGPA",
      sub: "Scale of 4.00",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to my background, mindset, and technical journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
          {/* Left Column: Focused, Normal Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-4"
          >
            <p className="text-base text-slate-300 leading-relaxed">
              I am a Software Engineering undergraduate at Daffodil International University, passionate about building reliable web applications and solving algorithmic problems.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              My focus is centered on clean architecture, performance, and continuous learning. I enjoy taking ideas from concept to deployment—whether it&apos;s crafting responsive full-stack applications, exploring machine learning models, or practicing problem-solving on online judges.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1624] border border-slate-800 text-sm text-slate-400">
                <MapPin size={14} className="text-slate-400" /> Dhaka, Bangladesh
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1624] border border-slate-800 text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Right Column: 4 Clean Minimal Stat Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1624]/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
