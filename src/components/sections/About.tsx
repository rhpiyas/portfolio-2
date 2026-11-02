"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Trophy,
  GitBranch,
  MapPin,
  Building2,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { fadeInUp } from "@/lib/animations";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "Current Status",
      value: "6th Semester Completed",
      sub: "B.Sc. in Software Engineering",
    },
    {
      icon: Trophy,
      label: "Problem Solving",
      value: "500+ CP Problems",
      sub: "Codeforces, LeetCode, Beecrowd",
    },
    {
      icon: Code2,
      label: "Project Experience",
      value: "25+ Projects Built",
      sub: "Web, Desktop, and Embedded",
    },
    {
      icon: GitBranch,
      label: "Open Source",
      value: "2000+ GitHub Contributions",
      sub: "Active version control & repositories",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Software Engineering student dedicated to continuous technical growth, practical software architecture, and problem-solving."
        />

        {/* Main Bio Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#0e1624] border border-slate-800/80 shadow-xl space-y-8"
        >
          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am <span className="text-white font-semibold">{profile.name}</span>,
              currently pursuing a Bachelor of Science in Software Engineering at{" "}
              <span className="text-blue-400 font-medium">
                Daffodil International University
              </span>
              . My engineering journey is fueled by a strong enthusiasm for building practical software, mastering data structures & algorithms, and architecting real-world applications.
            </p>

            <p className="text-slate-400 text-base">
              My primary focus revolves around full-stack web development, algorithmic
              problem solving on platforms like Codeforces, and delving into Artificial
              Intelligence. I enjoy dissecting complex systems into modular, scalable
              components—from embedded IoT devices to distributed web systems.
            </p>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm sm:text-base text-slate-300 italic border-l-4 border-l-blue-500">
              &ldquo;I believe continuous learning and hands-on implementation are the
              cornerstones of engineering excellence. My goal is to build intelligent,
              impactful software that makes a tangible difference.&rdquo;
            </div>
          </div>

          {/* Quick Fact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
              <Building2 size={18} className="text-blue-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-xs block">University</span>
                <strong className="text-white font-medium text-xs sm:text-sm">
                  Daffodil Int. Univ.
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
              <MapPin size={18} className="text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-xs block">Location</span>
                <strong className="text-white font-medium text-xs sm:text-sm">
                  Dhaka, Bangladesh
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
              <GraduationCap size={18} className="text-blue-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-xs block">Degree</span>
                <strong className="text-white font-medium text-xs sm:text-sm">
                  B.Sc. in Software Eng.
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/80">
              <Award size={18} className="text-emerald-400 shrink-0" />
              <div>
                <span className="text-slate-400 text-xs block">Current CGPA</span>
                <strong className="text-white font-medium text-xs sm:text-sm">
                  3.98 / 4.00
                </strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-900/70 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-300 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">{item.sub}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
