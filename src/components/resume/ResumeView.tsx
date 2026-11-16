"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Globe,
  Info,
} from "lucide-react";
import { ResumeData } from "@/data/resume";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface ResumeViewProps {
  data: ResumeData;
}

export default function ResumeView({ data }: ResumeViewProps) {
  const { header, summary, education, skills, projects, experience, certifications, config } = data;
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      setDownloadNotice(false);
    }, 6000);
    window.print();
  };

  return (
    <div className="resume-page-wrapper min-h-screen bg-slate-100 dark:bg-[#070b12] text-slate-900 transition-colors">
      {/* ================= PRINT STYLES ================= */}
      <style jsx global>{`
        @page {
          size: A4 portrait;
          margin: 12mm 14mm 12mm 14mm;
        }
        @media print {
          html,
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print,
          nav,
          footer,
          .ambient-apple-layer,
          .ambient-dark-layer,
          .ambient-light-layer {
            display: none !important;
          }
          .resume-page-wrapper {
            background: transparent !important;
            min-height: auto !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .resume-sheet {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
          .resume-section {
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 4mm !important;
          }
          .resume-entry {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          a {
            color: #000000 !important;
            text-decoration: none !important;
          }
          .resume-link-icon {
            display: none !important;
          }
        }
      `}</style>

      {/* ================= TOP ACTION BAR (SCREEN ONLY) ================= */}
      <header className="no-print sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Back to Portfolio Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>

          {/* Status Indicator (Desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Portfolio Data &bull; Clean Single Page ATS Format</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 transition-all cursor-pointer"
              title="Print resume via browser dialog"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow transition-all cursor-pointer"
              title="Download ATS PDF resume"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Optional helper hint on download click */}
        {downloadNotice && (
          <div className="bg-blue-50 dark:bg-blue-950/60 border-t border-blue-200 dark:border-blue-900/60 px-4 py-2 text-center text-xs text-blue-800 dark:text-blue-200 flex items-center justify-center gap-2">
            <Info size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              In the print dialog, choose <strong>Destination &gt; Save as PDF</strong> and ensure{" "}
              <strong>Paper Size &gt; A4</strong> with <strong>Margins &gt; Default</strong>.
            </span>
          </div>
        )}
      </header>

      {/* ================= RESUME DOCUMENT CANVAS ================= */}
      <main className="max-w-[210mm] w-full mx-auto px-4 sm:px-6 md:px-0 py-6 sm:py-10">
        <article className="resume-sheet bg-white text-gray-900 shadow-xl border border-slate-200/90 sm:rounded-sm p-8 sm:p-12 md:p-14 transition-all">
          {/* ================= HEADER SECTION ================= */}
          <header className="resume-section text-center pb-4 border-b-2 border-gray-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
              {header.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-800 tracking-wide mt-1 uppercase">
              {header.title}
            </p>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-gray-600 mt-2.5 leading-normal">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} className="text-gray-500" />
                <span>{header.location}</span>
              </span>
              <span className="text-gray-300">&bull;</span>

              <a
                href={`tel:${header.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <Phone size={12} className="text-gray-500" />
                <span>{header.phone}</span>
              </a>
              <span className="text-gray-300">&bull;</span>

              <a
                href={`mailto:${header.email}`}
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <Mail size={12} className="text-gray-500" />
                <span>{header.email}</span>
              </a>
              <span className="text-gray-300">&bull;</span>

              <a
                href={header.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors font-medium"
              >
                <Globe size={12} className="text-gray-500" />
                <span>rhpiyas.vercel.app</span>
              </a>
              <span className="text-gray-300">&bull;</span>

              <a
                href={header.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <GithubIcon className="w-3 h-3 text-gray-600 inline" />
                <span>github.com/rhpiyas</span>
              </a>
              <span className="text-gray-300">&bull;</span>

              <a
                href={header.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <LinkedinIcon className="w-3 h-3 text-gray-600 inline" />
                <span>linkedin.com/in/rhpiyas</span>
              </a>
              <span className="text-gray-300">&bull;</span>

              <a
                href={header.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-[10px]">CF:</span>
                <span>rh_piyas</span>
              </a>
            </div>
          </header>

          {/* ================= DYNAMIC SECTIONS WITH AMPLE BREATHING ROOM ================= */}
          <div className="mt-5 space-y-5 sm:space-y-6">
            {config.sectionOrder.map((sectionKey) => {
              // 1. Professional Summary
              if (sectionKey === "summary" && config.includeSummary) {
                return (
                  <section key="summary" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
                      Professional Summary
                    </h2>
                    <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed text-justify">
                      {summary}
                    </p>
                  </section>
                );
              }

              // 2. Education
              if (sectionKey === "education" && config.includeEducation) {
                return (
                  <section key="education" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
                      Education
                    </h2>
                    <div className="space-y-2.5">
                      {education.map((edu, idx) => (
                        <div key={idx} className="resume-entry flex flex-wrap items-baseline justify-between gap-x-3 text-xs sm:text-[13px]">
                          <div>
                            <span className="font-bold text-gray-900">{edu.degree} in {edu.field}</span>
                            <span className="text-gray-400 mx-2">&bull;</span>
                            <span className="text-gray-700">{edu.institution}</span>
                          </div>
                          <div className="flex items-baseline gap-2.5 text-xs">
                            {edu.gpa && (
                              <span className="font-bold text-gray-900">
                                CGPA: {edu.gpa}
                              </span>
                            )}
                            <span className="text-gray-500 font-medium">({edu.years})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              // 3. Technical Skills
              if (sectionKey === "skills" && config.includeSkills) {
                return (
                  <section key="skills" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
                      Technical Skills
                    </h2>
                    <div className="space-y-1.5 text-xs sm:text-[13px] text-gray-800">
                      {skills.map((cat, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-x-2 leading-relaxed">
                          <span className="font-bold text-gray-900 sm:min-w-[195px] shrink-0">
                            {cat.category}:
                          </span>
                          <span className="text-gray-700">{cat.skillsList}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              // 4. Featured Projects (Name, Links, and 1 Main Sentence — No cluttered tools/technologies list)
              if (sectionKey === "projects" && config.includeProjects) {
                return (
                  <section key="projects" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                      Featured Projects
                    </h2>
                    <div className="space-y-4">
                      {projects.map((proj) => (
                        <div key={proj.slug} className="resume-entry">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                            <h3 className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight">
                              {proj.name}
                            </h3>
                            <div className="flex items-center gap-3 text-xs">
                              {proj.github && (
                                <a
                                  href={proj.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
                                >
                                  <span>GitHub</span>
                                  <ExternalLink size={11} className="resume-link-icon" />
                                </a>
                              )}
                              {proj.liveDemo && (
                                <a
                                  href={proj.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink size={11} className="resume-link-icon" />
                                </a>
                              )}
                              {proj.researchPaper && (
                                <a
                                  href={proj.researchPaper}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
                                >
                                  <span>ResearchGate</span>
                                  <ExternalLink size={11} className="resume-link-icon" />
                                </a>
                              )}
                              {proj.demoVideo && (
                                <a
                                  href={proj.demoVideo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 hover:text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
                                >
                                  <span>Demo Video</span>
                                  <ExternalLink size={11} className="resume-link-icon" />
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="text-xs sm:text-[13px] text-gray-700 mt-1.5 leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              // 5. Experience & Leadership
              if (sectionKey === "experience" && config.includeExperience) {
                return (
                  <section key="experience" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
                      Experience & Leadership
                    </h2>
                    <div className="space-y-3">
                      {experience.map((exp, idx) => (
                        <div key={idx} className="resume-entry">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-xs sm:text-[13px]">
                            <div>
                              <span className="font-bold text-gray-900">{exp.role}</span>
                              <span className="text-gray-400 mx-2">&bull;</span>
                              <span className="text-gray-700 font-medium">{exp.organization}</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-600">
                              {exp.period}
                            </span>
                          </div>
                          {exp.bullets.map((bullet, bIdx) => (
                            <p key={bIdx} className="text-xs sm:text-[13px] text-gray-700 mt-1 leading-relaxed">
                              {bullet}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              // 6. Certifications & Honors
              if (sectionKey === "certifications" && config.includeCertifications) {
                return (
                  <section key="certifications" className="resume-section">
                    <h2 className="text-xs sm:text-[13px] font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
                      Honors & Certifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-[13px]">
                      {certifications.map((cert, idx) => (
                        <div key={idx} className="resume-entry flex items-baseline justify-between gap-x-2">
                          <span className="font-semibold text-gray-900 truncate">
                            {cert.title}
                          </span>
                          <span className="text-gray-500 text-xs shrink-0">
                            {cert.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              return null;
            })}
          </div>
        </article>
      </main>
    </div>
  );
}
