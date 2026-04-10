import Link from "next/link";
import { company, footerLinks, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-white py-12">
      <div className="container-wrap grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div data-reveal>
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-brand-slate">B2B network distribution</p>
          <p className="mt-3 text-lg font-semibold text-brand-navy">{company.name}</p>
          <p className="mt-4 max-w-md text-sm text-brand-slate">
            Authorized distributor of network, fiber, surveillance, power, and voice hardware for ISP, enterprise, campus, and
            security deployments.
          </p>
          <p className="mt-4 text-sm text-brand-slate">{company.address}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link href={company.phoneHref} className="focus-ring text-brand-navy hover:text-brand-red">
              {company.phoneDisplay}
            </Link>
            <Link href={`mailto:${company.email}`} className="focus-ring text-brand-red hover:text-brand-red-dark">
              {company.email}
            </Link>
          </div>
        </div>

        <div data-reveal style={{ transitionDelay: "90ms" }}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Company</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="focus-ring text-sm text-brand-slate hover:text-brand-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal style={{ transitionDelay: "160ms" }}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">Connect</h3>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="focus-ring text-sm text-brand-slate hover:text-brand-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div data-reveal className="container-wrap mt-10 border-t border-brand-border pt-5" style={{ transitionDelay: "220ms" }}>
        <p className="text-xs uppercase tracking-[0.18em] text-brand-slate">Authorized sourcing. Practical guidance. Fast US fulfillment.</p>
      </div>
    </footer>
  );
}
