import Link from "next/link";
import { company } from "@/lib/content";
import { SectionShell } from "./section-shell";

export function ConsultationCTA() {
  return (
    <SectionShell className="py-10 sm:py-12 lg:py-14 xl:py-16">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-brand-border/70 bg-[linear-gradient(135deg,#0f172a_0%,#16213a_62%,#1a1a2e_100%)] p-7 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-9 lg:p-10 xl:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(81,121,187,0.18),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px] opacity-35" />
        <div className="pointer-events-none absolute inset-x-[14%] bottom-0 h-24 rounded-full bg-brand-red/15 blur-3xl" />
        <div className="relative">
          <p className="technical-label border-white/10 bg-white/5 text-white/70">Consultative buying support</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[2.65rem]">
            Need quote help or a second set of eyes on the hardware list?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">
            Tell Multilink what you are building and we can help with BOM direction, alternates, project pricing, and product fit for network, fiber, security, power, and voice deployments.
          </p>
          <div className="relative mt-7 flex flex-wrap gap-4 lg:mt-8">
            <div className="pointer-events-none absolute -left-6 top-1/2 h-20 w-56 -translate-y-1/2 rounded-full bg-brand-red/20 blur-3xl" />
            <Link
              href="https://multilink.us/contact-us/"
              className="focus-ring relative inline-flex items-center rounded-xl2 bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(81,121,187,0.24)] hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_24px_44px_rgba(61,95,152,0.3)]"
            >
              Request Project Pricing
            </Link>
            <Link
              href={company.phoneHref}
              className="focus-ring relative inline-flex items-center rounded-xl2 border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
