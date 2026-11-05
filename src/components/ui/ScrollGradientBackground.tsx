"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Balanced scroll breakpoints across sections:
  // 0.00: Hero (Sky Blue & Periwinkle)
  // 0.16: About (Soft Lavender & Royal Indigo)
  // 0.32: Skills (Mint Green & Aquamarine Teal)
  // 0.48: Education (Cobalt Blue & Electric Indigo)
  // 0.65: Projects (Royal Indigo & Cosmic Violet)
  // 0.82: Achievements (Aquamarine Teal & Ice Cyan)
  // 1.00: Contact & Footer (Ocean Cyan & Deep Indigo)
  const breakpoints = [0, 0.16, 0.32, 0.48, 0.65, 0.82, 1];

  // ================= LIGHT MODE ORBS (Subtle, clean, cool-tone palette) =================
  const lightOrb1Color = useTransform(smoothProgress, breakpoints, [
    "rgba(56, 189, 248, 0.25)",  // 0.00: Sky Blue
    "rgba(192, 132, 252, 0.26)", // 0.16: Soft Lavender
    "rgba(52, 211, 153, 0.24)",  // 0.32: Soft Mint Green
    "rgba(59, 130, 246, 0.24)",  // 0.48: Soft Cobalt Blue
    "rgba(129, 140, 248, 0.26)", // 0.65: Soft Royal Indigo
    "rgba(45, 212, 191, 0.24)",  // 0.82: Soft Aquamarine Teal
    "rgba(14, 165, 233, 0.25)",  // 1.00: Soft Ocean Cyan
  ]);

  const lightOrb2Color = useTransform(smoothProgress, breakpoints, [
    "rgba(165, 180, 252, 0.22)", // 0.00: Periwinkle
    "rgba(129, 140, 248, 0.22)", // 0.16: Soft Royal Indigo
    "rgba(45, 212, 191, 0.22)",  // 0.32: Soft Teal
    "rgba(99, 102, 241, 0.22)",  // 0.48: Soft Electric Indigo
    "rgba(192, 132, 252, 0.22)", // 0.65: Soft Violet
    "rgba(56, 189, 248, 0.22)",  // 0.82: Soft Ice Cyan
    "rgba(99, 102, 241, 0.22)",  // 1.00: Soft Deep Indigo
  ]);

  // ================= DARK MODE ORBS (Luminous cool tech auroras) =================
  const darkOrb1Color = useTransform(smoothProgress, breakpoints, [
    "rgba(56, 189, 248, 0.16)",  // 0.00: Luminous Sky Blue
    "rgba(168, 85, 247, 0.18)",  // 0.16: Deep Cosmic Purple
    "rgba(16, 185, 129, 0.16)",  // 0.32: Electric Emerald Green
    "rgba(59, 130, 246, 0.16)",  // 0.48: Luminous Cobalt Blue
    "rgba(99, 102, 241, 0.18)",  // 0.65: Royal Electric Indigo
    "rgba(20, 184, 166, 0.16)",  // 0.82: Electric Aquamarine
    "rgba(14, 165, 233, 0.16)",  // 1.00: Deep Ocean Cyan
  ]);

  const darkOrb2Color = useTransform(smoothProgress, breakpoints, [
    "rgba(99, 102, 241, 0.14)",  // 0.00: Electric Indigo
    "rgba(129, 140, 248, 0.14)", // 0.16: Soft Indigo
    "rgba(20, 184, 166, 0.14)",  // 0.32: Electric Teal
    "rgba(99, 102, 241, 0.14)",  // 0.48: Electric Indigo
    "rgba(168, 85, 247, 0.14)",  // 0.65: Deep Violet
    "rgba(56, 189, 248, 0.14)",  // 0.82: Luminous Ice Cyan
    "rgba(99, 102, 241, 0.14)",  // 1.00: Deep Indigo
  ]);

  // Smooth floating positional dynamics as user scrolls
  const orb1Y = useTransform(smoothProgress, [0, 1], ["0%", "65%"]);
  const orb1X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "15%", "-5%"]);

  const orb2Y = useTransform(smoothProgress, [0, 1], ["0%", "-45%"]);
  const orb2X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-18%", "8%"]);

  return (
    <>
      {/* ================= LIGHT MODE AMBIENT LAYER ================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden dark:hidden select-none"
      >
        {/* Clean neutral soothing off-white canvas */}
        <div className="absolute inset-0 bg-[#f8fafc]" />

        {/* Primary Floating Ambient Gradient Orb (Top Left) */}
        <motion.div
          style={{
            backgroundColor: lightOrb1Color,
            y: orb1Y,
            x: orb1X,
          }}
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] sm:blur-[180px] opacity-60 will-change-transform"
        />

        {/* Secondary Floating Ambient Gradient Orb (Top Right) */}
        <motion.div
          style={{
            backgroundColor: lightOrb2Color,
            y: orb2Y,
            x: orb2X,
          }}
          className="absolute top-[20%] -right-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] sm:blur-[180px] opacity-55 will-change-transform"
        />

        {/* Fine micro-grid pattern for refined modern texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ================= DARK MODE AMBIENT LAYER ================= */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden hidden dark:block select-none"
      >
        {/* Deep rich space canvas */}
        <div className="absolute inset-0 bg-[#0a0f1a]" />

        {/* Primary Floating Ambient Gradient Orb (Top Left) */}
        <motion.div
          style={{
            backgroundColor: darkOrb1Color,
            y: orb1Y,
            x: orb1X,
          }}
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] sm:blur-[180px] opacity-80 will-change-transform"
        />

        {/* Secondary Floating Ambient Gradient Orb (Top Right) */}
        <motion.div
          style={{
            backgroundColor: darkOrb2Color,
            y: orb2Y,
            x: orb2X,
          }}
          className="absolute top-[20%] -right-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] sm:blur-[180px] opacity-75 will-change-transform"
        />

        {/* Subtle star / micro-grid texture for deep space feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
    </>
  );
}
