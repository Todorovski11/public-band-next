"use client";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { AnotherWavy } from "@/app/ui/another-wavy"; // ✅ Corrected import
import { LampEffect } from "@/app/ui/lamp-effect";
import { AnimatedShinyInput } from "@/app/ui/animated-shiny-input";

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
              Добредојдовте на страната на{" "}
              <span className="text-[#d73756] inline-block mt-2">
                Public Band
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Резервирајте ја вашата најдобра забава до сега со нашиот бенд.
            </p>

            <div className="flex justify-center gap-6">
            </div>
          </motion.div>
        </LampEffect>
      </div>

      {/* Animated Wave Section - Using `AnotherWavy.jsx` */}
      <AnotherWavy className="pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Најновиот сингл на Јана
          </h2>
          <p className="text-white/80 mb-8">
            Слушнете ја новата песна на Јана, нашиот најдобар вокал во бендот.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <button className="bg-[#d73756] text-white px-8 py-3 rounded-full font-bold uppercase">
              Stream Now
            </button>
          </motion.div>
        </div>
      </AnotherWavy>

      {/* Newsletter Section */}
      <div className="relative py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Резервирајте го бендот сега
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Испатете го вашиот маил до нашиот бенд, и ќе ве контактираме.
          </p>

          <div className="flex justify-center gap-4">
            <AnimatedShinyInput
              className="max-w-xl"
              placeholder="Enter your email"
              glowColor="#d73756"
            />
            <button className="bg-[#d73756] text-white px-6 py-3 rounded-full font-bold uppercase hover:bg-opacity-90 transition-all">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
