'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionLabel } from '@/components/common/section-label';
import {
  LocationIcon,
  BriefcaseIcon,
  TargetIcon,
  MusicIcon,
  GamepadIcon,
  MedalIcon,
} from '@/components/common/icons';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { cn } from '@/lib/utils';

interface AboutProps {
  dict: Dictionary;
}

type IconName = 'location' | 'briefcase' | 'target' | 'music' | 'gamepad' | 'medal';

const iconMap: Record<IconName, React.FC<{ className?: string }>> = {
  location: LocationIcon,
  briefcase: BriefcaseIcon,
  target: TargetIcon,
  music: MusicIcon,
  gamepad: GamepadIcon,
  medal: MedalIcon,
};

export function About({ dict }: AboutProps) {
  return (
    <section
      id="about"
      className="bg-surface/30 border-border border-y px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:text-start">
          <SectionLabel label={dict.about.label} />
          <h2 className="text-primary mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {dict.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-5 lg:col-span-3">
            {dict.about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-text-secondary text-base leading-relaxed md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="space-y-8 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-border group hover:border-primary relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border-[3px] transition-colors duration-300"
            >
              <div className="from-background/80 pointer-events-none absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent" />

              <Image
                src="/assets/images/profile.jpg"
                alt="Mohammad Moein Kashfi Nejad"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />

              <div className="bg-background absolute inset-0 flex hidden items-center justify-center">
                <svg
                  className="text-border h-24 w-24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </motion.div>

            <div className="space-y-4">
              {dict.about.details.map((detail, index) => {
                const Icon = iconMap[detail.icon as IconName];
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-background border-border hover:border-primary/50 group flex items-start gap-4 rounded-xl border p-4 transition-colors"
                  >
                    <div className="text-primary mt-1 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-primary mb-1 text-sm font-semibold">{detail.label}</h4>
                      <p className="text-text-secondary text-sm">{detail.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="border-border space-y-3 border-t pt-4">
              {dict.about.funFacts.map((fact, index) => {
                const Icon = iconMap[fact.icon as IconName];
                return (
                  <motion.div
                    key={fact.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-background border-border flex items-center gap-3 rounded-lg border p-3"
                  >
                    <Icon className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{fact.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
