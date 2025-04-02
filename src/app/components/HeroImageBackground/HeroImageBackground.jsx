"use client";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  // IconBrandYoutube,
  // IconBrandTwitter,
} from "@tabler/icons-react";
import { AnotherWavy } from "@/app/ui/another-wavy"; // ✅ Ensure these exist
import { AnimatedShinyInput } from "@/app/ui/animated-shiny-input";

export function HeroImageBackground() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/heroImage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Social Icons (Left Side) */}
      <motion.div
        className="absolute md:fixed top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
{[
  { icon: IconBrandFacebook, link: "https://www.facebook.com/profile.php?id=61568452600040" },
  { icon: IconBrandInstagram, link: "https://www.instagram.com/public__band/" },
  // { icon: IconBrandYoutube, link: "https://youtube.com/@publicband" },
  // { icon: IconBrandTwitter, link: "https://twitter.com/publicband" },
].map(({ icon: Icon, link }, idx) => (
  <motion.a
    key={idx}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, color: "#d73756" }}
    className="text-white cursor-pointer"
  >
    <Icon size={32} />
  </motion.a>
))}

      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-32 mt-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Добредојдовте на страната на Public Band
          </h1>

          <div className="flex justify-center gap-6"></div>
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Резервирајте го бендот сега</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Испратете го вашиот маил до нашиот бенд, и ќе ве контактираме.
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
