"use client";

import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaTools,
  FaBriefcase,
  FaHandsHelping,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaTools />, label: "Skills" },
  { id: "projects", icon: <FaCode />, label: "Projects" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "volunteering", icon: <FaHandsHelping />, label: "Volunteering" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Timeline() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // detect which section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // initial check in case user reloads mid-page
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar (lg and up) */}
      <div className="hidden lg:flex fixed left-4 top-0 h-full flex-col items-center justify-center z-50">
        {/* background line */}
        <div className="absolute w-1 h-full bg-[var(--color-secondary)] rounded-full"></div>

        {/* icons - fixed height area and evenly spaced */}
        <div className="flex flex-col items-center justify-between h-[80%] relative z-10">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-colors ${
                activeSection === section.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-accent)] text-[var(--color-primary)]"
              }`}
            >
              {section.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile & Medium Floating Button (hidden on lg+) */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle navigation"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-[var(--color-primary)] text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Animated Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-16 right-0 bg-[var(--color-accent)] p-3 rounded-xl shadow-lg flex flex-col space-y-3 min-w-[160px]"
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="text-sm">{section.label}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
