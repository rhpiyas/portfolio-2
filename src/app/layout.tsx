import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollGradientBackground from "@/components/ui/ScrollGradientBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhpiyas.vercel.app"),
  title: "Rakib Hasan Piyas | SWE",
  description:
    "Personal portfolio of Rakib Hasan Piyas. Software Engineering student at Daffodil International University passionate about software development, competitive programming, and Artificial Intelligence.",
  keywords: [
    "Rakib Hasan Piyas",
    "Piyas",
    "Software Engineer",
    "Competitive Programming",
    "Artificial Intelligence",
    "Next.js",
    "Portfolio",
    "Daffodil International University",
  ],
  authors: [{ name: "Rakib Hasan Piyas", url: "https://rhpiyas.vercel.app/" }],
  creator: "Rakib Hasan Piyas",
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhpiyas.vercel.app/",
    title: "Rakib Hasan Piyas | SWE",
    description:
      "Explore the projects, technical skills, achievements, and competitive programming journey of Rakib Hasan Piyas.",
    siteName: "Rakib Hasan Piyas Portfolio",
    images: [
      {
        url: "/images/profile/hero.webp",
        width: 1200,
        height: 630,
        alt: "Rakib Hasan Piyas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Hasan Piyas | SWE",
    description:
      "Explore the projects, technical skills, achievements, and competitive programming journey of Rakib Hasan Piyas.",
    images: ["/images/profile/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
                  document.documentElement.classList.remove('dark', 'apple');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else if (theme === 'apple') {
                    document.documentElement.classList.add('apple');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0a0f1a] dark:text-slate-200 font-sans antialiased selection:bg-blue-500/25 selection:text-blue-950 dark:selection:bg-blue-500/30 dark:selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <ScrollGradientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
