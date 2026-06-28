"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const RESPONSIBILITIES = [
  {
    title: "Vendor Research & Sourcing",
    description: "Identified and evaluated potential vendors across multiple categories, assessing alignment with standards and operational requirements.",
  },
  {
    title: "Vendor Outreach & Follow-ups",
    description: "Initiated and maintained professional communication channels with vendors, managing routine outreach workflows and timelines.",
  },
  {
    title: "Vendor Database Management",
    description: "Maintained a structured repository of vendor details, contracts, and contact systems to keep records accurate and accessible.",
  },
  {
    title: "Excel & Google Sheets Tracking",
    description: "Utilized spreadsheets to organize project milestones, tracking data carefully to ensure smooth operational workflows.",
  },
  {
    title: "Event Coordination Support",
    description: "Assisted the core team in organizing event logistics, handling administrative timelines, and supporting backend operations.",
  },
  {
    title: "Presentation Preparation",
    description: "Developed and structured clear summary presentations and documentation for internal project reviews and team briefings.",
  },
  {
    title: "Team Collaboration",
    description: "Worked closely with team members across different workflows to support multi-faceted event goals and shared deadlines.",
  },
  {
    title: "Vendor Communication",
    description: "Served as a reliable link for clear information exchange, ensuring requirements were understood by external partners.",
  },
  {
    title: "Project Coordination",
    description: "Monitored individual task timelines, synchronized updates, and supported operational schedules seamlessly.",
  },
  {
    title: "Operational Support",
    description: "Contributed foundational day-to-day assistance to ensure logistics and planning activities aligned with overall goals.",
  },
];

export function InternshipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="internship"
      label="Experience"
      title="Professional Experience"
      subtitle="Hands-on internship experience in vendor relations, event coordination, and operational support, developing practical skills in sports and event management."
    >
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-8 border-b border-border/50 bg-blue-500/5">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Building2 size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Vendor Relations &amp; Outreach Intern
                  </h3>
                  <p className="text-blue-400 font-medium mt-0.5">
                    Exquisite Unions by Krista
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      September 2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Vendor Relations", "Event Operations", "Project Coordination"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              During my internship at Exquisite Unions by Krista, I supported vendor sourcing, outreach, database management, and event coordination activities. The experience strengthened my communication, organizational, and project coordination skills while providing practical exposure to event operations.
            </p>
          </div>

          {/* Responsibilities grid */}
          <div className="p-8">
            <h4 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-blue-500/50" />
              Key Responsibilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESPONSIBILITIES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                  className="flex gap-3 p-4 rounded-xl bg-white/[0.02] border border-border/40 hover:border-blue-500/20 transition-colors"
                >
                  <CheckCircle2
                    size={16}
                    className="text-blue-400 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}