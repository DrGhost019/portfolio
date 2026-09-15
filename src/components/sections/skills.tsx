"use client"

import { SectionLabel } from "@/components/common/section-label"
import { SkillCard } from "./skill-card"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface SkillsProps {
  dict: Dictionary
}

export function Skills({ dict }: SkillsProps) {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-8 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.skills.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.skills.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dict.skills.categories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}