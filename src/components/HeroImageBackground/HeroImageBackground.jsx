"use client";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { WavyBackground } from "@/ui/wavy-background";
import { LampEffect } from "@/ui/lamp-effect";
import { AnimatedShinyInput } from "@/ui/animated-shiny-input";

export function HeroImageBackground() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url('/assets/heroImage.jpg')] bg-cover bg-center"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Social Icons (Left Side) */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {[
          IconBrandFacebook,
          IconBrandInstagram,
          IconBrandYoutube,
          IconBrandTwitter,
        ].map((Icon, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.2, color: "#d73756" }}
            className="text-white cursor-pointer"
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </motion.div>

      {/* Logo (Right Side) */}
      <motion.div
        className="fixed right-6 top-6 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src="/assets/logo.png"
          alt="Public Band Logo"
          className="w-32 h-32 object-contain filter drop-shadow-lg"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-32">
        <LampEffect>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-7xl font-bold mb-6 text-white">
              Welcome to{" "}
              <span className="text-[#d73756] inline-block mt-2">
                Public Band
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Discover amazing music, connect with fans, and explore new sounds.
            </p>

            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-all"
              >
                Join Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d73756] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-all border-2 border-white"
              >
                Listen Live
              </motion.button>
            </div>
          </motion.div>
        </LampEffect>
      </div>

      {/* Animated Wave Section */}
      <WavyBackground className="pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">
            New Album Out Now
          </h2>
          <p className="text-white/80 mb-8">
            Experience the raw energy of our latest studio recording. Available
            on all platforms.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <button className="bg-[#d73756] text-white px-8 py-3 rounded-full font-bold uppercase">
              Stream Now
            </button>
          </motion.div>
        </div>
      </WavyBackground>

      {/* Newsletter Section */}
      <div className="relative py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Join the Revolution
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get exclusive updates, early access to tickets, and band news
            straight to your inbox.
          </p>

          <div className="flex justify-center gap-4">
            <AnimatedShinyInput
              className="max-w-xl"
              placeholder="Enter your email"
              glowColor="#d73756"
            />
            <button className="bg-[#d73756] text-white px-6 py-3 rounded-full font-bold uppercase hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
