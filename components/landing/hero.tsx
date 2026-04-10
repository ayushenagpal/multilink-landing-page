import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { company, heroTrust, popularPaths } from "@/lib/content";

export function Hero() {
  return (
    <section
      data-hero
      className="relative overflow-hidden border-b border-brand-border bg-[linear-gradient(180deg,#ffffff_0%,#f5f7fb_52%,#edf2f7_100%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:36px_36px] opacity-60"
        style={{ transform: "translate3d(0, calc(var(--hero-progress, 0) * 30px), 0)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.98),rgba(248,250,252,0.9)_28%,rgba(248,250,252,0.36)_48%,transparent_68%)]"
        style={{ transform: "scale(calc(1 + (var(--hero-progress, 0) * 0.05)))" }}
      />
      <div
        className="pointer-events-none absolute -left-12 top-12 h-80 w-80 rounded-full bg-brand-red/12 blur-3xl"
        style={{ transform: "translate3d(calc(var(--hero-progress, 0) * 18px), calc(var(--hero-progress, 0) * 44px), 0)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] bg-[linear-gradient(140deg,rgba(255,255,255,0)_0%,rgba(15,23,42,0.04)_58%,rgba(15,23,42,0.08)_100%)] lg:block"
        style={{ transform: "translate3d(0, calc(var(--hero-progress, 0) * -36px), 0)" }}
      />

      <div className="container-wrap relative grid min-h-[calc(100svh-7.75rem)] gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-14 lg:py-20">
        <div
          data-reveal
          className="max-w-3xl lg:pr-6"
          style={{ "--reveal-shift": "calc(var(--hero-progress, 0) * -24px)", transitionDelay: "80ms" } as CSSProperties}
        >
          <p className="technical-label border-brand-border/70 bg-white/85 text-brand-navy">
            {company.name} | Authorized US Distribution
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-brand-navy sm:text-6xl lg:text-[4.75rem]">
            B2B network hardware for ISP and infrastructure teams.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-slate sm:text-xl">
            {company.name} helps WISPs, ISPs, enterprises, schools, and integrators source authorized routing, wireless, fiber,
            surveillance, power, and voice hardware with fast Cincinnati fulfillment and practical technical support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="focus-ring inline-flex items-center gap-2 rounded-xl2 bg-brand-red px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(81,121,187,0.24)] hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_24px_44px_rgba(61,95,152,0.3)]"
            >
              Explore Product Lines
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://multilink.us/contact-us/"
              className="focus-ring inline-flex items-center rounded-xl2 border border-brand-border/80 bg-white/92 px-6 py-4 text-sm font-semibold text-brand-navy shadow-[0_12px_26px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-brand-red/40 hover:text-brand-red hover:shadow-[0_18px_36px_rgba(15,23,42,0.1)]"
            >
              Request Project Pricing
            </Link>
          </div>
          <Link href="https://multilink.us/shop-by-brand/" className="focus-ring mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2 hover:text-brand-red-dark">
            Browse authorized brands <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <aside
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/92 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl"
          style={{ "--reveal-shift": "calc(var(--hero-progress, 0) * 26px)", transitionDelay: "180ms" } as CSSProperties}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent" />
          <p className="technical-label border-brand-red/15 bg-brand-light/90">Buyer support</p>
          <h2 className="mt-5 text-xl font-semibold text-brand-navy">Why teams source through {company.name}</h2>
          <p className="mt-2.5 text-sm text-brand-slate">Built for quoting, stocking, and supporting real infrastructure deployments.</p>
          <ul className="mt-5 space-y-4">
            {heroTrust.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-brand-slate">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-brand-border/80 pt-5">
            <h3 className="text-sm font-semibold text-brand-navy">Popular product paths</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {popularPaths.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="focus-ring flex items-center justify-between rounded-2xl border border-brand-border/80 bg-white/90 px-4 py-3 text-sm font-medium text-brand-slate shadow-[0_8px_20px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:border-brand-red/30 hover:text-brand-navy"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-brand-red" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
