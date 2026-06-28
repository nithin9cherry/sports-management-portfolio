"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const TIMELINE = [
  {
    year: "Academic",
    title: "Gokaraju Rangaraju Institute of Engineering and Technology",
    description: "Pursuing a B.Tech in CSE (Artificial Intelligence), cultivating a strong analytical and technological foundation with an expected graduation in 2027.",
    icon: GraduationCap,
  },
  {
    year: "Experience",
    title: "Vendor Relations & Outreach Intern",
    description: "Gained hands-on professional experience at Exquisite Unions by Krista, managing databases, managing communication, and coordinating outreach.",
    icon: TrendingUp,
  },
  {
    year: "Career Interests",
    title: "Sports Operations & Analytics",
    description: "Deepening knowledge across industry-oriented domains including Sports Management, Event Operations, and Sports Analytics.",
    icon: Lightbulb,
  },
  {
    year: "Career Goal",
    title: "Building Impact",
    description: "Seeking opportunities to combine technical engineering precision, project coordination, and data-driven solutions within the sports industry.",
    icon: Target,
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="about"
      label="Background"
      title="About Me"
      subtitle="A tech-driven student passionate about combining analytical thinking, project coordination, and technology to create data-driven solutions for the sports industry."
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              I&apos;m <span className="text-blue-400 font-semibold">Nithin Pillalamarri</span>, a B.Tech CSE (Artificial Intelligence) student at Gokaraju Rangaraju Institute of Engineering and Technology with a growing passion for Sports Management, Event Operations, and Sports Analytics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My academic background in Computer Science has strengthened my analytical thinking and problem-solving skills, while my internship experience introduced me to sports event operations, vendor coordination, and project management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether I&apos;m managing project data, coordinating vendor communication, or developing sports operations projects, I enjoy solving problems through structured planning, teamwork, and analytical thinking.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "3", label: "Core Focus Areas" },
              { value: "2027", label: "Graduation Year" },
              { value: "1", label: "Internship" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="glass-card rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-blue-400">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-5"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                </div>
                <div className="pb-2">
                  <div className="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}