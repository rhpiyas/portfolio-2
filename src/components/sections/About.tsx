"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Terminal,
  Brain,
  Globe,
  Binary,
  Layers,
  GitPullRequest,
} from "lucide-react";
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

  const focusAreas = [
    {
      title: "Competitive Problem Solving",
      desc: "Algorithmic challenges, Codeforces & LeetCode",
      icon: Terminal,
    },
    {
      title: "Deep Learning & AI",
      desc: "Neural networks, ML models & research",
      icon: Brain,
    },
    {
      title: "Full-Stack Web Development",
      desc: "Modern responsive apps with Next.js & React",
      icon: Globe,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Optimized problem solving, trees, graphs & DP",
      icon: Binary,
    },
    {
      title: "Software Engineering",
      desc: "Clean architecture, modular design & best practices",
      icon: Layers,
    },
    {
      title: "Open Source Development",
      desc: "Public repositories, active tooling & collaboration",
      icon: GitPullRequest,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-transparent dark:bg-transparent relative border-b border-slate-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to my background, mindset, and technical journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-12">
          {/* Left Column: Focused, Normal Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:space-y-0"
          >
            <div className="space-y-4">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a Software Engineering undergraduate at Daffodil International University, passionate about building reliable web applications and solving algorithmic problems.
              </p>

              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                My focus is centered on clean architecture, performance, and continuous learning. I enjoy taking ideas from concept to deployment—whether it&apos;s crafting responsive full-stack applications, exploring machine learning models, or practicing problem-solving on online judges.
              </p>
            </div>

            {/* Quick Badges aligned flush at bottom */}
            <div className="flex flex-wrap items-center gap-3 pt-4 lg:pt-0">
              <span className="group/badge inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0e1624] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 cursor-default select-none shadow-2xs">
                <GraduationCap size={14} className="text-slate-500 group-hover/badge:text-slate-700 dark:text-slate-400 dark:group-hover/badge:text-slate-300 transition-colors" />
                <span>Daffodil International University</span>
              </span>
              <span className="group/badge inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0e1624] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300 cursor-default select-none shadow-2xs">
                <MapPin size={14} className="text-slate-500 group-hover/badge:text-slate-700 dark:text-slate-400 dark:group-hover/badge:text-slate-300 transition-colors" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: 4 Clean Minimal Stat Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 lg:grid-rows-2 gap-3.5 sm:gap-4 lg:h-full"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0e1624]/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-center shadow-xs dark:shadow-none"
              >
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Do - Focus Areas Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-14"
        >
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              What I Do
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {focusAreas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#0e1624]/90 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group flex items-start gap-3.5 shadow-xs dark:shadow-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-slate-200 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
