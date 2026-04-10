import Link from "next/link";
import { BadgePercent, Boxes, ChevronRight, PackagePlus } from "lucide-react";
import { shoppingPaths } from "@/lib/content";
import { SectionShell } from "./section-shell";

const cardIcons = [Boxes, BadgePercent, PackagePlus];

export function ShoppingPaths() {
  return (
    <SectionShell>
      <div data-reveal>
        <p className="technical-label">Buyer workflows</p>
        <h2 className="mt-6 text-2xl font-semibold text-brand-navy sm:text-3xl">Popular ways customers shop</h2>
        <p className="mt-3 max-w-2xl text-brand-slate">Start from brand catalogs, live inventory, or quote-driven buying depending on where the project stands.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {shoppingPaths.map((item, index) => {
          const Icon = cardIcons[index];

          return (
            <article
              key={item.title}
              data-reveal
              className="group flex h-full flex-col rounded-3xl border border-brand-border/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/8 text-brand-red ring-1 ring-brand-red/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm text-brand-slate">{item.description}</p>
              <Link
                href={item.href}
                className="focus-ring mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-red hover:gap-2 hover:text-brand-red-dark"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
