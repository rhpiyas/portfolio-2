"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useActiveSection, smoothScrollTo } from "@/lib/hooks";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface NavItem {
  label: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Education", sectionId: "education" },
  { label: "Projects", sectionId: "projects" },
  { label: "Achievements", sectionId: "achievements" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rawActiveSection = useActiveSection();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Detect if on project detail page
  const isProjectPage = pathname.startsWith("/projects/");
  const projectSlug = isProjectPage
    ? pathname.replace(/^\/projects\/?/, "").split("/")[0]
    : null;
  const currentProject = projectSlug
    ? projects.find((p) => p.slug === decodeURIComponent(projectSlug))
    : null;

  const activeSection = isHomePage
    ? rawActiveSection
    : isProjectPage
    ? "projects"
    : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-[180%] ${
        scrolled
          ? "bg-white/60 dark:bg-[#0a0f1a]/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
          : "bg-white/35 dark:bg-[#0a0f1a]/35"
      }`}
    >
      {/* Liquid glass specular top reflection sheen */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-white/10 to-transparent dark:from-white/[0.06] dark:via-transparent dark:to-transparent"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            Rakib Hasan Piyas
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              const isProjectItemOnProjectPage =
                item.sectionId === "projects" && isProjectPage && currentProject;

              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`relative px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isProjectItemOnProjectPage
                    ? `Project - ${currentProject.name}`
                    : item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute bottom-0 inset-x-0 mx-auto w-6 h-[2.5px] bg-blue-500 dark:bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    />
                  )}
                </button>
              );
            })}

            {/* Theme Toggle Button */}
            <div className="ml-2 lg:ml-3">
              <ThemeToggle />
            </div>

            {/* Resume Download */}
            <a
              href={profile.resumePath}
              download
              className="ml-1.5 lg:ml-2.5 flex items-center gap-1.5 lg:gap-2 border border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-colors duration-200"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/[0.05] dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 dark:bg-[#0a0f1a]/90 backdrop-blur-2xl backdrop-saturate-[180%] px-6 py-4 space-y-1 shadow-lg dark:shadow-black/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            const isProjectItemOnProjectPage =
              item.sectionId === "projects" && isProjectPage && currentProject;

            return (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                }`}
              >
                {isProjectItemOnProjectPage
                  ? `Project - ${currentProject.name}`
                  : item.label}
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full ml-2" />
                )}
              </button>
            );
          })}

          <div className="pt-2 mt-2">
            <a
              href={profile.resumePath}
              download
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
