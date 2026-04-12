import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-white/72 backdrop-blur-xl supports-[backdrop-filter]:bg-white/68">
      <div className="container-wrap flex h-[4.75rem] items-center justify-between gap-8">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-3">
          <Image src="/multilink-logo.png" alt={company.legalName} width={148} height={74} className="h-10 w-auto shrink-0 object-contain sm:h-11" priority />
          <div className="min-w-0">
            <span className="block text-[0.63rem] font-medium uppercase tracking-[0.22em] text-brand-slate">B2B Network Distribution</span>
            <span className="block truncate text-[1.02rem] font-semibold tracking-[-0.03em] text-brand-navy lg:text-[1.1rem]">{company.legalName}</span>
          </div>
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
          className="focus-ring inline-flex min-w-[7.5rem] items-center justify-center rounded-xl2 bg-brand-red px-3 py-2.5 text-center text-[0.76rem] font-semibold leading-none text-white shadow-[0_14px_28px_rgba(81,121,187,0.24)] hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_20px_36px_rgba(61,95,152,0.28)] sm:min-w-0 sm:px-5 sm:text-sm"
        >
          Shop Products
        </Link>
      </div>
    </header>
  );
}
