'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HarmonifyArt, MedicalArt, DashboardArt, PokhtopazArt } from '@/components/art/project-art';

interface ProjectItem {
  number: string;
  title: string;
  desc: string;
  stack: string[];
  github: string | null;
  demo: string | null;
  badge: string | null;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const artComponents = [HarmonifyArt, MedicalArt, DashboardArt, PokhtopazArt];

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ArtComponent = artComponents[index] || HarmonifyArt;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="group border-border bg-background hover:border-primary grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_20px_60px_color-mix(in_srgb,var(--color-primary)_8%,transparent)] md:grid-cols-2 md:gap-10 md:p-8"
    >
      <div className="from-primary/[0.15] to-surface border-border/50 group-hover:border-primary/30 relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br transition-colors">
        {project.badge && (
          <span className="bg-warning/20 text-warning border-warning/30 absolute start-4 top-4 rounded-full border px-2.5 py-1 text-[0.7rem] font-semibold">
            {project.badge}
          </span>
        )}
        <div className="flex h-[65%] w-[65%] items-center justify-center transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
          <ArtComponent className="text-primary h-full w-full opacity-80" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-primary mb-2 block font-mono text-[0.78rem]">{project.number}</span>

        <h3 className="text-primary mb-2 text-[clamp(1.2rem,2vw,1.6rem)] font-bold">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-3 text-[clamp(0.8rem,0.95vw,0.9rem)] leading-[1.8]">
          {project.desc}
        </p>

        <div className="mb-3 flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-text-secondary bg-surface border-border rounded-[20px] border px-2.5 py-1 font-mono text-[0.72rem]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-1 text-[clamp(0.8rem,0.95vw,0.9rem)] font-medium transition-colors hover:text-[var(--color-primary-hover)]"
            >
              Source Code
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11L11 3M11 3H5M11 3v6" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
