"use client";

import { useTheme, Theme } from "@/context/ThemeContext";
import { Moon, Sun, Apple } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

const themeOptions: {
  id: Theme;
  label: string;
  icon: typeof Moon;
  activeColor: string;
}[] = [
  {
    id: "dark",
    label: "Dark theme",
    icon: Moon,
    activeColor: "text-amber-300",
  },
  {
    id: "light",
    label: "Light theme",
    icon: Sun,
    activeColor: "text-amber-500",
  },
  {
    id: "apple",
    label: "Apple liquid glass theme",
    icon: Apple,
    activeColor: "text-cyan-600 dark:text-cyan-400",
  },
];

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-24 h-8 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label="Theme switcher"
      className={`flex items-center gap-1 ${className}`}
    >
      {themeOptions.map(({ id, label, icon: Icon, activeColor }) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={`${label}${isActive ? " (Active)" : ""}`}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
              isActive
                ? `border border-slate-300 dark:border-slate-700 bg-slate-900/[0.04] dark:bg-white/[0.06] ${activeColor}`
                : "border border-transparent text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
