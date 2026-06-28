"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const CERTIFICATIONS = [
  {
    title: "Sports Management: The Essentials",
    issuer: "Udemy",
    year: "Completed",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    description: "These certifications strengthened my understanding of sports operations, event planning, venue management, and practical industry workflows while complementing my academic background and portfolio projects.",
  },
  {
    title: "Sports Management: Gameday Operations",
    issuer: "Udemy",
    year: "Completed",
    color: "from-violet-500/20 to-violet-600/5",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    description: "These certifications strengthened my understanding of sports operations, event planning, venue management, and practical industry workflows while complementing my academic background and portfolio projects.",
  },
  {
    title: "Event Management",
    issuer: "Udemy",
    year: "Completed",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    description: "These certifications strengthened my understanding of sports operations, event planning, venue management, and practical industry workflows while complementing my academic background and portfolio projects.",
  },
];

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="certifications"
      label="Credentials"
      title="Certifications"
      subtitle="Continuous learning through industry-focused certifications in Sports Management, Event Management, and professional skill development."
    >
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className={`group glass-card ${cert.border} hover:shadow-lg rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-opacity-50`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}
              >
                <Award size={18} className={cert.accent} />
              </div>
              <div className="flex items-center gap-1">
                <BadgeCheck size={14} className="text-blue-400" />
                <span className="text-[11px] text-muted-foreground">{cert.year}</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-blue-300 transition-colors">
              {cert.title}
            </h3>
            <p className={`text-xs font-medium mb-3 ${cert.accent}`}>{cert.issuer}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {cert.description}
            </p>

            <button className="mt-4 flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={11} />
              View Credential
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}