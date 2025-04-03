"use client";
import { motion } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { AnotherWavy } from "@/app/ui/another-wavy"; // ✅ Ensure these exist
import { AnimatedShinyInput } from "@/app/ui/animated-shiny-input";

export function HeroImageBackground() {
  const socialIcons = [
    { Icon: IconBrandFacebook, url: "https://www.facebook.com/profile.php?id=61568452600040" },
    { Icon: IconBrandInstagram, url: "https://www.instagram.com/public__band/" },
    { Icon: IconBrandYoutube, url: "#" },
    { Icon: IconBrandTwitter, url: "#" },
  ];

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
        className="absolute left-6 md:fixed top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {socialIcons.map(({ Icon, url }, idx) => (
          <motion.a
            key={idx}
            href={url}
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
          <h3 className="text-3xl font-bold mb-6 text-white">
            Резервирајте го бендот сега
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Испратете го вашиот маил до нашиот бенд, и ќе ве контактираме.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col md:flex-row justify-center gap-4 items-center w-full max-w-xl mx-auto"
          >
            {/* Hidden Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="9cd1d015-82dd-4bcd-8bcf-a0709df4fd04"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d73756] text-black"
            />

            {/* Hidden Honeypot Field (Spam Protection) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#d73756] text-white px-6 py-3 rounded-full font-bold uppercase hover:bg-opacity-90 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
