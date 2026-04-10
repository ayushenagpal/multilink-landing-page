"use client";

import { useEffect, useRef, type ReactNode } from "react";

type LandingMotionFrameProps = {
  children: ReactNode;
};

export function LandingMotionFrame({ children }: LandingMotionFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    let rafId = 0;

    const updateMetrics = () => {
      rafId = 0;

      const viewportHeight = window.innerHeight || 1;
      const maxScroll = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const scrollProgress = window.scrollY / maxScroll;

      frame.style.setProperty("--page-progress", scrollProgress.toFixed(4));

      const hero = frame.querySelector<HTMLElement>("[data-hero]");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1.2);
        frame.style.setProperty("--hero-progress", progress.toFixed(4));
      }

      frame.querySelectorAll<HTMLElement>("[data-section-depth]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
        const drift = Math.max(Math.min(centerOffset / viewportHeight, 1), -1);
        section.style.setProperty("--section-drift", drift.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateMetrics);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    frame.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => observer.observe(element));

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div ref={frameRef} className="landing-motion-frame">{children}</div>;
}
