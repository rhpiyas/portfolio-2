"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Code2,
  BrainCircuit,
  Trophy,
  GitBranch,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Left Column: Image & Quick Details */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl aspect-[4/5]">
                <Image
                  src="/images/profile/profile-img.jpeg"
                  alt="Rakib Hasan Piyas portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80">
                  <div className="text-white font-semibold text-base">{profile.name}</div>
                  <div className="text-cyan-400 text-xs font-medium mt-0.5">
                    Software Engineering Student
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-2">
                    <MapPin size={13} className="text-blue-400" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Focus */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I am <span className="text-white font-semibold">{profile.name}</span>,
                currently pursuing a Bachelor of Science in Software Engineering at{" "}
                <span className="text-blue-400 font-medium">
                  Daffodil International University
                </span>
                . My engineering journey is fueled by a strong enthusiasm for building practical software, mastering data structures & algorithms, and architecting real-world applications.
              </p>

              <p className="text-slate-400">
                My primary focus revolves around full-stack web development, algorithmic
                problem solving on platforms like Codeforces, and delving into Artificial
                Intelligence. I enjoy dissecting complex systems into modular, scalable
                components—from embedded IoT devices to distributed web systems.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-sm text-slate-300 italic border-l-4 border-l-blue-500">
                &ldquo;I believe continuous learning and hands-on implementation are the
                cornerstones of engineering excellence. My goal is to build intelligent,
                impactful software that makes a tangible difference.&rdquo;
              </div>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">University:</strong> Daffodil Int. Univ.
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">Location:</strong> Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">Degree:</strong> B.Sc. in Software Eng.
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white font-medium">CGPA:</strong> 3.98 / 4.00 (Ongoing)
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
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

