"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Eye, FileText, Briefcase, GraduationCap, Star, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const RESUME_HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech in Computer Science Engineering (AI)",
    sub: "Gokaraju Rangaraju Institute of Engineering and Technology · 2027",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Vendor Relations & Outreach Intern",
    sub: "Exquisite Unions by Krista · September 2025",
  },
  {
    icon: Star,
    label: "Core Skills",
    value: "Event Planning · Sports Operations · Analytics",
    sub: "14 core industry competencies",
  },
  {
    icon: FileText,
    label: "Certifications",
    value: "3 Industry Certifications",
    sub: "Sports Management & Event Management via Udemy",
  },
];

export function ResumeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="resume"
      label="Resume"
      title="Resume"
      subtitle="Download my latest resume to explore my education, internship experience, portfolio projects, certifications, and skills in Sports Management, Event Operations, and Sports Analytics."
      className="bg-secondary/20"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Preview / CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full justify-between">
            {/* Faux resume preview */}
            <div className="relative bg-gradient-to-br from-blue-500/5 to-transparent p-8 border-b border-border/50 flex-1">
              {/* Badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Updated 2026
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Professional Resume</h3>
                  <p className="text-sm text-blue-400 font-medium mt-0.5">
                    Nithin Pillalamarri
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                My resume highlights my academic journey, practical internship experience, sports management portfolio projects, professional certifications, and technical skills. It reflects my interest in Sports Management, Event Operations, Sports Analytics, and Project Coordination.
              </p>

              {/* Decorative lines representing resume content layout */}
              <div className="mt-6 space-y-3 select-none pointer-events-none opacity-40">
                {[
                  { w: "w-3/4", label: "Experience" },
                  { w: "w-full", label: null },
                  { w: "w-2/3", label: "Education" },
                  { w: "w-full", label: null },
                  { w: "w-4/5", label: "Skills" },
                ].map((item, i) => (
                  <div key={i}>
                    {item.label && (
                      <div className="text-[9px] text-blue-400 font-semibold tracking-widest uppercase mb-1 mt-2">
                        {item.label}
                      </div>
                    )}
                    <div className={`h-1.5 ${item.w} bg-white/5 rounded-full`} />
                  </div>
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent rounded-b-none pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col sm:flex-row gap-3 bg-background/20 backdrop-blur-sm">
              <a
                href="/resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 text-sm"
              >
                <Download size={15} />
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 glass-card hover:border-blue-500/30 text-foreground font-medium rounded-xl transition-all duration-200 text-sm"
              >
                <Eye size={15} />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Highlights & Opportunity Callout */}
        <div className="lg:col-span-2 flex flex-col justify-between gap-3">
          <div className="space-y-3">
            {RESUME_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-start gap-3 hover:border-blue-500/20 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground mt-0.5">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Looking for opportunities callout card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-card rounded-xl p-4 border border-blue-500/10 bg-blue-500/[0.02]"
          >
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <span>Current Objective</span>
              <ArrowUpRight size={14} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Looking for internships and entry-level opportunities in Sports Management, Event Operations, and Sports Analytics.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
