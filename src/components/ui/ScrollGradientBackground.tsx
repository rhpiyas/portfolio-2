"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Balanced scroll breakpoints:
  // 0.00: Hero (Soft Sky Blue & Periwinkle)
  // 0.16: About (Soft Lavender & Rose Pink)
  // 0.32: Skills (Soft Mint & Aquamarine Teal)
  // 0.48: Education (Soft Warm Amber & Peach)
  // 0.65: Projects (Soft Royal Indigo & Violet)
  // 0.82: Achievements (Soft Blush Rose & Gold)
  // 1.00: Contact & Footer (Soft Ocean Cyan & Indigo)
  const breakpoints = [0, 0.16, 0.32, 0.48, 0.65, 0.82, 1];

  // Primary Orb (Top-Left) - Ultra-soft, airy pastel tint
  const orb1Color = useTransform(smoothProgress, breakpoints, [
    "rgba(56, 189, 248, 0.25)",  // 0.00: Sky Blue
    "rgba(192, 132, 252, 0.26)", // 0.16: Soft Lavender
    "rgba(52, 211, 153, 0.24)",  // 0.32: Soft Mint Green
    "rgba(251, 191, 36, 0.24)",  // 0.48: Soft Warm Amber
    "rgba(129, 140, 248, 0.26)", // 0.65: Soft Royal Indigo
    "rgba(251, 113, 133, 0.24)", // 0.82: Soft Blush Rose
    "rgba(56, 189, 248, 0.25)",  // 1.00: Soft Ocean Cyan
  ]);

  // Secondary Orb (Top-Right) - Harmonious delicate counter-glow
  const orb2Color = useTransform(smoothProgress, breakpoints, [
    "rgba(165, 180, 252, 0.22)", // 0.00: Periwinkle
    "rgba(244, 114, 182, 0.22)", // 0.16: Soft Rose Pink
    "rgba(45, 212, 191, 0.22)",  // 0.32: Soft Teal
    "rgba(251, 146, 60, 0.22)",  // 0.48: Soft Peach
    "rgba(192, 132, 252, 0.22)", // 0.65: Soft Violet
    "rgba(252, 211, 77, 0.22)",  // 0.82: Soft Gold
    "rgba(129, 140, 248, 0.22)", // 1.00: Soft Indigo
  ]);

  // Smooth floating positional dynamics as user scrolls
  const orb1Y = useTransform(smoothProgress, [0, 1], ["0%", "65%"]);
  const orb1X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "15%", "-5%"]);

  const orb2Y = useTransform(smoothProgress, [0, 1], ["0%", "-45%"]);
  const orb2X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-18%", "8%"]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden dark:hidden select-none"
    >
      {/* Clean neutral soothing off-white canvas */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Primary Floating Ambient Gradient Orb (Top Left) */}
      <motion.div
        style={{
          backgroundColor: orb1Color,
          y: orb1Y,
          x: orb1X,
        }}
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full blur-[140px] sm:blur-[180px] opacity-60 will-change-transform"
      />

      {/* Secondary Floating Ambient Gradient Orb (Top Right) */}
      <motion.div
        style={{
          backgroundColor: orb2Color,
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
  );
}
