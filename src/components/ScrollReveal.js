"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives every scroll animation on the page. Markup stays server-rendered —
 * elements carry `data-reveal` (optionally `data-reveal="left|right|scale|grow"`),
 * and a `data-reveal-group` parent staggers its direct children.
 *
 * An IntersectionObserver is used only as a cheap "something moved, re-check"
 * trigger; the actual decision ("is this at/above the fold yet?") is a
 * geometry check, so nothing is left invisible even on a fast flick to the
 * bottom of the page.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));

    // Sticky-header condense: 1px sentinel at the very top of the document.
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
      "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.prepend(sentinel);
    const headerObs = new IntersectionObserver(
      ([e]) => root.classList.toggle("is-scrolled", !e.isIntersecting),
      { threshold: 0 }
    );
    headerObs.observe(sentinel);

    const cleanupHeader = () => {
      headerObs.disconnect();
      sentinel.remove();
    };

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-revealed"));
      return cleanupHeader;
    }

    // Stagger delays for grouped children.
    document.querySelectorAll("[data-reveal-group]").forEach((group) => {
      group.querySelectorAll(":scope > [data-reveal]").forEach((child, i) => {
        child.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
      });
    });

    const pending = new Set(nodes);
    let scheduled = false;

    const flush = () => {
      scheduled = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (const el of pending) {
        if (el.getBoundingClientRect().top < vh * 0.92) {
          el.classList.add("is-revealed");
          pending.delete(el);
          io.unobserve(el);
        }
      }
      if (pending.size === 0) {
        io.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(flush);
    };

    const io = new IntersectionObserver(schedule, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0,
    });
    pending.forEach((el) => io.observe(el));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    flush(); // reveal whatever is already above the fold

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cleanupHeader();
    };
  }, [pathname]);

  return null;
}
