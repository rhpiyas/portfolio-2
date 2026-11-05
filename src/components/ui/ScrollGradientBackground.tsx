"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollGradientBackground() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Soft, airy pastel tones that morph smoothly as the user scrolls
  const orb1Color = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgba(186, 230, 253, 0.50)", // Sky blue (#bae6fd) - Hero
      "rgba(221, 214, 254, 0.45)", // Soft lavender (#ddd6fe) - About
      "rgba(167, 243, 208, 0.40)", // Mint green (#a7f3d0) - Skills
      "rgba(199, 210, 254, 0.48)", // Soft indigo (#c7d2fe) - Education & Projects
      "rgba(254, 215, 170, 0.38)", // Gentle peach (#fed7aa) - Achievements
      "rgba(186, 230, 253, 0.50)", // Sky blue - Contact
    ]
  );

  const orb2Color = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgba(165, 243, 252, 0.45)", // Cyan / Ice (#a5f3fc) - Hero
      "rgba(191, 219, 254, 0.45)", // Light blue (#bfdbfe) - About
      "rgba(186, 230, 253, 0.45)", // Soft sky - Skills
      "rgba(233, 213, 255, 0.42)", // Lilac (#e9d5ff) - Education & Projects
      "rgba(191, 219, 254, 0.45)", // Soft blue - Achievements
      "rgba(199, 210, 254, 0.45)", // Soft indigo - Contact
    ]
  );

  const orb3Color = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(224, 231, 255, 0.35)", // Light indigo
      "rgba(254, 226, 226, 0.25)", // Very soft rose
      "rgba(204, 251, 241, 0.35)", // Light teal
      "rgba(219, 234, 254, 0.40)", // Light blue
      "rgba(224, 231, 255, 0.35)", // Light indigo
    ]
  );

  // Smooth floating positional dynamics as user scrolls
  const orb1Y = useTransform(smoothProgress, [0, 1], ["0%", "70%"]);
  const orb1X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "15%", "-5%"]);

  const orb2Y = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const orb2X = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-20%", "10%"]);

  const orb3Y = useTransform(smoothProgress, [0, 1], ["20%", "40%"]);
  const orb3Scale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.15, 0.95]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden dark:hidden select-none"
    >
      {/* Base soothing off-white tint */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Primary Floating Ambient Gradient Orb (Top Left) */}
      <motion.div
        style={{
          backgroundColor: orb1Color,
          y: orb1Y,
          x: orb1X,
        }}
        className="absolute -top-[10%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[100px] sm:blur-[140px] opacity-80 will-change-transform"
      />

      {/* Secondary Floating Ambient Gradient Orb (Top Right / Center) */}
      <motion.div
        style={{
          backgroundColor: orb2Color,
          y: orb2Y,
          x: orb2X,
        }}
        className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] sm:blur-[140px] opacity-75 will-change-transform"
      />

      {/* Tertiary Accent Orb (Center / Bottom) */}
      <motion.div
        style={{
          backgroundColor: orb3Color,
          y: orb3Y,
          scale: orb3Scale,
        }}
        className="absolute top-[50%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[110px] sm:blur-[150px] opacity-65 will-change-transform"
      />

      {/* Subtle fine micro-grid pattern for refined texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

