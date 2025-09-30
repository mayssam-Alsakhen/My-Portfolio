'use client';

import { motion } from 'framer-motion';
import type {Variants} from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  logo: string;
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "HexaPi Tech",
      period: "Sep 2023 - Oct 2023",
      description: [
        "Contributed to refining the user journey by identifying and suggesting design adjustments during development",
        "Developed the frontend of Tabiby, turning the designs into a functional interface",
        "Implemented the structure for multi-language support to prepare the platform for broader accessibility"
      ],
      skills: ["React.js", "MUI", "Bootstrap", "i18next", ],
      logo: "/hex.png"
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "DAS360",
      period: "May 2022 - Jul 2022",
      description: [
        "Developed and maintained client websites and web applications",
        "Optimized web performance resulting in 40% faster load times",
        "Collaborated with designers to implement pixel-perfect UIs"
      ],
      skills: ["Next.js", "JavaScript", "Tailwind CSS"],
      logo: "/das.png"
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Codi_Tech",
      period: "Nov 2021 - Aug 2022",
      description: [
        "Learned through hands-on, challenge-based projects, tackling both individual and team tasks",
        "Applied Agile and Scrum practices, using task management tools to organize work efficiently",
        "Developed practical problem-solving and collaboration skills through real-world project workflows"
      ],
      skills: ["React.js","Laravel", "Node.js", "Wordpress", "Agile", "Teamwork"],
      logo: "/codi.png"
    }
  ];

  // New animation variants with different approach
  const titleVariant : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariant : Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const hoverVariant : Variants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateY: 0,
      boxShadow: "0 4px 20px rgba(136, 115, 97, 0.15)"
    },
    hover: { 
      scale: 1.02,
      y: -5,
      rotateY: 2,
      boxShadow: "0 10px 40px rgba(136, 115, 97, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-[#faf9f6] to-[#e6dac8] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjODg3MzYxIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <motion.h2 
          className="text-4xl text-center text-primary heading sm:text-5xl mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariant}
        >
          Work Experience
        </motion.h2>

        {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-42 h-1 bg-primary rounded-full origin-left relative z-10 mb-16"
          />  
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariant}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden"
                variants={hoverVariant}
                initial="rest"
                whileHover="hover"
              >
                {/* Left side - Logo and period */}
                <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image 
                        src={exp.logo} 
                        alt={exp.company} 
                        width={56} 
                        height={56} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  
                  <ul className="mb-5 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1.5">▸</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent text-primary rounded-full text-sm transition-colors hover:bg-secondary hover:text-background"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full"></div>
                <div className="absolute -left-2 -bottom-2 w-16 h-16 bg-secondary/5 rounded-full"></div>
              </motion.div>
              
              {/* Connector line between items */}
              {i < experiences.length - 1 && (
                <div className="absolute left-8 top-full h-6 w-0.5 bg-accent ml-7 mt-2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;