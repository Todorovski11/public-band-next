"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Glowing Particle Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d73756] rounded-full"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Split Screen Layout */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="relative z-20 p-8 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#d73756] to-white bg-clip-text text-transparent">
              PUBLIC BAND
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-8">
              Revolutionizing rock music with raw energy and unfiltered passion
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d73756] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide border-2 border-transparent hover:border-white transition-all"
              >
                New Album
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide border-2 border-white hover:bg-[#d73756]/20 transition-all"
              >
                Tour Dates
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Interactive Visual */}
        <div
          className="relative border-l-2 border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Vinyl Record */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#d73756] to-black border-8 border-white/20 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Floating Logo */}
          <motion.div
            className="absolute top-20 left-8"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <img
              src="/assets/logo.png"
              alt="Band Logo"
              className="w-32 h-32 object-contain filter drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Scrolling Timeline */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#d73756]/10 backdrop-blur-sm border-t-2 border-white/10">
        <div className="flex overflow-x-auto gap-8 p-4">
          {["Skopje", "Bitola", "Tokyo", "Berlin"].map((city, index) => (
            <motion.div
              key={city}
              className="flex-shrink-0 bg-black/30 p-4 rounded-lg border border-white/10 cursor-pointer hover:border-[#d73756] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-white font-bold">{city}</p>
              <p className="text-[#d73756] text-sm">Oct {15 + index}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed top-8 right-8 flex gap-4 z-30">
        {["Facebook", "Instagram", "YouTube", "Twitter"].map((platform) => (
          <motion.a
            key={platform}
            href="#"
            className="text-white/50 hover:text-[#d73756] transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            {platform}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
