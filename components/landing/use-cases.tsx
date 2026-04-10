import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCases } from "@/lib/content";
import { SectionShell } from "./section-shell";

export function UseCases() {
  return (
    <SectionShell>
      <div data-reveal>
        <p className="technical-label">Solutions by deployment</p>
        <h2 className="mt-6 text-2xl font-semibold text-brand-navy sm:text-3xl">Shop by who you are</h2>
        <p className="mt-3 text-brand-slate">Source around the way the network is built, deployed, and supported.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item, index) => (
          <article
            key={item.title}
            data-reveal
            className="group flex h-full flex-col rounded-3xl border border-brand-border/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
            <p className="mt-3 text-sm text-brand-slate">{item.description}</p>
            <Link
              href={item.href}
              className="focus-ring mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-red hover:gap-2 hover:text-brand-red-dark"
            >
              {item.cta} <ChevronRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
