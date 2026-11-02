import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhpiyas.vercel.app"),
  title: "Rakib Hasan Piyas | Software Engineering Student & Aspiring AI Developer",
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
    icon: "/images/common/favicon.png",
    apple: "/images/common/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhpiyas.vercel.app/",
    title: "Rakib Hasan Piyas | Software Engineering Student & Aspiring AI Developer",
    description:
      "Explore the projects, technical skills, achievements, and competitive programming journey of Rakib Hasan Piyas.",
    siteName: "Rakib Hasan Piyas Portfolio",
    images: [
      {
        url: "/images/profile/my-profile-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Rakib Hasan Piyas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Hasan Piyas | Software Engineering Student & Aspiring AI Developer",
    description:
      "Explore the projects, technical skills, achievements, and competitive programming journey of Rakib Hasan Piyas.",
    images: ["/images/profile/my-profile-img.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0a0f1a] text-slate-200 font-sans antialiased selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
