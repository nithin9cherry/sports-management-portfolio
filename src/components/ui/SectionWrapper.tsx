"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  label?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  className,
  children,
  label,
  title,
  subtitle,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-24 md:py-32 relative", className)}
    >
      <div className="section-container">
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {label && <p className="section-label mb-3">{label}</p>}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
