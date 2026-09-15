"use client"

import { SectionLabel } from "@/components/common/section-label"
import { TimelineItem } from "./timeline-item"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface ExperienceProps {
  dict: Dictionary
}

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.experience.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.experience.title}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {dict.experience.items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}