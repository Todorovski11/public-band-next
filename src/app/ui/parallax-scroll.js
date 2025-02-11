"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const ParallaxScroll = ({ images, className }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end start"], // ✅ Fix scroll behavior
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]); // ✅ Reduced movement
  const translateSecond = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const translateThird = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("w-full flex justify-center items-start")}
      style={{
        height: "500px", // ✅ Shows only the first row
        overflowY: "auto", // ✅ Enable scrolling
        paddingTop: "20px", // ✅ Ensures the first row is visible
      }}
      ref={scrollRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-8 px-8">
        <div className="grid gap-8">
          {firstPart.map((el, idx) => (
            <motion.div key={`grid-1-${idx}`} style={{ y: translateFirst }}>
              <Image
                src={el}
                className="h-64 w-full object-cover rounded-lg"
                height={300}
                width={400}
                alt="gallery image"
                priority
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8">
          {secondPart.map((el, idx) => (
            <motion.div key={`grid-2-${idx}`} style={{ y: translateSecond }}>
              <Image
                src={el}
                className="h-64 w-full object-cover rounded-lg"
                height={300}
                width={400}
                alt="gallery image"
                priority
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-8">
          {thirdPart.map((el, idx) => (
            <motion.div key={`grid-3-${idx}`} style={{ y: translateThird }}>
              <Image
                src={el}
                className="h-64 w-full object-cover rounded-lg"
                height={300}
                width={400}
                alt="gallery image"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxScroll;
