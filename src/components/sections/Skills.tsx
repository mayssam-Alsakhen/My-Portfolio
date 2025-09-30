"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiMysql,
  SiLaravel,
  SiDocker,
  SiStorybook,
  SiTestinglibrary,
  SiCypress,
  SiRedux,
} from "react-icons/si";
import { useState} from "react";

interface Skill {
  label: string;
  icon: IconType;
  category: string;
  color: string;
}

const skillsData: Skill[] = [
  { label: "JavaScript", icon: SiJavascript, category: "Frontend", color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, category: "Frontend", color: "#3178C6" },
  { label: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "#000000" },
  { label: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
  { label: "Framer Motion", icon: SiFramer, category: "Frontend", color: "#0055FF" },
  { label: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#339933" },
  { label: "MongoDB", icon: SiMongodb, category: "Backend", color: "#47A248" },
  { label: "MySQL", icon: SiMysql, category: "Backend", color: "#3178C6" },
  {label: "Laravel", icon: SiLaravel, category: "Backend", color: "#FF2D20" },
  { label: "Git/GitHub", icon: SiGit, category: "Tools", color: "#F05032" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

// Glass morphism effect with your colors
const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`backdrop-blur-md bg-white/40 border border-secondary rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
};
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center lg:px-24 px-6 py-20 overflow-hidden bg-gradient-to-tr from-background via-accent/70 to-background"
    >

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading text-4xl sm:text-5xl text-center mb-4 text-secondary"
          >
            My Skills
          </motion.h2>
          
          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-secondary/70 rounded-full mb-4 origin-left relative z-10"
          />

          <motion.p 
            className="text-xl max-w-2xl mx-auto text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Technologies I excel at to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Interactive category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all relative overflow-hidden group ${
                activeCategory === category
                  ? 'text-white shadow-lg'
                  : 'text-primary bg-accent/60 hover:bg-accent/80 backdrop-blur-sm'
              }`}
            >
              {activeCategory === category && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center">
                {category}
                {activeCategory === category && (
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="ml-2"
                  >
                    ✓
                  </motion.span>
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid with modern layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative"
              >
                {/* <HoverEffectCard skill={skill}> */}
                  <GlassCard className="p-5 h-full flex flex-col items-center cursor-pointer">
                    {/* Skill icon with modern design */}
                    <motion.div
                      className="flex items-center justify-center w-16 h-16 rounded-2xl text-3xl mb-4 relative z-10 bg-accent"
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.15,
                        transition: { duration: 0.5 }
                      }}
                      style={{ 
                        color: skill.color, 
                      }}
                    >
                      <skill.icon />
                    </motion.div>
                    
                    {/* Skill name */}
                    <h3 className="text-sm font-semibold text-center mb-2 relative z-10 text-primary">
                      {skill.label}
                    </h3>
                  </GlassCard>
                {/* </HoverEffectCard> */}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="text-5xl mb-4 text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              🔍
            </motion.div>
            <h3 className="text-xl font-medium text-primary">No skills found</h3>
            <p className="mt-2 text-secondary">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}