import { BlogPreview } from "@/components/landing/blog-preview";
import { ConsultationCTA } from "@/components/landing/consultation-cta";
import { FeaturedBrands } from "@/components/landing/featured-brands";
import { Hero } from "@/components/landing/hero";
import { LandingMotionFrame } from "@/components/landing/landing-motion-frame";
import { ShoppingPaths } from "@/components/landing/shopping-paths";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { TopBar } from "@/components/landing/top-bar";
import { TrustStats } from "@/components/landing/trust-stats";
import { UseCases } from "@/components/landing/use-cases";
import { WhyMultilink } from "@/components/landing/why-multilink";

export default function HomePage() {
  return (
    <LandingMotionFrame>
      <main>
        <TopBar />
        <SiteHeader />
        <Hero />
        <TrustStats />
        <UseCases />
        <WhyMultilink />
        <FeaturedBrands />
        <ShoppingPaths />
        <BlogPreview />
        <ConsultationCTA />
        <SiteFooter />
      </main>
    </LandingMotionFrame>
  );
}
