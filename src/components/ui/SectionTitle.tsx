interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  const align = center ? "text-center mx-auto" : "text-center md:text-left";

  return (
    <header className={`mb-10 md:mb-12 max-w-2xl ${center ? "mx-auto" : "md:mx-0"}`}>
      {label && <p className={`section-label mb-2 ${align}`}>{label}</p>}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-brand)] tracking-tight ${align}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-[var(--color-ink-muted)] text-sm sm:text-base leading-relaxed ${align}`}>
          {description}
        </p>
      )}
    </header>
  );
}
