'use client';

import { SectionLabel } from '@/components/common/section-label';
import { SkillCard } from './skill-card';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface SkillsProps {
  dict: Dictionary;
}

export function Skills({ dict }: SkillsProps) {
  return (
    <section
      id="skills"
      className="bg-surface/30 border-border border-y px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.skills.label} />
          <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {dict.skills.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {dict.skills.categories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
