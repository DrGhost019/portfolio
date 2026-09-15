'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroScene } from '@/components/3d/hero-scene';

interface HeroProps {
  status: string;
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
  cta3: string;
}

// Animation variants
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

export function Hero({ status, headline, subheadline, cta1, cta2, cta3 }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient Overlay for better text readability */}
      <div className="from-background/20 via-background/50 to-background pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 pb-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Status Badge - Exact Prototype Green Glassmorphism */}
          <motion.div variants={fadeInUp}>
            <span
              className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-md"
              style={{
                color: 'var(--color-success)',
                backgroundColor: 'color-mix(in srgb, var(--color-success) 10%, transparent)',
                borderColor: 'color-mix(in srgb, var(--color-success) 30%, transparent)',
                boxShadow: '0 0 15px color-mix(in srgb, var(--color-success) 15%, transparent)',
              }}
            >
              <span className="relative flex h-2 w-2">
                {/* The pulsing ripple effect */}
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: 'var(--color-success)' }}
                ></span>
                {/* The solid center dot */}
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-success)' }}
                ></span>
              </span>
              {status}
            </span>
          </motion.div>

          {/* Headline - Gradient Text (White/Navy to Blue) */}
          <motion.h1
            variants={fadeInUp}
            className="bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-accent)] bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
          >
            {headline}
          </motion.h1>

          {/* Subheadline - Grayish-White Tone */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary Button with Glow Effect */}
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

            {/* About Me Link - Explicitly Blue (Primary Color) */}
            <Link
              href="#about"
              className="text-primary hover:text-primary-hover text-sm font-semibold underline-offset-4 transition-colors hover:underline"
            >
              {cta3}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator with Neon Animated Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        {/* Off-white gray text */}
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-text-secondary)]">
          Scroll
        </span>
        
        {/* The Neon Animated Scrolling Line */}
        <div className="w-[2px] h-12 rounded-full overflow-hidden flex justify-center relative bg-[var(--color-border)]/10">
          <motion.div
            className="w-full rounded-full bg-[var(--color-accent)] relative z-10"
            style={{ 
              originY: 0,
              // The Neon Glow Effect
              boxShadow: '0 0 10px var(--color-accent), 0 0 20px var(--color-accent)' 
            }}
            animate={{ 
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
