"use client";

import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Typed variants
const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden grid place-items-center px-6"
      aria-label="Hero"
    >
      {/* gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-accent/60 to-white" />
      {/* soft blobs for depth */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl" />

      {/* content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* badge */}
        <motion.div
          variants={stagger}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-black/70">Available for work</span>
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={container}
          className="heading text-4xl sm:text-5xl md:text-6xl leading-tight text-primary"
        >
          Hello, I'm Maysam <br />
          a Full-Stack Developer.
          {/* Building clean, modern web experiences. */}
        </motion.h1>

        {/* subtext */}
        <motion.p variants={container} className="mt-4 text-base sm:text-lg text-black/70">
          Building fast, responsive, and modern websites that deliver a seamless user experience.
        </motion.p>

        {/* ctas */}
        <motion.div variants={stagger} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            variants={item}
            href="#projects"
            className="rounded-xl bg-primary px-6 py-3 text-white shadow-md transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            See my work
          </motion.a>

          <motion.a
            variants={item}
            href="#contact"
            className="rounded-xl border border-primary px-6 py-3 text-primary bg-white/70 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Contact me
          </motion.a>

          {/* socials */}
          <motion.div variants={item} className="flex items-center gap-3 ml-2">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://github.com/mayssam-Alsakhen"
              aria-label="GitHub"
              className="grid place-items-center rounded-full border border-black/10 bg-white/80 p-3 text-black/80 hover:text-primary hover:border-primary transition"
            >
              <FaGithub />
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mayssam-alsakhen"
              aria-label="LinkedIn"
              className="grid place-items-center rounded-full border border-black/10 bg-white/80 p-3 text-black/80 hover:text-primary hover:border-primary transition"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          variants={container}
          className="mt-10 inline-flex items-center gap-2 text-sm text-black/60 hover:text-primary transition"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  );
}
