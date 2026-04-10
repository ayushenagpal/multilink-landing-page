import Link from "next/link";
import { company } from "@/lib/content";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-brand-navy">
      <div className="container-wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/65 sm:justify-between">
        <span>Authorized US Distributor</span>
        <span>ISP, WISP, Campus, Security Supply</span>
        <Link href={company.phoneHref} className="focus-ring text-white hover:text-white/80">
          {company.phoneDisplay}
        </Link>
      </div>
    </div>
  );
}
