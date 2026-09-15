"use client"

interface ArtProps {
  className?: string
}

export function HarmonifyArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <rect x="30" y="20" width="140" height="80" rx="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="70" cy="60" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="70" cy="60" r="6" fill="currentColor" opacity="0.5" />
      <rect x="100" y="42" width="55" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="100" y="52" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="100" y="62" width="50" height="4" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="100" y="72" width="35" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <path d="M40 90 L50 85 L60 88 L70 82 L80 86 L90 80 L100 84" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function MedicalArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <rect x="25" y="15" width="150" height="90" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <rect x="35" y="28" width="50" height="6" rx="3" fill="currentColor" opacity="0.5" />
      <rect x="35" y="42" width="130" height="1" fill="currentColor" opacity="0.2" />
      <rect x="35" y="50" width="60" height="20" rx="4" fill="currentColor" opacity="0.15" />
      <rect x="100" y="50" width="60" height="20" rx="4" fill="currentColor" opacity="0.1" />
      <rect x="35" y="76" width="60" height="20" rx="4" fill="currentColor" opacity="0.1" />
      <rect x="100" y="76" width="60" height="20" rx="4" fill="currentColor" opacity="0.15" />
      <path d="M155 25 L165 25 L165 35" stroke="currentColor" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
      <circle cx="50" cy="60" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function DashboardArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <path d="M20 95 L50 65 L80 75 L110 40 L140 50 L170 25" stroke="currentColor" strokeWidth="2" opacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 95 L50 65 L80 75 L110 40 L140 50 L170 25 L170 95 Z" fill="currentColor" opacity="0.08" />
      <circle cx="50" cy="65" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="80" cy="75" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="110" cy="40" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="140" cy="50" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="170" cy="25" r="3.5" fill="currentColor" opacity="0.8" />
      <rect x="20" y="100" width="150" height="1" fill="currentColor" opacity="0.2" />
      <rect x="30" y="15" width="30" height="5" rx="2.5" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export function PokhtopazArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className={className}>
      <circle cx="100" cy="55" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <circle cx="100" cy="55" r="22" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M85 50 Q100 35 115 50 Q115 65 100 70 Q85 65 85 50" fill="currentColor" opacity="0.15" />
      <circle cx="95" cy="48" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="105" cy="52" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="58" r="2.5" fill="currentColor" opacity="0.4" />
      <rect x="60" y="100" width="80" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="75" y="108" width="50" height="3" rx="1.5" fill="currentColor" opacity="0.15" />
    </svg>
  )
}