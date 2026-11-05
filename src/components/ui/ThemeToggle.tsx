"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl border border-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 cursor-pointer select-none backdrop-blur-md ${
        isDark
          ? "border-white/10 bg-white/[0.06] text-amber-300 hover:bg-white/[0.12] hover:text-amber-200 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          : "border-slate-900/[0.08] bg-slate-900/[0.04] text-slate-700 hover:bg-slate-900/[0.08] hover:text-blue-600 hover:border-slate-900/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
      } ${className}`}
    >
      {isDark ? (
        <Sun size={17} className="transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={17} className="transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}

