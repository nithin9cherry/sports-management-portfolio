"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground">
              <span className="text-blue-500">NP</span> Nithin Pillalamarri
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Sports Management · Event Operations · Analytics
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nithin@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-muted-foreground hover:text-blue-400 hover:bg-blue-500/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {year} · Built with
            <Heart size={11} className="text-blue-500 fill-blue-500 mx-0.5" />
            passion
          </p>
        </div>
      </div>
    </footer>
  );
}
