interface FooterProps {
  text: string
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="w-full py-8 border-t border-border bg-background text-center">
      <p className="text-sm text-text-secondary">
        {text}
      </p>
    </footer>
  )
}