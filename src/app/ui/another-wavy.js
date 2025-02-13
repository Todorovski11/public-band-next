"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

export function AnotherWavy({ className, children }) {
  // Create 5 waves with staggered animations
  const waves = Array(5).fill(null);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Wave container */}
      <div className="absolute inset-0 flex flex-col gap-4 justify-center">
        {waves.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1, opacity: 0.1 }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="w-full border-t border-white/20"
          />
        ))}
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
