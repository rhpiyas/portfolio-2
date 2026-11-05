"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleUrlParams = () => {
      if (typeof window === "undefined") return;

      let params = new URLSearchParams(window.location.search);
      if (!params.get("project") && window.location.hash.includes("?")) {
        const hashQuery = window.location.hash.split("?")[1];
        params = new URLSearchParams(hashQuery);
      }

      const projectName = params.get("project");
      if (projectName) {
        setFormData((prev) => ({
          ...prev,
          subject: `Discuss about ${projectName}`,
          message: `Hi Piyas,\n\nI was reviewing your project "${projectName}" on your portfolio and would like to discuss more about the project.\n\n[Your discussion / questions here...]\n\nLooking forward to hearing from you!`,
        }));

        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    };

    handleUrlParams();
    window.addEventListener("popstate", handleUrlParams);
    return () => window.removeEventListener("popstate", handleUrlParams);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.formSubmitEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: `New Portfolio Message: ${formData.subject || "Contact Form"}`,
            message: formData.message,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          "Unable to send message directly. Please send an email to " +
            profile.email
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please email directly at " + profile.email
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0a0f1a] relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Whether you have an opportunity, project collaboration, or question, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          {/* Left Column: Contact Information */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-0"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I am currently open to internships, software development
                collaborations, and AI research projects. Drop a message or reach
                out across any of my communication channels.
              </p>
            </div>

            {/* Direct Contact Items */}
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1624] border border-slate-800/80 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1624] border border-slate-800/80 hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1624] border border-slate-800/80 hover:border-blue-500/40 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0e1624] border border-slate-800/80 hover:border-blue-500/40 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Availability</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Open for Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-2xl bg-[#0e1624] border border-slate-800/80 shadow-xl">
              <h4 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Fill in the details below and I&apos;ll get back to you promptly.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-start gap-3 text-emerald-300 text-sm">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">
                      Message Sent Successfully!
                    </strong>
                    <span>
                      Thank you for reaching out. I will respond to your email
                      shortly.
                    </span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-800/50 flex items-start gap-3 text-rose-300 text-sm">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Notice</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/20 cursor-pointer disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
