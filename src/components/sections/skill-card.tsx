'use client';

import { motion } from 'framer-motion';
import { MonitorIcon, ServerIcon, WrenchIcon, CpuIcon } from '@/components/common/icons';
import type { ReactNode } from 'react';

interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const iconMap: Record<string, ReactNode> = {
  frontend: <MonitorIcon className="h-6 w-6" />,
  backend: <ServerIcon className="h-6 w-6" />,
  tools: <WrenchIcon className="h-6 w-6" />,
  embedded: <CpuIcon className="h-6 w-6" />,
};

export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group border-border bg-surface/50 hover:bg-surface hover:border-primary/50 relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-8"
    >
      <div className="from-primary to-accent text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110">
        {iconMap[category.id] || <MonitorIcon className="h-6 w-6" />}
      </div>

      <h3 className="text-primary mb-4 text-xl font-bold">{category.title}</h3>

      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="text-text-secondary bg-background border-border hover:border-primary hover:text-primary cursor-default rounded-md border px-3 py-1.5 font-mono text-xs transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
