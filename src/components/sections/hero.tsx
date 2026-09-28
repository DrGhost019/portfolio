'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePortfolioStatus } from '@/hooks/use-portfolio-status';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { HeroScene } from '@/components/3d/hero-scene';

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
  cta3: string;
  dict: Dictionary;
}
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
} as const;

export function Hero({ headline, subheadline, cta1, cta2, cta3, dict }: HeroProps) {
  const { status: portfolioStatus } = usePortfolioStatus();

  const getStatusColor = (type: 'bg' | 'text' | 'border' | 'shadow') => {
    if (portfolioStatus === 'open') {
      if (type === 'bg') return 'color-mix(in srgb, var(--color-success) 10%, transparent)';
      if (type === 'text') return 'var(--color-success)';
      if (type === 'border') return 'color-mix(in srgb, var(--color-success) 30%, transparent)';
      if (type === 'shadow')
        return '0 0 15px color-mix(in srgb, var(--color-success) 15%, transparent)';
    }
    if (portfolioStatus === 'busy') {
      if (type === 'bg') return 'color-mix(in srgb, #eab308 10%, transparent)';
      if (type === 'text') return '#eab308';
      if (type === 'border') return 'color-mix(in srgb, #eab308 30%, transparent)';
      if (type === 'shadow') return '0 0 15px color-mix(in srgb, #eab308 15%, transparent)';
    }
    if (type === 'bg') return 'color-mix(in srgb, #ef4444 10%, transparent)';
    if (type === 'text') return '#ef4444';
    if (type === 'border') return 'color-mix(in srgb, #ef4444 30%, transparent)';
    return '0 0 15px color-mix(in srgb, #ef4444 15%, transparent)';
  };

  const getStatusText = () => {
    if (portfolioStatus === 'open') return dict.hero.statusOpen || 'Open to Work';
    if (portfolioStatus === 'busy') return dict.hero.statusBusy || 'Working on a project';
    return dict.hero.statusClosed || 'Not available';
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <HeroScene />

      <div className="from-background/20 via-background/50 to-background pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b" />

      <div className="relative z-10 container mx-auto max-w-5xl px-4 pb-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeInUp}>
            <span
              className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-md"
              style={{
                color: getStatusColor('text'),
                backgroundColor: getStatusColor('bg'),
                borderColor: getStatusColor('border'),
                boxShadow: getStatusColor('shadow'),
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: getStatusColor('text') }}
                ></span>
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: getStatusColor('text') }}
                ></span>
              </span>
              {getStatusText()}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-accent)] bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="default"
              size="lg"
              className="shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]"
              asChild
            >
              <Link href="#projects">{cta1}</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_20%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]"
              asChild
            >
              <Link href="#contact">{cta2}</Link>
            </Button>

            <Link
              href="#about"
              className="text-primary hover:text-primary-hover text-sm font-semibold underline-offset-4 transition-colors hover:underline"
            >
              {cta3}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
          Scroll
        </span>

        <div className="relative flex h-12 w-[2px] justify-center overflow-hidden rounded-full bg-[var(--color-border)]/10">
          <motion.div
            className="relative z-10 w-full rounded-full bg-[var(--color-accent)]"
            style={{
              originY: 0,
              boxShadow: '0 0 10px var(--color-accent), 0 0 20px var(--color-accent)',
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
