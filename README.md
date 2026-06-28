# Nithin Pillalamarri — Portfolio

A premium, dark-mode personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

1. Push your code to GitHub.
2. Visit [vercel.com](https://vercel.com) and import your repository.
3. Vercel will auto-detect Next.js and deploy with zero configuration.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page composition
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky navigation with scroll detection
│   │   ├── Footer.tsx         # Simple footer
│   │   └── ScrollProgress.tsx # Top scroll progress bar
│   ├── sections/
│   │   ├── HeroSection.tsx        # Landing hero
│   │   ├── AboutSection.tsx       # Bio + timeline
│   │   ├── SkillsSection.tsx      # Skills grid with progress bars
│   │   ├── InternshipSection.tsx  # Internship timeline card
│   │   ├── ProjectsSection.tsx    # 5 project cards
│   │   ├── CertificationsSection.tsx # Cert grid
│   │   ├── ResumeSection.tsx      # Resume preview + download
│   │   └── ContactSection.tsx     # Contact form + social links
│   └── ui/
│       └── SectionWrapper.tsx     # Reusable animated section wrapper
└── lib/
    └── utils.ts           # clsx + tailwind-merge utility
```

## Customization

### Updating Content

All content is defined inline in each section component. To update:

- **Personal info**: Edit `HeroSection.tsx`
- **Bio & timeline**: Edit `AboutSection.tsx`
- **Skills**: Edit `SkillsSection.tsx`
- **Internship**: Edit `InternshipSection.tsx`
- **Projects**: Edit the `PROJECTS` array in `ProjectsSection.tsx`
- **Certifications**: Edit the `CERTIFICATIONS` array in `CertificationsSection.tsx`
- **Social links**: Edit `ContactSection.tsx` and `Footer.tsx`

### Adding a Resume PDF

Place your resume at `/public/resume.pdf` and the download/preview buttons will work automatically.

### Changing Colors

The accent color (Electric Blue) is defined as CSS variables in `globals.css` and Tailwind config. Update `--primary` and blue color references to change the accent.

## Performance

- Server-side rendering with Next.js App Router
- Optimized fonts via `next/font`
- Lazy-loaded animations (only animate on viewport entry)
- Minimal JavaScript bundle

## License

MIT
