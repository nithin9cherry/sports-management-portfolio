"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Github,
  ExternalLink,
  Trophy,
  BarChart2,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const PROJECTS = [
  {
    id: 1,
    icon: Trophy,
    color: "from-blue-500/20 to-blue-600/5",
    accentColor: "text-blue-400",
    borderHover: "hover:border-blue-500/40",
    title: "IPL Stadium Operations Blueprint",
     pdf: "/projects/IPL_Stadium_Operations.pdf",
    description:
      "Designed a complete match-day operations blueprint for an IPL fixture at Rajiv Gandhi International Cricket Stadium, Hyderabad. Covers stadium operations, crowd management, volunteer deployment, security planning, vendor coordination, emergency response, and operational budgeting.",
    tech: ["Microsoft Excel", "Microsoft PowerPoint", "Project Planning", "Stadium Operations"],
    skills: ["Stadium Operations", "Crowd Management", "Event Logistics", "Operations Planning", "Budget Management"],
  },
  {
    id: 2,
    icon: Calendar,
    color: "from-violet-500/20 to-violet-600/5",
    accentColor: "text-violet-400",
    borderHover: "hover:border-violet-500/40",
    title: "Pro Kabaddi Hyderabad Event Management Plan",
     pdf: "/projects/pro-kabaddi-event-plan.pdf",
    description:
      "Created a complete event management plan for hosting a Pro Kabaddi League event in Hyderabad. Developed operational workflows covering vendor coordination, staff deployment, budgeting, scheduling, and overall event execution.",
    tech: ["Microsoft Word", "Microsoft Excel", "Project Planning", "Event Management"],
    skills: ["Event Management", "Vendor Relations", "Team Coordination", "Planning", "Budgeting"],
  },
  {
    id: 3,
    icon: BarChart2,
    color: "from-emerald-500/20 to-emerald-600/5",
    accentColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
    title: "IPL Sports Analytics Dashboard",
     pdf: "/projects/pro-kabaddi-event-plan.pdf", 
    description:
      "Developed a sports analytics dashboard to evaluate IPL team and player performance through statistical analysis and interactive visualizations. Focuses on converting match data into meaningful insights for decision-making.",
    tech: ["Microsoft Excel", "Google Sheets", "Data Analysis", "Sports Analytics"],
    skills: ["Sports Analytics", "Excel", "Data Visualization", "Dashboard Design", "Performance Analysis"],
  },
  {
    id: 4,
    icon: TrendingUp,
    color: "from-amber-500/20 to-amber-600/5",
    accentColor: "text-amber-400",
    borderHover: "hover:border-amber-500/40",
    title: "Sports Sponsorship & Marketing Proposal",
     pdf: "/projects/sports-sponsorship.pdf",
    description:
      "Prepared a sponsorship and marketing proposal for the Hyderabad Corporate Cricket League, including sponsorship packages, revenue forecasting, brand activation strategies, and marketing initiatives aimed at attracting partners and maximizing event value.",
    tech: ["Microsoft PowerPoint", "Microsoft Word", "Sponsorship", "Data Analysis"],
    skills: ["Sponsorship Management", "Marketing", "Revenue Planning", "Business Strategy", "Presentation Design"],
  },
  {
    id: 5,
    icon: Users,
    color: "from-rose-500/20 to-rose-600/5",
    accentColor: "text-rose-400",
    borderHover: "hover:border-rose-500/40",
    title: "Hyderabad Marathon Operations & Risk Management",
     pdf: "/projects/hyderabad-marathon.pdf",
    description:
      "Designed an operational management plan for the Hyderabad City Marathon, covering route planning, resource allocation, operational logistics, risk assessment, budgeting, and sustainability practices to ensure a safe and efficient sporting event.",
    tech: ["Microsoft Excel", "Project Planning", "Risk Management", "Data Analysis"],
    skills: ["Risk Management", "Operations Planning", "Resource Allocation", "Event Logistics", "Sustainability"],
  },
];

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group glass-card ${project.borderHover} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 flex flex-col`}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative w-16 h-16 rounded-2xl bg-background/60 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <Icon size={28} className={project.accentColor} />
        </div>
        <div className="absolute top-4 right-4 text-xs font-mono text-white/20 font-semibold">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            Tools & Tech
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[11px] bg-white/5 text-muted-foreground rounded border border-border/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-5">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            Skills Developed
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <span
                key={s}
                className={`px-2 py-0.5 text-[11px] bg-blue-500/5 border border-blue-500/15 rounded ${project.accentColor}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
       <div className="flex justify-center pt-4 border-t border-border/40">
         <a
  href={project.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium"
>
  <ExternalLink size={12} />
  View Project Report
</a>
         
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      id="projects"
      label="Work"
      title="Featured Sports Management Projects"
      subtitle="Practical projects focused on sports operations, event management, stadium planning, sponsorship strategy, and sports analytics, demonstrating my ability to solve real-world management challenges."
      className="bg-secondary/20"
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}