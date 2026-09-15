"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isVisible, setIsVisible] = useState(false) // Track if mouse has moved
  
  // Initialize at 0,0 (no off-screen freezing)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")
    setIsTouchDevice(!mediaQuery.matches)

    if (!mediaQuery.matches) {
      document.body.style.cursor = "auto"
      return
    }

    // Hide default cursor immediately
    document.body.style.cursor = "none"
    const style = document.createElement("style")
    style.textContent = `*, *::before, *::after { cursor: none !important; }`
    document.head.appendChild(style)

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Make cursor visible on first move
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouchDevice) return null

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100000] hidden md:block border-[1.5px] border-primary"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(91, 157, 255, 0.15)" : "transparent",
          borderColor: isHovering ? "#0A2540" : "var(--color-primary)",
          opacity: isVisible ? 1 : 0, // Only show after first move
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20, mass: 0.3 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100000] hidden md:block bg-primary"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0, // Only show after first move
        }}
        transition={{ type: "spring", stiffness: 800, damping: 30 }}
      />
    </>
  )
}