'use client';

import { SectionLabel } from '@/components/common/section-label';
import { TimelineItem } from './timeline-item';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ExperienceProps {
  dict: Dictionary;
}

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="bg-background px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.experience.label} />
          <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {dict.experience.title}
          </h2>
        </div>

        <div className="relative">
          {dict.experience.items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
