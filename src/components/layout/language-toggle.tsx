"use client"

import { usePathname, useParams } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string
  
  // Determine the new locale
  const newLocale = currentLocale === "en" ? "fa" : "en"
  
  // Replace the locale segment in the URL (e.g., /en/about -> /fa/about)
  const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`)

  return (
    <Link 
      href={newPathname} 
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-lg border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors",
        className
      )}
      aria-label={`Switch to ${newLocale === 'en' ? 'English' : 'Persian'}`}
    >
      <span className="text-sm font-semibold font-en">
        {newLocale === "en" ? "EN" : "FA"}
      </span>
    </Link>
  )
}