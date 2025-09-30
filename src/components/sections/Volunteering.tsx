'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdGroups } from "react-icons/md";

interface VolunteeringItem {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string[];
  causes: string[];
  hours?: number;
  location: string;
}

// Card Component
function VolunteerCard({
  item,
  onOpen,
}: {
  item: VolunteeringItem;
  onOpen: (item: VolunteeringItem) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -6,
        rotateX: 3,
        rotateY: -3,
        scale: 1.03,
        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        transition: { type: 'spring', stiffness: 220, damping: 16 },
      }}
      className="min-h-64 md:min-h-72 lg:min-h-80 bg-background rounded-2xl p-6 shadow-md border border-accent flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <MdGroups className='w-8 h-8 text-primary' />
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-semibold break-words text-primary">
              {item.role}
            </h4>
            <div className="text-sm mt-1 break-words text-secondary">
              {item.organization}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm flex-wrap gap-2">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-primary text-xs font-medium">
            {item.period}
          </span>
          <div className="text-xs text-black/70">
            {/* {item.hours ?? '—'} hrs ·  */}
            {item.location}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2 flex-wrap">
            {item.causes.map((c) => (
              <motion.span
                key={c}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-2 py-1 rounded-full border border-accent text-primary bg-background"
              >
                #{c}
              </motion.span>
            ))}
          </div>

          <p className="mt-4 text-sm text-black/80 line-clamp-3 break-words">
            {item.description[0]}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => onOpen(item)}
          className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-background hover:bg-secondary hover:scale-105 active:scale-95 transition-transform shadow-sm"
          aria-haspopup="dialog"
        >
          Details
        </button>
      </div>
    </motion.article>
  );
}

// Modal Component
function VolunteerModal({
  item,
  onClose,
}: {
  item: VolunteeringItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed z-50 w-[90%] max-w-lg rounded-2xl bg-background shadow-xl overflow-y-auto max-h-[90vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 240 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-primary text-background flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            >
              ✕
            </button>

            <div className="p-6 pt-12">
              <h3 className="text-xl font-bold mb-2 text-primary">
                {item.role}
              </h3>
              <p className="text-sm mb-4 text-secondary">
                {item.organization} · {item.period}
              </p>
              <ul className="space-y-2 mb-6">
                {item.description.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm flex items-start text-black/80"
                  >
                    <span className="mr-2">•</span> {d}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Section Component
export default function VolunteeringSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<VolunteeringItem | null>(null);

  const volunteering: VolunteeringItem[] = [
    {
      id: 1,
      role: 'Database Entry',
      organization: 'Life Sculptor',
      period: 'Dec 2022 - Aug 2024',
      description: [
        'Verified and organized form responses, ensuring accurate data entry for student records',
        'Maintained and updated the association’s database and communication groups',
        'Supported team operations by managing information flow and keeping records consistent',
      ],
      causes: ['Data Entry', 'Organization', 'Attention to Detail', 'Teamwork'],
      // hours: 240,
      location: 'Remote',
    },
    {
      id: 2,
      role: 'Monitor',
      organization: 'Life Sculptor',
      period: 'Feb 2023 - Jul 2025',
      description: [
        'Coordinated and monitored online sessions, ensuring smooth execution for students and speakers',
        'Managed attendance, session links, and shared materials when needed',
        'Troubleshot technical issues during live sessions to maintain continuity and quality',
      ],
      causes: ['Coordination', 'Communication', 'Session Management', 'Technical Support'],
      // hours: 180,
      location: 'Remote',
    },
    {
      id: 3,
      role: 'Researcher',
      organization: 'Life Sculptor',
      period: 'May 2023 - Present',
      description: [
        'Conducted research on tech topics to prepare session content.',
        'Compiled and organized findings to be used by the teaching team for student sessions.',
        'Supported knowledge-sharing initiatives by delivering accurate and relevant technical information.',
      ],
      causes: ['Technical Research', 'Content Preparation', 'Organization'],
      // hours: 320,
      location: 'Remote',
    },
    {
      id: 4,
      role: 'Coordinator',
      organization: 'union islamic association',
      period: 'Nov 2023 - Present',
      description: [
        'Facilitated communication between teams by distributing video transcripts to the relevant translation groups',
        'Ensured timely collection of translated materials to keep projects on schedule',
        'Maintained accuracy and consistency of content handoff to support efficient project completion',
      ],
      causes: ['Coordination', 'Communication', 'Teamwork', 'Organization'],
      // hours: 320,
      location: 'Remote',
    },
  ];

  return (
    <section
      id="volunteering"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-[#f8f5f0] to-[#e9e2d5] relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center gap-2 relative z-10 lg:pl-12 pl-0">
        <motion.h2
          className="text-4xl text-center text-primary heading sm:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Volunteer Work
        </motion.h2>

        {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary rounded-full mb-4 origin-left relative z-10"
          />

        <motion.p
          className="text-lg text-center text-secondary mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Contributing to meaningful causes and making a difference in the
          community
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteering.map((item) => (
            <VolunteerCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </div>

        <VolunteerModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
