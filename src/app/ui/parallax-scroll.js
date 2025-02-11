"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("h-[50rem] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-12 py-60 px-12">
        <div className="grid gap-12">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-xl"
                height={500}
                width={500}
                alt="gallery image"
                priority
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-12">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-xl"
                height={500}
                width={500}
                alt="gallery image"
                priority
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-12">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              <Image
                src={el}
                className="h-96 w-full object-cover rounded-xl"
                height={500}
                width={500}
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
