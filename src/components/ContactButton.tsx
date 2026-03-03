interface ContactButtonProps {
  email: string;
  className?: string;
}

export function ContactButton({ email, className }: ContactButtonProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={`inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text transition hover:border-accent hover:text-accent ${className ?? ""}`}
    >
      Questions? Ask Me
    </a>
  );
}
