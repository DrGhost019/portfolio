"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HarmonifyArt, MedicalArt, DashboardArt, PokhtopazArt } from "@/components/art/project-art"

interface ProjectItem {
  number: string
  title: string
  desc: string
  stack: string[]
  github: string | null
  demo: string | null
  badge: string | null
}

interface ProjectCardProps {
  project: ProjectItem
  index: number
}

const artComponents = [HarmonifyArt, MedicalArt, DashboardArt, PokhtopazArt]

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ArtComponent = artComponents[index] || HarmonifyArt

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-primary hover:-translate-y-2 hover:shadow-[0_20px_60px_color-mix(in_srgb,var(--color-primary)_8%,transparent)] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
    >
      {/* Image Side */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/[0.15] to-surface flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
        {project.badge && (
          <span className="absolute top-4 start-4 px-2.5 py-1 text-[0.7rem] font-semibold rounded-full bg-warning/20 text-warning border border-warning/30">
            {project.badge}
          </span>
        )}
        <div className="w-[65%] h-[65%] flex items-center justify-center transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105">
          <ArtComponent className="w-full h-full text-primary opacity-80" />
        </div>
      </div>

      {/* Content Side */}
      <div className="flex flex-col justify-center">
        <span className="font-mono text-[0.78rem] text-primary mb-2 block">
          {project.number}
        </span>

        <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-bold text-primary mb-2">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-3 text-[clamp(0.8rem,0.95vw,0.9rem)] leading-[1.8]">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[0.72rem] font-mono text-text-secondary bg-surface border border-border rounded-[20px]"
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
              className="inline-flex items-center gap-1 text-[clamp(0.8rem,0.95vw,0.9rem)] font-medium text-primary hover:text-[var(--color-primary-hover)] transition-colors"
            >
              Source Code
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11L11 3M11 3H5M11 3v6" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}