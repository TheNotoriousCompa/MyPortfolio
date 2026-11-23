import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mb-10 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl",
        className
      )}
    >
      <span aria-hidden="true" className="mr-2 text-emerald-400">
        #
      </span>
      {title}
    </h2>
  );
}
