import { trustStats } from "@/lib/content";

export function TrustStats() {
  return (
    <section className="relative z-10 border-b border-brand-border bg-transparent px-0 py-0 lg:-mt-14">
      <div className="container-wrap">
        <div
          data-reveal
          className="grid overflow-hidden rounded-3xl border border-brand-border/80 bg-white/92 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStats.map((item, index) => (
            <div
              key={item.label}
              className="px-6 py-8 text-center sm:px-8 sm:text-left lg:py-10 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-brand-border/80 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+3)]:border-r lg:[&:not(:last-child)]:border-b-0"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <p className="text-4xl font-semibold leading-none tracking-[-0.05em] text-brand-navy sm:text-5xl">{item.value}</p>
              <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-brand-slate [font-family:var(--font-technical),monospace]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
