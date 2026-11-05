"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
      setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/5 transition-all duration-300 ${
        scrolled ? "shadow-md shadow-slate-200/50 dark:shadow-lg dark:shadow-black/20" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight cursor-pointer whitespace-nowrap"
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
                  className={`relative px-2.5 lg:px-3 py-2 text-xs lg:text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-white font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isProjectItemOnProjectPage
                    ? `Project - ${currentProject.name}`
                    : item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-blue-500 rounded-full" />
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
              Resume
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
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
        <div className="bg-white/95 dark:bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            const isProjectItemOnProjectPage =
              item.sectionId === "projects" && isProjectPage && currentProject;

            return (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50 dark:text-white dark:bg-white/5 font-medium"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                }`}
              >
                {isProjectItemOnProjectPage
                  ? `Project - ${currentProject.name}`
                  : item.label}
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full ml-2" />
                )}
              </button>
            );
          })}

          <div className="pt-2 mt-2 border-t border-slate-200 dark:border-white/5">
            <a
              href={profile.resumePath}
              download
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
