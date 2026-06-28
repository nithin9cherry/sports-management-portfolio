"use client";

import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { InternshipSection } from "@/components/sections/InternshipSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InternshipSection />
      <ProjectsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
