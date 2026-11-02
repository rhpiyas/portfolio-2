# Rakib Hasan Piyas — Developer Portfolio

A modern, high-performance personal developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with a premium dark theme, sophisticated micro-interactions, responsive layouts, and clean component architecture.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Site Generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Form Handling:** FormSubmit AJAX integration with real-time UI feedback
- **Deployment:** [Vercel](https://vercel.com/) (Fully compatible)

---

## 📁 Project Architecture

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/            # Original profile portraits
│   │   ├── projects/           # 7 project screenshot folders
│   │   ├── achievements/       # Contest & course certificates
│   │   └── common/             # Icons, hero background, favicons
│   └── resume/
│       └── README.txt          # Place your 'resume.pdf' here
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata & fonts
│   │   ├── page.tsx            # Main single-page portfolio
│   │   ├── globals.css         # Global styles & Tailwind v4 imports
│   │   ├── thank-you/
│   │   │   └── page.tsx        # Contact submission thank-you page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx    # Dynamic static project case studies
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navbar with active section detection
│   │   │   └── Footer.tsx      # Footer with back-to-top button
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with CTAs & quick stats
│   │   │   ├── About.tsx       # Bio, academic status & metric highlights
│   │   │   ├── Projects.tsx    # Filterable project gallery
│   │   │   ├── Skills.tsx      # Clean categorized technology chips
│   │   │   ├── Education.tsx   # Formal education timeline & GPA
│   │   │   ├── Experience.tsx  # Competitive programming & contest track record
│   │   │   ├── Achievements.tsx# Verified certifications & contest honors
│   │   │   └── Contact.tsx     # Direct contact cards & FormSubmit integration
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx # Animated project showcase card
│   │   │   └── ProjectFilter.tsx # Category filter pills
│   │   └── ui/
│   │       ├── SectionHeading.tsx # Reusable section title with accent line
│   │       ├── AnimatedSection.tsx # Scroll-reveal wrapper
│   │       └── Icons.tsx       # Exact brand SVGs (GitHub, LinkedIn, Instagram)
│   ├── data/                   # 💡 CENTRALIZED DATA FILES (Edit your data here!)
│   │   ├── profile.ts          # Name, bio, email, socials, stats, resume path
│   │   ├── projects.ts         # Complete data for all 7 projects
│   │   ├── skills.ts           # Categorized programming skills & tools
│   │   ├── education.ts        # Degree, institutions, years, GPA
│   │   └── achievements.ts     # Certifications, contests, timeline details
│   └── lib/
│       ├── animations.ts       # Framer Motion animation variants
│       └── hooks.ts            # Active section observer, reduced motion, smooth scroll
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ How to Run Locally

### 1. Prerequisites
Ensure you have Node.js (v18.18 or higher recommended) and npm installed.

### 2. Install Dependencies
```bash
cd portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 How to Build for Production

To create an optimized, production-ready static export:

```bash
npm run build
```

To test the production build locally:
```bash
npm run start
```

---

## 🌐 How to Deploy to Vercel

1. Push this repository to your GitHub account (e.g. `rhpiyas/portfolio`).
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New > Project**.
3. Import your repository.
4. Set the **Root Directory** to `portfolio` (if this subfolder is inside a monorepo) or leave as root `./` if pushing the `portfolio` folder directly as the repo root.
5. Framework Preset will automatically detect **Next.js**.
6. Click **Deploy**. Vercel will build and assign your production domain.

---

## ✏️ How to Update Your Information

All portfolio content is decoupled from UI components and stored in clean TypeScript data files in `src/data/`:

| What to Update | File to Edit |
|---|---|
| **Personal Info, Bio, Social Links, Email** | `src/data/profile.ts` |
| **Projects (Add/Edit projects, descriptions, links)** | `src/data/projects.ts` |
| **Skills & Technologies** | `src/data/skills.ts` |
| **Education & Current CGPA** | `src/data/education.ts` |
| **Certifications, Contests & Experience** | `src/data/achievements.ts` |
| **Resume PDF File** | Put `resume.pdf` in `public/resume/resume.pdf` |
| **New Images/Screenshots** | Add to `public/images/` and reference the path |

---

## 📄 License
© 2026 Rakib Hasan Piyas. All Rights Reserved.
