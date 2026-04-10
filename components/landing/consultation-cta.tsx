import Link from "next/link";
import { company } from "@/lib/content";
import { SectionShell } from "./section-shell";

export function ConsultationCTA() {
  return (
    <SectionShell>
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-brand-border/70 bg-[linear-gradient(135deg,#0f172a_0%,#16213a_62%,#1a1a2e_100%)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(81,121,187,0.18),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px] opacity-35" />
        <div className="relative">
          <p className="technical-label border-white/10 bg-white/5 text-white/70">Consultative buying support</p>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Need help building the right hardware stack?</h2>
          <p className="mt-5 max-w-3xl text-base text-slate-200">
            Tell us about the deployment and we’ll help you narrow the right products for WISP, enterprise, campus, security, fiber,
            and voice environments.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <div className="pointer-events-none absolute -left-6 top-1/2 h-20 w-56 -translate-y-1/2 rounded-full bg-brand-red/20 blur-3xl" />
            <Link
              href="https://multilink.us/contact-us/"
              className="focus-ring relative inline-flex items-center rounded-xl2 bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(81,121,187,0.24)] hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_24px_44px_rgba(61,95,152,0.3)]"
            >
              Request Project Guidance
            </Link>
            <Link
              href={company.phoneHref}
              className="focus-ring relative inline-flex items-center rounded-xl2 border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10"
            >
              {company.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
