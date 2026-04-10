import Link from "next/link";
import { company, navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/72 backdrop-blur-xl supports-[backdrop-filter]:bg-white/68">
      <div className="container-wrap flex h-[4.75rem] items-center justify-between gap-8">
        <Link href="/" className="focus-ring flex min-w-0 flex-col">
          <span className="text-[0.63rem] font-medium uppercase tracking-[0.22em] text-brand-slate">B2B Network Distribution</span>
          <span className="truncate text-[1.08rem] font-semibold tracking-[-0.03em] text-brand-navy lg:text-[1.16rem]">{company.headerName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-[0.95rem] text-brand-slate lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="focus-ring relative pb-1.5 hover:text-brand-navy after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="focus-ring inline-flex items-center rounded-xl2 bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(81,121,187,0.24)] hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_20px_36px_rgba(61,95,152,0.28)]"
        >
          Shop Products
        </Link>
      </div>
    </header>
  );
}
