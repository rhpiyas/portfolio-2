"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { smoothScrollTo } from "@/lib/hooks";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Hero() {
  const skills = useMemo(
    () => [
      "Competitive Problem Solver",
      "Full Stack Developer",
      "Deep Researcher",
      "Open Source Enthusiast",
      "AI/ML Enthusiast",
    ],
    []
  );

  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = skills[skillIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, skillIndex, skills]);

  // 3D Interactive Mouse Tilt Physics (Subtle & Smooth)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 24 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0a0f1a] border-b border-white/10"
    >
      {/* Subtle background glow & radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Available for Software & AI Opportunities</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Hello, I&apos;m{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                {profile.name}
              </span>
            </motion.h1>

            {/* Title / Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-medium mt-4"
            >
              {profile.title}
            </motion.p>

            {/* Animated Typing Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 flex items-center min-h-[40px]"
            >
              <span className="font-typewriter text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400">
                {displayText}
              </span>
              <span className="inline-block w-2 h-6 sm:h-7 bg-cyan-400 animate-pulse ml-2 rounded-xs" />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto"
            >
              <button
                onClick={() => smoothScrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 cursor-pointer hover:translate-y-[-1px]"
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={profile.resumePath}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold text-sm transition-all duration-200 hover:border-slate-500 cursor-pointer hover:translate-y-[-1px]"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Competitive Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>

              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={profile.social.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors text-xs font-medium"
                aria-label="Codeforces profile"
              >
                <Image
                  src="/images/common/codeforces.png"
                  alt="Codeforces"
                  width={16}
                  height={16}
                  className="rounded-xs"
                />
                <span>Codeforces</span>
              </a>
            </motion.div>
          </div>

          {/* Right / Profile Card Visual with Interactive 3D Mouse Parallax */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end [perspective:1000px]">
            <motion.div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-sm cursor-pointer select-none"
            >
              {/* 3D Elevated Profile Card */}
              <div
                style={{ transformStyle: "preserve-3d" }}
                className="relative rounded-2xl bg-gradient-to-b from-[#131e30] via-[#0f1726] to-[#0a111c] border border-slate-700/60 p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_12px_28px_-8px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-slate-500/80"
              >
                {/* 3D Top Rim Light */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-t-2xl pointer-events-none" />

                {/* Photo (fixed & aligned with block) */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-800/80 shadow-md">
                  <Image
                    src="/images/profile/my-profile-img.jpeg"
                    alt="Rakib Hasan Piyas"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1522]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Quick Profile Summary Card */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Education</span>
                    <span className="text-slate-200 font-medium">B.Sc. in Software Engineering</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Institution</span>
                    <span className="text-slate-200 font-medium">Daffodil International University</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Focus Areas</span>
                    <span className="text-cyan-400 font-medium">Full Stack & AI</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Location</span>
                    <span className="text-slate-200 font-medium">Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Stats ribbon */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/40">
                    <div className="text-base font-bold text-white">500+</div>
                    <div className="text-[10px] text-slate-400">CP Solved</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/40">
                    <div className="text-base font-bold text-cyan-400">25+</div>
                    <div className="text-[10px] text-slate-400">Projects</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/40">
                    <div className="text-base font-bold text-blue-400">3.98</div>
                    <div className="text-[10px] text-slate-400">CGPA</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
