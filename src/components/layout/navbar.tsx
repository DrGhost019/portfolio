"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { MobileDrawer } from "./mobile-drawer"
import { useTheme } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"

interface NavbarProps {
  navLinks: { label: string; href: string }[]
  isRtl: boolean
}

export function Navbar({ navLinks, isRtl }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine logo source based on theme
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const logoSrc = isDark ? '/assets/light-logo.png' : '/assets/dark-logo.png'

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={logoSrc}
            alt="MKN Logo"
            width={48}
            height={48}
            className="transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation & Controls */}
        <div className="flex items-center gap-8">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 text-text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-current transition-transform" />
              <span className="w-6 h-0.5 bg-current transition-transform" />
              <span className="w-6 h-0.5 bg-current transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isRtl={isRtl}
      />
    </>
  )
}