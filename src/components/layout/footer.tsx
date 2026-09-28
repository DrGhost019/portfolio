interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-border bg-background w-full border-t py-8 text-center">
      <p className="text-text-secondary text-sm">{text}</p>
    </footer>
  );
}
