"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTheme } from "@/components/providers/theme-provider" // Import useTheme

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const { theme } = useTheme() // Get current theme

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("mkn-portfolio-loader-seen")

    if (hasLoaded) {
      setIsLoading(false)
      return
    }

    sessionStorage.setItem("mkn-portfolio-loader-seen", "true")

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  // Determine if it's dark mode (handles 'system' preference too)
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  // Light Mode -> dark-logo.png | Dark Mode -> light-logo.png
  const logoSrc = isDark ? '/assets/light-logo.png' : '/assets/dark-logo.png'

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <Image
              src={logoSrc} // Dynamic source
              alt="MKN Logo"
              width={140}
              height={140}
              priority
              className="opacity-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-[3px] bg-border rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}