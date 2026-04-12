import { trustStats } from "@/lib/content";

export function TrustStats() {
  return (
    <section className="relative z-10 border-b border-brand-border bg-[linear-gradient(180deg,rgba(241,245,249,0.86)_0%,#f8fafc_55%,#ffffff_100%)] px-0 py-8 sm:py-10 lg:py-12">
      <div className="container-wrap">
        <div
          data-reveal
          className="relative grid overflow-hidden rounded-[2rem] border border-brand-border/80 bg-white/94 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(81,121,187,0.28),transparent)]" />
          {trustStats.map((item, index) => (
            <div
              key={item.label}
              className="relative px-6 py-8 text-center sm:px-8 sm:py-9 sm:text-left lg:px-10 lg:py-10 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-brand-border/80 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(-n+3)]:border-r lg:[&:not(:last-child)]:border-b-0"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="mx-auto mb-5 h-px w-10 bg-brand-red/35 sm:mx-0" />
              <p className="text-4xl font-semibold leading-[0.88] tracking-[-0.06em] text-brand-navy sm:text-[3.25rem]">{item.value}</p>
              <p className="mt-4 max-w-[13rem] text-center text-[0.72rem] font-medium uppercase tracking-[0.22em] text-brand-slate [font-family:var(--font-technical),monospace] sm:max-w-[12rem] sm:text-left">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
