import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function Section({ id, children, className = "", alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-pad ${alt ? "bg-[var(--color-surface)]" : ""} ${className}`}
    >
      <div className="container-main">{children}</div>
    </section>
  );
}
