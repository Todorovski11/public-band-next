// src/components/ui/lamp-effect.tsx
import React from "react";

export const LampEffect = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-40 bg-gradient-to-b from-[#d73756] to-transparent opacity-20 blur-2xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};