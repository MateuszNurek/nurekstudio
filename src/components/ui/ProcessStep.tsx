export function ProcessStep({
  number,
  title,
  text,
  isLast = false,
}: {
  number: string;
  title: string;
  text: string;
  isLast?: boolean;
}) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-cyan/40 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-4xl font-semibold tracking-[-0.04em] text-cyan/80 transition-colors group-hover:text-cyan">
          {number}
        </span>
        {!isLast && (
          <span aria-hidden="true" className="hidden h-px w-10 bg-line-strong lg:block" />
        )}
      </div>
      <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.02em] text-cream">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
    </div>
  );
}
