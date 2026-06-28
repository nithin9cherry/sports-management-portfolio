"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";

const ROLES = ["Sports Management", "Event Operations", "Sports Analytics"];

export function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/60 to-background pointer-events-none" />

      {/* Blue glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Animated ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/5 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/[0.03] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Open to Opportunities | Expected Graduation: 2027
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-foreground">Nithin</span>
            <br />
            <span className="text-gradient">Pillalamarri</span>
          </motion.h1>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8"
          >
            {ROLES.map((role, i) => (
              <span key={role} className="flex items-center gap-2 sm:gap-3">
                <span className="text-base sm:text-lg font-medium text-muted-foreground">
                  {role}
                </span>
                {i < ROLES.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-blue-500/60" />
                )}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          >
            B.Tech CSE (AI) student at Gokaraju Rangaraju Institute of Engineering and Technology with a growing passion for Sports Management, Event Operations, and Sports Analytics. Combining analytical thinking, project coordination, and technology to create data-driven solutions for the sports industry.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="group flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <FolderOpen size={16} />
              View Projects
              <ArrowDown
                size={14}
                className="group-hover:translate-y-0.5 transition-transform"
              />
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 glass-card hover:border-blue-500/30 text-foreground font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-muted-foreground/50"
            >
              <span className="text-[10px] tracking-widest uppercase">Scroll</span>
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}