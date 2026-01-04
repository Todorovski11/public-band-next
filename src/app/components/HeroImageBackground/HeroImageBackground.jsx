"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitter,
} from "@tabler/icons-react";

/* ====== ExpandableCardDemo imports (kept as-is) ====== */
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
/* ==================================================== */

/* ✅ MeetTheTeam styles (same module you already have) */
import teamClasses from "../MeetTheTeam/MeetTheTeam.module.css";

export function HeroImageBackground() {
  const socialIcons = [
    {
      Icon: IconBrandFacebook,
      url: "https://www.facebook.com/profile.php?id=61568452600040",
    },
    { Icon: IconBrandInstagram, url: "https://www.instagram.com/public__band/" },
    { Icon: IconBrandYoutube, url: "#" },
    { Icon: IconBrandTwitter, url: "#" },
  ];

    return (
      <div className="relative overflow-hidden">
      {/* ✅ Desktop-only background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/assets/176635854790592.jpg')" }}
      />

      {/* ✅ Desktop-only overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/30 hidden md:block" />


<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/30" />

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
        </motion.div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-20 py-24">
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
            <input
              type="hidden"
              name="access_key"
              value="9cd1d015-82dd-4bcd-8bcf-a0709df4fd04"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d73756] text-black"
            />

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="bg-[#d73756] text-white px-6 py-3 rounded-full font-bold uppercase hover:bg-opacity-90 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* ✅ MEET THE TEAM (NOW INSIDE HERO + SAME BACKGROUND) */}
      <div className="relative z-20 py-24">
        <MeetTheTeam />
      </div>

      {/* ExpandableCardDemo */}
      <div className="relative z-20 pb-24">
        <ExpandableCardDemo />
      </div>
    </div>
  );
}

/* ===================== ✅ MeetTheTeam moved HERE ===================== */

function MeetTheTeam() {
  const teamMembers = [
    { name: "Jana Spirkovska", role: "Vocal", image: "/assets/Jana.jpg" },
    {
      name: "Aleksandar Spasencovski",
      role: "Vocal, Keys",
      image: "/assets/Aleksandar.png",
    },
    { name: "Andrej Jovanovikj", role: "Guitar", image: "/assets/Andrej.png" },
    {
      name: "Aleksandar Spirov",
      role: "Drums",
      image: "/assets/Aleksandar_2.png",
    },
  ];

  return (
    <div className={teamClasses.wrapper}>
      <h2 className={teamClasses.title}>Meet The Team</h2>

      <div className={teamClasses.teamContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={teamClasses.teamCard}>
            <img
              src={member.image}
              alt={member.name}
              className={teamClasses.teamImage}
            />
            <div className={teamClasses.teamInfo}>
              <p className={teamClasses.name}>{member.name}</p>
              <p className={teamClasses.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= ExpandableCardDemo (kept as-is) ================= */

function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-4xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 my-5 flex bg-transparent md:bg-neutral-900 flex-col md:flex-row justify-between items-center hover:bg-transparent md:hover:bg-neutral-50 md:dark:hover:bg-neutral-500 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-white/90 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    description: "Jana Spirkovska",
    title: "Svoja ili nicija",
    src: "/assets/svoja_ili_nicija.jpg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=2Gdt8XnH8Rw",
  },
  {
    description: "Aleksandar Spasencovski",
    title: "Pomina Se",
    src: "/assets/pomina_se.jpg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=lsa0vaCZYvU",
  },
  {
    description: "Jana Spirkovska",
    title: "Kontrola",
    src: "/assets/kontrola.jpg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=Bobktr_xvDg",
  },
  {
    description: "Aleksandar Spasencovski",
    title: "Daj mi odgovor",
    src: "/assets/daj_mi_odgovor.jpg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=6C_pfE0JIkg",
  },
];
