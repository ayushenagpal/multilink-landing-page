import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} data-section-depth className={cn("relative bg-brand-light py-12 sm:py-14 lg:py-16 xl:py-20", className)}>
      <div className="container-wrap">{children}</div>
    </section>
  );
}
