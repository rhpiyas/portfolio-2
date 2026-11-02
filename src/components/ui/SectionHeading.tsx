"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 mb-3" />
      {subtitle && (
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
