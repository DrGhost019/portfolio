"use client"

import { SectionLabel } from "@/components/common/section-label"
import { ProjectCard } from "./project-card"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ProjectsProps {
  dict: Dictionary
}

export function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.projects.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.projects.title}
          </h2>
          <p className="text-[var(--color-text-primary)] max-w-2xl mx-auto md:mx-0 text-lg">
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
  )
}