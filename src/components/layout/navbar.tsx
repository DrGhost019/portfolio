'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import { MobileDrawer } from './mobile-drawer';
import { useTheme } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

interface NavbarProps {
  navLinks: { label: string; href: string }[];
  isRtl: boolean;
}

export function Navbar({ navLinks, isRtl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  const logoSrc = isDark ? '/assets/light-logo.png' : '/assets/dark-logo.png';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 border-border border-b shadow-sm backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="MKN Logo"
            width={48}
            height={48}
            className="transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-primary group relative text-sm font-medium transition-colors"
                >
                  {link.label}
                  <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />

            <button
              className="text-text-primary flex flex-col gap-1.5 p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="h-0.5 w-6 bg-current transition-transform" />
              <span className="h-0.5 w-6 bg-current transition-transform" />
              <span className="h-0.5 w-6 bg-current transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isRtl={isRtl}
      />
    </>
  );
}
