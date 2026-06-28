"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Globe } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const SOCIAL = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nithinpillalamarri31429@gmail.com", // Replace with your actual email address
    description: "Reach out for internships, collaborations, or professional opportunities.",
    btnText: "Send Email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nithin-p-12b8b0319/", // Replace with your actual LinkedIn URL
    description: "Connect with me professionally and explore my career journey",
    btnText: "View LinkedIn",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nithin9cherry", // Replace with your actual GitHub URL
    description: "Explore my portfolio projects, documentation, presentations, and project repositories.",
    btnText: "Visit GitHub",
  },
  {
    icon: Globe,
    label: "Portfolio Website",
    href: "#", // Replace with your final Vercel deployment link
    description: "Explore my complete Sports Management portfolio.",
    btnText: "Open Portfolio",
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API form submission timeline
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's Connect"
      subtitle="I&apos;m always open to discussing sports management, event operations, internships, collaborations, and new opportunities. Feel free to connect with me through any of the platforms below."
    >
      <div ref={ref} className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Social Cards & Availability Badge */}
          <div className="lg:col-span-2 space-y-3">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Internship Opportunities</span>
              </div>
            </motion.div>

            {SOCIAL.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-3 p-4 glass-card rounded-xl hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-blue-300 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-blue-400 group-hover:text-blue-300 flex justify-end items-center gap-1 transition-colors pt-1">
                  {item.btnText} &rarr;
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 space-y-4">
              <div>
                <h3 className="text-base font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-4">
                  Have a question, opportunity, or collaboration in mind? I&apos;d love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="type"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about an opportunity, project, or just say hello..."
                  className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 text-sm"
              >
                {status === "loading" && (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === "success" && <CheckCircle size={15} />}
                {status === "error" && <AlertCircle size={15} />}
                {status === "idle" && <Send size={15} />}
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Closing Context Message and Integrated Footer Structure */}
        <div className="pt-8 border-t border-border/40 text-center space-y-8">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Thank you for visiting my portfolio. I look forward to connecting with professionals and organizations in Sports Management, Event Operations, and Sports Analytics.
          </p>
          
          <div className="space-y-2 pt-4">
            <h4 className="text-base font-bold text-foreground">Nithin Pillalamarri</h4>
            <p className="text-xs text-blue-400 font-medium">
              Sports Management &bull; Event Operations &bull; Sports Analytics
            </p>
            <p className="text-[10px] text-muted-foreground pt-4 select-none">
              &copy; 2026 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}