interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-subtitle mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lead text-neutral-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
