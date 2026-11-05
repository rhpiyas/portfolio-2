import Link from "next/link";
import { CheckCircle2, ArrowLeft, Home, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Rakib Hasan Piyas",
  description: "Thank you for reaching out to Rakib Hasan Piyas.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-transparent dark:bg-[#0a0f1a] text-slate-800 dark:text-slate-200 flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-200">
      {/* Dark mode background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none hidden dark:block" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none hidden dark:block" />

      <div className="relative z-10 max-w-md w-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0e1624]/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Message Received!
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
          Thank you for reaching out. Your message has been sent successfully. I
          appreciate you getting in touch and will get back to you as soon as
          possible.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-md shadow-blue-600/20"
          >
            <Home size={15} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700 hover:text-slate-900 dark:bg-slate-900 dark:hover:bg-slate-800 border dark:border-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <Mail size={15} />
            <span>Send Another</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

