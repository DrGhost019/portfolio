"use client"

import { motion } from "framer-motion"

interface TimelineItemData {
  date: string
  role: string
  company: string
  description: string
}

interface TimelineItemProps {
  item: TimelineItemData
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative ps-8 pb-10 last:pb-0"
    >
      {/* Vertical Line & Dot (Using logical properties for RTL/LTR) */}
      {/* border-s creates a border on the 'start' side (left in LTR, right in RTL) */}
      <div className="absolute start-0 top-2 bottom-0 w-[2px] bg-border last:bg-transparent" />
      
      {/* The Dot */}
      <div className="absolute start-[-9px] top-2 w-4 h-4 rounded-full bg-primary border-[3px] border-background" />

      {/* Content */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs font-semibold text-primary tracking-wide">
          {item.date}
        </span>
        
        <h3 className="text-lg md:text-xl font-bold text-primary">
          {item.role}
        </h3>
        
        <p className="text-sm text-text-secondary font-medium">
          {item.company}
        </p>
        
        <p className="text-sm text-text-secondary leading-relaxed mt-2 max-w-2xl">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}