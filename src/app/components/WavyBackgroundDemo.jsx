"use client";
import { WavyBackground } from "@/app/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="flex flex-col items-center justify-center text-center text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Hero Waves Are Cool
      </h2>
      <p className="text-lg md:text-xl mt-4 max-w-2xl">
        Leverage the power of canvas to create a beautiful hero section with dynamic wave animations.
      </p>
    </WavyBackground>
  );
}
