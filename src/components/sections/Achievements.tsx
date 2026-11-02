"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, ExternalLink, X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-[#080d16] relative border-b border-white/10">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#0e1624] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Certificate / Contest Image if available */}
                {item.image && (
                  <div
                    onClick={() =>
                      setSelectedImage({
                        src: item.image!,
                        title: item.title,
                      })
                    }
                    className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-800/60 cursor-pointer group/img"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-medium flex items-center gap-1.5 border border-slate-700">
                        <ZoomIn size={14} />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-400 mt-0.5">
                      {item.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                <span>Verified achievement</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
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
              className="relative max-w-4xl w-full bg-[#0e1624] rounded-2xl border border-slate-700 overflow-hidden p-3 shadow-2xl"
            >
              <div className="flex items-center justify-between px-3 py-2 text-white border-b border-slate-800 mb-3">
                <span className="text-sm font-semibold">
                  {selectedImage.title}
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative aspect-[16/10] w-full bg-slate-950 rounded-xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
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

