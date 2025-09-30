"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    // 9/2025
    id: 1,
    title: "Personal Portfolio",
    description: "A personal portfolio that highlights my work through an engaging design, interactive animations, and a user-friendly experience.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "Nextask",
    description: "A collaborative project management tool with multi-user support, task scheduling, and real-time progress tracking. It features secure role-based access, JWT authentication, PDF report generation, interactive charts, and a calendar view for efficient task organization.",
    technologies: ["Next.js", "TailwindCSS", "JWT", "Recharts.js", "FullCalendar", "Laravel", "MySQL", "Dompdf"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/mayssam-Alsakhen/Nextask-backend",
  },
  {
    id: 3,
    title: "Missing & Found",
    description: "A community platform where people can post about missing or found persons with photos and contact details. Others can browse posts freely, and registered users can add posts or comment to share helpful information.",
    technologies: ["NextJs", "TailwindCSS", "Laravel", "MySQL", "JWT"],
    liveUrl: "https://drive.google.com/file/d/18gTLqI9tFBD89-NaJ4tMIxJ37yYRUJyX/view?usp=sharing",
    githubUrl: "https://github.com/mayssam-Alsakhen/Codi-tech-Final-Project_Back-end",
  },
  {
    id: 4,
    title: "Retouch",
    description: "Implemented the frontend of a website presenting various event services, translating provided designs into a responsive and user-friendly interface, focusing on a clean layout and user-friendly interface.",
    technologies: ["Next.js", "TailwindCSS", "Styled Components"],
    liveUrl: "https://retouch.vercel.app/",
    githubUrl: "https://github.com/mayssam-Alsakhen/retouch",
  },
  {
    id: 5,
    title: "Oakcraft",
    description: "Implemented the frontend of a website based on provided designs, showcasing kitchen design options for customers, with multi-language support, a responsive layout, and interactive features like image galleries and navigational elements.",
    technologies: ["Next.js", "TailwindCSS", "i18next"],
    liveUrl: "https://kitchen-tau.vercel.app/",
    githubUrl: "https://github.com/mayssam-Alsakhen/Kitchen",
  },
];

// Card component
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden bg-background/80 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: "0 0 40px var(--color-accent)",
        }}
      />

      <div className="p-6 flex flex-col h-full relative z-10">
        <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-black/80 mb-4 flex-1 max-h-36 overflow-auto custom-scrollbar">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full font-medium bg-accent text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-secondary text-background hover:bg-primary transition"
          >
            Live <FiExternalLink />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-primary hover:bg-primary hover:text-background transition"
          >
            Code <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/60 to-primary"></div>

      {/* Glow blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-accent)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-secondary)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="lg:pl-12 relative z-10 pl-0">
        <motion.div
          className="text-center mb-16 flex flex-col items-center gap-2" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-background heading text-4xl sm:text-5xl text-center mb-4">
            My Projects
          </h2>
          {/* Animated divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="w-36 h-1 bg-background rounded-full mb-4 origin-left relative z-10"
                    />

          <p className="text-lg max-w-2xl mx-auto text-background/90">
            A collection of applications and experiments that showcase my
            skills, creativity, and growth as a developer.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <a
            href="https://github.com/mayssam-Alsakhen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-background text-primary hover:bg-accent hover:text-primary transition relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 rounded-xl opacity-0"
              style={{ boxShadow: "0 0 25px var(--color-accent)" }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.2 }}
            />
            <span className="relative z-10">View More on GitHub</span>
            <FiArrowRight className="relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
