"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`text-left mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      <div className="w-16 h-1 bg-blue-500 rounded-full mt-4 mb-3" />
      {subtitle && (
        <p className="text-slate-400 mt-3 max-w-2xl text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}
