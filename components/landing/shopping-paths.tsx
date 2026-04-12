import Link from "next/link";
import { BadgePercent, Boxes, ChevronRight, FileSpreadsheet, Layers3, PackagePlus } from "lucide-react";
import { shoppingPaths } from "@/lib/content";
import { SectionShell } from "./section-shell";

const cardIcons = [Boxes, Layers3, BadgePercent, FileSpreadsheet, PackagePlus];

export function ShoppingPaths() {
  return (
    <SectionShell className="bg-white">
      <div data-reveal>
        <p className="technical-label">How buyers start</p>
        <h2 className="mt-5 text-2xl font-semibold text-brand-navy sm:text-3xl">New to Multilink? Start with the path that matches how you buy.</h2>
        <p className="mt-3 max-w-3xl text-brand-slate">
          Some buyers start with brands, some with categories, and some with a live quote request. The homepage should get you to the right next step fast.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {shoppingPaths.map((item, index) => {
          const Icon = cardIcons[index];

          return (
            <article
              key={item.title}
              data-reveal
              className="group flex h-full flex-col rounded-3xl border border-brand-border/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-7"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/8 text-brand-red ring-1 ring-brand-red/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{item.description}</p>
              <Link
                href={item.href}
                className="focus-ring mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-red hover:gap-2 hover:text-brand-red-dark"
              >
                {item.cta} <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
