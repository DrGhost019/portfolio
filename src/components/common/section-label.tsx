interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-8 flex w-full items-center gap-3">
      <div className="relative flex flex-shrink-0 items-center justify-center">
        <div className="absolute h-3 w-3 animate-pulse rounded-full bg-[var(--color-accent)] opacity-30" />
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
      </div>

      <span className="font-mono text-sm font-bold tracking-[0.15em] text-[var(--color-accent)] uppercase">
        {label}
      </span>
    </div>
  );
}
