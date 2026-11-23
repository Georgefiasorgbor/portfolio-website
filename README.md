# Fiasorgbor George Etornam Kobla (Elroy) — Personal Portfolio Website

> Modern, high-performance personal portfolio website showcasing Network Engineering, Cybersecurity Research, and Software Development. Built with Next.js (Static Export), TypeScript, and Tailwind CSS.

---

## 🌐 Live URL
- **Production (Vercel):** [https://george-fiasorgbor.vercel.app](https://george-fiasorgbor.vercel.app) *(or your preferred Vercel domain upon linking)*
- **GitHub Pages:** [https://georgefiasorgbor.github.io/portfolio-website/](https://georgefiasorgbor.github.io/portfolio-website/)
- **Repository:** [https://github.com/Georgefiasorgbor/portfolio-website](https://github.com/Georgefiasorgbor/portfolio-website)

---

## ⚡ Tech Stack & Architecture
- **Framework:** Next.js 14 (App Router with `output: 'export'` for 100% static hosting)
- **Styling:** Tailwind CSS with dark-mode first cybersecurity & terminal theme
- **Icons:** Lucide React
- **CV Download:** Static PDF embedded at `/public/cv.pdf`
- **Data Layer:** Centralized in `src/data/content.ts` for instant zero-code content updates
- **Deployment Ready:** Automated GitHub Actions Pages deployment + Vercel integration

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/Georgefiasorgbor/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live site.

To test the optimized production build:
```bash
npm run build
```
The static export will be placed into the `out/` directory.

---

## ✏️ How to Update Website Content
All personal info, experiences, research, skills, and projects are centralized in:
📂 **`src/data/content.ts`**

You do not need to modify any TSX components. Simply edit `src/data/content.ts`:
- **Change Bio / Headline / Location:** Update `portfolioContent.personal`
- **Add / Edit Experience:** Update `portfolioContent.experience` array
- **Update Education & Research Focus:** Update `portfolioContent.education` array
- **Add / Modify Skills:** Update `portfolioContent.skillCategories`
- **Add New Projects:** Update `portfolioContent.projects` array (title, techStack, githubUrl, liveUrl)
- **Update Contact Form Endpoint:** Set `formspreeEndpoint` with your Formspree ID or keep empty for automatic `mailto:` client fallback.
- **Update CV:** Replace `public/cv.pdf` with your updated resume file.

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended — Free & 1 Minute Setup)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** -> **"Import"** next to `portfolio-website`.
3. Keep the default settings (Framework Preset: **Next.js**).
4. Click **"Deploy"**. Vercel will build and assign you a free `*.vercel.app` domain with automatic HTTPS and global edge CDN.
5. Every time you push to `main`, Vercel automatically deploys updates.

### Option 2: GitHub Pages (Free via Automated Workflow)
1. In your GitHub repository: [github.com/Georgefiasorgbor/portfolio-website](https://github.com/Georgefiasorgbor/portfolio-website)
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically trigger on every push to `main` and deploy the static site to:
   `https://georgefiasorgbor.github.io/portfolio-website/`

---

## 🔒 Privacy Compliance
In accordance with your privacy preferences, phone numbers and personal reference contact details are strictly excluded. Contact is channeled through your designated professional email (`georgefias01@gmail.com`) and professional social handles.
