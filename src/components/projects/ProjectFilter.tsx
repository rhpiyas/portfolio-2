"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: readonly { id: string; label: string }[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-start gap-2 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none ${
              isActive
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border-slate-200 dark:text-slate-400 dark:hover:text-slate-200 dark:bg-slate-900/50 dark:hover:bg-slate-900 border dark:border-slate-800 shadow-2xs"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-xl bg-blue-600 border border-blue-500 shadow-md shadow-blue-500/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}

