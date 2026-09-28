'use client';

import { SectionLabel } from '@/components/common/section-label';
import { ProjectCard } from './project-card';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ProjectsProps {
  dict: Dictionary;
}

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="bg-background px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.projects.label} />
          <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {dict.projects.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-text-primary)] md:mx-0">
            {dict.projects.description}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {dict.projects.items.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
