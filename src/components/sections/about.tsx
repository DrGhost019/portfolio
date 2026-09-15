"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionLabel } from "@/components/common/section-label"
import { LocationIcon, BriefcaseIcon, TargetIcon, MusicIcon, GamepadIcon, MedalIcon } from "@/components/common/icons"
import type { Dictionary } from "@/lib/i18n/dictionaries"
import { cn } from "@/lib/utils"

interface AboutProps {
  dict: Dictionary
}

// Define the exact keys allowed
type IconName = 'location' | 'briefcase' | 'target' | 'music' | 'gamepad' | 'medal';

// Type the map to ensure every component accepts className
const iconMap: Record<IconName, React.FC<{ className?: string }>> = {
  location: LocationIcon,
  briefcase: BriefcaseIcon,
  target: TargetIcon,
  music: MusicIcon,
  gamepad: GamepadIcon,
  medal: MedalIcon,
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-8 bg-surface/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.about.label} />
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {dict.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Bio Text */}
          <div className="lg:col-span-3 space-y-5">
            {dict.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-text-secondary leading-relaxed text-base md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Column: Photo, Details, Fun Facts */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Profile Photo Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] mx-auto aspect-square rounded-2xl overflow-hidden border-[3px] border-border group hover:border-primary transition-colors duration-300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Photo (Replace src with your actual photo path, e.g., '/assets/images/profile.jpg') */}
              <Image
                src="/assets/images/profile.jpg" // <-- PUT YOUR PHOTO HERE
                alt="Mohammad Moein Kashfi Nejad"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                // Fallback if image is missing:
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              {/* Fallback Placeholder if no photo is provided yet */}
              <div className="hidden absolute inset-0 bg-background flex items-center justify-center">
                <svg className="w-24 h-24 text-border" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </motion.div>

            {/* Detail Cards */}
            <div className="space-y-4">
              {dict.about.details.map((detail, index) => {
                const Icon = iconMap[detail.icon as IconName]
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="mt-1 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">{detail.label}</h4>
                      <p className="text-sm text-text-secondary">{detail.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Fun Facts */}
            <div className="space-y-3 pt-4 border-t border-border">
{dict.about.funFacts.map((fact, index) => {
  const Icon = iconMap[fact.icon as IconName]
                return (
                  <motion.div
                    key={fact.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{fact.text}</span>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}