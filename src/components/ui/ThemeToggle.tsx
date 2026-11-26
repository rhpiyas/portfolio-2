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
        className={`w-[104px] h-8 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const activeIndex = Math.max(
    0,
    themeOptions.findIndex((item) => item.id === theme)
  );

  return (
    <div
      role="radiogroup"
      aria-label="Theme switcher"
      className={`relative flex items-center gap-1 ${className}`}
    >
      {/* Smooth sliding active border indicator */}
      <div
        className="absolute top-0 left-0 w-8 h-8 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-900/[0.04] dark:bg-white/[0.06] pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transform: `translateX(${activeIndex * 36}px)`,
        }}
        aria-hidden="true"
      />

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
            className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer ${
              isActive
                ? activeColor
                : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
            }`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
