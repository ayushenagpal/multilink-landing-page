import { Boxes, Building2, DollarSign, Headset, ShieldCheck, Truck } from "lucide-react";
import { SectionShell } from "./section-shell";
import { whyMultilink } from "@/lib/content";

const cardIcons = [ShieldCheck, DollarSign, Truck, Headset, Boxes, Building2];

export function WhyMultilink() {
  return (
    <SectionShell className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_20%)]">
      <div data-reveal>
        <p className="technical-label">Trust & credibility</p>
        <h2 className="mt-5 text-2xl font-semibold text-brand-navy sm:text-3xl">Why Multilink?</h2>
        <p className="mt-3 text-brand-slate lg:whitespace-nowrap">We are built around real quoting, shipping, and deployment support, not a generic catalog experience.</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {whyMultilink.map((item, index) => {
          const Icon = cardIcons[index];

          return (
            <article
              key={item.title}
              data-reveal
              className="group flex h-full flex-col rounded-3xl border border-brand-border/80 border-t-[3px] border-t-brand-red bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-7"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red ring-1 ring-brand-red/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{item.text}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
