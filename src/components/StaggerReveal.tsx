"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
      }}
    >
      {children}
    </motion.div>
  );
}
