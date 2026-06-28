"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Trophy,
  BarChart2,
  Users,
  Building2,
  Megaphone,
  PresentationIcon,
  Network,
  FileSpreadsheet,
  Handshake,
  Search,
  Clock,
  Briefcase,
  Layers,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const SKILL_CATEGORIES = [
  {
    category: "Event & Operations",
    skills: [
      { name: "Event Planning", icon: Calendar, level: 80 },
      { name: "Vendor Management", icon: Handshake, level: 80 },
      { name: "Vendor Outreach", icon: Search, level: 82 },
      { name: "Project Coordination", icon: Network, level: 82 },
      { name: "Sports Operations", icon: Trophy, level: 75 },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Excel", icon: FileSpreadsheet, level: 78 },
      { name: "Google Sheets", icon: Layers, level: 78 },
      { name: "Data Analysis", icon: BarChart2, level: 72 },
      { name: "Presentation & Reporting", icon: PresentationIcon, level: 80 },
    ],
  },
  {
    category: "Leadership & Strategy",
    skills: [
      { name: "Communication", icon: Megaphone, level: 85 },
      { name: "Team Collaboration", icon: Users, level: 85 },
      { name: "Leadership", icon: Building2, level: 75 },
      { name: "Time Management", icon: Clock, level: 80 },
      { name: "Problem Solving", icon: Briefcase, level: 82 },
    ],
  },
];

function SkillCard({
  name,
  icon: Icon,
  level,
  delay,
  inView,
}: {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  level: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card glass-card-hover rounded-xl p-4 group cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-colors">
          <Icon size={16} className="text-blue-400" />
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-[10px] text-muted-foreground">{level}%</span>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="skills"
      label="Capabilities"
      title="Skills & Expertise"
      subtitle="A growing skill set developed through Computer Science education, hands-on internship experience, and sports management projects, combining technical problem-solving with event operations and data-driven decision-making."
      className="bg-secondary/20"
    >
      <div ref={ref} className="space-y-12">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div key={cat.category}>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-4 h-px bg-blue-500/50" />
              {cat.category}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cat.skills.map((skill, skillIdx) => (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  delay={catIdx * 0.1 + skillIdx * 0.07}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}