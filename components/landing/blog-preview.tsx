import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/content";
import { SectionShell } from "./section-shell";

export function BlogPreview() {
  return (
    <SectionShell className="bg-white">
      <div data-reveal>
        <p className="technical-label">Latest insights</p>
        <h2 className="mt-6 text-2xl font-semibold text-brand-navy sm:text-3xl">From our expert team</h2>
        <p className="mt-3 text-brand-slate">Deployment-focused guides for operators, IT teams, and integrators evaluating real hardware decisions.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article
            key={post.title}
            data-reveal
            className="group flex h-full flex-col rounded-3xl border border-brand-border/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-light text-brand-navy ring-1 ring-brand-border/80">
              <Newspaper className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-brand-navy">{post.title}</h3>
            <Link
              href={post.href}
              className="focus-ring mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-brand-red hover:gap-2 hover:text-brand-red-dark"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
