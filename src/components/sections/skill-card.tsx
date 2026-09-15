"use client"

import { motion } from "framer-motion"
import { MonitorIcon, ServerIcon, WrenchIcon, CpuIcon } from "@/components/common/icons"
import type { ReactNode } from "react"

interface SkillCategory {
  id: string
  title: string
  items: string[]
}

interface SkillCardProps {
  category: SkillCategory
  index: number
}

// Map category IDs to their respective icons
const iconMap: Record<string, ReactNode> = {
  frontend: <MonitorIcon className="w-6 h-6" />,
  backend: <ServerIcon className="w-6 h-6" />, // <-- Now uses the Server icon
  tools: <WrenchIcon className="w-6 h-6" />,
  embedded: <CpuIcon className="w-6 h-6" />,
}

export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-6 md:p-8 rounded-2xl border border-border bg-surface/50 hover:bg-surface hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon Box */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
        {iconMap[category.id] || <MonitorIcon className="w-6 h-6" />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-4">
        {category.title}
      </h3>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 text-xs font-mono text-text-secondary bg-background border border-border rounded-md hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}