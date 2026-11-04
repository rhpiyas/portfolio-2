"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import { smoothScrollTo } from "@/lib/hooks";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

interface SocialItem {
  label: string;
  href: string;
  icon?: React.ElementType;
  isImage?: boolean;
  imageSrc?: string;
  isExternal?: boolean;
}

const socialLinks: SocialItem[] = [
  {
    label: "Instagram",
    href: profile.social.instagram,
    icon: InstagramIcon,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    icon: LinkedinIcon,
    isExternal: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    isExternal: false,
  },
  {
    label: "GitHub",
    href: profile.social.github,
    icon: GithubIcon,
    isExternal: true,
  },
  {
    label: "Codeforces",
    href: profile.social.codeforces,
    isImage: true,
    imageSrc: "/images/common/codeforces.png",
    isExternal: true,
  },
];

const footerNavItems = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Education", sectionId: "education" },
  { label: "Projects", sectionId: "projects" },
  { label: "Achievements", sectionId: "achievements" },
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
      <footer className="bg-[#060a12]">
        <div className="max-w-6xl mx-auto py-12 px-6">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              onClick={() => smoothScrollTo("hero")}
              className="text-lg sm:text-xl font-bold text-white cursor-pointer tracking-tight"
            >
              Rakib Hasan Piyas
            </button>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(social.isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={
                      social.label === "Email"
                        ? "Send email"
                        : `${social.label} profile`
                    }
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors text-xs font-medium"
                  >
                    {social.isImage && social.imageSrc ? (
                      <Image
                        src={social.imageSrc}
                        alt={social.label}
                        width={15}
                        height={15}
                        className="rounded-xs"
                      />
                    ) : IconComponent ? (
                      <IconComponent size={15} />
                    ) : null}
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2026 Rakib Hasan Piyas&nbsp;  &nbsp;| &nbsp;&nbsp;All rights reserved &nbsp;| &nbsp;&nbsp;Made on Earth by Human
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
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
