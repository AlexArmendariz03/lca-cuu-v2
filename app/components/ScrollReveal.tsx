"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-aos]"));
    if (elements.length === 0) return;

    // Remember each element's entrance stagger so it can be restored after an exit,
    // where the delay is dropped to 0 so groups fade out together instead of trailing.
    const enterDelays = new Map<HTMLElement, string>();
    elements.forEach((element) => {
      const delay = element.getAttribute("data-aos-delay");
      enterDelays.set(element, delay ? `${delay}ms` : "0ms");
      element.style.transitionDelay = enterDelays.get(element) ?? "0ms";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.style.transitionDelay = enterDelays.get(target) ?? "0ms";
            target.classList.add("aos-animate");
          } else {
            target.style.transitionDelay = "0ms";
            target.classList.remove("aos-animate");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
