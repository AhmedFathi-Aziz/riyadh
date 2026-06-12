type AboutSectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function AboutSectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "start",
}: AboutSectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl text-start";
  const titleClass =
    align === "center" ? "about-section-title about-section-title--center" : "about-section-title";

  return (
    <header className={`mb-10 sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="about-eyebrow mb-3 text-label-sm font-semibold uppercase tracking-wide text-secondary">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`${titleClass} mb-4 text-headline-md font-bold text-primary sm:text-[1.75rem]`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-body-lg leading-relaxed text-on-surface-variant">
          {description}
        </p>
      )}
    </header>
  );
}
