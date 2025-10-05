"use client";

import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center bg-primary/95 px-6 py-20 overflow-hidden"
    >
      {/* Floating tech icons */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-6 text-accent/20 text-6xl"
      >
        <FaReact />
      </motion.div>
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-10 text-background/20 text-5xl"
      >
        <FaLaravel />
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-8 text-secondary/20 text-6xl"
      >
        <SiNextdotjs />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-12 text-accent/20 text-5xl"
      >
        <SiMysql />
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 20, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-4 text-background/20 text-5xl"
      >
        <FaGithub />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-3 text-secondary/20 text-5xl"
      >
        <FaNodeJs />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-4xl sm:text-5xl text-accent text-center mb-4"
      >
        About Me
      </motion.h2>

      {/* Animated divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-24 h-1 bg-accent rounded-full mb-10 origin-left relative z-10"
      />

      {/* Cards container */}
      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-background text-primary p-6 rounded-2xl shadow-lg"
        >
          <p>
            I’m a full-stack web developer, studied <span className="font-semibold"> Computer Science </span> at the Lebanese International University, passionate about creating modern,
            responsive, and user-friendly digital solutions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-background text-primary p-6 rounded-2xl shadow-lg"
        >
          <p>
            Skilled in both frontend and backend development, I work with
            technologies such as <span className="font-semibold">Laravel</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">React</span> to transform ideas into
            impactful web applications.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-background text-primary p-6 rounded-2xl shadow-lg"
        >
          <p>
            With experience turning designs into websites, implementing
            multilingual support, and continuously learning, I’m driven by a
            curiosity to improve and a commitment to high-quality digital
            experiences.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-background text-primary p-6 rounded-2xl shadow-lg font-medium"
        >
          <p>
            Open to new opportunities, I’m eager to contribute, grow, and
            collaborate on meaningful projects 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
