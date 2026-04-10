import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredBrands } from "@/lib/content";
import { SectionShell } from "./section-shell";

export function FeaturedBrands() {
  return (
    <SectionShell className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#101b34_55%,#0d1527_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_34%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px] opacity-35" />
      <div data-reveal className="relative">
        <p className="technical-label border-white/15 bg-white/5 text-white/70">Brand authority</p>
        <h2 className="mt-6 max-w-2xl text-2xl font-semibold sm:text-3xl">Authorized brands across access, core, fiber, surveillance, and power</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Manufacturer-backed sourcing for network, wireless, power, fiber, voice, and security deployments.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 lg:gap-5">
          {featuredBrands.map((brand, index) => (
            <span
              key={brand}
              data-reveal
              className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red/80 hover:bg-white/[0.1] hover:text-white"
              style={{ transitionDelay: `${120 + index * 35}ms` }}
            >
              {brand}
            </span>
          ))}
          <Link
            href="https://multilink.us/brands/"
            data-reveal
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-[0_14px_34px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:text-brand-red"
            style={{ transitionDelay: "180ms" }}
          >
            View all brands
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
