"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type WelcomeSectionProps = {
  title: string;
  p1: string;
  p2: string;
  capabilitiesTitle: string;
  capabilities: readonly string[];
  standardsTitle: string;
  standards: readonly string[];
};

export default function WelcomeSection({
  title,
  p1,
  p2,
  capabilitiesTitle,
  capabilities,
  standardsTitle,
  standards,
}: WelcomeSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mt-2" ref={ref}>
      <div
        className={
          "card p-6 bg-white/90 motion-safe:transition-all motion-safe:duration-700 " +
          (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
        }
        style={{ transitionDelay: inView ? "800ms" : undefined }}
      >
        <h2 className="text-2xl font-semibold text-brand-blue">{title}</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-brand-silver rounded mt-2" />
        <div className="mt-3 space-y-3 text-gray-700">
          <p>{p1}</p>
          <p>{p2}</p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-brand-blue">
              {capabilitiesTitle}
            </h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-1">
              {capabilities.map((item, idx) => (
                <li
                  key={item}
                  className={
                    "flex items-start gap-2 motion-safe:transition-all motion-safe:duration-700 " +
                    (inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2")
                  }
                  style={{
                    transitionDelay: inView
                      ? `${1000 + idx * 120}ms`
                      : undefined,
                  }}
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-blue">
              {standardsTitle}
            </h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-1">
              {standards.map((item, idx) => (
                <li
                  key={item}
                  className={
                    "flex items-start gap-2 motion-safe:transition-all motion-safe:duration-700 " +
                    (inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2")
                  }
                  style={{
                    transitionDelay: inView
                      ? `${1050 + idx * 120}ms`
                      : undefined,
                  }}
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA intentionally removed per request */}
      </div>
    </section>
  );
}
