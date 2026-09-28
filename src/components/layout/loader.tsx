'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/components/providers/theme-provider'; // Import useTheme

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('mkn-portfolio-loader-seen');

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem('mkn-portfolio-loader-seen', 'true');

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const logoSrc = isDark ? '/assets/light-logo.png' : '/assets/dark-logo.png';

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="bg-background fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <Image
              src={logoSrc}
              alt="MKN Logo"
              width={140}
              height={140}
              priority
              className="opacity-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '16rem' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-border h-[3px] overflow-hidden rounded-full"
          >
            <motion.div
              className="from-primary to-accent h-full rounded-full bg-gradient-to-r"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
