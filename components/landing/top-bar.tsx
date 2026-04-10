import Link from "next/link";
import { company } from "@/lib/content";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-[#2a3687]">
      <div className="container-wrap flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/70 sm:justify-between">
        <span>Authorized US Distributor</span>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
          <span>ISP, WISP, Campus, Security Supply</span>
          <Link href={company.phoneHref} className="focus-ring text-white hover:text-white/80">
            {company.phoneDisplay}
          </Link>
          <Link href={`mailto:${company.email}`} className="focus-ring text-white hover:text-white/80">
            {company.email}
          </Link>
        </div>
      </div>
    </div>
  );
}
