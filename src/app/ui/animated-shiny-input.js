// src/components/ui/animated-shiny-input.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utils/cn";

const AnimatedShinyInput = React.forwardRef(
  ({ className, placeholder, glowColor = "#d73756", ...props }, ref) => {
    return (
      <div className={cn("relative w-full", className)}>
        <motion.div
          initial={{
            background: `linear-gradient(90deg, ${glowColor} 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, ${glowColor} 100%)`,
          }}
          animate={{
            background: `linear-gradient(90deg, ${glowColor} 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, ${glowColor} 100%)`,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute inset-0 rounded-full blur-sm"
        />

        <div className="relative">
          <input
            ref={ref}
            placeholder={placeholder}
            className={cn(
              "w-full rounded-full border border-white/20 bg-black px-6 py-4 text-white backdrop-blur-sm",
              "transition-all duration-300 focus:outline-none focus:ring-2",
              "placeholder:text-white/50",
              className
            )}
            {...props}
          />
        </div>
      </div>
    );
  }
);

AnimatedShinyInput.displayName = "AnimatedShinyInput";

export { AnimatedShinyInput };