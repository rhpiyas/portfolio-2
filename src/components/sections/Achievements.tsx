"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Building2, BadgeCheck, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-transparent dark:bg-[#080d16] relative border-b border-slate-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Honors, technical certifications, and competitive programming contest participations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="rounded-2xl bg-white dark:bg-[#0e1624] border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-md dark:hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Certificate Thumbnail (Flush with card border) */}
                {item.image && (
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/60">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-3.5 sm:p-4">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5 line-clamp-1">
                    <Building2 size={13} className="text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>{item.issuer}</span>
                  </p>
                  {item.date && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 line-clamp-1">
                      <Calendar size={12} className="text-slate-500 dark:text-slate-400 shrink-0" />
                      <span>{item.date}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-2.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <button
                  type="button"
                  onClick={() => {
                    if (item.image) {
                      setSelectedImage({ src: item.image, title: item.title });
                    }
                  }}
                  className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ZoomIn size={13} />
                  <span>View Certificate</span>
                </button>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 font-medium">
                  <BadgeCheck size={12} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal for Certificate Previews */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-[#0e1624] rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden p-3 shadow-2xl"
            >
              <div className="flex items-center justify-between px-3 py-2 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 mb-3">
                <span className="text-sm font-semibold">
                  {selectedImage.title}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full bg-slate-950 rounded-xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

