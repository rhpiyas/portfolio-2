"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Apple } from "lucide-react";

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

  const getThemeInfo = () => {
    if (theme === "dark") {
      return {
        label: "Dark Mode (Click for Light Mode)",
        className:
          "border-white/10 bg-white/[0.06] text-amber-300 hover:bg-white/[0.12] hover:text-amber-200 hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
        icon: <Moon size={17} className="transition-transform duration-300 -rotate-12 hover:rotate-0" />,
      };
    }
    if (theme === "light") {
      return {
        label: "Light Mode (Click for Apple Liquid Glass Theme)",
        className:
          "border-slate-900/[0.08] bg-slate-900/[0.04] text-slate-700 hover:bg-slate-900/[0.08] hover:text-blue-600 hover:border-slate-900/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
        icon: <Sun size={17} className="transition-transform duration-300 rotate-0 hover:rotate-45" />,
      };
    }
    // Apple Glass Theme
    return {
      label: "Apple Liquid Glass Theme (Click for Dark Mode)",
      className:
        "border-cyan-400/50 bg-cyan-500/[0.12] text-cyan-600 hover:bg-cyan-500/[0.22] hover:text-cyan-700 hover:border-cyan-400/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_0_14px_rgba(6,182,212,0.3)]",
      icon: <Apple size={17} className="transition-transform duration-300 hover:scale-110" />,
    };
  };

  const current = getThemeInfo();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={current.label}
      title={current.label}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 cursor-pointer select-none backdrop-blur-md ${current.className} ${className}`}
    >
      {current.icon}
    </button>
  );
}

