interface SectionLabelProps {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8 w-full">
      {/* Blinking Star Dot - Placed first so it appears at the 'start' (Left in EN, Right in FA) */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        {/* The glowing halo */}
        <div className="absolute w-3 h-3 rounded-full bg-[var(--color-accent)] opacity-30 animate-pulse" />
        {/* The solid core */}
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_8px_var(--color-accent)]" />
      </div>

      {/* Monospace Blue Text */}
      <span className="font-mono text-sm font-bold text-[var(--color-accent)] tracking-[0.15em] uppercase">
        {label}
      </span>
    </div>
  )
}