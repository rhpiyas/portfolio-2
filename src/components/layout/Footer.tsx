"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { smoothScrollTo } from "@/lib/hooks";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: GithubIcon, href: profile.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: profile.social.instagram, label: "Instagram" },
];

const footerNavItems = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#060a12] border-t border-white/5">
        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* Top Row */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => smoothScrollTo("hero")}
              className="text-xl font-bold text-white cursor-pointer"
            >
              Piyas<span className="text-blue-500">.</span>
            </button>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2026 Rakib Hasan Piyas. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              {footerNavItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => smoothScrollTo(item.sectionId)}
                  className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => smoothScrollTo("hero")}
            className="fixed bottom-8 right-8 z-50 bg-blue-500/10 border border-blue-500/30 text-blue-400 p-3 rounded-xl hover:bg-blue-500/20 transition-colors duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
