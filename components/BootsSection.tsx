"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type BootsSectionProps = {
  title: string;
  intro: string;
  bullets: readonly string[];
  imageSrc: string;
  imageAlt?: string;
};

export default function BootsSection({
  title,
  intro,
  bullets,
  imageSrc,
  imageAlt = "Americas coverage heat map",
}: BootsSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Once visible, no need to observe further
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
    <section
      ref={containerRef}
      className="grid lg:grid-cols-2 gap-8 items-start"
    >
      <div
        className={
          `card p-6 bg-white/90 motion-safe:transition-all motion-safe:duration-700 ` +
          (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
        }
        style={{ transitionDelay: inView ? "400ms" : undefined }}
      >
        <h2 className="text-2xl font-semibold text-brand-blue tracking-tight">
          {title}
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-brand-blue to-brand-silver rounded mt-2" />
        <p className="mt-4 text-gray-700">{intro}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 list-none p-0 text-gray-800">
          {bullets.map((b, idx) => (
            <li
              key={idx}
              className={
                `flex items-start gap-3 motion-safe:transition-all motion-safe:duration-700 ` +
                (inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3")
              }
              style={{
                transitionDelay: inView ? `${600 + idx * 120}ms` : undefined,
              }}
            >
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 8.5L2.25 6.25L1.5 7L4.5 10L10.5 4L9.75 3.25L4.5 8.5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          `w-full h-full relative motion-safe:transition-all motion-safe:duration-700 ` +
          (inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")
        }
        style={{ transitionDelay: inView ? "600ms" : undefined }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg border border-brand-silver/40"
          priority={false}
        />
      </div>
    </section>
  );
}
