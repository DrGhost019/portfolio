"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { label: string; href: string }[]
  isRtl: boolean
}

export function MobileDrawer({ isOpen, onClose, navLinks, isRtl }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 bottom-0 w-[80%] max-w-[300px] z-[70] bg-surface border-${isRtl ? 'r' : 'l'} border-border shadow-2xl flex flex-col p-8`}
            // Note: Tailwind dynamic classes like border-l/r might need safelisting or standard classes. 
            // Using standard classes for safety:
            style={{ [isRtl ? 'left' : 'right']: 0, [isRtl ? 'borderRight' : 'borderLeft']: '1px solid var(--color-border)' }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} text-text-secondary hover:text-primary`}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Links */}
            <ul className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-xl font-medium text-text-primary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}